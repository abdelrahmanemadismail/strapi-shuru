'use strict';

const token = '799604a0c950d4b9e7f5d71388d43bd9e3a38fa8018316db87085876f2f728253b0bac9bd83d905c86f6513d80b923a361b0f89c022160669555c0c90d124fb32e10004a97fa21d4490a1be00b4f243ad4174e5918665d4939c4ae660213caaa27524535fc2d2e4599197ed5ce241af99ea42870374dd3196a9060b1ca9ed6e1';
const baseUrl = 'https://cms.shuru.sa/api';

const expertsPageDataEn = {
  title: "Shuru Network of Experts & Advisors",
  badge: "Executive Advisory & Expert Practice",
  heroTitle: "Elite Transformation Leaders and Subject Matter Experts at Your Service",
  heroSubtitle: "We combine deep strategic advisory experience with on-the-ground operational expertise in Saudi Arabia to ensure measurable, sustainable outcomes.",
  heroPrimaryCtaText: "Request an Advisory Session",
  heroPrimaryCtaLink: "/request-info",
  heroSecondaryCtaText: "Explore Expert Directory",
  heroSecondaryCtaLink: "#experts-directory",
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
};

const expertsPageDataAr = {
  title: "صفحة الخبراء والمستشارين التنفيذيين",
  badge: "شبكة الخبراء والمستشارين التنفيذيين",
  heroTitle: "نخبة من قادة التنفيذ والتحول المؤسسي في خدمتك",
  heroSubtitle: "نجمع بين الخبرة الاستشارية العميقة والمعرفة الميدانية الدقيقة لبيئة الأعمال والأنظمة السعودية لضمان تحقيق نتائج موثوقة ومستدامة.",
  heroPrimaryCtaText: "طلب استشارة مع خبير",
  heroPrimaryCtaLink: "/request-info",
  heroSecondaryCtaText: "استعراض شبكة الخبراء",
  heroSecondaryCtaLink: "#experts-directory",
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
};

async function pushExpertsPageSingleType() {
  console.log('🚀 Pushing full data to Experts Page Single Type on https://cms.shuru.sa ...');

  // 1. Push English (en)
  console.log('Updating English (en) Experts Page Single Type...');
  const resEn = await fetch(`${baseUrl}/experts-page?locale=en&status=published`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: expertsPageDataEn })
  });

  if (!resEn.ok) {
    console.error('Failed to update English single type:', await resEn.text());
  } else {
    const jsonEn = await resEn.json();
    console.log(`✅ Successfully updated English (en) Single Type! (Document ID: ${jsonEn.data?.documentId})`);
  }

  // 2. Push Arabic (ar)
  console.log('\nUpdating Arabic (ar) Experts Page Single Type...');
  const resAr = await fetch(`${baseUrl}/experts-page?locale=ar&status=published`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: expertsPageDataAr })
  });

  if (!resAr.ok) {
    console.error('Failed to update Arabic single type:', await resAr.text());
  } else {
    const jsonAr = await resAr.json();
    console.log(`✅ Successfully updated Arabic (ar) Single Type! (Document ID: ${jsonAr.data?.documentId})`);
  }

  console.log('\n🎉 Finished pushing all data to Single Type on https://cms.shuru.sa !');
}

pushExpertsPageSingleType().catch(console.error);
