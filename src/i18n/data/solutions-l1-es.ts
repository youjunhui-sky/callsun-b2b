// Solutions L1 — Español (/es/solutions/)
export const SOLUTIONS_L1_ES = {
  hero: {
    title: 'Soluciones de sistemas solares',
    eyebrow: 'SOLUCIONES',
    subtitle: 'Configuraciones completas de FV, inversor híbrido y almacenamiento en batería para un suministro residencial y comercial ininterrumpido.',
  },
  gridTied: {
    eyebrow: 'CONECTADO A RED / HÍBRIDO',
    title: 'Sistema solar conectado a red',
    subtitle: 'Una configuración completa de FV, inversor híbrido y almacenamiento en batería.',
    subEyebrow: 'CONFIGURACIÓN DEL SISTEMA',
  },
  offGrid: {
    eyebrow: 'AISLADO',
    title: 'Sistemas solares aislados',
    subtitle: 'Dos tamaños de sistema para un suministro eléctrico residencial independiente.',
    subEyebrow: 'CONFIGURACIONES DEL SISTEMA',
  },
  viewSystem: 'VER SISTEMA',
  specLabels: {
    pvArray: 'CAMPO FV',
    hybridInverter: 'INVERSOR HÍBRIDO',
    batteryStorage: 'ALMACENAMIENTO EN BATERÍA',
  },
  kitNames: {
    '10-8kw-grid-tied': { name: 'Kit de red de 10,8 kW', subtitle: 'Para uso residencial y comercial ligero', inline: 'Inversor híbrido de 12 kW · 28 kWh de batería' },
    '5-4kw-off-grid': { name: 'Kit aislado de 5,4 kW', subtitle: 'Sistema aislado compacto para suministro residencial independiente', inline: 'Inversor híbrido de 6,5 kW · 10 kWh de batería' },
    '7-2kw-grid-tied': { name: 'Kit aislado de 7,2 kW', subtitle: 'Sistema aislado más grande para cargas residenciales extendidas', inline: 'Inversor híbrido de 10 kW · 14 kWh de batería' },
  } as Record<string, { name: string; subtitle: string; inline: string }>,
  inquiry: {
    eyebrow: 'CONSULTA DE PROYECTO',
    title: 'Comente sus requisitos del sistema solar',
    subtitle: 'Comparta la aplicación, la capacidad objetivo y los requisitos del proyecto con nuestro equipo.',
    ctaLabel: 'ENVIAR CONSULTA',
  },
};
