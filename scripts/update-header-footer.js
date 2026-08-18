'use strict';

const token = '799604a0c950d4b9e7f5d71388d43bd9e3a38fa8018316db87085876f2f728253b0bac9bd83d905c86f6513d80b923a361b0f89c022160669555c0c90d124fb32e10004a97fa21d4490a1be00b4f243ad4174e5918665d4939c4ae660213caaa27524535fc2d2e4599197ed5ce241af99ea42870374dd3196a9060b1ca9ed6e1';
const baseUrl = 'https://cms.shuru.sa/api';

const headerArabicData = {
  navigation: {
    primaryMenuItems: [
      { label: "الرئيسية", url: "/", onHeader: true, onSideBar: true, order: 1 },
      { label: "الخدمات", url: "/services", onHeader: true, onSideBar: true, order: 2, subItems: [
        { label: "تميز التنفيذ ومكاتب إدارة المشاريع", url: "/services/execution-excellence-pmo", order: 1 },
        { label: "الحوكمة وتنفيذ الاستراتيجية", url: "/services/governance-and-strategy-execution", order: 2 },
        { label: "المعرفة والذكاء المؤسسي", url: "/services/knowledge-and-enterprise-intelligence", order: 3 },
        { label: "الاستشارات والتقييمات والدراسات التنفيذية", url: "/services/advisory-assessments-and-executive-studies", order: 4 }
      ]},
      { label: "الخبراء", url: "/experts", onHeader: true, onSideBar: true, order: 3 },
      { label: "المنهجية", url: "/methodology", onHeader: true, onSideBar: true, order: 4 },
      { label: "الرؤى والمحتوى", url: "/insights", onHeader: true, onSideBar: true, order: 5 },
      { label: "طلب معلومات", url: "/request-info", onHeader: true, onSideBar: true, order: 6 },
      { label: "شروع", url: "/shuru", onHeader: true, onSideBar: true, order: 7 },
      { label: "تواصل", url: "/contact", onHeader: true, onSideBar: true, order: 8 }
    ]
  }
};

const headerEnglishData = {
  navigation: {
    primaryMenuItems: [
      { label: "Home", url: "/", onHeader: true, onSideBar: true, order: 1 },
      { label: "Services", url: "/services", onHeader: true, onSideBar: true, order: 2, subItems: [
        { label: "Execution Excellence & PMO", url: "/services/execution-excellence-pmo", order: 1 },
        { label: "Governance & Strategy Execution", url: "/services/governance-and-strategy-execution", order: 2 },
        { label: "Knowledge & Enterprise Intelligence", url: "/services/knowledge-and-enterprise-intelligence", order: 3 },
        { label: "Advisory, Assessments & Studies", url: "/services/advisory-assessments-and-executive-studies", order: 4 }
      ]},
      { label: "Experts", url: "/experts", onHeader: true, onSideBar: true, order: 3 },
      { label: "Methodology", url: "/methodology", onHeader: true, onSideBar: true, order: 4 },
      { label: "Insights", url: "/insights", onHeader: true, onSideBar: true, order: 5 },
      { label: "Request Info", url: "/request-info", onHeader: true, onSideBar: true, order: 6 },
      { label: "About", url: "/shuru", onHeader: true, onSideBar: true, order: 7 },
      { label: "Contact", url: "/contact", onHeader: true, onSideBar: true, order: 8 }
    ]
  }
};

