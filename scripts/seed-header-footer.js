'use strict';

const headerArabicData = {
  locale: "ar",
  navigation: {
    primaryMenuItems: [
      { label: "الرئيسية", url: "/", onHeader: true, order: 1 },
      { label: "الحلول", url: "/solutions", onHeader: true, order: 2 },
      { label: "المنهجية", url: "/methodology", onHeader: true, order: 3 },
      { label: "حالات تطبيق", url: "/case-studies", onHeader: true, order: 4 },
      { label: "تواصل", url: "/contact", onHeader: true, order: 5 },
      { label: "شروع", url: "/shuru", onHeader: true, order: 6 }
    ]
  }
};

const headerEnglishData = {
  locale: "en",
  navigation: {
    primaryMenuItems: [
      { label: "Home", url: "/", onHeader: true, order: 1 },
      { label: "Solutions", url: "/solutions", onHeader: true, order: 2 },
      { label: "Methodology", url: "/methodology", onHeader: true, order: 3 },
      { label: "Case Studies", url: "/case-studies", onHeader: true, order: 4 },
      { label: "Contact", url: "/contact", onHeader: true, order: 5 },
      { label: "About", url: "/shuru", onHeader: true, order: 6 }
    ]
  }
};

const footerArabicData = {
  locale: "ar",
  description: "نحول الاستراتيجية إلى تنفيذ يمكن الوثوق به. لا نضيف إجراءات جديدة بل نعيد تعريف اتخاذ القرار التنفيذي.",
  columns: [
    {
      title: "روابط سريعة",
      links: [
        { label: "الرئيسية", url: "/" },
        { label: "الحلول", url: "/solutions" },
        { label: "المنهجية", url: "/methodology" },
        { label: "شروع", url: "/shuru" },
        { label: "تواصل", url: "/contact" }
      ]
    },
    {
      title: "رؤى والمحتوى",
      links: [
        { label: "المقالات والمجلة", url: "/insights" },
        { label: "حالات التطبيق", url: "/case-studies" }
      ]
    }
  ],
  socialLinks: [
    { platform: "Twitter", url: "https://twitter.com/shuru_sa" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/shuru" }
  ],
  bottomLinks: [
    { label: "الشروط والأحكام", url: "/terms" },
    { label: "سياسة الخصوصية", url: "/privacy" }
  ]
};

const footerEnglishData = {
  locale: "en",
  description: "We turn strategy into execution you can trust. We don't add procedures; we redefine executive decisions.",
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", url: "/" },
        { label: "Solutions", url: "/solutions" },
        { label: "Methodology", url: "/methodology" },
        { label: "About Shuru", url: "/shuru" },
        { label: "Contact", url: "/contact" }
      ]
    },
    {
      title: "Insights & Content",
      links: [
        { label: "Insights & Articles", url: "/insights" },
        { label: "Case Studies", url: "/case-studies" }
      ]
    }
  ],
  socialLinks: [
    { platform: "Twitter", url: "https://twitter.com/shuru_sa" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/shuru" }
  ],
  bottomLinks: [
    { label: "Terms & Conditions", url: "/terms" },
    { label: "Privacy Policy", url: "/privacy" }
  ]
};

async function seedHeaderFooter() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'info';

  try {
    for (const [locale, data] of Object.entries({ ar: headerArabicData, en: headerEnglishData })) {
      console.log(`Seeding Header in ${locale}...`);
      const existing = await app.documents('api::header.header').findFirst({ filters: { locale } });
      if (existing) {
        await app.documents('api::header.header').update({ documentId: existing.documentId, locale, data, status: 'published' });
      } else {
        await app.documents('api::header.header').create({ locale, data, status: 'published' });
      }
    }

    for (const [locale, data] of Object.entries({ ar: footerArabicData, en: footerEnglishData })) {
      console.log(`Seeding Footer in ${locale}...`);
      const existing = await app.documents('api::footer.footer').findFirst({ filters: { locale } });
      if (existing) {
        await app.documents('api::footer.footer').update({ documentId: existing.documentId, locale, data, status: 'published' });
      } else {
        await app.documents('api::footer.footer').create({ locale, data, status: 'published' });
      }
    }

    console.log('\n✅ Seeding Header & Footer completed successfully!');
  } catch (error) {
    console.error('❌ Could not import seed data', error);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedHeaderFooter().catch(console.error);
