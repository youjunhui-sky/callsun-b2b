// Mobile hero overlay copy (P1): per-slide transcreated text, rendered only <768px
// on top of the vertical (1080x1440) text-free hero images. Desktop keeps the
// baked-in horizontal banners untouched.
export type HeroMobileSlide = {
  kicker?: string;
  title: string;
  sub?: string;
  pill?: string;
  stat?: string;
  align: 'left' | 'right';
  pos: 'top' | 'bottom';
  dark?: boolean; // dark ink text for light backgrounds
  scrim?: boolean; // bottom gradient scrim for readability
};

export const HERO_MOBILE: Record<'en' | 'de' | 'es' | 'ru', HeroMobileSlide[]> = {
  en: [
    { kicker: 'Residential · Commercial · Off-Grid', title: 'Example System Configurations', stat: '5.4kW · 7.2kW · 10.8kW', align: 'left', pos: 'top', dark: true },
    { kicker: 'Standard PV Module', title: '200W Bifacial Power in a Compact, System-Friendly Format', pill: '200W Max Power', align: 'left', pos: 'top', dark: true },
    { kicker: 'Standard PV Module', title: '215W Anti-Shading Module', sub: 'Engineered for real-world conditions', pill: '215W Maximum Power', align: 'left', pos: 'top', dark: true },
    { kicker: 'Standard PV Module', title: '450W Power, Built for Space-Efficient Solar', align: 'right', pos: 'top' },
    { kicker: 'Standard PV Module', title: '580W High-Power Module for Scalable Projects', align: 'right', pos: 'top' },
    { kicker: 'Standard PV Module', title: '620W Performance, Engineered for Higher Energy Yield', pill: 'High Power', align: 'left', pos: 'top' },
    { kicker: 'Standard PV Module', title: '720W Ultra-High-Power Module for Large-Scale Solar', pill: '720W Max Power', align: 'left', pos: 'top' },
  ],
  de: [
    { kicker: 'Wohnen · Gewerbe · Off-Grid', title: 'Beispielhafte Systemkonfigurationen', stat: '5,4 kW · 7,2 kW · 10,8 kW', align: 'left', pos: 'top', dark: true },
    { kicker: 'Standard-PV-Modul', title: '200W Bifacial-Power in kompaktem, systemfreundlichem Format', pill: '200W Max. Leistung', align: 'left', pos: 'top', dark: true },
    { kicker: 'Standard-PV-Modul', title: '215W Anti-Shading-Modul', sub: 'Entwickelt für reale Bedingungen', pill: '215W Max. Leistung', align: 'left', pos: 'top', dark: true },
    { kicker: 'Standard-PV-Modul', title: '450W Power für maximale Raumeffizienz', align: 'right', pos: 'top' },
    { kicker: 'Standard-PV-Modul', title: '580W Hochleistungs-Modul für skalierbare Projekte', align: 'right', pos: 'top' },
    { kicker: 'Standard-PV-Modul', title: '620W Performance für höheren Energieertrag', pill: 'High Power', align: 'left', pos: 'top' },
    { kicker: 'Standard-PV-Modul', title: '720W Ultra-Hochleistungs-Modul für große Solarprojekte', pill: '720W Max. Leistung', align: 'left', pos: 'top' },
  ],
  es: [
    { kicker: 'Residencial · Comercial · Aislada', title: 'Configuraciones de sistema de ejemplo', stat: '5,4 kW · 7,2 kW · 10,8 kW', align: 'left', pos: 'top', dark: true },
    { kicker: 'Módulo PV estándar', title: 'Potencia bifacial de 200W en un formato compacto', pill: '200W Potencia máx.', align: 'left', pos: 'top', dark: true },
    { kicker: 'Módulo PV estándar', title: 'Módulo antisombras de 215W', sub: 'Diseñado para condiciones reales', pill: '215W Potencia máx.', align: 'left', pos: 'top', dark: true },
    { kicker: 'Módulo PV estándar', title: '450W de potencia para energía solar eficiente en espacio', align: 'right', pos: 'top' },
    { kicker: 'Módulo PV estándar', title: 'Módulo de alta potencia 580W para proyectos escalables', align: 'right', pos: 'top' },
    { kicker: 'Módulo PV estándar', title: '620W Rendimiento para mayor producción de energía', pill: 'Alta potencia', align: 'left', pos: 'top' },
    { kicker: 'Módulo PV estándar', title: 'Módulo ultrapotente 720W para gran escala', pill: '720W Potencia máx.', align: 'left', pos: 'top' },
  ],
  ru: [
    { kicker: 'Для дома · бизнеса · автономных систем', title: 'Примеры конфигураций систем', stat: '5,4 кВт · 7,2 кВт · 10,8 кВт', align: 'left', pos: 'top', dark: true },
    { kicker: 'Стандартный PV-модуль', title: 'Двусторонняя мощность 200 Вт в компактном формате', pill: '200 Вт макс. мощность', align: 'left', pos: 'top', dark: true },
    { kicker: 'Стандартный PV-модуль', title: 'Модуль 215 Вт с защитой от затенения', sub: 'Создан для реальных условий', pill: '215 Вт макс. мощность', align: 'left', pos: 'top', dark: true },
    { kicker: 'Стандартный PV-модуль', title: 'Мощность 450 Вт для экономии пространства', align: 'right', pos: 'top' },
    { kicker: 'Стандартный PV-модуль', title: 'Высокомощный модуль 580 Вт для масштабируемых проектов', align: 'right', pos: 'top' },
    { kicker: 'Стандартный PV-модуль', title: 'Производительность 620 Вт для большей выработки', pill: 'Высокая мощность', align: 'left', pos: 'top' },
    { kicker: 'Стандартный PV-модуль', title: 'Сверхмощный модуль 720 Вт для крупных объектов', pill: '720 Вт макс. мощность', align: 'left', pos: 'top' },
  ],
};
