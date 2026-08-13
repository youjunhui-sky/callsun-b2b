-- Callsun B2B — D1 schema (询盘 + CRM)
-- 部署：wrangler d1 execute callsun-b2b-db --file=./schema.sql

-- 询盘主表
CREATE TABLE IF NOT EXISTS inquiries (
  id            TEXT PRIMARY KEY,           -- inq_<ts>_<rand>
  received_at   TEXT NOT NULL,              -- ISO-8601
  -- 客户信息
  name          TEXT NOT NULL,
  email         TEXT NOT NULL,
  company       TEXT,
  country       TEXT,
  phone         TEXT,
  inquiry_type  TEXT,
  product_model TEXT,
  message       TEXT,
  attachment_name   TEXT,
  attachment_size   INTEGER,
  -- 来源追踪
  utm_source    TEXT, utm_medium TEXT, utm_campaign TEXT, utm_term TEXT, utm_content TEXT,
  referrer      TEXT,
  landing_page  TEXT,
  landing_page_slug TEXT,
  form_source   TEXT,
  ip_country    TEXT,
  user_agent    TEXT,
  -- CRM 字段
  status        TEXT NOT NULL DEFAULT 'new',  -- new/contacting/qualified/quote/won/lost
  owner         TEXT,                         -- 负责人 id（null=未分配）
  duplicate_of  TEXT,                         -- 重复来源询盘 id
  -- 时间戳
  created_at    TEXT NOT NULL,
  updated_at    TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_inquiries_email   ON inquiries(email);
CREATE INDEX IF NOT EXISTS idx_inquiries_status  ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_owner   ON inquiries(owner);
CREATE INDEX IF NOT EXISTS idx_inquiries_received ON inquiries(received_at);

-- 跟进记录（含下次跟进）
CREATE TABLE IF NOT EXISTS followups (
  id           TEXT PRIMARY KEY,
  inquiry_id   TEXT NOT NULL,
  contact_time TEXT,
  content      TEXT,
  quotation    TEXT,
  remark       TEXT,
  next_followup_at TEXT,      -- 下次跟进日期 ISO
  created_by   TEXT,
  created_at   TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_followups_inquiry ON followups(inquiry_id);

-- 用户表（业务员 / 管理员）
CREATE TABLE IF NOT EXISTS users (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE,
  role       TEXT NOT NULL DEFAULT 'sales',   -- admin / sales
  created_at TEXT NOT NULL
);
