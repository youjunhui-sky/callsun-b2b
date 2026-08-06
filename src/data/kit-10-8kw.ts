/**
 * Solutions kit detail page data — 10.8kW Grid-Tied Hybrid System
 *
 * Layout reference: callsunsolar.com/products/10-8kw-solar-generator-...
 * — but stripped of commerce elements (price, buy button, variant
 *   selector, delivery, welcome offer). B2B version = spec-driven,
 *   inquiry-based.
 */

export interface KitDetail {
  slug: string;
  category: 'grid-tied' | 'off-grid';
  categoryLabel: string;
  title: string;           // '10.8kW Solar Generator System with 28kWh Battery Storage'
  short: string;           // '10.8kW Grid-Tied System'
  tagline: string;         // '12kW Hybrid Inverter · 28kWh LiFePO4 Battery Storage Kit'
  intro: string;           // paragraph under hero
  keyStats: { label: string; value: string }[];
  heroImage: string;
  keyFeatures: { title: string; body: string }[];
  panel: {
    title: string;
    intro: string;
    image: string;
    specs: { label: string; value: string }[];
    highlights: string[];
  };
  battery: {
    title: string;
    intro: string;
    image: string;
    specs: { label: string; value: string }[];
  };
  inverter: {
    title: string;
    intro: string;
    image: string;
    specGroups: { name: string; rows: { label: string; value: string }[] }[];
  };
  applications: { label: string; image: string }[];
  wiring: {
    diagram: string;
    instructions: string;
  };
  includes: {
    image: string;
    items: string[];
  };
  downloads: { label: string; href: string }[];
  faq: { q: string; a: string }[];
}

