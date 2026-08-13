/**
 * News & Cases page data — technical blog + installation gallery + project reference list.
 *
 * Content mirrors the client mockup at
 * inbox/2026-07-23/图片设计/4-新闻与案例/Callsun_News_and_Cases_Page_v2.png:
 *   - 6 technical blog posts (3 tags: TECHNICAL / PRODUCT / INDUSTRY)
 *   - 6 rooftop installation photos (compressed from inbox/案例界面图/)
 *   - 8-row project reference table (project name + installed capacity)
 *
 * All content is placeholder / linked to '#' — blog article pages are a future task.
 */

export interface BlogPost {
  tag: 'TECHNICAL' | 'PRODUCT' | 'INDUSTRY';
  date: string;                // display string, e.g. "JUL 22, 2026"
  title: string;
  thumb: string;               // hero image path (reuse existing product/case images)
  href: string;                // article URL, e.g. "/news/<slug>/"
}

export const BLOG_POSTS: BlogPost[] = [
  {
    tag: 'TECHNICAL',
    date: 'JUL 22, 2026',
    title: '450W vs. 400W Solar Panels: What 50 Extra Watts Mean for the Complete Installation',
    thumb: '/blog/2026-07-22-450w-vs-400w-solar-panels.webp',
    href: '/news/2026-07-22-450w-vs-400w-solar-panels/',
  },
  {
    tag: 'PRODUCT',
    date: 'JUL 22, 2026',
    title: 'Single-Glass vs. Dual-Glass Solar Modules: How B2B Buyers Should Choose',
    thumb: '/blog/2026-07-22-single-glass-vs-dual-glass-solar-modules.webp',
    href: '/news/2026-07-22-single-glass-vs-dual-glass-solar-modules/',
  },
  {
    tag: 'TECHNICAL',
    date: 'JUL 22, 2026',
    title: 'Standard vs. Shade-Tolerant Solar Panels: When Does the Electrical Design Matter?',
    thumb: '/blog/2026-07-22-standard-vs-shade-tolerant-solar-panels.webp',
    href: '/news/2026-07-22-standard-vs-shade-tolerant-solar-panels/',
  },
  {
    tag: 'INDUSTRY',
    date: 'JUL 21, 2026',
    title: 'How to Evaluate a PV Module Manufacturer: A Practical Guide for B2B Buyers',
    thumb: '/blog/2026-07-21-how-to-evaluate-a-pv-module-manufacturer.webp',
    href: '/news/2026-07-21-how-to-evaluate-a-pv-module-manufacturer/',
  },
  {
    tag: 'TECHNICAL',
    date: 'JUL 21, 2026',
    title: 'Solar Design for Limited Installation Space: Why Power Density Matters More Than Panel Wattage',
    thumb: '/blog/2026-07-21-power-density-in-limited-space.webp',
    href: '/news/2026-07-21-power-density-in-limited-space/',
  },
  {
    tag: 'PRODUCT',
    date: 'JUL 21, 2026',
    title: 'From Standard PV Modules to Custom Engineering: How Callsun Supports Diverse Solar Applications',
    thumb: '/blog/2026-07-21-standard-modules-and-custom-engineering.webp',
    href: '/news/2026-07-21-standard-modules-and-custom-engineering/',
  },
];

export interface GalleryItem {
  src: string;
  alt: string;
}

// 6 compressed rooftop aerials from inbox/案例界面图/ — see PROJECT-MEMORY for provenance.
export const INSTALLATION_GALLERY: GalleryItem[] = [
  { src: '/uploads/callsun/cases/rooftop-01.webp', alt: 'C&I rooftop installation — multi-building factory array' },
  { src: '/uploads/callsun/cases/rooftop-02.webp', alt: 'Commercial rooftop with partial-array retrofit layout' },
  { src: '/uploads/callsun/cases/rooftop-03.webp', alt: 'High-density rooftop aerial with dual-glass modules' },
  { src: '/uploads/callsun/cases/rooftop-04.webp', alt: 'Twin-building industrial rooftop connected walkway' },
  { src: '/uploads/callsun/cases/rooftop-05.webp', alt: 'Large-scale industrial rooftop with symmetric skylight bands' },
  { src: '/uploads/callsun/cases/rooftop-06.webp', alt: 'Industrial rooftop with routed layout around equipment' },
];

export interface ProjectReferenceRow {
  asset: string;
  capacity: string;
}

export const PROJECT_REFERENCES: ProjectReferenceRow[] = [
  { asset: 'CHENG DA IB COMPANY LIMITED',       capacity: '3.50 MW' },
  { asset: 'YIDA TOYS COMPANY LIMITED',         capacity: '2.50 MW' },
  { asset: 'EURO FILM CORPORATION',             capacity: '3.10 MW' },
  { asset: 'Delta Cropsate Joint Stock Company', capacity: '3.40 MW' },
  { asset: 'Gen Bright Lighting CO., Ltd',      capacity: '2.30 MW' },
  { asset: 'THIENY PACKAGING',                  capacity: '2.27 MW' },
  { asset: 'IBE',                                capacity: '2.30 MW' },
  { asset: 'Chengda',                            capacity: '1.20 MW' },
];
