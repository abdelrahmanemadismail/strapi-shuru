'use strict';

const contactPageData = {
  ar: {
    title: "صفحة التواصل وحجز الجلسات",
    badge: "جلسة تشخيصية تخصصية",
    heroTitle: "احجز جلسة تشخيص مع خبراء التنفيذ",
    heroSubtitle: "حدد نوع جهتك والتحدي الحالي، وسيقوم فريقنا بدراسة وضعكم واقتراح المسار التشغيلي والحلول المناسبة.",
    step1Title: "1. معلومات الجهة والتحدي",
    entityTypeLabel: "نوع الجهة / القطاع *",
    entityTypeOptions: [
      "جهة حكومية / شبه حكومية",
      "شركة / قطاع خاص",
      "مؤسسة أصلية / قطاع ثالث",
      "أخرى"
    ],
    desiredServiceLabel: "الخدمة / المسار المطلوب *",
    desiredServiceOptions: [
      "1. التشخيص وإعادة الهيكلة التشغيلية",
      "2. تصميم استراتيجية التنفيذ والخرائط",
      "3. التنفيذ الذكي والتشغيل الميداني",
      "4. بناء القدرات وتطوير الكفاءات"
    ],
    challengeLabel: "التحدي الرئيسي الذي تواجهه جهتك حالياً *",
    challengeOptions: [
      "بطء تنفيذ المبادرات وتأخر المخرجات عن الجدول الزمني",
      "صعوبة قياس الأداء وغياب لوحات المتابعة اللحظية",
      "فجوة بين الخطط الاستراتيجية والتشغيل الميداني",
      "تأهيل الفرق وتطوير القدرات التشغيلية الداخلية"
    ],
    step2Title: "2. موعد الجلسة والبيانات الشخصية",
    fullNameLabel: "الاسم الكامل *",
    emailLabel: "البريد الإلكتروني *",
    phoneLabel: "رقم الهاتف *",
    companyLabel: "اسم الشركة / المؤسسة *",
    preferredDateLabel: "الموعد والوقت المناسب للجلسة",
    messageLabel: "ملاحظات أو تفاصيل إضافية (اختياري)",
    submitButtonText: "تأكيد وحجز جلسة التشخيص",
    submittingButtonText: "جاري إرسال الطلب...",
    successMessage: "تم حجز طلب جلسة التشخيص بنجاح! سيتواصل معك فريقنا قريباً.",
    seo: {
      meta_title: "احجز جلسة تشخيص مع خبراء التنفيذ | شروع",
      meta_description: "حدد نوع جهتك والتحدي الحالي، وسيقوم فريقنا بدراسة وضعكم واقتراح المسار التشغيلي والحلول المناسبة.",
      meta_keywords: "تواصل معنا, جلسة تشخيص, استشارات, خبراء شروع"
    }
  },
  en: {
    title: "Contact & Diagnostic Session Page",
    badge: "Specialized Diagnostic Session",
    heroTitle: "Book a Diagnostic Session with Execution Experts",
    heroSubtitle: "Specify your entity type and current challenges. Our team will review your situation and propose the optimal operational roadmap.",
    step1Title: "1. Entity & Challenge Details",
    entityTypeLabel: "Entity Type / Sector *",
    entityTypeOptions: [
      "Government / Semi-Government",
      "Enterprise / Private Sector",
      "Non-Profit / Foundation",
      "Other"
    ],
    desiredServiceLabel: "Desired Track / Service *",
    desiredServiceOptions: [
      "1. Operational Diagnosis & Restructuring",
      "2. Execution Strategy & Roadmap Design",
      "3. Smart Field Execution & Live KPIs",
      "4. Capacity Building & Team Enablement"
    ],
    challengeLabel: "Primary Challenge Facing Your Entity *",
    challengeOptions: [
      "Slow initiative delivery & delayed milestones",
      "Difficulty tracking live performance & metrics",
      "Gap between high-level strategy and field execution",
      "Up-skilling internal teams & operational enablement"
    ],
    step2Title: "2. Appointment & Contact Info",
    fullNameLabel: "Full Name *",
    emailLabel: "Email Address *",
    phoneLabel: "Phone Number *",
    companyLabel: "Organization Name *",
    preferredDateLabel: "Preferred Date & Time",
    messageLabel: "Additional Notes (Optional)",
    submitButtonText: "Confirm Diagnostic Session Booking",
    submittingButtonText: "Submitting Request...",
    successMessage: "Diagnostic session request received! Our team will contact you shortly.",
    seo: {
      meta_title: "Book a Diagnostic Session with Execution Experts | Shuru",
      meta_description: "Specify your entity type and current challenges. Our team will review your situation and propose the optimal operational roadmap.",
      meta_keywords: "contact us, diagnostic session, consulting, Shuru experts"
    }
  }
};

async function seedContactPage() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'info';

  try {
    console.log('🚀 Seeding Contact Page Single Type...');

    // 1. Grant public permission to find
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      const existing = await strapi.query('plugin::users-permissions.permission').findOne({
        where: {
          action: 'api::contact-page.contact-page.find',
          role: publicRole.id,
        }
      });

      if (!existing) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: {
            action: 'api::contact-page.contact-page.find',
            role: publicRole.id,
          }
        });
        console.log('✅ Granted public permission: api::contact-page.contact-page.find');
      }
    }

    // 2. Seed Arabic and English
    const existingAr = await app.documents('api::contact-page.contact-page').findFirst({
      locale: 'ar'
    });

    let baseDocumentId;

    if (existingAr) {
      baseDocumentId = existingAr.documentId;
      console.log(`Updating existing Contact Page Single Type (${baseDocumentId})...`);
      await app.documents('api::contact-page.contact-page').update({
        documentId: baseDocumentId,
        locale: 'ar',
        data: contactPageData.ar,
        status: 'published'
      });

      await app.documents('api::contact-page.contact-page').update({
        documentId: baseDocumentId,
        locale: 'en',
        data: contactPageData.en,
        status: 'published'
      });
      console.log('✅ Updated Contact Page Single Type in ar and en.');
    } else {
      console.log('Creating new Contact Page Single Type...');
      const createdAr = await app.documents('api::contact-page.contact-page').create({
        locale: 'ar',
        data: contactPageData.ar,
        status: 'published'
      });
      baseDocumentId = createdAr.documentId;
      console.log(`Created Arabic Contact Page Single Type (${baseDocumentId})`);

      await app.documents('api::contact-page.contact-page').update({
        documentId: baseDocumentId,
        locale: 'en',
        data: contactPageData.en,
        status: 'published'
      });
      console.log('Created English Contact Page Single Type.');
    }

    console.log('\n🎉 Contact Page Single Type successfully seeded and published!');
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (err) {
    console.error('❌ Error seeding contact page single type:', err);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedContactPage().catch(console.error);
