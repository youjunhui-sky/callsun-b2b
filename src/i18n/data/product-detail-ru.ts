// 产品详情页本地化（RU）——通用 UI + 标签映射 + 通用 FAQ
import type { FaqItem } from '@/data/faq';

export const DETAIL_RU = {
  techEyebrow: 'ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ',
  techH2Suffix: 'тех. паспорт',
  colElectrical: 'ЭЛЕКТРИЧЕСКИЕ',
  colMechanical: 'МЕХАНИЧЕСКИЕ',
  colThermal: 'ТЕМПЕРАТУРА И ПОСТАВКИ',
  stcNote: 'STC: освещённость 1000 Вт/м² · температура элементов 25 °C · воздушная масса 1,5',
  docsEyebrow: 'ДОКУМЕНТЫ И ЗАПРОС',
  docsH2Suffix: 'ресурсы продукта',
  downloadDatasheet: 'СКАЧАТЬ ТЕХ. ПАСПОРТ',
  installManual: 'РУКОВОДСТВО ПО МОНТАЖУ',
  formTitleSuffix: 'ЗАПРОС ПО ПРОДУКЦИИ',
  faqHeadingSuffix: 'Частые вопросы',
};

// 规格标签映射（specs + tech 全量 40+ 条）
export const LABEL_RU: Record<string, string> = {
  'MAXIMUM POWER': 'МАКСИМАЛЬНАЯ МОЩНОСТЬ',
  'MAXIMUM POWER CURRENT': 'ТОК МАКС. МОЩНОСТИ',
  'MAXIMUM POWER VOLTAGE': 'НАПРЯЖЕНИЕ МАКС. МОЩНОСТИ',
  'OPEN-CIRCUIT VOLTAGE': 'НАПРЯЖЕНИЕ ХОЛОСТОГО ХОДА',
  'SHORT-CIRCUIT CURRENT': 'ТОК КОРОТКОГО ЗАМЫКАНИЯ',
  'Module Efficiency STC (%)': 'КПД модуля STC (%)',
  'CELL EFFICIENCY': 'КПД ЭЛЕМЕНТОВ',
  'CELL TYPE': 'ТИП ЭЛЕМЕНТОВ',
  'CELL CONFIGURATION': 'КОНФИГУРАЦИЯ ЭЛЕМЕНТОВ',
  'DIMENSIONS': 'ГАБАРИТЫ',
  'WEIGHT': 'ВЕС',
  'FRONT / BACK GLASS': 'СТЕКЛО ПЕРЕД / ЗАД',
  'FRAME': 'РАМА',
  'JUNCTION BOX': 'РАСПАЯЧНАЯ КОРОБКА',
  'IP RATING': 'КЛАСС ЗАЩИТЫ IP',
  'CABLE LENGTH': 'ДЛИНА КАБЕЛЯ',
  'CONNECTOR': 'РАЗЪЁМ',
  'FIRE PERFORMANCE': 'ПОЖАРНЫЕ ХАРАКТЕРИСТИКИ',
  'WIND / SNOW LOAD': 'ВЕТРОВАЯ / СНЕГОВАЯ НАГРУЗКА',
  'PACKAGING': 'УПАКОВКА',
  'OPERATING TEMPERATURE': 'РАБОЧАЯ ТЕМПЕРАТУРА',
  'TEMPERATURE COEFFICIENT (PMAX)': 'ТЕМПЕРАТУРНЫЙ КОЭФФИЦИЕНТ (PMAX)',
  'PMAX COEFFICIENT': 'КОЭФФИЦИЕНТ PMAX',
  'VOC COEFFICIENT': 'КОЭФФИЦИЕНТ VOC',
  'ISC COEFFICIENT': 'КОЭФФИЦИЕНТ ISC',
  'NOCT': 'NOCT',
  'MAXIMUM SYSTEM VOLTAGE': 'МАКС. НАПРЯЖЕНИЕ СИСТЕМЫ',
  'MAXIMUM SERIES FUSE': 'МАКС. ПРЕДОХРАНИТЕЛЬ',
  'POWER TOLERANCE': 'ДОПУСК МОЩНОСТИ',
  'PRODUCT WARRANTY': 'ГАРАНТИЯ НА ПРОДУКТ',
  'LINEAR WARRANTY': 'ЛИНЕЙНАЯ ГАРАНТИЯ',
  'FIRST-YEAR DEGRADATION': 'ДЕГРАДАЦИЯ ЗА 1-Й ГОД',
  'LINEAR DEGRADATION': 'ЛИНЕЙНАЯ ДЕГРАДАЦИЯ',
  '25-YEAR OUTPUT': 'МОЩНОСТЬ ЧЕРЕЗ 25 ЛЕТ',
  'BIFACIALITY': 'БИФАЦИАЛЬНОСТЬ',
  'GLASS': 'СТЕКЛО',
  'CIRCUIT DESIGN': 'СХЕМА СОЕДИНЕНИЙ',
  'Vmp / Imp': 'Vmp / Imp',
  'Voc / Isc': 'Voc / Isc',
  'MOUNTING': 'МОНТАЖ',
  'APPLICATIONS': 'ПРИМЕНЕНИЕ',
  'STANDARD TEST CONDITIONS': 'СТАНДАРТНЫЕ УСЛОВИЯ ИСПЫТАНИЙ',
  'PROTECTION CLASS': 'КЛАСС ЗАЩИТЫ',
  'SYSTEM CONFIGURATION': 'КОНФИГУРАЦИЯ СИСТЕМЫ',
};

// 通用 FAQ（8 个型号页共用，RU）——内容与 DE/ES 同源，不含编造商务数字
export const FAQ_RU: FaqItem[] = [
  {
    q: 'Какие сертификаты у серии Callsun CN?',
    a: 'Серия CN сертифицирована по CE и RoHS, а также имеет сертификат Intertek ETL (Certificate of Compliance, 2026). Документы доступны для скачивания на странице «Ресурсы».',
  },
  {
    q: 'Можно ли запросить образцы перед оптовой закупкой?',
    a: 'Да — для B2B-закупщиков мы поддерживаем проверку образцов. Укажите целевое количество и целевую страну в форме запроса; наша команда подтвердит доступность и следующий шаг.',
  },
  {
    q: 'Как технология N-Type влияет на долгосрочную мощность?',
    a: 'Пластины N-Type менее подвержены световой деградации (LID/LeTID). Это означает меньшую деградацию в первый год и за весь срок службы — для более предсказуемых моделей выработки.',
  },
  {
    q: 'Даёт ли бифациальная конструкция дополнительную выработку?',
    a: 'Да — задняя сторона улавливает отражённый свет. Наибольший прирост дают поверхности с высоким альбедо и достаточным зазором; фактический выигрыш зависит от альбедо и высоты монтажа.',
  },
  {
    q: 'Возможны ли заказные размеры модулей?',
    a: 'Линейка заказных модулей Callsun адаптирует габариты, раскладку элементов и распаячные коробки под доступное пространство. Отправьте чертежи через форму запроса для оценки выполнимости.',
  },
];
