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
        title: 'N-TYPE TECHNOLOGY',
        body: 'N-type cells offer our advanced in-house cell technology with better performance and improved reliability, delivering an exceptional module efficiency of 22.52%.',
      },
      {
        num: '02',
        title: 'BIFACIAL POWER GAIN',
        body: 'N-type architecture increases bifaciality up to 80% ± 5% for a higher backside bonus and better lifetime yield, optimized by multi-busbar technology.',
      },
      {
        num: '03',
        title: 'LOW TEMPERATURE COEFFICIENT',
        body: 'Features a highly competitive temperature coefficient (Pmax) of −0.290%/°C for the highest lifetime energy yield in all climates.',
      },
      {
        num: '04',
        title: 'INDUSTRIAL GRADE CONSTRUCTION',
        body: 'Optimized dual-glass construction (2.0 + 2.0 mm tempered glass) with a silver anodized aluminium alloy frame for the highest mechanical load resistance.',
      },
      {
        num: '05',
        title: 'PROTECTED AGAINST ALL ENVIRONMENTS',
        body: 'Certified to withstand humidity, heat, rain, marine environments, wind, hailstorms and packed snow for reliable global deployment.',
      },
      {
        num: '06',
        title: 'WARRANTY',
        body: '25-year product warranty and 30-year linear power warranty (87.4% output at year 30) for maximum long-term investment protection.',
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
  cn580w: {
    slug: 'cn580w',
    model: 'CN580W',
    subtitle: '580W N-Type Bifacial Double-Glass Solar Module',
    tagline: 'N-Type · Bifacial · Double Glass',
    category: 'standard',
    categoryLabel: 'STANDARD PV MODULES',
    categoryHref: '/products/standard-modules/',
    keyStats: {
      power: '580W',
      efficiency: '22.45%',
      dimensions: '2278 × 1134 × 30 mm',
      weight: '30 kg',
    },
    heroImage: '/uploads/callsun/products/580w/card-square.jpg',
    datasheet: '/uploads/callsun/products/580w/CN580W-datasheet.pdf',
    features: [
      {
        num: '01',
        title: 'ADVANCED N-TYPE TECHNOLOGY',
        body: 'N-type architecture delivers lower LID and stronger low-light performance than P-type, for higher yield at dawn, dusk and under overcast — maximizing the commercial value of every installed watt.',
      },
      {
        num: '02',
        title: 'BIFACIAL POWER BOOST',
        body: 'Double-sided generation with 80% ± 5% bifaciality captures rear-side light from ground reflection, snow and light-colored rooftops — translating directly into shorter payback periods.',
      },
      {
        num: '03',
        title: 'MULTI-BUSBAR (MBB) DESIGN',
        body: '16BB cell design shortens the current collection path, lowers series resistance and improves performance under partial shading — ideal for rooftop and ground-mount installations.',
      },
      {
        num: '04',
        title: 'MINIMIZED PID DEGRADATION',
        body: 'Anti-PID engineering resists Potential Induced Degradation in high-humidity, high-temperature and 1500 V DC deployments — protecting long-term yield in tropical, coastal and utility-scale environments.',
      },
      {
        num: '05',
        title: 'INDUSTRIAL-GRADE DUAL-GLASS BUILD',
        body: '2.0 + 2.0 mm tempered dual-glass with anodized aluminium frame and IP68 junction box — withstands hail, snow, sand and salt mist without micro-crack propagation for a 30+ year service life.',
      },
      {
        num: '06',
        title: 'INDUSTRY-LEADING WARRANTY',
        body: '25-year product warranty and 30-year linear power warranty at 87.4% output, combined with 1% first-year degradation and full IEC 61215 / 61730 + ISO 9001 / 14001 / 45001 certification.',
      },
    ],
    tech: {
      electrical: [
        { label: 'MAXIMUM POWER',           value: '580 W' },
        { label: 'MODULE EFFICIENCY',       value: '22.45%' },
        { label: 'VMP / IMP',               value: '42.60 V / 13.62 A' },
        { label: 'VOC / ISC',               value: '51.47 V / 14.37 A' },
        { label: 'POWER TOLERANCE',         value: '0 to +5 W' },
        { label: 'MAXIMUM SYSTEM VOLTAGE',  value: '1500 V DC' },
        { label: 'MAXIMUM SERIES FUSE',     value: '25 A' },
        { label: 'BIFACIALITY',             value: '80% ± 5%' },
      ],
      mechanical: [
        { label: 'CELL TYPE',           value: 'N-type mono-crystalline silicon, 182 × 91.875 mm' },
        { label: 'CELL CONFIGURATION',  value: '144 pcs (6 × 12) × 2' },
        { label: 'DIMENSIONS',          value: '2278 × 1134 × 30 mm' },
        { label: 'WEIGHT',              value: '30 kg' },
        { label: 'FRONT / BACK GLASS',  value: '2.0 mm / 2.0 mm heat-strengthened' },
        { label: 'FRAME',               value: 'Anodized aluminium alloy' },
        { label: 'JUNCTION BOX',        value: 'IP68 · 3 bypass diodes' },
        { label: 'CABLE LENGTH',        value: '300 mm' },
      ],
      thermal: [
        { label: 'OPERATING TEMPERATURE', value: '-40°C to +85°C' },
        { label: 'PMAX COEFFICIENT',      value: '-0.35%/°C' },
        { label: 'VOC COEFFICIENT',       value: '-0.27%/°C' },
        { label: 'ISC COEFFICIENT',       value: '+0.045%/°C' },
        { label: 'NOCT',                  value: '42°C ± 2°C' },
        { label: 'PRODUCT WARRANTY',      value: '25 years' },
        { label: 'LINEAR WARRANTY',       value: '30 years · 87.4% at year 30' },
        { label: 'PACKAGING',             value: '36 pcs/pallet · 720 pcs/40HQ' },
      ],
    },
    certifications: [
      'IEC 61215 · IEC 61730',
      'ISO 9001:2015 · ISO 14001:2023 · ISO 45001:2023',
    ],
  },
};
