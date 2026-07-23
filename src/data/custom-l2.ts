/**
 * Products L2 — Custom Modules series page data
 * 3 SKUs: CN180W / CN200W / CN215W
 */

export interface CustomSku {
  key: string;
  title: string;
  subtitle: string;
  power: string;
  efficiency: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  image: string;
  detailHref: string;
  datasheetHref?: string;
}

export const CUSTOM_L2 = {
  breadcrumb: [
    { label: 'PRODUCTS', href: '/products/' },
    { label: 'CUSTOM PV MODULES', href: '/products/custom-modules/' },
  ],
  hero: {
    title: 'Custom PV Modules',
    subtitle:
      'Application-specific modules for RVs, vehicle rooftops, balconies, off-grid equipment, and other special installation conditions.',
    powerRange: '180W – 215W',
    tags: ['SIZE ADAPTATION', 'STRUCTURAL ENGINEERING', 'CONNECTION COMPATIBILITY'],
    cta: { label: 'DISCUSS A PROJECT', href: '#inquiry' },
    thumbs: [
      '/uploads/callsun/products/180w/hero-05.jpg',
      '/uploads/callsun/products/200w/front-back.jpg',
      '/uploads/callsun/products/215w/front-back.jpg',
    ],
  },
  selectorEyebrow: 'SELECT A MODULE',
  overview: {
    eyebrow: 'SERIES OVERVIEW',
    title: 'Engineered Around Available Space',
    intro:
      'Module selection and custom feasibility assessment can consider available space, target output, module dimensions, product structure and interface requirements.',
  },
  skus: [
    {
      key: 'cn180w',
      title: 'CN180W',
      subtitle: '180W N-Type Anti-Shading Bifacial Solar Module',
      power: '180W',
      efficiency: '25% CELL EFFICIENCY',
      description:
        'Anti-shading TwinCell design keeps output stable under partial shade from trees, roof racks and uneven sunlight — a good fit for RV rooftops, vans and vehicle-mounted installations.',
      specs: [
        { label: 'DIMENSIONS', value: '1180 × 770 × 35 mm' },
        { label: 'WEIGHT', value: '9.8 kg' },
        { label: 'OPERATING POINT', value: 'Vmp 21.91 V · Imp 8.21 A' },
        { label: 'OPEN / SHORT CIRCUIT', value: 'Voc 25.56 V · Isc 8.62 A' },
        { label: 'DESIGN', value: 'TwinCell parallel circuitry · IP68' },
      ],
      image: '/uploads/callsun/products/180w/hero-05.jpg',
      detailHref: '/products/cn180w/',
    },
    {
      key: 'cn200w',
      title: 'CN200W',
      subtitle: '200W N-Type 16BB Bifacial Solar Module',
      power: '200W',
      efficiency: '25% CELL EFFICIENCY',
      description:
        'Ultra-compact 200W with higher watt density per square metre for balcony PV, small off-grid gear and space-constrained rooftop setups where every watt per square metre counts.',
      specs: [
        { label: 'DIMENSIONS', value: '1104 × 770 × 35 mm' },
        { label: 'WEIGHT', value: '10.8 kg' },
        { label: 'OPERATING POINT', value: 'Vmp 23.74 V · Imp 8.43 A' },
        { label: 'OPEN / SHORT CIRCUIT', value: 'Voc 27.11 V · Isc 8.91 A' },
        { label: 'DESIGN', value: 'N-Type 16BB · Bifacial · IP68' },
      ],
      image: '/uploads/callsun/products/200w/front-back.jpg',
      detailHref: '/products/cn200w/',
    },
    {
      key: 'cn215w',
      title: 'CN215W',
      subtitle: '215W N-Type Anti-Shading Bifacial Solar Module',
      power: '215W',
      efficiency: '25% CELL EFFICIENCY',
      description:
        '4-zone anti-shading design tuned for 12 V systems and off-grid equipment where partial shade would otherwise hit output hard — well suited to vehicle and marine PV.',
      specs: [
        { label: 'DIMENSIONS', value: '1422 × 766 × 35 mm' },
        { label: 'WEIGHT', value: '11.5 kg' },
        { label: 'OPERATING POINT', value: 'Vmp 17.37 V · Imp 12.38 A' },
        { label: 'OPEN / SHORT CIRCUIT', value: 'Voc 20.41 V · Isc 13.12 A' },
        { label: 'DESIGN', value: '4-Zone anti-shading · 16BB · IP68' },
      ],
      image: '/uploads/callsun/products/215w/front-back.jpg',
      detailHref: '/products/cn215w/',
      datasheetHref: '/uploads/callsun/products/215w/CN215W-datasheet.pdf',
    },
  ] as CustomSku[],
  inquiry: {
    eyebrow: 'PRODUCT INQUIRY',
    title: 'Discuss Your Module Requirements',
    intro:
      'Share the target power, module dimensions, application, installation conditions and expected volume. We will review the requirements and respond with the relevant product or next step.',
    formTitle: 'Request Product Information',
  },
} as const;
