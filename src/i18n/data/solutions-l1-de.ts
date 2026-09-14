// Solutions L1 — Deutsch (/de/solutions/)
export const SOLUTIONS_L1_DE = {
  hero: {
    title: 'Solar-Systemlösungen',
    eyebrow: 'LÖSUNGEN',
    subtitle: 'Komplette PV-, Hybridwechselrichter- und Batteriespeicher-Konfigurationen für unterbrechungsfreie Wohn- und Gewerbeversorgung.',
  },
  gridTied: {
    eyebrow: 'NETZGEKOPPELT / HYBRID',
    title: 'Netzgekoppeltes Solar-System',
    subtitle: 'Eine komplette Konfiguration aus PV, Hybridwechselrichter und Batteriespeicher.',
    subEyebrow: 'SYSTEMKONFIGURATION',
  },
  offGrid: {
    eyebrow: 'INSELSYSTEM',
    title: 'Insel-Solarsysteme',
    subtitle: 'Zwei Systemgrößen für eine unabhängige private Stromversorgung.',
    subEyebrow: 'SYSTEMKONFIGURATIONEN',
  },
  viewSystem: 'SYSTEM ANSEHEN',
  specLabels: {
    pvArray: 'PV-FELD',
    hybridInverter: 'HYBRIDWECHSELRICHTER',
    batteryStorage: 'BATTERIESPEICHER',
  },
  kitNames: {
    '10-8kw-grid-tied': { name: '10,8-kW-Netzset', subtitle: 'Für Wohn- und leichte Gewerbeanwendungen', inline: '12-kW-Hybridwechselrichter · 28-kWh-Batteriespeicher' },
    '5-4kw-off-grid': { name: '5,4-kW-Inselset', subtitle: 'Kompaktes Inselsystem für unabhängige Wohnstromversorgung', inline: '6,5-kW-Hybridwechselrichter · 10-kWh-Batteriespeicher' },
    '7-2kw-grid-tied': { name: '7,2-kW-Inselset', subtitle: 'Größeres Inselsystem für erweiterten Wohnbedarf', inline: '10-kW-Hybridwechselrichter · 14-kWh-Batteriespeicher' },
  } as Record<string, { name: string; subtitle: string; inline: string }>,
  inquiry: {
    eyebrow: 'PROJEKTANFRAGE',
    title: 'Besprechen Sie Ihre Solar-Systemanforderungen',
    subtitle: 'Teilen Sie uns Anwendung, Zielkapazität und Projektanforderungen mit unserem Team.',
    ctaLabel: 'ANFRAGE SENDEN',
  },
};
