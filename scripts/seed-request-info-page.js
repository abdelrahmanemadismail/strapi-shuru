'use strict';

const requestInfoPageData = {
  ar: {
    title: "صفحة طلب المعلومات (RFI)",
    badge: "طلب معلومات واستشارات",
    heroTitle: "طلب معلومات (RFI)",
    heroSubtitle: "شاركنا تفاصيل احتياجكم ومستندات المشروع، وسيقوم فريق شروع بدراسة الطلب واقتراح نطاق العمل والخبراء الأنسب لتحقيق أهدافكم.",
    workflowBadge: "مسار العمل",
    workflowTitle: "ماذا يحدث بعد الإرسال؟",
    workflowStep1Number: "01",
    workflowStep1Title: "نراجع الطلب",
    workflowStep1Desc: "نراجع المعلومات والمستندات المقدمة ونحدد طبيعة الاحتياج.",
    workflowStep2Number: "02",
    workflowStep2Title: "نحدد الخبرات المناسبة",
    workflowStep2Desc: "نحدد قائد التكليف والخبراء المناسبين من شبكة شروع.",
    workflowStep3Number: "03",
    workflowStep3Title: "نتواصل معكم",
    workflowStep3Desc: "نتواصل لتأكيد النطاق والخطوات التالية ونموذج التعاون.",
    consentText: "أوافق على استخدام المعلومات المقدمة لغرض مراجعة الطلب والتواصل معي، وفق سياسة الخصوصية.",
    seo: {
      meta_title: "طلب معلومات واستشارات تنفيذية (RFI) | شروع",
      meta_description: "قدم طلب معلومات واستشارات لتحديد نطاق العمل ونخبة الخبراء المناسبين لمشروعكم.",
      meta_keywords: "طلب معلومات, RFI, استشارات, خبراء شروع, مكاتب إدارة المشاريع"
    }
  },
  en: {
    title: "Request for Information (RFI) Page",
    badge: "Request Information & Advisory",
    heroTitle: "Request for Information (RFI)",
    heroSubtitle: "Share your project requirements and documents with us, and our team will analyze your needs to propose the optimal scope of work and senior advisors.",
    workflowBadge: "Workflow",
    workflowTitle: "What Happens After Submitting?",
    workflowStep1Number: "01",
    workflowStep1Title: "Reviewing Request",
    workflowStep1Desc: "We review the submitted details and documentation to define the scope of your need.",
    workflowStep2Number: "02",
    workflowStep2Title: "Matching Right Expertise",
    workflowStep2Desc: "We assign the engagement lead and tailored subject matter experts from Shuru's network.",
    workflowStep3Number: "03",
    workflowStep3Title: "Connecting with You",
    workflowStep3Desc: "We connect to align on scope, roadmap, next operational steps, and engagement model.",
    consentText: "I agree to the processing of the submitted information to review the request and contact me, in accordance with the Privacy Policy.",
    seo: {
      meta_title: "Request for Information & Executive Advisory (RFI) | Shuru",
      meta_description: "Submit a request for information to define project scope and align with top executive advisors.",
      meta_keywords: "request info, RFI, consulting request, Shuru advisors, PMO"
    }
  }
};

async function seedRequestInfoPage() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'info';

  try {
    console.log('🚀 Seeding Request Info Page Single Type...');

    // 1. Grant public permission to find
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      const existing = await strapi.query('plugin::users-permissions.permission').findOne({
        where: {
          action: 'api::request-info-page.request-info-page.find',
          role: publicRole.id,
        }
      });

      if (!existing) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: 'api::request-info-page.request-info-page.find',
            role: publicRole.id,
          }
        });
        console.log('✅ Granted public permission: api::request-info-page.request-info-page.find');
      }
    }

    // 2. Seed Arabic and English
    const existingAr = await app.documents('api::request-info-page.request-info-page').findFirst({
      locale: 'ar'
    });

    let baseDocumentId;

    if (existingAr) {
      baseDocumentId = existingAr.documentId;
      console.log(`Updating existing Request Info Page Single Type (${baseDocumentId})...`);
      await app.documents('api::request-info-page.request-info-page').update({
        documentId: baseDocumentId,
        locale: 'ar',
        data: requestInfoPageData.ar,
        status: 'published'
      });

      await app.documents('api::request-info-page.request-info-page').update({
        documentId: baseDocumentId,
        locale: 'en',
        data: requestInfoPageData.en,
        status: 'published'
      });
      console.log('✅ Updated Request Info Page Single Type in ar and en.');
    } else {
      console.log('Creating new Request Info Page Single Type...');
      const createdAr = await app.documents('api::request-info-page.request-info-page').create({
        locale: 'ar',
        data: requestInfoPageData.ar,
        status: 'published'
      });
      baseDocumentId = createdAr.documentId;
      console.log(`Created Arabic Request Info Page Single Type (${baseDocumentId})`);

      await app.documents('api::request-info-page.request-info-page').update({
        documentId: baseDocumentId,
        locale: 'en',
        data: requestInfoPageData.en,
        status: 'published'
      });
      console.log('Created English Request Info Page Single Type.');
    }

    console.log('\n🎉 Request Info Page Single Type successfully seeded and published!');
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (err) {
    console.error('❌ Error seeding request info page single type:', err);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedRequestInfoPage().catch(console.error);
