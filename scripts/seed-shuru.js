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
      subtitle: "ليست مشكلة المؤسسات نقص المشاريع… بل كثرتها. الفرق تعمل، المبادرات تبدأ، والتقارير تُرفع، لكن النتائج أقل من الجهد المبذول. نحن لا نضيف إجراءات جديدة، بل نعيد تعريف كيف يُتخذ القرار التنفيذي لتصبح النتائج قابلة للتنبؤ.\n\nقيادتك تستحق وضوح النتائج… وليس الاجتهاد.",
      primaryCtaText: "استعرض الحلول",
      primaryCtaLink: "/solutions",
      secondaryCtaText: "تواصل معنا",
      secondaryCtaLink: "/contact"
    },
    {
      __component: "home.overview",
      title: "حلولنا تركز على النتائج الفعلية",
      introText: "نحن لا نضيف إجراءات جديدة، بل نعيد تعريف كيفية اتخاذ القرار التنفيذي لتصبح النتائج قابلة للتنبؤ.",
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
      title: "لماذا نختلف؟",
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
      headline: "هل أنت جاهز لضبط مسار التنفيذ؟",
      primaryButtonText: "اطلب جلسة استشارية",
      primaryButtonLink: "/consultation",
      alternativeText: "أو عبر الإيميل مباشرة: consult@shuru.sa",
      alternativeLink: "mailto:consult@shuru.sa"
    }
  ]
};

const testimonialsArabicData = [
  {
    quote: "أصبحت القرارات أسرع وأكثر وضوحاً، والفرق تعمل بثقة",
    author: "عميل A",
    locale: "ar",
    publishedAt: new Date().toISOString()
  },
  {
    quote: "المبادرات تنتهي كما خُطط لها… وليس كما اتفق عليها تحت الضغط",
    author: "عميل B",
    locale: "ar",
    publishedAt: new Date().toISOString()
  },
  {
    quote: "لوحات القيادة التنفيذية ساعدتنا على توجيه القيادة بدل المهام اليومية",
    author: "عميل C",
    locale: "ar",
    publishedAt: new Date().toISOString()
  }
];

async function seedData() {
  // Use the internal Strapi instance to seed data
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'info';

  try {
    console.log('Seeding Home Page in Arabic...');

    // Check if home page already exists in Arabic
    const existingHome = await app.documents('api::home.home').findFirst({
      filters: { locale: 'ar' }
    });

    if (existingHome) {
      console.log('Home page in Arabic already exists, updating...');
      await app.documents('api::home.home').update({
        documentId: existingHome.documentId,
        locale: 'ar',
        data: homeArabicData
      });
    } else {
      console.log('Creating Home page in Arabic...');
      await app.documents('api::home.home').create({
        data: homeArabicData
      });
    }

    console.log('Seeding Testimonials in Arabic...');
    for (const entry of testimonialsArabicData) {
      const existingTestimonial = await app.documents('api::testimonial.testimonial').findFirst({
        filters: { author: entry.author, locale: 'ar' }
      });

      if (!existingTestimonial) {
        await app.documents('api::testimonial.testimonial').create({
          data: entry
        });
        console.log(`Created testimonial for ${entry.author}`);
      } else {
        console.log(`Testimonial for ${entry.author} already exists`);
      }
    }

    console.log('\n✅ Seeding completed successfully!');
  } catch (error) {
    console.log('❌ Could not import seed data');
    console.error(error);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedData().catch((error) => {
  console.error(error);
  process.exit(1);
});
