// Products L1 / Overview page (/products/)
// 原型：inbox/2026-07-23/图片设计/1-组件产品-10张/总.png

export const PRODUCTS_L1 = {
  breadcrumb: [
    { label: 'HOME', href: '/' },
    { label: 'PRODUCTS', href: '/products/' },
    { label: 'PV MODULES', href: null },
  ],
  hero: {
    eyebrow: 'PRODUCTS / PV MODULES',
    title: 'PV Module Portfolio',
    intro:
      'Two product families for volume module procurement and application-specific engineering requirements.',
    background: '/uploads/callsun/products/l1-hero.jpg',
    cta: { label: 'REQUEST PRODUCT INFORMATION', href: '/contact/' },
  },
  categoriesEyebrow: 'PV MODULE CATEGORIES',
  categories: [
    {
      key: 'standard',
      title: 'Standard PV Modules',
      wattTags: ['450W', '580W', '620W', '720W'],
      description:
        'Four high-power module classes for residential rooftops, distributed PV, off-grid systems, and small commercial and industrial projects.',
      cta: { label: 'VIEW STANDARD MODULES', href: '/products/standard-modules/' },
      images: [
        '/uploads/callsun/products/450w/tile.jpg',
        '/uploads/callsun/products/580w/card-square.jpg',
        '/uploads/callsun/products/620w/card-square.jpg',
        '/uploads/callsun/products/720w/card-square.jpg',
      ],
      theme: 'light' as const,
    },
    {
      key: 'custom',
      title: 'Custom PV Modules',
      wattTags: ['180W', '200W', '210W', '215W'],
      description:
        'Four application-specific module classes for RVs, vehicle rooftops, balconies, off-grid equipment, and other special installation conditions.',
      cta: { label: 'VIEW CUSTOM MODULES', href: '/products/custom-modules/' },
      images: [
        '/uploads/callsun/products/180w/tile.jpg',
        '/uploads/callsun/products/200w/tile.jpg',
        '/uploads/callsun/products/210w/front-back.jpg',
        '/uploads/callsun/products/215w/tile.jpg',
      ],
      theme: 'dark' as const,
    },
  ],
  inquiry: {
    eyebrow: 'PRODUCT INQUIRY',
    title: 'Discuss Your Module Requirements',
    intro:
      'Tell us the product family, quantity and destination. Our team will review the requirements and respond with the relevant product or next step.',
    formTitle: 'Request Product Information',
  },
};
