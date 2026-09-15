// i18n 架构（2026-09-14 游军辉拍板：德语 + 西班牙语，其它先放）
// 英语为默认（无前缀）；本地化页在 /de、/es 子目录（子目录式对 SEO 最稳）
// 一期范围：/ /products/ /products/standard-modules/ /products/custom-modules/ /contact/
// 二期（未做）：About、产品详情页、新闻/资源/方案 —— 切语言时回落对应语言首页

export const LOCALES = ['en', 'de', 'es', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const htmlLang: Record<Locale, string> = {
  en: 'en-US',
  de: 'de-DE',
  es: 'es-ES',
  ru: 'ru-RU',
};

export const ogLocale: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
  ru: 'ru_RU',
};

export const localeLabel: Record<Locale, string> = {
  en: 'EN',
  de: 'DE',
  es: 'ES',
  ru: 'RU',
};

const prefix: Record<Locale, string> = {
  en: '',
  de: '/de',
  es: '/es',
  ru: '/ru',
};

// 已本地化的路径（base 路径，无语言前缀）
export const LOCALIZED_PATHS = [
  '/',
  '/products/',
  '/products/standard-modules/',
  '/products/custom-modules/',
  '/about/',
  '/solutions/',
  '/resources/',
  '/news/',
  '/solutions/5-4kw-off-grid/',
  '/solutions/7-2kw-grid-tied/',
  '/solutions/10-8kw-grid-tied/',
  '/contact/',
];

// 动态路径是否已有本地化版本（详情页等静态清单之外的页面）
export function isLocalizedPath(base: string): boolean {
  if (LOCALIZED_PATHS.includes(base)) return true;
  if (/^\/products\/cn\d+w\/$/.test(base)) return true;
  if (/^\/solutions\/(5-4kw-off-grid|7-2kw-grid-tied|10-8kw-grid-tied)\/$/.test(base)) return true;
  return false;
}

// 当前路径在目标语言下的地址；未本地化路径回落该语言首页
export function localePath(locale: Locale, currentPath: string): string {
  const base = basePathOf(currentPath);
  if (locale === 'en') return base;
  if (isLocalizedPath(base)) return `${prefix[locale]}${base === '/' ? '/' : base}`;
  return `${prefix[locale]}/`;
}

// 从带语言前缀的路径提取 base 路径
export function basePathOf(path: string): string {
  for (const l of ['de', 'es', 'ru'] as const) {
    if (path === `/${l}`) return '/';
    if (path.startsWith(`/${l}/`)) return path.slice(3);
  }
  return path;
}

// hreflang alternates：base 路径（无前缀）→ 各语言 URL（含 x-default）——从 LOCALES 动态生成，新增语言自动带上
export function alternatesFor(basePath: string): Array<{ lang: string; href: string }> {
  if (!isLocalizedPath(basePath)) return [];
  const alts: Array<{ lang: string; href: string }> = LOCALES.map((l) => ({
    lang: htmlLang[l],
    href: l === 'en' ? basePath : `/${l}${basePath === '/' ? '/' : basePath}`,
  }));
  alts.push({ lang: 'x-default', href: basePath });
  return alts;
}
