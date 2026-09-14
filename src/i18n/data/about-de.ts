// About page — Deutsch (/de/about/)
export const ABOUT_DE = {
  title: 'Über Callsun — PV-Modulmarke & Hersteller',
  description:
    'Callsun ist eine PV-Modulmarke und ein Hersteller für Distributoren, Installateure, EPCs, Gerätehersteller und Projektkäufer — Standard- und individuelle PV-Module, geprüfte Qualität, weltweite Versorgung.',
  hero: {
    eyebrow: 'PV-MODULMARKE & HERSTELLER',
    h1: 'Photovoltaik-Modulmarke & Hersteller',
    intro:
      'Callsun entwickelt, fertigt und prüft Standard- und individuelle PV-Module — für Distributoren, Installateure, EPCs, Gerätehersteller und Projektkäufer in weltweiten Märkten.',
    cta1: 'Unsere Markenstärken entdecken',
    cta2: 'Partnerschaftsprogramme besprechen',
  },
  whoWeAre: {
    eyebrow: 'WER WIR SIND',
    h2: 'Gebaut um echte Installationsräume und langfristige Leistung',
    intro:
      'Callsun ist eine Photovoltaik-Modulmarke und ein Hersteller mit globaler Reichweite. Wir fokussieren auf Standard-PV-Module, individuelle PV-Module und komplette Solar- plus Speicherpakete. Jedes Modul und every Set ist auf echte Installationsräume ausgelegt — Zielleistung, Abmessungen, elektrisches Layout und Montageart — und wird durchgängig begleitet, von der Auswahl und dem Engineering bis zur Zertifizierung und Großmengen-Lieferung.',
  },
  manufacturing: {
    eyebrow: 'FERTIGUNG',
    h2: 'Von der Produktspezifikation zur stabilen Lieferung',
    intro:
      'Eine vollautomatische Standardmodul-Linie läuft neben einer semi-automatischen, flexiblen Linie für individuelle Module — mit diszipliniertem Prozesskontrollsystem, das die Konsistenz von Charge zu Charge von der Musterprüfung bis zur Großmengen-Lieferung sichert.',
  },
  portfolio: {
    h2: 'Produktportfolio',
    viewMore: 'Mehr ansehen',
  },
  quality: {
    eyebrow: 'GEPRÜFTE QUALITÄT',
    h2: 'Geprüfte Qualität in jeder Phase',
  },
  cta: {
    h2: 'Mehr Energiewert aus jedem begrenzten Raum',
    button: 'Planen Sie Ihr individuelles Modulprogramm',
    connect: 'Kontakt aufnehmen',
  },
};

export const STATS_DE = [
  { value: 'Ca. 55.000 m²', label: 'Fertigungsfläche' },
  { value: '4', label: 'Fertigungsregionen' },
  { value: '7', label: 'Lager- & Logistikmärkte' },
  { value: '180–720W', label: 'Standard- & individuelle Module' },
];

export const PRINCIPLES_DE = [
  { step: '01', eyebrow: 'GROSSMENGEN-FERTIGUNG', title: 'Standard-PV-Module in Serie' },
  { step: '02', eyebrow: 'INDIVIDUELLES ENGINEERING', title: 'Individuelles PV-Modul-Engineering' },
  { step: '03', eyebrow: 'ZUVERLÄSSIGKEIT & QUALITÄT', title: 'Qualitätskontrolle und Zuverlässigkeitsvalidierung' },
  { step: '04', eyebrow: 'SYSTEMSUPPORT', title: 'Anwendungsorientierte Systemkonfiguration' },
];

export const PROCESS_STEPS_DE = [
  { step: '01', eyebrow: 'ENGINEERING', title: 'Engineering-Bewertung' },
  { step: '02', eyebrow: 'PROTOTYP', title: 'Musterprototyp' },
  { step: '03', eyebrow: 'ZUVERLÄSSIGKEIT', title: 'Zuverlässigkeitsvalidierung' },
  { step: '04', eyebrow: 'GROSSMENGE', title: 'Massenausrollung' },
];

export const PORTFOLIO_DE = [
  {
    eyebrow: 'STANDARD-PV-MODULE',
    title: 'Standard-PV-Module',
    body: 'Geeignet für Wohngebäudedächer, Photovoltaik-Freiflächen, Inselsysteme und kleine Gewerbe- und Industrieprojekte. Höhere Watt pro Quadratmeter reduziert Systemgewicht und Installationsaufwand.',
    powers: [
      { label: '450W', href: '/products/cn450w/' },
      { label: '580W', href: '/products/cn580w/' },
      { label: '620W', href: '/products/cn620w/' },
      { label: '720W', href: '/products/cn720w/' },
    ],
    tags: ['Hochleistungs-Kompatibilität', 'PV-Integration'],
    href: '/de/products/standard-modules/',
  },
  {
    eyebrow: 'INDIVIDUELLE PV-MODULE',
    title: 'Individuelle PV-Module',
    body: 'Für Wohnmobil-, Dach-, Balkon-, marine und individuelle Geräte-Szenarien — konstruiert nach Raum, Leistung, Abmessungen, Struktur und Schnittstellenanforderungen mit Validierung vom Prototyp bis zur Charge.',
    powers: [
      { label: '180W', href: '/products/cn180w/' },
      { label: '200W', href: '/products/cn200w/' },
      { label: '210W', href: '/products/cn210w/' },
      { label: '215W', href: '/products/cn215w/' },
    ],
    tags: ['Individuelle Bemessung', 'Strukturentwicklung'],
    href: '/de/products/custom-modules/',
  },
];

export const QC_TESTS_DE = [
  { eyebrow: 'EL-PRÜFUNG', title: 'Elektrolumineszenz-Inspektion' },
  { eyebrow: 'SOLARSIMULATOR', title: 'Laborgroßer Solarsimulator' },
  { eyebrow: 'FEUCHTEHITZE', title: 'Feuchtehitze & Temperaturwechsel' },
  { eyebrow: 'UV-ALTERUNG', title: 'UV-Alterungstest' },
  { eyebrow: 'MECHANISCHE LAST', title: 'Statische mechanische Last' },
  { eyebrow: 'ISOLATIONSTEST', title: 'Spannungsfestigkeit & Isolation' },
];

export const CUSTOMER_TYPES_DE = [
  { title: 'Distributoren und Großhandel' },
  { title: 'Installateure und Systemdienstleister' },
  { title: 'Gerätehersteller und Projektkäufer' },
];

export const APPLICATION_TABS_DE = [
  { eyebrow: 'WOHNEN', title: 'Wohn-PV', href: '/solutions/' },
  { eyebrow: 'WOHNMOBIL & MOBIL', title: 'Wohnmobil & Mobil', href: '/products/custom-modules/' },
  { eyebrow: 'BALKON', title: 'Balkon-PV', href: '/products/custom-modules/' },
  { eyebrow: 'INSELSYSTEM', title: 'Inselanlagen', href: '/solutions/' },
  { eyebrow: 'GEWERBE', title: 'Kleines Gewerbe', href: '/solutions/' },
];
