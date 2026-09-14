/**
 * 产品详情页 FAQ（2026-09-14 游军辉拍板方案①）
 * - 每型号 5-6 条真实采购问题，答案内嵌该型号真实规格（与 datasheet 一致）
 * - 同时生成 FAQPage JSON-LD（Google 富摘要 + AI 引用源）
 * - 内容红线：不编造质保年限/MOQ/交期数字，商务口径泛化
 */

export interface FaqItem {
  q: string;
  a: string;
}

export const PRODUCT_FAQ: Record<string, FaqItem[]> = {
  cn450w: [
    {
      q: 'What roof types and systems is the CN450W best suited for?',
      a: 'At 1762 × 1134 mm with a 23.97 kg module weight, the CN450W fits typical residential rooftops, distributed rooftop systems, off-grid arrays and small commercial projects where a mid-format 96-cell module keeps handling simple.',
    },
    {
      q: 'Which charge controllers or inverters pair well with it?',
      a: "The module's operating point (Vmp 29.73 V / Imp 15.14 A, Voc 35.84 V) suits most MPPT charge controllers and string inverters; confirm string sizing against your inverter's maximum DC input and temperature-corrected Voc.",
    },
    {
      q: 'How does the double-glass construction benefit the installation?',
      a: 'The 2.0 mm dual-glass laminate improves moisture resistance and mechanical strength over conventional backsheet designs, supporting stable long-term output in humid and coastal climates.',
    },
    {
      q: 'Does it support bifacial energy gain?',
      a: 'Yes — the N-Type bifacial cell design harvests reflected light on the rear side, adding yield when mounted over reflective surfaces with adequate clearance.',
    },
    {
      q: 'Can I order samples before a volume purchase?',
      a: 'Sample validation is supported for B2B buyers. Share your target quantity and destination via the inquiry form and our team will confirm sample availability and next steps.',
    },
    {
      q: 'Which certifications does the CN450W carry?',
      a: 'The CN-Series is certified under CE and RoHS, with Intertek ETL certification (Certificate of Compliance, 2026). Documents are available on the Resources page.',
    },
  ],
  cn580w: [
    {
      q: 'What projects is the CN580W designed for?',
      a: 'With a 2278 × 1134 mm format (144 cells, 31.42 kg), the CN580W targets larger residential roofs, ground mounts and commercial arrays where fewer high-power modules reduce installation time per installed kilowatt.',
    },
    {
      q: 'What string voltage should I plan for?',
      a: 'The module operates at Vmp 43.88 V / Imp 13.22 A with Voc 52.50 V. Size strings against your inverter maximum DC input using temperature-corrected Voc for the site record low.',
    },
    {
      q: 'How does it compare with the CN450W for space-constrained roofs?',
      a: 'Both share the same 1134 mm width, but the 580W is longer. If roof height is limited, the 450W may fit where the 580W cannot; per-square-metre output favours the 580W.',
    },
    {
      q: 'Is the frame compatible with standard mounting rails?',
      a: 'Yes — the anodized aluminium frame uses standard mounting hole patterns compatible with common rail systems; detailed mounting drawings are available on request.',
    },
    {
      q: 'What certifications cover this model?',
      a: 'The CN-Series carries CE and RoHS certification plus Intertek ETL (Certificate of Compliance, 2026); certificates are downloadable from the Resources page.',
    },
  ],
  cn620w: [
    {
      q: 'Which applications suit the CN620W?',
      a: 'The 620W sits between the 580W and 720W classes — suited to commercial rooftops and ground mounts that want maximum wattage per module without stepping up to the largest 2384 mm format.',
    },
    {
      q: 'What are its electrical characteristics for system design?',
      a: 'Vmp 40.74 V / Imp 15.22 A, Voc 49.08 V / Isc 16.08 A, with 132 cells in a 2382 × 1134 × 30 mm double-glass laminate weighing 32.4 kg.',
    },
    {
      q: 'Can it be mixed with 580W or 720W modules in one array?',
      a: 'Mixing is possible when strings keep current per string uniform; the 620W shares the 1134 mm module width with the 580W, which simplifies racking. Confirm mixed-string design with your system designer.',
    },
    {
      q: 'How does N-Type cell technology reduce degradation?',
      a: 'N-Type wafers resist light-induced degradation (LID/LeTID), so first-year and long-term degradation is lower than conventional PERC — supporting more predictable long-term yield models.',
    },
    {
      q: 'Are datasheets and test reports available?',
      a: 'Yes — the current datasheet is on this page via the download button, and certification documents (CE, RoHS, ETL CoC) are in the Resources section.',
    },
  ],
  cn720w: [
    {
      q: 'What makes the CN720W the flagship of the standard series?',
      a: 'It delivers 720 W at 23.18% module efficiency in a 2384 × 1303 mm format — the highest wattage per module in the range, reducing module count, racking and labour per installed kilowatt.',
    },
    {
      q: 'Which inverters and string configurations work with it?',
      a: 'Vmp 41.30 V / Imp 17.44 A, Voc 49.40 V / Isc 18.49 A. Its higher current favours inverters with high-current MPPT inputs or parallel string configurations; validate against your inverter maximum input current.',
    },
    {
      q: 'Is the 33 mm frame compatible with tracking systems?',
      a: 'Yes — the dual-glass module is tracker-compatible; clamp zones and mechanical load ratings are specified in the installation manual.',
    },
    {
      q: 'What surfaces maximise the bifacial gain?',
      a: 'High-albedo surfaces (white membranes, gravel, sand) with adequate ground clearance deliver the strongest rear-side gain; actual additional yield depends on albedo and mounting height.',
    },
    {
      q: 'How should I plan transport and handling?',
      a: 'At 38.3 kg per module, plan two-person handling or vacuum lifters; pallet and container configurations are confirmed with the formal quotation.',
    },
  ],
  cn180w: [
    {
      q: 'Where does the CN180W fit best?',
      a: 'It is designed for RV rooftops, vans and vehicle-mounted systems where partial shade from trees, roof racks or vents is common — the TwinCell anti-shading topology keeps output stable in uneven light.',
    },
    {
      q: 'How does the anti-shading design work?',
      a: 'The TwinCell layout splits the module into parallel sections, so a shaded zone loses only its own contribution rather than dragging down the whole string — a key advantage over standard series-connected designs.',
    },
    {
      q: 'What electrical parameters should my controller support?',
      a: 'Vmp 22.35 V / Imp 8.05 A, Voc 25.82 V / Isc 8.86 A — a natural fit for 12 V battery banks with an MPPT controller.',
    },
    {
      q: 'What mounting format does it use?',
      a: 'The 1180 × 770 × 35 mm double-glass laminate is designed for rigid mounting; for curved or special installations, discuss feasibility with our engineering team.',
    },
    {
      q: 'Is customization available for special sizes?',
      a: "Yes — Callsun's custom module line adjusts dimensions, cell layout and junction box position around your available space; share drawings via the inquiry form for a feasibility assessment.",
    },
  ],
  cn200w: [
    {
      q: 'What is the CN200W optimised for?',
      a: 'Ultra-compact high watt density — 200 W from a 1304 × 770 mm footprint for balcony power stations, small off-grid gear and space-constrained roofs where every watt per square metre counts.',
    },
    {
      q: 'Which battery systems does it charge?',
      a: 'With Vmp 24.83 V / Imp 8.05 A (Voc 28.68 V), it pairs naturally with 12 V battery banks through an MPPT controller and supports small 24 V configurations in series.',
    },
    {
      q: 'How does it perform in high temperatures?',
      a: 'The double-glass N-Type build maintains output at elevated cell temperatures better than conventional backsheet modules — relevant for balcony and vehicle installations with limited airflow.',
    },
    {
      q: 'What makes it different from the CN180W?',
      a: 'The 200W extends the module length (1304 vs 1180 mm) for more power in the same width; if your available surface is shorter, the 180W may be the better geometric fit.',
    },
    {
      q: 'Can I combine it with other Callsun modules in one system?',
      a: 'Yes — parallel connection with same-voltage modules is common; observe controller current limits and use matched string designs.',
    },
  ],
  cn210w: [
    {
      q: 'Why is the CN210W recommended for 24 V systems?',
      a: 'Its dual-module parallel circuitry with quarter-cut cells delivers Vmp 34.2 V / Imp 6.1 A (Voc 40.3 V) — a deliberate design for reliable 24 V charging with common MPPT controllers, even under partial shade.',
    },
    {
      q: 'How does partial shade affect this module?',
      a: 'Less than conventional designs: the parallel section architecture isolates shaded areas, so output scales with the unshaded proportion rather than collapsing — valuable on boats and wooded cabin sites.',
    },
    {
      q: 'What applications is it built for?',
      a: 'RVs, marine decks, off-grid cabins and solar generators — anywhere 24 V reliability under partial shade matters and a 1376 × 766 mm rigid module fits.',
    },
    {
      q: 'Can it also run 12 V systems?',
      a: 'Yes — through an MPPT controller that down-converts to 12 V; the 24 V-class output gives headroom for long cable runs and hot-weather voltage drop.',
    },
    {
      q: 'What mounting dimensions should I prepare?',
      a: 'Plan for a 1376 × 766 mm module, 35 mm thick, 11.3 kg — with mounting holes compatible with standard rigid-mount rails.',
    },
  ],
  cn215w: [
    {
      q: 'What problem does the 4-zone anti-shading design solve?',
      a: 'On RV and marine roofs, vents, AC units and antennas create moving shade. The 4-zone layout keeps the remaining zones producing when one is shaded — protecting daily energy harvest in ways a standard module cannot.',
    },
    {
      q: 'Which system voltage does it target?',
      a: 'Vmp 17.30 V / Imp 12.43 A (Voc 20.09 V / Isc 12.98 A) — tuned for 12 V battery systems with MPPT control, and popular for portable power station recharging.',
    },
    {
      q: 'How large is it and what does it weigh?',
      a: '1422 × 766 × 35 mm, 11.5 kg double-glass construction — sized for full-width RV roof layouts.',
    },
    {
      q: 'Is it suitable for permanent vehicle installation?',
      a: 'Yes — the rigid double-glass build is made for permanent mounting; seal mounting holes against water ingress following the installation manual.',
    },
    {
      q: 'Where can I see it tested?',
      a: 'Independent shade-testing reviews are linked in the Video Center on the Resources page, including lab and real-world tests of the anti-shading performance.',
    },
  ],
};
