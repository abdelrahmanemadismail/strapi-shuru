'use strict';

const token = '799604a0c950d4b9e7f5d71388d43bd9e3a38fa8018316db87085876f2f728253b0bac9bd83d905c86f6513d80b923a361b0f89c022160669555c0c90d124fb32e10004a97fa21d4490a1be00b4f243ad4174e5918665d4939c4ae660213caaa27524535fc2d2e4599197ed5ce241af99ea42870374dd3196a9060b1ca9ed6e1';
const baseUrl = 'https://cms.shuru.sa/api';

const servicesData = [
  {
    ar: {
      title: "تميز التنفيذ ومكاتب إدارة المشاريع",
      slug: "execution-excellence-pmo",
      badge: "المسار 01 • مكاتب المشاريع والتنفيذ",
      shortDescription: "نساعد المؤسسات على بناء وتطوير مكاتب إدارة المشاريع ومنظومات التنفيذ بما يعزز الحوكمة، ووضوح الأداء، وجودة المتابعة، وموثوقية التسليم.",
      icon: "Cpu",
      order: 1,
      isFeatured: true,
      cardCtaText: "استكشف تفاصيل الخدمة",
      features: [
        "تأسيس وتطوير مكاتب إدارة المشاريع والمحافظ (PMO / EPMO / VMO)",
        "ضبط الجداول الزمنية وإدارة الميزانيات والمخاطر التشغيلية",
        "تطبيق المعايير العالمية المعتمدة: PMI, PRINCE2, Agile, SAFe",
        "لوحات تحكم تنفيذية ذكية لمتابعة الإنجاز وضمان موثوقية التسليم"
      ],
      seo: {
        meta_title: "تميز التنفيذ ومكاتب إدارة المشاريع (PMO) | شروع",
        meta_description: "نساعد المؤسسات على بناء وتطوير مكاتب إدارة المشاريع ومنظومات التنفيذ بما يعزز الحوكمة، ووضوح الأداء، وجودة المتابعة، وموثوقية التسليم.",
        meta_keywords: "مكاتب إدارة المشاريع, PMO, تميز التنفيذ, حوكمة المشاريع, EPMO, Agile, تسليم المشاريع"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "المسار 01 • مكاتب المشاريع والتنفيذ",
          title: "نبني منظومات تنفيذ تضمن تسليم المشاريع في الوقت والميزانية",
          subtitle: "نحول مكاتب إدارة المشاريع من مجرد جامعي تقارير إلى محركات تنفيذية حقيقية تعزز الحوكمة، ووضوح الأداء، وجودة المتابعة، وموثوقية التسليم.",
          primaryCtaText: "طلب هذه الخدمة",
          primaryCtaLink: "/contact?service=execution-excellence-pmo",
          secondaryCtaText: "استعراض المنهجية",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "shared.challenges-section",
          title: "التحديات التنفيذية التي نعالجها",
          introText: "نساعد القيادات على تجاوز معوقات التنفيذ وتحقيق نتائج ملموسة وموثوقة.",
          challenges: [
            {
              pain: "تأخر تسليم المبادرات وتجاوز الميزانيات المعتمدة",
              solution: "هندسة نموذج تشغيل PMO مرن وإدارة صارمة للجداول والتكاليف",
              result: "تسليم منضبط وارتفاع معدل إنجاز المشاريع في وقتها"
            },
            {
              pain: "ضعف المتابعة وغياب الرؤية اللحظية لتقدم المحافظ",
              solution: "بناء لوحات تحكم تنفيذية ذكية تربط القرارات بالبيانات الحية",
              result: "وضوح لحظي تام للقيادة العليا حول صحة كل مشروع"
            },
            {
              pain: "تراكم المخاطر التشغيلية دون خطط استباقية لمعالجتها",
              solution: "تطبيق سجلات مخاطر تفاعلية وآليات تدخل قيادي سريعة",
              result: "خفض المخاطر التشغيلية بنسبة تتجاوز 60%"
            }
          ]
        },
        {
          __component: "shared.timeline-section",
          badge: "مراحل التنفيذ",
          title: "منهجية بناء وتطوير منظومة التنفيذ",
          introText: "مسار عمل منظم ومحوكم يضمن بناء قدرات تنفيذية مستدامة.",
          steps: [
            {
              number: "01",
              title: "تقييم نضج إدارة المشاريع والجاهزية",
              description: "فحص الوضع الراهن لمنظومة التنفيذ والمحافظ والمشاريع القائمة وتحديد الفجوات.",
              deliverable: "تقرير تقييم النضج وخريطة طريق التطوير"
            },
            {
              number: "02",
              title: "تصميم نموذج التشغيل والحوكمة",
              description: "بناء أدلة العمليات، وتحديد المنهجيات (Agile / Waterfall)، وتطوير مصفوفات الصلاحيات.",
              deliverable: "دليل تشغيل مكتب المشاريع ومصفوفة الحوكمة"
            },
            {
              number: "03",
              title: "تفعيل لوحات التحكم والأتمتة",
              description: "تطبيق أدوات إدارة المشاريع ولوحات المؤشرات اللحظية لربط المخرجات بالأثر.",
              deliverable: "لوحات تحكم تنفيذية وتقارير متابعة حية"
            },
            {
              number: "04",
              title: "التمكين الميداني ونقل المعرفة",
              description: "تدريب وتأهيل مدراء المشاريع الداخليين لضمان استدامة الأداء واستقلالية الفريق.",
              deliverable: "سجلات التأهيل وتمكين الكفاءات الداخلية"
            }
          ],
          ctaText: "احجز جلسة استكشافية للمشروع",
          ctaLink: "/contact?service=execution-excellence-pmo"
        },
        {
          __component: "shared.faq-section",
          badge: "الأسئلة الشائعة",
          title: "أسئلة شائعة حول مكاتب إدارة المشاريع",
          introText: "إجابات واضحة عن نطاق خدمات PMO والمدة الزمنية المتوقعة.",
          items: [
            {
              question: "ما الفرق بين تأسيس PMO تقليدي ومنظومة تميز التنفيذ من شروع؟",
              answer: "شروع تركز على القيمة والأثر وموثوقية التسليم الميداني، ولا تكتفي بالنماذج الورقية أو جمع التقارير الروتينية."
            },
            {
              question: "كم تستغرق مرحلة تأسيس وتفعيل مكتب إدارة المشاريع؟",
              answer: "تتراوح عادة بين 8 إلى 16 أسبوعاً اعتماداً على حجم المحفظة وعدد المشاريع ومستوى النضج الراهن."
            },
            {
              question: "هل تساعدون في إنقاذ المشاريع المتعثرة؟",
              answer: "نعم، نقدم استشارات تدخل سريعة لتشخيص أسباب التعثر وإعادة جدولة وتوجيه المشاريع الحرجة."
            }
          ],
          contactText: "هل لديك استفسار حول مشاريع منظمتك؟",
          contactLinkText: "تواصل مع خبير PMO",
          contactLink: "/contact"
        },
        {
          __component: "home.cta-footer",
          headline: "جاهز لتعزيز حوكمة وموثوقية تسليم مشاريعك؟",
          primaryButtonText: "احجز جلسة استشارية متخصصة",
          primaryButtonLink: "/contact?service=execution-excellence-pmo"
        }
      ]
    },
    en: {
      title: "Execution Excellence & PMO Consulting",
      slug: "execution-excellence-pmo",
      badge: "Track 01 • PMO & Execution",
      shortDescription: "We assist organizations in building and maturing Project Management Offices and execution systems to enhance governance, performance clarity, tracking quality, and delivery reliability.",
      icon: "Cpu",
      order: 1,
      isFeatured: true,
      cardCtaText: "Explore Service Details",
      features: [
        "PMO, EPMO, and VMO setup, restructuring, and maturity scaling",
        "Schedule governance, budget control, and operational risk mitigation",
        "Adopting global standards: PMI, PRINCE2, Agile, SAFe",
        "Smart executive dashboards for real-time progress and reliable delivery"
      ],
      seo: {
        meta_title: "Execution Excellence & PMO Consulting | Shuru",
        meta_description: "Building and maturing Project Management Offices and execution frameworks to ensure governance, tracking quality, and delivery reliability.",
        meta_keywords: "PMO, execution excellence, project management, governance, delivery reliability, Agile"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "Track 01 • PMO & Execution Excellence",
          title: "We build execution engines ensuring on-time, on-budget delivery",
          subtitle: "We transform PMOs from passive report aggregators into proactive execution engines that enhance governance, performance clarity, and delivery reliability.",
          primaryCtaText: "Request This Service",
          primaryCtaLink: "/contact?service=execution-excellence-pmo",
          secondaryCtaText: "Explore Methodology",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "Ready to elevate your project governance and delivery reliability?",
          primaryButtonText: "Book an Advisory Session",
          primaryButtonLink: "/contact?service=execution-excellence-pmo"
        }
      ]
    }
  },
  {
    ar: {
      title: "الحوكمة وتنفيذ الاستراتيجية",
      slug: "governance-and-strategy-execution",
      badge: "المسار 02 • الحوكمة والاستراتيجية",
      shortDescription: "نربط الاستراتيجية بالحوكمة والقرارات والمبادرات والقيمة، بما يوضح المسؤوليات ويعزز سرعة اتخاذ القرار وتحقيق النتائج.",
      icon: "ShieldCheck",
      order: 2,
      isFeatured: true,
      cardCtaText: "استكشف تفاصيل الخدمة",
      features: [
        "ربط الاستراتيجية بالقرارات والمبادرات التشغيلية والقيمة المستهدفة",
        "تصميم أطر الحوكمة المؤسسية ومصفوفات الصلاحيات (DOA)",
        "تحديد وتتبع بطاقات الأداء المتوازن ومؤشرات الأداء (KPIs)",
        "حوكمة اللجان القيادية وفصل القرار الاستراتيجي عن العمليات"
      ],
      seo: {
        meta_title: "الحوكمة وتنفيذ الاستراتيجية | شروع",
        meta_description: "نربط الاستراتيجية بالحوكمة والقرارات والمبادرات والقيمة، بما يوضح المسؤوليات ويعزز سرعة اتخاذ القرار وتحقيق النتائج.",
        meta_keywords: "حوكمة, تنفيذ الاستراتيجية, مصفوفة الصلاحيات, لجان, مؤشرات الأداء, اتخاذ القرار"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "المسار 02 • الحوكمة والاستراتيجية",
          title: "نربط الاستراتيجية بالحوكمة والقرارات لتحقيق نتائج ملموسة",
          subtitle: "رؤية بدون حوكمة واضحة وتنفيذ منضبط تفقد أثرها. نربط استراتيجيتكم بالقرارات والمبادرات والقيمة لتعزيز سرعة الإنجاز ووضوح المسؤوليات.",
          primaryCtaText: "طلب استشارة الحوكمة والاستراتيجية",
          primaryCtaLink: "/contact?service=governance-and-strategy-execution",
          secondaryCtaText: "استعراض المنهجية",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "shared.challenges-section",
          title: "التحديات الاستراتيجية والتنظيمية التي نحلها",
          introText: "نسد الفجوة بين التخطيط الاستراتيجي والحوكمة الميدانية الفعالة.",
          challenges: [
            {
              pain: "بطء اتخاذ القرارات التنفيذية وتداخل الصلاحيات بين القيادات",
              solution: "تصميم مصفوفة صلاحيات واضحة وفصل الإشراف عن التنفيذ",
              result: "تسريع اتخاذ القرار التنفيذي بنسبة تتجاوز 3X"
            },
            {
              pain: "انفصال المبادرات والمشاريع عن القيمة الاستراتيجية المرجوة",
              solution: "ربط كل مبادرة بمؤشرات قياس قيمة واضحة ومستمرة",
              result: "تركيز 100% من الموارد على المبادرات الأعلى أثراً"
            },
            {
              pain: "صعوبة قياس التقدم الحقيقي نحو مستهدفات التحول الوطني ورؤية 2030",
              solution: "مواءمة شاملة مع برامج تحقيق الرؤية وبناء بطاقات أداء متكاملة",
              result: "امتثال كامل ووضوح تام لنسب الإنجاز الاستراتيجي"
            }
          ]
        },
        {
          __component: "home.cta-footer",
          headline: "هل ترغب في ربط استراتيجيتك بالحوكمة وصنع القرار؟",
          primaryButtonText: "احجز جلسة استشارية متخصصة",
          primaryButtonLink: "/contact?service=governance-and-strategy-execution"
        }
      ]
    },
    en: {
      title: "Governance & Strategy Execution",
      slug: "governance-and-strategy-execution",
      badge: "Track 02 • Governance & Strategy",
      shortDescription: "We bridge strategy with governance, decisions, initiatives, and value creation—clarifying accountabilities and accelerating executive decision-making to achieve measurable outcomes.",
      icon: "ShieldCheck",
      order: 2,
      isFeatured: true,
      cardCtaText: "Explore Service Details",
      features: [
        "Bridging strategy with decisions, operational initiatives, and value",
        "Corporate governance frameworks & Delegation of Authority (DOA)",
        "Balanced Scorecards & Strategic KPI tracking architecture",
        "Executive committee governance & decision speed optimization"
      ],
      seo: {
        meta_title: "Governance & Strategy Execution | Shuru",
        meta_description: "Aligning strategy with governance, initiatives, and value creation to clarify accountabilities and accelerate decision-making.",
        meta_keywords: "governance, strategy execution, delegation of authority, KPIs, decision making"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "Track 02 • Governance & Strategy Execution",
          title: "Connecting strategy with governance and decisions to deliver real impact",
          subtitle: "Strategy without clear governance loses direction. We connect your strategy with decisions, initiatives, and value to accelerate results.",
          primaryCtaText: "Request Governance & Strategy Advisory",
          primaryCtaLink: "/contact?service=governance-and-strategy-execution",
          secondaryCtaText: "Explore Methodology",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "Ready to link your strategy with governance and decisive execution?",
          primaryButtonText: "Book an Advisory Session",
          primaryButtonLink: "/contact?service=governance-and-strategy-execution"
        }
      ]
    }
  },
  {
    ar: {
      title: "المعرفة والذكاء المؤسسي",
      slug: "knowledge-and-enterprise-intelligence",
      badge: "المسار 03 • المعرفة والذكاء المؤسسي",
      shortDescription: "نحوّل المعرفة المؤسسية إلى قدرة فعّالة تدعم القرار، وتسرّع التعلّم، وتحسّن التنفيذ من خلال تنظيم المعرفة وتفعيلها داخل بيئة العمل.",
      icon: "Zap",
      order: 3,
      isFeatured: true,
      cardCtaText: "استكشف تفاصيل الخدمة",
      features: [
        "بناء أطر إدارة المعرفة المؤسسية وحفظ الأصول الفكرية",
        "توظيف تقنيات الذكاء الاصطناعي المؤسسي وتحليل البيانات لدعم القرار",
        "توثيق الدروس المستفادة ونقل الخبرات بين أجيال القيادات",
        "تسريع دورة التعلّم المؤسسي ورفع كفاءة فرق العمل الميدانية"
      ],
      seo: {
        meta_title: "المعرفة والذكاء المؤسسي | شروع",
        meta_description: "نحوّل المعرفة المؤسسية إلى قدرة فعّالة تدعم القرار، وتسرّع التعلّم، وتحسّن التنفيذ من خلال تنظيم المعرفة وتفعيلها داخل بيئة العمل.",
        meta_keywords: "إدارة المعرفة, الذكاء المؤسسي, ذكاء اصطناعي, دعم القرار, نقل المعرفة, كفاءة الفرق"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "المسار 03 • المعرفة والذكاء المؤسسي",
          title: "المعرفة المؤسسية قوة حقيقية تدعم القرار وتسرّع التنفيذ",
          subtitle: "نحوّل المعرفة المشتتة داخل مؤسستكم إلى قدرة ذكية وفعّالة تدعم اتخاذ القرارات الاستراتيجية، وتسرّع تعلم الفرق، وترفع جودة المخرجات.",
          primaryCtaText: "طلب استشارة المعرفة والذكاء المؤسسي",
          primaryCtaLink: "/contact?service=knowledge-and-enterprise-intelligence",
          secondaryCtaText: "استعراض المنهجية",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "shared.challenges-section",
          title: "تحديات المعرفة التي نعالجها",
          introText: "نمنع هدر الخبرات ونبني ذاكرة مؤسسية ذكية ومستدامة.",
          challenges: [
            {
              pain: "فقدان الخبرات والمعرفة المتراكمة مع انتقال القيادات والموظفين",
              solution: "أطر استباقية لحفظ ونقل المعرفة وتوثيق الممارسات القيادية",
              result: "استدامة معرفية تامة وحماية الأصول المؤسسية"
            },
            {
              pain: "تكرار الأخطاء السابقة في المشاريع بسبب غياب توثيق الدروس المستفادة",
              solution: "منظومة توثيق ومراجعة تفاعلية للدروس المستفادة وتطبيقها المباشر",
              result: "تسريع دورة إنجاز المشاريع وتقليل الأخطاء المكررة"
            },
            {
              pain: "صعوبة الوصول للبيانات والتحليلات الدقيقة في الوقت المناسب للقرار",
              solution: "بناء مستودعات معرفية ذكية مدعومة بأدوات الذكاء الاصطناعي",
              result: "قرارات تنفيذية قائمة على بيانات ومعرفة موثوقة"
            }
          ]
        },
        {
          __component: "home.cta-footer",
          headline: "جاهز لتفعيل المعرفة والذكاء المؤسسي في منظمتك؟",
          primaryButtonText: "احجز جلسة استشارية متخصصة",
          primaryButtonLink: "/contact?service=knowledge-and-enterprise-intelligence"
        }
      ]
    },
    en: {
      title: "Knowledge & Enterprise Intelligence",
      slug: "knowledge-and-enterprise-intelligence",
      badge: "Track 03 • Knowledge & Intelligence",
      shortDescription: "We transform institutional knowledge into an active capability that supports decision-making, accelerates learning, and improves execution by structuring and operationalizing knowledge within the workplace.",
      icon: "Zap",
      order: 3,
      isFeatured: true,
      cardCtaText: "Explore Service Details",
      features: [
        "Enterprise knowledge management frameworks & IP retention",
        "Leveraging enterprise AI and analytics for informed decision support",
        "Lessons learned architecture and seamless inter-generational knowledge transfer",
        "Accelerating organizational learning and frontline team performance"
      ],
      seo: {
        meta_title: "Knowledge & Enterprise Intelligence | Shuru",
        meta_description: "Transforming institutional knowledge into an actionable capability that supports decisions, accelerates learning, and optimizes execution.",
        meta_keywords: "knowledge management, enterprise intelligence, enterprise AI, decision support, knowledge transfer"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "Track 03 • Knowledge & Enterprise Intelligence",
          title: "Transforming institutional knowledge into decisive execution power",
          subtitle: "We turn fragmented data into active intelligence that empowers strategic decisions, accelerates team onboarding, and enhances output quality.",
          primaryCtaText: "Request Knowledge & Intelligence Advisory",
          primaryCtaLink: "/contact?service=knowledge-and-enterprise-intelligence",
          secondaryCtaText: "Explore Methodology",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "Ready to harness your organizational knowledge and intelligence?",
          primaryButtonText: "Book an Advisory Session",
          primaryButtonLink: "/contact?service=knowledge-and-enterprise-intelligence"
        }
      ]
    }
  },
  {
    ar: {
      title: "الاستشارات والتقييمات والدراسات التنفيذية",
      slug: "advisory-assessments-and-executive-studies",
      badge: "المسار 04 • الدراسات والتقييمات التنفيذية",
      shortDescription: "نطوّر الدراسات والتقييمات والأطر العملية التي تدعم القرارات التنفيذية، وتحول التحديات المؤسسية إلى مسارات واضحة وقابلة للتنفيذ.",
      icon: "Award",
      order: 4,
      isFeatured: true,
      cardCtaText: "استكشف تفاصيل الخدمة",
      features: [
        "تقييم الجاهزية التشغيلية والنضج المؤسسي وسد الفجوات",
        "إعداد الدراسات التنفيذية ودراسات الجدوى التشغيلية المتخصصة",
        "تصميم الأطر واللوائح والسياسات التنفيذية المخصصة",
        "استشارات التدخل القيادي ومعالجة التحديات والمشاريع الحرجة"
      ],
      seo: {
        meta_title: "الاستشارات والتقييمات والدراسات التنفيذية | شروع",
        meta_description: "نطوّر الدراسات والتقييمات والأطر العملية التي تدعم القرارات التنفيذية، وتحول التحديات المؤسسية إلى مسارات واضحة وقابلة للتنفيذ.",
        meta_keywords: "دراسات تنفيذية, تقييم النضج, استشارات قيادية, دراسات جدوى, أطر مؤسسية, جاهزية تشغيلية"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "المسار 04 • الدراسات والتقييمات التنفيذية",
          title: "دراسات وتقييمات عملية تحول التحديات إلى مسارات تنفيذ واضحة",
          subtitle: "لا نكتفي بالتنظير؛ بل نطوّر دراسات وأطراً تنفيذية معمقة تدعم قرارات القيادة وتوفر حلولاً واقعية قابلة للتطبيق والقياس.",
          primaryCtaText: "طلب دراسة أو تقييم تنفيذي",
          primaryCtaLink: "/contact?service=advisory-assessments-and-executive-studies",
          secondaryCtaText: "استعراض المنهجية",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "shared.challenges-section",
          title: "أبرز الحالات التي تستدعي التقييمات والدراسات التنفيذية",
          introText: "نوفر الرؤية العميقة التي تمكّن الإدارة العليا من اتخاذ القرارات الحاسمة بثقة.",
          challenges: [
            {
              pain: "الحاجة لإعادة هيكلة أو تغيير جذري دون وضوح التبعات التشغيلية",
              solution: "دراسة تشخيصية شاملة للوضع الراهن وتصميم خيارات الانتقال الآمن",
              result: "خطة تحول واضحة المعالم بأقل قدر من المخاطر"
            },
            {
              pain: "غياب معايير قياس الجاهزية قبل إطلاق المبادرات والبرامج الكبرى",
              solution: "تقييم جاهزية دقيق وفق أطر معتمدة ومؤشرات قياس محددة",
              result: "انطلاق سلس للمبادرات وتفادي التعثر المبكر"
            },
            {
              pain: "الحاجة لأطر عمل ولوائح مخصصة تلائم طبيعة عمل الجهة وسياقها",
              solution: "صياغة لوائح وأدلة تنظيمية مواءمة للأنظمة السعودية وأفضل الممارسات",
              result: "أطر عمل معتمدة وقابلة للتطبيق الفوري"
            }
          ]
        },
        {
          __component: "home.cta-footer",
          headline: "هل تواجه منظمتك تحدياً يتطلب دراسة أو تقييماً تنفيذاً متخصصاً؟",
          primaryButtonText: "احجز جلسة استشارية متخصصة",
          primaryButtonLink: "/contact?service=advisory-assessments-and-executive-studies"
        }
      ]
    },
    en: {
      title: "Advisory, Assessments & Executive Studies",
      slug: "advisory-assessments-and-executive-studies",
      badge: "Track 04 • Executive Studies & Advisory",
      shortDescription: "We develop practical studies, assessments, and actionable frameworks that empower executive decisions and transform institutional challenges into clear, executable roadmaps.",
      icon: "Award",
      order: 4,
      isFeatured: true,
      cardCtaText: "Explore Service Details",
      features: [
        "Operational readiness & institutional maturity gap assessments",
        "Custom executive studies, operating models, and feasibility analyses",
        "Designing actionable organizational frameworks, policies, and charters",
        "Executive intervention advisory and critical initiative turnarounds"
      ],
      seo: {
        meta_title: "Advisory, Assessments & Executive Studies | Shuru",
        meta_description: "Developing studies, assessments, and practical frameworks that support executive decisions and turn challenges into executable pathways.",
        meta_keywords: "executive studies, maturity assessment, leadership advisory, feasibility studies, organizational frameworks"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "Track 04 • Executive Advisory & Studies",
          title: "Practical studies and assessments turning challenges into actionable paths",
          subtitle: "We go beyond theoretical reports; we develop deep executive frameworks that empower leadership decisions with measurable solutions.",
          primaryCtaText: "Request an Assessment or Executive Study",
          primaryCtaLink: "/contact?service=advisory-assessments-and-executive-studies",
          secondaryCtaText: "Explore Methodology",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "Facing a complex organizational challenge requiring an executive study?",
          primaryButtonText: "Book an Advisory Session",
          primaryButtonLink: "/contact?service=advisory-assessments-and-executive-studies"
        }
      ]
    }
  }
];

