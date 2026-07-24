# Callsun B2B — Project Memory

> Callsun Solar 官网 B2B 重构项目。技术架构： Astro 5 + Tailwind 3 + Cloudflare Workers。
> 主页色已从原 jinko green 改为荧光黄绿 `#C6F600` (callsun-lime)。
> 重建工作按页面逐个进行。

## HEAD / 状态

- `main` HEAD: `37d2156` (2026-07-23) — 进入「一个一个页面重建中」阶段
- 2026-07-24 重大里程碑：三 kit 详情页系统建齐（10.8kW + 7.2kW + 5.4kW）

## 路由 / 页面清单

| 路由 | 状态 | 备注 |
|---|---|---|
| `/` | ✓ | Homepage |
| `/about/` | ✓ | 2026-07-24 调：菜单 ABOUT, Manufacturing 去背景图, Global Supply 顶左叠加文字 |
| `/products/` | ✓ | products L1 |
| `/products/standard-modules/` | ✓ | standard modules L2 |
| `/products/custom-modules/` | ✓ | custom modules L2 |
| `/solutions/` | ✓ | 2026-07-24 改：Grid-Tied 区双卡（5.4kW + 7.2kW 并列） |
| `/solutions/10-8kw-grid-tied/` | ✓ | kit 详情页 |
| `/solutions/7-2kw-grid-tied/` | ✓ | 2026-07-24 新建 |
| `/solutions/5-4kw-off-grid/` | ✓ | 2026-07-24 新建 |
| `/news/` | ✓ | cases |
| `/resources/` | ✓ | Resource Center |
| `/contact/` | ✓ | inquiry form |

## 关键结构

### BaseLayout 用 slot 系统（2026-07-24 立）

`src/layouts/BaseLayout.astro` 写的是 `<slot name="header" />` 和 `<slot name="footer" />`，**不是自动渲染**。每个页面必须手写：

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import Header from '@/components/Header.astro';
import Footer from '@/components/Footer.astro';
---
<BaseLayout title="..." description="..." canonical="...">
  <Header slot="header" />
  <Footer slot="footer" />
  {/* page content */}
</BaseLayout>
```

漏写 → 页面 200 但 **顶栏 nav 和 footer 整块不渲染**。新建页面前先 grep 已有页面的 `slot="header"` 写法。

### Solutions Kit 详情页结构（10.8kW / 7.2kW / 5.4kW）

复用同一模板，5 个 tab + 1 个 inquiry：

```
[Header] [Complete System Kit hero + 9-image gallery]
[Tabs: Description / Specs / Includes / Downloads / FAQ]  ← sticky top-16
[Description: title + intro + hero img + "16 Pcs 450W Solar Panels..." + panel img]
[Specs: panel dl + battery dl + inverter spec groups + scenarios tab + wiring tab]
[Includes: single big image]
[Downloads: PDF cards]
[FAQ: <details> accordion]
[Inquiry CTA: dark rounded card]
```

数据形状 `src/data/kit-{slug}.ts`：
```ts
{
  slug, category, categoryLabel, title, short, tagline, intro,
  keyStats, heroImage, keyFeatures: [{title, body}],
  panel: { title, intro, image, specs, highlights },
  battery: { title, intro, image, specs },
  inverter: { title, intro, image, specGroups: [{name, rows}] },
  applications: [{label, image}],
  wiring: { diagram, instructions },
  includes: { image, items: [...] },
  downloads: [{label, href}],
  faq: [{q, a}],
}
```

### Tailwind 工具类约定

- `callsun-lime` 荧光黄绿 `#C6F600`
- `callsun-limeHi` 略亮版
- `callsun-ink` 深黑/灰（hero/footer）
- `callsun-panel` 中灰
- `callsun-tint` 浅灰 (section 交替底色)
- `callsun-mute` 副文色
- `callsun-line` 边框灰
- `callsun-bg` 浅底

## Solutions Kit 数据（产品实际值）

来源：callsunsolar.com 官网 .js API（product handle） + .json + 规格表逐块校对

| Kit | PV 阵列 | 逆变器 | 电池存储 | Gallery 图源 |
|---|---|---|---|---|
| 10.8kW | 10.8 kW (24 × 450W) | 12 kW | 28 kWh (2 × 14kWh) | `10-8kw-gallery/hero-01..09.jpg` |
| 7.2kW   | 7.2 kW (16 × 450W)  | 10 kW | 14 kWh (1 × 14kWh)  | `7-2kw-gallery/hero-01..09.jpg` |
| 5.4kW   | 5.4 kW (12 × 450W)  | 6.5 kW | 10 kWh (1 × 10kWh) | `5-4kw-gallery/hero-01..09.jpg` |

**5 大产品规格**（jinko token 名 沿用，但项目 brand 主色已改 callsun-lime）：
- CN450W (Pmax 450W, N-Type 16BB, IP68, 25.6%, 1762×1134×30mm, 24.5kg) — 三个 kit 共用同一面板
- 10kW 逆变器 (6500W–10000W 输出, IEC62109-1/2) — 7.2kW 和 5.4kW 用
- 12kW 逆变器 (10000W–12000W, UL1741) — 10.8kW 用
- 14kWh 电池 (51.2V, 280Ah, 14.34kWh, 900×675×200mm, 128.5kg, IP20)
- 10kWh 电池 (51.2V, 200Ah, 10.24kWh, 780×550×200mm, 102.5kg, IP20)

