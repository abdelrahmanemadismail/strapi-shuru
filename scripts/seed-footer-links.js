'use strict';

/**
 * Script to seed/restore all Footer links, columns, social links, and bottom links on Strapi.
 * 
 * Usage:
 *   node scripts/seed-footer-links.js
 * 
 * Environment variables (optional):
 *   STRAPI_URL=https://cms.shuru.sa
 *   STRAPI_TOKEN=...
 */

const fs = require('fs');
const path = require('path');

// Try reading .env file if available
function loadEnv() {
  const envPaths = [
    path.join(__dirname, '..', '.env'),
    path.join(__dirname, '..', '.env.local'),
  ];
  for (const envPath of envPaths) {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      content.split('\n').forEach(line => {
        const match = line.match(/^\s*([\w_]+)\s*=\s*(.*)?\s*$/);
        if (match && !process.env[match[1]]) {
          process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, '');
        }
      });
    }
  }
}

loadEnv();

const defaultToken = '799604a0c950d4b9e7f5d71388d43bd9e3a38fa8018316db87085876f2f728253b0bac9bd83d905c86f6513d80b923a361b0f89c022160669555c0c90d124fb32e10004a97fa21d4490a1be00b4f243ad4174e5918665d4939c4ae660213caaa27524535fc2d2e4599197ed5ce241af99ea42870374dd3196a9060b1ca9ed6e1';
const token = process.env.STRAPI_FULL_ACCESS_API_TOKEN || process.env.STRAPI_TOKEN || defaultToken;

let rawUrl = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || 'https://cms.shuru.sa';
if (rawUrl.endsWith('/api')) rawUrl = rawUrl.slice(0, -4);
if (rawUrl.endsWith('/')) rawUrl = rawUrl.slice(0, -1);
const baseUrl = `${rawUrl}/api`;

