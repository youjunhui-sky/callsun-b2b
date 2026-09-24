/**
 * Solutions kit detail page data — 7.2kW Solar Generator System
 *
 * Source: callsunsolar.com/products/7-2kw-solar-generator-system-10kw-hybrid-inverter-14kwh-battery-storage-kit
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

export const KIT_7_2KW: KitDetail = {
  slug: '7-2kw-grid-tied',
  category: 'grid-tied',
  categoryLabel: 'GRID-TIED / HYBRID',
  title: '7.2kW Off-Grid Kit | 10kW Inverter & 14kWh Battery',
  short: '7.2kW Off-Grid Kit',
  tagline: '10 kW Hybrid Inverter \u00b7 14 kWh LiFePO4 Battery Storage Kit',
  intro:
    'A complete solar energy storage solution designed for whole-home backup and off-grid power. The system combines a 10kW hybrid inverter with a 14kWh LiFePO4 battery pack to deliver reliable, clean, and independent energy anytime.',
  keyStats: [
    { label: 'PV ARRAY',        value: '7.2 kW' },
    { label: 'HYBRID INVERTER', value: '10 kW' },
    { label: 'BATTERY STORAGE', value: '14 kWh' },
  ],
  heroImage: '/uploads/callsun/solutions/10kw/01-system-overview.webp',
  keyFeatures: [
    {
      title: 'ANTI-SHADING TECHNOLOGY',
      body: 'ShadeGuard\u2122 anti-shading technology helps maintain stable power output under partial shade from trees, roof racks, and uneven sunlight.',
    },
    {
      title: 'N-TYPE HIGH-EFFICIENCY CELLS',
      body: 'High-efficiency N-Type cells with advanced low-light and heat-resistant performance for reliable off-grid charging.',
    },
    {
      title: 'COMPACT HIGH-DENSITY DESIGN',
      body: 'Ultra-compact design with higher watt density to maximize roof space for RV and van setups.',
    },
    {
      title: 'BIFACIAL ENERGY GAIN',
      body: 'Bifacial energy generation captures reflected sunlight from both sides for increased overall output.',
    },
  ],
  panel: {
    title: '16 pcs \u00b7 450W N-Type Solar Panels',
    intro:
      '16 modules of 450W N-Type bifacial silicon deliver the 7.2kW array. 25.6% cell efficiency, 16BB architecture and IP68 protection make this a durable choice for rooftop and residential off-grid installation.',
    image: '/uploads/callsun/solutions/10kw/02-panel-closeup.webp',
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
    title: '14 kWh LiFePO4 Battery Module',
    intro:
      'A single 14.34kWh LiFePO4 battery module provides 14kWh of storage. IP20 enclosure, suitable for indoor installation, with a wide 0\u201355\u00b0C charge / -20\u201355\u00b0C discharge window.',
    image: '/uploads/callsun/solutions/10kw/03-battery.webp',
    specs: [
      { label: 'NOMINAL VOLTAGE',                  value: '51.2 V' },
      { label: 'RATED CAPACITY',                   value: '280 Ah' },
      { label: 'ENERGY',                           value: '14.34 kWh' },
      { label: 'DIMENSIONS (L \u00d7 W \u00d7 D)', value: '900 \u00d7 675 \u00d7 200 mm' },
      { label: 'WEIGHT',                           value: '128.5 kg' },
      { label: 'MAX. DISCHARGE VOLTAGE',           value: '56 VDC' },
      { label: 'END-OF-DISCHARGE VOLTAGE',         value: '46 VDC' },
      { label: 'MAX. DISCHARGE CURRENT',           value: '150 A' },
      { label: 'MAX. CHARGE CURRENT',              value: '150 A' },
      { label: 'CHARGING TEMPERATURE',             value: '0\u201355\u00b0C' },
      { label: 'DISCHARGE TEMPERATURE',            value: '-20\u201355\u00b0C' },
      { label: 'CELLS PER PACK',                   value: '16S1P' },
      { label: 'CERTIFICATION',                    value: 'UL1973 \u00b7 UL9540A \u00b7 CB-IEC62619 \u00b7 CE-EMC \u00b7 UN38.3 \u00b7 MSDS' },
      { label: 'ENCLOSURE PROTECTION',             value: 'IP20' },
    ],
  },
  inverter: {
    title: '10 kW Hybrid Inverter',
    intro:
      'Single-phase / split-phase capable pure sine wave inverter with 10kW rated output, dual MPPT with up to 11kW combined PV input and 10ms typical switch time. Parallel up to 6 units for larger loads.',
    image: '/uploads/callsun/solutions/10kw/04-inverter.webp',
    specGroups: [
      {
        name: 'INVERTER OUTPUT',
        rows: [
          { label: 'RATED OUTPUT POWER',       value: '10000 W' },
          { label: 'MAX. PEAK POWER',          value: '20000 W' },
          { label: 'RATED OUTPUT VOLTAGE',     value: '120 / 240 VAC (single-phase / split-phase)' },
          { label: 'RATED AC FREQUENCY',       value: '50 / 60 Hz' },
          { label: 'WAVEFORM',                 value: 'Pure sine wave' },
          { label: 'SWITCH TIME',              value: '10 ms (typical value)' },
          { label: 'PARALLEL CAPACITY',        value: '1 - 6 units' },
        ],
      },
      {
        name: 'BATTERY',
        rows: [
          { label: 'BATTERY TYPE',                 value: 'Li-ion / Lead-Acid / User Defined' },
          { label: 'RATED BATTERY VOLTAGE',        value: '48 Vdc' },
          { label: 'VOLTAGE RANGE',                value: '40 \u2013 60 Vdc' },
          { label: 'MAX. GRID / GEN CHARGE CURRENT', value: '120 A' },
          { label: 'MAX. HYBRID CHARGE CURRENT',   value: '200 A' },
        ],
      },
      {
        name: 'PV INPUT',
        rows: [
          { label: 'NO. OF MPPT TRACKERS',         value: '2' },
          { label: 'MAX. PV INPUT POWER',          value: '5500 W + 5500 W' },
          { label: 'MAX. PV INPUT CURRENT',        value: '22 A + 22 A' },
          { label: 'MAX. OPEN CIRCUIT VOLTAGE',    value: '550 Vdc + 550 Vdc' },
          { label: 'MPPT VOLTAGE RANGE',           value: '125 \u2013 425 Vdc' },
        ],
      },
      {
        name: 'GRID / GENERATOR INPUT',
        rows: [
          { label: 'INPUT VOLTAGE RANGE',          value: '90 \u2013 140 VAC' },
          { label: 'INPUT FREQUENCY RANGE',        value: '50 / 60 Hz' },
          { label: 'BYPASS OVERLOAD CURRENT',      value: '63 A' },
        ],
      },
      {
        name: 'GENERAL',
        rows: [
          { label: 'DIMENSIONS',           value: '723 \u00d7 448 \u00d7 150 mm' },
          { label: 'WEIGHT',               value: '28 kg' },
          { label: 'PROTECTION DEGREE',    value: 'IP20, indoor only' },
          { label: 'OPERATING TEMP',       value: '-10°C - +55\u00b0C (derated > 45\u00b0C)' },
          { label: 'NOISE',                value: '< 60 dB' },
          { label: 'BUILT-IN INTERFACE',   value: 'RS485 \u00b7 CAN \u00b7 USB \u00b7 dry contact' },
          { label: 'EXTERNAL MODULE',      value: 'Wi-Fi / GPRS (optional)' },
          { label: 'SAFETY',               value: 'IEC62109-1 \u00b7 IEC62109-2' },
          { label: 'EMC',                  value: 'EN61000-6-1 \u00b7 EN61000-6-3' },
          { label: 'RoHS',                 value: 'Yes' },
        ],
      },
    ],
  },
  applications: [
    { label: 'ROOFTOP',  image: '/uploads/callsun/solutions/10kw/05-scenario-rooftop.webp' },
    { label: 'FARM',     image: '/uploads/callsun/solutions/10kw/06-scenario-farm.webp' },
    { label: 'BACKYARD', image: '/uploads/callsun/solutions/10kw/07-scenario-backyard.webp' },
  ],
  wiring: {
    diagram: '/uploads/callsun/solutions/10kw/08-wiring-diagram.webp',
    instructions: '/uploads/callsun/solutions/10kw/09-wiring-instructions.webp',
  },
  includes: {
    image: '/uploads/callsun/solutions/10kw/10-includes.webp',
    items: [
      '16 Pcs \u00d7 450W Solar Panels \u2014 Reliable and Durable',
      '1 Pc \u00d7 14kWh LiFePO4 Battery \u2014 Reliable and Durable',
      '1 Pc \u00d7 10kW Hybrid Inverter \u2014 Reliable and Durable',
    ],
  },
  downloads: [
    { label: 'User Manual', href: '#inquiry' },
  ],
  faq: [
    {
      q: 'What can the 7.2kW Solar Generator System power?',
      a: 'The Callsun 7.2kW Solar Generator System is designed to provide reliable backup power for homes, cabins, RVs, and off-grid applications. With a 10kW hybrid inverter and 14kWh battery storage capacity, it can support essential household appliances such as refrigerators, lights, WiFi routers, TVs, computers, pumps, and other high-demand devices depending on the total power requirements.',
    },
    {
      q: 'Does this solar generator system work off-grid?',
      a: 'Yes. The Callsun solar generator system can operate in off-grid mode when paired with solar panels. The hybrid inverter intelligently manages solar input, battery storage, and energy output, allowing you to create an independent power system without relying entirely on the electrical grid.',
    },
    {
      q: 'How long can the 14kWh battery storage power my home?',
      a: 'The backup time depends on your energy consumption. For example, if your home uses approximately 1kW of power continuously, the 14kWh battery can theoretically provide around 14 hours of backup power. Actual runtime may vary depending on appliance loads, inverter efficiency, and battery conditions.',
    },
    {
      q: 'Can I expand the battery capacity or solar panel system in the future?',
      a: 'Yes. The Callsun energy storage system is designed with scalability in mind. You can expand your solar panel capacity or increase battery storage based on your future energy needs. Please ensure additional components are compatible with the inverter specifications.',
    },
    {
      q: 'Is installation required for this solar generator system?',
      a: 'Professional installation is recommended for the 10kW hybrid inverter and 14kWh battery storage system to ensure safe operation and proper system configuration. Installation requirements may vary depending on your location, electrical setup, and local regulations.',
    },
  ],
};