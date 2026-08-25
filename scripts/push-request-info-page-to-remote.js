'use strict';

const token = '799604a0c950d4b9e7f5d71388d43bd9e3a38fa8018316db87085876f2f728253b0bac9bd83d905c86f6513d80b923a361b0f89c022160669555c0c90d124fb32e10004a97fa21d4490a1be00b4f243ad4174e5918665d4939c4ae660213caaa27524535fc2d2e4599197ed5ce241af99ea42870374dd3196a9060b1ca9ed6e1';
const baseUrl = 'https://cms.shuru.sa/api';

const requestInfoPageDataAr = {
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
  entityTypeOptions: [
    "جهة حكومية",
    "شركة خاصة",
    "جهة غير ربحية",
    "شركة ناشئة",
    "أخرى"
  ],
  needDomainOptions: [
    "تأسيس أو تطوير PMO",
    "تقييم النضج المؤسسي",
    "الحوكمة ونماذج التشغيل",
    "إدارة المعرفة",
    "الذكاء الاصطناعي والتحول الرقمي",
    "إدارة المنافع والقيمة",
    "إدارة المحافظ والبرامج والمشاريع",
    "الدراسات والأبحاث التنفيذية",
    "توفير خبراء واستشاريين",
    "طلب تواصل",
    "أخرى"
  ],
  currentStageOptions: [
    "استكشاف أولي",
    "إعداد نطاق العمل",
    "إعداد مقترح",
    "تقييم عروض",
    "مشروع قائم يحتاج دعمًا",
    "أخرى"
  ],
  estimatedBudgetOptions: [
    "لم تحدد بعد",
    "أقل من 100 ألف ريال",
    "100–250 ألف ريال",
    "250–500 ألف ريال",
    "500 ألف–1 مليون ريال",
    "أكثر من مليون ريال"
  ],
  preferredContactMethodOptions: [
    "البريد الإلكتروني",
    "اتصال هاتفي",
    "اجتماع افتراضي"
  ],
  seo: {
    meta_title: "طلب معلومات واستشارات تنفيذية (RFI) | شروع",
    meta_description: "قدم طلب معلومات واستشارات لتحديد نطاق العمل ونخبة الخبراء المناسبين لمشروعكم.",
    meta_keywords: "طلب معلومات, RFI, استشارات, خبراء شروع, مكاتب إدارة المشاريع"
  }
};

const requestInfoPageDataEn = {
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
  entityTypeOptions: [
    "Government Entity",
    "Private Enterprise",
    "Non-Profit Organization",
    "Startup",
    "Other"
  ],
  needDomainOptions: [
    "PMO Setup & Enhancement",
    "Institutional Maturity Assessment",
    "Governance & Operating Models",
    "Knowledge Management",
    "AI & Digital Transformation",
    "Benefits & Value Management",
    "Portfolio, Program & Project Management",
    "Executive Studies & Research",
    "Expert & Consultant Provision",
    "Contact Request",
    "Other"
  ],
  currentStageOptions: [
    "Initial Discovery",
    "Scope of Work Preparation",
    "Proposal Preparation",
    "Bid Evaluation",
    "Existing Project Needing Support",
    "Other"
  ],
  estimatedBudgetOptions: [
    "Not determined yet",
    "Under 100k SAR",
    "100k–250k SAR",
    "250k–500k SAR",
    "500k–1M SAR",
    "More than 1M SAR"
  ],
  preferredContactMethodOptions: [
    "Email",
    "Phone Call",
    "Virtual Meeting"
  ],
  seo: {
    meta_title: "Request for Information & Executive Advisory (RFI) | Shuru",
    meta_description: "Submit a request for information to define project scope and align with top executive advisors.",
    meta_keywords: "request info, RFI, consulting request, Shuru advisors, PMO"
  }
};

async function pushRequestInfoPageSingleType() {
  console.log('🚀 Pushing Request Info Page Single Type to https://cms.shuru.sa ...');

  // 1. Push Arabic (ar)
  console.log('Updating Arabic (ar) Request Info Page Single Type...');
  const resAr = await fetch(`${baseUrl}/request-info-page?locale=ar&status=published`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: requestInfoPageDataAr })
  });

  if (!resAr.ok) {
    console.error('Failed to update Arabic single type:', await resAr.text());
  } else {
    const jsonAr = await resAr.json();
    console.log(`✅ Successfully updated Arabic (ar) Single Type! (Document ID: ${jsonAr.data?.documentId})`);
  }

  // 2. Push English (en)
  console.log('\nUpdating English (en) Request Info Page Single Type...');
  const resEn = await fetch(`${baseUrl}/request-info-page?locale=en&status=published`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: requestInfoPageDataEn })
  });

  if (!resEn.ok) {
    console.error('Failed to update English single type:', await resEn.text());
  } else {
    const jsonEn = await resEn.json();
    console.log(`✅ Successfully updated English (en) Single Type! (Document ID: ${jsonEn.data?.documentId})`);
  }

  console.log('\n🎉 Finished updating Request Info Page Single Type on https://cms.shuru.sa !');
}

pushRequestInfoPageSingleType().catch(console.error);
