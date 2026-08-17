'use strict';

const fs = require('fs');
const path = require('path');

const homeArabicData = {
  title: "الصفحة الرئيسية",
  locale: "ar",
  publishedAt: new Date().toISOString(),
  blocks: [
    {
      __component: "home.hero",
      badgeText: "شروع | شريك التنفيذ الذكي والتحول التشغيلي",
      title: "تحويل الخطط الاستراتيجية إلى نتائج ملموسة",
      subtitle: "نمكّن الجهات الحكومية، والشركات المؤسسية، والقطاع الثالث من تجاوز تحديات التنفيذ وسد الفجوات التشغيلية من خلال منهجيات تنفيذ ذكية تحول المعرفة إلى أثر مستدام.",
      primaryCtaText: "احجز جلسة تشخيص",
      primaryCtaLink: "/contact",
      secondaryCtaText: "استكشف مسارات الحلول",
      secondaryCtaLink: "#solutions",
      targetAudiences: [
        { label: "الجهات الحكومية", iconName: "Users" },
        { label: "الشركات والقطاع الخاص", iconName: "BarChart3" },
        { label: "القطاع غير الربحي والمؤسسات", iconName: "Zap" }
      ],
      showShowcase: true,
      showcaseTitle: "منظومة التنفيذ الذكي من شروع",
      showcaseSubtitle: "ربط التخطيط بالتشغيل الفعلي والنتائج الميدانية",
      showcaseBadge: "نشط تشغيلياً",
      metrics: [
        { label: "معدل إنجاز المبادرات", value: "94.8%", subtext: "إنجاز حسب الخطة", progressPercent: 94.8 },
        { label: "سرعة تفعيل الخطة", value: "3X", subtext: "أسرع من الطرق التقليدية", progressPercent: 85 },
        { label: "المخرجات المعيارية", value: "100%", subtext: "موثقة ومقيسة الأثر", progressPercent: 100 },
        { label: "نقل المعرفة والتمكين", value: "+50", subtext: "فريق كفاءات ممكّن", progressPercent: 75 }
      ]
    },
    {
      __component: "home.overview",
      badge: "مسارات الحلول المتكاملة",
      title: "مسارات التنفيذ الذكي في شروع",
      introText: "نجمع بين التشخيص الدقيق والتنفيذ الميداني وإدارة الأداء لضمان تحويل الخطط إلى نتائج ملموسة.",
      ctaText: "اكتشف جميع مسارات الحلول",
      ctaLink: "/solutions",
      cards: [
        {
          title: "1. التشخيص وإعادة الهيكلة",
          description: "تقييم الجاهزية التشغيلية وسد الفجوات مع بناء الهياكل التنظيمية المرنة.",
          iconName: "Target",
          badge: "المرحلة 01",
          cardCtaText: "احجز جلسة مسار"
        },
        {
          title: "2. تصميم استراتيجية التنفيذ",
          description: "تحويل الرؤية والأهداف الكبرى إلى خريطة طريق قابلة للتطبيق والقياس.",
          iconName: "LineChart",
          badge: "المرحلة 02",
          cardCtaText: "احجز جلسة مسار"
        },
        {
          title: "3. التنفيذ الذكي والميداني",
          description: "إدارة المبادرات التحولية والتشغيل المباشر مع متابعة لوحات الأداء اللحظية.",
          iconName: "Cpu",
          badge: "المرحلة 03",
          cardCtaText: "احجز جلسة مسار"
        },
        {
          title: "4. بناء القدرات والتمكين",
          description: "تطوير الكفاءات القيادية والتطوير المؤسسي لنقل المعرفة وضمان الاستدامة.",
          iconName: "Users2",
          badge: "المرحلة 04",
          cardCtaText: "احجز جلسة مسار"
        }
      ]
    },
    {
      __component: "shared.timeline-section",
      badge: "منهجية شروع",
      title: "رحلة العمل: من الفكرة إلى الأثر المستدام",
      introText: "رحلة واضحة المعالم بأربع مراحل متسلسلة تضمن وضوح المخرجات والشفافية التامة في كل خطوة.",
      ctaText: "احجز جلسة تشخيص مجانية لجهة أعمالك",
      ctaLink: "/contact",
      steps: [
        {
          number: "01",
          title: "التشخيص والتقييم",
          description: "دراسة الواقع الميداني وتحديد الاختناقات والفجوات التشغيلية بدقة.",
          deliverable: "المخرج: تقرير الفجوات وخارطة الطريق",
          icon: "Search"
        },
        {
          number: "02",
          title: "التصميم الهندسي",
          description: "بناء نماذج التشغيل المستهدفة وتصميم مؤشرات قياس الأداء والحلول.",
          deliverable: "المخرج: نموذج التشغيل ومؤشرات KPIs",
          icon: "Compass"
        },
        {
          number: "03",
          title: "التفعيل والمتابعة",
          description: "إدارة المبادرات ميدانياً ومتابعة الإنجاز عبر لوحات بيانات لحظية.",
          deliverable: "المخرج: تشغيل ميداني ولوحات متابعة",
          icon: "Rocket"
        },
        {
          number: "04",
          title: "بناء القدرات والتمكين",
          description: "نقل الخبرات وتطوير الكفاءات لضمان استدامة الأداء بعد تسليم المشروعات.",
          deliverable: "المخرج: فرق عمل ممكّنة ونقل معرفي",
          icon: "GraduationCap"
        }
      ]
    },
    {
      __component: "home.trust-section",
      badge: "مقومات الثقة والأثر",
      title: "لماذا تختار شروع كشريك تنفيذ؟",
      introText: "نجمع بين الخبرة العميقة والمنهجيات الذكية لضمان أعلى معايير الجودة والانضباط.",
      items: [
        {
          icon: "Award",
          title: "خبرات استشارية وتنفيذية",
          description: "فريق قيادي يتمتع بخبرات متراكمة في إدارة المبادرات الوطنية الكبرى والتحول المؤسسي.",
          tag: "معتمد وموثق"
        },
        {
          icon: "Workflow",
          title: "منهجيات تنفيذ معتمدة",
          description: "أطر عمل محوّكمة تضمن سرعة الانطلاق واستدامة الأداء وضبط المخاطر.",
          tag: "معتمد وموثق"
        },
        {
          icon: "Building2",
          title: "شراكات وتنوع القطاعات",
          description: "سجل حافل بالعمل مع القطاعات الحكومية، والشركات الكبرى، والمؤسسات التنموية.",
          tag: "معتمد وموثق"
        },
        {
          icon: "Users",
          title: "تمكين الفرق ونقل المعرفة",
          description: "لا نكتفي بتقديم التوصيات، بل نعمل جنباً إلى جنب لبناء قدرات الفريق المحلي.",
          tag: "معتمد وموثق"
        }
      ]
    },
    {
      __component: "home.value",
      title: "لماذا نختلف في شروع؟",
      introText: "الكثير من المؤسسات تعمل بلا أثر واضح. نحن نحول البيانات والتقارير إلى قرارات تنفيذية يمكن الوثوق بها.",
      ctaText: "تعرف على منهجيتنا",
      ctaLink: "/methodology",
      points: [
        { title: "وضوح الأثر", description: "قياس القيمة الفعلية لكل مبادرة", iconName: "Activity" },
        { title: "اتخاذ القرار بثقة", description: "أدوات ولوحات قيادة تنفيذية ذكية", iconName: "Zap" },
        { title: "تنفيذ بدون هدر", description: "تقليل البيروقراطية وتعزيز سرعة العمل", iconName: "Target" },
        { title: "تمكين الفرق", description: "نقل القدرة لضمان استمرارية الأداء", iconName: "Check" }
      ]
    },
    {
      __component: "home.testimonials-section",
      title: "ماذا يقول عملاؤنا؟",
      introText: "عملاؤنا شهدوا تحولاً في كيفية إدارة المشاريع وتحقيق النتائج الفعلية.",
      showSection: true
    },
    {
      __component: "home.cta-footer",
      headline: "هل أنت جاهز لضبط مسار التنفيذ مع شروع؟",
      primaryButtonText: "اطلب جلسة استشارية",
      primaryButtonLink: "/consultation",
      alternativeText: "أو عبر الإيميل مباشرة: consult@shuru.sa",
      alternativeLink: "mailto:consult@shuru.sa"
    }
  ]
};

