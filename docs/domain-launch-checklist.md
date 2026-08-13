# Callsun 域名上线执行清单（callsunenergy.com）

> 触发条件：客户在阿里云把 NS 改为 carla/terin.ns.cloudflare.com 后
> 目标：callsunenergy.com + www 正式上线，替换 workers.dev

## 0. 前置状态（2026-08-11 已确认）

- [x] Cloudflare zone `callsunenergy.com` 已创建（id: 7119fcbc1710162174c197d44cfd80f5）
- [x] DNS 记录已预配置：
  - MX: hzmx01.mxmail.netease.com (prio 5) + hzmx02 (prio 10) — 网易邮箱
  - TXT: SPF (spf.163.com) + DKIM (default._domainkey) + DMARC
  - CNAME: www → callsun-b2b.youjh120608.workers.dev (proxied)
  - A: @ → 192.0.2.1 (占位, proxied)
- [x] API token: 见沙箱 ~/.cloudflare-token.env（2026-08-13 历史清洗后不在仓库保留明文） (Edit zone DNS + Workers, 存 ~/.cloudflare-token.env)

## 1. 检查 NS 是否生效

```bash
dig +short NS callsunenergy.com
# 期望: carla.ns.cloudflare.com / terin.ns.cloudflare.com（而不是 dns17/18.hichina.com）

# 查 zone 状态（active = NS 生效）
curl -s "https://api.cloudflare.com/client/v4/zones?name=callsunenergy.com" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" | python3 -m json.tool
```

NS 没生效时 zone 状态 = pending；生效后 = active。
注：全球传播有延迟，可用 https://dnschecker.org/ 辅助确认；10 分钟~2 小时通常够。

## 2. 绑定 Worker 自定义域名（根域 + www）

方式 A（推荐，API）：
```bash
# 给 worker 加 custom domain 需要先确认 zone active
# Workers Custom Domain 通过 dashboard 或 API:
# dashboard: Workers → callsun-b2b → Settings → Domains → Add Custom Domain
#   添加 callsunenergy.com 和 www.callsunenergy.com
```

方式 B（fallback origin 若用 SaaS 模式，已放弃，走标准 NS 托管）：
- 标准模式：zone active 后，直接在 worker 绑定自定义域名即可，Cloudflare 自动签 SSL

## 3. 验证网站

```bash
curl -sI https://callsunenergy.com | head -5   # 期望 200 + cloudflare 头
curl -sI https://www.callsunenergy.com | head -5
curl -s https://callsunenergy.com/api/inquiry -X POST -H 'content-type: application/json' \
  -d '{"name":"t","email":"t@t.com","company":"x","message":"test"}'  # 期望 turnstile 拦截或入库
```

## 4. 验证邮箱（对客户承诺过）

- [x] MX 记录解析正确（网易）— 2026-08-13 实测：hzmx01/02.mxmail.netease.com ✅
- [x] SPF `v=spf1 include:spf.163.com -all` ✅ / DKIM 公钥有效 ✅ / DMARC `p=quarantine` ✅
- [x] 实际收发验证：客户已配合实测（2026-08-13 东家确认完成）

## 5. 替换全站 workers.dev 地址 → 正式域名

- [x] `src/data/site.ts`：domain → `https://callsunenergy.com`（已改）
- [x] `public/robots.txt`：Sitemap URL（已改，callsunenergy.com/sitemap-index.xml）
- [x] `src/worker.js`：飞书卡片 CRM 链接（4 处）→ https://callsunenergy.com/crm/（已改）
- [x] `public/admin/config.yml`：site_url / display_url（已改）
- [x] `astro.config.mjs`：site → https://callsunenergy.com（已改）
- 搜 workers.dev 全局：`grep -rn "workers.dev" src/ public/ --include="*.astro" --include="*.ts" --include="*.js" --include="*.yml" --include="*.txt"`

## 6. 重新构建 + 部署

```bash
cd /root/.openclaw/workspace/projects/callsun-b2b
set -a; source ~/.cloudflare-token.env; set +a
pnpm build
nohup npx wrangler deploy > /tmp/deploy-domain.log 2>&1 &
```

- [x] **2026-08-13 已执行**：pnpm build (29 pages) + wrangler deploy (Version 4513e579)，线上 / /admin/ /crm/ 全部 200

## 7. 收尾

- [x] 验证 https://callsunenergy.com 全站页面 + /crm/ + /contact/（2026-08-13：17 个页面 + /admin/ + /crm/ 全 200；/api/inquiry Turnstile 拦截正常）
- [ ] 飞书通知链路：待真实询盘触发验证（避免往 D1 写垃圾测试数据）
- [x] workers.dev 保留（wrangler 已设 workers_dev=true；沙箱网络直连不通属已知问题，不影响正式域名）
- [x] 向客户确认邮箱测试结果（2026-08-13 东家确认完成）
- [x] 更新 PROJECT-MEMORY（2026-08-13）

## 注意事项

- zone active 前不要改 worker 域名绑定（会失败）
- 改 site.ts 域名后 sitemap 自动更新（astro sitemap 集成）
- ~~域名切换后 Turnstile 白名单要加 callsunenergy.com（Turnstile 后台 → 域名列表）~~ **2026-08-13 已完成（东家确认）**
- GTM/GA4 若已接入，正式域名是最终统计域名，等域名稳定后再接
