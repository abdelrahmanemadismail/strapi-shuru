'use strict';

const sampleServices = [
  {
    ar: {
      title: "استشارات الجودة والتميز المؤسسي",
      slug: "quality-and-excellence",
      badge: "المسار 01 • التميز والجودة",
      shortDescription: "بناء منظومة جودة متكاملة وتأهيل المؤسسات لشهادات الاعتماد العالمية وتحسين الكفاءة التشغيلية بما يضمن تميزاً مستداماً.",
      icon: "Award",
      order: 1,
      isFeatured: true,
      cardCtaText: "استكشف تفاصيل الخدمة",
      features: [
        "تأهيل واعتماد المعايير الدولية: EFQM, ISO 9001, Six Sigma, Lean",
        "تقييم الأداء المؤسسي وسد الفجوات التشغيلية",
        "هندسة وتوثيق الإجراءات المؤسسية وتطوير أدلة العمليات",
        "ترسيخ ثقافة التميز والتحسين المستمر لدى فرق العمل"
      ],
      seo: {
        meta_title: "استشارات الجودة والتميز المؤسسي | شروع",
        meta_description: "خدمات متخصصة في الجودة والتميز المؤسسي وتطبيق معايير EFQM و ISO 9001 لرفع كفاءة الأداء وضمان الاستدامة.",
        meta_keywords: "جودة, تميز مؤسسي, ISO 9001, EFQM, Lean, Six Sigma, تطوير مؤسسي"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "المسار الأول • استشارات الجودة والتميز",
          title: "نبني منظومات جودة تصنع تميزاً حقيقياً لا مجرد شهادات",
          subtitle: "نساعد الجهات الحكومية والشركات الرائدة على تحقيق أقصى درجات الكفاءة التشغيلية والارتقاء بالأداء عبر أحدث المنهجيات والمعايير الدولية المعتمدة.",
          primaryCtaText: "طلب هذه الخدمة",
          primaryCtaLink: "/contact?service=quality-and-excellence",
          secondaryCtaText: "استعراض مسارات المنهجية",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "shared.challenges-section",
          title: "التحديات التي تعالجها هذه الخدمة",
          introText: "نحول نقاط الضعف الإجرائية والتشغيلية إلى فرص للنمو والريادة المؤسسية.",
          challenges: [
            {
              pain: "تكرار الأخطاء التشغيلية وضعف توثيق الإجراءات بين الإدارات",
              solution: "هندسة شاملة للعمليات وتطبيق نماذج الجودة الموحدة",
              result: "انخفاض الأخطاء الإجرائية بنسبة تتجاوز 70%"
            },
            {
              pain: "الحصول على شهادات الجودة دون انعكاس حقيقي على تجربة المستفيد",
              solution: "ربط معايير الجودة بمؤشرات الأداء اللحظية ورحلة العميل",
              result: "ارتفاع مؤشر رضا المستفيدين والأثر الميداني"
            },
            {
              pain: "مقاومة التغيير وصعوبة تبني فرق العمل للإجراءات الجديدة",
              solution: "ورش عمل تطبيقية وتدريب ميداني لقيادات الصف الثاني",
              result: "ثقافة مؤسسية ذاتية التحسين والالتزام"
            }
          ]
        },
        {
          __component: "shared.timeline-section",
          badge: "مراحل التنفيذ",
          title: "منهجية العمل خطوة بخطوة",
          introText: "مسار عمل منظم وموثوق يضمن انتقالاً سلساً نحو أعلى معايير الجودة.",
          steps: [
            {
              number: "01",
              title: "التقييم الشامل والتشخيص",
              description: "دراسة الوضع الراهن وإجراء الفحص المؤسسي وتحديد الفجوات مقارنة بالمعايير العالمية.",
              deliverable: "تقرير تقييم الفجوات وخطة المعالجة"
            },
            {
              number: "02",
              title: "تصميم وهندسة المنظومة",
              description: "إعادة تصميم العمليات، وتطوير السياسات، وتحديد مؤشرات الجودة ومصفوفات المسؤوليات.",
              deliverable: "دليل العمليات وسياسات الجودة المعتمدة"
            },
            {
              number: "03",
              title: "التطبيق التجريبي والتمكين",
              description: "تطبيق المنظومة على إدارات تجريبية وتدريب فرق العمل وسفراء الجودة الداخليين.",
              deliverable: "جلسات التدريب ومخرجات القياس التجريبي"
            },
            {
              number: "04",
              title: "التدقيق والتأهيل للاعتماد",
              description: "إجراء التدقيق الداخلي وإغلاق الملاحظات والاستعداد النهائي للجهات المانحة للاعتماد.",
              deliverable: "تقرير الجاهزية والحصول على الاعتماد"
            }
          ],
          ctaText: "احجز جلسة نقاش للمشروع",
          ctaLink: "/contact?service=quality-and-excellence"
        },
        {
          __component: "shared.faq-section",
          badge: "الأسئلة الشائعة",
          title: "كل ما تود معرفته عن استشارات الجودة",
          introText: "إجابات واضحة عن نطاق العمل والمدة الزمنية ومخرجات المشروع.",
          items: [
            {
              question: "ما هي المدة المتوقعة لمشروع تأهيل الجودة والتميز المؤسسي؟",
              answer: "تتراوح المدة عادة بين 3 إلى 6 أشهر اعتماداً على حجم المنظمة ونطاق العمل ومستوى الجاهزية الحالية."
            },
            {
              question: "هل تقدم شروع الدعم بعد الحصول على شهادة الاعتماد؟",
              answer: "نعم، نقدم برامج متابعة دورية ومراجعات سنوية لضمان استدامة تطبيق المعايير ومواكبة التحديثات."
            },
            {
              question: "هل يتم تدريب كوادرنا الداخلية أثناء المشروع؟",
              answer: "التدريب ونقل المعرفة ركن أساسي في منهجيتنا، حيث نؤهل فريقاً داخلياً قادراً على إدارة وتدقيق الجودة ذاتياً."
            }
          ],
          contactText: "لديك استفسار خاص بمنظمتك؟",
          contactLinkText: "تحدث مع مستشارنا الآن",
          contactLink: "/contact"
        },
        {
          __component: "home.cta-footer",
          headline: "جاهز لبناء منظومة جودة متكاملة لمنظمتك؟",
          primaryButtonText: "احجز جلسة استشارية متخصصة",
          primaryButtonLink: "/contact?service=quality-and-excellence"
        }
      ]
    },
    en: {
      title: "Quality & Institutional Excellence Consulting",
      slug: "quality-and-excellence",
      badge: "Track 01 • Excellence & Quality",
      shortDescription: "Building comprehensive quality management systems, qualifying entities for international accreditations, and optimizing operational efficiency for sustainable excellence.",
      icon: "Award",
      order: 1,
      isFeatured: true,
      cardCtaText: "Explore Service Details",
      features: [
        "International standards qualification: EFQM, ISO 9001, Six Sigma, Lean",
        "Institutional performance assessment & operational gap analysis",
        "Process engineering, documentation & standard operating procedures (SOPs)",
        "Instilling continuous improvement culture across teams"
      ],
      seo: {
        meta_title: "Quality & Institutional Excellence Advisory | Shuru",
        meta_description: "Specialized quality and institutional excellence services implementing EFQM and ISO 9001 standards to maximize operational efficiency and impact.",
        meta_keywords: "quality, institutional excellence, ISO 9001, EFQM, Lean, Six Sigma, organizational development"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "Track 01 • Quality & Excellence Advisory",
          title: "We build quality frameworks that create real impact, not just certificates",
          subtitle: "Empowering government entities and enterprise leaders to reach peak operational efficiency and sustainable performance through world-class methodologies.",
          primaryCtaText: "Request This Service",
          primaryCtaLink: "/contact?service=quality-and-excellence",
          secondaryCtaText: "Explore Methodology",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "shared.challenges-section",
          title: "Challenges Addressed by This Service",
          introText: "We turn procedural and operational bottlenecks into sustainable growth opportunities.",
          challenges: [
            {
              pain: "Recurring operational errors and poor cross-department documentation",
              solution: "End-to-end process re-engineering and unified quality standards",
              result: "70%+ reduction in procedural errors"
            },
            {
              pain: "Certifications obtained without visible impact on user experience",
              solution: "Linking quality standards directly to real-time KPIs and customer journeys",
              result: "Significant increase in beneficiary satisfaction scores"
            },
            {
              pain: "Change resistance and difficulties adopting new operating procedures",
              solution: "Hands-on workshops, enablement, and champion mentoring",
              result: "Self-sustaining quality and compliance culture"
            }
          ]
        },
        {
          __component: "shared.timeline-section",
          badge: "Execution Phases",
          title: "Step-by-step Delivery Methodology",
          introText: "Structured and reliable phases ensuring smooth transition to peak quality.",
          steps: [
            {
              number: "01",
              title: "Comprehensive Diagnosis & Gap Analysis",
              description: "Assessing current state, auditing existing workflows, and benchmarking against international standards.",
              deliverable: "Gap analysis report & remediation roadmap"
            },
            {
              number: "02",
              title: "System Design & Process Architecture",
              description: "Re-designing workflows, drafting policies, setting quality metrics, and defining responsibility matrices.",
              deliverable: "Certified SOP manual & governance policies"
            },
            {
              number: "03",
              title: "Pilot Implementation & Enablement",
              description: "Testing systems on pilot departments and training internal quality champions.",
              deliverable: "Training records & pilot measurement findings"
            },
            {
              number: "04",
              title: "Internal Audit & Accreditation Readiness",
              description: "Executing mock audits, closing findings, and final preparation for certification bodies.",
              deliverable: "Audit readiness report & accreditation achievement"
            }
          ],
          ctaText: "Schedule a Project Discussion",
          ctaLink: "/contact?service=quality-and-excellence"
        },
        {
          __component: "shared.faq-section",
          badge: "FAQ",
          title: "Frequently Asked Questions",
          introText: "Clear answers regarding project scope, timelines, and deliverables.",
          items: [
            {
              question: "What is the typical timeframe for a quality qualification project?",
              answer: "Projects typically range from 3 to 6 months depending on organizational size and baseline readiness."
            },
            {
              question: "Does Shuru provide post-accreditation support?",
              answer: "Yes, we provide periodic follow-up reviews and annual health checks to ensure sustained compliance."
            },
            {
              question: "Will internal teams receive training during the engagement?",
              answer: "Hands-on knowledge transfer is fundamental; we train internal champions to manage and audit independently."
            }
          ],
          contactText: "Have a specific question for your organization?",
          contactLinkText: "Speak with our consultant",
          contactLink: "/contact"
        },
        {
          __component: "home.cta-footer",
          headline: "Ready to build a premier quality management system?",
          primaryButtonText: "Book an Advisory Session",
          primaryButtonLink: "/contact?service=quality-and-excellence"
        }
      ]
    }
  },
  {
    ar: {
      title: "استشارات إدارة الاستراتيجية والأداء",
      slug: "strategy-management",
      badge: "المسار 02 • الاستراتيجية والأداء",
      shortDescription: "تحويل الرؤى والأهداف الكبرى إلى خرائط طريق تنفيذية قابلة للقياس، وبناء لوحات تحكم ذكية لمتابعة الأداء الاستراتيجي واتخاذ القرارات.",
      icon: "LineChart",
      order: 2,
      isFeatured: true,
      cardCtaText: "استكشف تفاصيل الخدمة",
      features: [
        "صياغة وتحديث الخطط الاستراتيجية وربطها بمستهدفات رؤية 2030",
        "تطوير بطاقات الأداء المتوازن (Balanced Scorecard) ومؤشرات KPIs",
        "تصميم لوحات المتابعة التنفيذية للقيادة العليا",
        "إعادة ترتيب الأولويات وتوزيع الموارد على المبادرات الأعلى أثراً"
      ],
      seo: {
        meta_title: "استشارات إدارة الاستراتيجية والأداء | شروع",
        meta_description: "تطوير الاستراتيجيات المؤسسية وبطاقات الأداء المتوازن ومؤشرات KPIs وربط الرؤية بالتنفيذ الميداني الفعال.",
        meta_keywords: "تخطيط استراتيجي, إدارة الأداء, KPIs, بطاقة الأداء المتوازن, رؤية 2030, حوكمة استراتيجية"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "المسار الثاني • الاستراتيجية والأداء",
          title: "استراتيجية واضحة وتنفيذ منضبط يقود نحو نتائج ملموسة",
          subtitle: "رؤية بدون خطة تنفيذ لا تصنع فارقاً. نمكّن قيادتكم من ربط الأهداف الاستراتيجية بالعمليات اليومية ومتابعة التقدم لحظة بلحظة.",
          primaryCtaText: "طلب استشارة استراتيجية",
          primaryCtaLink: "/contact?service=strategy-management",
          secondaryCtaText: "استعراض المنهجية",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "shared.challenges-section",
          title: "أبرز التحديات الاستراتيجية التي نحلها",
          introText: "نزيل الفجوة بين طموحات القيادة والواقع التشغيلي للمنظمة.",
          challenges: [
            {
              pain: "وجود خطط استراتيجية في الأدراج دون تنفيذ حقيقي على الأرض",
              solution: "ترجمة الأهداف إلى مبادرات ذات ميزانيات وجداول زمنية ومسؤوليات محددة",
              result: "تحول 100% من المستهدفات إلى خطط عمل تشغيلية"
            },
            {
              pain: "تضارب مؤشرات الأداء وعدم وضوح العائد الفعلي من المبادرات",
              solution: "بناء شجرة مؤشرات أداء متكاملة (KPIs) مرتبطة بالأثر المالي والمؤسسي",
              result: "وضوح لحظي لتقدم كل مبادرة بدقة عالية"
            },
            {
              pain: "صعوبة قياس ومتابعة مستهدفات رؤية المملكة 2030",
              solution: "مواءمة دقيقة مع برامج تحقيق الرؤية والمتطلبات الرقابية",
              result: "توافق كامل وتقارير امتثال دورية جاهزة"
            }
          ]
        },
        {
          __component: "home.cta-footer",
          headline: "هل ترغب في مراجعة وتحديث خطتك الاستراتيجية؟",
          primaryButtonText: "احجز جلسة استكشافية",
          primaryButtonLink: "/contact?service=strategy-management"
        }
      ]
    },
    en: {
      title: "Strategy & Performance Management Advisory",
      slug: "strategy-management",
      badge: "Track 02 • Strategy & Performance",
      shortDescription: "Translating vision and strategic goals into actionable roadmaps, and establishing smart executive dashboards to monitor organizational KPIs and drive decisions.",
      icon: "LineChart",
      order: 2,
      isFeatured: true,
      cardCtaText: "Explore Service Details",
      features: [
        "Strategic formulation & alignment with Vision 2030 objectives",
        "Balanced Scorecard (BSC) & KPI architecture design",
        "Executive leadership command dashboards & real-time monitoring",
        "Resource allocation optimization for high-impact initiatives"
      ],
      seo: {
        meta_title: "Strategy & Performance Management Consulting | Shuru",
        meta_description: "Strategic planning, Balanced Scorecards, KPIs, and executive performance governance designed for measurable impact.",
        meta_keywords: "strategic planning, performance management, KPIs, Balanced Scorecard, Vision 2030, strategy execution"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "Track 02 • Strategy & Performance Advisory",
          title: "Clear strategy and disciplined execution delivering measurable results",
          subtitle: "Strategy without execution delivers zero value. We help leaders link high-level goals with daily operations and monitor milestones in real-time.",
          primaryCtaText: "Request Strategy Advisory",
          primaryCtaLink: "/contact?service=strategy-management",
          secondaryCtaText: "Explore Methodology",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "Ready to review and optimize your strategic roadmap?",
          primaryButtonText: "Book an Advisory Session",
          primaryButtonLink: "/contact?service=strategy-management"
        }
      ]
    }
  },
  {
    ar: {
      title: "استشارات إدارة المحافظ والبرامج والمشاريع (PMO)",
      slug: "pmo-and-portfolio-management",
      badge: "المسار 03 • إدارة المشاريع PMO",
      shortDescription: "تأسيس وتطوير مكاتب إدارة المشاريع والمحافظ الاستثمارية، وضبط الجداول الزمنية والميزانيات لضمان تحقيق أعلى قيمة مضافة.",
      icon: "Cpu",
      order: 3,
      isFeatured: true,
      cardCtaText: "استكشف تفاصيل الخدمة",
      features: [
        "تأسيس وإعادة هيكلة مكاتب إدارة المشاريع والمحافظ (PMO / VMO / EPMO)",
        "تطبيق المعايير العالمية: PMI, PRINCE2, Agile, SAFe",
        "إدارة المخاطر التشغيلية وضبط التكاليف والجداول الزمنية",
        "بناء وتأهيل مدراء المشاريع وفرق العمل الميدانية"
      ],
      seo: {
        meta_title: "استشارات إدارة المحافظ والبرامج والمشاريع PMO | شروع",
        meta_description: "تأسيس مكاتب إدارة المشاريع PMO وإدارة المحافظ الاستراتيجية وفق أحدث الممارسات العالمية PMI و Agile.",
        meta_keywords: "PMO, إدارة مشاريع, إدارة محافظ, EPMO, Agile, PRINCE2, PMP, حوكمة المشاريع"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "المسار الثالث • مكاتب المشاريع والمحافظ",
          title: "حوكمة وإدارة المشاريع لضمان التسليم في الوقت والميزانية",
          subtitle: "نحول مكاتب إدارة المشاريع من مجرد جامعي تقارير إلى محركات تنفيذية حقيقية تحقق القيمة المرجوة من كل استثمار.",
          primaryCtaText: "طلب استشارة PMO",
          primaryCtaLink: "/contact?service=pmo-and-portfolio-management",
          secondaryCtaText: "استعراض المنهجية",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "هل تعاني مشاريعك من التأخير أو تجاوز الميزانيات؟",
          primaryButtonText: "تواصل مع خبير PMO",
          primaryButtonLink: "/contact?service=pmo-and-portfolio-management"
        }
      ]
    },
    en: {
      title: "PPM & Project Management Office (PMO) Consulting",
      slug: "pmo-and-portfolio-management",
      badge: "Track 03 • PMO & Portfolio",
      shortDescription: "Establishing and maturing Project & Portfolio Management Offices, governing project schedules and budgets, and maximizing return on investments.",
      icon: "Cpu",
      order: 3,
      isFeatured: true,
      cardCtaText: "Explore Service Details",
      features: [
        "PMO / VMO / EPMO setup, restructuring, and maturity assessment",
        "Implementing global standards: PMI, PRINCE2, Agile, SAFe",
        "Operational risk mitigation, budget control, and schedule governance",
        "Project manager capability building and hands-on enablement"
      ],
      seo: {
        meta_title: "PMO & Portfolio Management Consulting | Shuru",
        meta_description: "Enterprise PMO setup and portfolio governance ensuring projects are delivered on time and within budget.",
        meta_keywords: "PMO, project management, portfolio management, Agile, PRINCE2, PMI, EPMO"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "Track 03 • PMO & Portfolio Consulting",
          title: "Governing projects to ensure on-time and on-budget delivery",
          subtitle: "We transform PMOs from passive reporting centers into active execution engines that maximize the ROI of every initiative.",
          primaryCtaText: "Request PMO Advisory",
          primaryCtaLink: "/contact?service=pmo-and-portfolio-management",
          secondaryCtaText: "Explore Methodology",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "Are your projects suffering from delays or budget overruns?",
          primaryButtonText: "Connect with a PMO Expert",
          primaryButtonLink: "/contact?service=pmo-and-portfolio-management"
        }
      ]
    }
  },
  {
    ar: {
      title: "استشارات التحول الرقمي وهندسة التقنية",
      slug: "digital-transformation",
      badge: "المسار 04 • التحول الرقمي",
      shortDescription: "صياغة استراتيجيات التحول الرقمي، وهندسة الإجراءات المؤتمتة، واختيار وتطبيق الحلول التقنية والذكاء الاصطناعي المؤسسي.",
      icon: "Zap",
      order: 4,
      isFeatured: true,
      cardCtaText: "استكشف تفاصيل الخدمة",
      features: [
        "استراتيجيات التحول الرقمي ومواءمتها مع الأهداف المؤسسية",
        "تطبيق الأطر والمعايير المعتمدة: ITIL, COBIT, DGA, ISO 27001",
        "أتمتة العمليات والربط التكاملي بين الأنظمة والمنصات",
        "تطوير حالات استخدام الذكاء الاصطناعي التوليدي وتحليل البيانات"
      ],
      seo: {
        meta_title: "استشارات التحول الرقمي وهندسة التقنية | شروع",
        meta_description: "تصميم وتنفيذ استراتيجيات التحول الرقمي وأتمتة العمليات المؤسسية وتطبيقات الذكاء الاصطناعي.",
        meta_keywords: "تحول رقمي, أتمتة, ITIL, COBIT, حوكمة تقنية المعلومات, ذكاء اصطناعي, كفاءة رقمية"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "المسار الرابع • التحول الرقمي",
          title: "التحول الرقمي الفعال يبدأ من الإجراءات لا من البرمجيات",
          subtitle: "نساعد المنظمات على إعادة ابتكار نماذج عملها رقمياً وتوظيف أحدث أدوات الأتمتة والذكاء الاصطناعي لرفع الإنتاجية وخفض التكاليف.",
          primaryCtaText: "طلب استشارة التحول الرقمي",
          primaryCtaLink: "/contact?service=digital-transformation",
          secondaryCtaText: "استعراض المنهجية",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "هل تبحث عن تسريع وتيرة التحول الرقمي لمنظمتك؟",
          primaryButtonText: "تواصل مع مستشار التحول الرقمي",
          primaryButtonLink: "/contact?service=digital-transformation"
        }
      ]
    },
    en: {
      title: "Digital Transformation & Technology Consulting",
      slug: "digital-transformation",
      badge: "Track 04 • Digital Transformation",
      shortDescription: "Crafting digital transformation roadmaps, re-engineering automated workflows, and implementing enterprise AI and technology solutions.",
      icon: "Zap",
      order: 4,
      isFeatured: true,
      cardCtaText: "Explore Service Details",
      features: [
        "Digital transformation strategy aligned with enterprise goals",
        "Adopting accredited frameworks: ITIL, COBIT, DGA, ISO 27001",
        "Process automation (RPA) and cross-platform system integration",
        "Enterprise AI and advanced data analytics implementation"
      ],
      seo: {
        meta_title: "Digital Transformation & IT Advisory | Shuru",
        meta_description: "Enterprise digital transformation, workflow automation, and AI adoption services for measurable efficiency.",
        meta_keywords: "digital transformation, automation, ITIL, COBIT, IT governance, enterprise AI"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "Track 04 • Digital Transformation Advisory",
          title: "Effective digital transformation starts with workflows, not software",
          subtitle: "We help organizations re-engineer operations digitally and leverage automation and AI to boost productivity and reduce costs.",
          primaryCtaText: "Request Digital Advisory",
          primaryCtaLink: "/contact?service=digital-transformation",
          secondaryCtaText: "Explore Methodology",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "Looking to accelerate your digital transformation journey?",
          primaryButtonText: "Book an Advisory Session",
          primaryButtonLink: "/contact?service=digital-transformation"
        }
      ]
    }
  },
  {
    ar: {
      title: "استشارات إدارة التغيير والتمكين المؤسسي",
      slug: "change-management",
      badge: "المسار 05 • إدارة التغيير",
      shortDescription: "إدارة الجانب البشري في التحول المؤسسي، وبناء الجاهزية، وضمان تبني الموظفين والقيادات للأنظمة والنماذج الجديدة بسلاسة.",
      icon: "Users2",
      order: 5,
      isFeatured: false,
      cardCtaText: "استكشف تفاصيل الخدمة",
      features: [
        "تطبيق نموذج Prosci / ADKAR لإدارة التغيير المؤسسي",
        "تحليل أصحاب المصلحة وقياس مستوى الجاهزية للتغيير",
        "تصميم خطط التواصل الداخلي وحملات التوعية والتفاعل",
        "برامج تدريب وتمكين القيادات لإدارة التغيير بنجاح"
      ],
      seo: {
        meta_title: "استشارات إدارة التغيير والتمكين المؤسسي | شروع",
        meta_description: "إدارة التغيير المؤسسي وفق منهجية Prosci و ADKAR لضمان نجاح المبادرات التحولية والتبني الكامل.",
        meta_keywords: "إدارة التغيير, Prosci, ADKAR, تمكين الموظفين, ثقافة العمل, التحول المؤسسي"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "المسار الخامس • إدارة التغيير",
          title: "نضمن نجاح التحول بتمكين الإنسان ومواءمة الثقافة",
          subtitle: "أعظم الخطط تفشل إذا لم يتبناها الفريق. نوفر المنهجيات والأدوات التي تضمن انخراط الجميع وتبنيهم للتغيير بحماس وثقة.",
          primaryCtaText: "طلب استشارة إدارة التغيير",
          primaryCtaLink: "/contact?service=change-management",
          secondaryCtaText: "استعراض المنهجية",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "هل تواجه منظمتك مقاومة للتغيير في مشاريعها الكبرى؟",
          primaryButtonText: "احجز جلسة استشارية متخصصة",
          primaryButtonLink: "/contact?service=change-management"
        }
      ]
    },
    en: {
      title: "Change Management & Capability Enablement",
      slug: "change-management",
      badge: "Track 05 • Change Management",
      shortDescription: "Managing the people side of organizational transformation, building readiness, and ensuring leadership and staff adopt new models smoothly.",
      icon: "Users2",
      order: 5,
      isFeatured: false,
      cardCtaText: "Explore Service Details",
      features: [
        "Applying Prosci / ADKAR change management methodologies",
        "Stakeholder analysis & change readiness assessments",
        "Internal communications, engagement, and alignment plans",
        "Leadership enablement & change champion development"
      ],
      seo: {
        meta_title: "Change Management & Enablement Consulting | Shuru",
        meta_description: "Change management consulting utilizing Prosci and ADKAR frameworks to ensure high adoption of strategic transformations.",
        meta_keywords: "change management, Prosci, ADKAR, team enablement, culture, transformation"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "Track 05 • Change Management Advisory",
          title: "Ensuring transformation success by empowering people and aligning culture",
          subtitle: "The best strategies fail if teams don't embrace them. We provide the frameworks that secure engagement, alignment, and confidence.",
          primaryCtaText: "Request Change Advisory",
          primaryCtaLink: "/contact?service=change-management",
          secondaryCtaText: "Explore Methodology",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "Facing change resistance in your key transformation programs?",
          primaryButtonText: "Book an Advisory Session",
          primaryButtonLink: "/contact?service=change-management"
        }
      ]
    }
  },
  {
    ar: {
      title: "استشارات الحوكمة المؤسسية وإدارة المخاطر",
      slug: "governance-and-risk",
      badge: "المسار 06 • الحوكمة والمخاطر",
      shortDescription: "بناء أطر الحوكمة الرشيدة، وتحديد مصفوفات الصلاحيات، وإدارة المخاطر المؤسسية والامتثال للأنظمة والمعايير الرقابية الوطنية.",
      icon: "ShieldCheck",
      order: 6,
      isFeatured: false,
      cardCtaText: "استكشف تفاصيل الخدمة",
      features: [
        "تصميم أطر الحوكمة المؤسسية ومصفوفات الصلاحيات (Delegation of Authority)",
        "سجلات المخاطر المؤسسية واستراتيجيات المعالجة (Enterprise Risk Management)",
        "حوكمة اللجان والمجالس وتطوير لوائح العمل الداخلي",
        "ضمان الامتثال لمتطلبات الجهات التنظيمية والرقابية في المملكة"
      ],
      seo: {
        meta_title: "استشارات الحوكمة المؤسسية وإدارة المخاطر | شروع",
        meta_description: "بناء منظومات الحوكمة الرشيدة وإدارة المخاطر المؤسسية والامتثال للمتطلبات التنظيمية السعودية.",
        meta_keywords: "حوكمة, إدارة مخاطر, ERM, مصفوفة الصلاحيات, لجان, امتثال, حوكمة الشركات"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "المسار السادس • الحوكمة والمخاطر",
          title: "حوكمة رشيدة تحمي المكتسبات وتعزز سرعة اتخاذ القرار",
          subtitle: "الحوكمة ليست قيوداً بل حماية وتسريع للأعمال. نؤسس أطراً واضحة تمنح القيادة راحة البال والقدرة على الانطلاق بثقة.",
          primaryCtaText: "طلب استشارة الحوكمة",
          primaryCtaLink: "/contact?service=governance-and-risk",
          secondaryCtaText: "استعراض المنهجية",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "هل ترغب في تعزيز الحوكمة وإدارة المخاطر في منظمتك؟",
          primaryButtonText: "تواصل مع خبير الحوكمة",
          primaryButtonLink: "/contact?service=governance-and-risk"
        }
      ]
    },
    en: {
      title: "Corporate Governance & Enterprise Risk Advisory",
      slug: "governance-and-risk",
      badge: "Track 06 • Governance & Risk",
      shortDescription: "Establishing sound corporate governance frameworks, delegation of authority matrices, enterprise risk management, and regulatory compliance.",
      icon: "ShieldCheck",
      order: 6,
      isFeatured: false,
      cardCtaText: "Explore Service Details",
      features: [
        "Corporate governance frameworks & Delegation of Authority (DOA) design",
        "Enterprise Risk Management (ERM) registries & mitigation strategies",
        "Board & committee charter development and operational governance",
        "Regulatory compliance assurance for Saudi market standards"
      ],
      seo: {
        meta_title: "Corporate Governance & Risk Advisory | Shuru",
        meta_description: "Enterprise governance frameworks, risk registries, and regulatory compliance designed for resilience and agility.",
        meta_keywords: "governance, risk management, ERM, delegation of authority, committee charters, compliance"
      },
      blocks: [
        {
          __component: "home.hero",
          badgeText: "Track 06 • Governance & Risk Advisory",
          title: "Sound governance protecting assets and accelerating decision-making",
          subtitle: "Governance is not a bottleneck; it is an enabler. We build clear structures that give leadership confidence and operational peace of mind.",
          primaryCtaText: "Request Governance Advisory",
          primaryCtaLink: "/contact?service=governance-and-risk",
          secondaryCtaText: "Explore Methodology",
          secondaryCtaLink: "/methodology"
        },
        {
          __component: "home.cta-footer",
          headline: "Looking to strengthen governance and risk management?",
          primaryButtonText: "Book an Advisory Session",
          primaryButtonLink: "/contact?service=governance-and-risk"
        }
      ]
    }
  }
];

