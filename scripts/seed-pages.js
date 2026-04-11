'use strict';

const fs = require('fs');
const path = require('path');

const pagesDataGrouped = {
  solutions: {
    ar: { title: "الحلول", slug: "solutions", locale: "ar", blocks: [ /* ... Arabic Solutions blocks ... */
      {
        __component: "home.hero",
        title: "نحول الاستراتيجية إلى تنفيذ يمكن الوثوق به",
        subtitle: "ليست مشكلة المؤسسات نقص المشاريع… بل كثرتها. الفرق تعمل، المبادرات تبدأ، والتقارير تُرفع، لكن النتائج أقل من الجهد المبذول في شروع. نحن لا نضيف إجراءات جديدة، بل نعيد تعريف كيفية اتخاذ القرار التنفيذي لتصبح النتائج قابلة للتنبؤ.",
        primaryCtaText: "استعرض منهجية الحل",
        primaryCtaLink: "/methodology",
        secondaryCtaText: "تواصل معنا",
        secondaryCtaLink: "/contact"
      },
      {
        __component: "shared.challenges-section",
        title: "التحديات التنفيذية",
        challenges: [
          { pain: "الاجتماعات منتظمة، والتقارير دقيقة، لكن القيادة لا تستطيع الإجابة بثقة: “هل نحن نتقدم فعلاً؟”", intervention: "تشخيص البيئة، تحليل الجدوى، قياس القيمة", result: "وضوح تام لما يحقق نتائج حقيقية" },
          { pain: "المبادرات تتباطأ أو تفقد هدفها الأصلي", intervention: "نموذج تنفيذ مخصص، حوكمة مرنة، ضبط الصلاحيات", result: "المشاريع تنتهي كما خُطط لها" },
          { pain: "الإدارة العليا تصبح “مدير مشروع”", intervention: "آلية تدخل قيادي منظمة، فصل القرار الاستراتيجي عن التشغيل، لوحات قيادة تنفيذية", result: "القيادة تقود الاتجاه" },
          { pain: "استمرار المشاريع بلا جدوى", intervention: "قياس القيمة المستمر، إعادة ترتيب الأولويات، إيقاف المشاريع منخفضة الأثر", result: "توظيف أمثل للموارد وأثر أعلى" }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "هل تعاني منظمتك من أحد هذه التحديات؟",
        primaryButtonText: "احجز جلسة استكشافية",
        primaryButtonLink: "/consultation"
      }
    ] },
    en: { title: "Solutions", slug: "solutions", locale: "en", blocks: [ /* ... English Solutions blocks ... */
      {
        __component: "home.hero",
        title: "We turn strategy into execution you can trust",
        subtitle: "The problem for organizations is not a lack of projects... but an abundance of them. Teams work, initiatives start, and reports are submitted, but the results fall short of the effort expended in Shuru. We don't add new procedures, but redefine how executive decisions are made so results become predictable.",
        primaryCtaText: "Explore Solution Methodology",
        primaryCtaLink: "/methodology",
        secondaryCtaText: "Contact Us",
        secondaryCtaLink: "/contact"
      },
      {
        __component: "shared.challenges-section",
        title: "Execution Challenges",
        challenges: [
          { pain: "Regular meetings and accurate reports, but leadership cannot confidently answer: 'Are we really progressing?'", intervention: "Environment assessment, feasibility analysis, value measurement", result: "Absolute clarity on what achieves real results" },
          { pain: "Initiatives slow down or lose their original purpose", intervention: "Custom execution model, agile governance, authority control", result: "Projects finish as planned" },
          { pain: "Top management becomes a 'project manager'", intervention: "Structured leadership intervention mechanism, separating strategic decisions from operations, executive dashboards", result: "Leadership guides the direction" },
          { pain: "Continuing projects with no value", intervention: "Continuous value measurement, reprioritization, stopping low-impact projects", result: "Optimal resource utilization and higher impact" }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "Does your organization suffer from any of these challenges?",
        primaryButtonText: "Book a discovery session",
        primaryButtonLink: "/consultation"
      }
    ] }
  },
  methodology: {
    ar: { title: "المنهجية", slug: "methodology", locale: "ar", blocks: [
      {
        __component: "shared.timeline-section",
        title: "منهجية شروع",
        steps: [
          { title: "فهم الواقع – Assess Reality", description: "نقيم الواقع التنفيذي كما هو، لا كما يُرفع في التقارير", icon: "Chart" },
          { title: "إعادة التصميم – Redesign", description: "نصمم طريقة اتخاذ القرار لتقليل الهدر البيروقراطي", icon: "Blueprint" },
          { title: "التفعيل الحقيقي – Implement", description: "نطبق النموذج داخل مشاريعك القائمة لنرى الأثر فوراً", icon: "Implementation" },
          { title: "نقل القدرة – Transfer Capability", description: "نمكّن فريقك ليصبح قادراً على الاستمرار بدوننا", icon: "Empowerment" }
        ]
      },
      {
        __component: "shared.quote-section",
        quoteText: "الهدف ليس إدارة مشاريعك، بل أن لا تحتاج لمن يديرها لك."
      },
      {
        __component: "home.cta-footer",
        headline: "دعنا نطبق منهجيتنا معاً",
        primaryButtonText: "احجز جلسة استشارية للتطبيق العملي",
        primaryButtonLink: "/consultation"
      }
    ] },
    en: { title: "Methodology", slug: "methodology", locale: "en", blocks: [
      {
        __component: "shared.timeline-section",
        title: "Shuru Methodology",
        steps: [
          { title: "Assess Reality", description: "We assess the executive reality as it is, not as reported in reports", icon: "Chart" },
          { title: "Redesign", description: "We design the decision-making method to reduce bureaucratic waste", icon: "Blueprint" },
          { title: "Implement", description: "We apply the model within your existing projects to see immediate impact", icon: "Implementation" },
          { title: "Transfer Capability", description: "We empower your team to be able to continue without us", icon: "Empowerment" }
        ]
      },
      {
        __component: "shared.quote-section",
        quoteText: "The goal is not to manage your projects, but that you won't need someone to manage them for you."
      },
      {
        __component: "home.cta-footer",
        headline: "Let's apply our methodology together",
        primaryButtonText: "Book a practical consultation session",
        primaryButtonLink: "/consultation"
      }
    ] }
  },
  outputs: {
    ar: { title: "المخرجات", slug: "outputs", locale: "ar", blocks: [
      {
        __component: "home.overview",
        title: "المخرجات المتوقعة مع شروع",
        introText: "نركز على النتائج الفعلية والمستدامة للمنظمات.",
        cards: [
          { title: "نموذج تنفيذ واضح – Execution Blueprint", description: "خارطة طريق لكيفية عمل المنظمة" },
          { title: "آلية قرار قابلة للتكرار – Repeatable Decision System", description: "نظام عمل لا يتأثر بتغير الأشخاص" },
          { title: "حوكمة رشيقة – Agile Governance", description: "إجراءات تدعم سرعة التنفيذ ولا تعيقه" },
          { title: "قياس أثر حقيقي – Real Impact Measurement", description: "لغة أرقام واضحة تفهمها القيادة العليا" }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "هل أنت جاهز لتغيير مسار التنفيذ؟",
        primaryButtonText: "احجز جلسة لمناقشة المخرجات المناسبة لمؤسستك",
        primaryButtonLink: "/consultation"
      }
    ] },
    en: { title: "Outputs", slug: "outputs", locale: "en", blocks: [
      {
        __component: "home.overview",
        title: "Expected Outputs with Shuru",
        introText: "We focus on actual and sustainable results for organizations.",
        cards: [
          { title: "Execution Blueprint", description: "A roadmap for how the organization operates" },
          { title: "Repeatable Decision System", description: "A work system that isn't affected by personnel changes" },
          { title: "Agile Governance", description: "Procedures that support execution speed, not hinder it" },
          { title: "Real Impact Measurement", description: "Clear numerical language understood by top management" }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "Are you ready to change the execution path?",
        primaryButtonText: "Book a session to discuss appropriate outputs for your organization",
        primaryButtonLink: "/consultation"
      }
    ] }
  },
  "success-stories": {
    ar: { title: "قصص النجاح", slug: "success-stories", locale: "ar", blocks: [
      {
        __component: "home.hero",
        title: "قصص نجاح عملائنا في شروع",
        subtitle: "عملاؤنا شهدوا تحوّلًا حقيقيًا في كيفية إدارة المشاريع وتحقيق النتائج",
        primaryCtaText: "تعرف على قصص النجاح التفصيلية",
        primaryCtaLink: "/solutions"
      },
      {
        __component: "home.testimonials-section",
        title: "ماذا يقول عملاؤنا؟",
        showSection: true
      }
    ] },
    en: { title: "Success Stories", slug: "success-stories", locale: "en", blocks: [
      {
        __component: "home.hero",
        title: "Our clients' success stories with Shuru",
        subtitle: "Our clients have witnessed a real transformation in how they manage projects and achieve results",
        primaryCtaText: "Learn about detailed success stories",
        primaryCtaLink: "/solutions"
      },
      {
        __component: "home.testimonials-section",
        title: "What our clients say?",
        showSection: true
      }
    ] }
  }
};

async function seedData() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'info';

  try {
    for (const [slug, localesData] of Object.entries(pagesDataGrouped)) {
      const pageAr = localesData.ar;
      const pageEn = localesData.en;

      console.log(`Seeding Page: ${slug}...`);

      const existingPageAr = await app.documents('api::page.page').findFirst({
        filters: { slug: slug, locale: 'ar' }
      });

      let baseDocumentId;

      if (existingPageAr) {
        baseDocumentId = existingPageAr.documentId;
        // Update Arabic
        await app.documents('api::page.page').update({
           documentId: baseDocumentId,
           locale: 'ar',
           data: pageAr,
           status: 'published'
        });

        // Update or create English linked to Arabic documentId
        await app.documents('api::page.page').update({
           documentId: baseDocumentId,
           locale: 'en',
           data: pageEn,
           status: 'published'
        });
      } else {
        // Create Arabic first to establish document
        const createdAr = await app.documents('api::page.page').create({ locale: 'ar',
           data: pageAr,
           status: 'published'
        });
        baseDocumentId = createdAr.documentId;

        // Create English translation
        await app.documents('api::page.page').update({
           documentId: baseDocumentId,
           locale: 'en',
           data: pageEn,
           status: 'published'
        });
      }
    }
    console.log('\n✅ Seeding pages completed successfully!');
    // Allow pending queries to finish before destroying the app
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (error) {
    console.log('❌ Could not import seed data', error);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedData().catch(console.error);
