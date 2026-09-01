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
  certTitle?: string;              // override for "{model} product resources" heading
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
      weight: '23.97 kg',
    },
    heroImage: '/uploads/callsun/products/450w/01-front.webp',
    datasheet: '/uploads/callsun/products/450w/Callsun-CN450W-N-Type-Bifacial-Dual-Glass-Solar-Module-Datasheet.pdf',
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
        body: 'Optimized dual-glass construction (2.0 + 2.0 mm tempered glass) with an anodized aluminium alloy frame for the highest mechanical load resistance.',
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
        { label: 'Module Efficiency STC (%)',       value: '22.52%' },
        { label: 'Vmp / Imp',               value: '29.73 V / 15.14 A' },
        { label: 'Voc / Isc',               value: '35.84 V / 15.98 A' },
        { label: 'POWER TOLERANCE',         value: '0~±5 W' },
        { label: 'MAXIMUM SYSTEM VOLTAGE',  value: '1500 V DC' },
        { label: 'MAXIMUM SERIES FUSE',     value: '30 A' },
        { label: 'BIFACIALITY',             value: '80% ± 5%' },
        { label: 'PROTECTION CLASS',        value: 'Class II' },
      ],
      mechanical: [
        { label: 'CELL TYPE',           value: 'N-type mono-crystalline silicon, 182 × 105 mm' },
        { label: 'CELL CONFIGURATION',  value: '96 pcs (6 × 8) × 2' },
        { label: 'DIMENSIONS',          value: '1762 × 1134 × 30 mm' },
        { label: 'WEIGHT',              value: '23.97 kg' },
        { label: 'FRONT / BACK GLASS',  value: '2.0 mm AR-coated heat-strengthened glass / 2.0 mm heat-strengthened glass' },
        { label: 'FRAME',               value: 'Anodized aluminium alloy' },
        { label: 'JUNCTION BOX',        value: 'IP68 · 3 bypass diodes' },
        { label: 'CABLE LENGTH',        value: '300 mm' },
        { label: 'FIRE PERFORMANCE',    value: 'Class C' },
      ],
      thermal: [
        { label: 'OPERATING TEMPERATURE', value: '-40°C ~ +85°C' },
        { label: 'PMAX COEFFICIENT',      value: '-0.290%/°C' },
        { label: 'VOC COEFFICIENT',       value: '-0.250%/°C' },
        { label: 'ISC COEFFICIENT',       value: '+0.045%/°C' },
        { label: 'NOCT',                  value: '42°C ± 2°C' },
        { label: 'FIRST-YEAR DEGRADATION', value: '1%' },
        { label: 'PRODUCT WARRANTY',      value: '25 years' },
        { label: 'LINEAR WARRANTY',       value: '30 years · 87.4% at year 30' },
        { label: 'PACKAGING',             value: '36 pcs/pallet · 936 pcs/40HQ' },
      ],
    },
    certTitle: 'CN450W',
    certifications: [
      '__emph__IEC 61215 · IEC 61730',
    ],
  },
  cn215w: {
    slug: 'cn215w',
    model: 'CN215W',
    subtitle: 'CN215W Custom N-Type Bifacial Module with Anti-Shading',
    tagline: 'N-Type · Bifacial · Anti-Shading',
    category: 'custom',
    categoryLabel: 'CUSTOM PV MODULES',
    categoryHref: '/products/custom-modules/',
    keyStats: {
      power: '215W',
      efficiency: '25.6%',
      dimensions: '1422 × 766 × 35 mm',
      weight: '11.5 kg',
    },
    heroImage: '/uploads/callsun/products/215w/front-back.webp',
    datasheet: '/uploads/callsun/products/215w/CN215W-datasheet.pdf',
    features: [
      {
        num: '01',
        title: 'N-TYPE 16BB TOPCON TECHNOLOGY',
        body: 'Advanced N-type architecture with Callsun\'s in-house TOPCon cell technology and 16BB super multi-busbar layout delivers over 25% conversion efficiency, superior low-light performance and exceptional long-term stability.',
      },
      {
        num: '02',
        title: 'OPTIMIZED BIFACIAL GAIN',
        body: 'Dual-glass N-type design captures up to 30% extra energy from the backside — grass 7.21%, cement 9.54%, sand 9.84%, snow 14.83%, mirror 24.85% — significantly boosting daily and lifetime yield.',
      },
      {
        num: '03',
        title: 'ANTI-SHADING 4-ZONE DESIGN',
        body: '4 independent power zones with multiple bypass diodes keep Vmp stable under partial shade from trees, masts or ridges — retaining 75% more power, eliminating MPPT restarts and reducing hot-spot stress.',
      },
      {
        num: '04',
        title: 'LOW TEMPERATURE COEFFICIENT',
        body: 'Best-in-class −0.30%/K temperature coefficient minimizes power degradation in intense heat, ensuring stable and consistent performance across desert, marine and high-temperature environments.',
      },
      {
        num: '05',
        title: 'PROTECTED AGAINST EXTREME ENVIRONMENTS',
        body: 'IP68 junction box, 3.2 mm tempered glass and anodized aluminium frame deliver all-weather durability — certified for marine salt spray, humidity, heavy rain, high winds, hail and packed snow with 2400 Pa wind and 5400 Pa snow loads.',
      },
      {
        num: '06',
        title: 'INDUSTRY-LEADING WARRANTY',
        body: 'Backed by a 10-year product quality warranty and a 25-year linear power warranty (84.5% output at year 25; 1% first-year + 0.4%/year linear), ensuring long-term reliability and secure energy returns.',
      },
    ],
    tech: {
      electrical: [
        { label: 'MAXIMUM POWER',           value: '215 W' },
        { label: 'CELL EFFICIENCY',         value: '25.6%' },
        { label: 'Vmp / Imp',               value: '17.30 V / 12.43 A' },
        { label: 'Voc / Isc',               value: '20.09 V / 12.98 A' },
        { label: 'POWER TOLERANCE',         value: '0 ~ ±5 W' },
        { label: 'MAXIMUM SYSTEM VOLTAGE',  value: '1500 V DC' },
        { label: 'MAXIMUM SERIES FUSE',     value: '25 A' },
        { label: 'OPERATING TEMPERATURE',   value: '-40°C ~ +85°C' },
      ],
      mechanical: [
        { label: 'CELL TYPE',         value: 'N-Type · 16BB · Mono-crystalline Silicon' },
        { label: 'DIMENSIONS',        value: '1422 × 766 × 35 mm' },
        { label: 'WEIGHT',            value: '11.5 kg' },
        { label: 'GLASS',             value: '3.2 mm tempered glass' },
        { label: 'FRAME',             value: 'Anodized aluminium alloy' },
        { label: 'IP RATING',         value: 'IP68' },
        { label: 'WIND / SNOW LOAD',  value: '2400 Pa / 5400 Pa' },
        { label: 'CONNECTOR',         value: 'Solar connector' },
      ],
      thermal: [
        { label: 'CIRCUIT DESIGN',          value: '4-module parallel circuitry' },
        { label: 'PMAX COEFFICIENT',        value: '-0.30%/K' },
        { label: 'VOC COEFFICIENT',         value: '-0.25%/K' },
        { label: 'ISC COEFFICIENT',         value: '+0.045%/K' },
        { label: 'FIRST-YEAR DEGRADATION',  value: '1%' },
        { label: 'LINEAR DEGRADATION',      value: '0.4% per year' },
        { label: '25-YEAR OUTPUT',          value: '89.6%' },
        { label: 'PRODUCT WARRANTY',        value: '10 years product · 25 years linear power' },
      ],
    },
    certTitle: 'CN215W',
    certifications: [
      '__emph__CE (EMC), RoHS',
      'EN 55014 Series; EN 61000 Series; IEC 62321 Series',
    ],
  },
  cn200w: {
    slug: 'cn200w',
    model: 'CN200W',
    subtitle: 'CN200W Custom N-Type Bifacial Module',
    tagline: 'N-Type · Bifacial · Anti-Shading',
    category: 'custom',
    categoryLabel: 'CUSTOM PV MODULES',
    categoryHref: '/products/custom-modules/',
    keyStats: {
      power: '200W',
      efficiency: '25.6%',
      dimensions: '1304 × 770 × 35 mm',
      weight: '10.5 kg',
    },
    heroImage: '/uploads/callsun/products/200w/front-back.webp',
    datasheet: '/uploads/callsun/datasheets/CN180W-CN200W-datasheet.pdf',
    features: [
      {
        num: '01',
        title: 'N-TYPE 16BB TECHNOLOGY',
        body: 'Advanced N-type cells with 16BB architecture deliver up to 25% cell efficiency and superior reliability by minimizing micro-cracks and hot spots.',
      },
      {
        num: '02',
        title: 'BIFACIAL POWER GAIN',
        body: 'Transparent backsheet design harnesses direct, reflected and diffuse light from the backside, increasing total power output by up to 30%.',
      },
      {
        num: '03',
        title: 'TWINCELL ANTI-SHADE TECHNOLOGY',
        body: 'Innovative dual-module parallel design boosts shading tolerance by up to 50%, ensuring uninterrupted power generation even under partial coverage.',
      },
      {
        num: '04',
        title: 'LOW TEMPERATURE COEFFICIENT',
        body: 'Industry-leading −0.30%/K temperature coefficient minimizes power loss, ensuring stable and consistent performance in extreme heat.',
      },
      {
        num: '05',
        title: 'INDUSTRIAL GRADE & COMPACT FIT',
        body: 'Ultra-strong 3.2 mm tempered glass and IP68 waterproofing in a compact footprint — engineered for tight spaces and an extended 30-year lifespan.',
      },
      {
        num: '06',
        title: 'INDUSTRY-LEADING WARRANTY',
        body: 'Backed by a 25-year linear performance commitment and 10 years of dedicated technical support for long-term reliability and secure returns.',
      },
    ],
    tech: {
      electrical: [
        { label: 'MAXIMUM POWER',           value: '200 W' },
        { label: 'CELL EFFICIENCY',         value: '25.6%' },
        { label: 'Vmp / Imp',               value: '24.83 V / 8.05 A' },
        { label: 'Voc / Isc',               value: '28.68 V / 8.86 A' },
        { label: 'POWER TOLERANCE',         value: '0 ~ ±5 W' },
        { label: 'MAXIMUM SYSTEM VOLTAGE',  value: '1500 V DC' },
        { label: 'MAXIMUM SERIES FUSE',     value: '20 A' },
        { label: 'OPERATING TEMPERATURE',   value: '-40°C ~ +85°C' },
      ],
      mechanical: [
        { label: 'CELL TYPE',         value: 'N-Type · 16BB · Mono-crystalline Silicon' },
        { label: 'DIMENSIONS',        value: '1304 × 770 × 35 mm' },
        { label: 'WEIGHT',            value: '10.5 kg' },
        { label: 'GLASS',             value: '3.2 mm tempered glass' },
        { label: 'FRAME',             value: 'Anodized aluminium alloy' },
        { label: 'IP RATING',         value: 'IP68' },
        { label: 'WIND / SNOW LOAD',  value: '2400 Pa / 5400 Pa' },
        { label: 'CONNECTOR',         value: 'Solar connector' },
      ],
      thermal: [
        { label: 'CIRCUIT DESIGN',          value: 'Dual-module parallel circuitry' },
        { label: 'PMAX COEFFICIENT',        value: '-0.30%/K' },
        { label: 'VOC COEFFICIENT',         value: '-0.25%/K' },
        { label: 'ISC COEFFICIENT',         value: '+0.045%/K' },
        { label: 'FIRST-YEAR DEGRADATION',  value: '1%' },
        { label: 'LINEAR DEGRADATION',      value: '0.4% per year' },
        { label: '25-YEAR OUTPUT',          value: '89.6%' },
        { label: 'PRODUCT WARRANTY',        value: '10 years product · 25 years linear power' },
      ],
    },
    certTitle: 'CN200W',
    certifications: [
      '__emph__CE (EMC), RoHS',
      'EN 55014 Series; EN 61000 Series; IEC 62321 Series',
    ],
  },
  cn210w: {
    slug: 'cn210w',
    model: 'CN210W',
    subtitle: 'CN210W Custom N-Type Bifacial Module',
    tagline: 'N-Type · Bifacial · Dual-Module Anti-Shading',
    category: 'custom',
    categoryLabel: 'CUSTOM PV MODULES',
    categoryHref: '/products/custom-modules/',
    keyStats: {
      power: '210W',
      efficiency: '25.6%',
      dimensions: '1377 × 767 × 36 mm',
      weight: '11.3 kg',
    },
    heroImage: '/uploads/callsun/products/210w/front-back.webp',
    datasheet: '/uploads/callsun/datasheets/CN210W-datasheet.pdf',
    features: [
      {
        num: '01',
        title: 'N-TYPE 16BB HIGH-EFFICIENCY CELLS',
        body: 'Advanced N-type cells with a 16-busbar design deliver 25.6% cell efficiency, improved low-light response and stable power generation throughout the day.',
      },
      {
        num: '02',
        title: 'HIGH-VOLTAGE OUTPUT FOR 24V SYSTEMS',
        body: 'With a 34.2V operating voltage, the module is designed for efficient charging in 24V off-grid systems, reducing the need for complex series connections.',
      },
      {
        num: '03',
        title: 'LOWER CURRENT, LOWER SYSTEM LOSS',
        body: 'The 6.1A operating current helps reduce cable transmission loss and voltage drop, supporting more efficient system design over longer cable runs.',
      },
      {
        num: '04',
        title: 'STABLE OUTPUT IN HIGH TEMPERATURES',
        body: 'A low −0.30%/K power temperature coefficient limits output loss in hot conditions, supporting reliable operation in rooftop, RV, marine and off-grid applications.',
      },
      {
        num: '05',
        title: 'BUILT FOR DEMANDING ENVIRONMENTS',
        body: 'IP68 protection, 3.2 mm tempered glass and a durable aluminium frame withstand rain, dust, wind and snow, with load ratings of 2400 Pa wind and 5400 Pa snow.',
      },
      {
        num: '06',
        title: 'LONG-TERM POWER RELIABILITY',
        body: 'Backed by a 10-year product warranty and 25-year linear power warranty, with 84.5% guaranteed output at year 25 for predictable long-term energy returns.',
      },
    ],
    tech: {
      electrical: [
        { label: 'MAXIMUM POWER',           value: '210W' },
        { label: 'Vmp / Imp',               value: '34.2V / 6.1A' },
        { label: 'Voc / Isc',               value: '40.3V / 6.5A' },
        { label: 'CELL EFFICIENCY',         value: '25.6%' },
        { label: 'SYSTEM CONFIGURATION',    value: 'Suitable for 12V and 24V systems' },
        { label: 'MAXIMUM SYSTEM VOLTAGE',  value: '1500 V DC' },
        { label: 'MAXIMUM SERIES FUSE',     value: '25 A' },
        { label: 'OPERATING TEMPERATURE',   value: '-40°C ~ +85°C' },
        { label: 'STANDARD TEST CONDITIONS', value: '1000 W/m² · 25°C · AM1.5' },
      ],
      mechanical: [
        { label: 'CELL TYPE',         value: 'N-Type · 16BB · Mono-crystalline Silicon' },
        { label: 'DIMENSIONS',        value: '1376 × 766 × 35 mm' },
        { label: 'WEIGHT',            value: '11.3 kg' },
        { label: 'GLASS',             value: '3.2 mm tempered glass' },
        { label: 'FRAME',             value: 'Anodized aluminium alloy' },
        { label: 'IP RATING',         value: 'IP68' },
        { label: 'WIND / SNOW LOAD',  value: '2400 Pa / 5400 Pa' },
        { label: 'CONNECTOR',         value: 'Solar connector' },
        { label: 'MOUNTING',          value: '12 mounting holes' },
      ],
      thermal: [
        { label: 'CIRCUIT DESIGN',          value: 'Dual-module parallel circuitry' },
        { label: 'PMAX COEFFICIENT',        value: '-0.30%/K' },
        { label: 'VOC COEFFICIENT',         value: '-0.25%/K' },
        { label: 'ISC COEFFICIENT',         value: '+0.045%/K' },
        { label: 'FIRST-YEAR DEGRADATION',  value: '1%' },
        { label: 'LINEAR DEGRADATION',      value: '0.4% per year' },
        { label: '25-YEAR OUTPUT',          value: '89.6%' },
        { label: 'PRODUCT WARRANTY',        value: '10 years product · 25 years linear power' },
        { label: 'APPLICATIONS',            value: 'RV · Marine · Roof · Off-grid' },
      ],
    },
    certifications: [
      'IEC 61215 · IEC 61730',
      'ISO 9001:2015 · ISO 14001:2023 · ISO 45001:2023',
    ],
  },
  cn180w: {
    slug: 'cn180w',
    model: 'CN180W',
    subtitle: 'CN180W Custom N-Type Bifacial Module',
    tagline: 'N-Type · Bifacial · Anti-Shading',
    category: 'custom',
    categoryLabel: 'CUSTOM PV MODULES',
    categoryHref: '/products/custom-modules/',
    keyStats: {
      power: '180W',
      efficiency: '25.6%',
      dimensions: '1180 × 770 × 35 mm',
      weight: '9.8 kg',
    },
    heroImage: '/uploads/callsun/products/180w/hero-05.webp',
    datasheet: '/uploads/callsun/datasheets/CN180W-CN200W-datasheet.pdf',
    features: [
      {
        num: '01',
        title: 'FLAGSHIP N-TYPE TOPCON TECHNOLOGY',
        body: 'Industry-leading N-type TOPCon cell technology with record cell efficiency, lower degradation rates and exceptional long-term power generation reliability for off-grid deployment.',
      },
      {
        num: '02',
        title: '30% BIFACIAL POWER GAIN',
        body: 'Advanced bifacial technology with transparent backsheet captures reflected light from white RV roofs, sand or boat decks — delivering up to 30% additional energy in extreme environments.',
      },
      {
        num: '03',
        title: 'EXCELLENT LOW TEMPERATURE COEFFICIENT',
        body: 'Class-leading −0.30%/K temperature coefficient maintains peak voltage output in scorching deserts or intense summer heat, significantly reducing summer power drop-offs.',
      },
      {
        num: '04',
        title: 'DUAL-CELL PARALLEL CIRCUITRY FOR SHADE RESILIENCE',
        body: 'Innovative dual-cell parallel design lets the panel operate as two independent units. Even if partially shaded by branches or vents, the unaffected half continues full power output.',
      },
      {
        num: '05',
        title: 'ALL-TERRAIN, ALL-WEATHER PROTECTION',
        body: 'IP68 dust and water resistance withstands 35 mm hail impacts and high-speed highway vibrations. Endures high humidity, severe cold and heavy rain for decades of off-grid adventure.',
      },
      {
        num: '06',
        title: 'DUAL QUALITY ASSURANCE',
        body: '10-year product material and workmanship warranty plus 25-year linear power performance guarantee safeguard your high-value energy assets.',
      },
    ],
    tech: {
      electrical: [
        { label: 'MAXIMUM POWER',           value: '180 W' },
        { label: 'CELL EFFICIENCY',         value: '25.6%' },
        { label: 'Vmp / Imp',               value: '22.35 V / 8.05 A' },
        { label: 'Voc / Isc',               value: '25.82 V / 8.86 A' },
        { label: 'POWER TOLERANCE',         value: '0 ~ ±5 W' },
        { label: 'MAXIMUM SYSTEM VOLTAGE',  value: '1500 V DC' },
        { label: 'MAXIMUM SERIES FUSE',     value: '20 A' },
        { label: 'OPERATING TEMPERATURE',   value: '-40°C ~ +85°C' },
      ],
      mechanical: [
        { label: 'CELL TYPE',        value: 'N-Type · 16BB · Mono-crystalline Silicon' },
        { label: 'DIMENSIONS',       value: '1180 × 770 × 35 mm' },
        { label: 'WEIGHT',           value: '9.5 kg' },
        { label: 'GLASS',            value: '3.2 mm tempered glass' },
        { label: 'FRAME',            value: 'Anodized aluminium alloy' },
        { label: 'IP RATING',        value: 'IP68' },
        { label: 'WIND / SNOW LOAD', value: '2400 Pa / 5400 Pa' },
        { label: 'CONNECTOR',        value: 'Solar connector' },
      ],
      thermal: [
        { label: 'CIRCUIT DESIGN',          value: 'Dual-module parallel circuitry' },
        { label: 'PMAX COEFFICIENT',        value: '-0.30%/K' },
        { label: 'VOC COEFFICIENT',         value: '-0.25%/K' },
        { label: 'ISC COEFFICIENT',         value: '+0.045%/K' },
        { label: 'FIRST-YEAR DEGRADATION',  value: '1%' },
        { label: 'LINEAR DEGRADATION',      value: '0.4% per year' },
        { label: '25-YEAR OUTPUT',          value: '89.6%' },
        { label: 'PRODUCT WARRANTY',        value: '10 years product · 25 years linear power' },
      ],
    },
    certifications: [
      'IEC 61215 · IEC 61730',
      'ISO 9001:2015 · ISO 14001:2023 · ISO 45001:2023',
    ],
  },
  cn720w: {
    slug: 'cn720w',
    model: 'CN720W',
    subtitle: '720W N-Type Bifacial Dual-Glass Solar Module',
    tagline: 'N-Type · Bifacial · Double Glass',
    category: 'standard',
    categoryLabel: 'STANDARD PV MODULES',
    categoryHref: '/products/standard-modules/',
    keyStats: {
      power: '720W',
      efficiency: '23.18%',
      dimensions: '2384 × 1303 × 33 mm',
      weight: '37.9 kg',
    },
    heroImage: '/uploads/callsun/products/720w/card-square.webp',
    datasheet: '/uploads/callsun/products/720w/CN720W-datasheet.pdf',
    features: [
      {
        num: '01',
        title: 'N-TYPE CELL TECHNOLOGY',
        body: 'N-type monocrystalline cells offer lower light-induced degradation and better low-light response, maintaining stable generation across the 30-year module lifetime — more bankable long-term yield for developers and asset owners.',
      },
      {
        num: '02',
        title: 'BIFACIAL ENERGY GAIN',
        body: 'Bifacial architecture generates from both front and rear sides. With 80% ± 5% bifaciality, the CN720W is designed to capture rear-side irradiance across a wider range of project environments, supporting additional yield in optimized installations.',
      },
      {
        num: '03',
        title: '720W HIGH-POWER OUTPUT',
        body: 'Up to 720 W rated output with 23.18% module efficiency enables more installed capacity per module — reducing module count for a target system capacity and simplifying array layout, mounting structure, cabling and installation.',
      },
      {
        num: '04',
        title: 'DURABLE DUAL-GLASS STRUCTURE',
        body: '2.0 mm AR-coated heat-strengthened front glass and 2.0 mm heat-strengthened rear glass. The symmetrical dual-glass construction protects against moisture ingress, mechanical stress and long-term environmental exposure.',
      },
      {
        num: '05',
        title: 'DESIGNED FOR 1500 V PV SYSTEMS',
        body: 'Maximum system voltage 1500 V and maximum series fuse rating 35 A support modern high-capacity PV architectures. IP68 junction box, three bypass diodes and anodized aluminium frame deliver the electrical protection and structural reliability for utility-scale deployment.',
      },
      {
        num: '06',
        title: 'WIDE OPERATING TEMPERATURE RANGE',
        body: 'Operates across −40°C ~ +85°C. N-type cells, dual-glass construction, IP68 junction box and anodized aluminium frame support stable operation from arid desert climates to cold high-altitude installations.',
      },
    ],
    tech: {
      electrical: [
        { label: 'MAXIMUM POWER',           value: '720 W' },
        { label: 'Module Efficiency STC (%)',       value: '23.18%' },
        { label: 'Vmp / Imp',               value: '41.30 V / 17.44 A' },
        { label: 'Voc / Isc',               value: '49.40 V / 18.49 A' },
        { label: 'POWER TOLERANCE',         value: '0~±3%' },
        { label: 'MAXIMUM SYSTEM VOLTAGE',  value: '1500 V DC' },
        { label: 'MAXIMUM SERIES FUSE',     value: '35 A' },
        { label: 'BIFACIALITY',             value: '80% ± 5%' },
      ],
      mechanical: [
        { label: 'CELL TYPE',           value: 'N-type mono-crystalline silicon, 210 × 105 mm' },
        { label: 'CELL CONFIGURATION',  value: '132 pcs (6 × 11) × 2' },
        { label: 'DIMENSIONS',          value: '2384 × 1303 × 33 mm' },
        { label: 'WEIGHT',              value: '38.3 kg' },
        { label: 'FRONT / BACK GLASS',  value: '2.0 mm AR-coated / 2.0 mm heat-strengthened' },
        { label: 'FRAME',               value: 'Anodized aluminium alloy' },
        { label: 'JUNCTION BOX',        value: 'IP68 · 3 bypass diodes' },
        { label: 'CABLE LENGTH',        value: '300 mm' },
        { label: 'FIRE PERFORMANCE',    value: 'Class C' },
      ],
      thermal: [
        { label: 'OPERATING TEMPERATURE', value: '-40°C ~ +85°C' },
        { label: 'PMAX COEFFICIENT',      value: '-0.35%/°C' },
        { label: 'VOC COEFFICIENT',       value: '-0.275%/°C' },
        { label: 'ISC COEFFICIENT',       value: '+0.045%/°C' },
        { label: 'NOCT',                  value: '45°C ± 2°C' },
        { label: 'FIRST-YEAR DEGRADATION', value: '1%' },
        { label: 'PRODUCT WARRANTY',      value: '25 years' },
        { label: 'LINEAR WARRANTY',       value: '30 years · 87.4% at year 30' },
        { label: 'PACKAGING',             value: '33 pcs/pallet · 594 pcs/40HQ' },
      ],
    },
    certifications: [
      'IEC 61215 · IEC 61730',
      'ISO 9001:2015 · ISO 14001:2023 · ISO 45001:2023',
    ],
  },
  cn620w: {
    slug: 'cn620w',
    model: 'CN620W',
    subtitle: '620W N-Type Bifacial Double-Glass Solar Module',
    tagline: 'N-Type · Bifacial · Double Glass',
    category: 'standard',
    categoryLabel: 'STANDARD PV MODULES',
    categoryHref: '/products/standard-modules/',
    keyStats: {
      power: '620W',
      efficiency: '22.95%',
      dimensions: '2382 × 1134 × 30 mm',
      weight: '32.5 kg',
    },
    heroImage: '/uploads/callsun/products/620w/card-square.webp',
    datasheet: '/uploads/callsun/products/620w/CN620W-datasheet.pdf',
    features: [
      {
        num: '01',
        title: 'NEXT-GEN N-TYPE EFFICIENCY',
        body: 'Advanced N-type technology minimizes first-year degradation to just 1% while delivering industry-leading low-light performance — harvesting more energy at dawn, dusk and under overcast for higher project IRR.',
      },
      {
        num: '02',
        title: 'MASSIVE 620W BIFACIAL YIELD',
        body: '620 W frontal power combined with 80% bifaciality unleashes powerful double-sided generation. The 132-cell architecture on a 2382 mm chassis delivers the highest power-per-rack in the Callsun standard lineup — reducing BOS cost on utility-scale farms.',
      },
      {
        num: '03',
        title: 'OPTIMIZED TEMPERATURE COEFFICIENT',
        body: 'Exceptional Pmax coefficient of −0.28%/°C sustains yield in scorching climates. Industry-leading thermal performance translates directly into higher daily output in desert, tropical and high-irradiance deployments.',
      },
      {
        num: '04',
        title: 'MULTI-BUSBAR (MBB) PRECISION',
        body: '16BB cell architecture shortens carrier travel distance, lowers hot-spot risk and improves performance under partial shading — ideal for utility-scale ground mounts with mixed light conditions and O&M simplicity.',
      },
      {
        num: '05',
        title: 'HEAVY-DUTY DUAL-GLASS CONSTRUCTION',
        body: '2.0 mm tempered dual-glass, anodized aluminium frame and IP68 junction box withstand extreme mechanical loads. Dual-glass build eliminates PID pathways, hits Class C fire rating and extends service life beyond 30 years.',
      },
      {
        num: '06',
        title: 'PREMIUM 30-YEAR WARRANTY COMMITMENT',
        body: '25-year product warranty and 30-year linear power warranty at 87.4% output at year 30. Combined with 1% first-year degradation and full IEC 61215 / 61730 + ISO 9001 / 14001 / 45001 certification for bankable long-term returns.',
      },
    ],
    tech: {
      electrical: [
        { label: 'MAXIMUM POWER',           value: '620 W' },
        { label: 'Module Efficiency STC (%)',       value: '22.95%' },
        { label: 'Vmp / Imp',               value: '40.74 V / 15.22 A' },
        { label: 'Voc / Isc',               value: '49.08 V / 16.08 A' },
        { label: 'POWER TOLERANCE',         value: '0~±5 W' },
        { label: 'MAXIMUM SYSTEM VOLTAGE',  value: '1500 V DC' },
        { label: 'MAXIMUM SERIES FUSE',     value: '30 A' },
        { label: 'BIFACIALITY',             value: '80% ± 5%' },
      ],
      mechanical: [
        { label: 'CELL TYPE',           value: 'N-type mono-crystalline silicon, 182 × 105 mm' },
        { label: 'CELL CONFIGURATION',  value: '132 pcs (6 × 11) × 2' },
        { label: 'DIMENSIONS',          value: '2382 × 1134 × 30 mm' },
        { label: 'WEIGHT',              value: '32.4 kg' },
        { label: 'FRONT / BACK GLASS',  value: '2.0 mm AR-coated heat-strengthened glass / 2.0 mm heat-strengthened glass' },
        { label: 'FRAME',               value: 'Anodized aluminium alloy' },
        { label: 'JUNCTION BOX',        value: 'IP68 · 3 bypass diodes' },
        { label: 'CABLE LENGTH',        value: '300 mm' },
        { label: 'FIRE PERFORMANCE',    value: 'Class C' },
      ],
      thermal: [
        { label: 'OPERATING TEMPERATURE', value: '-40°C ~ +85°C' },
        { label: 'PMAX COEFFICIENT',      value: '-0.28%/°C' },
        { label: 'VOC COEFFICIENT',       value: '-0.24%/°C' },
        { label: 'ISC COEFFICIENT',       value: '+0.046%/°C' },
        { label: 'NOCT',                  value: '45°C ± 2°C' },
        { label: 'FIRST-YEAR DEGRADATION', value: '1%' },
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
    heroImage: '/uploads/callsun/products/580w/card-square.webp',
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
        { label: 'Module Efficiency STC (%)',       value: '22.45%' },
        { label: 'Vmp / Imp',               value: '43.88 V / 13.22 A' },
        { label: 'Voc / Isc',               value: '52.50 V / 13.95 A' },
        { label: 'POWER TOLERANCE',         value: '0~±5 W' },
        { label: 'MAXIMUM SYSTEM VOLTAGE',  value: '1500 V DC' },
        { label: 'MAXIMUM SERIES FUSE',     value: '30 A' },
        { label: 'BIFACIALITY',             value: '80% ± 5%' },
      ],
      mechanical: [
        { label: 'CELL TYPE',           value: 'N-type mono-crystalline silicon, 182 × 91.875 mm' },
        { label: 'CELL CONFIGURATION',  value: '144 pcs (6 × 12) × 2' },
        { label: 'DIMENSIONS',          value: '2278 × 1134 × 30 mm' },
        { label: 'WEIGHT',              value: '31.42 kg' },
        { label: 'FRONT / BACK GLASS',  value: '2.0 mm AR-coated heat-strengthened glass / 2.0 mm heat-strengthened glass' },
        { label: 'FRAME',               value: 'Anodized aluminium alloy' },
        { label: 'JUNCTION BOX',        value: 'IP68 · 3 bypass diodes' },
        { label: 'CABLE LENGTH',        value: '300 mm' },
        { label: 'FIRE PERFORMANCE',    value: 'Class C' },
      ],
      thermal: [
        { label: 'OPERATING TEMPERATURE', value: '-40°C ~ +85°C' },
        { label: 'PMAX COEFFICIENT',      value: '-0.350%/°C' },
        { label: 'VOC COEFFICIENT',       value: '-0.275%/°C' },
        { label: 'ISC COEFFICIENT',       value: '+0.045%/°C' },
        { label: 'NOCT',                  value: '42°C ± 2°C' },
        { label: 'FIRST-YEAR DEGRADATION', value: '1%' },
        { label: 'PRODUCT WARRANTY',      value: '25 years' },
        { label: 'LINEAR WARRANTY',       value: '30 years · 87.4% at year 30' },
        { label: 'PACKAGING',             value: '36 pcs/pallet · 720 pcs/40HQ' },
      ],
    },
    certifications: [
      '__emph__IEC 61215 · IEC 61730',
    ],
  },
};
