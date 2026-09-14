// Products L1 — Español (/es/products/)
export const PRODUCTS_L1_ES = {
  breadcrumb: [
    { label: 'INICIO', href: '/es/' },
    { label: 'PRODUCTOS', href: '/es/products/' },
    { label: 'MÓDULOS FV', href: null },
  ],
  hero: {
    eyebrow: 'PRODUCTOS / MÓDULOS FV',
    title: 'Portafolio de módulos FV',
    intro:
      'Dos familias de productos para compras de gran volumen y requisitos de ingeniería específicos de cada aplicación.',
    background: '/uploads/callsun/products/l1-hero.webp',
    cta: { label: 'SOLICITAR INFORMACIÓN DEL PRODUCTO', href: '/es/contact/' },
  },
  categoriesEyebrow: 'CATEGORÍAS DE MÓDULOS FV',
  categories: [
    {
      key: 'standard',
      title: 'Módulos FV estándar',
      wattTags: ['450W', '580W', '620W', '720W'],
      description:
        'Cuatro clases de módulos de alta potencia para tejados residenciales, FV distribuida, sistemas aislados y proyectos pequeños comerciales e industriales.',
      cta: { label: 'VER MÁS', href: '/es/products/standard-modules/' },
      images: [
        '/uploads/callsun/products/450w/card-logo.webp',
        '/uploads/callsun/products/580w/card-logo.webp',
        '/uploads/callsun/products/620w/card-logo.webp',
        '/uploads/callsun/products/720w/card-logo.webp',
      ],
      theme: 'light' as const,
    },
    {
      key: 'custom',
      title: 'Módulos FV personalizados',
      wattTags: ['180W', '200W', '210W', '215W'],
      description:
        'Cuatro clases de módulos específicos para autocaravanas, tejados de vehículos, balcones, equipos aislados y otras condiciones especiales de instalación.',
      cta: { label: 'VER MÁS', href: '/es/products/custom-modules/' },
      images: [
        '/uploads/callsun/products/180w/card-logo.webp',
        '/uploads/callsun/products/200w/card-logo.webp',
        '/uploads/callsun/products/210w/card-logo.webp',
        '/uploads/callsun/products/215w/card-logo.webp',
      ],
      theme: 'dark' as const,
    },
  ],
  inquiry: {
    eyebrow: 'CONSULTA DE PRODUCTO',
    title: 'Comente sus requisitos de módulos',
    intro:
      'Indíquenos la familia de producto, la cantidad y el destino. Nuestro equipo revisará los requisitos y responderá con el producto adecuado o el siguiente paso.',
    formTitle: 'Solicitar información del producto',
  },
};
