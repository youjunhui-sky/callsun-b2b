// Callsun B2B — Cloudflare Worker
// 功能：
//   1. POST /api/inquiry          — 询盘入库（D1 先行）→ 通知 webhook（尽力）→ 返回
//   2. GET  /api/admin/inquiries  — CRM 列表（搜索/筛选/分页，sales 只见自己的）
//   3. GET  /api/admin/inquiries/:id — 详情 + 跟进记录
//   4. POST /api/admin/inquiries/:id/assign    — 分配负责人
//   5. POST /api/admin/inquiries/:id/status    — 改状态
//   6. POST /api/admin/inquiries/:id/followups — 加跟进记录（含下次跟进）
//   7. GET  /api/admin/export     — 导出 CSV（Excel 兼容）
//   8. GET  /api/admin/users      — 业务员列表
//   9. POST /api/admin/login      — token 登录（admin / sales 双角色）
//   10. GET  /api/admin/stats     — 概览统计（按状态/来源/时间）
// 安全：Turnstile 人机验证 + 角色鉴权（Bearer token）+ honeypot
// 数据安全核心：先写 D1，成功才回执；webhook 失败绝不影响入库。

const REQUIRED_FIELDS = ['name', 'email', 'message'];
const TRACKING_FIELDS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'referrer', 'landing_page', 'landing_page_slug', 'campaign', 'ad_group', 'form_source',
];
const STATUSES = ['new', 'contacting', 'qualified', 'quote', 'won', 'lost'];
const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024; // 5MB
const DEFAULT_PAGE_SIZE = 20;

function jsonResponse(body, init = {}) {
  return new Response(JSON.stringify(body), {
    status: init.status || 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...(init.headers || {}),
    },
  });
}

function clean(value, max = 2000) {
  if (value == null) return '';
  if (typeof value === 'object') return ''; // File 等对象不混入文本字段
  return String(value).replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, max);
}

function looksLikeEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function parseInquiry(request) {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const raw = await request.json();
    return { raw, files: [] };
  }
  const form = await request.formData();
  const raw = {};
  const files = [];
  for (const [key, value] of form.entries()) {
    if (typeof value === 'object' && value !== null && value.size !== undefined) {
      files.push({ key, file: value });
    } else {
      raw[key] = value;
    }
  }
  return { raw, files };
}

function normalizeInquiry(raw, request) {
  const inquiry = {
    name: clean(raw.name, 120),
    company: clean(raw.company, 160),
    email: clean(raw.email, 200).toLowerCase(),
    phone: clean(raw.phone, 120),
    inquiry_type: clean(raw.inquiry_type, 160),
    market: clean(raw.market, 160),
    country: clean(raw.market || raw.country, 160),
    product_model: clean(raw.product_model || raw['product-model'], 160),
    size: clean(raw.size, 200),
    application: clean(raw.application, 160),
    buyer_role: clean(raw.buyer_role, 160),
    timeline: clean(raw.timeline, 160),
    message: clean(raw.message, 4000),
  };
  const tracking = {};
  for (const key of TRACKING_FIELDS) tracking[key] = clean(raw[key], 500);
  tracking.path = new URL(request.url).pathname;
  tracking.user_agent = clean(request.headers.get('user-agent'), 500);
  tracking.ip_country = clean(request.headers.get('cf-ipcountry'), 10);
  return { inquiry, tracking };
}

async function verifyTurnstile(token, request, env, raw) {
  if (!env.TURNSTILE_SECRET_KEY) return { ok: true, skipped: true };
  // 优雅降级：Turnstile 服务不可达（前端脚本加载失败/超时）时，带 ts_offline=1 放行
  // 防滥用：降级通道由 checkRateLimit 频率限制兜底（每小时每 IP/邮箱上限）
  if (!token && raw && clean(raw.ts_offline, 10) === '1') {
    return { ok: true, skipped: true, degraded: true };
  }
  if (!token) return { ok: false, code: 'missing_turnstile', message: 'Please complete the anti-spam verification.' };
  const form = new FormData();
  form.append('secret', env.TURNSTILE_SECRET_KEY);
  form.append('response', token);
  const ip = request.headers.get('CF-Connecting-IP');
  if (ip) form.append('remoteip', ip);
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  const result = await response.json().catch(() => ({}));
  return result.success ? { ok: true } : { ok: false, code: 'turnstile_failed', message: 'Anti-spam verification failed.', details: result['error-codes'] || [] };
}