const homeEnglishData = {
  title: "Home Page",
  locale: "en",
  publishedAt: new Date().toISOString(),
  blocks: [
    {
      __component: "home.hero",
      badgeText: "SHURU | Smart Execution & Operational Transformation",
      title: "Transforming Strategic Plans Into Tangible Results",
      subtitle: "We empower government entities, enterprise organizations, and non-profits to overcome execution bottlenecks through smart methodologies that translate knowledge into lasting impact.",
      primaryCtaText: "Book a Diagnostic Session",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Explore Solutions",
      secondaryCtaLink: "#solutions",
      targetAudiences: [
        { label: "Government Entities", iconName: "Users" },
        { label: "Enterprises", iconName: "BarChart3" },
        { label: "Non-Profits", iconName: "Zap" }
      ],
      showShowcase: true,
      showcaseTitle: "Shuru Smart Execution Engine",
      showcaseSubtitle: "Connecting strategic planning to live operational outputs",
      showcaseBadge: "Active Execution",
      metrics: [
        { label: "Initiatives Delivery", value: "94.8%", subtext: "Target On-Track", progressPercent: 94.8 },
        { label: "Activation Speed", value: "3X", subtext: "Faster than average", progressPercent: 85 },
        { label: "Standard Deliverables", value: "100%", subtext: "Fully Documented", progressPercent: 100 },
        { label: "Knowledge Transfer", value: "+50", subtext: "Empowered Teams", progressPercent: 75 }
      ]
    },
    {
      __component: "home.overview",
      badge: "Integrated Solution Tracks",
      title: "Shuru Smart Execution Pathways",
      introText: "Combining diagnostic assessment with field execution to guarantee measurable results.",
      ctaText: "Discover all solutions",
      ctaLink: "/solutions",
      cards: [
        {
          title: "1. Diagnosis & Restructuring",
          description: "Operational readiness assessment and bridging gaps with agile organizational structures.",
          iconName: "Target",
          badge: "Phase 01",
          cardCtaText: "Book Track Session"
        },
        {
          title: "2. Execution Strategy Design",
          description: "Translating strategy into actionable and measurable roadmaps.",
          iconName: "LineChart",
          badge: "Phase 02",
          cardCtaText: "Book Track Session"
        },
        {
          title: "3. Smart Field Execution",
          description: "Transformational initiative delivery with real-time performance dashboards.",
          iconName: "Cpu",
          badge: "Phase 03",
          cardCtaText: "Book Track Session"
        },
        {
          title: "4. Capacity Building & Enablement",
          description: "Developing leadership capabilities and internal knowledge transfer.",
          iconName: "Users2",
          badge: "Phase 04",
          cardCtaText: "Book Track Session"
        }
      ]
    },
    {
      __component: "shared.timeline-section",
      badge: "Shuru Methodology",
      title: "Our Work Journey: From Concept to Impact",
      introText: "A structured 4-stage process ensuring total clarity and measurable deliverables at every phase.",
      ctaText: "Book a Diagnostic Session for Your Entity",
      ctaLink: "/contact",
      steps: [
        {
          number: "01",
          title: "Diagnosis & Assessment",
          description: "Analyzing operational realities and pin-pointing bottlenecks.",
          deliverable: "Deliverable: Gap Analysis & Roadmap",
          icon: "Search"
        },
        {
          number: "02",
          title: "Operational Design",
          description: "Designing target operating models and performance KPI metrics.",
          deliverable: "Deliverable: Target Operating Model & KPIs",
          icon: "Compass"
        },
        {
          number: "03",
          title: "Activation & Execution",
          description: "Executing initiatives on the ground with live performance dashboards.",
          deliverable: "Deliverable: Live Field Execution & Dashboards",
          icon: "Rocket"
        },
        {
          number: "04",
          title: "Capacity Building",
          description: "Transferring knowledge and empowering teams for sustained impact.",
          deliverable: "Deliverable: Empowered Teams & Knowledge Transfer",
          icon: "GraduationCap"
        }
      ]
    },
    {
      __component: "home.trust-section",
      badge: "Pillars of Trust & Impact",
      title: "Why Partner With Shuru?",
      introText: "Combining deep expertise with smart execution methodologies for reliable outcomes.",
      items: [
        {
          icon: "Award",
          title: "Consulting & Field Expertise",
          description: "Leadership team with extensive track records in major national transformational programs.",
          tag: "Verified Standard"
        },
        {
          icon: "Workflow",
          title: "Proven Methodologies",
          description: "Governed frameworks guaranteeing speed, risk management, and outcome sustainability.",
          tag: "Verified Standard"
        },
        {
          icon: "Building2",
          title: "Cross-Sector Partnerships",
          description: "Proven success record across public entities, enterprises, and non-profits.",
          tag: "Verified Standard"
        },
        {
          icon: "Users",
          title: "Team Empowerment",
          description: "We work side-by-side with local teams to transfer knowledge and build capability.",
          tag: "Verified Standard"
        }
      ]
    },
    {
      __component: "home.value",
      title: "Why are we different at Shuru?",
      introText: "Many organizations work without clear impact. We turn data and reports into executive decisions you can trust.",
      ctaText: "Learn about our methodology",
      ctaLink: "/methodology",
      points: [
        { title: "Clear Impact", description: "Measure the actual value of each initiative", iconName: "Activity" },
        { title: "Confident Decisions", description: "Smart executive tools and dashboards", iconName: "Zap" },
        { title: "Lean Execution", description: "Reduce bureaucracy and enhance work speed", iconName: "Target" },
        { title: "Empowered Teams", description: "Transfer capability to ensure sustained performance", iconName: "Check" }
      ]
    },
    {
      __component: "home.testimonials-section",
      title: "What our clients say?",
      introText: "Our clients have witnessed a transformation in how projects are managed and actual results are achieved.",
      showSection: true
    },
    {
      __component: "home.cta-footer",
      headline: "Are you ready to adjust your execution path with Shuru?",
      primaryButtonText: "Request a consultation",
      primaryButtonLink: "/consultation",
      alternativeText: "Or via email directly: consult@shuru.sa",
      alternativeLink: "mailto:consult@shuru.sa"
    }
  ]
};

