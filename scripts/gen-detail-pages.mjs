/**
 * 批量生成 DE/ES 产品详情页（2026-09-14 i18n 二期①）
 * 用法：node scripts/gen-detail-pages.mjs
 * 从英文模板 + i18n 数据层生成 16 个本地化详情页。
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const LOCALES = ['de', 'es'];

// 每语言的区块文案（与 i18n/data/product-detail-*.ts 保持一致的键）
const T = {
  de: {
    file: 'product-detail-de.ts',
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
    faqHeading: 'Häufige Fragen',
    formSource: (slug) => `sku-${slug}-de`,
    faqImport: "import { FAQ_DE } from '@/i18n/data/product-detail-de';\nimport { LABEL_DE, DETAIL_DE } from '@/i18n/data/product-detail-de';",
    faqVar: 'FAQ_DE',
    labelMap: 'LABEL_DE',
    detailCfg: 'DETAIL_DE',
  },
  es: {
    file: 'product-detail-es.ts',
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
    faqHeading: 'preguntas frecuentes',
    formSource: (slug) => `sku-${slug}-es`,
    faqImport: "import { FAQ_ES } from '@/i18n/data/product-detail-es';\nimport { LABEL_ES, DETAIL_ES } from '@/i18n/data/product-detail-es';",
    faqVar: 'FAQ_ES',
    labelMap: 'LABEL_ES',
    detailCfg: 'DETAIL_ES',
  },
};

const MODELS = ['cn450w', 'cn580w', 'cn620w', 'cn720w', 'cn180w', 'cn200w', 'cn210w', 'cn215w'];
let created = 0;

for (const locale of LOCALES) {
  const t = T[locale];
  for (const model of MODELS) {
    const srcPath = `src/pages/products/${model}.astro`;
    let src = readFileSync(srcPath, 'utf8');

    // ── frontmatter 改造 ─────────────────────────────────────────
    // 1. import 区：加 i18n imports + locale props 透传
    src = src.replace(
      "import { PRODUCT_FAQ } from '@/data/faq';",
      `import { PRODUCT_FAQ } from '@/data/faq';\n${t.faqImport}`
    );
    // 2. faq 数据源换成通用 FAQ（DE/ES 共用一套，避免 8×2 份重复）
    src = src.replace(
      new RegExp(`const faqs = PRODUCT_FAQ\\.${model} \\|\\| \\[\\];`),
      `const faqs = ${t.faqVar};`
    );
    // 3. FAQPage schema 保持不变（faqs 引用已切换）

    // 4. BaseLayout：加 locale="xx"（canonical 保持英文路径——canonical 一律用默认语言 URL，这是 SEO 正确姿势）
    src = src.replace(
      /(\n  schema=\{faqSchema\}\n)>/,
      `$1  locale="${locale}"\n>`
    );
    // 若上面没命中（canonical 与 > 同行格式差异），兜底：
    if (!src.includes(`locale="${locale}"`)) {
      src = src.replace(/\n>/, `\n  locale="${locale}"\n>`);
    }

    // 5. Header/Footer 传 locale
    src = src.replace('<Header slot="header" />', '<Header slot="header" locale="' + locale + '" />');
    src = src.replace('<Footer slot="footer" />', '<Footer slot="footer" locale="' + locale + '" />');

    // 6. Section 3: 技术规格标题 + 列名 + STC 注
    src = src.replace(
      /<Eyebrow class="mb-4">TECHNICAL SPECIFICATIONS<\/Eyebrow>/,
      `<Eyebrow class="mb-4">${t.techEyebrow}</Eyebrow>`
    );
    src = src.replace(
      /\{sku\.model\} datasheet/,
      `{sku.model} ${t.techH2Suffix}`
    );
    src = src.replace("{ title: 'ELECTRICAL',              rows: sku.tech.electrical }", `{ title: '${t.colElectrical}',              rows: sku.tech.electrical }`);
    src = src.replace("{ title: 'MECHANICAL',              rows: sku.tech.mechanical }", `{ title: '${t.colMechanical}',              rows: sku.tech.mechanical }`);
    src = src.replace("{ title: 'TEMPERATURE & DELIVERY',  rows: sku.tech.thermal }", `{ title: '${t.colThermal}',  rows: sku.tech.thermal }`);
    src = src.replace(
      /STC: Irradiance 1000 W\/m² · Cell temperature 25°C · Air mass 1\.5/,
      t.stcNote
    );

    // 7. tech 行标签走映射
    src = src.replace(
      /\{r\.label\}/g,
      `{${t.labelMap}[r.label] || r.label}`
    );

    // 8. Section 4: 文档区
    src = src.replace(
      /<Eyebrow class="mb-4">DOCUMENTS & INQUIRY<\/Eyebrow>/,
      `<Eyebrow class="mb-4">${t.docsEyebrow}</Eyebrow>`
    );
    src = src.replace(
      /\{sku\.certTitle \|\| `\$\{sku\.model\} product resources`\}/,
      `{sku.certTitle || \`\${sku.model} ${t.docsH2Suffix}\`}`
    );
    src = src.replace(
      /DOWNLOAD DATASHEET <span/,
      `${t.downloadDatasheet} <span`
    );
    src = src.replace(
      /INSTALLATION MANUAL <span/,
      `${t.installManual} <span`
    );

    // 9. 表单标题（`${sku.model} PRODUCT INQUIRY` → 本地化后缀）
    src = src.replace(
      /formTitle=\{`\$\{sku\.model\} PRODUCT INQUIRY`\}/,
      `formTitle={\`\${sku.model} ${t.formTitleSuffix}\`}`
    );
    src = src.replace(
      /formSource=\{`sku-\$\{sku\.slug\}`\}/,
      `formSource={\`sku-\${sku.slug}-${locale}\`}`
    );
    // InquiryForm 组件传 locale
    src = src.replace(
      /<InquiryForm\n(\s+)formSource=/,
      `<InquiryForm\n$1locale="${locale}"\n$1formSource=`
    );

    // 10. FAQ 标题（accordion 组件 heading 是英文 "frequently asked questions"）——组件接受 headingSuffix prop？没有则直接替换组件调用加 prop
    // FaqAccordion 内部 heading：`${model} — frequently asked questions`，我们给组件加可选 prop headingSuffix
    // 这里先在生成页里传 prop：
    src = src.replace(
      '<FaqAccordion items={faqs} model={sku.model} />',
      `<FaqAccordion items={faqs} model={sku.model} heading="${t.faqHeading}" />`
    );

    // ── 写出 ─────────────────────────────────────────
    const outDir = `src/pages/${locale}/products`;
    mkdirSync(outDir, { recursive: true });
    const outPath = `${outDir}/${model}.astro`;
    writeFileSync(outPath, src);
    created++;
    console.log(`created ${outPath}`);
  }
}
console.log(`done: ${created} pages`);
