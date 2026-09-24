/**
 * Inverter product detail page data — 6.5KW Split-Phase Pure Sine Wave Hybrid Solar Inverter
 *
 * Source: callsunsolar.com/products/6-5kw-split-phase-pure-sine-wave-hybrid-solar-inverter
 * — stripped of commerce elements (price, payment methods, delivery methods,
 *   buy button, variant selector). B2B version = spec-driven, inquiry-based.
 * Layout/typography mirrors the Solutions kit detail template (2026-09-24 张晓晗拍板).
 */

export interface InverterDetail {
  slug: string;
  eyebrow: string;
  title: string;
  short: string;
  tagline: string;
  intro: string;
  keyStats: { label: string; value: string }[];
  gallery: string[];
  heroImage: string;
  features: { title: string; body: string; image: string }[];
  applications: { label: string; body: string; image: string }[];
  specGroups: { name: string; rows: { label: string; value: string }[] }[];
  includes: { image: string; items: string[] };
  downloads: { label: string; href: string }[];
  faq: { q: string; a: string }[];
}

export const INVERTER_6_5KW: InverterDetail = {
  slug: '6-5kw-hybrid-inverter',
  eyebrow: 'INVERTER',
  title: '6.5KW Split-Phase Pure Sine Wave Hybrid Solar Inverter',
  short: '6.5KW HYBRID INVERTER',
  tagline: '48V hybrid inverter · dual MPPT · split-phase 120/240V output',
  intro:
    'High-efficiency 48V hybrid inverter featuring dual MPPT tracking, pure sine wave output, and flexible parallel expansion for reliable home backup power.',
  keyStats: [
    { label: 'RATED OUTPUT', value: '6.5kW' },
    { label: 'MAX. PEAK POWER', value: '13kW' },
    { label: 'OUTPUT', value: '120/240V Split-Phase' },
    { label: 'MPPT CHANNELS', value: '2 × 5000W' },
  ],
  gallery: [
    '/uploads/callsun/products/inverter-6-5kw/hero-01.webp',
    '/uploads/callsun/products/inverter-6-5kw/hero-02.webp',
    '/uploads/callsun/products/inverter-6-5kw/hero-03.webp',
    '/uploads/callsun/products/inverter-6-5kw/hero-04.webp',
    '/uploads/callsun/products/inverter-6-5kw/hero-05.webp',
    '/uploads/callsun/products/inverter-6-5kw/hero-06.webp',
    '/uploads/callsun/products/inverter-6-5kw/hero-07.webp',
    '/uploads/callsun/products/inverter-6-5kw/hero-08.webp',
    '/uploads/callsun/products/inverter-6-5kw/hero-09.webp',
  ],
  heroImage: '/uploads/callsun/products/inverter-6-5kw/hero-01.webp',
  features: [
    {
      title: '6.5KW Solar Storage Inverter',
      body: 'High-efficiency 48V hybrid inverter featuring dual MPPT tracking, pure sine wave output, and flexible parallel expansion for reliable home backup power.',
      image: '/uploads/callsun/products/inverter-6-5kw/inv-overview.webp',
    },
    {
      title: 'Smart Solar Inverter Features',
      body: 'Enjoy seamless UPS backup power, real-time LCD monitoring, and an intelligent cooling system. Compatible with diverse lead-acid and lithium-ion batteries for maximum energy efficiency.',
      image: '/uploads/callsun/products/inverter-6-5kw/inv-features-detail.webp',
    },
    {
      title: 'Smart Communication Interfaces',
      body: 'Features built-in USB-B and RS485/CAN ports for easy parameter modification via computer software and seamless lithium battery BMS connection.',
      image: '/uploads/callsun/products/inverter-6-5kw/inv-interfaces.webp',
    },
    {
      title: 'Advanced Dry Contact Control',
      body: 'Supports multi-functional dry contact operations including RSD power supply, remote ON/OFF, battery temperature sampling, and remote generator start/stop.',
      image: '/uploads/callsun/products/inverter-6-5kw/inv-drycontact.webp',
    },
    {
      title: 'Simple Wall-Mounted Installation',
      body: 'Designed for easy indoor wall mounting with clear step-by-step guidance in the user manual to ensure secure and hassle-free setup.',
      image: '/uploads/callsun/products/inverter-6-5kw/inv-installation.webp',
    },
    {
      title: 'Flexible PV Wiring Options',
      body: 'Supports dual-channel PV input configuration with simultaneous maximum power point tracking (MPPT) for efficient energy harvesting and system expansion.',
      image: '/uploads/callsun/products/inverter-6-5kw/inv-wiring.webp',
    },
    {
      title: 'Secure Packaging & Specs',
      body: 'Compact dimensions (553mm × 410mm × 130mm) and an optimized weight of 47.84 lbs (18.7 kg) with protective custom foam packaging for safe and reliable delivery.',
      image: '/uploads/callsun/products/inverter-6-5kw/inv-packaging.webp',
    },
  ],
  applications: [
    {
      label: 'RV Off-Grid Solar Power',
      body: 'Reliable 6.5KW energy solution tailored for mobile living. Features pure sine wave output and seamless backup power to run all your essential RV appliances on the road.',
      image: '/uploads/callsun/products/inverter-6-5kw/inv-rv.webp',
    },
    {
      label: 'Reliable Home Power Backup',
      body: 'Ensure uninterrupted power for your entire household. The 6.5KW hybrid solar inverter delivers stable split-phase power and robust backup protection during grid outages.',
      image: '/uploads/callsun/products/inverter-6-5kw/inv-home.webp',
    },
    {
      label: 'Marine Solar Power System',
      body: 'Dependable 6.5KW energy storage solution designed for marine vessels. Delivers stable pure sine wave power and efficient solar conversion for life on the water.',
      image: '/uploads/callsun/products/inverter-6-5kw/inv-marine.webp',
    },
  ],
  specGroups: [
    {
      name: 'Inverter Output',
      rows: [
        { label: 'Rated output power', value: '6500W' },
        { label: 'Max. peak power', value: '13000W' },
        { label: 'Rated output voltage', value: '120/240 VAC (single-phase/split-phase)' },
        { label: 'Rated frequency', value: '50/60 Hz' },
        { label: 'Output wave', value: 'Pure sine wave' },
        { label: 'Switching time', value: '10 ms (typical value)' },
        { label: 'Parallel number', value: '6' },
      ],
    },
    {
      name: 'Battery',
      rows: [
        { label: 'Battery type', value: 'Lithium-ion battery / lead-acid battery / user-defined battery' },
        { label: 'Rated battery voltage', value: '48 Vdc' },
        { label: 'Voltage range', value: '40 Vdc − 60 Vdc' },
        { label: 'Max. grid/generator charge current', value: '80 A' },
        { label: 'Max. hybrid charge current', value: '140 A' },
      ],
    },
    {
      name: 'PV Input',
      rows: [
        { label: 'MPPT channel number', value: '2' },
        { label: 'Max. input power', value: '5000W + 5000W' },
        { label: 'Max. input current', value: '18A + 18A' },
        { label: 'Max. open circuit voltage', value: '550Vdc / 550Vdc' },
        { label: 'MPPT operating voltage range', value: '150Vdc − 450Vdc / 150Vdc − 450Vdc' },
      ],
    },
    {
      name: 'Grid / Generator Input',
      rows: [
        { label: 'Input voltage range', value: '65 VAC − 140 VAC' },
        { label: 'Input frequency range', value: '50/60 Hz' },
        { label: 'Bypass overload current', value: '40A' },
      ],
    },
    {
      name: 'Efficiency',
      rows: [
        { label: 'MPPT tracking efficiency', value: '99.9%' },
        { label: 'Max. efficiency of battery inverter', value: '93%' },
      ],
    },
    {
      name: 'General',
      rows: [
        { label: 'Dimension', value: '553mm × 410mm × 130mm' },
        { label: 'Weight', value: '18.7 kg' },
        { label: 'Protection level', value: 'IP20, for indoor use only' },
        { label: 'Ambient temperature', value: '−10°C − 55°C, >45°C derating' },
        { label: 'Noise', value: '<60 dB' },
        { label: 'Cooling mode', value: 'Intelligent fan' },
      ],
    },
    {
      name: 'Communication',
      rows: [
        { label: 'Built-in interface', value: 'RS485 / CAN / USB / dry contact' },
        { label: 'External module', value: 'Wi-Fi / GPRS' },
      ],
    },
    {
      name: 'Certification',
      rows: [
        { label: 'Safety', value: 'IEC62109-1, IEC62109-2, and UL1741' },
        { label: 'EMC', value: 'EN61000-6-1, EN61000-6-3, and FCC 15 class B' },
        { label: 'RoHS', value: 'Yes' },
      ],
    },
  ],
  includes: {
    image: '/uploads/callsun/products/inverter-6-5kw/inv-includes.webp',
    items: [
      '6.5kW hybrid solar inverter',
      'User manual',
      'Wall mounting kit',
      'Battery & PV communication cables',
    ],
  },
  downloads: [
    {
      label: 'User Manual (V1.2)',
      href: '/uploads/callsun/products/inverter-6-5kw/CS-6.5KW-Inverter-User-Manual-V1.2.pdf',
    },
  ],
  faq: [
    {
      q: 'What can I power with the Callsun 6.5kW Hybrid Solar Inverter?',
      a: 'The 6.5kW hybrid inverter can power a wide range of household appliances, including refrigerators, air conditioners, water pumps, TVs, lights, computers, kitchen appliances, and other home backup loads. Its split-phase output makes it suitable for systems requiring both 120V and 240V power.',
    },
    {
      q: 'Can this hybrid inverter work with solar panels and batteries at the same time?',
      a: 'Yes. This hybrid solar inverter is designed to work with solar panels and battery storage together. Solar energy can be used to power your loads, charge your batteries, and provide backup power when solar production is limited.',
    },
    {
      q: 'What type and voltage of battery is required for this inverter?',
      a: 'This hybrid inverter is designed for high-capacity energy storage systems and requires a compatible battery bank. A 48V battery system is recommended for efficient operation. It supports common battery types such as LiFePO₄ lithium batteries and lead-acid batteries when properly configured.',
    },
    {
      q: 'Can this inverter provide backup power during a grid outage?',
      a: 'Yes. When connected with solar panels and batteries, the inverter can provide backup power when the grid is unavailable. It automatically manages power from solar, batteries, and grid input to help keep essential loads running.',
    },
    {
      q: 'How many solar panels can I connect to the 6.5kW hybrid inverter?',
      a: "The solar panel capacity depends on the inverter's PV input specifications, panel voltage, and system design. For optimal performance, make sure the total solar array voltage and current stay within the inverter's recommended limits. A professional system design is recommended for larger residential installations.",
    },
  ],
};
