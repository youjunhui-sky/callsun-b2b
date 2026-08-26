// 产品 SKU 通用数据（首页/L2 列表/详情页共用）
// 从 2026-07-23 原型 + PDF datasheet 摘录

export type ProductSpec = {
  slug: string;
  model: string;
  name: string;
  category: 'standard' | 'custom';
  order: number;
  hero: {
    intro: string;
    tags: string[];
  };
  keyStats: {
    power: string;
    efficiency: string;
    dimensions: string;
    weight: string;
  };
  images: {
    hero: string;
    card: string;
    frontBack?: string;
  };
  datasheet?: string;
  // 详情页深度参数（后续详情页时逐 SKU 补齐）
};

export const PRODUCTS: ProductSpec[] = [
  {
    slug: 'cn450w',
    model: 'CN450W',
    name: '450W N-Type Bifacial Double-Glass Solar Module',
    category: 'standard',
    order: 1,
    hero: { intro: 'N-Type · Bifacial · Double Glass', tags: ['HIGH POWER DENSITY', 'BATCH CONSISTENCY'] },
    keyStats: { power: '450W', efficiency: '22.52%', dimensions: '1762 × 1134 × 30 mm', weight: '23.97 kg' },
    images: {
      hero: '/uploads/callsun/products/450w/hero-01.webp',
      card: '/uploads/callsun/products/450w/hero-01.webp',
      frontBack: '/uploads/callsun/products/450w/01-front.webp',
    },
    datasheet: '/uploads/callsun/products/450w/CN450W-double-glass-datasheet.pdf',
  },
  {
    slug: 'cn580w',
    model: 'CN580W',
    name: '580W N-Type Bifacial Double-Glass Solar Module',
    category: 'standard',
    order: 2,
    hero: { intro: 'N-Type · Bifacial · Double Glass', tags: ['HIGH POWER DENSITY', 'BATCH CONSISTENCY'] },
    keyStats: { power: '580W', efficiency: '22.45%', dimensions: '2278 × 1134 × 30 mm', weight: '30 kg' },
    images: {
      hero: '/uploads/callsun/products/580w/hero-01.webp',
      card: '/uploads/callsun/products/580w/card-square.webp',
      frontBack: '/uploads/callsun/products/580w/front-back.webp',
    },
    datasheet: '/uploads/callsun/products/580w/CN580W-datasheet.pdf',
  },
  {
    slug: 'cn620w',
    model: 'CN620W',
    name: '620W N-Type Bifacial Double-Glass Solar Module',
    category: 'standard',
    order: 3,
    hero: { intro: 'N-Type · Bifacial · Double Glass', tags: ['HIGH POWER DENSITY', 'BATCH CONSISTENCY'] },
    keyStats: { power: '620W', efficiency: '22.95%', dimensions: '2382 × 1134 × 30 mm', weight: '32.5 kg' },
    images: {
      hero: '/uploads/callsun/products/620w/hero-01.webp',
      card: '/uploads/callsun/products/620w/card-square.webp',
      frontBack: '/uploads/callsun/products/620w/front-back.webp',
    },
    datasheet: '/uploads/callsun/products/620w/CN620W-datasheet.pdf',
  },
  {
    slug: 'cn720w',
    model: 'CN720W',
    name: '720W N-Type Bifacial Dual-Glass Solar Module',
    category: 'standard',
    order: 4,
    hero: { intro: 'N-Type · Bifacial · Dual Glass', tags: ['HIGH POWER DENSITY', 'BATCH CONSISTENCY'] },
    keyStats: { power: '720W', efficiency: '23.18%', dimensions: '2384 × 1303 × 33 mm', weight: '37.9 kg' },
    images: {
      hero: '/uploads/callsun/products/720w/hero-01.webp',
      card: '/uploads/callsun/products/720w/card-square.webp',
      frontBack: '/uploads/callsun/products/720w/front-back.webp',
    },
    datasheet: '/uploads/callsun/products/720w/CN720W-datasheet.pdf',
  },
  {
    slug: 'cn210w',
    model: 'CN210W',
    name: 'CN210W Custom N-Type Bifacial Module',
    category: 'custom',
    order: 5,
    hero: { intro: 'N-Type · Bifacial · Anti-Shading', tags: ['SIZE ADAPTATION', 'STRUCTURAL ENGINEERING', '24V SYSTEM READY'] },
    keyStats: { power: '210W', efficiency: '25.6% cell', dimensions: '1377 × 767 × 36 mm', weight: '11.3 kg' },
    images: {
      hero: '/uploads/callsun/products/210w/hero-01.webp',
      card: '/uploads/callsun/products/210w/front-back.webp',
      frontBack: '/uploads/callsun/products/210w/front-back.webp',
    },
  },
  {
    slug: 'cn180w',
    model: 'CN180W',
    name: 'CN180W Custom N-Type Bifacial Module',
    category: 'custom',
    order: 6,
    hero: { intro: 'N-Type · Bifacial · Anti-Shading', tags: ['SIZE ADAPTATION', 'STRUCTURAL ENGINEERING'] },
    keyStats: { power: '180W', efficiency: '25% cell', dimensions: '1180 × 770 × 35 mm', weight: '9.8 kg' },
    images: {
      hero: '/uploads/callsun/products/180w/hero-01.webp',
      card: '/uploads/callsun/products/180w/hero-01.webp',
      frontBack: '/uploads/callsun/products/180w/front-back.webp',
    },
  },
  {
    slug: 'cn200w',
    model: 'CN200W',
    name: 'CN200W Custom N-Type Bifacial Module',
    category: 'custom',
    order: 7,
    hero: { intro: 'N-Type · Bifacial · 16BB', tags: ['SIZE ADAPTATION', 'STRUCTURAL ENGINEERING'] },
    keyStats: { power: '200W', efficiency: '25% cell', dimensions: '1104 × 770 × 35 mm', weight: '10.8 kg' },
    images: {
      hero: '/uploads/callsun/products/200w/hero-01.webp',
      card: '/uploads/callsun/products/200w/front.webp',
      frontBack: '/uploads/callsun/products/200w/front-back.webp',
    },
  },
  {
    slug: 'cn215w',
    model: 'CN215W',
    name: 'CN215W Custom N-Type Bifacial Module with Anti-Shading',
    category: 'custom',
    order: 8,
    hero: { intro: 'N-Type · Bifacial · 4-Zone Anti-Shading', tags: ['SIZE ADAPTATION', 'STRUCTURAL ENGINEERING'] },
    keyStats: { power: '215W', efficiency: '25% cell', dimensions: '1422 × 766 × 35 mm', weight: '11.5 kg' },
    images: {
      hero: '/uploads/callsun/products/215w/hero-01.webp',
      card: '/uploads/callsun/products/215w/front.webp',
      frontBack: '/uploads/callsun/products/215w/front-back.webp',
    },
    datasheet: '/uploads/callsun/products/215w/CN215W-datasheet.pdf',
  },
];

export const STANDARD_PRODUCTS = PRODUCTS.filter((p) => p.category === 'standard');
export const CUSTOM_PRODUCTS = PRODUCTS.filter((p) => p.category === 'custom');

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

// 兼容占位
export const defaultSpec = null;