## 关键经验教训

### 1. Shopify product media 顺序，必须用 `.js` API（2026-07-24 立）

`https://callsunsolar.com/products/{handle}.js` → JSON 中 `media[]` 数组（含 `position` + `src`）。

**HTML grep `1600X1600-*.jpg` 拿到的文件名不一定是真实 product media 顺序**：
- JS 渲染页 HTML 里 `1600X1600` 出现顺序 ≠ Shopify 内部 `position` 顺序
- 共享图（多产品共用）会被 HTML 文本带出来，但不属于当前 product
- 必须从 `.js` API 拿准确 position

东家已经为这个踩坑：之前下 7.2kW gallery 漏图，下了一堆共享的图。

### 2. Tab 区块（CSS-only radio 实现，2026-07-24 立）

`Scenarios` (Rooftop/Farm/Backyard) + `Wiring` (Diagram/Instructions) 都用：

```html
<div class="scenarios-tabs">
  <input type="radio" id="scenarios-X-0" class="scenarios-tab-input" checked />
  <input type="radio" id="scenarios-X-1" class="scenarios-tab-input" />
  ...
  <div class="scenarios-tabs-menu">
    <label for="scenarios-X-0">Rooftop</label>
    ...
  </div>
  <div class="scenarios-tab-panel" data-idx="0">...</div>
  ...
</div>

<style>
  .scenarios-tab-input { position: absolute; opacity: 0; ... }
  .scenarios-tab-panel { display: none; }
  .scenarios-tab-input:checked[id$="-0"] ~ .scenarios-tab-panel[data-idx="0"] { display: block; }
</style>
```

**模板复制的隐形 bug**：`label for="scenarios-10-8kw-${i}"` 这行必须改 `scenarios-{actual-slug}`，否则 radio 和 label 匹配不上 → tab 切不动。

### 3. Tailwind arbitrary value 在 Astro dev server 静默丢 CSS（已踩多轮）

之前产品的 L1 教训：写 `grid-cols-[2fr_3fr]` / `grid-cols-[minmax(0,2fr)_minmax(0,3fr)]` 这种 arbitrary value 后：
- HTML 里 class attr 完好
- 但内联 `<style>` 里没有对应的 CSS 规则
- → grid 失效 fallback 成单列

**修法**：用标准 `grid-cols-N` + `col-span-M` 分列，避免 arbitrary value。

### 4. 构建/部署注意事项

- `pnpm dev` 必先 `pnpm approve-builds esbuild sharp` 走 postinstall，否则 `pnpm dev` 报 `[ERR_PNPM_IGNORED_BUILDS]`
- Dev 端口常常 4321 被占，看实际 `pnpm dev` 输出的 Local URL
- Astro 5 + `@astrojs/tailwind@5` + Tailwind 3 JIT

### 5. 东家口径：比对官网要逐块过

东家对内容文案要求严格，**Description / Specs / Includes / Downloads / FAQ 五块逐块比对官网**。每个字段（title / intro / keyFeatures / battery specs / inverter PV input / inverter general / FAQ Q&A）都从官网 .js API + 抓的原文照搬，不要自己编。

### 6. East家口语化指令容易踩雷

- "这块区域的背景图去掉" — 注意块边界。Global Supply 在地图 left 区域，不在页面底部。
- "字还可以往下来一些，下面刚好有一块空白" — 可能是 vertical 调整（flex items-center → items-end → 用 top% 自定义）
- "我说的页面名可能是错的" — 接到指令先 curl 核页面

## 未提交改动 (running diff)

- 修改列表（git status 2026-07-24 19:00）：
  - `public/uploads/callsun/about/v4-hero.jpg` modified
  - `public/uploads/callsun/products/l1-hero.jpg` modified
  - `public/uploads/callsun/solutions/12kw/10-includes.webp` modified
  - `src/components/Header.astro` modified
  - `src/data/kit-5-4kw.ts` 新建
  - `src/data/kit-7-2kw.ts` 新建
  - `src/data/kit-10-8kw.ts` modified
  - `src/data/resources.ts` modified
  - `src/data/site.ts` modified (ABOUT → ABOUT CALLSUN → ABOUT)
  - `src/data/solutions-l1.ts` modified
  - `src/pages/index.astro` modified
  - `src/pages/products/*` modified
  - `src/pages/resources/index.astro` modified
  - `src/pages/solutions/10-8kw-grid-tied.astro` modified
  - `src/pages/solutions/7-2kw-grid-tied.astro` 新建
  - `src/pages/solutions/5-4kw-off-grid.astro` 新建
  - `src/pages/solutions/index.astro` modified (Grid-Tied 双卡 + 移除 distractor)
  - `src/pages/about/index.astro` modified (去 manufacturing bg, Global Supply 文字叠加)
  - 多个 public/uploads 新增图（gallery, globals, etc）

未等东家 commit（按 2026-06-10/15 规矩：写完代码 + 走 SSH 隧道看效果 → 等东家说 commit）。
