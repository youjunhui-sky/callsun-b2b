// UI 层文案（导航/按钮/表单标签等 chrome）—— en/de/es
import type { Locale } from './config';

export interface UiStrings {
  nav: {
    home: string; products: string; standard: string; custom: string;
    solutions: string; kit54: string; kit72: string; kit108: string; inverter: string;
    resources: string; downloads: string; faq: string; videoCenter: string;
    news: string; blog: string; projects: string; about: string;
  };
  cta: { quote: string; submit: string };
  home: {
    standardHeading: string; customHeading: string; productDetails: string;
    insightsEyebrow: string; insightsTitle: string; latestArticles: string;
    viewAll: string; featuredVideos: string; videoCenter: string; read: string; video: string;
  };
  productsL2: { viewDetails: string; downloadDatasheet: string; viewTechInfo: string };
  form: {
    name: string; email: string; company: string; country: string;
    productInterest: string; selectProduct: string; requirements: string; requirementsProduct: string;
    attachment: string; chooseFile: string; noFile: string;
    kitSolution: string; customModule: string; other: string;
  };
  footer: { tagline: string };
}

export const UI: Record<Locale, UiStrings> = {
  en: {
    nav: {
      home: 'HOME', products: 'PRODUCTS', standard: 'Standard PV Modules', custom: 'Custom PV Modules',
      solutions: 'SOLUTIONS', kit54: '5.4kW Off-Grid Kit', kit72: '7.2kW Grid-Tied Kit', kit108: '10.8kW Grid-Tied Kit', inverter: 'Inverter',
      resources: 'RESOURCES', downloads: 'Downloads', faq: 'Product & Cooperation FAQ', videoCenter: 'Video Center',
      news: 'NEWS & CASES', blog: 'Technical Blog', projects: 'Project List', about: 'ABOUT',
    },
    cta: { quote: 'REQUEST A QUOTE', submit: 'SUBMIT INQUIRY' },
    home: {
      standardHeading: 'Standard PV Modules', customHeading: 'Custom PV Modules', productDetails: 'PRODUCT DETAILS',
      insightsEyebrow: 'INSIGHTS & VIDEOS', insightsTitle: 'Technical Content from Callsun',
      latestArticles: 'LATEST ARTICLES', viewAll: 'VIEW ALL', featuredVideos: 'FEATURED VIDEOS',
      videoCenter: 'VIDEO CENTER', read: 'READ', video: 'VIDEO',
    },
    productsL2: { viewDetails: 'VIEW PRODUCT DETAILS', downloadDatasheet: 'DOWNLOAD DATASHEET', viewTechInfo: 'VIEW TECHNICAL INFORMATION' },
    form: {
      name: 'Name *', email: 'Business Email *', company: 'Company *', country: 'Country / Region *',
      productInterest: 'Product of Interest', selectProduct: 'Select a product (optional)',
      requirements: 'Product specification or project requirements *', requirementsProduct: 'Product or project requirements *',
      attachment: 'Attachment (datasheet / project file, max 5MB)', chooseFile: 'Choose file', noFile: 'No file selected',
      kitSolution: 'System Kit / Solution', customModule: 'Custom Module', other: 'Other / Not sure yet',
    },
    footer: { tagline: 'PV Module Brand & Manufacturer' },
  },
  de: {
    nav: {
      home: 'STARTSEITE', products: 'PRODUKTE', standard: 'Standard-PV-Module', custom: 'Individuelle PV-Module',
      solutions: 'LÖSUNGEN', kit54: '5,4-kW-Inselset', kit72: '7,2-kW-Netzset', kit108: '10,8-kW-Netzset', inverter: 'Wechselrichter',
      resources: 'RESSOURCEN', downloads: 'Downloads', faq: 'Produkt- & Kooperations-FAQ', videoCenter: 'Videocenter',
      news: 'NEWS & PROJEKTE', blog: 'Technischer Blog', projects: 'Projektliste', about: 'ÜBER UNS',
    },
    cta: { quote: 'ANGEBOT ANFORDERN', submit: 'ANFRAGE SENDEN' },
    home: {
      standardHeading: 'Standard-PV-Module', customHeading: 'Individuelle PV-Module', productDetails: 'PRODUKTDETAILS',
      insightsEyebrow: 'EINBLICKE & VIDEOS', insightsTitle: 'Technische Inhalte von Callsun',
      latestArticles: 'NEUESTE ARTIKEL', viewAll: 'ALLE ANSEHEN', featuredVideos: 'EMPFOHLENE VIDEOS',
      videoCenter: 'VIDEOCENTER', read: 'LESEN', video: 'VIDEO',
    },
    productsL2: { viewDetails: 'PRODUKTDETAILS ANSEHEN', downloadDatasheet: 'DATENBLATT HERUNTERLADEN', viewTechInfo: 'TECHNISCHE INFORMATIONEN ANSEHEN' },
    form: {
      name: 'Name *', email: 'Geschäftliche E-Mail *', company: 'Firma *', country: 'Land / Region *',
      productInterest: 'Gewünschtes Produkt', selectProduct: 'Produkt auswählen (optional)',
      requirements: 'Produktspezifikation oder Projektanforderungen *', requirementsProduct: 'Produkt- oder Projektanforderungen *',
      attachment: 'Anhang (Datenblatt / Projektdatei, max. 5 MB)', chooseFile: 'Datei auswählen', noFile: 'Keine Datei ausgewählt',
      kitSolution: 'System-Set / Lösung', customModule: 'Individuelles Modul', other: 'Sonstiges / Noch unsicher',
    },
    footer: { tagline: 'PV-Modulmarke & Hersteller' },
  },
  es: {
    nav: {
      home: 'INICIO', products: 'PRODUCTOS', standard: 'Módulos FV estándar', custom: 'Módulos FV personalizados',
      solutions: 'SOLUCIONES', kit54: 'Kit aislado de 5,4 kW', kit72: 'Kit de red de 7,2 kW', kit108: 'Kit de red de 10,8 kW', inverter: 'Inversor',
      resources: 'RECURSOS', downloads: 'Descargas', faq: 'FAQ de producto y cooperación', videoCenter: 'Centro de videos',
      news: 'NOTICIAS Y CASOS', blog: 'Blog técnico', projects: 'Lista de proyectos', about: 'NOSOTROS',
    },
    cta: { quote: 'SOLICITAR COTIZACIÓN', submit: 'ENVIAR CONSULTA' },
    home: {
      standardHeading: 'Módulos FV estándar', customHeading: 'Módulos FV personalizados', productDetails: 'DETALLES DEL PRODUCTO',
      insightsEyebrow: 'IDEAS Y VIDEOS', insightsTitle: 'Contenido técnico de Callsun',
      latestArticles: 'ÚLTIMOS ARTÍCULOS', viewAll: 'VER TODO', featuredVideos: 'VIDEOS DESTACADOS',
      videoCenter: 'CENTRO DE VIDEOS', read: 'LEER', video: 'VIDEO',
    },
    productsL2: { viewDetails: 'VER DETALLES DEL PRODUCTO', downloadDatasheet: 'DESCARGAR FICHA TÉCNICA', viewTechInfo: 'VER INFORMACIÓN TÉCNICA' },
    form: {
      name: 'Nombre *', email: 'Correo comercial *', company: 'Empresa *', country: 'País / Región *',
      productInterest: 'Producto de interés', selectProduct: 'Seleccione un producto (opcional)',
      requirements: 'Especificación del producto o requisitos del proyecto *', requirementsProduct: 'Requisitos del producto o proyecto *',
      attachment: 'Adjunto (ficha técnica / archivo de proyecto, máx. 5 MB)', chooseFile: 'Elegir archivo', noFile: 'Ningún archivo seleccionado',
      kitSolution: 'Kit / solución de sistema', customModule: 'Módulo personalizado', other: 'Otro / Aún no lo sé',
    },
    footer: { tagline: 'Marca y fabricante de módulos FV' },
  },
  ru: {
    nav: {
      home: 'ГЛАВНАЯ', products: 'ПРОДУКЦИЯ', standard: 'Стандартные ФЭ-модули', custom: 'Заказные ФЭ-модули',
      solutions: 'РЕШЕНИЯ', kit54: 'Комплект 5,4 кВт (автономный)', kit72: 'Сетевой комплект 7,2 кВт', kit108: 'Сетевой комплект 10,8 кВт', inverter: 'Инвертор',
      resources: 'РЕСУРСЫ', downloads: 'Загрузки', faq: 'Вопросы о продукции и сотрудничестве', videoCenter: 'Видеоканал',
      news: 'НОВОСТИ И ПРОЕКТЫ', blog: 'Технический блог', projects: 'Список проектов', about: 'О КОМПАНИИ',
    },
    cta: { quote: 'ЗАПРОСИТЬ КОТИРОВКУ', submit: 'ОТПРАВИТЬ ЗАПРОС' },
    home: {
      standardHeading: 'Стандартные ФЭ-модули', customHeading: 'Заказные ФЭ-модули', productDetails: 'О ПРОДУКТЕ',
      insightsEyebrow: 'АНАЛИТИКА И ВИДЕО', insightsTitle: 'Технические материалы Callsun',
      latestArticles: 'ПОСЛЕДНИЕ СТАТЬИ', viewAll: 'СМОТРЕТЬ ВСЕ', featuredVideos: 'ИЗБРАННЫЕ ВИДЕО',
      videoCenter: 'ВИДЕОКАНАЛ', read: 'ЧИТАТЬ', video: 'ВИДЕО',
    },
    productsL2: { viewDetails: 'ПОДРОБНЕЕ О ПРОДУКТЕ', downloadDatasheet: 'СКАЧАТЬ ТЕХ. ПАСПОРТ', viewTechInfo: 'ТЕХНИЧЕСКАЯ ИНФОРМАЦИЯ' },
    form: {
      name: 'Имя *', email: 'Рабочий e-mail *', company: 'Компания *', country: 'Страна / регион *',
      productInterest: 'Интересующий продукт', selectProduct: 'Выберите продукт (необязательно)',
      requirements: 'Спецификация продукта или требования к проекту *', requirementsProduct: 'Требования к продукту или проекту *',
      attachment: 'Вложение (тех. паспорт / файл проекта, макс. 5 МБ)', chooseFile: 'Выбрать файл', noFile: 'Файл не выбран',
      kitSolution: 'Комплект / решение', customModule: 'Заказной модуль', other: 'Другое / пока не определился',
    },
    footer: { tagline: 'Бренд и производитель ФЭ-модулей' },
  },
};
