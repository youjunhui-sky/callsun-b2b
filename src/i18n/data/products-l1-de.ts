// Products L1 — Deutsch (/de/products/)
export const PRODUCTS_L1_DE = {
  breadcrumb: [
    { label: 'STARTSEITE', href: '/de/' },
    { label: 'PRODUKTE', href: '/de/products/' },
    { label: 'PV-MODULE', href: null },
  ],
  hero: {
    eyebrow: 'PRODUKTE / PV-MODULE',
    title: 'PV-Modulportfolio',
    intro:
      'Zwei Produktfamilien für den Modulgroßeinkauf und anwendungsspezifische Engineering-Anforderungen.',
    background: '/uploads/callsun/products/l1-hero.webp',
    cta: { label: 'PRODUKTINFORMATION ANFORDERN', href: '/de/contact/' },
  },
  categoriesEyebrow: 'PV-MODULKATEGORIEN',
  categories: [
    {
      key: 'standard',
      title: 'Standard-PV-Module',
      wattTags: ['450W', '580W', '620W', '720W'],
      description:
        'Vier Hochleistungs-Modulklassen für Wohngebäudedächer, Photovoltaik-Freiflächen, Inselsysteme und kleine Gewerbe- und Industrieprojekte.',
      cta: { label: 'MEHR ANSEHEN', href: '/de/products/standard-modules/' },
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
      title: 'Individuelle PV-Module',
      wattTags: ['180W', '200W', '210W', '215W'],
      description:
        'Vier anwendungsspezifische Modulklassen für Wohnmobile, Fahrzeugdächer, Balkone, Inselanlagen und andere besondere Einbausituationen.',
      cta: { label: 'MEHR ANSEHEN', href: '/de/products/custom-modules/' },
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
    eyebrow: 'PRODUKTANFRAGE',
    title: 'Besprechen Sie Ihre Modulanforderungen',
    intro:
      'Nennen Sie uns Produktfamilie, Stückzahl und Zielland. Unser Team prüft die Anforderungen und antwortet mit dem passenden Produkt oder dem nächsten Schritt.',
    formTitle: 'Produktinformation anfordern',
  },
};
