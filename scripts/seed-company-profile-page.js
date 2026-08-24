'use strict';

const companyProfilePageData = {
  ar: {
    title: "صفحة الملف التعريفي للشركة",
    badge: "الملف التعريفي للشركة",
    heroTitle: "بروفايل شركة شروع",
    heroSubtitle: "تعرف على نموذج عمل شروع، شبكة الخبراء، والحلول الاستشارية المتقدمة لتمكين المؤسسات وتحقيق التحول المستدام.",
    fileTitle: "الملف التعريفي الرسمي (2026)",
    fileSubtitle: "ملف PDF عالي الجودة • محدث لعام 2026",
    pdfUrl: "/documents/shuru-company-profile.pdf",
    fileName: "shuru-company-profile.pdf",
    downloadButtonText: "تحميل بروفايل الشركة (PDF)",
    openNewTabButtonText: "فتح في نافذة جديدة",
    shareButtonText: "مشاركة الرابط",
    previewBadge: "معاينة تفاعلية",
    pillar1Title: "خبرات استشارية وتنفيذية متقدمة",
    pillar1Desc: "نجمع بين الفكر الاستراتيجي المعمق والقدرة على التشغيل الميداني لضمان تحقيق المستهدفات.",
    pillar1Icon: "Building2",
    pillar2Title: "حلول تشغيلية مخصصة",
    pillar2Desc: "تصميم مسارات عمل ونماذج حوكمة تتماشى تماماً مع بيئة عمل جهتك وثقافتها التنظيمية.",
    pillar2Icon: "Zap",
    pillar3Title: "نقل المعرفة والتمكين المؤسسي",
    pillar3Desc: "بناء قدرات الفرق الداخلية وتأهيل الكفاءات الوطنية لضمان استدامة الأثر والنتائج.",
    pillar3Icon: "Shield",
    ctaBadge: "ابدأ رحلة التعاون مع شروع",
    ctaTitle: "هل ترغب في طلب نطاق عمل أو استشارة خاصة؟",
    ctaSubtitle: "يمكنك تقديم طلب معلومات (RFI) بالمستندات والمتطلبات وسيتواصل معك خبراؤنا مباشرة.",
    ctaPrimaryButtonText: "تقديم طلب معلومات (RFI)",
    ctaPrimaryButtonLink: "/request-info",
    ctaSecondaryButtonText: "حجز جلسة تشخيصية",
    ctaSecondaryButtonLink: "/contact",
    seo: {
      meta_title: "الملف التعريفي وبروفايل الشركة 2026 | شروع",
      meta_description: "استعرض وحمّل بروفايل شركة شروع، نموذج التنفيذ الاستشاري، وشبكة الخبراء وحلول التحول المؤسسي.",
      meta_keywords: "بروفايل شروع, الملف التعريفي, استشارات تنفيذية, شركة شروع, PMO, تحول مؤسسي"
    }
  },
  en: {
    title: "Company Profile Page",
    badge: "SHURU Company Profile",
    heroTitle: "Official Company Profile",
    heroSubtitle: "Explore SHURU's delivery model, expert network, and advanced advisory solutions empowering organizations for sustainable transformation.",
    fileTitle: "Official Company Profile (2026)",
    fileSubtitle: "High-quality PDF document • Updated for 2026",
    pdfUrl: "/documents/shuru-company-profile.pdf",
    fileName: "shuru-company-profile.pdf",
    downloadButtonText: "Download Company Profile (PDF)",
    openNewTabButtonText: "Open in New Tab",
    shareButtonText: "Share Link",
    previewBadge: "Interactive Preview",
    pillar1Title: "Advanced Advisory & Execution",
    pillar1Desc: "Bridging strategic formulation with rigorous field execution to ensure milestone delivery.",
    pillar1Icon: "Building2",
    pillar2Title: "Tailored Operational Solutions",
    pillar2Desc: "Designing governance models and execution tracks uniquely calibrated to your entity's environment.",
    pillar2Icon: "Zap",
    pillar3Title: "Knowledge Transfer & Enablement",
    pillar3Desc: "Empowering internal teams and upskilling national talent for enduring, sustainable impact.",
    pillar3Icon: "Shield",
    ctaBadge: "Partner with SHURU",
    ctaTitle: "Looking for tailored scope of work or specialized advisory?",
    ctaSubtitle: "Submit your Request for Information (RFI) with supporting docs, and our leaders will connect.",
    ctaPrimaryButtonText: "Request for Information (RFI)",
    ctaPrimaryButtonLink: "/request-info",
    ctaSecondaryButtonText: "Book Diagnostic Session",
    ctaSecondaryButtonLink: "/contact",
    seo: {
      meta_title: "Company Profile & Executive Capability 2026 | Shuru",
      meta_description: "View and download Shuru's company profile, advisory delivery model, expert network, and execution solutions.",
      meta_keywords: "Shuru company profile, executive advisory, management consulting, PMO, transformation"
    }
  }
};

async function seedCompanyProfilePage() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'info';

  try {
    console.log('🚀 Seeding Company Profile Page Single Type...');

    // 1. Grant public permission to find
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      const existing = await strapi.query('plugin::users-permissions.permission').findOne({
        where: {
          action: 'api::company-profile-page.company-profile-page.find',
          role: publicRole.id,
        }
      });

      if (!existing) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: 'api::company-profile-page.company-profile-page.find',
            role: publicRole.id,
          }
        });
        console.log('✅ Granted public permission: api::company-profile-page.company-profile-page.find');
      }
    }

    // 2. Seed Arabic and English
    const existingAr = await app.documents('api::company-profile-page.company-profile-page').findFirst({
      locale: 'ar'
    });

    let baseDocumentId;

    if (existingAr) {
      baseDocumentId = existingAr.documentId;
      console.log(`Updating existing Company Profile Page Single Type (${baseDocumentId})...`);
      await app.documents('api::company-profile-page.company-profile-page').update({
        documentId: baseDocumentId,
        locale: 'ar',
        data: companyProfilePageData.ar,
        status: 'published'
      });

      await app.documents('api::company-profile-page.company-profile-page').update({
        documentId: baseDocumentId,
        locale: 'en',
        data: companyProfilePageData.en,
        status: 'published'
      });
      console.log('✅ Updated Company Profile Page Single Type in ar and en.');
    } else {
      console.log('Creating new Company Profile Page Single Type...');
      const createdAr = await app.documents('api::company-profile-page.company-profile-page').create({
        locale: 'ar',
        data: companyProfilePageData.ar,
        status: 'published'
      });
      baseDocumentId = createdAr.documentId;
      console.log(`Created Arabic Company Profile Page Single Type (${baseDocumentId})`);

      await app.documents('api::company-profile-page.company-profile-page').update({
        documentId: baseDocumentId,
        locale: 'en',
        data: companyProfilePageData.en,
        status: 'published'
      });
      console.log('Created English Company Profile Page Single Type.');
    }

    console.log('\n🎉 Company Profile Page Single Type successfully seeded and published!');
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (err) {
    console.error('❌ Error seeding company profile page single type:', err);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedCompanyProfilePage().catch(console.error);
