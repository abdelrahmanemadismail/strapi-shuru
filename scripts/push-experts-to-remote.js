'use strict';

const token = '799604a0c950d4b9e7f5d71388d43bd9e3a38fa8018316db87085876f2f728253b0bac9bd83d905c86f6513d80b923a361b0f89c022160669555c0c90d124fb32e10004a97fa21d4490a1be00b4f243ad4174e5918665d4939c4ae660213caaa27524535fc2d2e4599197ed5ce241af99ea42870374dd3196a9060b1ca9ed6e1';
const baseUrl = 'https://cms.shuru.sa/api';

const sampleExperts = [
  {
    ar: {
      name: "د. إبراهيم الفالح",
      slug: "dr-ibrahim-al-faleh",
      title: "قائد استشارات التحول ونماذج التشغيل",
      bio: "خبير تنفيذي يتمتع بأكثر من 18 عاماً في قيادة برامج التحول الاستراتيجي، وإعادة هيكلة مكاتب إدارة المشاريع (PMO)، وتصميم نماذج التشغيل المتطورة للجهات الحكومية والشركات الكبرى بالمملكة.",
      expertise: "الحوكمة ونماذج التشغيل, تأسيس وتطوير PMO, التخطيط الاستراتيجي, إدارة التغيير المؤسسي",
      certifications: "PfMP, PgMP, PMP, CMC, TOGAF 9.2",
      linkedin: "https://linkedin.com",
      order: 1,
      featured: true,
    },
    en: {
      name: "Dr. Ibrahim Al-Faleh",
      slug: "dr-ibrahim-al-faleh",
      title: "Transformation & Operating Models Lead Consultant",
      bio: "Executive advisor with 18+ years leading strategic transformations, PMO restructurings, and enterprise operating model designs across government entities and major corporations.",
      expertise: "Governance & Operating Models, PMO Setup & Maturity, Strategic Planning, Change Management",
      certifications: "PfMP, PgMP, PMP, CMC, TOGAF 9.2",
      linkedin: "https://linkedin.com",
      order: 1,
      featured: true,
    }
  },
  {
    ar: {
      name: "م. سارة المهيدب",
      slug: "eng-sarah-al-muhaidib",
      title: "كبير خبراء إدارة المحافظ والبرامج الاستراتيجية",
      bio: "متخصصة في مواءمة محافظ المشاريع الاستثمارية مع مستهدفات رؤية 2030، وتصميم لوحات المتابعة والتحكم التنفيذية للقيادات وتحقيق كفاءة الإنفاق.",
      expertise: "إدارة المحافظ والبرامج (PPM), قياس النضج المؤسسي, لوحات التحكم الذكية, إدارة المخاطر",
      certifications: "PgMP, PfMP, PMI-RMP, MoP Practitioner",
      linkedin: "https://linkedin.com",
      order: 2,
      featured: true,
    },
    en: {
      name: "Eng. Sarah Al-Muhaidib",
      slug: "eng-sarah-al-muhaidib",
      title: "Senior Strategic Portfolio & Program Expert",
      bio: "Specialist in aligning strategic investment portfolios with Vision 2030 objectives, designing executive command dashboards, and spending efficiency.",
      expertise: "Portfolio & Program Management (PPM), Organizational Maturity, Executive Dashboards, Risk Management",
      certifications: "PgMP, PfMP, PMI-RMP, MoP Practitioner",
      linkedin: "https://linkedin.com",
      order: 2,
      featured: true,
    }
  },
  {
    ar: {
      name: "أ. عبدالعزيز القحطاني",
      slug: "abdulaziz-al-qahtani",
      title: "مستشار أول في الذكاء الاصطناعي والتحول الرقمي",
      bio: "يقود مبادرات أتمتة العمليات الحكومية وهندسة البيانات التشغيلية وتطبيقات الذكاء الاصطناعي التوليدي لرفع كفاءة وسرعة اتخاذ القرار المؤسسي.",
      expertise: "الذكاء الاصطناعي المؤسسي, أتمتة العمليات (RPA), استراتيجيات البيانات, المنصات الرقمية",
      certifications: "CDMP (Data Management), AWS Certified Solutions Architect, ITIL 4",
      linkedin: "https://linkedin.com",
      order: 3,
      featured: true,
    },
    en: {
      name: "Abdulaziz Al-Qahtani",
      slug: "abdulaziz-al-qahtani",
      title: "Senior AI & Digital Transformation Advisor",
      bio: "Leading government workflow automation, operational data architectures, and generative AI integrations to accelerate executive decision-making.",
      expertise: "Enterprise AI, Workflow Automation (RPA), Data Strategy, Digital Platforms",
      certifications: "CDMP (Data Management), AWS Certified Solutions Architect, ITIL 4",
      linkedin: "https://linkedin.com",
      order: 3,
      featured: true,
    }
  },
  {
    ar: {
      name: "د. خالد السبيعي",
      slug: "dr-khaled-al-subaie",
      title: "خبير إدارة المنافع والقيمة المؤسسية",
      bio: "أكثر من 15 عاماً في قياس العائد على الاستثمار للمبادرات الوطنية، وتقييم الجدوى الاقتصادية الشاملة وتحليل أثر السياسات والقرارات الاستراتيجية.",
      expertise: "إدارة المنافع والقيمة, دراسات الجدوى والأثر, الاقتصاد التنفيذي, مؤشرات الأداء (KPIs)",
      certifications: "Benefits Management Practitioner, PMI-PBA, CFA Charterholder",
      linkedin: "https://linkedin.com",
      order: 4,
      featured: false,
    },
    en: {
      name: "Dr. Khaled Al-Subaie",
      slug: "dr-khaled-al-subaie",
      title: "Enterprise Value & Benefits Realization Expert",
      bio: "15+ years evaluating ROI for national initiatives, conducting economic feasibility studies, and analyzing policy and regulatory impacts.",
      expertise: "Value & Benefits Management, Feasibility & Impact Studies, Executive Economics, Key Performance Indicators",
      certifications: "Benefits Management Practitioner, PMI-PBA, CFA Charterholder",
      linkedin: "https://linkedin.com",
      order: 4,
      featured: false,
    }
  },
  {
    ar: {
      name: "أ. نورة الدوسري",
      slug: "noura-al-dossary",
      title: "مستشارة الحوكمة وإدارة المعرفة المؤسسية",
      bio: "متخصصة في بناء أطر نقل المعرفة المؤسسية، وهندسة السياسات واللوائح، وتأسيس مجتمعات الممارسة المهنية لتمكين فرق العمل الداخلية.",
      expertise: "إدارة المعرفة ونقل الخبرات, حوكمة اللوائح والسياسات, التمكين المؤسسي, تصميم النماذج التشغيلية",
      certifications: "CKP (Certified Knowledge Practitioner), CGEIT, Six Sigma Black Belt",
      linkedin: "https://linkedin.com",
      order: 5,
      featured: false,
    },
    en: {
      name: "Noura Al-Dossary",
      slug: "noura-al-dossary",
      title: "Governance & Knowledge Management Consultant",
      bio: "Specialist in knowledge transfer architectures, regulatory policy engineering, and institutional communities of practice across complex organizations.",
      expertise: "Knowledge Management & Transfer, Policy & Regulatory Governance, Organizational Enablement, Operating Models",
      certifications: "CKP (Certified Knowledge Practitioner), CGEIT, Six Sigma Black Belt",
      linkedin: "https://linkedin.com",
      order: 5,
      featured: false,
    }
  },
  {
    ar: {
      name: "م. فهد العصيمي",
      slug: "fahad-al-osaimi",
      title: "خبير التميز المؤسسي وتقييم النضج",
      bio: "مستشار معتمد في تقييم وتطبيق معايير التميز المؤسسي الوطنية والدولية، وتطوير أطر الحوكمة الرشيقة وتسريع تسليم المخرجات.",
      expertise: "تقييم النضج المؤسسي, معايير التميز المؤسسي, إعادة هندسة العمليات, الحوكمة الرشيقة (Agile)",
      certifications: "EFQM Assessor, Lean Six Sigma Master Black Belt, PMP, PMI-ACP",
      linkedin: "https://linkedin.com",
      order: 6,
      featured: false,
    },
    en: {
      name: "Eng. Fahad Al-Osaimi",
      slug: "fahad-al-osaimi",
      title: "Institutional Excellence & Maturity Assessment Expert",
      bio: "Certified advisor in assessing and applying national & international institutional excellence frameworks, agile governance, and accelerated delivery.",
      expertise: "Institutional Maturity Assessment, Business Process Re-engineering, Agile Governance, EFQM Framework",
      certifications: "EFQM Assessor, Lean Six Sigma Master Black Belt, PMP, PMI-ACP",
      linkedin: "https://linkedin.com",
      order: 6,
      featured: false,
    }
  }
];

