'use strict';

const token = '799604a0c950d4b9e7f5d71388d43bd9e3a38fa8018316db87085876f2f728253b0bac9bd83d905c86f6513d80b923a361b0f89c022160669555c0c90d124fb32e10004a97fa21d4490a1be00b4f243ad4174e5918665d4939c4ae660213caaa27524535fc2d2e4599197ed5ce241af99ea42870374dd3196a9060b1ca9ed6e1';
const baseUrl = 'https://cms.shuru.sa/api';

const companyProfilePageDataAr = {
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
};

const companyProfilePageDataEn = {
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
};

async function pushCompanyProfilePageSingleType() {
  console.log('🚀 Pushing Company Profile Page Single Type to https://cms.shuru.sa ...');

  // 1. Push Arabic (ar)
  console.log('Updating Arabic (ar) Company Profile Page Single Type...');
  const resAr = await fetch(`${baseUrl}/company-profile-page?locale=ar&status=published`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: companyProfilePageDataAr })
  });

  if (!resAr.ok) {
    console.error('Failed to update Arabic single type:', await resAr.text());
  } else {
    const jsonAr = await resAr.json();
    console.log(`✅ Successfully updated Arabic (ar) Single Type! (Document ID: ${jsonAr.data?.documentId})`);
  }

  // 2. Push English (en)
  console.log('\nUpdating English (en) Company Profile Page Single Type...');
  const resEn = await fetch(`${baseUrl}/company-profile-page?locale=en&status=published`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: companyProfilePageDataEn })
  });

  if (!resEn.ok) {
    console.error('Failed to update English single type:', await resEn.text());
  } else {
    const jsonEn = await resEn.json();
    console.log(`✅ Successfully updated English (en) Single Type! (Document ID: ${jsonEn.data?.documentId})`);
  }

  console.log('\n🎉 Finished updating Company Profile Page Single Type on https://cms.shuru.sa !');
}

pushCompanyProfilePageSingleType().catch(console.error);
