'use strict';

const token = '799604a0c950d4b9e7f5d71388d43bd9e3a38fa8018316db87085876f2f728253b0bac9bd83d905c86f6513d80b923a361b0f89c022160669555c0c90d124fb32e10004a97fa21d4490a1be00b4f243ad4174e5918665d4939c4ae660213caaa27524535fc2d2e4599197ed5ce241af99ea42870374dd3196a9060b1ca9ed6e1';
const baseUrl = 'https://cms.shuru.sa/api';

const contactPageDataAr = {
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
};

const contactPageDataEn = {
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
};

async function pushContactPageSingleType() {
  console.log('🚀 Pushing Contact Page Single Type to https://cms.shuru.sa ...');

  // 1. Push Arabic (ar)
  console.log('Updating Arabic (ar) Contact Page Single Type...');
  const resAr = await fetch(`${baseUrl}/contact-page?locale=ar&status=published`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: contactPageDataAr })
  });

  if (!resAr.ok) {
    console.error('Failed to update Arabic single type:', await resAr.text());
  } else {
    const jsonAr = await resAr.json();
    console.log(`✅ Successfully updated Arabic (ar) Single Type! (Document ID: ${jsonAr.data?.documentId})`);
  }

  // 2. Push English (en)
  console.log('\nUpdating English (en) Contact Page Single Type...');
  const resEn = await fetch(`${baseUrl}/contact-page?locale=en&status=published`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: contactPageDataEn })
  });

  if (!resEn.ok) {
    console.error('Failed to update English single type:', await resEn.text());
  } else {
    const jsonEn = await resEn.json();
    console.log(`✅ Successfully updated English (en) Single Type! (Document ID: ${jsonEn.data?.documentId})`);
  }

  console.log('\n🎉 Finished updating Contact Page Single Type on https://cms.shuru.sa !');
}

pushContactPageSingleType().catch(console.error);
