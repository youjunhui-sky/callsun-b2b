// 首页数据 — 从 2026-07-23 客户原型图直接摘录
// 后续稳定后可迁到 content collection

import { defaultSpec } from '@/lib/product-data';

export const HERO = {
  eyebrow: 'PV MODULE BRAND & MANUFACTURER',
  title: 'Photovoltaic Module Brand & Manufacturer',
  intro:
    'In-House R&D, Manufacturing, and Testing. Callsun focuses on standard and custom PV products, providing partners with full-chain support from product selection to sample validation and volume delivery.',
  primaryCta: { label: 'EXPLORE PRODUCTS', href: '/products/' },
  secondaryCta: { label: 'DISCUSS REQUIREMENTS', href: '/contact/' },
  backgroundImage: '/uploads/callsun/about/hero-desktop.jpg',
};

export const STATS = [
  { value: '55,000 m²', label: 'Manufacturing Area' },
  { value: '4', label: 'Manufacturing Bases' },
  { value: '6+', label: 'Global Logistics' },
  { value: '180–720W', label: 'Module Power Range' },
];

// 首页 8 产品网格（第一排 4 款 Standard 高功率，第二排 3 款 Custom + 1 款 slot 备用）
export const HOME_PRODUCTS = [
  {
    model: 'CN450W',
    name: '450W N-Type Bifacial Double-Glass Module',
    href: '/products/cn450w/',
    image: '/uploads/callsun/products/450w/hero-01.jpg',
    tag: 'STANDARD',
  },
  {
    model: 'CN580W',
    name: '580W N-Type Bifacial Double-Glass Module',
    href: '/products/cn580w/',
    image: '/uploads/callsun/products/580w/hero-01.jpg',
    tag: 'STANDARD',
  },
  {
    model: 'CN620W',
    name: '620W N-Type Bifacial Double-Glass Module',
    href: '/products/cn620w/',
    image: '/uploads/callsun/products/620w/hero-01.jpg',
    tag: 'STANDARD',
  },
  {
    model: 'CN720W',
    name: '720W N-Type Bifacial Dual-Glass Module',
    href: '/products/cn720w/',
    image: '/uploads/callsun/products/720w/hero-01.jpg',
    tag: 'STANDARD',
  },
  {
    model: 'CN180W',
    name: '180W Custom N-Type Anti-Shading Bifacial',
    href: '/products/cn180w/',
    image: '/uploads/callsun/products/180w/hero-01.jpg',
    tag: 'CUSTOM',
  },
  {
    model: 'CN200W',
    name: '200W Custom N-Type 16BB Bifacial',
    href: '/products/cn200w/',
    image: '/uploads/callsun/products/200w/hero-01.jpg',
    tag: 'CUSTOM',
  },
  {
    model: 'CN215W',
    name: '215W Custom N-Type Anti-Shading Bifacial',
    href: '/products/cn215w/',
    image: '/uploads/callsun/products/215w/hero-01.jpg',
    tag: 'CUSTOM',
  },
  // 第 8 格 — 原型有 8 张卡但只标注了 7 个型号，此位保留一个"完整产品线入口"卡
  {
    model: 'VIEW ALL',
    name: 'Explore Full Portfolio',
    href: '/products/',
    image: '/uploads/callsun/about/factory-concept.png',
    tag: 'PORTFOLIO',
    isCta: true,
  },
];

export const QUALITY = {
  eyebrow: 'QUALITY YOU CAN VERIFY',
  title: 'Quality You Can Verify',
  intro:
    'Quality control spans raw materials, in-line production and finished-product testing. Certification documents and product evaluations are available on request.',
  certifications: ['CE', 'RoHS', 'IEC', 'ISO 9001', 'ISO 14001', 'ISO 45001'],
  certificateImages: [
    { src: '/uploads/callsun/about/certificates.jpg', alt: 'Callsun certificate document' },
  ],
  cta: { label: 'VIEW CERTIFICATES', href: '/resources/' },
};

export const GLOBAL_SUPPLY = {
  eyebrow: 'GLOBAL SUPPLY',
  title: 'Built for Long-Term Channel Partnerships',
  intro:
    'Multiple manufacturing bases and established logistics networks help partners coordinate supply, delivery and long-term market development.',
  markets: [
    'United States',
    'United Kingdom',
    'Germany',
    'Saudi Arabia',
    'South Africa',
    'China',
    'Japan',
    'Vietnam',
    'Indonesia',
    'Australia',
    'Brazil',
    'Canada',
  ],
  mapImage: '/uploads/callsun/homepage/global-map.webp',
  cta: { label: 'ABOUT CALLSUN', href: '/about/' },
};

export const ARTICLES = [
  {
    category: 'TECHNICAL',
    date: 'JUL 22, 2026',
    title: '450W vs. 400W Solar Panels: What 50 Extra Watts Mean',
    href: '/news/',
    image: '/blog/2026-07-22-450w-vs-400w-solar-panels.webp',
  },
  {
    category: 'PRODUCT',
    date: 'JUL 22, 2026',
    title: 'Single-Glass vs. Dual-Glass Solar Modules: How B2B Buyers Should Choose',
    href: '/news/',
    image: '/blog/2026-07-22-single-glass-vs-dual-glass-solar-modules.webp',
  },
  {
    category: 'TECHNICAL',
    date: 'JUL 22, 2026',
    title: 'Standard vs. Shade-Tolerant Solar Panels: When Does Design Matter?',
    href: '/news/',
    image: '/blog/2026-07-22-standard-vs-shade-tolerant-solar-panels.webp',
  },
];

export const VIDEOS = [
  {
    title: 'Callsun 450W Bifacial Solar Panel Review',
    channel: 'ReeWay Outdoors',
    href: '#',
    thumb: '/uploads/callsun/products/450w/hero-02.jpg',
  },
  {
    title: 'Callsun 450W N-Type: Testing and Review',
    channel: 'Our Black Cat Cottage',
    href: '#',
    thumb: '/uploads/callsun/products/450w/hero-03.jpg',
  },
  {
    title: '215W Anti-Shading Lab Test',
    channel: 'Callsun',
    href: '#',
    thumb: '/uploads/callsun/products/215w/hero-01.jpg',
  },
];

export const INQUIRY = {
  eyebrow: 'PRODUCT INQUIRY',
  title: 'From Product Requirements to Consistent Delivery',
  intro:
    'Share the target power, dimensions, application conditions and expected volume. Our team will review the requirements and respond with the relevant product or next step.',
  formTitle: 'Discuss Your Requirements',
};

// Placeholder — 让 tsconfig 别哭
export const _defaultSpec = defaultSpec;
