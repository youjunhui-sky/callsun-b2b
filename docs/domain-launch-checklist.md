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
- [x] API token: 见沙箱 ~/.cloudflare-token.env (Edit zone DNS + Workers, 存 ~/.cloudflare-token.env)

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

```bash
# MX 记录解析正确（网易）
dig +short MX callsunenergy.com
# 期望 hzmx01/02.mxmail.netease.com

# 实际收发验证：请客户发一封测试邮件到主力邮箱 + 从邮箱发一封到外部
# 确认收/发/进垃圾箱状态
```

## 5. 替换全站 workers.dev 地址 → 正式域名

- [ ] `src/data/site.ts`：domain → `https://callsunenergy.com`
- [ ] `public/robots.txt`：Sitemap URL
- [ ] `src/worker.js`：飞书卡片 CRM 链接（2 处：feishuCard + sendDueReminder）→ https://callsunenergy.com/crm/
- [ ] `public/admin/config.yml`：site_url / display_url
- [ ] `astro.config.mjs`：site → https://callsunenergy.com
- 搜 workers.dev 全局：`grep -rn "workers.dev" src/ public/ --include="*.astro" --include="*.ts" --include="*.js" --include="*.yml" --include="*.txt"`

## 6. 重新构建 + 部署

```bash
cd /root/.openclaw/workspace/projects/callsun-b2b
set -a; source ~/.cloudflare-token.env; set +a
pnpm build
nohup npx wrangler deploy > /tmp/deploy-domain.log 2>&1 &
```

## 7. 收尾

- [ ] 验证 https://callsunenergy.com 全站页面 + /crm/ + /contact/ 表单 + 飞书通知
- [ ] workers.dev 保留（老链接仍可访问，301 可选）
- [ ] 向客户确认邮箱测试结果
- [ ] 更新 PROJECT-MEMORY / MEMORY.md

## 注意事项

- zone active 前不要改 worker 域名绑定（会失败）
- 改 site.ts 域名后 sitemap 自动更新（astro sitemap 集成）
- 域名切换后 Turnstile 白名单要加 callsunenergy.com（Turnstile 后台 → 域名列表）
- GTM/GA4 若已接入，正式域名是最终统计域名，等域名稳定后再接
