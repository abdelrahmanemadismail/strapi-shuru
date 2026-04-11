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
      title: "نحول الاستراتيجية إلى تنفيذ يمكن الوثوق به",
      subtitle: "ليست مشكلة المؤسسات نقص المشاريع… بل كثرتها. الفرق تعمل، المبادرات تبدأ، والتقارير تُرفع، لكن النتائج أقل من الجهد المبذول.\n\nنحن في شروع، لا نضيف إجراءات جديدة، بل نعيد تعريف كيف يُتخذ القرار التنفيذي لتصبح النتائج قابلة للتنبؤ.\n\nقيادتك تستحق وضوح النتائج… وليس الاجتهاد.",
      primaryCtaText: "استعرض الحلول",
      primaryCtaLink: "/solutions",
      secondaryCtaText: "تواصل معنا",
      secondaryCtaLink: "/contact"
    },
    {
      __component: "home.overview",
      title: "حلولنا تركز على النتائج الفعلية",
      introText: "نحن في شروع لا نضيف إجراءات جديدة، بل نعيد تعريف كيفية اتخاذ القرار التنفيذي لتصبح النتائج قابلة للتنبؤ.",
      ctaText: "اكتشف جميع الحلول",
      ctaLink: "/solutions",
      cards: [
        { title: "تشخيص الواقع", description: "قياس قيمة المبادرات الحالية", iconName: "Activity" },
        { title: "هندسة التنفيذ", description: "تصميم نموذج تنفيذ مخصص", iconName: "Target" },
        { title: "حوكمة رشيقة", description: "إجراءات تدعم سرعة التنفيذ", iconName: "Zap" },
        { title: "تمكين الفريق", description: "نقل القدرة والاستقلالية", iconName: "Check" }
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
      title: "We turn strategy into execution you can trust",
      subtitle: "The problem for organizations is not a lack of projects... but an abundance of them. Teams work, initiatives start, and reports are submitted, but the results fall short of the effort expended.\n\nAt Shuru, we don't add new procedures, but redefine how executive decisions are made so results become predictable.\n\nYour leadership deserves clarity in results... not guesswork.",
      primaryCtaText: "Explore Solutions",
      primaryCtaLink: "/solutions",
      secondaryCtaText: "Contact Us",
      secondaryCtaLink: "/contact"
    },
    {
      __component: "home.overview",
      title: "Our solutions focus on actual results",
      introText: "At Shuru, we don't add new procedures; we redefine how executive decisions are made to make outcomes predictable.",
      ctaText: "Discover all solutions",
      ctaLink: "/solutions",
      cards: [
        { title: "Assess Reality", description: "Measure the value of current initiatives", iconName: "Activity" },
        { title: "Execution Engineering", description: "Design a custom execution model", iconName: "Target" },
        { title: "Agile Governance", description: "Procedures that support execution speed", iconName: "Zap" },
        { title: "Team Enablement", description: "Transfer capability and independence", iconName: "Check" }
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
