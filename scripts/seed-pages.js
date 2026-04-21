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
          { title: "نموذج تنفيذ واضح – Execution Blueprint", description: "خارطة طريق لكيفية عمل المنظمة", iconName: "Map" },
          { title: "آلية قرار قابلة للتكرار – Repeatable Decision System", description: "نظام عمل لا يتأثر بتغير الأشخاص", iconName: "Repeat" },
          { title: "حوكمة رشيقة – Agile Governance", description: "إجراءات تدعم سرعة التنفيذ ولا تعيقه", iconName: "Zap" },
          { title: "قياس أثر حقيقي – Real Impact Measurement", description: "لغة أرقام واضحة تفهمها القيادة العليا", iconName: "BarChart" }
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
          { title: "Execution Blueprint", description: "A roadmap for how the organization operates", iconName: "Map" },
          { title: "Repeatable Decision System", description: "A work system that isn't affected by personnel changes", iconName: "Repeat" },
          { title: "Agile Governance", description: "Procedures that support execution speed, not hinder it", iconName: "Zap" },
          { title: "Real Impact Measurement", description: "Clear numerical language understood by top management", iconName: "BarChart" }
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
  },
  "about-us": {
    ar: { title: "من نحن", slug: "about-us", locale: "ar", blocks: [
      {
        __component: "home.hero",
        title: "من نحن",
        subtitle: "نحن في شروع نؤمن بأن التنفيذ هو الفاصل بين الاستراتيجية المكتوبة والواقع الملموس. لم نأتِ لنضيف إجراءات جديدة، بل لنعيد تعريف كيفية اتخاذ القرار التنفيذي.",
        primaryCtaText: "اكتشف منهجيتنا",
        primaryCtaLink: "/methodology",
        secondaryCtaText: "تواصل معنا",
        secondaryCtaLink: "/contact"
      },
      {
        __component: "home.value",
        title: "قيم شروع الأساسية",
        introText: "نؤمن بالعمل وفقًا لأسس توجه كل قرار نتخذه مع عملائنا.",
        points: [
          { title: "الأثر الملموس", description: "نركز على النتائج الفعلية التي تحدث تغييراً حقيقياً." },
          { title: "الشفافية والوضوح", description: "نتخذ قرارات مبنية على معطيات وواقع، لا على افتراضات." },
          { title: "تمكين الفريق", description: "ننقل القدرات لفرقك لتستمر في النجاح بدون الحاجة الدائمة لنا." }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "هل مستعد لتغيير مسار التنفيذ؟",
        primaryButtonText: "احجز جلسة استكشافية",
        primaryButtonLink: "/consultation"
      }
    ] },
    en: { title: "About Us", slug: "about-us", locale: "en", blocks: [
      {
        __component: "home.hero",
        title: "About Us",
        subtitle: "At Shuru, we believe execution is the deciding factor between a written strategy and a tangible reality. We didn't come to add new procedures, but to redefine how executive decisions are made.",
        primaryCtaText: "Discover Our Methodology",
        primaryCtaLink: "/methodology",
        secondaryCtaText: "Contact Us",
        secondaryCtaLink: "/contact"
      },
      {
        __component: "home.value",
        title: "Shuru Core Values",
        introText: "We believe in working according to principles that guide every decision we make with our clients.",
        points: [
          { title: "Tangible Impact", description: "We focus on actual results that make a real difference." },
          { title: "Transparency & Clarity", description: "We make decisions based on data and reality, not assumptions." },
          { title: "Team Empowerment", description: "We transfer capabilities to your teams to continue succeeding without the constant need for us." }
        ]
      },
      {
        __component: "home.cta-footer",
        headline: "Ready to change your execution path?",
        primaryButtonText: "Book a discovery session",
        primaryButtonLink: "/consultation"
      }
    ] }
  },
  "case-studies": {
    ar: { title: "دراسات الحالة", slug: "case-studies", locale: "ar", blocks: [
      {
        __component: "home.hero",
        title: "قصص نجاح واقعية",
        subtitle: "تعرف على كيفية تحويلنا للتحديات الاستراتيجية إلى إنجازات ملموسة عبر منهجية شروع.",
        primaryCtaText: "احجز جلسة الآن",
        primaryCtaLink: "/consultation",
        secondaryCtaText: "تصفح المخرجات",
        secondaryCtaLink: "/outputs"
      },
      {
        __component: "home.overview",
        title: "دراسات حالة بارزة",
        introText: "أمثلة حقيقية لشراكاتنا الناجحة مع مختلف المنظمات.",
        cards: [
          { title: "تحول رقمي لجهة حكومية", description: "إعادة هيكلة إجراءات العمل وتسريع اتخاذ القرار بنسبة 50%." },
          { title: "رفع الكفاءة التشغيلية لمؤسسة رائدة", description: "تقليل الهدر وتحسين تخصيص الموارد وزيادة الإنتاجية بنسبة 40%." },
          { title: "حوكمة المشاريع الكبرى", description: "تأسيس إطار عمل لمتابعة تقدم المبادرات بدقة عالية وبدون تأخير." }
        ]
      },
      {
        __component: "home.testimonials-section",
        title: "رأي شركاء النجاح",
        introText: "ماذا يقول عملاؤنا عن الأثر الذي حققناه معهم.",
        showSection: true
      },
      {
        __component: "home.cta-footer",
        headline: "تطمح لتكون قصة النجاح القادمة؟",
        primaryButtonText: "تواصل معنا لتحقيق أهدافك",
        primaryButtonLink: "/contact"
      }
    ] },
    en: { title: "Case Studies", slug: "case-studies", locale: "en", blocks: [
      {
        __component: "home.hero",
        title: "Real Success Stories",
        subtitle: "Discover how we transformed strategic challenges into tangible achievements through the Shuru methodology.",
        primaryCtaText: "Book a session now",
        primaryCtaLink: "/consultation",
        secondaryCtaText: "Browse Outputs",
        secondaryCtaLink: "/outputs"
      },
      {
        __component: "home.overview",
        title: "Featured Case Studies",
        introText: "Real examples of our successful partnerships with various organizations.",
        cards: [
          { title: "Digital Transformation for a Government Entity", description: "Restructuring business processes and accelerating decision-making by 50%." },
          { title: "Increasing Operational Efficiency for a Leading Org", description: "Reducing waste, improving resource allocation, and increasing productivity by 40%." },
          { title: "Mega Projects Governance", description: "Establishing a framework to track initiative progress with high accuracy and without delay." }
        ]
      },
      {
        __component: "home.testimonials-section",
        title: "Success Partners' Feedback",
        introText: "What our clients say about the impact we achieved with them.",
        showSection: true
      },
      {
        __component: "home.cta-footer",
        headline: "Aspire to be the next success story?",
        primaryButtonText: "Contact us to achieve your goals",
        primaryButtonLink: "/contact"
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