const testimonialsArabicData = [
  { quote: "أصبحت القرارات أسرع وأكثر وضوحاً، والفرق تعمل بثقة", author: "عميل A", locale: "ar", publishedAt: new Date().toISOString() },
  { quote: "المبادرات تنتهي كما خُطط لها… وليس كما اتفق عليها تحت الضغط", author: "عميل B", locale: "ar", publishedAt: new Date().toISOString() },
  { quote: "لوحات القيادة التنفيذية ساعدتنا على توجيه القيادة بدل المهام اليومية", author: "عميل C", locale: "ar", publishedAt: new Date().toISOString() }
];

const testimonialsEnglishData = [
  { quote: "Decisions became faster and clearer, and teams work with confidence", author: "Client A", locale: "en", publishedAt: new Date().toISOString() },
  { quote: "Initiatives end as planned... not as agreed upon under pressure", author: "Client B", locale: "en", publishedAt: new Date().toISOString() },
  { quote: "Executive dashboards helped us direct leadership instead of daily tasks", author: "Client C", locale: "en", publishedAt: new Date().toISOString() }
];

async function seedData() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'info';

  try {
    for (const [locale, data] of Object.entries({ ar: homeArabicData, en: homeEnglishData })) {
      console.log(`Seeding Home Page in ${locale}...`);
      const existingHome = await app.documents('api::home.home').findFirst({ filters: { locale } });
      if (existingHome) {
        await app.documents('api::home.home').update({ documentId: existingHome.documentId, locale, data, status: 'published' });
      } else {
        await app.documents('api::home.home').create({ locale, data, status: 'published' });
      }
    }

    const allTestimonials = [...testimonialsArabicData, ...testimonialsEnglishData];
    for (const entry of allTestimonials) {
      const existingTestimonial = await app.documents('api::testimonial.testimonial').findFirst({ filters: { author: entry.author, locale: entry.locale } });
      if (!existingTestimonial) {
        await app.documents('api::testimonial.testimonial').create({ locale: entry.locale, data: entry, status: 'published' });
      } else {
        await app.documents('api::testimonial.testimonial').update({ documentId: existingTestimonial.documentId, locale: entry.locale, data: entry, status: 'published' });
      }
    }

    console.log('\n✅ Seeding Home & Testimonials completed successfully!');
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (error) {
    console.error('❌ Could not import seed data', error);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedData().catch(console.error);