export const KIT_10_8KW: KitDetail = {
  slug: '10-8kw-grid-tied',
  category: 'grid-tied',
  categoryLabel: 'GRID-TIED / HYBRID',
  title: '10.8kW Solar Generator System with 28kWh Battery Storage',
  short: '10.8kW Grid-Tied System',
  tagline: '12kW Hybrid Inverter \u00b7 28kWh LiFePO4 Battery Storage Kit',
  intro:
    'Deliver reliable whole-home backup, off-grid resilience and greater energy independence. The Callsun 10.8kW system pairs a 12kW hybrid inverter with 28kWh of LiFePO4 battery storage — ideal for residential and light commercial deployment.',
  keyStats: [
    { label: 'PV ARRAY',        value: '10.8 kW' },
    { label: 'HYBRID INVERTER', value: '12 kW' },
    { label: 'BATTERY STORAGE', value: '28 kWh' },
  ],
  heroImage: '/uploads/callsun/solutions/12kw/01-system-overview.webp',
  keyFeatures: [
    {
      title: 'ANTI-SHADING TECHNOLOGY',
      body: 'ShadeGuard\u2122 anti-shading design keeps power output stable under partial shade from trees, roof racks and uneven sunlight.',
    },
    {
      title: 'N-TYPE HIGH-EFFICIENCY CELLS',
      body: 'High-efficiency N-type cells deliver advanced low-light and heat-resistant performance for reliable long-term generation.',
    },
    {
      title: 'BIFACIAL ENERGY GAIN',
      body: 'Bifacial architecture captures reflected sunlight from both sides for a measurably higher overall lifetime yield.',
    },
    {
      title: 'COMPACT HIGH-DENSITY DESIGN',
      body: 'Ultra-compact modules with higher watt density maximize usable roof area for residential and light-commercial systems.',
    },
  ],
  panel: {
    title: '24 pcs \u00b7 450W N-Type Solar Panels',
    intro:
      '24 modules of 450W N-Type bifacial silicon deliver the 10.8kW array. 25.6% cell efficiency, 16BB architecture and IP68 protection make this a durable choice for rooftop and light-commercial installation.',
    image: '/uploads/callsun/solutions/12kw/02-panel-closeup.webp',
    highlights: ['450W output', 'N-Type', '25.6% efficiency', 'Bifacial', 'Anti-Shade', '16BB', 'IP68'],
    specs: [
      { label: 'MAXIMUM POWER (Pmax)',             value: '450 W' },
      { label: 'MAXIMUM POWER VOLTAGE (Vmp)',      value: '30.08 V' },
      { label: 'MAXIMUM POWER CURRENT (Imp)',      value: '14.97 A' },
      { label: 'OPEN-CIRCUIT VOLTAGE (Voc)',       value: '35.03 V' },
      { label: 'SHORT-CIRCUIT CURRENT (Isc)',      value: '16.05 A' },
      { label: 'CELL TYPE',                        value: 'N-Type \u00b7 16BB \u00b7 182 mm mono-crystalline silicon' },
      { label: 'CELL EFFICIENCY',                  value: '25.6%' },
      { label: 'FIRST-YEAR DEGRADATION',           value: '< 1%' },
      { label: '25-YEAR OUTPUT COMMITMENT',        value: '84.5%' },
      { label: 'DIMENSIONS',                       value: '1762 \u00d7 1134 \u00d7 30 mm (\u00b1 5 mm)' },
      { label: 'WEIGHT',                           value: '24.5 kg (\u00b1 0.2 kg)' },
      { label: 'IP RATING',                        value: 'IP68' },
      { label: 'CONNECTOR',                        value: 'Solar Connector Compatible' },
    ],
  },
  battery: {
    title: '2 \u00d7 14 kWh LiFePO4 Battery Modules',
    intro:
      'Two 14.34kWh LiFePO4 battery modules provide 28kWh of total storage. Rack-mount enclosures, IP65 protection and a wide 0\u201355\u00b0C charge / -20\u201355\u00b0C discharge window support residential and light-commercial deployment.',
    image: '/uploads/callsun/solutions/12kw/03-battery.webp',
    specs: [
      { label: 'NOMINAL VOLTAGE',                  value: '51.2 V' },
      { label: 'RATED CAPACITY',                   value: '280 Ah' },
      { label: 'ENERGY (PER MODULE)',              value: '14.34 kWh' },
      { label: 'DIMENSIONS (L \u00d7 W \u00d7 D)', value: '1050 \u00d7 700 \u00d7 200 mm' },
      { label: 'WEIGHT (PER MODULE)',              value: '140 kg' },
      { label: 'MAX. DISCHARGE VOLTAGE',           value: '56 VDC' },
      { label: 'END-OF-DISCHARGE VOLTAGE',         value: '46 VDC' },
      { label: 'MAX. DISCHARGE / CHARGE CURRENT',  value: '150 A / 150 A' },
      { label: 'CHARGING TEMPERATURE',             value: '0\u201355\u00b0C' },
      { label: 'DISCHARGE TEMPERATURE',            value: '-20\u201355\u00b0C' },
      { label: 'CELLS PER PACK',                   value: '16S1P' },
      { label: 'CERTIFICATION',                    value: 'UL1973 \u00b7 UL9540A \u00b7 CB-IEC62619 \u00b7 CE-EM \u00b7 UN38.3 \u00b7 MSDS' },
      { label: 'ENCLOSURE PROTECTION',             value: 'IP65' },
    ],
  },
  inverter: {
    title: '12 kW Hybrid Inverter',
    intro:
      'Split-phase / three-phase capable pure sine wave inverter with 12kW rated output, 200A grid pass-through, dual MPPT with up to 18kW combined PV input and 10ms typical switch time. Parallel up to 6 units for larger loads.',
    image: '/uploads/callsun/solutions/12kw/04-inverter.webp',
    specGroups: [
      {
        name: 'INVERTER OUTPUT',
        rows: [
          { label: 'RATED OUTPUT POWER',       value: '12000 W' },
          { label: 'MAX. PEAK POWER',          value: '1.5 \u00d7 rated (10 s)' },
          { label: 'RATED OUTPUT VOLTAGE',     value: '120 / 240 Vac (split-phase) \u00b7 120 / 208 V (three-phase)' },
          { label: 'RATED AC FREQUENCY',       value: '50 / 60 Hz' },
          { label: 'WAVEFORM',                 value: 'Pure sine wave' },
          { label: 'SWITCH TIME',              value: '10 ms typical' },
          { label: 'PARALLEL CAPACITY',        value: '1 - 6 units' },
        ],
      },
      {
        name: 'BATTERY',
        rows: [
          { label: 'BATTERY TYPE',                 value: 'Li-ion / Lead-Acid / User Defined' },
          { label: 'RATED BATTERY VOLTAGE',        value: '48 Vdc' },
          { label: 'VOLTAGE RANGE',                value: '40 \u2013 60 Vdc' },
          { label: 'GRID / GEN CHARGE CURRENT',    value: '200 A / 90 A' },
          { label: 'HYBRID CHARGE CURRENT',        value: '240 A' },
        ],
      },
      {
        name: 'PV INPUT',
        rows: [
          { label: 'MPPT TRACKERS',                value: '2' },
          { label: 'MAX. PV INPUT POWER',          value: '9000 W + 9000 W' },
          { label: 'MAX. PV INPUT CURRENT',        value: '32 A + 32 A' },
          { label: 'MAX. OPEN CIRCUIT VOLTAGE',    value: '550 Vdc + 550 Vdc' },
          { label: 'MPPT VOLTAGE RANGE',           value: '125 \u2013 425 Vdc' },
          { label: 'SHORT CURRENT (Isc)',          value: '40 A + 40 A' },
        ],
      },
      {
        name: 'GRID / GENERATOR INPUT',
        rows: [
          { label: 'INPUT VOLTAGE RANGE',          value: '90 \u2013 140 VAC' },
          { label: 'INPUT FREQUENCY RANGE',        value: '50 / 60 Hz' },
          { label: 'CONTINUOUS GRID PASSTHROUGH',  value: '200 A' },
        ],
      },
      {
        name: 'GENERAL',
        rows: [
          { label: 'DIMENSIONS',           value: '840 \u00d7 440 \u00d7 260 mm' },
          { label: 'WEIGHT',               value: '48 kg' },
          { label: 'PROTECTION DEGREE',    value: 'IP65' },
          { label: 'OPERATING TEMP',       value: '-25°C - +60\u00b0C (derated > 45\u00b0C)' },
          { label: 'NOISE',                value: '< 60 dB' },
          { label: 'BUILT-IN INTERFACE',   value: 'RS485 \u00b7 CAN \u00b7 USB \u00b7 dry contact' },
          { label: 'EXTERNAL MODULE',      value: 'Wi-Fi / GPRS (optional)' },
          { label: 'SAFETY',               value: 'UL1741 \u00b7 IEEE1547.1-2020 \u00b7 CEC \u00b7 RULE 21 \u00b7 HECO' },
          { label: 'EMC',                  value: 'FCC 15 Class B' },
          { label: 'RoHS',                 value: 'Yes' },
        ],
      },
    ],
  },
  applications: [
    { label: 'ROOFTOP',  image: '/uploads/callsun/solutions/12kw/05-scenario-rooftop.webp' },
    { label: 'FARM',     image: '/uploads/callsun/solutions/12kw/06-scenario-farm.webp' },
    { label: 'BACKYARD', image: '/uploads/callsun/solutions/12kw/07-scenario-backyard.webp' },
  ],
  wiring: {
    diagram: '/uploads/callsun/solutions/12kw/08-wiring-diagram.webp',
    instructions: '/uploads/callsun/solutions/12kw/09-wiring-instructions.webp',
  },
  includes: {
    image: '/uploads/callsun/solutions/12kw/10-includes.webp',
    items: [
      '24 Pcs \u00d7 450W Solar Panels \u2014 Reliable and Durable',
      '2 Pcs \u00d7 14kWh LiFePO4 Battery \u2014 Reliable and Durable',
      '1 Pc \u00d7 12kW Hybrid Inverter \u2014 Reliable and Durable',
    ],
  },
  downloads: [
    { label: 'User Manual', href: '#inquiry' },
  ],
  faq: [
    {
      q: 'What can the 10.8kW Solar Generator System power?',
      a: 'The Callsun 10.8kW Solar Generator System is designed for whole-home backup and off-grid energy applications. Equipped with a 12kW hybrid inverter and 28kWh LiFePO4 battery storage, it can power essential household appliances such as air conditioners, refrigerators, lighting, TVs, computers, washing machines and other high-demand devices, depending on total energy consumption.',
    },
    {
      q: 'Is this system suitable for whole-home backup?',
      a: 'Yes. With a 12kW hybrid inverter and 28kWh battery storage, this system is ideal for providing backup power to most residential homes during power outages. It also reduces reliance on the grid by storing excess solar energy for use at night or during peak electricity rates.',
    },
    {
      q: 'How long will the 28kWh battery storage last?',
      a: 'Battery runtime depends on electricity usage. A continuous 2 kW household load can be powered for approximately 14 hours. Actual runtime varies based on appliance usage, inverter efficiency, battery condition and environmental factors.',
    },
    {
      q: 'Can I expand the battery or solar panel capacity in the future?',
      a: 'Yes. The Callsun system is designed to support future expansion. Depending on inverter specifications, PV capacity can be increased and additional compatible battery modules can be added as energy requirements grow.',
    },
    {
      q: 'Does the system require professional installation?',
      a: 'Yes. Because this system includes a 12kW hybrid inverter and high-capacity battery storage, professional installation by a qualified electrician or solar installer is recommended to ensure safe operation, optimal performance and compliance with local electrical codes.',
    },
  ],
};