const expertsPageData = {
  ar: {
    title: "شبكة خبراء ومستشاري شروع",
    slug: "experts",
    seo: {
      meta_title: "شبكة الخبراء والمستشارين التنفيذيين | شروع",
      meta_description: "نخبة من المستشارين والخبراء التنفيذيين المتخصصين في قيادة التحول، وبناء مكاتب إدارة المشاريع PMO، والحوكمة، والذكاء المؤسسي.",
      meta_keywords: "خبراء شروع, مستشارين تنفيذيين, إدارة مشاريع PMO, حوكمة, ذكاء مؤسسي, استشارات سعودية"
    },
    blocks: [
      {
        __component: "home.hero",
        badgeText: "شبكة الخبراء والمستشارين التنفيذيين",
        title: "نخبة من قادة التنفيذ والتحول المؤسسي في خدمتك",
        subtitle: "نجمع بين الخبرة الاستشارية العميقة والمعرفة الميدانية الدقيقة لبيئة الأعمال والأنظمة السعودية لضمان تحقيق نتائج موثوقة ومستدامة.",
        primaryCtaText: "طلب استشارة مع خبير",
        primaryCtaLink: "/request-info",
        secondaryCtaText: "استعراض نموذج تقديم الاستشارات",
        secondaryCtaLink: "#delivery-model"
      },
      {
        __component: "shared.challenges-section",
        title: "لماذا تستعين قيادات التحول بنخبة مستشاري شروع؟",
        introText: "نقدم خبرات تنفيذية حقيقية تتجاوز الاستشارات النظرية لتصنع فارقاً ميدانياً ملموساً.",
        challenges: [
          {
            pain: "الاعتماد على استشارات تنظيرية تفشل في التطبيق الميداني",
            solution: "خبراء مارسوا القيادة التنفيذية ويمتلكون خبرة محلية تفصيلية",
            result: "حلول واقعية قابلة للتطبيق من اليوم الأول"
          },
          {
            pain: "ضعف نقل المعرفة وبقاء المنظمة معتمدة دائماً على المستشار الخارجي",
            solution: "منهجية تمكين موازية تبني وتدرب الكفاءات الداخلية أثناء المشروع",
            result: "استقلالية تامة واستدامة للقدرات المؤسسية بعد انتهاء المشروع"
          },
          {
            pain: "تأخر الاستجابة وصعوبة مواءمة المستشارين الدوليين للأنظمة السعودية",
            solution: "شبكة خبراء معتمدين مرخصين ذوي دراية تامة بمستهدفات رؤية 2030",
            result: "مواءمة فورية وامتثال كامل للأنظمة واللوائح الوطنية"
          }
        ]
      },
      {
        __component: "shared.timeline-section",
        badge: "نموذج العمل المتدرج",
        title: "نموذج تقديم الاستشارات متعدد المستويات (4-Tier Model)",
        introText: "هيكل تنظيمي مرن يضمن التوجيه الاستراتيجي، والقيادة التشغيلية، والعمق التخصصي، والتمكين الداخلي.",
        steps: [
          {
            number: "01",
            title: "المستوى الأول: الشريك المشرف (Managing Partner)",
            description: "الإشراف الاستراتيجي الشامل، وضمان الجودة، وتوجيه القرارات الحرجة والمواءمة مع الإدارة العليا.",
            deliverable: "حوكمة المشروع والاعتماد النهائي للمخرجات"
          },
          {
            number: "02",
            title: "المستوى الثاني: قائد المسار الاستشاري (Engagement Lead)",
            description: "إدارة خطة التنفيذ الميدانية اليومية، ومتابعة فرق العمل، والتنسيق المباشر مع أصحاب المصلحة.",
            deliverable: "إدارة الخطة الزمنية وموثوقية التسليم"
          },
          {
            number: "03",
            title: "المستوى الثالث: الخبراء التخصصيون (Subject Matter Experts)",
            description: "تقديم الحلول الفنية العميقة في مجالات PMO، الحوكمة، الذكاء الاصطناعي، وإدارة المعرفة.",
            deliverable: "المخرجات الفنية التخصصية والأدلة المعيارية"
          },
          {
            number: "04",
            title: "المستوى الرابع: النظراء المؤسسيين (Client Counterparts)",
            description: "العمل التشاركي الميداني وتدريب وتمكين الفريق الداخلي لضمان استدامة الأثر ونقل المعرفة.",
            deliverable: "نقل المعرفة وتمكين الكوادر الداخلية"
          }
        ],
        ctaText: "احجز جلسة مع قيادة شروع الاستشارية",
        ctaLink: "/request-info"
      },
      {
        __component: "shared.faq-section",
        badge: "الأسئلة الشائعة",
        title: "أسئلة شائعة حول الاستعانة بخبراء شروع",
        introText: "كل ما تود معرفته عن آلية اختيار المستشارين ونموذج التعاقد والسرية.",
        items: [
          {
            question: "كيف يتم اختيار وتخصيص الخبير المناسب للمشروع؟",
            answer: "نقوم بدراسة الاحتياج المؤسسي بدقة وتحديد التحدي التنفيذي، ثم تخصيص الخبير الأكثر مواءمة من حيث الخبرة التخصصية ونوع القطاع."
          },
          {
            question: "هل يمكن التعاقد مع خبير محدد بصفة استشارية جزئية أو كاملة؟",
            answer: "نعم، نوفر نماذج تعاقد مرنة تشمل: إدارة المشاريع الكاملة، الاستشارات الموجهة، الجلسات الاستراتيجية، أو الإعارة الاستشارية الجزئية."
          },
          {
            question: "كيف تضمنون سرية البيانات والمعلومات المؤسسية؟",
            answer: "نلتزم بأعلى معايير السرية واتفاقيات عدم الإفصاح (NDA) الصارمة والموقعة قبل بدء أي مرحلة تشخيصية أو تنفيذية."
          }
        ],
        contactText: "هل تبحث عن خبير في تخصص محدد؟",
        contactLinkText: "تواصل مع فريق إدارة الخبراء",
        contactLink: "/contact"
      },
      {
        __component: "home.cta-footer",
        headline: "جاهز للاستعانة بنخبة من أفضل الخبراء التنفيذيين؟",
        primaryButtonText: "طلب اجتماع استشاري مع خبير",
        primaryButtonLink: "/request-info"
      }
    ]
  },
  en: {
    title: "Shuru Network of Experts & Advisors",
    slug: "experts",
    seo: {
      meta_title: "Network of Senior Experts & Executive Advisors | Shuru",
      meta_description: "A premier network of executive consultants and subject matter experts specializing in transformation leadership, PMO, governance, and enterprise intelligence.",
      meta_keywords: "Shuru experts, executive advisors, PMO consultants, governance, enterprise AI, Saudi consulting"
    },
    blocks: [
      {
        __component: "home.hero",
        badgeText: "Executive Advisory & Expert Network",
        title: "Elite Transformation Leaders and Subject Matter Experts at Your Service",
        subtitle: "We combine deep strategic advisory experience with on-the-ground operational expertise in Saudi Arabia to ensure measurable, sustainable outcomes.",
        primaryCtaText: "Request an Advisory Session",
        primaryCtaLink: "/request-info",
        secondaryCtaText: "Explore Delivery Model",
        secondaryCtaLink: "#delivery-model"
      },
      {
        __component: "home.cta-footer",
        headline: "Ready to engage top executive advisors for your next initiative?",
        primaryButtonText: "Request Expert Consultation",
        primaryButtonLink: "/request-info"
      }
    ]
  }
};