const arabicFooterData = {
  description: "نحول الاستراتيجية إلى تنفيذ يمكن الوثوق به. نبني ونطور منظومات التنفيذ والحوكمة والمعرفة المؤسسية للقادة",
  socialLinks: [
    { platform: "Twitter", url: "https://twitter.com/shurumag" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/shurumag" }
  ],
  columns: [
    {
      title: "روابط سريعة",
      links: [
        { label: "الخدمات", url: "/services", openInNewTab: false, order: 1, onFooter: true },
        { label: "من نحن", url: "/about", openInNewTab: false, order: 2, onFooter: true }
      ]
    },
    {
      title: "مسارات الخدمات",
      links: [
        { label: "تميز التنفيذ ومكاتب PMO", url: "/services/execution-excellence-pmo", openInNewTab: false, order: 1, onFooter: true },
        { label: "الحوكمة وتنفيذ الاستراتيجية", url: "/services/governance-and-strategy-execution", openInNewTab: false, order: 2, onFooter: true },
        { label: "إدارة المعرفة والذكاء المؤسسي", url: "/services/knowledge-and-enterprise-intelligence", openInNewTab: false, order: 3, onFooter: true },
        { label: "الدراسات والتقييمات التنفيذية", url: "/services/advisory-assessments-and-executive-studies", openInNewTab: false, order: 4, onFooter: true }
      ]
    },
    {
      title: "الطلبات والتواصل",
      links: [
        { label: "طلب معلومات", url: "/request-info", openInNewTab: false, order: 1, onFooter: true },
        { label: "حجز جلسة استشارية", url: "/consultation", openInNewTab: false, order: 2, onFooter: true },
        { label: "الملف التعريفي لشروع", url: "/company-profile", openInNewTab: false, order: 3, onFooter: true },
        { label: "تواصل معنا", url: "/contact", openInNewTab: false, order: 4, onFooter: true }
      ]
    },
    {
      title: "رؤى شروع",
      links: [
        { label: "المقالات", url: "/insights", openInNewTab: false, order: 1, onFooter: true },
        { label: "المجلة", url: "/insights/magazine", openInNewTab: false, order: 2, onFooter: true },
        { label: "المجلس", url: "/insights/majlis", openInNewTab: false, order: 3, onFooter: true }
      ]
    }
  ],
  bottomLinks: [
    { label: "الشروط والأحكام", url: "/terms", openInNewTab: false, order: 1, onFooter: true },
    { label: "سياسة الخصوصية", url: "/privacy", openInNewTab: false, order: 2, onFooter: true }
  ]
};

const englishFooterData = {
  description: "Turning strategy into trusted execution. Building and scaling execution engines, governance, and institutional intelligence for leaders.",
  socialLinks: [
    { platform: "Twitter", url: "https://twitter.com/shurumag" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/shurumag" }
  ],
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Services", url: "/services", openInNewTab: false, order: 1, onFooter: true },
        { label: "About", url: "/about", openInNewTab: false, order: 2, onFooter: true }
      ]
    },
    {
      title: "Service Tracks",
      links: [
        { label: "Execution Excellence & PMO", url: "/services/execution-excellence-pmo", openInNewTab: false, order: 1, onFooter: true },
        { label: "Governance & Strategy Execution", url: "/services/governance-and-strategy-execution", openInNewTab: false, order: 2, onFooter: true },
        { label: "Knowledge Management", url: "/services/knowledge-and-enterprise-intelligence", openInNewTab: false, order: 3, onFooter: true },
        { label: "Executive Studies & Advisory", url: "/services/advisory-assessments-and-executive-studies", openInNewTab: false, order: 4, onFooter: true }
      ]
    },
    {
      title: "Requests & Inquiries",
      links: [
        { label: "Request Information", url: "/request-info", openInNewTab: false, order: 1, onFooter: true },
        { label: "Book Consultation", url: "/consultation", openInNewTab: false, order: 2, onFooter: true },
        { label: "SHURU Company Profile", url: "/company-profile", openInNewTab: false, order: 3, onFooter: true },
        { label: "Contact Us", url: "/contact", openInNewTab: false, order: 4, onFooter: true }
      ]
    },
    {
      title: "SHURU Insights",
      links: [
        { label: "Articles", url: "/insights", openInNewTab: false, order: 1, onFooter: true },
        { label: "Magazine", url: "/insights/magazine", openInNewTab: false, order: 2, onFooter: true },
        { label: "Majlis", url: "/insights/majlis", openInNewTab: false, order: 3, onFooter: true }
      ]
    }
  ],
  bottomLinks: [
    { label: "Terms & Conditions", url: "/terms", openInNewTab: false, order: 1, onFooter: true },
    { label: "Privacy Policy", url: "/privacy", openInNewTab: false, order: 2, onFooter: true }
  ]
};

async function updateFooter() {
  console.log(`\n🌐 Connecting to Strapi API at: ${baseUrl}`);
  console.log('----------------------------------------------------');

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  // 1. Update Arabic Footer
  console.log('⏳ Updating Arabic Footer (locale=ar)...');
  try {
    const resAr = await fetch(`${baseUrl}/footer?locale=ar&status=published`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({ data: arabicFooterData })
    });

    if (resAr.ok) {
      console.log('✅ Arabic Footer updated and published successfully!');
    } else {
      const errText = await resAr.text();
      console.error(`❌ Failed to update Arabic Footer (${resAr.status}):`, errText);
    }
  } catch (err) {
    console.error('❌ Error updating Arabic Footer:', err.message);
  }

  // 2. Update English Footer
  console.log('\n⏳ Updating English Footer (locale=en)...');
  try {
    const resEn = await fetch(`${baseUrl}/footer?locale=en&status=published`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({ data: englishFooterData })
    });

    if (resEn.ok) {
      console.log('✅ English Footer updated and published successfully!');
    } else {
      const errText = await resEn.text();
      console.error(`❌ Failed to update English Footer (${resEn.status}):`, errText);
    }
  } catch (err) {
    console.error('❌ Error updating English Footer:', err.message);
  }

  console.log('\n----------------------------------------------------');
  console.log('🎉 Footer seeding completed!');
}

updateFooter().catch(console.error);
