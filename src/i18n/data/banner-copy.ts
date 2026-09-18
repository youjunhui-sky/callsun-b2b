// Overlay copy for mobile banner swaps (product detail hero + features sections,
// solutions channel featured art). Rendered only <768px on top of the vertical
// text-free art; desktop keeps baked-in EN banners. 2026-09-18 张晓晗交付图接入.
export type Locale = 'en' | 'de' | 'es' | 'ru';

export type BannerCopy = {
  kicker?: string;
  title: string;
  sub?: string;
  dark?: boolean; // dark ink for light backgrounds
};

const KICKER: Record<Locale, string> = {
  en: 'STANDARD PV MODULE',
  de: 'STANDARD-PV-MODUL',
  es: 'MÓDULO PV ESTÁNDAR',
  ru: 'СТАНДАРТНЫЙ PV-МОДУЛЬ',
};

const FEATURES_TITLE: Record<Locale, string> = {
  en: 'Key Engineering Advantages',
  de: 'Technische Vorteile',
  es: 'Ventajas de ingeniería',
  ru: 'Инженерные преимущества',
};

const HERO_TITLE: Record<string, Record<Locale, string>> = {
  cn180w: {
    en: '180W Compact Bifacial Module',
    de: '180W Kompakt-Bifacial-Modul',
    es: 'Módulo bifacial compacto 180W',
    ru: 'Компактный двусторонний модуль 180 Вт',
  },
  cn200w: {
    en: '200W Bifacial Compact Module',
    de: '200W Kompakt-Bifacial-Modul',
    es: 'Módulo bifacial compacto 200W',
    ru: 'Компактный двусторонний модуль 200 Вт',
  },
  cn210w: {
    en: '210W High-Efficiency Module',
    de: '210W Hocheffizientes Modul',
    es: 'Módulo de alta eficiencia 210W',
    ru: 'Высокоэффективный модуль 210 Вт',
  },
  cn215w: {
    en: '215W Anti-Shading Module',
    de: '215W Anti-Shading-Modul',
    es: 'Módulo antisombras 215W',
    ru: 'Модуль 215 Вт с защитой от затенения',
  },
  cn450w: {
    en: '450W N-Type Bifacial Double-Glass Module',
    de: '450W N-Type Bifacial-Modul mit Doppelglas',
    es: 'Módulo bifacial 450W N-Type de doble vidrio',
    ru: 'Модуль 450 Вт: N-Type, двусторонний, двойное стекло',
  },
  cn580w: {
    en: '580W High-Power Module',
    de: '580W Hochleistungs-Modul',
    es: 'Módulo de alta potencia 580W',
    ru: 'Высокомощный модуль 580 Вт',
  },
  cn620w: {
    en: '620W High-Yield Module',
    de: '620W Modul für höheren Ertrag',
    es: 'Módulo 620W de alto rendimiento',
    ru: 'Модуль 620 Вт для высокой выработки',
  },
  cn720w: {
    en: '720W Ultra-High-Power Module',
    de: '720W Ultra-Hochleistungs-Modul',
    es: 'Módulo ultrapotente 720W',
    ru: 'Сверхмощный модуль 720 Вт',
  },
};

// dark ink per SKU (light top-background art): 180/200/210/215 light; 450/580/620/720 dark
const DARK_SKUS = new Set(['cn180w', 'cn200w', 'cn210w', 'cn215w']);

export const SKU_BANNERS: Record<string, Record<Locale, { hero: BannerCopy; features: BannerCopy }>> =
  Object.fromEntries(
    Object.entries(HERO_TITLE).map(([slug, titles]) => [
      slug,
      Object.fromEntries(
        (['en', 'de', 'es', 'ru'] as Locale[]).map((loc) => [
          loc,
          {
            hero: { kicker: KICKER[loc], title: titles[loc], dark: DARK_SKUS.has(slug) },
            features: { kicker: slug.replace('cn', 'CN').toUpperCase(), title: FEATURES_TITLE[loc], dark: true },
          },
        ])
      ),
    ])
  );
