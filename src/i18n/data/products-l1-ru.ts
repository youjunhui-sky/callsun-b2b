// Products L1 — Русский (/ru/products/)
export const PRODUCTS_L1_RU = {
  breadcrumb: [
    { label: 'ГЛАВНАЯ', href: '/ru/' },
    { label: 'ПРОДУКЦИЯ', href: '/ru/products/' },
    { label: 'ФЭ-МОДУЛИ', href: null },
  ],
  hero: {
    eyebrow: 'ПРОДУКЦИЯ / ФЭ-МОДУЛИ',
    title: 'Портфель ФЭ-модулей',
    intro:
      'Две продуктовые линейки для оптовых закупок модулей и инженерных требований конкретных применений.',
    background: '/uploads/callsun/products/l1-hero.webp',
    cta: { label: 'ЗАПРОСИТЬ ИНФОРМАЦИЮ О ПРОДУКТЕ', href: '/ru/contact/' },
  },
  categoriesEyebrow: 'КАТЕГОРИИ ФЭ-МОДУЛЕЙ',
  categories: [
    {
      key: 'standard',
      title: 'Стандартные ФЭ-модули',
      wattTags: ['450W', '580W', '620W', '720W'],
      description:
        'Четыре класса высокопроизводительных модулей для жилых крыш, наземных станций, автономных систем и небольших коммерческо-промышленных проектов.',
      cta: { label: 'ПОДРОБНЕЕ', href: '/ru/products/standard-modules/' },
      images: [
        '/uploads/callsun/products/450w/card-logo.webp',
        '/uploads/callsun/products/580w/card-logo.webp',
        '/uploads/callsun/products/620w/card-logo.webp',
        '/uploads/callsun/products/720w/card-logo.webp',
      ],
      theme: 'light' as const,
    },
    {
      key: 'custom',
      title: 'Заказные ФЭ-модули',
      wattTags: ['180W', '200W', '210W', '215W'],
      description:
        'Четыре класса модулей для конкретных применений: автодома, крыши транспорта, балконы, автономные объекты и другие особые условия монтажа.',
      cta: { label: 'ПОДРОБНЕЕ', href: '/ru/products/custom-modules/' },
      images: [
        '/uploads/callsun/products/180w/card-logo.webp',
        '/uploads/callsun/products/200w/card-logo.webp',
        '/uploads/callsun/products/210w/card-logo.webp',
        '/uploads/callsun/products/215w/card-logo.webp',
      ],
      theme: 'dark' as const,
    },
  ],
  inquiry: {
    eyebrow: 'ЗАПРОС ПО ПРОДУКЦИИ',
    title: 'Обсудите ваши требования к модулям',
    intro:
      'Назовите нам продуктовую линейку, количество и целевую страну. Наша команда проверит требования и ответит подходящим продуктом или следующим шагом.',
    formTitle: 'Запросить информацию о продукте',
  },
};
