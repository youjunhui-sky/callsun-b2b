// 产品详情页本地化（ES）——通用 UI + 标签映射 + 通用 FAQ
import type { FaqItem } from '@/data/faq';

export const DETAIL_ES = {
  techEyebrow: 'ESPECIFICACIONES TÉCNICAS',
  techH2Suffix: 'ficha técnica',
  colElectrical: 'ELÉCTRICA',
  colMechanical: 'MECÁNICA',
  colThermal: 'TEMPERATURA Y ENTREGA',
  stcNote: 'STC: Irradiancia 1000 W/m² · Temperatura de celda 25 °C · Masa de aire 1,5',
  docsEyebrow: 'DOCUMENTOS Y CONSULTA',
  docsH2Suffix: 'recursos del producto',
  downloadDatasheet: 'DESCARGAR FICHA TÉCNICA',
  installManual: 'MANUAL DE INSTALACIÓN',
  formTitleSuffix: 'CONSULTA DEL PRODUCTO',
  faqHeadingSuffix: 'preguntas frecuentes',
};

export const LABEL_ES: Record<string, string> = {
  'MAXIMUM POWER': 'POTENCIA MÁXIMA',
  'MAXIMUM POWER CURRENT': 'CORRIENTE MÁXIMA',
  'MAXIMUM POWER VOLTAGE': 'VOLTAJE MÁXIMO',
  'OPEN-CIRCUIT VOLTAGE': 'VOLTAJE DE CIRCUITO ABIERTO',
  'SHORT-CIRCUIT CURRENT': 'CORRIENTE DE CORTOCIRCUITO',
  'Module Efficiency STC (%)': 'Eficiencia del módulo STC (%)',
  'CELL EFFICIENCY': 'EFICIENCIA CELULAR',
  'CELL TYPE': 'TIPO DE CELDA',
  'CELL CONFIGURATION': 'CONFIGURACIÓN DE CELDAS',
  'DIMENSIONS': 'DIMENSIONES',
  'WEIGHT': 'PESO',
  'FRONT / BACK GLASS': 'VIDRIO FRONTAL / TRASERO',
  'FRAME': 'MARCO',
  'JUNCTION BOX': 'CAJA DE CONEXIONES',
  'IP RATING': 'GRADO IP',
  'CABLE LENGTH': 'LONGITUD DEL CABLE',
  'CONNECTOR': 'CONECTOR',
  'FIRE PERFORMANCE': 'COMPORTAMIENTO AL FUEGO',
  'WIND / SNOW LOAD': 'CARGA DE VIENTO / NIEVE',
  'PACKAGING': 'EMBALAJE',
  'OPERATING TEMPERATURE': 'TEMPERATURA DE OPERACIÓN',
  'TEMPERATURE COEFFICIENT (PMAX)': 'COEFICIENTE DE TEMPERATURA (PMAX)',
  'PMAX COEFFICIENT': 'COEFICIENTE PMAX',
  'VOC COEFFICIENT': 'COEFICIENTE VOC',
  'ISC COEFFICIENT': 'COEFICIENTE ISC',
  'NOCT': 'NOCT',
  'MAXIMUM SYSTEM VOLTAGE': 'VOLTAJE MÁXIMO DEL SISTEMA',
  'MAXIMUM SERIES FUSE': 'FUSIBLE EN SERIE MÁXIMO',
  'POWER TOLERANCE': 'TOLERANCIA DE POTENCIA',
  'PRODUCT WARRANTY': 'GARANTÍA DEL PRODUCTO',
  'LINEAR WARRANTY': 'GARANTÍA LINEAL',
  'FIRST-YEAR DEGRADATION': 'DEGRADACIÓN DEL PRIMER AÑO',
  'LINEAR DEGRADATION': 'DEGRADACIÓN LINEAL',
  '25-YEAR OUTPUT': 'SALIDA A 25 AÑOS',
  'BIFACIALITY': 'BIFACIALIDAD',
  'GLASS': 'VIDRIO',
  'CIRCUIT DESIGN': 'DISEÑO DEL CIRCUITO',
  'Vmp / Imp': 'Vmp / Imp',
  'Voc / Isc': 'Voc / Isc',
  'MOUNTING': 'MONTAJE',
  'APPLICATIONS': 'APLICACIONES',
  'STANDARD TEST CONDITIONS': 'CONDICIONES ESTÁNDAR DE PRUEBA',
  'PROTECTION CLASS': 'CLASE DE PROTECCIÓN',
  'SYSTEM CONFIGURATION': 'CONFIGURACIÓN DEL SISTEMA',
};

// 通用 FAQ（8 型号共用，ES）
export const FAQ_ES: FaqItem[] = [
  {
    q: '¿Qué certificaciones tiene la serie Callsun CN?',
    a: 'La serie CN cuenta con certificación CE y RoHS, además del Certificado de Conformidad ETL de Intertek (2026). Los documentos están disponibles para descarga en la página de Recursos.',
  },
  {
    q: '¿Puedo solicitar muestras antes de una compra en volumen?',
    a: 'Sí — para compradores B2B ofrecemos validación con muestras. Indíquenos la cantidad objetivo y el destino a través del formulario de consulta; nuestro equipo confirmará disponibilidad y el siguiente paso.',
  },
  {
    q: '¿Cómo afecta la tecnología N-Type al rendimiento a largo plazo?',
    a: 'Las obleas N-Type resisten la degradación inducida por la luz (LID/LeTID), lo que significa menor degradación en el primer año y a lo largo de la vida útil — modelos de rendimiento más predecibles.',
  },
  {
    q: '¿Aporta energía adicional el diseño bifacial?',
    a: 'Sí — la cara trasera aprovecha la luz reflejada. Las superficies altamente reflectantes con espacio libre adecuado ofrecen la mayor ganancia; el aporte real depende del albedo y la altura de montaje.',
  },
  {
    q: '¿Es posible personalizar el tamaño de los módulos?',
    a: 'La línea de módulos personalizados de Callsun ajusta dimensiones, distribución de celdas y posición de la caja de conexiones según el espacio disponible. Envíe sus planos a través del formulario para una evaluación de viabilidad.',
  },
];
