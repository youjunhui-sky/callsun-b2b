/**
 * Solutions kit detail page data — 5.4kW Hybrid Solar Power System Kit
 *
 * Source: callsunsolar.com/products/5-4kw-hybrid-solar-power-system-kit-with-6-5kw-hybrid-inverter-10kwh-lifepo4-battery
 * — stripped of commerce elements (price, buy button, variant
 *   selector, delivery, welcome offer). B2B version = spec-driven,
 *   inquiry-based.
 */

export interface KitDetail {
  slug: string;
  category: 'grid-tied' | 'off-grid';
  categoryLabel: string;
  title: string;
  short: string;
  tagline: string;
  intro: string;
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

export const KIT_5_4KW: KitDetail = {
  slug: '5-4kw-off-grid',
  category: 'off-grid',
  categoryLabel: 'GRID-TIED / HYBRID',
  title: '5.4kW Hybrid Solar Power System Kit | 6.5kW Inverter & 10kWh Battery',
  short: '5.4kW Hybrid Solar Power System Kit',
  tagline: '6.5 kW Hybrid Inverter \u00b7 10 kWh LiFePO4 Battery Storage Kit',
  intro:
    'Generate clean energy with this complete 5.4kW hybrid solar power system, including a 6.5kW hybrid inverter and 10kWh LiFePO4 battery. Perfect for home backup, off-grid living, and reducing electricity costs.',
  keyStats: [
    { label: 'PV ARRAY',        value: '5.4 kW' },
    { label: 'HYBRID INVERTER', value: '6.5 kW' },
    { label: 'BATTERY STORAGE', value: '10 kWh' },
  ],
  heroImage: '/uploads/callsun/solutions/5-4kw/01-system-overview.webp',
  keyFeatures: [
    {
      title: '450W N-TYPE BIFACIAL SOLAR PANEL',
      body: 'High-efficiency N-Type bifacial panels deliver up to 25.6% efficiency, with double-glass durability, anti-shading technology, and reliable performance in all weather conditions.',
    },
    {
      title: '10KWH LIFEPO4 BATTERY STORAGE',
      body: 'Premium LiFePO4 battery with intelligent BMS provides over 6,500 cycles, enhanced safety, stable performance, and reliable energy storage with a 10-year warranty.',
    },
    {
      title: '6.5KW HYBRID SOLAR INVERTER',
      body: 'Pure sine wave output, 99.9% MPPT efficiency, seamless UPS backup, real-time monitoring, and dual battery compatibility ensure efficient and reliable power management.',
    },
    {
      title: 'COMPLETE SOLAR POWER SYSTEM',
      body: 'A complete 5.4kW solar power system combining high-efficiency panels, a 6.5kW hybrid inverter, and a 10kWh battery for reliable, independent energy.',
    },
  ],
  panel: {
    title: '12 pcs \u00b7 450W N-Type Solar Panels',
    intro:
      '12 modules of 450W N-Type bifacial silicon deliver the 5.4kW array. 25.6% cell efficiency, 16BB architecture and IP68 protection make this a durable choice for residential installation.',
    image: '/uploads/callsun/solutions/5-4kw/02-panel-closeup.webp',
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
    title: '10 kWh LiFePO4 Battery Module',
    intro:
      'A single 10.24kWh LiFePO4 battery module provides 10kWh of storage. IP20 enclosure, suitable for indoor installation, with a 0\u201345\u00b0C charge / -20\u201355\u00b0C discharge window.',
    image: '/uploads/callsun/solutions/5-4kw/03-battery.webp',
    specs: [
      { label: 'NOMINAL VOLTAGE',                  value: '51.2 V' },
      { label: 'RATED CAPACITY',                   value: '200 Ah' },
      { label: 'ENERGY',                           value: '10.24 kWh' },
      { label: 'DIMENSIONS (L \u00d7 W \u00d7 D)', value: '780 \u00d7 550 \u00d7 200 mm' },
      { label: 'WEIGHT',                           value: '102.5 kg' },
      { label: 'MAX. DISCHARGE VOLTAGE',           value: '56 VDC' },
      { label: 'END-OF-DISCHARGE VOLTAGE',         value: '46 VDC' },
      { label: 'MAX. DISCHARGE CURRENT',           value: '150 A' },
      { label: 'MAX. CHARGE CURRENT',              value: '150 A' },
      { label: 'CHARGING TEMPERATURE',             value: '0\u201345\u00b0C' },
      { label: 'DISCHARGE TEMPERATURE',            value: '-20\u201355\u00b0C' },
      { label: 'CELLS PER PACK',                   value: '16S1P' },
      { label: 'CERTIFICATION',                    value: 'UL1973 \u00b7 CE-EMC \u00b7 UN38.3 \u00b7 MSDS' },
      { label: 'ENCLOSURE PROTECTION',             value: 'IP20' },
    ],
  },
  inverter: {
    title: '6.5 kW Hybrid Inverter',
    intro:
      'Single-phase / split-phase capable pure sine wave inverter with 6.5kW rated output, dual MPPT with up to 10kW combined PV input and 10ms typical switch time. Parallel up to 6 units for larger loads.',
    image: '/uploads/callsun/solutions/5-4kw/04-inverter.webp',
    specGroups: [
      {
        name: 'INVERTER OUTPUT',
        rows: [
          { label: 'RATED OUTPUT POWER',       value: '6500 W' },
          { label: 'MAX. PEAK POWER',          value: '13000 W' },
          { label: 'RATED OUTPUT VOLTAGE',     value: '120 / 240 VAC (single-phase / split-phase)' },
          { label: 'RATED AC FREQUENCY',       value: '50 / 60 Hz' },
          { label: 'WAVEFORM',                 value: 'Pure sine wave' },
          { label: 'SWITCH TIME',              value: '10 ms (typical value)' },
          { label: 'PARALLEL CAPACITY',        value: '1 to 6 units' },
        ],
      },
      {
        name: 'BATTERY',
        rows: [
          { label: 'BATTERY TYPE',                 value: 'Li-ion / Lead-Acid / User Defined' },
          { label: 'RATED BATTERY VOLTAGE',        value: '48 Vdc' },
          { label: 'VOLTAGE RANGE',                value: '40 \u2013 60 Vdc' },
        ],
      },
      {
        name: 'PV INPUT',
        rows: [
          { label: 'NO. OF MPPT TRACKERS',         value: '2' },
          { label: 'MAX. PV INPUT POWER',          value: '5000 W + 5000 W' },
          { label: 'MAX. PV INPUT CURRENT',        value: '18 A + 18 A' },
          { label: 'MAX. OPEN CIRCUIT VOLTAGE',    value: '550 Vdc + 550 Vdc' },
          { label: 'MPPT VOLTAGE RANGE',           value: '150 \u2013 450 Vdc' },
        ],
      },
      {
        name: 'GRID / GENERATOR INPUT',
        rows: [
          { label: 'INPUT VOLTAGE RANGE',          value: '65 \u2013 140 VAC' },
          { label: 'INPUT FREQUENCY RANGE',        value: '50 / 60 Hz' },
          { label: 'BYPASS OVERLOAD CURRENT',      value: '40 A' },
        ],
      },
      {
        name: 'GENERAL',
        rows: [
          { label: 'DIMENSIONS',           value: '648 \u00d7 410 \u00d7 140 mm' },
          { label: 'WEIGHT',               value: '21.7 kg' },
          { label: 'PROTECTION DEGREE',    value: 'IP20, indoor only' },
          { label: 'OPERATING TEMP',       value: '-10 to +55\u00b0C (derated > 45\u00b0C)' },
          { label: 'NOISE',                value: '< 60 dB' },
          { label: 'BUILT-IN INTERFACE',   value: 'RS485 \u00b7 CAN \u00b7 USB \u00b7 dry contact' },
          { label: 'EXTERNAL MODULE',      value: 'Wi-Fi / GPRS (optional)' },
          { label: 'SAFETY',               value: 'IEC62109-1 \u00b7 IEC62109-2 \u00b7 UL1741' },
          { label: 'EMC',                  value: 'EN61000-6-1 \u00b7 EN61000-6-3 \u00b7 FCC 15 Class B' },
          { label: 'RoHS',                 value: 'Yes' },
        ],
      },
    ],
  },
  applications: [
    { label: 'ROOFTOP',  image: '/uploads/callsun/solutions/5-4kw/05-scenario-rooftop.webp' },
    { label: 'FARM',     image: '/uploads/callsun/solutions/5-4kw/06-scenario-farm.webp' },
    { label: 'BACKYARD', image: '/uploads/callsun/solutions/5-4kw/07-scenario-backyard.webp' },
  ],
  wiring: {
    diagram: '/uploads/callsun/solutions/5-4kw/08-wiring-diagram.webp',
    instructions: '/uploads/callsun/solutions/5-4kw/09-wiring-instructions.webp',
  },
  includes: {
    image: '/uploads/callsun/solutions/5-4kw/10-includes.webp',
    items: [
      '12 Pcs \u00d7 450W Solar Panels \u2014 Reliable and Durable',
      '1 Pc \u00d7 10kWh LiFePO4 Battery \u2014 Reliable and Durable',
      '1 Pc \u00d7 6.5kW Hybrid Inverter \u2014 Reliable and Durable',
    ],
  },
  downloads: [
    { label: 'User Manual', href: '#inquiry' },
  ],
  faq: [
    {
      q: 'What appliances can this 5.4kW solar power system run?',
      a: 'This system is designed to power most essential household appliances, including refrigerators, TVs, lighting, fans, Wi-Fi routers, washing machines, microwaves, and selected air conditioners. Actual runtime and supported loads depend on your daily energy consumption, battery capacity, and available sunlight. A 5.4kW PV array paired with a 6.5kW hybrid inverter is commonly suitable for residential backup and off-grid applications.',
    },
    {
      q: 'Can this system work during a power outage?',
      a: 'Yes. The 6.5kW hybrid inverter automatically switches to battery backup during grid outages, providing uninterrupted power for connected loads. When sunlight is available, the solar panels can continue charging the battery while supplying your home, helping extend backup time.',
    },
    {
      q: 'Is the 10kWh LiFePO4 battery expandable?',
      a: 'Yes. The system is designed with future expansion in mind. If your energy demand increases, additional compatible LiFePO4 battery modules can typically be added to increase storage capacity. Please refer to the product specifications or contact our technical team to confirm the maximum supported configuration.',
    },
    {
      q: 'Is this solar system suitable for off-grid and residential use?',
      a: 'Absolutely. This complete solar power system is ideal for homes, cabins, workshops, farms, RV properties, and other off-grid applications. It can also be used as a home backup power solution to reduce grid dependence and improve energy security. Hybrid systems of this type are widely used for both off-grid living and residential backup.',
    },
    {
      q: 'Does the kit include everything needed for installation?',
      a: 'The kit includes high-efficiency solar panels, a 6.5kW hybrid inverter, a 10kWh LiFePO4 battery, and the essential components listed on the product page. Before installation, we recommend verifying your roof space, local electrical requirements, and any additional mounting hardware or wiring needed for your specific project. Professional installation is recommended for optimal performance and safety.',
    },
  ],
};