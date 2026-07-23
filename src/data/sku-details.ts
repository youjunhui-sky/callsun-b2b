/**
 * Product detail page data — one entry per SKU
 * Structure matches the prototype: hero + features (3 cards) + tech specs (3 columns) + docs & inquiry
 */

export interface SkuDetail {
  slug: string;                    // URL slug (cn450w)
  model: string;                   // CN450W
  subtitle: string;                // '450W N-Type Bifacial Double-Glass Solar Module'
  tagline: string;                 // 'N-Type · Bifacial · Double Glass'
  category: 'standard' | 'custom';
  categoryLabel: string;           // 'STANDARD PV MODULES' — for breadcrumb
  categoryHref: string;            // '/products/standard-modules/'
  keyStats: {
    power: string;
    efficiency: string;
    dimensions: string;
    weight: string;
  };
  heroImage: string;
  datasheet?: string;              // path to PDF or empty
  features: Array<{
    num: string;                   // '01'
    title: string;
    body: string;
  }>;
  tech: {
    electrical: Array<{ label: string; value: string }>;
    mechanical: Array<{ label: string; value: string }>;
    thermal:    Array<{ label: string; value: string }>;
  };
  certifications: string[];        // ['IEC 61215 · IEC 61730', ...]
}

export const SKU_DETAILS: Record<string, SkuDetail> = {
  cn450w: {
    slug: 'cn450w',
    model: 'CN450W',
    subtitle: '450W N-Type Bifacial Double-Glass Solar Module',
    tagline: 'N-Type · Bifacial · Double Glass',
    category: 'standard',
    categoryLabel: 'STANDARD PV MODULES',
    categoryHref: '/products/standard-modules/',
    keyStats: {
      power: '450W',
      efficiency: '22.52%',
      dimensions: '1762 × 1134 × 30 mm',
      weight: '24.5 kg',
    },
    heroImage: '/uploads/callsun/products/450w/01-front.jpg',
    datasheet: '/uploads/callsun/products/450w/CN450W-double-glass-datasheet.pdf',
    features: [
      {
        num: '01',
        title: 'N-TYPE CELL TECHNOLOGY',
        body: 'Lower LID degradation and better low-light performance than P-type equivalents.',
      },
      {
        num: '02',
        title: 'BIFACIAL DOUBLE-GLASS DESIGN',
        body: 'Generates from front-side light and reflected light reaching the rear glass surface.',
      },
      {
        num: '03',
        title: 'CONTROLLED MODULE CONSTRUCTION',
        body: '16-busbar cell layout, anodized aluminium frame, and IP68 junction box with 3 bypass diodes.',
      },
    ],
    tech: {
      electrical: [
        { label: 'MAXIMUM POWER',           value: '450 W' },
        { label: 'MODULE EFFICIENCY',       value: '22.52%' },
        { label: 'VMP / IMP',               value: '30.93 V / 14.55 A' },
        { label: 'VOC / ISC',               value: '35.01 V / 15.47 A' },
        { label: 'POWER TOLERANCE',         value: '0 to +5 W' },
        { label: 'MAXIMUM SYSTEM VOLTAGE',  value: '1500 V DC' },
        { label: 'MAXIMUM SERIES FUSE',     value: '30 A' },
        { label: 'BIFACIALITY',             value: '80% ± 5%' },
      ],
      mechanical: [
        { label: 'CELL TYPE',           value: 'N-type mono-crystalline silicon, 182 × 105 mm' },
        { label: 'CELL CONFIGURATION',  value: '96 pcs (6 × 8) × 2' },
        { label: 'DIMENSIONS',          value: '1762 × 1134 × 30 mm' },
        { label: 'WEIGHT',              value: '24.5 kg' },
        { label: 'FRONT / BACK GLASS',  value: '2.0 mm / 2.0 mm heat-strengthened' },
        { label: 'FRAME',               value: 'Anodized aluminium alloy' },
        { label: 'JUNCTION BOX',        value: 'IP68 · 3 bypass diodes' },
        { label: 'CABLE LENGTH',        value: '300 mm' },
      ],
      thermal: [
        { label: 'OPERATING TEMPERATURE', value: '-40°C to +85°C' },
        { label: 'PMAX COEFFICIENT',      value: '-0.30%/°C' },
        { label: 'VOC COEFFICIENT',       value: '-0.26%/°C' },
        { label: 'ISC COEFFICIENT',       value: '+0.045%/°C' },
        { label: 'NOCT',                  value: '42°C ± 2°C' },
        { label: 'PRODUCT WARRANTY',      value: '25 years' },
        { label: 'LINEAR WARRANTY',       value: '30 years · 87.4% at year 30' },
        { label: 'PACKAGING',             value: '36 pcs/pallet · 936 pcs/40HQ' },
      ],
    },
    certifications: [
      'IEC 61215 · IEC 61730',
      'ISO 9001:2015 · ISO 14001:2023 · ISO 45001:2023',
    ],
  },
  // TODO: cn580w, cn620w, cn720w, cn180w, cn200w, cn215w
};
