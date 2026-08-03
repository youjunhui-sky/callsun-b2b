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
  backgroundImage: '/uploads/callsun/homepage/hero-desktop.jpg',
};

export const STATS = [
  { value: '55,000 m²', label: 'Manufacturing Area' },
  { value: '4', label: 'Manufacturing Bases' },
  { value: '6+', label: 'Global Logistics' },
  { value: '180–720W', label: 'Module Power Range' },
];

// 首页 7 产品网格（标准 4 + 非标 3，不加第 8 格）
// 卡片图根据东家 2026-07-23 指定：对齐 jinko-rebuild 旧站已认可的取图
export const HOME_PRODUCTS = [
  {
    model: 'CN450W',
    name: '450W N-Type Bifacial Double-Glass Module',
    href: '/products/cn450w/',
    image: '/uploads/callsun/products/450w/01-front.jpg',
    tag: 'STANDARD',
  },
  {
    model: 'CN580W',
    name: '580W N-Type Bifacial Double-Glass Module',
    href: '/products/cn580w/',
    image: '/uploads/callsun/products/580w/card-square.jpg',
    tag: 'STANDARD',
  },
  {
    model: 'CN620W',
    name: '620W N-Type Bifacial Double-Glass Module',
    href: '/products/cn620w/',
    image: '/uploads/callsun/products/620w/card-square.jpg',
    tag: 'STANDARD',
  },
  {
    model: 'CN720W',
    name: '720W N-Type Bifacial Dual-Glass Module',
    href: '/products/cn720w/',
    image: '/uploads/callsun/products/720w/card-square.jpg',
    tag: 'STANDARD',
  },
  {
    model: 'CN180W',
    name: 'CN180W Custom N-Type Bifacial Module',
    href: '/products/cn180w/',
    image: '/uploads/callsun/products/180w/hero-05.jpg',
    tag: 'CUSTOM',
  },
  {
    model: 'CN200W',
    name: 'CN200W Custom N-Type Bifacial Module',
    href: '/products/cn200w/',
    image: '/uploads/callsun/products/200w/front-back.jpg',
    tag: 'CUSTOM',
  },
  {
    model: 'CN210W',
    name: 'CN210W Custom N-Type Bifacial Module',
    href: '/products/cn210w/',
    image: '/uploads/callsun/products/210w/front-back.jpg',
    tag: 'CUSTOM',
  },
  {
    model: 'CN215W',
    name: 'CN215W Custom N-Type Bifacial Module with Anti-Shading',
    href: '/products/cn215w/',
    image: '/uploads/callsun/products/215w/front-back.jpg',
    tag: 'CUSTOM',
  },
];

export const QUALITY = {
  eyebrow: 'QUALITY YOU CAN VERIFY',
  title: 'Quality You Can Verify',
  intro:
    'Quality control spans raw materials, in-line production and finished-product testing. Certification documents and product evaluations are available on request.',
  certifications: ['CE', 'RoHS', 'IEC', 'ISO 9001', 'ISO 14001', 'ISO 45001'],
  certificateImage: '/uploads/callsun/homepage/certificates.jpg',
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
  mapImage: '/uploads/callsun/homepage/global-map.jpg',
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

// YouTube 视频 — 2026-07-23 客户提供 5 个链接
// 2026-08-03 东家要求首页 FEATURED VIDEOS 展示全部 5 个
export const VIDEO_ITEMS = [
  { id: 'ckNe2EctH5w', title: 'CALLSUN 215W Anti-Shading Lab Tested',                          channel: 'Callsun' },
  { id: 'zSQSWBTLaL8', title: 'Callsun 200W Bifacial Solar Panel Review: Shade Testing',        channel: 'Cleversolarpower by Nick' },
  { id: 'Qa-0HqwHgR0', title: 'Callsun 450W Bifacial Solar Panel — MORE for LESS?!',            channel: 'ReeWray Outdoors' },
  { id: 'JN9tKhtubUM', title: 'Solar Just Took a Huge Leap Forward! — CallSun 215 Anti-Shade',  channel: "JOHNNY'S WEEKENDS" },
  { id: 'iMB6SgkuG_w', title: 'I Tested CallSun\'s New 450W Bifacial Solar Panel — Real World', channel: "JOHNNY'S WEEKENDS" },
];

export const VIDEOS = VIDEO_ITEMS.map((v) => ({
  title: v.title,
  channel: v.channel,
  href: `https://www.youtube.com/watch?v=${v.id}`,
  thumb: `/uploads/callsun/videos/${v.id}.jpg`,
  videoId: v.id,
}));

export const INQUIRY = {
  eyebrow: 'START A CONVERSATION',
  title: 'From Product Requirements to Consistent Delivery',
  intro:
    'Tell us about your target power, module dimensions, application conditions or system requirements. Our team will review the information and discuss the next step with you.',
  formTitle: 'Discuss Your Requirements',
};

// Placeholder — 让 tsconfig 别哭
export const _defaultSpec = defaultSpec;
