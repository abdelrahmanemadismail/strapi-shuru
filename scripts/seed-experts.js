'use strict';

const { createStrapi, compileStrapi } = require('@strapi/strapi');

const sampleExperts = [
  {
    ar: {
      name: "د. إبراهيم الفالح",
      slug: "dr-ibrahim-al-faleh",
      title: "قائد استشارات التحول ونماذج التشغيل",
      bio: "خبير تنفيذي يتمتع بأكثر من 18 عاماً في قيادة برامج التحول الاستراتيجي، إعادة هيكلة مكاتب إدارة المشاريع (PMO)، وتصميم نماذج التشغيل للجهات الحكومية والشركات الكبرى.",
      expertise: "الحوكمة ونماذج التشغيل, تأسيس وتطوير PMO, التخطيط الاستراتيجي, إدارة التغيير المؤسسي",
      certifications: "PfMP, PgMP, PMP, CMC, TOGAF 9.2",
      linkedin: "https://linkedin.com",
      order: 1,
      featured: true,
    },
    en: {
      name: "Dr. Ibrahim Al-Faleh",
      slug: "dr-ibrahim-al-faleh",
      title: "Transformation & Operating Models Lead Consultant",
      bio: "Executive advisor with 18+ years leading strategic transformations, PMO restructurings, and enterprise operating model designs across government entities and major corporations.",
      expertise: "Governance & Operating Models, PMO Setup & Maturity, Strategic Planning, Change Management",
      certifications: "PfMP, PgMP, PMP, CMC, TOGAF 9.2",
      linkedin: "https://linkedin.com",
      order: 1,
      featured: true,
    }
  },
  {
    ar: {
      name: "م. سارة المهيدب",
      slug: "eng-sarah-al-muhaidib",
      title: "كبير خبراء إدارة المحافظ والبرامج الاستراتيجية",
      bio: "متخصصة في مواءمة محافظ المشاريع الاستثمارية مع مستهدفات رؤية 2030، وتصميم لوحات المتابعة التنفيذية وتحقيق كفاءة الإنفاق.",
      expertise: "إدارة المحافظ والبرامج (PPM), قياس النضج المؤسسي, لوحات التحكم الذكية, إدارة المخاطر",
      certifications: "PgMP, PfMP, PMI-RMP, MoP Practitioner",
      linkedin: "https://linkedin.com",
      order: 2,
      featured: true,
    },
    en: {
      name: "Eng. Sarah Al-Muhaidib",
      slug: "eng-sarah-al-muhaidib",
      title: "Senior Strategic Portfolio & Program Expert",
      bio: "Specialist in aligning strategic investment portfolios with Vision 2030 objectives, designing executive command dashboards, and spending efficiency.",
      expertise: "Portfolio & Program Management (PPM), Organizational Maturity, Executive Dashboards, Risk Management",
      certifications: "PgMP, PfMP, PMI-RMP, MoP Practitioner",
      linkedin: "https://linkedin.com",
      order: 2,
      featured: true,
    }
  },
  {
    ar: {
      name: "أ. عبدالعزيز القحطاني",
      slug: "abdulaziz-al-qahtani",
      title: "مستشار أول في الذكاء الاصطناعي والتحول الرقمي",
      bio: "يقود مبادرات أتمتة العمليات الحكومية وبناء بنية البيانات التشغيلية وتطبيقات الذكاء الاصطناعي التوليدي لرفع كفاءة اتخاذ القرار.",
      expertise: "الذكاء الاصطناعي المؤسسي, أتمتة العمليات (RPA), استراتيجيات البيانات, المنصات الرقمية",
      certifications: "CDMP (Data Management), AWS Certified Solutions Architect, ITIL 4",
      linkedin: "https://linkedin.com",
      order: 3,
      featured: true,
    },
    en: {
      name: "Abdulaziz Al-Qahtani",
      slug: "abdulaziz-al-qahtani",
      title: "Senior AI & Digital Transformation Advisor",
      bio: "Leading government workflow automation, operational data architectures, and generative AI integrations to accelerate executive decision-making.",
      expertise: "Enterprise AI, Workflow Automation (RPA), Data Strategy, Digital Platforms",
      certifications: "CDMP (Data Management), AWS Certified Solutions Architect, ITIL 4",
      linkedin: "https://linkedin.com",
      order: 3,
      featured: true,
    }
  },
  {
    ar: {
      name: "د. خالد السبيعي",
      slug: "dr-khaled-al-subaie",
      title: "خبير إدارة المنافع والقيمة المؤسسية",
      bio: "أكثر من 15 عاماً في قياس العائد على الاستثمار للمبادرات الوطنية، وتقييم الجدوى الاقتصادية وتحليل أثر السياسات والقرارات.",
      expertise: "إدارة المنافع والقيمة, دراسات الجدوى والأثر, الاقتصاد التنفيذي, مؤشرات الأداء (KPIs)",
      certifications: "Benefits Management Practitioner, PMI-PBA, CFA Charterholder",
      linkedin: "https://linkedin.com",
      order: 4,
      featured: false,
    },
    en: {
      name: "Dr. Khaled Al-Subaie",
      slug: "dr-khaled-al-subaie",
      title: "Enterprise Value & Benefits Realization Expert",
      bio: "15+ years evaluating ROI for national initiatives, conducting economic feasibility studies, and analyzing policy and regulatory impacts.",
      expertise: "Value & Benefits Management, Feasibility & Impact Studies, Executive Economics, Key Performance Indicators",
      certifications: "Benefits Management Practitioner, PMI-PBA, CFA Charterholder",
      linkedin: "https://linkedin.com",
      order: 4,
      featured: false,
    }
  },
  {
    ar: {
      name: "أ. نورة الدوسري",
      slug: "noura-al-dossary",
      title: "مستشارة الحوكمة وإدارة المعرفة المؤسسية",
      bio: "متخصصة في بناء أطر نقل المعرفة، هندسة السياسات واللوائح، وتأسيس مجتمعات الممارسة المهنية داخل المنظمات المعقدة.",
      expertise: "إدارة المعرفة ونقل الخبرات, حوكمة اللوائح والسياسات, التمكين المؤسسي, تصميم النماذج التشغيلية",
      certifications: "CKP (Certified Knowledge Practitioner), CGEIT, Six Sigma Black Belt",
      linkedin: "https://linkedin.com",
      order: 5,
      featured: false,
    },
    en: {
      name: "Noura Al-Dossary",
      slug: "noura-al-dossary",
      title: "Governance & Knowledge Management Consultant",
      bio: "Specialist in knowledge transfer architectures, regulatory policy engineering, and institutional communities of practice across complex organizations.",
      expertise: "Knowledge Management & Transfer, Policy & Regulatory Governance, Organizational Enablement, Operating Models",
      certifications: "CKP (Certified Knowledge Practitioner), CGEIT, Six Sigma Black Belt",
      linkedin: "https://linkedin.com",
      order: 5,
      featured: false,
    }
  }
];

