/**
 * Products L2 — Standard Modules series page data
 * 4 SKUs: CN450W / CN580W / CN620W / CN720W
 */

export interface StandardSku {
  key: string;
  title: string;
  subtitle: string;
  power: string;
  powerNum: number;
  efficiency: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  images: string[];
  detailHref: string;
  datasheetHref: string;
}

export const STANDARD_L2 = {
  breadcrumb: [
    { label: 'PRODUCTS', href: '/products/' },
    { label: 'STANDARD PV MODULES', href: '/products/standard-modules/' },
  ],
  hero: {
    title: 'Standard PV Modules',
    subtitle:
      'High-power N-type bifacial double-glass modules for residential rooftops, distributed PV, off-grid systems, and small commercial and industrial projects.',
    powerRange: '450W – 720W',
    tags: ['HIGH POWER DENSITY', 'BATCH CONSISTENCY', 'VOLUME DELIVERY'],
    cta: { label: 'REQUEST A QUOTE', href: '#inquiry' },
    thumbs: [
      '/uploads/callsun/products/450w/card-logo.webp',
      '/uploads/callsun/products/580w/card-logo.webp',
      '/uploads/callsun/products/620w/card-logo.webp',
      '/uploads/callsun/products/720w/card-logo.webp',
    ],
  },
  selectorEyebrow: 'SELECT A MODULE',
  overview: {
    eyebrow: 'SERIES OVERVIEW',
    title: 'Four Power Classes for Scalable Deployment',
    intro:
      'Standard modules cover 450W, 580W, 620W and 720W power classes. Higher power density can increase installed capacity where module count or available area is limited.',
  },
  skus: [
    {
      key: 'cn450w',
      title: 'CN450W',
      subtitle: '450W N-Type Bifacial Double-Glass Solar Module',
      power: '450W',
      powerNum: 450,
      efficiency: '22.52% MODULE EFFICIENCY',
      description: '',
      specs: [
        { label: 'DIMENSIONS', value: '1762 × 1134 × 30 mm' },
        { label: 'WEIGHT', value: '23.97 kg' },
        { label: 'OPERATING POINT', value: 'Vmp 29.73 V · Imp 15.14 A' },
        { label: 'OPEN / SHORT CIRCUIT', value: 'Voc 35.84 V · Isc 15.98 A' },
        { label: 'CONSTRUCTION', value: '96 cells · 2.0 mm double glass' },
      ],
      images: [
        '/uploads/callsun/products/450w/card-logo.webp',
        '/uploads/callsun/products/450w/hero-01.webp',
        '/uploads/callsun/products/450w/hero-02.webp',
        '/uploads/callsun/products/450w/hero-03.webp',
      ],
      detailHref: '/products/cn450w/',
      datasheetHref: '/uploads/callsun/products/450w/Callsun-CN450W-N-Type-Bifacial-Dual-Glass-Solar-Module-Datasheet.pdf',
    },
    {
      key: 'cn580w',
      title: 'CN580W',
      subtitle: '580W N-Type Bifacial Double-Glass Solar Module',
      power: '580W',
      powerNum: 580,
      efficiency: '22.45% MODULE EFFICIENCY',
      description: '',
      specs: [
        { label: 'DIMENSIONS', value: '2278 × 1134 × 30 mm' },
        { label: 'WEIGHT', value: '31.42 kg' },
        { label: 'OPERATING POINT', value: 'Vmp 43.88 V · Imp 13.22 A' },
        { label: 'OPEN / SHORT CIRCUIT', value: 'Voc 52.50 V · Isc 13.95 A' },
        { label: 'CONSTRUCTION', value: '144 cells · 2.0 mm double glass' },
      ],
      images: [
        '/uploads/callsun/products/580w/card-logo.webp',
        '/uploads/callsun/products/580w/hero-01.webp',
        '/uploads/callsun/products/580w/hero-02.webp',
        '/uploads/callsun/products/580w/hero-03.webp',
      ],
      detailHref: '/products/cn580w/',
      datasheetHref: '/uploads/callsun/products/580w/Callsun-CN580W-N-Type-Bifacial-Dual-Glass-Solar-Module-Datasheet.pdf',
    },
    {
      key: 'cn620w',
      title: 'CN620W',
      subtitle: '620W N-Type Bifacial Double-Glass Solar Module',
      power: '620W',
      powerNum: 620,
      efficiency: '22.95% MODULE EFFICIENCY',
      description: '',
      specs: [
        { label: 'DIMENSIONS', value: '2382 × 1134 × 30 mm' },
        { label: 'WEIGHT', value: '32.4 kg' },
        { label: 'OPERATING POINT', value: 'Vmp 40.74 V · Imp 15.22 A' },
        { label: 'OPEN / SHORT CIRCUIT', value: 'Voc 49.08 V · Isc 16.08 A' },
        { label: 'CONSTRUCTION', value: '132 cells · 2.0 mm double glass' },
      ],
      images: [
        '/uploads/callsun/products/620w/card-logo.webp',
        '/uploads/callsun/products/620w/hero-01.webp',
        '/uploads/callsun/products/620w/hero-02.webp',
        '/uploads/callsun/products/620w/hero-03.webp',
      ],
      detailHref: '/products/cn620w/',
      datasheetHref: '/uploads/callsun/products/620w/Callsun-CN620W-N-Type-Bifacial-Dual-Glass-Solar-Module-Datasheet.pdf',
    },
    {
      key: 'cn720w',
      title: 'CN720W',
      subtitle: '720W N-Type Bifacial Dual-Glass Solar Module',
      power: '720W',
      powerNum: 720,
      efficiency: '23.18% MODULE EFFICIENCY',
      description: '',
      specs: [
        { label: 'DIMENSIONS', value: '2384 × 1303 × 33 mm' },
        { label: 'WEIGHT', value: '38.3 kg' },
        { label: 'OPERATING POINT', value: 'Vmp 41.30 V · Imp 17.44 A' },
        { label: 'OPEN / SHORT CIRCUIT', value: 'Voc 49.40 V · Isc 18.49 A' },
        { label: 'CONSTRUCTION', value: '132 cells · 2.0 mm dual glass' },
      ],
      images: [
        '/uploads/callsun/products/720w/card-logo.webp',
        '/uploads/callsun/products/720w/hero-01.webp',
        '/uploads/callsun/products/720w/hero-02.webp',
        '/uploads/callsun/products/720w/hero-03.webp',
      ],
      detailHref: '/products/cn720w/',
      datasheetHref: '/uploads/callsun/products/720w/Callsun-CN720W-N-Type-Bifacial-Dual-Glass-Solar-Module-Datasheet.pdf',
    },
  ] as StandardSku[],
  inquiry: {
    eyebrow: 'PRODUCT INQUIRY',
    title: 'Discuss Your Module Requirements',
    intro:
      'Share the target power, module dimensions, application, installation conditions and expected volume. We will review the requirements and respond with the relevant product or next step.',
    formTitle: 'Request Product Information',
  },
} as const;
