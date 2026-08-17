'use strict';

const fs = require('fs');
const path = require('path');

const pagesDataGrouped = {
  solutions: {
    ar: { title: "الحلول", slug: "solutions", locale: "ar", blocks: [ /* ... Arabic Solutions blocks ... */
      {
        __component: "home.hero",
        title: "نحول الاستراتيجية إلى تنفيذ يمكن الوثوق به",
        subtitle: "ليست مشكلة المؤسسات نقص المشاريع… بل كثرتها. الفرق تعمل، المبادرات تبدأ، والتقارير تُرفع، لكن النتائج أقل من الجهد المبذول في شروع. نحن لا نضيف إجراءات جديدة، بل نعيد تعريف كيفية اتخاذ القرار التنفيذي لتصبح النتائج قابلة للتنبؤ.",
        primaryCtaText: "استعرض منهجية الحل",
        primaryCtaLink: "/methodology",
        secondaryCtaText: "تواصل معنا",
        secondaryCtaLink: "/contact"
      },
      {
        __component: "shared.challenges-section",
        title: "التحديات التنفيذية",
        challenges: [
          { pain: "الاجتماعات منتظمة، والتقارير دقيقة، لكن القيادة لا تستطيع الإجابة بثقة: “هل نحن نتقدم فعلاً؟”", solution: "تشخيص البيئة، تحليل الجدوى، قياس القيمة", result: "وضوح تام لما يحقق نتائج حقيقية" },
          { pain: "المبادرات تتباطأ أو تفقد هدفها الأصلي", solution: "نموذج تنفيذ مخصص، حوكمة مرنة، ضبط الصلاحيات", result: "المشاريع تنتهي كما خُطط لها" },
          { pain: "الإدارة العليا تصبح “مدير مشروع”", solution: "آلية تدخل قيادي منظمة، فصل القرار الاستراتيجي عن التشغيل، لوحات قيادة تنفيذية", result: "القيادة تقود الاتجاه" },
          { pain: "استمرار المشاريع بلا جدوى", solution: "قياس القيمة المستمر، إعادة ترتيب الأولويات، إيقاف المشاريع منخفضة الأثر", result: "توظيف أمثل للموارد وأثر أعلى" }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "هل تعاني منظمتك من أحد هذه التحديات؟",
        primaryButtonText: "احجز جلسة استكشافية",
        primaryButtonLink: "/consultation"
      }
    ] },
    en: { title: "Solutions", slug: "solutions", locale: "en", blocks: [ /* ... English Solutions blocks ... */
      {
        __component: "home.hero",
        title: "We turn strategy into execution you can trust",
        subtitle: "The problem for organizations is not a lack of projects... but an abundance of them. Teams work, initiatives start, and reports are submitted, but the results fall short of the effort expended in Shuru. We don't add new procedures, but redefine how executive decisions are made so results become predictable.",
        primaryCtaText: "Explore Solution Methodology",
        primaryCtaLink: "/methodology",
        secondaryCtaText: "Contact Us",
        secondaryCtaLink: "/contact"
      },
      {
        __component: "shared.challenges-section",
        title: "Execution Challenges",
        challenges: [
          { pain: "Regular meetings and accurate reports, but leadership cannot confidently answer: 'Are we really progressing?'", solution: "Environment assessment, feasibility analysis, value measurement", result: "Absolute clarity on what achieves real results" },
          { pain: "Initiatives slow down or lose their original purpose", solution: "Custom execution model, agile governance, authority control", result: "Projects finish as planned" },
          { pain: "Top management becomes a 'project manager'", solution: "Structured leadership intervention mechanism, separating strategic decisions from operations, executive dashboards", result: "Leadership guides the direction" },
          { pain: "Continuing projects with no value", solution: "Continuous value measurement, reprioritization, stopping low-impact projects", result: "Optimal resource utilization and higher impact" }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "Does your organization suffer from any of these challenges?",
        primaryButtonText: "Book a discovery session",
        primaryButtonLink: "/consultation"
      }
    ] }
  },
  services: {
    ar: { title: "الخدمات", slug: "services", locale: "ar", blocks: [
      {
        __component: "home.hero",
        badgeText: "خدمات شروع الاستشارية والتنفيذية",
        title: "حلول وخدمات متكاملة لتحويل الاستراتيجيات إلى واقع ملموس",
        subtitle: "نقدم منظومة متكاملة من الخدمات الاستشارية والتنفيذية التي تركز على سد الفجوات التشغيلية وتحقيق الأثر المستدام للجهات الحكومية والخاصة وغير الربحية.",
        primaryCtaText: "احجز جلسة استشارية",
        primaryCtaLink: "/contact",
        secondaryCtaText: "استعرض المنهجية",
        secondaryCtaLink: "/methodology"
      },
      {
        __component: "home.overview",
        badge: "مسارات الخدمات",
        title: "مسارات التنفيذ والخدمات الاستشارية",
        introText: "خدمات مصممة لمعالجة أدق التفاصيل التشغيلية وضمان أعلى مستويات الكفاءة والانضباط.",
        cards: [
          {
            title: "1. التشخيص وإعادة الهيكلة",
            description: "تقييم الجاهزية التشغيلية وسد الفجوات مع بناء الهياكل التنظيمية المرنة.",
            iconName: "Target",
            badge: "المرحلة 01",
            cardCtaText: "طلب الخدمة"
          },
          {
            title: "2. تصميم استراتيجية التنفيذ",
            description: "تحويل الرؤية والأهداف الكبرى إلى خريطة طريق قابلة للتطبيق والقياس.",
            iconName: "LineChart",
            badge: "المرحلة 02",
            cardCtaText: "طلب الخدمة"
          },
          {
            title: "3. التنفيذ الذكي والميداني",
            description: "إدارة المبادرات التحولية والتشغيل المباشر مع متابعة لوحات الأداء اللحظية.",
            iconName: "Cpu",
            badge: "المرحلة 03",
            cardCtaText: "طلب الخدمة"
          },
          {
            title: "4. بناء القدرات والتمكين",
            description: "تطوير الكفاءات القيادية والتطوير المؤسسي لنقل المعرفة وضمان الاستدامة.",
            iconName: "Users2",
            badge: "المرحلة 04",
            cardCtaText: "طلب الخدمة"
          }
        ]
      },
      {
        __component: "shared.challenges-section",
        title: "التحديات التشغيلية التي نعالجها",
        introText: "نساعد قيادات المنظمات على التغلب على أبرز العوائق التشغيلية وتحقيق نتائج ملموسة.",
        challenges: [
          { pain: "بطء تنفيذ المبادرات وتأخر تسليم المخرجات عن مواعيدها", solution: "هندسة نماذج التشغيل وضبط مسارات الحوكمة المرنة", result: "تسريع وتيرة الإنجاز بنسبة 3X" },
          { pain: "صعوبة قياس الأداء وغياب لوحات المتابعة اللحظية", solution: "بناء لوحات مؤشرات أداء ذكية تربط القرارات بالبيانات", result: "وضوح لحظي تام للقيادة العليا" },
          { pain: "انفصال الخطط الاستراتيجية عن التشغيل الميداني اليومي", solution: "ربط الأهداف بالعمليات وتحديد المسؤوليات بدقة", result: "تحول كامل من التخطيط للتنفيذ" },
          { pain: "الاعتماد الدائم على المستشارين الخارجيين", solution: "نقل المعرفة والتدريب العملي لفرق العمل الداخلية", result: "استدامة الأداء وبناء كفاءات محلية" }
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
        __component: "home.cta-footer",
        headline: "هل ترغب في مناقشة احتياجات منظمتك؟",
        primaryButtonText: "احجز جلسة استشارية متخصصة",
        primaryButtonLink: "/contact"
      }
    ] },
    en: { title: "Services", slug: "services", locale: "en", blocks: [
      {
        __component: "home.hero",
        badgeText: "Shuru Consulting & Execution Services",
        title: "Integrated Solutions to Turn Strategy into Reality",
        subtitle: "We offer end-to-end consulting and execution services designed to bridge operational gaps and deliver sustainable impact for government, enterprise, and non-profit entities.",
        primaryCtaText: "Book a Consultation",
        primaryCtaLink: "/contact",
        secondaryCtaText: "Explore Methodology",
        secondaryCtaLink: "/methodology"
      },
      {
        __component: "home.overview",
        badge: "Service Tracks",
        title: "Smart Execution & Advisory Tracks",
        introText: "Services engineered to address detailed operational requirements and ensure maximum efficiency.",
        cards: [
          {
            title: "1. Diagnosis & Restructuring",
            description: "Operational readiness assessment and bridging gaps with agile organizational structures.",
            iconName: "Target",
            badge: "Phase 01",
            cardCtaText: "Request Service"
          },
          {
            title: "2. Execution Strategy Design",
            description: "Translating strategy into actionable and measurable roadmaps.",
            iconName: "LineChart",
            badge: "Phase 02",
            cardCtaText: "Request Service"
          },
          {
            title: "3. Smart Field Execution",
            description: "Transformational initiative delivery with real-time performance dashboards.",
            iconName: "Cpu",
            badge: "Phase 03",
            cardCtaText: "Request Service"
          },
          {
            title: "4. Capacity Building & Enablement",
            description: "Developing leadership capabilities and internal knowledge transfer.",
            iconName: "Users2",
            badge: "Phase 04",
            cardCtaText: "Request Service"
          }
        ]
      },
      {
        __component: "shared.challenges-section",
        title: "Operational Challenges We Solve",
        introText: "Helping organization leaders overcome key operational obstacles to achieve measurable outcomes.",
        challenges: [
          { pain: "Slow initiative delivery and delayed project milestones", solution: "Target operating models and agile governance", result: "3X Faster Execution Pace" },
          { pain: "Difficulty tracking live KPIs and lack of real-time visibility", solution: "Smart executive dashboards connecting decisions with data", result: "Complete Real-time Clarity" },
          { pain: "Disconnection between high-level strategies and daily operations", solution: "Aligning goals with field operations and clear accountability", result: "Seamless Strategy-to-Execution" },
          { pain: "Over-reliance on external consultants without capability building", solution: "Hands-on knowledge transfer and internal team enablement", result: "Long-term Team Independence" }
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
        __component: "home.cta-footer",
        headline: "Ready to discuss your entity's requirements?",
        primaryButtonText: "Book a Diagnostic Session",
        primaryButtonLink: "/contact"
      }
    ] }
  },
  methodology: {
    ar: { title: "المنهجية", slug: "methodology", locale: "ar", blocks: [
      {
        __component: "home.hero",
        badgeText: "منهجية شروع المعتمدة",
        title: "منهجية تحول الأفكار إلى أثر مستدام",
        subtitle: "نعتمد على إطار عمل متكامل يتجاوز التنظير التقليدي، ويركز على التشغيل الفعلي ونقل المعرفة لبناء قدرات مستدامة.",
        primaryCtaText: "احجز جلسة تشخيص",
        primaryCtaLink: "/contact",
        secondaryCtaText: "استكشف الخدمات",
        secondaryCtaLink: "/services"
      },
      {
        __component: "shared.timeline-section",
        badge: "مراحل رحلة العمل",
        title: "رحلة العمل: من الفكرة إلى الأثر المستدام",
        introText: "رحلة واضحة المعالم بأربع مراحل متسلسلة تضمن وضوح المخرجات والشفافية التامة في كل خطوة.",
        ctaText: "احجز جلسة تشخيص مجانية لجهة أعمالك",
        ctaLink: "/contact",
        steps: [
          {
            number: "01",
            title: "التشخيص والتقييم – Diagnosis & Assessment",
            description: "دراسة الواقع الميداني وتحديد الاختناقات والفجوات التشغيلية بدقة.",
            deliverable: "المخرج: تقرير الفجوات وخارطة الطريق",
            icon: "Search"
          },
          {
            number: "02",
            title: "التصميم الهندسي – Operational Design",
            description: "بناء نماذج التشغيل المستهدفة وتصميم مؤشرات قياس الأداء والحلول.",
            deliverable: "المخرج: نموذج التشغيل ومؤشرات KPIs",
            icon: "Compass"
          },
          {
            number: "03",
            title: "التفعيل والمتابعة – Activation & Execution",
            description: "إدارة المبادرات ميدانياً ومتابعة الإنجاز عبر لوحات بيانات لحظية.",
            deliverable: "المخرج: تشغيل ميداني ولوحات متابعة",
            icon: "Rocket"
          },
          {
            number: "04",
            title: "بناء القدرات والتمكين – Capacity Building",
            description: "نقل الخبرات وتطوير الكفاءات لضمان استدامة الأداء بعد تسليم المشروعات.",
            deliverable: "المخرج: فرق عمل ممكّنة ونقل معرفي",
            icon: "GraduationCap"
          }
        ]
      },
      {
        __component: "shared.quote-section",
        quoteText: "الهدف ليس إدارة مشاريعك، بل أن لا تحتاج لمن يديرها لك.",
        author: "شروع للاستشارات والتنفيذ"
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
        __component: "home.cta-footer",
        headline: "دعنا نطبق منهجيتنا معاً في منظمتك",
        primaryButtonText: "احجز جلسة استشارية للتطبيق العملي",
        primaryButtonLink: "/contact"
      }
    ] },
    en: { title: "Methodology", slug: "methodology", locale: "en", blocks: [
      {
        __component: "home.hero",
        badgeText: "Proven Shuru Methodology",
        title: "A Structured Process from Concept to Sustainable Impact",
        subtitle: "We adopt a comprehensive execution framework that moves beyond conventional theory to real field operation and institutional capability transfer.",
        primaryCtaText: "Book a Diagnostic Session",
        primaryCtaLink: "/contact",
        secondaryCtaText: "Explore Services",
        secondaryCtaLink: "/services"
      },
      {
        __component: "shared.timeline-section",
        badge: "Journey Phases",
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
        __component: "shared.quote-section",
        quoteText: "The goal is not to manage your projects, but that you won't need someone to manage them for you.",
        author: "Shuru Consulting & Execution"
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
        __component: "home.cta-footer",
        headline: "Let's apply our methodology together in your organization",
        primaryButtonText: "Book a practical consultation session",
        primaryButtonLink: "/contact"
      }
    ] }
  },
  outputs: {
    ar: { title: "المخرجات", slug: "outputs", locale: "ar", blocks: [
      {
        __component: "home.overview",
        title: "المخرجات المتوقعة مع شروع",
        introText: "نركز على النتائج الفعلية والمستدامة للمنظمات.",
        cards: [
          { title: "نموذج تنفيذ واضح – Execution Blueprint", description: "خارطة طريق لكيفية عمل المنظمة", iconName: "Map" },
          { title: "آلية قرار قابلة للتكرار – Repeatable Decision System", description: "نظام عمل لا يتأثر بتغير الأشخاص", iconName: "Repeat" },
          { title: "حوكمة رشيقة – Agile Governance", description: "إجراءات تدعم سرعة التنفيذ ولا تعيقه", iconName: "Zap" },
          { title: "قياس أثر حقيقي – Real Impact Measurement", description: "لغة أرقام واضحة تفهمها القيادة العليا", iconName: "BarChart" }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "هل أنت جاهز لتغيير مسار التنفيذ؟",
        primaryButtonText: "احجز جلسة لمناقشة المخرجات المناسبة لمؤسستك",
        primaryButtonLink: "/consultation"
      }
    ] },
    en: { title: "Outputs", slug: "outputs", locale: "en", blocks: [
      {
        __component: "home.overview",
        title: "Expected Outputs with Shuru",
        introText: "We focus on actual and sustainable results for organizations.",
        cards: [
          { title: "Execution Blueprint", description: "A roadmap for how the organization operates", iconName: "Map" },
          { title: "Repeatable Decision System", description: "A work system that isn't affected by personnel changes", iconName: "Repeat" },
          { title: "Agile Governance", description: "Procedures that support execution speed, not hinder it", iconName: "Zap" },
          { title: "Real Impact Measurement", description: "Clear numerical language understood by top management", iconName: "BarChart" }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "Are you ready to change the execution path?",
        primaryButtonText: "Book a session to discuss appropriate outputs for your organization",
        primaryButtonLink: "/consultation"
      }
    ] }
  },
  "success-stories": {
    ar: { title: "قصص النجاح", slug: "success-stories", locale: "ar", blocks: [
      {
        __component: "home.hero",
        title: "قصص نجاح عملائنا في شروع",
        subtitle: "عملاؤنا شهدوا تحوّلًا حقيقيًا في كيفية إدارة المشاريع وتحقيق النتائج",
        primaryCtaText: "تعرف على قصص النجاح التفصيلية",
        primaryCtaLink: "/solutions"
      },
      {
        __component: "home.testimonials-section",
        title: "ماذا يقول عملاؤنا؟",
        showSection: true
      }
    ] },
    en: { title: "Success Stories", slug: "success-stories", locale: "en", blocks: [
      {
        __component: "home.hero",
        title: "Our clients' success stories with Shuru",
        subtitle: "Our clients have witnessed a real transformation in how they manage projects and achieve results",
        primaryCtaText: "Learn about detailed success stories",
        primaryCtaLink: "/solutions"
      },
      {
        __component: "home.testimonials-section",
        title: "What our clients say?",
        showSection: true
      }
    ] }
  },
  "about-us": {
    ar: { title: "من نحن", slug: "about-us", locale: "ar", blocks: [
      {
        __component: "home.hero",
        title: "من نحن",
        subtitle: "نحن في شروع نؤمن بأن التنفيذ هو الفاصل بين الاستراتيجية المكتوبة والواقع الملموس. لم نأتِ لنضيف إجراءات جديدة، بل لنعيد تعريف كيفية اتخاذ القرار التنفيذي.",
        primaryCtaText: "اكتشف منهجيتنا",
        primaryCtaLink: "/methodology",
        secondaryCtaText: "تواصل معنا",
        secondaryCtaLink: "/contact"
      },
      {
        __component: "home.value",
        title: "قيم شروع الأساسية",
        introText: "نؤمن بالعمل وفقًا لأسس توجه كل قرار نتخذه مع عملائنا.",
        points: [
          { title: "الأثر الملموس", description: "نركز على النتائج الفعلية التي تحدث تغييراً حقيقياً." },
          { title: "الشفافية والوضوح", description: "نتخذ قرارات مبنية على معطيات وواقع، لا على افتراضات." },
          { title: "تمكين الفريق", description: "ننقل القدرات لفرقك لتستمر في النجاح بدون الحاجة الدائمة لنا." }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "هل مستعد لتغيير مسار التنفيذ؟",
        primaryButtonText: "احجز جلسة استكشافية",
        primaryButtonLink: "/consultation"
      }
    ] },
    en: { title: "About Us", slug: "about-us", locale: "en", blocks: [
      {
        __component: "home.hero",
        title: "About Us",
        subtitle: "At Shuru, we believe execution is the deciding factor between a written strategy and a tangible reality. We didn't come to add new procedures, but to redefine how executive decisions are made.",
        primaryCtaText: "Discover Our Methodology",
        primaryCtaLink: "/methodology",
        secondaryCtaText: "Contact Us",
        secondaryCtaLink: "/contact"
      },
      {
        __component: "home.value",
        title: "Shuru Core Values",
        introText: "We believe in working according to principles that guide every decision we make with our clients.",
        points: [
          { title: "Tangible Impact", description: "We focus on actual results that make a real difference." },
          { title: "Transparency & Clarity", description: "We make decisions based on data and reality, not assumptions." },
          { title: "Team Empowerment", description: "We transfer capabilities to your teams to continue succeeding without the constant need for us." }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "Ready to change your execution path?",
        primaryButtonText: "Book a discovery session",
        primaryButtonLink: "/consultation"
      }
    ] }
  },
  "case-studies": {
    ar: { title: "دراسات الحالة", slug: "case-studies", locale: "ar", blocks: [
      {
        __component: "home.hero",
        title: "قصص نجاح واقعية",
        subtitle: "تعرف على كيفية تحويلنا للتحديات الاستراتيجية إلى إنجازات ملموسة عبر منهجية شروع.",
        primaryCtaText: "احجز جلسة الآن",
        primaryCtaLink: "/consultation",
        secondaryCtaText: "تصفح المخرجات",
        secondaryCtaLink: "/outputs"
      },
      {
        __component: "home.overview",
        title: "دراسات حالة بارزة",
        introText: "أمثلة حقيقية لشراكاتنا الناجحة مع مختلف المنظمات.",
        cards: [
          { title: "تحول رقمي لجهة حكومية", description: "إعادة هيكلة إجراءات العمل وتسريع اتخاذ القرار بنسبة 50%." },
          { title: "رفع الكفاءة التشغيلية لمؤسسة رائدة", description: "تقليل الهدر وتحسين تخصيص الموارد وزيادة الإنتاجية بنسبة 40%." },
          { title: "حوكمة المشاريع الكبرى", description: "تأسيس إطار عمل لمتابعة تقدم المبادرات بدقة عالية وبدون تأخير." }
        ]
      },
      {
        __component: "home.testimonials-section",
        title: "رأي شركاء النجاح",
        introText: "ماذا يقول عملاؤنا عن الأثر الذي حققناه معهم.",
        showSection: true
      },
      {
        __component: "home.cta-footer",
        headline: "تطمح لتكون قصة النجاح القادمة؟",
        primaryButtonText: "تواصل معنا لتحقيق أهدافك",
        primaryButtonLink: "/contact"
      }
    ] },
    en: { title: "Case Studies", slug: "case-studies", locale: "en", blocks: [
      {
        __component: "home.hero",
        title: "Real Success Stories",
        subtitle: "Discover how we transformed strategic challenges into tangible achievements through the Shuru methodology.",
        primaryCtaText: "Book a session now",
        primaryCtaLink: "/consultation",
        secondaryCtaText: "Browse Outputs",
        secondaryCtaLink: "/outputs"
      },
      {
        __component: "home.overview",
        title: "Featured Case Studies",
        introText: "Real examples of our successful partnerships with various organizations.",
        cards: [
          { title: "Digital Transformation for a Government Entity", description: "Restructuring business processes and accelerating decision-making by 50%." },
          { title: "Increasing Operational Efficiency for a Leading Org", description: "Reducing waste, improving resource allocation, and increasing productivity by 40%." },
          { title: "Mega Projects Governance", description: "Establishing a framework to track initiative progress with high accuracy and without delay." }
        ]
      },
      {
        __component: "home.testimonials-section",
        title: "Success Partners' Feedback",
        introText: "What our clients say about the impact we achieved with them.",
        showSection: true
      },
      {
        __component: "home.cta-footer",
        headline: "Aspire to be the next success story?",
        primaryButtonText: "Contact us to achieve your goals",
        primaryButtonLink: "/contact"
      }
    ] }
  },
  terms: {
    ar: { title: "الشروط والأحكام", slug: "terms", locale: "ar", blocks: [
      {
        __component: "home.hero",
        title: "الشروط والأحكام",
        subtitle: "يرجى قراءة هذه الشروط بعناية قبل استخدام موقعنا وخدماتنا."
      },
      {
        __component: "shared.rich-text",
        body: `
## 1. مقدمة
مرحباً بك في موقع شروع. من خلال الوصول إلى موقعنا أو استخدام خدماتنا، فإنك توافق على الالتزام الصارم بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى التوقف عن استخدام الموقع والخدمات فوراً.

## 2. الخدمات المقدمة
توفر "شروع" خدمات استشارية استراتيجية وحلول تنفيذية للمؤسسات. جميع الخدمات تخضع لعقود منفصلة يتم إبرامها مع العملاء. المعلومات المقدمة على هذا الموقع هي لأغراض إعلامية عامة ولا تعتبر نصيحة مهنية مُلزمة إلا في إطار تعاقد رسمي.

## 3. حقوق الملكية الفكرية
جميع المحتويات المتاحة على هذا الموقع (بما في ذلك وليس حصراً: النصوص، التصاميم، الرسومات، الشعارات، الصور، المقاطع الصوتية، والبرمجيات) هي ملكية حصرية لشركة "شروع" أو مُرخصة لها، وهي محمية بموجب قوانين حقوق النشر والملكية الفكرية المحلية والدولية. يُمنع منعاً باتاً نسخ، توزيع، إعادة إنتاج، أو استخدام أي من هذه المحتويات دون إذن كتابي مسبق.

## 4. شروط الاستخدام المقبول
بتصفحك لهذا الموقع، أنت توافق على:
- استخدام الموقع لأغراض قانونية ومشروعة فقط.
- عدم اتخاذ أي إجراء من شأنه إلحاق الضرر بالبنية التحتية للموقع أو تعطيل خدماته.
- عدم محاولة الوصول غير المصرح به إلى أي جزء من الموقع أو الأنظمة المرتبطة به.
- عدم استخدام الموقع لنشر أي محتوى مسيء، تشهيري، أو ينتهك حقوق الآخرين.

## 5. إخلاء المسؤولية وتحديد المسؤولية
رغم بذلنا كل جهد لضمان دقة وتحديث المعلومات على الموقع، يتم تقديم المحتوى "كما هو" دون أي ضمانات صريحة أو ضمنية.
لا تتحمل "شروع" أي مسؤولية عن أي أضرار مباشرة، غير مباشرة، عرضية، أو تبعية تنشأ عن استخدامك أو عدم قدرتك على استخدام الموقع أو الاعتماد على المعلومات المقدمة فيه.

## 6. روابط الأطراف الثالثة
قد يحتوي موقعنا على روابط لمواقع إلكترونية تابعة لأطراف ثالثة. هذه الروابط توفر لراحتك فقط، ولا تعني مصادقتنا على المحتوى الموجود فيها. نحن غير مسؤولين عن ممارسات الخصوصية أو محتوى تلك المواقع المستقلة.

## 7. التعديلات على الشروط
نحتفظ بالحق الكامل في تحديث، تعديل، أو تغيير هذه الشروط والأحكام في أي وقت دون إشعار مسبق. يُعتبر استمرارك في استخدام الموقع بعد نشر أي تعديلات بمثابة قبول صريح لهذه التعديلات. يُرجى مراجعة هذه الصفحة بشكل دوري.

## 8. القانون المطبق
تخضع هذه الشروط والأحكام وتُفسر وفقاً للقوانين المعمول بها في المملكة العربية السعودية. أي نزاع ينشأ عن أو يتعلق باستخدام هذا الموقع يخضع للاختصاص الحصري للمحاكم السعودية.

## 9. معلومات التواصل
لأي استفسارات أو ملاحظات بشأن هذه الشروط والأحكام، يرجى التواصل معنا عبر:
- **البريد الإلكتروني:** info@shuru.sa
- **صفحة التواصل:** [/contact](/contact)
        `
      }
    ] },
    en: { title: "Terms and Conditions", slug: "terms", locale: "en", blocks: [
      {
        __component: "home.hero",
        title: "Terms and Conditions",
        subtitle: "Please read these terms carefully before using our website and services."
      },
      {
        __component: "shared.rich-text",
        body: `
## 1. Introduction
Welcome to Shuru. By accessing or using our website and services, you agree to be strictly bound by these Terms and Conditions. If you do not agree to any part of these terms, please stop using our website and services immediately.

## 2. Services Provided
Shuru provides strategic consulting services and executive solutions for organizations. All services are subject to separate contracts signed with clients. The information provided on this website is for general informational purposes and does not constitute binding professional advice unless specifically part of a formal contract.

## 3. Intellectual Property Rights
All content available on this website (including but not limited to: text, designs, graphics, logos, images, audio clips, and software) is the exclusive property of Shuru or its licensors, and is protected by local and international copyright and intellectual property laws. Copying, distributing, reproducing, or using any of this content without prior written permission is strictly prohibited.

## 4. Acceptable Use
By browsing this website, you agree to:
- Use the website for lawful and legitimate purposes only.
- Refrain from any action that could damage the website's infrastructure or disrupt its services.
- Not attempt unauthorized access to any part of the website or connected systems.
- Not use the website to publish any offensive, defamatory content, or content that violates the rights of others.

## 5. Disclaimer and Limitation of Liability
While we make every effort to ensure the accuracy and currency of information on the website, the content is provided "as is" without any express or implied warranties.
Shuru bears no liability for any direct, indirect, incidental, or consequential damages arising from your use or inability to use the website or reliance on any information provided herein.

## 6. Third-Party Links
Our website may contain links to third-party websites. These links are provided for convenience only and do not signify our endorsement of their content. We are not responsible for the privacy practices or content of these independent sites.

## 7. Modifications to Terms
We reserve the absolute right to update, modify, or alter these Terms and Conditions at any time without prior notice. Your continued use of the website following the posting of any changes constitutes explicit acceptance of those changes. Please review this page periodically.

## 8. Governing Law
These Terms and Conditions shall be governed by and construed in accordance with the laws applicable in the Kingdom of Saudi Arabia. Any dispute arising out of or related to the use of this website shall be subject to the exclusive jurisdiction of the Saudi courts.

## 9. Contact Information
For any inquiries or feedback regarding these Terms and Conditions, please contact us at:
- **Email:** info@shuru.sa
- **Contact Page:** [/contact](/contact)
        `
      }
    ] }
  },
  privacy: {
    ar: { title: "سياسة الخصوصية", slug: "privacy", locale: "ar", blocks: [
      {
        __component: "home.hero",
        title: "سياسة الخصوصية",
        subtitle: "نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية."
      },
      {
        __component: "shared.rich-text",
        body: `
## 1. التزامنا بالخصوصية
في "شروع"، تعتبر خصوصيتك من أعلى أولوياتنا. نحن نلتزم بالشفافية الكاملة حول كيفية جمع بياناتك الشخصية واستخدامها وحمايتها عند زيارتك لموقعنا الإلكتروني أو الاستفادة من خدماتنا.

## 2. المعلومات التي نجمعها
نحن نقوم بجمع نوعين من المعلومات:
- **المعلومات المقدمة طواعية:** وتشمل البيانات التي تدخلها عند ملء نماذج الاتصال، مثل الاسم، المسمى الوظيفي، اسم المؤسسة، البريد الإلكتروني، ورقم الهاتف، وتفاصيل استفسارك.
- **معلومات الجمع التلقائي (البيانات التحليلية):** عند تصفحك للموقع، قد نقوم آلياً بجمع معلومات تقنية مثل عنوان بروتوكول الإنترنت (IP)، نوع المتصفح، نظام التشغيل، الصفحات التي قمت بزيارتها، والوقت المستغرق في الموقع، وذلك باستخدام ملفات تعريف الارتباط (Cookies).

## 3. كيف نستخدم معلوماتك
تُستخدم البيانات التي نجمعها للأغراض التالية:
- للتواصل معك والرد على استفساراتك وطلبات الاستشارة.
- لتقديم خدماتنا الاستشارية وتخصيصها لتلائم احتياجات مؤسستك.
- لتحسين تجربة المستخدم وتطوير أداء الموقع الإلكتروني.
- لإرسال النشرات الإخبارية، التحديثات، والمحتوى المهني الذي قد يهمك (يمكنك إلغاء الاشتراك في أي وقت).
- للامتثال للمتطلبات القانونية والتنظيمية.

## 4. كيف نشارك معلوماتك
نحن نلتزم بعدم بيع، تأجير، أو تداول بياناتك الشخصية لأي أطراف ثالثة لأغراض تجارية. قد نشارك معلوماتك في الحالات المحدودة التالية:
- **مزودي الخدمات:** مع شركائنا التقنيين الذين يساعدوننا في تشغيل الموقع (مثل خدمات استضافة السحابة وأنظمة إدارة البريد الإلكتروني)، بشرط التزامهم الصارم بسرية البيانات.
- **المتطلبات القانونية:** إذا طُلب منا ذلك بموجب أحكام القانون أو استجابة لطلبات حكومية ورسمية، لحماية حقوق "شروع" القانونية لضمان سلامة وأمن المستخدمين.

## 5. أمن البيانات وحمايتها
نتخذ في "شروع" تدابير وإجراءات أمنية تقنية وتنظيمية متقدمة لحماية بياناتك من الوصول غير المصرح به، التعديل، الإفصاح، أو الإتلاف. وتُحفظ البيانات على خوادم آمنة تخضع لرقابة صارمة. ومع ذلك، يُرجى ملاحظة أنه لا توجد وسيلة نقل عبر الإنترنت آمنة بنسبة 100%.

## 6. ملفات تعريف الارتباط (Cookies)
نستخدم ملفات تعريف الارتباط لتحسين تجربة تصفحك وتحليل حركة الزيارات. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك ورفضها إذا رغبت، رغم أن ذلك قد يؤثر على فعالية بعض ميزات الموقع.

## 7. حقوقك المتعلقة ببياناتك
بصفتك مستخدماً، يحق لك دائماً:
- الوصول إلى بياناتك الشخصية التي نحتفظ بها ومعرفتها.
- طلب تصحيح أي بيانات غير دقيقة أو تحديثها.
- طلب حذف بياناتك الشخصية من سجلاتنا (حق النسيان) في ظروف معينة.
- سحب موافقتك على تلقي المراسلات التسويقية.

## 8. التعديلات على سياسة الخصوصية
قد نقوم بتحديث هذه السياسة من حين لآخر لتعكس التغييرات في ممارساتنا أو لاعتبارات تنظيمية. سيتم نشر التحديثات على هذه الصفحة وتحديث تاريخ المراجعة. استخدامك المستمر للموقع يعني قبولك للسياسة المحدثة.

## 9. تواصل معنا لمسائل الخصوصية
إذا كان لديك أي سؤال، استفسار، أو مخاوف بشأن هذه السياسة أو طريقة تعاملنا مع بياناتك، يرجى مراسلتنا فوراً:
- **البريد الإلكتروني:** privacy@shuru.sa
- **الهاتف:** [يضاف رقم الهاتف إن وجد]
        `
      }
    ] },
    en: { title: "Privacy Policy", slug: "privacy", locale: "en", blocks: [
      {
        __component: "home.hero",
        title: "Privacy Policy",
        subtitle: "We respect your privacy and are committed to protecting your personal data."
      },
      {
        __component: "shared.rich-text",
        body: `
## 1. Our Commitment to Privacy
At Shuru, your privacy is a top priority. We are committed to complete transparency regarding how we collect, use, and protect your personal data when you visit our website or utilize our services.

## 2. Information We Collect
We collect two main types of information:
- **Voluntarily Provided Information:** Data you input when filling out contact forms, such as your name, job title, company name, email, phone number, and inquiry details.
- **Automatically Collected Information (Analytics Data):** While you browse our site, we may automatically collect technical info such as your IP address, browser type, operating system, pages visited, and time spent on the site using Cookies.

## 3. How We Use Your Information
The data we collect is utilized for the following purposes:
- To communicate with you and respond to your inquiries and consultation requests.
- To deliver and customize our consulting services to fit your organization's needs.
- To analyze user experience and improve website performance.
- To send newsletters, updates, and professional content that may interest you (you can opt-out at any time).
- To comply with legal and regulatory requirements.

## 4. How We Share Your Information
We strictly promise not to sell, rent, or trade your personal data to any third parties for commercial purposes. We may share your information only in these limited cases:
- **Service Providers:** With our technical partners who help us operate the site (like cloud hosting and email management systems), provided they agree to strict confidentiality.
- **Legal Requirements:** If required by law or in response to official government requests, to protect Shuru's legal rights and ensure user safety.

## 5. Data Security and Protection
Shuru deploys advanced technical and organizational security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Data is stored on secure, strictly monitored servers. However, please note that no internet transmission method is 100% physically secure.

## 6. Cookies
We use cookies to improve your browsing experience and analyze web traffic. You can adjust your browser settings to decline cookies if you prefer, although doing so may impact the functionality of certain website features.

## 7. Your Data Rights
As a user, you consistently have the right to:
- Access and know the personal data we hold about you.
- Request corrections or updates to any inaccurate info.
- Request the deletion of your personal data from our records in certain circumstances.
- Withdraw consent for receiving marketing communications.

## 8. Amendments to Privacy Policy
We may update this policy occasionally to reflect changes in our practices or regulatory standards. Updates will be posted on this page along with a revised date. Your continued use of the website implies acceptance of the updated policy.

## 9. Contact Us for Privacy Matters
If you have any questions, concerns, or inquiries regarding this policy or how we handle your data, please contact us immediately:
- **Email:** privacy@shuru.sa
- **Phone:** [Add Phone Number if applicable]
        `
      }
    ] }
  }
};

async function seedData() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'info';

  try {
    for (const [slug, localesData] of Object.entries(pagesDataGrouped)) {
      const pageAr = localesData.ar;
      const pageEn = localesData.en;

      console.log(`Seeding Page: ${slug}...`);

      const existingPageAr = await app.documents('api::page.page').findFirst({
        filters: { slug: slug, locale: 'ar' }
      });

      let baseDocumentId;

      if (existingPageAr) {
        baseDocumentId = existingPageAr.documentId;
        // Update Arabic
        await app.documents('api::page.page').update({
           documentId: baseDocumentId,
           locale: 'ar',
           data: pageAr,
           status: 'published'
        });

        // Update or create English linked to Arabic documentId
        await app.documents('api::page.page').update({
           documentId: baseDocumentId,
           locale: 'en',
           data: pageEn,
           status: 'published'
        });
      } else {
        // Create Arabic first to establish document
        const createdAr = await app.documents('api::page.page').create({ locale: 'ar',
           data: pageAr,
           status: 'published'
        });
        baseDocumentId = createdAr.documentId;

        // Create English translation
        await app.documents('api::page.page').update({
           documentId: baseDocumentId,
           locale: 'en',
           data: pageEn,
           status: 'published'
        });
      }
    }
    console.log('\n✅ Seeding pages completed successfully!');
    // Allow pending queries to finish before destroying the app
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (error) {
    console.log('❌ Could not import seed data');
    console.dir(error, { depth: null });
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedData().catch(console.error);
