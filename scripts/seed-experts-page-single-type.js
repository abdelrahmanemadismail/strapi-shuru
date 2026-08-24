'use strict';

const expertsPageData = {
  ar: {
    title: "صفحة الخبراء والمستشارين التنفيذيين",
    badge: "شبكة الخبراء والمستشارين التنفيذيين",
    heroTitle: "نخبة من قادة التنفيذ والتحول المؤسسي في خدمتك",
    heroSubtitle: "نجمع بين الخبرة الاستشارية العميقة والمعرفة الميدانية الدقيقة لبيئة الأعمال والأنظمة السعودية لضمان تحقيق نتائج موثوقة ومستدامة.",
    heroPrimaryCtaText: "طلب استشارة مع خبير",
    heroPrimaryCtaLink: "/request-info",
    heroSecondaryCtaText: "استعراض شبكة الخبراء",
    heroSecondaryCtaLink: "#experts-directory",
    trustMetrics: [
      { value: "+18", label: "سنة متوسط الخبرة الاستشارية" },
      { value: "100%", label: "خبراء معتمدون ومرخصون" },
      { value: "+50", label: "برنامج تحولي ومكتب PMO مُدار" }
    ],
    deliveryModelBadge: "نموذج العمل المتدرج",
    deliveryModelTitle: "نموذج تقديم الاستشارات متعدد المستويات (4-Tier Model)",
    deliveryModelSubtitle: "هيكل تشغيلي منظم يضمن الإشراف الاستراتيجي رفيع المستوى، والقيادة الميدانية، والعمق التخصصي، مع التركيز على بناء واستدامة القدرات الداخلية لمنظمتكم.",
    directoryBadge: "دليل الخبراء",
    directoryTitle: "جميع المستشارين والخبراء التخصصيين",
    directorySubtitle: "تصفح شبكة الخبراء حسب التخصص والاعتمادات المهنية أو ابحث بالاسم والمجال.",
    ctaBadge: "استشارة مخصصة",
    ctaHeadline: "هل تبحث عن مستشار تنفيذي يقود مبادرتكم القادمة؟",
    ctaDescription: "نساعدكم في تشخيص التحدي وتخصيص الكفاءة الاستشارية الأكثر ملاءمة لطبيعة مشروعكم وسياقه المؤسسي.",
    ctaButtonText: "طلب اجتماع استكشافي",
    ctaButtonLink: "/request-info",
    seo: {
      meta_title: "شبكة الخبراء والمستشارين التنفيذيين | شروع",
      meta_description: "نخبة من المستشارين والخبراء التنفيذيين المتخصصين في قيادة التحول، وبناء مكاتب إدارة المشاريع PMO، والحوكمة، والذكاء المؤسسي.",
      meta_keywords: "خبراء شروع, مستشارين تنفيذيين, إدارة مشاريع PMO, حوكمة, ذكاء مؤسسي, استشارات سعودية"
    },
    blocks: [
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
      }
    ]
  },
  en: {
    title: "Shuru Network of Experts & Advisors",
    badge: "Executive Advisory & Expert Practice",
    heroTitle: "Elite Transformation Leaders and Subject Matter Experts at Your Service",
    heroSubtitle: "We combine deep strategic advisory experience with on-the-ground operational expertise in Saudi Arabia to ensure measurable, sustainable outcomes.",
    heroPrimaryCtaText: "Request an Advisory Session",
    heroPrimaryCtaLink: "/request-info",
    heroSecondaryCtaText: "Explore Expert Directory",
    heroSecondaryCtaLink: "#experts-directory",
    trustMetrics: [
      { value: "+18", label: "Years Avg. Advisory Experience" },
      { value: "100%", label: "Certified & Licensed Experts" },
      { value: "+50", label: "Transformations & PMOs Delivered" }
    ],
    deliveryModelBadge: "4-Tier Delivery Model",
    deliveryModelTitle: "Structured 4-Tier Engagement Model",
    deliveryModelSubtitle: "A proven organizational framework ensuring strategic oversight, operational drive, deep technical specialization, and internal capability enablement.",
    directoryBadge: "Directory",
    directoryTitle: "All Senior Consultants & Subject Matter Experts",
    directorySubtitle: "Browse our expert network by domain and credentials or search by name and specialization.",
    ctaBadge: "Tailored Advisory",
    ctaHeadline: "Looking for an executive advisor to lead your next initiative?",
    ctaDescription: "We help diagnose your institutional challenge and allocate the expert best suited for your operating context.",
    ctaButtonText: "Request Discovery Session",
    ctaButtonLink: "/request-info",
    seo: {
      meta_title: "Network of Senior Experts & Executive Advisors | Shuru",
      meta_description: "A premier network of executive consultants and subject matter experts specializing in transformation leadership, PMO, governance, and enterprise intelligence.",
      meta_keywords: "Shuru experts, executive advisors, PMO consultants, governance, enterprise AI, Saudi consulting"
    },
    blocks: [
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
      }
    ]
  }
};

async function seedExpertsPageSingleType() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'info';

  try {
    console.log('🚀 Seeding Experts Page Single Type...');

    // 1. Grant public permission
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      const existing = await strapi.query('plugin::users-permissions.permission').findOne({
        where: {
          action: 'api::experts-page.experts-page.find',
          role: publicRole.id,
        }
      });

      if (!existing) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: 'api::experts-page.experts-page.find',
            role: publicRole.id,
          }
        });
        console.log('✅ Granted public permission: api::experts-page.experts-page.find');
      }
    }

    // 2. Seed Single Type for Arabic and English
    const existingAr = await app.documents('api::experts-page.experts-page').findFirst({
      locale: 'ar'
    });

    let baseDocumentId;

    if (existingAr) {
      baseDocumentId = existingAr.documentId;
      console.log(`Updating existing Experts Page Single Type (${baseDocumentId})...`);
      await app.documents('api::experts-page.experts-page').update({
        documentId: baseDocumentId,
        locale: 'ar',
        data: expertsPageData.ar,
        status: 'published'
      });

      await app.documents('api::experts-page.experts-page').update({
        documentId: baseDocumentId,
        locale: 'en',
        data: expertsPageData.en,
        status: 'published'
      });
      console.log('✅ Updated Experts Page Single Type in ar and en.');
    } else {
      console.log('Creating new Experts Page Single Type...');
      const createdAr = await app.documents('api::experts-page.experts-page').create({
        locale: 'ar',
        data: expertsPageData.ar,
        status: 'published'
      });
      baseDocumentId = createdAr.documentId;
      console.log(`Created Arabic Experts Page Single Type (${baseDocumentId})`);

      await app.documents('api::experts-page.experts-page').update({
        documentId: baseDocumentId,
        locale: 'en',
        data: expertsPageData.en,
        status: 'published'
      });
      console.log('Created English Experts Page Single Type.');
    }

    console.log('\n🎉 Experts Page Single Type successfully seeded and published!');
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (err) {
    console.error('❌ Error seeding experts page single type:', err);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedExpertsPageSingleType().catch(console.error);
