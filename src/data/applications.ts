/**
 * Applications data — B2B use-case scenarios that route buyers to
 * the right product/solution/case path.
 *
 * Structure mirrors the old-site Applications page (127.0.0.1:4322)
 * but rewritten for the Callsun B2B brand. Content: 3 top-level
 * scenarios + workflow + FAQ.
 */

export interface ApplicationScenario {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  bestFor: string;
  solutionCount: string;
  image: string;
  highlights: string[];
  linkedSolutions: { label: string; href: string }[];
}

export const APPLICATIONS: ApplicationScenario[] = [
  {
    slug: 'commercial-rooftop',
    eyebrow: 'C&I Rooftop',
    title: 'Commercial & Industrial Rooftop',
    intro:
      'Power-dense solar modules and standard system packages for factories, warehouses, packaging plants, dealerships and high-load commercial buildings.',
    bestFor:
      'Best for factories, warehouses, dealerships and C&I buildings where roof area, daytime load and project proof matter most.',
    solutionCount: '4 modules · 1 package',
    image: '/uploads/callsun/solutions/12kw/01-system-overview.webp',
    highlights: [
      'High-density N-Type panels (up to 620W)',
      'Split-phase 12kW hybrid inverter option',
      '25-year linear power warranty',
      'Container-optimized packaging (594 pcs / 40HQ)',
    ],
    linkedSolutions: [
      { label: '10.8kW Grid-Tied Package', href: '/solutions/10-8kw-grid-tied/' },
      { label: 'CN620W Standard Module', href: '/products/cn620w/' },
      { label: 'CN580W Standard Module', href: '/products/cn580w/' },
    ],
  },
  {
    slug: 'home-energy-storage',
    eyebrow: 'Home Storage',
    title: 'Home Energy Storage',
    intro:
      'Solar module and LiFePO4 battery system packages for residential backup, self-consumption and dealer-ready home storage programs.',
    bestFor:
      'Best for dealers and installers building residential solar-plus-storage offers for backup power and self-consumption.',
    solutionCount: '3 modules · 1 package',
    image: '/uploads/callsun/solutions/5-4kw/01-solar-panels.jpg',
    highlights: [
      'Whole-home LiFePO4 battery kits (14–28 kWh)',
      'Hybrid inverter with grid pass-through',
      'Dealer-ready BOM and installer manual',
      'UL / IEC certified for US and EU markets',
    ],
    linkedSolutions: [
      { label: '10.8kW Grid-Tied Package', href: '/solutions/10-8kw-grid-tied/' },
      { label: 'CN450W Standard Module', href: '/products/cn450w/' },
      { label: 'CN215W Compact Module', href: '/products/cn215w/' },
    ],
  },
  {
    slug: 'off-grid-remote-power',
    eyebrow: 'Off-Grid',
    title: 'Off-Grid & Remote Power',
    intro:
      'Repeatable off-grid system packages for remote homes, farms, cabins, telecom, backup power and rural commercial projects.',
    bestFor:
      'Best for cabins, farms, remote homes and small commercial sites where grid access is limited or unstable.',
    solutionCount: '2 packages · anti-shading modules',
    image: '/uploads/callsun/solutions/10kw/01-system-overview.jpg',
    highlights: [
      'ShadeGuard™ anti-shading module option',
      'Standalone battery packages up to 14 kWh',
      'IP65-rated hardware for outdoor deployment',
      '12V-compatible SKUs for RV and van setups',
    ],
    linkedSolutions: [
      { label: '5.4kW Off-Grid Package', href: '/solutions/' },
      { label: '7.2kW Off-Grid Package', href: '/solutions/' },
      { label: 'CN180W Anti-Shading Module', href: '/products/cn180w/' },
    ],
  },
];

export const APPLICATION_WORKFLOW = [
  {
    step: '01',
    title: 'Identify Scenario',
    body: 'Buyer chooses a use case such as C&I rooftop, home storage or off-grid power.',
  },
  {
    step: '02',
    title: 'Review Package Logic',
    body: 'The application page explains pain points, recommended products, solutions, cases and documents.',
  },
  {
    step: '03',
    title: 'Submit Project Context',
    body: 'RFQ captures application, capacity, timeline, market, UTM and referrer for later CRM integration.',
  },
];

export const APPLICATION_FAQ = [
  {
    q: 'Why do you separate Applications from Products and Solutions?',
    a: 'Product pages answer specifications. Application pages answer project context, buyer concerns and recommended paths, which makes them useful for SEO and B2B conversion.',
  },
  {
    q: 'Can we add new applications in the future (RV, balcony, telecom)?',
    a: 'Yes. The Applications collection is CMS-ready, so future scenarios such as RV solar, balcony solar, telecom backup or farm power can be added without changing the page structure.',
  },
  {
    q: 'What should each application page include?',
    a: 'Each application page should guide visitors to related solutions, products, case references, downloads and finally a Contact or RFQ form with source tracking.',
  },
  {
    q: 'How should distributors send an inquiry from this page?',
    a: 'Send the load type, target capacity, installation market and timeline. Callsun can recommend a product or package path for the first quote discussion.',
  },
  {
    q: 'How should installers or EPC contractors start?',
    a: 'Send your target market, system size and application. Callsun will help match modules, storage and standard BOM references.',
  },
];
