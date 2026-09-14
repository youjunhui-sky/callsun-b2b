// 产品详情页本地化（DE）——通用 UI + 标签映射 + 通用 FAQ
import type { FaqItem } from '@/data/faq';

export const DETAIL_DE = {
  techEyebrow: 'TECHNISCHE SPEZIFIKATIONEN',
  techH2Suffix: 'Datenblatt',
  colElectrical: 'ELEKTRISCH',
  colMechanical: 'MECHANISCH',
  colThermal: 'TEMPERATUR & LIEFERUNG',
  stcNote: 'STC: Einstrahlung 1000 W/m² · Zelltemperatur 25 °C · Luftmasse 1,5',
  docsEyebrow: 'DOKUMENTE & ANFRAGE',
  docsH2Suffix: 'Produktressourcen',
  downloadDatasheet: 'DATENBLATT HERUNTERLADEN',
  installManual: 'INSTALLATIONSHANDBUCH',
  formTitleSuffix: 'PRODUKTANFRAGE',
  faqHeadingSuffix: 'Häufige Fragen',
};

// 规格标签映射（specs + tech 全量 40 条）
export const LABEL_DE: Record<string, string> = {
  'MAXIMUM POWER': 'MAXIMALE LEISTUNG',
  'MAXIMUM POWER CURRENT': 'MAXIMALER STROM',
  'MAXIMUM POWER VOLTAGE': 'MAXIMALE SPANNUNG',
  'OPEN-CIRCUIT VOLTAGE': 'LEERLAUFSPANNUNG',
  'SHORT-CIRCUIT CURRENT': 'KURZSCHLUSSSTROM',
  'Module Efficiency STC (%)': 'Moduleffizienz STC (%)',
  'CELL EFFICIENCY': 'ZELLEFFIZIENZ',
  'CELL TYPE': 'ZELLTYP',
  'CELL CONFIGURATION': 'ZELLKONFIGURATION',
  'DIMENSIONS': 'ABMESSUNGEN',
  'WEIGHT': 'GEWICHT',
  'FRONT / BACK GLASS': 'GLAS VORNE / HINTEN',
  'FRAME': 'RAHMEN',
  'JUNCTION BOX': 'ANSCHLUSSDOSE',
  'IP RATING': 'SCHUTZART',
  'CABLE LENGTH': 'KABELLÄNGE',
  'CONNECTOR': 'STECKER',
  'FIRE PERFORMANCE': 'BRANDVERHALTEN',
  'WIND / SNOW LOAD': 'WIND-/SCHNEELAST',
  'PACKAGING': 'VERPACKUNG',
  'OPERATING TEMPERATURE': 'BETRIEBSTEMPERATUR',
  'TEMPERATURE COEFFICIENT (PMAX)': 'TEMPERATURKOEFFIZIENT (PMAX)',
  'PMAX COEFFICIENT': 'PMAX-KOEFFIZIENT',
  'VOC COEFFICIENT': 'VOC-KOEFFIZIENT',
  'ISC COEFFICIENT': 'ISC-KOEFFIZIENT',
  'NOCT': 'NOCT',
  'MAXIMUM SYSTEM VOLTAGE': 'MAXIMALE SYSTEMSPANNUNG',
  'MAXIMUM SERIES FUSE': 'MAXIMALE REIHENSICHERUNG',
  'POWER TOLERANCE': 'LEISTUNGSTOLERANZ',
  'PRODUCT WARRANTY': 'PRODUKTGARANTIE',
  'LINEAR WARRANTY': 'LINEARE GARANTIE',
  'FIRST-YEAR DEGRADATION': 'DEGRADATION IM 1. JAHR',
  'LINEAR DEGRADATION': 'LINEARE DEGRADATION',
  '25-YEAR OUTPUT': 'LEISTUNG NACH 25 JAHREN',
  'BIFACIALITY': 'BIFAZIALITÄT',
  'GLASS': 'GLAS',
  'CIRCUIT DESIGN': 'SCHALTUNGSDESIGN',
  'Vmp / Imp': 'Vmp / Imp',
  'Voc / Isc': 'Voc / Isc',
  'MOUNTING': 'MONTAGE',
  'APPLICATIONS': 'ANWENDUNGEN',
  'STANDARD TEST CONDITIONS': 'STANDARD-TESTBEDINGUNGEN',
  'PROTECTION CLASS': 'SCHUTZKLASSE',
  'SYSTEM CONFIGURATION': 'SYSTEMKONFIGURATION',
};

// 通用 FAQ（8 个型号页共用，DE）——内容真实、不含编造商务数字
export const FAQ_DE: FaqItem[] = [
  {
    q: 'Welche Zertifikate hat die Callsun CN-Serie?',
    a: 'Die CN-Serie ist nach CE und RoHS zertifiziert und verfügt über eine Intertek-ETL-Bescheinigung (Certificate of Compliance, 2026). Dokumente stehen auf der Ressourcenseite zum Download bereit.',
  },
  {
    q: 'Kann ich vor einem Volumeneinkauf Muster anfordern?',
    a: 'Ja — für B2B-Käufer unterstützen wir die Musterprüfung. Teilen Sie uns Zielmenge und Zielland über das Anfrageformular mit; unser Team bestätigt Verfügbarkeit und den nächsten Schritt.',
  },
  {
    q: 'Wie wirkt sich die N-Type-Technologie auf die Langzeitleistung aus?',
    a: 'N-Type-Wafer sind anfälligarm gegenüber lichtinduzierter Degradation (LID/LeTID). Das bedeutet geringere Degradation im ersten Jahr und über die Lebensdauer — für planbarere Ertragsmodelle.',
  },
  {
    q: 'Bringt die bifaziale Bauart zusätzlichen Ertrag?',
    a: 'Ja — die Rückseite erntet reflektiertes Licht. Den stärksten Zusatzertrag bringen hochreflektierende Untergründe mit ausreichend Freiraum; der tatsächliche Gewinn hängt von Albedo und Montagehöhe ab.',
  },
  {
    q: 'Sind individuelle Modulgrößen möglich?',
    a: 'Die individuelle Modullinie von Callsun passt Abmessungen, Zelllayout und Anschlussdosen an den verfügbaren Raum an. Senden Sie Zeichnungen über das Anfrageformular für eine Machbarkeitsprüfung.',
  },
];
