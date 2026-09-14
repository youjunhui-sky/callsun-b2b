// About page — Español (/es/about/)
export const ABOUT_ES = {
  title: 'Sobre Callsun — Marca y fabricante de módulos FV',
  description:
    'Callsun es una marca y fabricante de módulos FV que sirve a distribuidores, instaladores, EPCs, fabricantes de equipos y compradores de proyectos — módulos FV estándar y personalizados, calidad verificada, suministro global.',
  hero: {
    eyebrow: 'MARCA Y FABRICANTE DE MÓDULOS FV',
    h1: 'Marca y fabricante de módulos fotovoltaicos',
    intro:
      'Callsun diseña, fabrica y prueba módulos FV estándar y personalizados — sirviendo a distribuidores, instaladores, EPCs, fabricantes de equipos y compradores de proyectos en mercados globales.',
    cta1: 'Descubra nuestras fortalezas',
    cta2: 'Comente programas de asociación',
  },
  whoWeAre: {
    eyebrow: 'QUIÉNES SOMOS',
    h2: 'Diseñados en torno a espacios reales de instalación y rendimiento a largo plazo',
    intro:
      'Callsun es una marca y fabricante de módulos fotovoltaicos con alcance global. Nos enfocamos en módulos FV estándar, módulos FV personalizados y paquetes solares completos con almacenamiento. Cada módulo y kit está diseñado en torno a espacios reales de instalación — potencia objetivo, dimensiones físicas, diseño eléctrico y método de instalación — y acompañado de extremo a extremo, desde la selección y la ingeniería hasta la certificación y la entrega en volumen.',
  },
  manufacturing: {
    eyebrow: 'FABRICACIÓN',
    h2: 'De la especificación del producto a la entrega estable',
    intro:
      'Una línea totalmente automatizada de módulos estándar opera junto a una línea semi-automatizada y flexible para módulos personalizados — con un control de proceso disciplinado que mantiene la consistencia entre lotes desde la validación de muestras hasta la entrega en volumen.',
  },
  portfolio: {
    h2: 'Portafolio de productos',
    viewMore: 'Ver más',
  },
  quality: {
    eyebrow: 'CALIDAD VERIFICADA',
    h2: 'Calidad verificada en cada etapa',
  },
  cta: {
    h2: 'Más valor energético de cada espacio limitado',
    button: 'Planee su programa de módulos personalizados',
    connect: 'Conéctese con nosotros',
  },
};

export const STATS_ES = [
  { value: 'Aprox. 55.000 m²', label: 'Área de fabricación' },
  { value: '4', label: 'Regiones de fabricación' },
  { value: '7', label: 'Mercados de almacén y logística' },
  { value: '180–720W', label: 'Módulos estándar y personalizados' },
];

export const PRINCIPLES_ES = [
  { step: '01', eyebrow: 'PRODUCCIÓN EN VOLUMEN', title: 'Módulos FV estándar a escala' },
  { step: '02', eyebrow: 'INGENIERÍA PERSONALIZADA', title: 'Ingeniería de módulos FV personalizados' },
  { step: '03', eyebrow: 'CALIDAD Y CONFIABILIDAD', title: 'Control de calidad y validación de confiabilidad' },
  { step: '04', eyebrow: 'SOPORTE DE SISTEMA', title: 'Configuración de sistema según aplicación' },
];

export const PROCESS_STEPS_ES = [
  { step: '01', eyebrow: 'INGENIERÍA', title: 'Evaluación de ingeniería' },
  { step: '02', eyebrow: 'PROTOTIPO', title: 'Prototipo de muestra' },
  { step: '03', eyebrow: 'CONFIABILIDAD', title: 'Validación de confiabilidad' },
  { step: '04', eyebrow: 'VOLUMEN', title: 'Despliegue masivo' },
];

export const PORTFOLIO_ES = [
  {
    eyebrow: 'MÓDULOS FV ESTÁNDAR',
    title: 'Módulos FV estándar',
    body: 'Adecuados para tejados residenciales, FV distribuida, sistemas aislados y proyectos pequeños comerciales e industriales. Más vatios por metro cuadrado reducen el peso del sistema y la mano de obra de instalación.',
    powers: [
      { label: '450W', href: '/products/cn450w/' },
      { label: '580W', href: '/products/cn580w/' },
      { label: '620W', href: '/products/cn620w/' },
      { label: '720W', href: '/products/cn720w/' },
    ],
    tags: ['Compatibilidad de alta eficiencia', 'Integración FV'],
    href: '/es/products/standard-modules/',
  },
  {
    eyebrow: 'MÓDULOS FV PERSONALIZADOS',
    title: 'Módulos FV personalizados',
    body: 'Para escenarios de autocaravana, tejado, balcón, marino y equipos personalizados — diseñados según espacio, potencia, dimensiones, estructura y requisitos de interfaz, con validación de prototipo a lote.',
    powers: [
      { label: '180W', href: '/products/cn180w/' },
      { label: '200W', href: '/products/cn200w/' },
      { label: '210W', href: '/products/cn210w/' },
      { label: '215W', href: '/products/cn215w/' },
    ],
    tags: 'Medidas personalizadas|Desarrollo estructural'.split('|').map((t) => t),
    href: '/es/products/custom-modules/',
  },
];

export const QC_TESTS_ES = [
  { eyebrow: 'INSPECCIÓN EL', title: 'Inspección electroluminiscente' },
  { eyebrow: 'SIMULADOR SOLAR', title: 'Simulador solar de laboratorio' },
  { eyebrow: 'CALOR HÚMEDO', title: 'Calor húmedo y ciclos térmicos' },
  { eyebrow: 'ENVEJECIMIENTO UV', title: 'Prueba de envejecimiento UV' },
  { eyebrow: 'CARGA MECÁNICA', title: 'Carga mecánica estática' },
  { eyebrow: 'PRUEBA DE AISLAMIENTO', title: 'Rigidez dieléctrica y aislamiento' },
];

export const CUSTOMER_TYPES_ES = [
  { title: 'Distribuidores y compradores mayoristas' },
  { title: 'Instaladores y proveedores de servicios de sistema' },
  { title: 'Fabricantes de equipos y compradores de proyectos' },
];

export const APPLICATION_TABS_ES = [
  { eyebrow: 'RESIDENCIAL', title: 'Solar residencial', href: '/solutions/' },
  { eyebrow: 'AUTOCARAVANA Y MÓVIL', title: 'Autocaravana y móvil', href: '/products/custom-modules/' },
  { eyebrow: 'BALCÓN', title: 'Solar de balcón', href: '/products/custom-modules/' },
  { eyebrow: 'AISLADO', title: 'Sistemas aislados', href: '/solutions/' },
  { eyebrow: 'COMERCIAL', title: 'Pequeño comercio', href: '/solutions/' },
];
