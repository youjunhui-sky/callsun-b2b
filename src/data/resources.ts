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
    href: '#datasheets',
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

export interface DatasheetItem {
  model: string;
  spec: string;
  category: 'Standard' | 'Custom';
  file: string;
  size: string;
}

export const DATASHEETS: DatasheetItem[] = [
  { model: 'CN450W', spec: 'Bifacial Dual-Glass · N-Type TOPCon', category: 'Standard', file: '/uploads/callsun/datasheets/CN450W-datasheet.pdf', size: '4.9 MB' },
  { model: 'CN580W', spec: 'Bifacial Dual-Glass · N-Type TOPCon', category: 'Standard', file: '/uploads/callsun/datasheets/CN580W-datasheet.pdf', size: '3.8 MB' },
  { model: 'CN620W', spec: 'Bifacial Dual-Glass · N-Type TOPCon', category: 'Standard', file: '/uploads/callsun/datasheets/CN620W-datasheet.pdf', size: '4.1 MB' },
  { model: 'CN720W', spec: 'Bifacial Dual-Glass · N-Type TOPCon', category: 'Standard', file: '/uploads/callsun/datasheets/CN720W-datasheet.pdf', size: '1.0 MB' },
];

export const RESOURCE_FAQ = [
  {
    q: 'Is Callsun a PV module manufacturer or a trading company?',
    a: 'Callsun is a PV module brand and manufacturer with in-house capabilities in product development, manufacturing and testing. We combine scalable production of standard modules with engineering development for custom modules, supporting distributors, installers, EPCs, equipment manufacturers and project buyers from product selection and sample validation through volume delivery.',
  },
  {
    q: 'What types of PV products does Callsun offer?',
    a: 'Callsun\u2019s portfolio includes standard PV modules for residential, commercial and utility-scale projects, as well as custom modules developed for RVs, marine applications, off-grid equipment, partially shaded environments and space-constrained installations. For selected off-grid projects, we can also recommend evaluated combinations of PV modules and compatible system components based on the customer\u2019s load requirements and equipment specifications.',
  },
  {
    q: 'Does Callsun provide OEM and ODM services?',
    a: 'Yes. Callsun provides OEM and ODM services based on project requirements and order conditions. Customization may cover module dimensions, power output, electrical characteristics, material structure, cables and connectors, labeling, packaging and brand presentation. Every custom project is subject to an engineering feasibility review and is manufactured according to the final technical specification approved by both parties.',
  },
  {
    q: 'How does Callsun ensure product quality and batch-to-batch consistency?',
    a: 'Callsun maintains product quality and batch consistency through incoming material inspection, controlled production processes and finished-product testing. Key quality procedures include soldering inspection, lamination control, electroluminescence testing, IV performance testing, dimensional and visual inspection, and final pre-shipment inspection. These controls help reduce the risks of microcracks, soldering defects, power deviations and cosmetic issues while ensuring that volume production conforms to the approved technical specifications.',
  },
  {
    q: 'What certifications are available for Callsun products?',
    a: 'Certification coverage varies by product series and depends on the module design, bill of materials, electrical specifications, manufacturing location and target market. Based on the intended sales region or project requirements, we can provide the available certificates, test reports and technical documentation for the relevant model. For custom products or market-specific compliance requirements, we can also help assess whether certification extensions or additional testing may be required.',
  },
  {
    q: 'Does Callsun support samples and small trial orders?',
    a: 'Samples and small trial orders may be available for selected standard products, subject to inventory and delivery conditions. This allows customers to evaluate product performance, system compatibility and market demand before committing to volume procurement. For custom modules, we normally complete the engineering review and technical specification approval before proceeding with prototype production, testing and volume-production assessment.',
  },
  {
    q: 'What are Callsun\u2019s minimum order quantities and lead times?',
    a: 'Minimum order quantities and lead times depend on the product model, inventory availability, order volume, packaging requirements, level of customization and certification needs. In-stock standard products can generally be arranged more quickly, while custom products require additional time for engineering approval, material preparation, prototype validation and production setup. Once the project requirements are provided, we will confirm the applicable MOQ, production schedule and estimated delivery timeline.',
  },
  {
    q: 'How can I receive an accurate quotation for a volume order?',
    a: 'B2B pricing depends on the product model, order quantity, packaging, certification requirements, delivery destination, logistics method and applicable Incoterms, so Callsun does not apply a single publicly listed wholesale price. To receive an accurate and actionable quotation, please provide the required model or power range, estimated quantity, destination country or port, preferred delivery schedule, and any OEM or certification requirements.',
  },
  {
    q: 'What technical and commercial support does Callsun provide?',
    a: 'Callsun supports customers with product selection, technical specification review, preliminary compatibility assessment between modules and system equipment, sample validation, custom development, technical documentation, certification files, packaging design, and production and delivery coordination. Final decisions involving complete electrical design, structural safety, grid-connection approval and local installation codes should be reviewed by qualified engineers or installers in the project location.',
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
    title: 'Callsun 450W Bifacial Solar Panel Review',
    body: 'Independent field review of the Callsun 450W bifacial module.',
    credit: 'ReeWay Outdoors',
    thumb: '/uploads/callsun/videos/ckNe2EctH5w.jpg',
    href: 'https://www.youtube.com/watch?v=ckNe2EctH5w',
  },
  {
    badge: 'VIDEO',
    title: 'Callsun 450W N-Type: Testing and Review',
    body: 'Product inspection, testing and performance impressions from a real-world installer.',
    credit: 'Our Black Cat Cottage',
    thumb: '/uploads/callsun/videos/zSQSWBTLaL8.jpg',
    href: 'https://www.youtube.com/watch?v=zSQSWBTLaL8',
  },
  {
    badge: 'VIDEO',
    title: '215W Anti-Shading Lab Test',
    body: 'A lab demonstration of ShadeGuard\u2122 anti-shading response and stable module output under partial shade.',
    credit: 'Callsun',
    thumb: '/uploads/callsun/videos/Qa-0HqwHgR0.jpg',
    href: 'https://www.youtube.com/watch?v=Qa-0HqwHgR0',
  },
];
