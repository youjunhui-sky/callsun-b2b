-- 访客浏览留痕（2026-09-14 游军辉拍板方案②：浏览级 pageview 自持记录）
-- 部署：npx wrangler d1 execute callsun-b2b-db --remote --file=./migrations/0002_pageviews.sql

CREATE TABLE IF NOT EXISTS pageviews (
  id          TEXT PRIMARY KEY,             -- pv_<ts>_<rand>
  ts          TEXT NOT NULL,                -- ISO-8601 访问时间
  path        TEXT NOT NULL,                -- /products/cn720w/ 等
  title       TEXT,                         -- document.title
  referrer    TEXT,                         -- document.referrer（站外来源）
  country     TEXT,                         -- cf-ipcountry（ISO 3166）
  region      TEXT,                         -- cf-region
  city        TEXT,                         -- cf-city
  device      TEXT,                         -- desktop / mobile / tablet（cf-device-type）
  user_agent  TEXT,
  lang        TEXT,                         -- navigator.language
  screen      TEXT,                         -- e.g. 1920x1080
  session_id  TEXT,                         -- 前端生成的匿名会话 id（localStorage，无个人数据）
  utm_source  TEXT, utm_medium TEXT, utm_campaign TEXT
);

CREATE INDEX IF NOT EXISTS idx_pageviews_ts    ON pageviews(ts);
CREATE INDEX IF NOT EXISTS idx_pageviews_path  ON pageviews(path);
CREATE INDEX IF NOT EXISTS idx_pageviews_country ON pageviews(country);
