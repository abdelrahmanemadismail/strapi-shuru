'use strict';

const expertsPageData = {
  ar: {
    title: "شبكة خبراء ومستشاري شروع",
    slug: "experts",
    locale: "ar",
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
    locale: "en",
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
        __component: "shared.challenges-section",
        title: "Why Transformation Leaders Partner with Shuru Experts",
        introText: "We offer practical executive capabilities that bridge strategic vision with on-the-ground execution.",
        challenges: [
          {
            pain: "Relying on theoretical advisory that falters during field deployment",
            solution: "Advisors who served as executive leaders with deep local knowledge",
            result: "Pragmatic, executable solutions ready from day one"
          },
          {
            pain: "Weak knowledge transfer keeping organizations reliant on external consultants",
            solution: "A parallel enablement methodology upskilling internal teams throughout the project",
            result: "Full independence and sustained internal capabilities post-engagement"
          },
          {
            pain: "Slow response times and international firms lacking alignment with Saudi regulations",
            solution: "Certified local experts fully aligned with Vision 2030 programs and regulations",
            result: "Immediate alignment and full compliance with national standards"
          }
        ]
      },
      {
        __component: "shared.timeline-section",
        badge: "Multi-Tier Delivery Model",
        title: "Structured 4-Tier Engagement Model",
        introText: "A proven organizational structure ensuring strategic oversight, operational drive, deep specialization, and internal upskilling.",
        steps: [
          {
            number: "01",
            title: "Tier 1: Managing Partner / Director",
            description: "High-level strategic oversight, quality assurance, steering critical decisions, and top management alignment.",
            deliverable: "Project governance and milestone sign-off"
          },
          {
            number: "02",
            title: "Tier 2: Engagement Lead",
            description: "Directing day-to-day operations, managing team tracks, and coordinating with key stakeholders.",
            deliverable: "Execution roadmap and delivery reliability"
          },
          {
            number: "03",
            title: "Tier 3: Subject Matter Experts (SMEs)",
            description: "Delivering deep technical mastery in PMO, Governance, Enterprise AI, and Knowledge Systems.",
            deliverable: "Technical blueprints and standard operating procedures"
          },
          {
            number: "04",
            title: "Tier 4: Client Counterparts",
            description: "Co-creation and on-the-ground upskilling to embed lasting capabilities and seamless knowledge transfer.",
            deliverable: "Knowledge transfer and internal enablement"
          }
        ],
        ctaText: "Schedule an Engagement Session",
        ctaLink: "/request-info"
      },
      {
        __component: "shared.faq-section",
        badge: "FAQ",
        title: "Frequently Asked Questions About Shuru Experts",
        introText: "Everything you need to know about expert allocation, engagement models, and confidentiality.",
        items: [
          {
            question: "How is the right expert selected for our engagement?",
            answer: "We assess your institutional goals and operational context, then match you with the advisor possessing the most relevant domain and sector expertise."
          },
          {
            question: "Can we engage an expert on a fractional or interim basis?",
            answer: "Yes, we provide flexible engagement formats: full PMO buildouts, targeted advisory, executive coaching, or fractional leadership."
          },
          {
            question: "How do you protect data and strategic confidentiality?",
            answer: "We enforce rigorous NDAs and data governance protocols before commencing any discovery or advisory phase."
          }
        ],
        contactText: "Looking for an expert with a specific specialization?",
        contactLinkText: "Contact Expert Practice Lead",
        contactLink: "/contact"
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

async function seedExpertsPage() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'info';

  try {
    console.log('🚀 Seeding Experts Page in Pages Collection...');

    const existingPageAr = await app.documents('api::page.page').findFirst({
      filters: { slug: 'experts', locale: 'ar' }
    });

    let baseDocumentId;

    if (existingPageAr) {
      baseDocumentId = existingPageAr.documentId;
      console.log(`Updating existing Experts page (${baseDocumentId})...`);
      await app.documents('api::page.page').update({
        documentId: baseDocumentId,
        locale: 'ar',
        data: expertsPageData.ar,
        status: 'published'
      });

      await app.documents('api::page.page').update({
        documentId: baseDocumentId,
        locale: 'en',
        data: expertsPageData.en,
        status: 'published'
      });
      console.log('✅ Updated Experts Page in ar and en.');
    } else {
      console.log('Creating new Experts page...');
      const createdAr = await app.documents('api::page.page').create({
        locale: 'ar',
        data: expertsPageData.ar,
        status: 'published'
      });
      baseDocumentId = createdAr.documentId;
      console.log(`Created Arabic Experts page (${baseDocumentId})`);

      await app.documents('api::page.page').update({
        documentId: baseDocumentId,
        locale: 'en',
        data: expertsPageData.en,
        status: 'published'
      });
      console.log('Created English Experts page.');
    }

    console.log('\n🎉 Experts page successfully seeded and published!');
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (err) {
    console.error('❌ Error seeding experts page:', err);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedExpertsPage().catch(console.error);
