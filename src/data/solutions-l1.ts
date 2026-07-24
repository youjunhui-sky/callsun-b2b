/**
 * Solutions L1 index page data
 * 3 kits split across 2 categories:
 *   - Grid-Tied / Hybrid: 5.4kW
 *   - Off-Grid: 10.8kW + 7.2kW
 */

export interface SolutionKit {
  slug: string;             // URL slug
  category: 'grid-tied' | 'off-grid';
  categoryLabel: string;    // 'GRID-TIED / HYBRID' or 'OFF-GRID'
  name: string;             // '10.8kW Grid-Tied System'
  short: string;            // '10.8kW Grid-Tied'
  subtitle: string;
  specs: { label: string; value: string }[];
  specsInline: string;      // '12kW hybrid inverter · 28kWh battery storage'
  heroImage: string;        // large split-hero image
  cardImage: string;        // smaller card image
}

export const SOLUTIONS_L1 = {
  breadcrumb: [
    { label: 'SOLUTIONS', href: '/solutions/' },
  ],
  hero: {
    title: 'Solar System Solutions',
    subtitle: 'Grid-tied and off-grid system configurations.',
    eyebrow: 'SOLUTIONS',
  },
  gridTied: {
    eyebrow: 'GRID-TIED / HYBRID',
    title: 'Grid-Tied Solar System',
    subtitle: 'A complete PV, hybrid inverter and battery storage configuration.',
    subEyebrow: 'SYSTEM CONFIGURATION',
  },
  offGrid: {
    eyebrow: 'OFF-GRID',
    title: 'Off-Grid Solar Systems',
    subtitle: 'Two system sizes for independent residential power supply.',
    subEyebrow: 'SYSTEM CONFIGURATIONS',
  },
  inquiry: {
    eyebrow: 'PROJECT INQUIRY',
    title: 'Discuss Your Solar System Requirements',
    subtitle: 'Share your application, target capacity and project requirements with our team.',
    cta: { label: 'SEND AN INQUIRY', href: '/contact/' },
  },
  kits: [
    {
      slug: '10-8kw-grid-tied',
      category: 'off-grid',
      categoryLabel: 'OFF-GRID',
      name: '10.8kW Grid-Tied System',
      short: '10.8kW Hybrid System',
      subtitle: 'For residential and light commercial use',
      specs: [
        { label: 'PV ARRAY',         value: '10.8 kW' },
        { label: 'HYBRID INVERTER',  value: '12 kW' },
        { label: 'BATTERY STORAGE',  value: '28 kWh' },
      ],
      specsInline: '12 kW hybrid inverter \u00b7 28 kWh battery storage',
      heroImage: '/uploads/callsun/solutions/12kw/01-system-overview.webp',
      cardImage: '/uploads/callsun/solutions/12kw/homepage-card.webp',
    },
    {
      slug: '5-4kw-off-grid',
      category: 'grid-tied',
      categoryLabel: 'GRID-TIED / HYBRID',
      name: '5.4kW Off-Grid System',
      short: '5.4kW Off-Grid System',
      subtitle: 'Compact off-grid system for independent residential power',
      specs: [
        { label: 'PV ARRAY',         value: '5.4 kW' },
        { label: 'HYBRID INVERTER',  value: '6.5 kW' },
        { label: 'BATTERY STORAGE',  value: '10 kWh' },
      ],
      specsInline: '6.5 kW hybrid inverter \u00b7 10 kWh battery storage',
      heroImage: '/uploads/callsun/solutions/5-4kw/01-system-overview.webp',
      cardImage: '/uploads/callsun/solutions/5-4kw/01-solar-panels.jpg',
    },
    {
      slug: '7-2kw-grid-tied',
      category: 'grid-tied',
      categoryLabel: 'GRID-TIED / HYBRID',
      name: '7.2kW Off-Grid System',
      short: '7.2kW Off-Grid System',
      subtitle: 'Larger off-grid system for extended residential loads',
      specs: [
        { label: 'PV ARRAY',         value: '7.2 kW' },
        { label: 'HYBRID INVERTER',  value: '10 kW' },
        { label: 'BATTERY STORAGE',  value: '14 kWh' },
      ],
      specsInline: '10 kW hybrid inverter \u00b7 14 kWh battery storage',
      heroImage: '/uploads/callsun/solutions/10kw/01-system-overview.jpg',
      cardImage: '/uploads/callsun/solutions/10kw/homepage-card.jpg',
    },
  ] as SolutionKit[],
} as const;
