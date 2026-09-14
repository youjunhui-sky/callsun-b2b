# Google Search Console 提交指南（给游总的操作卡）

## 背景
DE/ES 新页面（44 个）+ 今日全站结构化数据已就绪。把 sitemap 提交给 Google 可加速收录。

## 操作步骤（约 10 分钟，需 Google 账号）

1. **打开 GSC**：https://search.google.com/search-console
2. **添加资源**：选「网址前缀」→ 输入 `https://callsunenergy.com` → 继续
3. **所有权验证**（三选一，推荐 A）：
   - A. **HTML 文件**：下载 googleXXXX.html → 发到群里或发我 → 我放到网站根目录部署 → 回 GSC 点「验证」
   - B. **HTML 标签**：复制 meta 标签发我 → 我加到全站 <head> → 部署后回 GSC 验证
   - C. **Cloudflare DNS TXT**：复制 TXT 记录 → 到 Cloudflare Dashboard → DNS → 添加记录 → 回 GSC 验证（需要 DNS 权限）
4. **验证通过后提交 sitemap**：左侧菜单「站点地图」→ 输入 `sitemap-index.xml` → 提交
5. **加速抓取（可选）**：顶部搜索框输入具体 URL → 「请求编入索引」（新页面可逐个提交，每天有配额）

## 我这边已就绪的
- ✅ sitemap-index.xml 已自动包含全部 72 页（含 /de/ /es/ 44 个本地化页）
- ✅ robots.txt 已声明 sitemap 位置
- ✅ hreflang 三语标记全站就位（GSC 会识别语言版本对应关系）
- ✅ FAQPage + Product 结构化数据已上线（验证通过后 GSC「增强功能」报告会开始显示）

## 验证后能看到什么
- 「网页」报告：哪些页面被收录、被排除的原因
- 「增强功能」：FAQ 富摘要/Product 结构化数据识别状态
- 「效果」：搜索词、展示次数、点击率（数据延迟 2-3 天）
