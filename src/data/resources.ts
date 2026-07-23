/**
 * Resources page data — technical documents, FAQ and video reviews.
 *
 * Content mirrors the client mockup at
 * inbox/2026-07-23/图片设计/3-资源中心/Callsun_Resource_Center_Page_v2.png:
 *   - 3 download categories (datasheets / manuals / certificates)
 *   - 9-question B2B FAQ (product + cooperation)
 *   - 3 video reviews (2 independent + 1 Callsun lab test)
 */

export interface DownloadCategory {
  step: string;
  title: string;
  body: string;
  cta: string;
  href: string;
}

export const DOWNLOAD_CATEGORIES: DownloadCategory[] = [
  {
    step: '01',
    title: 'PRODUCT DATASHEETS',
    body: 'Electrical, mechanical and product specifications for every Callsun standard and custom PV module.',
    cta: 'VIEW DATASHEETS',
    href: '/products/',
  },
  {
    step: '02',
    title: 'INSTALLATION & USER MANUALS',
    body: 'Installation guidance, wiring diagrams and operating documentation for solar kits and modules.',
    cta: 'VIEW MANUALS',
    href: '/contact/',
  },
  {
    step: '03',
    title: 'CERTIFICATES & TEST REPORTS',
    body: 'IEC 61215 / 61730, ISO 9001·14001·45001 and available third-party test documentation on request.',
    cta: 'VIEW DOCUMENTS',
    href: '/contact/',
  },
];

export const RESOURCE_FAQ = [
  {
    q: 'Is Callsun a PV module manufacturer or a trading company?',
    a: 'Callsun is a manufacturer of standard and custom solar PV modules with in-house production, R&D and B2B logistics. We ship containers directly to distributors, dealers and EPC installers.',
  },
  {
    q: 'What types of PV products does Callsun offer?',
    a: 'Standard 450W-620W N-Type bifacial modules for C&I and residential rooftop, and compact 180W-215W custom modules for RV, marine and off-grid applications. Complete solar-plus-storage packages (5.4kW / 7.2kW / 10.8kW) are also available.',
  },
  {
    q: 'Does Callsun provide OEM and ODM services?',
    a: 'Yes. Callsun runs OEM and ODM programs for module partners with customized wattage, cell layout, frame, connector and packaging. Send target specs and monthly volume to the sales team for a project quotation.',
  },
  {
    q: 'What is the minimum order quantity for distributors?',
    a: 'Standard modules ship by container (594 pcs per 40HQ for CN720W; comparable pallet math for other models). Sample orders and partial pallets can be discussed for new-market pilots.',
  },
  {
    q: 'Which markets does Callsun currently supply?',
    a: 'North America, Europe, Southeast Asia, Australia, Africa and Latin America. Local certification (UL, TUV, CEC, INMETRO, etc.) supported per market request.',
  },
  {
    q: 'What is the standard product warranty?',
    a: '25-year linear power warranty on standard modules with ≥84.5% output guaranteed at year 25. 12-year product warranty on materials and workmanship. LiFePO4 battery kits carry a 10-year cycle warranty.',
  },
  {
    q: 'How does Callsun handle shipping and Incoterms?',
    a: 'FOB, CIF, DDP and EXW terms available. Callsun works with global forwarders and can arrange US, EU and SEA local warehouses for expedited dealer replenishment.',
  },
  {
    q: 'Where can I find third-party test videos and reviews?',
    a: 'See the Video Center section on this page. Independent installers and Callsun\'s own lab publish tests for the 450W bifacial and 215W anti-shading modules.',
  },
  {
    q: 'How do I request a document that is not listed?',
    a: 'Use the Contact Callsun team CTA at the bottom of this page. Include the exact product model, target market and documentation type.',
  },
];

export interface VideoCard {
  badge: string;
  title: string;
  body: string;
  credit: string;
  thumb: string;
  href?: string;
}

export const VIDEO_CARDS: VideoCard[] = [
  {
    badge: 'VIDEO',
    title: 'Callsun 450W Bifacial Solar Panel | MORE for LESS?!',
    body: 'Independent field review of the Callsun 450W bifacial module.',
    credit: 'ReelWray Outdoors',
    thumb: '/uploads/callsun/products/450w/01-front.jpg',
  },
  {
    badge: 'VIDEO',
    title: 'Callsun 450W Bifacial Solar Panel: Testing and Review',
    body: 'Product inspection, testing and performance impressions from a real-world installer.',
    credit: 'Our Black Cat Cottage',
    thumb: '/uploads/callsun/products/450w/homepage-card.webp',
  },
  {
    badge: 'VIDEO',
    title: 'Callsun 215W Anti-Shading Panel: Lab Tested',
    body: 'A lab demonstration of ShadeGuard\u2122 anti-shading response and stable module output under partial shade.',
    credit: 'Callsun',
    thumb: '/uploads/callsun/products/215w/01-front.jpg',
  },
];