const footerArabicData = {
  description: "نحول الاستراتيجية إلى تنفيذ يمكن الوثوق به. نبني ونطور منظومات التنفيذ والحوكمة والمعرفة المؤسسية للجهات القيادية في المملكة.",
  columns: [
    {
      title: "روابط سريعة",
      links: [
        { label: "الرئيسية", url: "/" },
        { label: "الخدمات", url: "/services" },
        { label: "الخبراء", url: "/experts" },
        { label: "المنهجية", url: "/methodology" },
        { label: "حالات تطبيق", url: "/case-studies" },
        { label: "عن شروع", url: "/shuru" }
      ]
    },
    {
      title: "مسارات الخدمات",
      links: [
        { label: "تميز التنفيذ ومكاتب PMO", url: "/services/execution-excellence-pmo" },
        { label: "الحوكمة وتنفيذ الاستراتيجية", url: "/services/governance-and-strategy-execution" },
        { label: "المعرفة والذكاء المؤسسي", url: "/services/knowledge-and-enterprise-intelligence" },
        { label: "الدراسات والتقييمات التنفيذية", url: "/services/advisory-assessments-and-executive-studies" }
      ]
    },
    {
      title: "الطلبات والتواصل",
      links: [
        { label: "طلب معلومات", url: "/request-info" },
        { label: "حجز جلسة استشارية", url: "/consultation" },
        { label: "الملف التعريفي", url: "/company-profile" },
        { label: "تواصل معنا", url: "/contact" }
      ]
    },
    {
      title: "الرؤى والمعرفة",
      links: [
        { label: "المقالات والتقارير", url: "/insights" },
        { label: "المجلة الدورية", url: "/insights/magazine" },
        { label: "البودكاست التنفيذي", url: "/insights/podcasts" },
        { label: "المجلس التنفيذي", url: "/insights/majlis" }
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
  description: "Turning strategy into trusted execution. Building and scaling execution engines, governance, and institutional intelligence for leaders.",
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", url: "/" },
        { label: "Services", url: "/services" },
        { label: "Experts", url: "/experts" },
        { label: "Methodology", url: "/methodology" },
        { label: "Case Studies", url: "/case-studies" },
        { label: "About Shuru", url: "/shuru" }
      ]
    },
    {
      title: "Service Tracks",
      links: [
        { label: "Execution Excellence & PMO", url: "/services/execution-excellence-pmo" },
        { label: "Governance & Strategy Execution", url: "/services/governance-and-strategy-execution" },
        { label: "Knowledge & Intelligence", url: "/services/knowledge-and-enterprise-intelligence" },
        { label: "Executive Studies & Advisory", url: "/services/advisory-assessments-and-executive-studies" }
      ]
    },
    {
      title: "Requests & Inquiries",
      links: [
        { label: "Request Information", url: "/request-info" },
        { label: "Book Consultation", url: "/consultation" },
        { label: "Company Profile", url: "/company-profile" },
        { label: "Contact Us", url: "/contact" }
      ]
    },
    {
      title: "Insights & Media",
      links: [
        { label: "Articles & Reports", url: "/insights" },
        { label: "Periodical Magazine", url: "/insights/magazine" },
        { label: "Executive Podcast", url: "/insights/podcasts" },
        { label: "Executive Majlis", url: "/insights/majlis" }
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

async function updateRemoteHeaderAndFooter() {
  console.log('🚀 Updating Header and Footer on https://cms.shuru.sa ...');

  console.log('Updating Arabic Header on remote...');
  const putArHeader = await fetch(`${baseUrl}/header?locale=ar&status=published`, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: headerArabicData })
  });
  console.log('Arabic Header Status:', putArHeader.status);
  if (!putArHeader.ok) console.log(await putArHeader.text());

  console.log('Updating English Header on remote...');
  const putEnHeader = await fetch(`${baseUrl}/header?locale=en&status=published`, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: headerEnglishData })
  });
  console.log('English Header Status:', putEnHeader.status);
  if (!putEnHeader.ok) console.log(await putEnHeader.text());

  console.log('Updating Arabic Footer on remote...');
  const putArFooter = await fetch(`${baseUrl}/footer?locale=ar&status=published`, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: footerArabicData })
  });
  console.log('Arabic Footer Status:', putArFooter.status);
  if (!putArFooter.ok) console.log(await putArFooter.text());

  console.log('Updating English Footer on remote...');
  const putEnFooter = await fetch(`${baseUrl}/footer?locale=en&status=published`, {
    method: 'PUT',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: footerEnglishData })
  });
  console.log('English Footer Status:', putEnFooter.status);
  if (!putEnFooter.ok) console.log(await putEnFooter.text());

  console.log('\n🎉 Header & Footer successfully updated on https://cms.shuru.sa !');
}

updateRemoteHeaderAndFooter().catch(console.error);
