// i18n 架构（2026-09-14 游军辉拍板：德语 + 西班牙语，其它先放）
// 英语为默认（无前缀）；本地化页在 /de、/es 子目录（子目录式对 SEO 最稳）
// 一期范围：/ /products/ /products/standard-modules/ /products/custom-modules/ /contact/
// 二期（未做）：About、产品详情页、新闻/资源/方案 —— 切语言时回落对应语言首页

export const LOCALES = ['en', 'de', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const htmlLang: Record<Locale, string> = {
  en: 'en-US',
  de: 'de-DE',
  es: 'es-ES',
};

export const ogLocale: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  es: 'es_ES',
};

export const localeLabel: Record<Locale, string> = {
  en: 'EN',
  de: 'DE',
  es: 'ES',
};

const prefix: Record<Locale, string> = {
  en: '',
  de: '/de',
  es: '/es',
};

// 已本地化的路径（base 路径，无语言前缀）
export const LOCALIZED_PATHS = [
  '/',
  '/products/',
  '/products/standard-modules/',
  '/products/custom-modules/',
  '/about/',
  '/contact/',
];

// 当前路径在目标语言下的地址；未本地化路径回落该语言首页
export function localePath(locale: Locale, currentPath: string): string {
  if (locale === 'en') return currentPath;
  const base = basePathOf(currentPath);
  if (LOCALIZED_PATHS.includes(base)) return `${prefix[locale]}${base === '/' ? '/' : base}`;
  return `${prefix[locale]}/`;
}

// 从带语言前缀的路径提取 base 路径
export function basePathOf(path: string): string {
  for (const l of ['de', 'es'] as const) {
    if (path === `/${l}`) return '/';
    if (path.startsWith(`/${l}/`)) return path.slice(3);
  }
  return path;
}

// hreflang alternates：base 路径（无前缀）→ 各语言 URL（含 x-default）
export function alternatesFor(basePath: string): Array<{ lang: string; href: string }> {
  if (!LOCALIZED_PATHS.includes(basePath)) return [];
  return [
    { lang: 'en-US', href: basePath },
    { lang: 'de-DE', href: `/de${basePath === '/' ? '/' : basePath}` },
    { lang: 'es-ES', href: `/es${basePath === '/' ? '/' : basePath}` },
    { lang: 'x-default', href: basePath },
  ];
}
