// Callsun 站点级元数据
export const SITE = {
  name: 'Callsun',
  brand: 'Callsun',
  tagline: 'PV Module Brand & Manufacturer',
  domain: 'https://callsun-b2b.youjh120608.workers.dev', // TODO: 官方域名确认后替换
  defaultTitle: 'Callsun — PV Module Brand & Manufacturer',
  defaultDescription:
    'Callsun designs, manufactures and tests standard and custom PV modules for distributors, installers, EPCs, equipment manufacturers and project buyers.',
  defaultOgImage: '/og/default.png',
  twitter: '',
  organization: {
    legalName: 'Callsun',
    foundingDate: '',
    sameAs: [] as string[],
    contact: {
      sales: 'sales@callsun.com',
      support: 'support@callsun.com',
      phone: '',
    },
  },
  analytics: {
    gtmId: '',
    cloudflareToken: '',
    plausibleDomain: '',
  },
  cta: {
    quote: 'REQUEST A QUOTE',
    inquiry: 'SEND AN INQUIRY',
    submit: 'SUBMIT INQUIRY',
  },
} as const;

// 顶部一级导航（原型图定死的 7 项）
export const NAV = [
  { label: 'HOME', href: '/' },
  {
    label: 'PRODUCTS',
    href: '/products/',
    children: [
      { label: 'Standard PV Modules', href: '/products/standard-modules/' },
      { label: 'Custom PV Modules', href: '/products/custom-modules/' },
    ],
  },
  { label: 'SOLUTIONS', href: '/solutions/' },
  // { label: 'APPLICATIONS', href: '/applications/' },  // 2026-07-24 東家隐藏，页面代码保留 src/pages/applications/
  { label: 'RESOURCES', href: '/resources/' },
  { label: 'NEWS & CASES', href: '/news/' },
  { label: 'ABOUT', href: '/about/' },
] as const;
