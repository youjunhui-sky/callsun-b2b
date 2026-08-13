-- Callsun B2B — CRM 初始用户（业务员/管理员）
-- 部署后执行：wrangler d1 execute callsun-b2b-db --file=./seed-users.sql
-- 注意：账号密码走 worker env (ADMIN_TOKEN / SALES_TOKEN)，此表仅存展示信息 + 分配用

INSERT OR IGNORE INTO users (id, name, email, role, created_at) VALUES
  ('sales-1', 'Alice Sales',   'alice@callsunsolar.com',   'sales', datetime('now')),
  ('sales-2', 'Bob Sales',     'bob@callsunsolar.com',     'sales', datetime('now')),
  ('sales-3', 'Carol Sales',   'carol@callsunsolar.com',   'sales', datetime('now')),
  ('admin-1', 'Admin',         'admin@callsunsolar.com',   'admin', datetime('now'));