async function seedExperts() {
  const appContext = await compileStrapi();
  const strapi = await createStrapi(appContext).load();

  try {
    console.log('Seeding Experts to Strapi...');

    // 1. Grant public permissions
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      const actions = ['find', 'findOne'];
      for (const action of actions) {
        const existing = await strapi.query('plugin::users-permissions.permission').findOne({
          where: {
            action: `api::expert.expert.${action}`,
            role: publicRole.id,
          }
        });
        if (!existing) {
          await strapi.query('plugin::users-permissions.permission').create({
            data: {
              action: `api::expert.expert.${action}`,
              role: publicRole.id,
            }
          });
          console.log(`Granted public permission: api::expert.expert.${action}`);
        }
      }
    }

    // 2. Insert or update sample experts
    for (const exp of sampleExperts) {
      let existingAr = await strapi.documents('api::expert.expert').findFirst({
        filters: { slug: exp.ar.slug },
        locale: 'ar',
      });

      if (!existingAr) {
        const createdAr = await strapi.documents('api::expert.expert').create({
          data: {
            name: exp.ar.name,
            slug: exp.ar.slug,
            title: exp.ar.title,
            bio: exp.ar.bio,
            expertise: exp.ar.expertise,
            certifications: exp.ar.certifications,
            linkedin: exp.ar.linkedin,
            order: exp.ar.order,
            featured: exp.ar.featured,
            locale: 'ar',
          },
          status: 'published',
        });

        console.log(`Created Arabic expert: ${exp.ar.name}`);

        if (createdAr?.documentId) {
          await strapi.documents('api::expert.expert').create({
            data: {
              name: exp.en.name,
              slug: exp.en.slug,
              title: exp.en.title,
              bio: exp.en.bio,
              expertise: exp.en.expertise,
              certifications: exp.en.certifications,
              linkedin: exp.en.linkedin,
              order: exp.en.order,
              featured: exp.en.featured,
              locale: 'en',
              documentId: createdAr.documentId,
            },
            status: 'published',
          });
          console.log(`Created English translation for: ${exp.en.name}`);
        }
      } else {
        console.log(`Expert already exists: ${exp.ar.name}`);
      }
    }

    console.log('✅ Experts seeding completed successfully!');
  } catch (err) {
    console.error('❌ Error seeding experts:', err);
  } finally {
    await strapi.destroy();
    process.exit(0);
  }
}

seedExperts().catch(console.error);