async function pushExpertsAndPage() {
  console.log('🚀 Pushing Experts and Experts Page to https://cms.shuru.sa ...');

  // 1. Push Experts
  const existingExpertsRes = await fetch(`${baseUrl}/experts?locale=ar&pagination[pageSize]=100`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const existingExpertsJson = await existingExpertsRes.json();
  const remoteExperts = existingExpertsJson.data || [];
  console.log(`Found ${remoteExperts.length} existing experts on remote.`);

  for (const exp of sampleExperts) {
    const existing = remoteExperts.find((e) => e.slug === exp.ar.slug);
    if (existing && existing.documentId) {
      console.log(`Updating Arabic expert: ${exp.ar.name} (${existing.documentId})...`);
      await fetch(`${baseUrl}/experts/${existing.documentId}?locale=ar&status=published`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: exp.ar })
      });

      console.log(`Updating English expert: ${exp.en.name} (${existing.documentId})...`);
      await fetch(`${baseUrl}/experts/${existing.documentId}?locale=en&status=published`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: exp.en })
      });
      console.log(`✅ Updated Expert: ${exp.ar.name}`);
    } else {
      console.log(`Creating Arabic expert: ${exp.ar.name}...`);
      const createRes = await fetch(`${baseUrl}/experts?locale=ar&status=published`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: exp.ar })
      });

      if (createRes.ok) {
        const createdJson = await createRes.json();
        const docId = createdJson.data?.documentId;
        if (docId) {
          console.log(`Creating English translation for: ${exp.en.name}...`);
          await fetch(`${baseUrl}/experts/${docId}?locale=en&status=published`, {
            method: 'PUT',
            headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: exp.en })
          });
          console.log(`✅ Created Expert: ${exp.ar.name} (${docId})`);
        }
      } else {
        console.error(`Failed to create expert ${exp.ar.name}:`, await createRes.text());
      }
    }
  }

  // 2. Push Page entry for 'experts'
  console.log('\n🚀 Pushing /experts Page Entry to Pages Collection...');
  const existingPagesRes = await fetch(`${baseUrl}/pages?filters[slug][$eq]=experts&locale=ar`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  const existingPagesJson = await existingPagesRes.json();
  const existingPage = existingPagesJson.data?.[0];

  if (existingPage && existingPage.documentId) {
    console.log(`Updating existing Experts page (${existingPage.documentId})...`);
    await fetch(`${baseUrl}/pages/${existingPage.documentId}?locale=ar&status=published`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: expertsPageData.ar })
    });
    await fetch(`${baseUrl}/pages/${existingPage.documentId}?locale=en&status=published`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: expertsPageData.en })
    });
    console.log(`✅ Updated Experts Page on remote.`);
  } else {
    console.log(`Creating new Experts page on remote...`);
    const createPageRes = await fetch(`${baseUrl}/pages?locale=ar&status=published`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: expertsPageData.ar })
    });

    if (createPageRes.ok) {
      const createdPageJson = await createPageRes.json();
      const pageDocId = createdPageJson.data?.documentId;
      if (pageDocId) {
        await fetch(`${baseUrl}/pages/${pageDocId}?locale=en&status=published`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: expertsPageData.en })
        });
        console.log(`✅ Created Experts Page on remote (${pageDocId}).`);
      }
    } else {
      console.error('Failed to create Experts page:', await createPageRes.text());
    }
  }

  console.log('\n🎉 Finished pushing all experts and experts page to https://cms.shuru.sa !');
}

pushExpertsAndPage().catch(console.error);