async function pushServices() {
  console.log('🚀 Pushing 4 core services to https://cms.shuru.sa ...');

  // Fetch existing remote services to check documentIds
  const existingRes = await fetch(`${baseUrl}/services?locale=ar&populate=*&pagination[pageSize]=100`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  const existingData = await existingRes.json();
  const remoteEntries = existingData.data || [];
  console.log(`Found ${remoteEntries.length} existing services on remote.`);

  for (const item of servicesData) {
    const existing = remoteEntries.find((s) => s.slug === item.ar.slug);

    if (existing && existing.documentId) {
      console.log(`Updating existing Arabic service on remote: ${item.ar.title} (${existing.documentId})...`);
      const updateArRes = await fetch(`${baseUrl}/services/${existing.documentId}?locale=ar&status=published`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            title: item.ar.title,
            slug: item.ar.slug,
            badge: item.ar.badge,
            shortDescription: item.ar.shortDescription,
            icon: item.ar.icon,
            order: item.ar.order,
            isFeatured: item.ar.isFeatured,
            cardCtaText: item.ar.cardCtaText,
            features: item.ar.features,
            seo: item.ar.seo,
            blocks: item.ar.blocks
          }
        })
      });

      if (!updateArRes.ok) {
        const err = await updateArRes.text();
        console.error(`Failed to update Arabic service ${item.ar.slug}:`, err);
      } else {
        console.log(`✅ Updated Arabic: ${item.ar.title}`);
      }

      console.log(`Updating English translation on remote: ${item.en.title} (${existing.documentId})...`);
      const updateEnRes = await fetch(`${baseUrl}/services/${existing.documentId}?locale=en&status=published`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            title: item.en.title,
            slug: item.en.slug,
            badge: item.en.badge,
            shortDescription: item.en.shortDescription,
            icon: item.en.icon,
            order: item.en.order,
            isFeatured: item.en.isFeatured,
            cardCtaText: item.en.cardCtaText,
            features: item.en.features,
            seo: item.en.seo,
            blocks: item.en.blocks
          }
        })
      });

      if (!updateEnRes.ok) {
        const err = await updateEnRes.text();
        console.error(`Failed to update English service ${item.en.slug}:`, err);
      } else {
        console.log(`✅ Updated English: ${item.en.title}`);
      }
    } else {
      console.log(`Creating new Arabic service on remote: ${item.ar.title}...`);
      const createArRes = await fetch(`${baseUrl}/services?locale=ar&status=published`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            title: item.ar.title,
            slug: item.ar.slug,
            badge: item.ar.badge,
            shortDescription: item.ar.shortDescription,
            icon: item.ar.icon,
            order: item.ar.order,
            isFeatured: item.ar.isFeatured,
            cardCtaText: item.ar.cardCtaText,
            features: item.ar.features,
            seo: item.ar.seo,
            blocks: item.ar.blocks
          }
        })
      });

      if (!createArRes.ok) {
        const err = await createArRes.text();
        console.error(`Failed to create Arabic service ${item.ar.slug}:`, err);
        continue;
      }

      const createdArData = await createArRes.json();
      const documentId = createdArData.data?.documentId;
      console.log(`✅ Created Arabic: ${item.ar.title} (documentId: ${documentId})`);

      if (documentId) {
        console.log(`Creating English translation on remote: ${item.en.title}...`);
        const createEnRes = await fetch(`${baseUrl}/services/${documentId}?locale=en&status=published`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            data: {
              title: item.en.title,
              slug: item.en.slug,
              badge: item.en.badge,
              shortDescription: item.en.shortDescription,
              icon: item.en.icon,
              order: item.en.order,
              isFeatured: item.en.isFeatured,
              cardCtaText: item.en.cardCtaText,
              features: item.en.features,
              seo: item.en.seo,
              blocks: item.en.blocks
            }
          })
        });

        if (!createEnRes.ok) {
          const err = await createEnRes.text();
          console.error(`Failed to create English translation for ${item.en.slug}:`, err);
        } else {
          console.log(`✅ Created English: ${item.en.title}`);
        }
      }
    }
  }

  console.log('\n🎉 Finished pushing all 4 services to https://cms.shuru.sa !');
}

pushServices().catch(console.error);
