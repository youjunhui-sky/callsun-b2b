/**
 * About page data — Callsun brand & manufacturing story.
 *
 * Content mirrors the client mockup at
 * inbox/2026-07-23/图片设计/5-品牌页面/品牌中文.png (Chinese source).
 * English adaptation for global B2B audience — no History timeline,
 * no team/leadership, no certification wall, no world map component
 * (all beyond mockup scope; add only when客户 explicitly requests).
 */

export interface StatItem {
  value: string;
  label: string;   // uppercase eyebrow label
}

export const STATS: StatItem[] = [
  { value: '55,000 m²', label: 'Manufacturing base' },
  { value: '4',          label: 'Manufacturing regions' },
  { value: '6+',         label: 'Global logistics markets' },
  { value: '180–720W',   label: 'Module power classes' },
];

export interface Principle {
  step: string;
  eyebrow: string;
  title: string;
}

export const PRINCIPLES: Principle[] = [
  {
    step: '01',
    eyebrow: 'VOLUME PRODUCTION',
    title: 'Standard PV modules at scale',
  },
  {
    step: '02',
    eyebrow: 'CUSTOM ENGINEERING',
    title: 'Custom PV module engineering',
  },
  {
    step: '03',
    eyebrow: 'RELIABILITY QUALITY',
    title: 'Quality control and reliability validation',
  },
  {
    step: '04',
    eyebrow: 'SYSTEM SUPPORT',
    title: 'Application-driven system configuration',
  },
];

export interface ProcessStep {
  step: string;
  eyebrow: string;
  title: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { step: '01', eyebrow: 'ENGINEERING', title: 'Engineering Assessment' },
  { step: '02', eyebrow: 'PROTOTYPE',   title: 'Sample Prototype' },
  { step: '03', eyebrow: 'RELIABILITY', title: 'Reliability Validation' },
  { step: '04', eyebrow: 'MASS',        title: 'Mass Rollout' },
];

export interface PortfolioCard {
  eyebrow: string;
  title: string;
  body: string;
  powers: { label: string; href: string }[];
  tags: string[];
  href: string;
}

export const PORTFOLIO: PortfolioCard[] = [
  {
    eyebrow: 'STANDARD PV MODULES',
    title: 'Standard PV Modules',
    body: 'Suitable for residential rooftop, distributed PV, off-grid systems and small C&I projects. Higher watt-per-square-meter reduces system weight and installation labor.',
    powers: [
      { label: '450W', href: '/products/cn450w/' },
      { label: '580W', href: '/products/cn580w/' },
      { label: '620W', href: '/products/cn620w/' },
      { label: '720W', href: '/products/cn720w/' },
    ],
    tags: ['High-Efficiency Compatibility', 'PV Integration'],
    href: '/products/standard-modules/',
  },
  {
    eyebrow: 'CUSTOM PV MODULES',
    title: 'Custom PV Modules',
    body: 'For RV, rooftop, balcony, marine and OEM equipment scenarios — engineered by space, wattage, dimensions, structure and interface requirements with prototype-to-batch validation.',
    powers: [
      { label: '180W', href: '/products/cn180w/' },
      { label: '200W', href: '/products/cn200w/' },
      { label: '210W', href: '/products/cn210w/' },
      { label: '215W', href: '/products/cn215w/' },
    ],
    tags: ['Custom Sizing', 'Structural Development'],
    href: '/products/custom-modules/',
  },
];

export interface QCItem {
  eyebrow: string;
  title: string;
}

export const QC_TESTS: QCItem[] = [
  { eyebrow: 'EL INSPECTION',   title: 'Electroluminescence Inspection' },
  { eyebrow: 'SOLAR SIMULATOR', title: 'Lab-grade Solar Simulator' },
  { eyebrow: 'DAMP HEAT',       title: 'Damp Heat & Thermal Cycling' },
  { eyebrow: 'UV AGING TEST',   title: 'UV Aging Test' },
  { eyebrow: 'MECHANICAL LOAD', title: 'Static Mechanical Load' },
  { eyebrow: 'INSULATION TEST', title: 'Withstand Voltage & Insulation' },
];

export const SUPPLY_COUNTRIES = [
  'China', 'Vietnam', 'Indonesia', 'Saudi Arabia',
  'USA', 'UK', 'Germany', 'Australia', 'Canada', 'Japan',
] as const;

export interface CustomerType {
  title: string;
}

// Simple title-only cards (matches mockup exactly — no body copy).
export const CUSTOMER_TYPES: CustomerType[] = [
  { title: 'Distributors and Wholesale Buyers' },
  { title: 'Installers and System Service Providers' },
  { title: 'Equipment Manufacturers and Project Buyers' },
];

export interface ApplicationTab {
  eyebrow: string;
  title: string;
  href: string;
}

// Simple tab-strip entries (matches mockup: title + small eyebrow, no body, no CTA).
export const APPLICATION_TABS: ApplicationTab[] = [
  { eyebrow: 'RESIDENTIAL', title: 'Residential Solar',    href: '/solutions/' },
  { eyebrow: 'RV & MOBILE', title: 'RV & Mobile',          href: '/products/custom-modules/' },
  { eyebrow: 'BALCONY',     title: 'Balcony Solar',        href: '/products/custom-modules/' },
  { eyebrow: 'OFF-GRID',    title: 'Off-Grid Systems',     href: '/solutions/' },
  { eyebrow: 'COMMERCIAL',  title: 'Small Commercial',     href: '/solutions/' },
];