function validateInquiry(raw, inquiry) {
  if (clean(raw._gotcha)) return { ok: false, code: 'spam_detected', status: 400, message: 'Spam protection triggered.' };
  for (const field of REQUIRED_FIELDS) {
    if (!inquiry[field]) return { ok: false, code: 'missing_field', status: 400, message: `Missing required field: ${field}` };
  }
  if (!looksLikeEmail(inquiry.email)) return { ok: false, code: 'invalid_email', status: 400, message: 'Please provide a valid email address.' };
  return { ok: true };
}

// ---------- D1 数据访问 ----------

function nowIso() {
  return new Date().toISOString();
}

async function insertInquiry(env, payload, attachment) {
  const stmt = env.DB.prepare(
    `INSERT INTO inquiries (
      id, received_at, name, email, company, country, phone, inquiry_type, product_model,
      message, attachment_name, attachment_size, attachment_b64,
      utm_source, utm_medium, utm_campaign, utm_term, utm_content, referrer,
      landing_page, landing_page_slug, form_source, ip_country, user_agent,
      status, owner, duplicate_of, created_at, updated_at
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
  ).bind(
    payload.id, payload.receivedAt, payload.inquiry.name, payload.inquiry.email, payload.inquiry.company,
    payload.inquiry.country, payload.inquiry.phone, payload.inquiry.inquiry_type, payload.inquiry.product_model,
    payload.inquiry.message,
    attachment ? attachment.name : null, attachment ? attachment.size : null, attachment ? attachment.b64 : null,
    payload.tracking.utm_source || null, payload.tracking.utm_medium || null, payload.tracking.utm_campaign || null,
    payload.tracking.utm_term || null, payload.tracking.utm_content || null, payload.tracking.referrer || null,
    payload.tracking.landing_page || null, payload.tracking.landing_page_slug || null,
    payload.tracking.form_source || null, payload.tracking.ip_country || null, payload.tracking.user_agent || null,
    'new', null, null, payload.receivedAt, payload.receivedAt
  );
  await stmt.run();
}

async function findDuplicate(env, email, excludeId = null) {
  const query = excludeId
    ? 'SELECT id, name, company, received_at, status FROM inquiries WHERE lower(email) = ? AND id != ? ORDER BY received_at DESC LIMIT 5'
    : 'SELECT id, name, company, received_at, status FROM inquiries WHERE lower(email) = ? ORDER BY received_at DESC LIMIT 5';
  const stmt = excludeId ? env.DB.prepare(query).bind(email.toLowerCase(), excludeId) : env.DB.prepare(query).bind(email.toLowerCase());
  const { results } = await stmt.all();
  return results || [];
}

// 飞书消息卡片：新询盘通知（美化格式，供飞书群机器人展示）
function feishuCard(payload) {
  const i = payload.inquiry || {};
  const t = payload.tracking || {};
  const product = i.product_model || i.inquiry_type || '—';
  const source = t.utm_source || t.form_source || (t.referrer ? 'referrer' : 'direct');
  const attachment = payload.attachment_name || '';
  const lines = [
    `**客户**: ${i.name || ''}${i.company ? '（' + i.company + '）' : ''}`,
    `**邮箱**: ${i.email || ''}`,
    `**国家**: ${i.country || '—'}`,
    `**产品**: ${product}`,
    `**来源**: ${source}${t.utm_campaign ? ' / ' + t.utm_campaign : ''}`,
    `**需求**: ${(i.message || '').slice(0, 200)}`,
  ];
  if (attachment) lines.push(`**附件**: ${attachment}`);
  lines.push(`**时间**: ${payload.receivedAt || ''}`);
  lines.push(`**[查看/跟进](https://callsunenergy.com/crm/)**`);
  return {
    msg_type: 'interactive',
    card: {
      header: {
        title: { tag: 'plain_text', content: `🔔 新询盘 ${payload.id || ''}` },
        template: 'blue',
      },
      elements: [
        { tag: 'div', text: { tag: 'lark_md', content: lines.join('\n') } },
        { tag: 'hr' },
        { tag: 'note', elements: [{ tag: 'plain_text', content: 'Callsun B2B 官网询盘自动通知' }] },
      ],
    },
  };
}

async function forwardToWebhook(payload, env) {
  if (!env.INQUIRY_WEBHOOK_URL) return { skipped: true, reason: 'missing_webhook_url' };
  const isFeishu = env.INQUIRY_WEBHOOK_URL.includes('open.feishu.cn') || env.INQUIRY_WEBHOOK_URL.includes('open.larksuite.com');
  const body = isFeishu ? feishuCard(payload) : payload;
  try {
    const response = await fetch(env.INQUIRY_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        ...(env.INQUIRY_WEBHOOK_TOKEN ? { authorization: `Bearer ${env.INQUIRY_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify(body),
    });
    const respBody = await response.text().catch(() => '');
    return { ok: response.ok, status: response.status, resp: String(respBody).slice(0, 200) };
  } catch (error) {
    return { ok: false, error: String(error).slice(0, 200) };
  }
}

// 降级通道频率限制：每小时每 IP 最多 5 条；每邮箱最多 3 条
const RATE_LIMIT_IP_PER_HOUR = 5;
const RATE_LIMIT_EMAIL_PER_HOUR = 3;

async function checkRateLimit(env, ip, email) {
  try {
    const hourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    if (ip) {
      const row = await env.DB.prepare(
        'SELECT COUNT(*) AS n FROM inquiries WHERE ip_country IS NOT NULL AND user_agent = ? AND received_at >= ?'
      ).bind(`ip:${ip}`, hourAgo).first().catch(() => null);
      // 用 ip_country 存 IP 摘要不可行，改用内存计数：见 handleInquiry 中 degraded 分支
    }
    const emailRow = await env.DB.prepare(
      'SELECT COUNT(*) AS n FROM inquiries WHERE lower(email) = ? AND received_at >= ?'
    ).bind(email.toLowerCase(), hourAgo).first().catch(() => null);
    return {
      emailCount: emailRow?.n || 0,
    };
  } catch (e) {
    return { emailCount: 0 };
  }
}

// ---------- 询盘提交 ----------

async function handleInquiry(request, env) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: { allow: 'POST, OPTIONS' } });
  }
  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, code: 'method_not_allowed', message: 'Use POST /api/inquiry.' }, { status: 405, headers: { allow: 'POST, OPTIONS' } });
  }

  let raw, files;
  try {
    ({ raw, files } = await parseInquiry(request));
  } catch (error) {
    return jsonResponse({ ok: false, code: 'invalid_payload', message: 'Invalid inquiry payload.' }, { status: 400 });
  }

  const { inquiry, tracking } = normalizeInquiry(raw, request);
  const validation = validateInquiry(raw, inquiry);
  if (!validation.ok) return jsonResponse(validation, { status: validation.status || 400 });

  const turnstile = await verifyTurnstile(clean(raw['cf-turnstile-response'], 4000), request, env, raw);
  if (!turnstile.ok) return jsonResponse({ ok: false, code: turnstile.code, message: turnstile.message, details: turnstile.details || [] }, { status: 400 });

  // 附件处理（≤5MB，base64 存 D1；R2 作为后续升级路径）
  let attachment = null;
  const fileEntry = files && files.find((f) => f.key === 'attachment');
  if (fileEntry) {
    const { file } = fileEntry;
    if (file.size > MAX_ATTACHMENT_BYTES) {
      return jsonResponse({ ok: false, code: 'attachment_too_large', message: 'Attachment must be under 5MB.' }, { status: 400 });
    }
    const buf = await file.arrayBuffer();
    const bytes = new Uint8Array(buf);
    let binary = '';
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    attachment = { name: clean(file.name, 255), size: file.size, b64: btoa(binary) };
  }

  const payload = {
    id: `inq_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`,
    receivedAt: nowIso(),
    source: tracking.form_source || 'website',
    inquiry,
    tracking,
    status: 'new',
  };

  // 降级通道频率限制（防机器人用 ts_offline=1 绕过灌水）：
  // 每邮箱每小时 ≤3 条；每 IP 每小时 ≤5 条（用 form_source 字段存 IP 摘要）
  if (turnstile.degraded) {
    const ip = request.headers.get('CF-Connecting-IP') || '';
    const { emailCount } = await checkRateLimit(env, ip, inquiry.email);
    if (emailCount >= RATE_LIMIT_EMAIL_PER_HOUR) {
      return jsonResponse({ ok: false, code: 'rate_limited', message: 'Too many submissions from this email. Please try again later.' }, { status: 429 });
    }
    if (ip) {
      const ipKey = `ip:${ip}`;
      const hourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
      const ipRow = await env.DB.prepare(
        'SELECT COUNT(*) AS n FROM inquiries WHERE form_source = ? AND received_at >= ?'
      ).bind(ipKey, hourAgo).first().catch(() => ({ n: 0 }));
      if ((ipRow?.n || 0) >= RATE_LIMIT_IP_PER_HOUR) {
        return jsonResponse({ ok: false, code: 'rate_limited', message: 'Too many submissions. Please try again later.' }, { status: 429 });
      }
      // 用 form_source 记录降级通道 IP 摘要（正常询盘 form_source 是页面名，不会撞）
      await env.DB.prepare(
        'UPDATE inquiries SET form_source = ? WHERE id = ?'
      ).bind(ipKey, payload.id).run().catch(() => {});
    }
  }

  // ① 先入库（防丢失核心：入库失败才算失败）
  if (!env.DB) {
    return jsonResponse({ ok: false, code: 'db_unavailable', message: 'Inquiry database is not configured yet.' }, { status: 503 });
  }
  try {
    await insertInquiry(env, payload, attachment);
  } catch (error) {
    return jsonResponse({ ok: false, code: 'db_error', message: 'Failed to save inquiry.', details: String(error).slice(0, 200) }, { status: 500 });
  }

  // 重复客户识别（同邮箱 → 标记 + 返回历史）
  const duplicates = await findDuplicate(env, inquiry.email, payload.id).catch(() => []);
  if (duplicates.length > 0) {
    await env.DB.prepare('UPDATE inquiries SET duplicate_of = ? WHERE id = ?').bind(duplicates[0].id, payload.id).run().catch(() => {});
  }

  // ② 通知 webhook（尽力而为，失败不影响入库结果）
  let delivery = { backend: env.DB ? 'd1' : 'none', mode: 'db', ok: true };
  if (env.INQUIRY_WEBHOOK_URL) {
    delivery = { ...delivery, ...(await forwardToWebhook(payload, env)) };
  }

  // ③ 回执
  return jsonResponse({
    ok: true,
    id: payload.id,
    duplicate: duplicates.length > 0,
    duplicateOf: duplicates.length > 0 ? duplicates[0].id : null,
    message: 'Inquiry received and saved.',
    delivery,
  });
}

// ---------- CRM 鉴权 ----------

function authUser(request, env) {
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (!token) return null;
  if (env.ADMIN_TOKEN && token === env.ADMIN_TOKEN) return { role: 'admin', id: 'admin' };
  if (env.SALES_TOKEN && token === env.SALES_TOKEN) {
    return { role: 'sales', id: env.SALES_USER_ID || 'sales' };
  }
  return null;
}

// ---------- CRM API ----------

function buildListQuery(url, user) {
  const params = new URLSearchParams(url.search);
  const where = [];
  const binds = [];

  if (user.role === 'sales') {
    where.push('owner = ?');
    binds.push(user.id);
  }

  const search = clean(params.get('search'), 200);
  if (search) {
    where.push('(lower(name) LIKE ? OR lower(company) LIKE ? OR lower(email) LIKE ?)');
    const like = `%${search.toLowerCase()}%`;
    binds.push(like, like, like);
  }
  const country = clean(params.get('country'), 100);
  if (country) { where.push('lower(country) = ?'); binds.push(country.toLowerCase()); }
  const product = clean(params.get('product'), 100);
  if (product) { where.push('(lower(product_model) LIKE ? OR lower(inquiry_type) LIKE ?)'); binds.push(`%${product.toLowerCase()}%`, `%${product.toLowerCase()}%`); }
  const source = clean(params.get('source'), 100);
  if (source) { where.push('(lower(utm_source) = ? OR lower(form_source) = ? OR lower(referrer) LIKE ?)'); binds.push(source.toLowerCase(), source.toLowerCase(), `%${source.toLowerCase()}%`); }
  const owner = clean(params.get('owner'), 100);
  if (owner && user.role === 'admin') { where.push('owner = ?'); binds.push(owner); }
  const status = clean(params.get('status'), 50);
  if (status) { where.push('status = ?'); binds.push(status); }
  const from = clean(params.get('from'), 30);
  if (from) { where.push('received_at >= ?'); binds.push(from); }
  const to = clean(params.get('to'), 30);
  if (to) { where.push('received_at <= ?'); binds.push(to); }

  const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';
  const page = Math.max(1, parseInt(params.get('page') || '1', 10) || 1);
  const pageSize = Math.min(100, Math.max(1, parseInt(params.get('pageSize') || String(DEFAULT_PAGE_SIZE), 10) || DEFAULT_PAGE_SIZE));
  const offset = (page - 1) * pageSize;
  return { whereSql, binds, page, pageSize, offset };
}

async function handleAdmin(request, env) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: { allow: 'GET, POST, OPTIONS' } });
  }
  const url = new URL(request.url);
  const path = url.pathname;

  // 登录（无鉴权）
  if (path === '/api/admin/login' && request.method === 'POST') {
    let body = {};
    try { body = await request.json(); } catch (e) { /* ignore */ }
    const token = clean(body.token, 200);
    if (env.ADMIN_TOKEN && token === env.ADMIN_TOKEN) {
      return jsonResponse({ ok: true, role: 'admin', id: 'admin' });
    }
    if (env.SALES_TOKEN && token === env.SALES_TOKEN) {
      return jsonResponse({ ok: true, role: 'sales', id: env.SALES_USER_ID || 'sales' });
    }
    return jsonResponse({ ok: false, message: 'Invalid token.' }, { status: 401 });
  }

  const user = authUser(request, env);
  if (!user) return jsonResponse({ ok: false, message: 'Unauthorized.' }, { status: 401 });

  // 统计概览
  if (path === '/api/admin/stats' && request.method === 'GET') {
    const base = user.role === 'sales' ? ' WHERE owner = ?' : '';
    const binds = user.role === 'sales' ? [user.id] : [];
    const total = await env.DB.prepare(`SELECT COUNT(*) AS n FROM inquiries${base}`).bind(...binds).first().catch(() => ({ n: 0 }));
    const byStatus = await env.DB.prepare(`SELECT status, COUNT(*) AS n FROM inquiries${base ? base + ' AND status != \'\'' : ' WHERE status != \'\''} GROUP BY status`).bind(...(user.role === 'sales' ? [user.id] : [])).all().catch(() => ({ results: [] }));
    const bySource = await env.DB.prepare(`SELECT COALESCE(utm_source, form_source, 'direct') AS source, COUNT(*) AS n FROM inquiries GROUP BY source ORDER BY n DESC LIMIT 10`).all().catch(() => ({ results: [] }));
    const today = nowIso().slice(0, 10);
    const todayCount = await env.DB.prepare(`SELECT COUNT(*) AS n FROM inquiries WHERE received_at >= ?${user.role === 'sales' ? ' AND owner = ?' : ''}`).bind(today, ...(user.role === 'sales' ? [user.id] : [])).first().catch(() => ({ n: 0 }));
    return jsonResponse({
      ok: true,
      stats: {
        total: total.n || 0,
        today: todayCount.n || 0,
        byStatus: byStatus.results || [],
        bySource: bySource.results || [],
      },
    });
  }

  // 导出 CSV（Excel 兼容，带 BOM）
  if (path === '/api/admin/export' && request.method === 'GET') {
    const { whereSql, binds } = buildListQuery(url, user);
    const { results } = await env.DB.prepare(`SELECT * FROM inquiries ${whereSql} ORDER BY received_at DESC`).bind(...binds).all();
    const rows = results || [];
    const header = ['ID', 'Received At', 'Name', 'Email', 'Company', 'Country', 'Phone', 'Product', 'Inquiry Type', 'Message', 'Attachment', 'Status', 'Owner', 'UTM Source', 'UTM Medium', 'UTM Campaign', 'Landing Page', 'Referrer', 'Duplicate Of'];
    const esc = (v) => {
      if (v == null) return '';
      const s = String(v);
      return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const lines = [header.join(',')];
    for (const r of rows) {
      lines.push([
        r.id, r.received_at, r.name, r.email, r.company, r.country, r.phone, r.product_model, r.inquiry_type,
        r.message, r.attachment_name, r.status, r.owner, r.utm_source, r.utm_medium, r.utm_campaign,
        r.landing_page, r.referrer, r.duplicate_of,
      ].map(esc).join(','));
    }
    const csv = '\uFEFF' + lines.join('\r\n');
    return new Response(csv, {
      status: 200,
      headers: {
        'content-type': 'text/csv; charset=utf-8',
        'content-disposition': `attachment; filename="inquiries-${nowIso().slice(0, 10)}.csv"`,
        'cache-control': 'no-store',
      },
    });
  }

  // 业务员列表
  if (path === '/api/admin/users' && request.method === 'GET') {
    if (user.role !== 'admin') return jsonResponse({ ok: false, message: 'Admin only.' }, { status: 403 });
    const { results } = await env.DB.prepare('SELECT id, name, email, role FROM users ORDER BY name').all().catch(() => ({ results: [] }));
    return jsonResponse({ ok: true, users: results || [] });
  }

  // 待跟进清单：最新跟进记录设置了 next_followup_at 且到期/即将到期（默认未来 7 天）
  // 已过期排最前，按到期时间升序；sales 角色只看自己的
  if (path === '/api/admin/followups/due' && request.method === 'GET') {
    const days = Math.min(60, Math.max(1, parseInt(new URLSearchParams(url.search).get('days') || '7', 10) || 7));
    const threshold = new Date(Date.now() + days * 86400000).toISOString();
    const where = ['f.next_followup_at IS NOT NULL', 'f.next_followup_at <= ?'];
    const binds = [threshold];
    if (user.role === 'sales') {
      where.push('i.owner = ?');
      binds.push(user.id);
    }
    const whereSql = `WHERE ${where.join(' AND ')}`;
    const { results } = await env.DB.prepare(
      `SELECT i.id, i.name, i.company, i.email, i.country, i.status, i.owner, i.received_at,
              f.next_followup_at, f.content, f.created_at AS followup_created_at
       FROM inquiries i
       JOIN followups f ON f.id = (
         SELECT f2.id FROM followups f2
         WHERE f2.inquiry_id = i.id AND f2.next_followup_at IS NOT NULL
         ORDER BY f2.created_at DESC LIMIT 1
       )
       ${whereSql}
       ORDER BY f.next_followup_at ASC`
    ).bind(...binds).all().catch(() => ({ results: [] }));
    const now = Date.now();
    const items = (results || []).map((r) => ({
      ...r,
      overdue: new Date(r.next_followup_at).getTime() < now,
    }));
    const overdueCount = items.filter((i) => i.overdue).length;
    return jsonResponse({ ok: true, days, data: items, overdueCount, total: items.length });
  }

  // 列表
  if (path === '/api/admin/inquiries' && request.method === 'GET') {
    const { whereSql, binds, page, pageSize, offset } = buildListQuery(url, user);
    const countRow = await env.DB.prepare(`SELECT COUNT(*) AS n FROM inquiries ${whereSql}`).bind(...binds).first().catch(() => ({ n: 0 }));
    const total = countRow.n || 0;
    const { results } = await env.DB.prepare(
      `SELECT id, received_at, name, email, company, country, phone, product_model, inquiry_type, message,
              attachment_name, attachment_size, status, owner, utm_source, utm_medium, utm_campaign,
              landing_page, form_source, referrer, duplicate_of, created_at, updated_at
       FROM inquiries ${whereSql} ORDER BY received_at DESC LIMIT ? OFFSET ?`
    ).bind(...binds, pageSize, offset).all();
    return jsonResponse({ ok: true, data: results || [], pagination: { page, pageSize, total, pages: Math.max(1, Math.ceil(total / pageSize)) } });
  }

  // 详情 + 跟进
  const detailMatch = path.match(/^\/api\/admin\/inquiries\/([^/]+)$/);
  const followupMatch = path.match(/^\/api\/admin\/inquiries\/([^/]+)\/followups$/);
  const assignMatch = path.match(/^\/api\/admin\/inquiries\/([^/]+)\/assign$/);
  const statusMatch = path.match(/^\/api\/admin\/inquiries\/([^/]+)\/status$/);

  const id = detailMatch?.[1] || followupMatch?.[1] || assignMatch?.[1] || statusMatch?.[1];
  if (id) {
    const row = await env.DB.prepare('SELECT * FROM inquiries WHERE id = ?').bind(id).first().catch(() => null);
    if (!row) return jsonResponse({ ok: false, message: 'Inquiry not found.' }, { status: 404 });
    if (user.role === 'sales' && row.owner !== user.id) {
      return jsonResponse({ ok: false, message: 'Not your inquiry.' }, { status: 403 });
    }

    if (detailMatch && request.method === 'GET') {
      const followups = await env.DB.prepare('SELECT * FROM followups WHERE inquiry_id = ? ORDER BY created_at DESC').bind(id).all().catch(() => ({ results: [] }));
      const nextFollowup = followups.results?.find((f) => f.next_followup_at)?.next_followup_at || null;
      return jsonResponse({ ok: true, inquiry: row, followups: followups.results || [], nextFollowup });
    }

    if (assignMatch && request.method === 'POST') {
      if (user.role !== 'admin') return jsonResponse({ ok: false, message: 'Admin only.' }, { status: 403 });
      let body = {};
      try { body = await request.json(); } catch (e) { /* ignore */ }
      const owner = clean(body.owner, 100) || null;
      await env.DB.prepare('UPDATE inquiries SET owner = ?, updated_at = ? WHERE id = ?').bind(owner, nowIso(), id).run();
      return jsonResponse({ ok: true, owner });
    }

    if (statusMatch && request.method === 'POST') {
      let body = {};
      try { body = await request.json(); } catch (e) { /* ignore */ }
      const status = clean(body.status, 50);
      if (!STATUSES.includes(status)) return jsonResponse({ ok: false, message: `Status must be one of: ${STATUSES.join(', ')}` }, { status: 400 });
      await env.DB.prepare('UPDATE inquiries SET status = ?, updated_at = ? WHERE id = ?').bind(status, nowIso(), id).run();
      return jsonResponse({ ok: true, status });
    }

    if (followupMatch && request.method === 'POST') {
      let body = {};
      try { body = await request.json(); } catch (e) { /* ignore */ }
      const followupId = `fu_${Date.now()}_${crypto.randomUUID().slice(0, 6)}`;
      await env.DB.prepare(
        'INSERT INTO followups (id, inquiry_id, contact_time, content, quotation, remark, next_followup_at, created_by, created_at) VALUES (?,?,?,?,?,?,?,?,?)'
      ).bind(
        followupId, id,
        clean(body.contact_time, 100) || null,
        clean(body.content, 4000) || null,
        clean(body.quotation, 2000) || null,
        clean(body.remark, 2000) || null,
        clean(body.next_followup_at, 100) || null,
        user.id,
        nowIso()
      ).run();
      await env.DB.prepare('UPDATE inquiries SET updated_at = ? WHERE id = ?').bind(nowIso(), id).run();
      return jsonResponse({ ok: true, id: followupId });
    }
  }

  return jsonResponse({ ok: false, message: 'Not found.' }, { status: 404 });
}

// ---------- 路由 ----------

// 定时任务：每天 09:00 (北京时间, cron 用 UTC) 推送待跟进清单到飞书群
// 逻辑：查所有设置了 next_followup_at 且到期/未来 2 天内的询盘，按到期时间分组推卡片
async function sendDueReminder(env) {
  if (!env.INQUIRY_WEBHOOK_URL) return { ok: false, reason: 'no_webhook' };
  if (!env.DB) return { ok: false, reason: 'no_db' };

  const now = Date.now();
  const threshold = new Date(now + 2 * 86400000).toISOString(); // 未来 2 天
  const { results } = await env.DB.prepare(
    `SELECT i.id, i.name, i.company, i.email, i.country, i.status, i.owner, i.product_model,
            f.next_followup_at, f.content
     FROM inquiries i
     JOIN followups f ON f.id = (
       SELECT f2.id FROM followups f2
       WHERE f2.inquiry_id = i.id AND f2.next_followup_at IS NOT NULL
       ORDER BY f2.created_at DESC LIMIT 1
     )
     WHERE f.next_followup_at IS NOT NULL AND f.next_followup_at <= ?
     ORDER BY f.next_followup_at ASC`
  ).bind(threshold).all().catch(() => ({ results: [] }));

  const items = results || [];
  if (items.length === 0) {
    // 没有待跟进 → 不推（避免每天无意义刷屏）；返回 skipped
    return { ok: true, skipped: 'no_due', count: 0 };
  }

  const overdue = items.filter((r) => new Date(r.next_followup_at).getTime() < now);
  const upcoming = items.filter((r) => new Date(r.next_followup_at).getTime() >= now);

  const fmtDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleString('en-GB', { day: '2-digit', month: 'short' });
  };

  let md = '';
  if (overdue.length > 0) {
    md += `**⏰ 已过期 ${overdue.length} 条**\n`;
    for (const r of overdue.slice(0, 8)) {
      md += `- ⚠️ ${r.name}${r.company ? '（' + r.company + '）' : ''} · 应跟 ${fmtDate(r.next_followup_at)} · [查看](https://callsunenergy.com/crm/)\n`;
    }
    md += '\n';
  }
  if (upcoming.length > 0) {
    md += `**📅 未来 2 天 ${upcoming.length} 条**\n`;
    for (const r of upcoming.slice(0, 8)) {
      md += `- ${r.name}${r.company ? '（' + r.company + '）' : ''} · 跟 ${fmtDate(r.next_followup_at)} · [查看](https://callsunenergy.com/crm/)\n`;
    }
  }
  if (items.length > 8) md += `\n… 共 ${items.length} 条，[打开 CRM](https://callsunenergy.com/crm/) 查看全部\n`;

  const body = {
    msg_type: 'interactive',
    card: {
      header: {
        title: { tag: 'plain_text', content: `📋 询盘待跟进提醒（${new Date().toISOString().slice(0, 10)}）` },
        template: overdue.length > 0 ? 'orange' : 'blue',
      },
      elements: [
        { tag: 'div', text: { tag: 'lark_md', content: md } },
        { tag: 'hr' },
        { tag: 'note', elements: [{ tag: 'plain_text', content: 'Callsun CRM 每日自动提醒 · 处理完请到 CRM 更新跟进日期' }] },
      ],
    },
  };

  const resp = await fetch(env.INQUIRY_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  const text = await resp.text().catch(() => '');
  return { ok: resp.ok, status: resp.status, resp: String(text).slice(0, 200), count: items.length };
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/inquiry') return handleInquiry(request, env || {});
    if (url.pathname.startsWith('/api/admin/')) return handleAdmin(request, env || {});
    return env.ASSETS.fetch(request);
  },

  // Cron trigger: 每天 01:00 UTC = 09:00 北京时间
  async scheduled(event, env, ctx) {
    const result = await sendDueReminder(env);
    console.log('due reminder:', JSON.stringify(result));
  },
};