async function seedServices() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'info';

  try {
    console.log('🚀 Starting Services Seeding Process...');

    // 1. Grant public permissions for api::service.service
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      const actions = ['find', 'findOne'];
      for (const action of actions) {
        const existing = await strapi.query('plugin::users-permissions.permission').findOne({
          where: {
            action: `api::service.service.${action}`,
            role: publicRole.id,
          }
        });

        if (!existing) {
          await strapi.query('plugin::users-permissions.permission').create({
            data: {
              action: `api::service.service.${action}`,
              role: publicRole.id,
            }
          });
          console.log(`Granted public permission: api::service.service.${action}`);
        }
      }
    }

    // 2. Insert or update services in Arabic and English
    for (const item of sampleServices) {
      let existingAr = await strapi.documents('api::service.service').findFirst({
        filters: { slug: item.ar.slug },
        locale: 'ar',
      });

      let baseDocumentId;

      if (!existingAr) {
        const createdAr = await strapi.documents('api::service.service').create({
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
            blocks: item.ar.blocks,
          },
          locale: 'ar',
          status: 'published',
        });

        baseDocumentId = createdAr.documentId;
        console.log(`✅ Created Arabic Service: ${item.ar.title} (${baseDocumentId})`);

        if (baseDocumentId) {
          await strapi.documents('api::service.service').update({
            documentId: baseDocumentId,
            locale: 'en',
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
              blocks: item.en.blocks,
            },
            status: 'published',
          });
          console.log(`✅ Created English Translation for: ${item.en.title}`);
        }
      } else {
        baseDocumentId = existingAr.documentId;
        // Update both to ensure latest data
        await strapi.documents('api::service.service').update({
          documentId: baseDocumentId,
          locale: 'ar',
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
            blocks: item.ar.blocks,
          },
          status: 'published',
        });

        await strapi.documents('api::service.service').update({
          documentId: baseDocumentId,
          locale: 'en',
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
            blocks: item.en.blocks,
          },
          status: 'published',
        });
        console.log(`🔄 Updated Service: ${item.ar.title} (${baseDocumentId})`);
      }
    }

    console.log('🎉 Services seeding completed successfully!');
  } catch (err) {
    console.error('❌ Error seeding services:', err);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedServices().catch(console.error);
