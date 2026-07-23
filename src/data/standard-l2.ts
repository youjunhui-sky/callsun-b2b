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
      '/uploads/callsun/products/450w/01-front.jpg',
      '/uploads/callsun/products/580w/card-square.jpg',
      '/uploads/callsun/products/620w/card-square.jpg',
      '/uploads/callsun/products/720w/card-square.jpg',
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
      efficiency: '22.53% MODULE EFFICIENCY',
      description:
        'Compact 96-cell module with balanced weight and dimensions, suited to residential rooftops, small distributed PV plants and off-grid deployments where module footprint matters.',
      specs: [
        { label: 'DIMENSIONS', value: '1762 × 1134 × 30 mm' },
        { label: 'WEIGHT', value: '24.5 kg' },
        { label: 'OPERATING POINT', value: 'Vmp 30.9 V · Imp 14.55 A' },
        { label: 'OPEN / SHORT CIRCUIT', value: 'Voc 35.01 V · Isc 15.47 A' },
        { label: 'CONSTRUCTION', value: '96 cells · 2.0 mm double glass' },
      ],
      images: [
        '/uploads/callsun/products/450w/01-front.jpg',
        '/uploads/callsun/products/450w/hero-01.jpg',
        '/uploads/callsun/products/450w/hero-02.jpg',
        '/uploads/callsun/products/450w/hero-03.jpg',
      ],
      detailHref: '/products/cn450w/',
      datasheetHref: '/uploads/callsun/products/450w/CN450W-double-glass-datasheet.pdf',
    },
    {
      key: 'cn580w',
      title: 'CN580W',
      subtitle: '580W N-Type Bifacial Double-Glass Solar Module',
      power: '580W',
      powerNum: 580,
      efficiency: '22.45% MODULE EFFICIENCY',
      description:
        'Mid-range 144-cell format for distributed PV plants and small commercial projects that need higher generation per unit area without stepping up to full utility-scale module sizes.',
      specs: [
        { label: 'DIMENSIONS', value: '2178 × 1134 × 30 mm' },
        { label: 'WEIGHT', value: '30 kg' },
        { label: 'OPERATING POINT', value: 'Vmp 42.60 V · Imp 13.62 A' },
        { label: 'OPEN / SHORT CIRCUIT', value: 'Voc 51.4 V · Isc 14.37 A' },
        { label: 'CONSTRUCTION', value: '144 cells · 2.0 mm double glass' },
      ],
      images: [
        '/uploads/callsun/products/580w/card-square.jpg',
        '/uploads/callsun/products/580w/hero-01.jpg',
        '/uploads/callsun/products/580w/hero-02.jpg',
        '/uploads/callsun/products/580w/hero-03.jpg',
      ],
      detailHref: '/products/cn580w/',
      datasheetHref: '/uploads/callsun/products/580w/CN580W-datasheet.pdf',
    },
    {
      key: 'cn620w',
      title: 'CN620W',
      subtitle: '620W N-Type Bifacial Double-Glass Solar Module',
      power: '620W',
      powerNum: 620,
      efficiency: '22.95% MODULE EFFICIENCY',
      description:
        'High-power 132-cell class for distributed C&I and utility-adjacent projects that push installed capacity per string while keeping module handling manageable on-site.',
      specs: [
        { label: 'DIMENSIONS', value: '2382 × 1134 × 30 mm' },
        { label: 'WEIGHT', value: '32.5 kg' },
        { label: 'OPERATING POINT', value: 'Vmp 40.82 V · Imp 15.19 A' },
        { label: 'OPEN / SHORT CIRCUIT', value: 'Voc 48.10 V · Isc 16.06 A' },
        { label: 'CONSTRUCTION', value: '132 cells · 2.0 mm double glass' },
      ],
      images: [
        '/uploads/callsun/products/620w/card-square.jpg',
        '/uploads/callsun/products/620w/hero-01.jpg',
        '/uploads/callsun/products/620w/hero-02.jpg',
        '/uploads/callsun/products/620w/hero-03.jpg',
      ],
      detailHref: '/products/cn620w/',
      datasheetHref: '/uploads/callsun/products/620w/CN620W-datasheet.pdf',
    },
    {
      key: 'cn720w',
      title: 'CN720W',
      subtitle: '720W N-Type Bifacial Dual-Glass Solar Module',
      power: '720W',
      powerNum: 720,
      efficiency: '23.18% MODULE EFFICIENCY',
      description:
        'Flagship 132-cell high-current module built for volume utility-scale procurement — maximum watts per rack, per truck (594 pcs / 40′HQ) and per BOS dollar.',
      specs: [
        { label: 'DIMENSIONS', value: '2384 × 1303 × 33 mm' },
        { label: 'WEIGHT', value: '37.9 kg' },
        { label: 'OPERATING POINT', value: 'Vmp 41.0 V · Imp 17.55 A' },
        { label: 'OPEN / SHORT CIRCUIT', value: 'Voc 49.28 V · Isc 18.55 A' },
        { label: 'CONSTRUCTION', value: '132 cells · 2.0 mm dual glass' },
      ],
      images: [
        '/uploads/callsun/products/720w/card-square.jpg',
        '/uploads/callsun/products/720w/hero-01.jpg',
        '/uploads/callsun/products/720w/hero-02.jpg',
        '/uploads/callsun/products/720w/hero-03.jpg',
      ],
      detailHref: '/products/cn720w/',
      datasheetHref: '/uploads/callsun/products/720w/CN720W-datasheet.pdf',
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
