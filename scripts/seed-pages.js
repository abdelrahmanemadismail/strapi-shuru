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
          { pain: "الاجتماعات منتظمة، والتقارير دقيقة، لكن القيادة لا تستطيع الإجابة بثقة: “هل نحن نتقدم فعلاً؟”", solution: "تشخيص البيئة، تحليل الجدوى، قياس القيمة", result: "وضوح تام لما يحقق نتائج حقيقية" },
          { pain: "المبادرات تتباطأ أو تفقد هدفها الأصلي", solution: "نموذج تنفيذ مخصص، حوكمة مرنة، ضبط الصلاحيات", result: "المشاريع تنتهي كما خُطط لها" },
          { pain: "الإدارة العليا تصبح “مدير مشروع”", solution: "آلية تدخل قيادي منظمة، فصل القرار الاستراتيجي عن التشغيل، لوحات قيادة تنفيذية", result: "القيادة تقود الاتجاه" },
          { pain: "استمرار المشاريع بلا جدوى", solution: "قياس القيمة المستمر، إعادة ترتيب الأولويات، إيقاف المشاريع منخفضة الأثر", result: "توظيف أمثل للموارد وأثر أعلى" }
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
          { pain: "Regular meetings and accurate reports, but leadership cannot confidently answer: 'Are we really progressing?'", solution: "Environment assessment, feasibility analysis, value measurement", result: "Absolute clarity on what achieves real results" },
          { pain: "Initiatives slow down or lose their original purpose", solution: "Custom execution model, agile governance, authority control", result: "Projects finish as planned" },
          { pain: "Top management becomes a 'project manager'", solution: "Structured leadership intervention mechanism, separating strategic decisions from operations, executive dashboards", result: "Leadership guides the direction" },
          { pain: "Continuing projects with no value", solution: "Continuous value measurement, reprioritization, stopping low-impact projects", result: "Optimal resource utilization and higher impact" }
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
  },
  terms: {
    ar: { title: "الشروط والأحكام", slug: "terms", locale: "ar", blocks: [
      {
        __component: "home.hero",
        title: "الشروط والأحكام",
        subtitle: "يرجى قراءة هذه الشروط بعناية قبل استخدام موقعنا وخدماتنا."
      },
      {
        __component: "shared.rich-text",
        body: `
## 1. مقدمة
مرحباً بك في موقع شروع. من خلال الوصول إلى موقعنا أو استخدام خدماتنا، فإنك توافق على الالتزام الصارم بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى التوقف عن استخدام الموقع والخدمات فوراً.

## 2. الخدمات المقدمة
توفر "شروع" خدمات استشارية استراتيجية وحلول تنفيذية للمؤسسات. جميع الخدمات تخضع لعقود منفصلة يتم إبرامها مع العملاء. المعلومات المقدمة على هذا الموقع هي لأغراض إعلامية عامة ولا تعتبر نصيحة مهنية مُلزمة إلا في إطار تعاقد رسمي.

## 3. حقوق الملكية الفكرية
جميع المحتويات المتاحة على هذا الموقع (بما في ذلك وليس حصراً: النصوص، التصاميم، الرسومات، الشعارات، الصور، المقاطع الصوتية، والبرمجيات) هي ملكية حصرية لشركة "شروع" أو مُرخصة لها، وهي محمية بموجب قوانين حقوق النشر والملكية الفكرية المحلية والدولية. يُمنع منعاً باتاً نسخ، توزيع، إعادة إنتاج، أو استخدام أي من هذه المحتويات دون إذن كتابي مسبق.

## 4. شروط الاستخدام المقبول
بتصفحك لهذا الموقع، أنت توافق على:
- استخدام الموقع لأغراض قانونية ومشروعة فقط.
- عدم اتخاذ أي إجراء من شأنه إلحاق الضرر بالبنية التحتية للموقع أو تعطيل خدماته.
- عدم محاولة الوصول غير المصرح به إلى أي جزء من الموقع أو الأنظمة المرتبطة به.
- عدم استخدام الموقع لنشر أي محتوى مسيء، تشهيري، أو ينتهك حقوق الآخرين.

## 5. إخلاء المسؤولية وتحديد المسؤولية
رغم بذلنا كل جهد لضمان دقة وتحديث المعلومات على الموقع، يتم تقديم المحتوى "كما هو" دون أي ضمانات صريحة أو ضمنية.
لا تتحمل "شروع" أي مسؤولية عن أي أضرار مباشرة، غير مباشرة، عرضية، أو تبعية تنشأ عن استخدامك أو عدم قدرتك على استخدام الموقع أو الاعتماد على المعلومات المقدمة فيه.

## 6. روابط الأطراف الثالثة
قد يحتوي موقعنا على روابط لمواقع إلكترونية تابعة لأطراف ثالثة. هذه الروابط توفر لراحتك فقط، ولا تعني مصادقتنا على المحتوى الموجود فيها. نحن غير مسؤولين عن ممارسات الخصوصية أو محتوى تلك المواقع المستقلة.

## 7. التعديلات على الشروط
نحتفظ بالحق الكامل في تحديث، تعديل، أو تغيير هذه الشروط والأحكام في أي وقت دون إشعار مسبق. يُعتبر استمرارك في استخدام الموقع بعد نشر أي تعديلات بمثابة قبول صريح لهذه التعديلات. يُرجى مراجعة هذه الصفحة بشكل دوري.

## 8. القانون المطبق
تخضع هذه الشروط والأحكام وتُفسر وفقاً للقوانين المعمول بها في المملكة العربية السعودية. أي نزاع ينشأ عن أو يتعلق باستخدام هذا الموقع يخضع للاختصاص الحصري للمحاكم السعودية.

## 9. معلومات التواصل
لأي استفسارات أو ملاحظات بشأن هذه الشروط والأحكام، يرجى التواصل معنا عبر:
- **البريد الإلكتروني:** info@shuru.sa
- **صفحة التواصل:** [/contact](/contact)
        `
      }
    ] },
    en: { title: "Terms and Conditions", slug: "terms", locale: "en", blocks: [
      {
        __component: "home.hero",
        title: "Terms and Conditions",
        subtitle: "Please read these terms carefully before using our website and services."
      },
      {
        __component: "shared.rich-text",
        body: `
## 1. Introduction
Welcome to Shuru. By accessing or using our website and services, you agree to be strictly bound by these Terms and Conditions. If you do not agree to any part of these terms, please stop using our website and services immediately.

## 2. Services Provided
Shuru provides strategic consulting services and executive solutions for organizations. All services are subject to separate contracts signed with clients. The information provided on this website is for general informational purposes and does not constitute binding professional advice unless specifically part of a formal contract.

## 3. Intellectual Property Rights
All content available on this website (including but not limited to: text, designs, graphics, logos, images, audio clips, and software) is the exclusive property of Shuru or its licensors, and is protected by local and international copyright and intellectual property laws. Copying, distributing, reproducing, or using any of this content without prior written permission is strictly prohibited.

## 4. Acceptable Use
By browsing this website, you agree to:
- Use the website for lawful and legitimate purposes only.
- Refrain from any action that could damage the website's infrastructure or disrupt its services.
- Not attempt unauthorized access to any part of the website or connected systems.
- Not use the website to publish any offensive, defamatory content, or content that violates the rights of others.

## 5. Disclaimer and Limitation of Liability
While we make every effort to ensure the accuracy and currency of information on the website, the content is provided "as is" without any express or implied warranties.
Shuru bears no liability for any direct, indirect, incidental, or consequential damages arising from your use or inability to use the website or reliance on any information provided herein.

## 6. Third-Party Links
Our website may contain links to third-party websites. These links are provided for convenience only and do not signify our endorsement of their content. We are not responsible for the privacy practices or content of these independent sites.

## 7. Modifications to Terms
We reserve the absolute right to update, modify, or alter these Terms and Conditions at any time without prior notice. Your continued use of the website following the posting of any changes constitutes explicit acceptance of those changes. Please review this page periodically.

## 8. Governing Law
These Terms and Conditions shall be governed by and construed in accordance with the laws applicable in the Kingdom of Saudi Arabia. Any dispute arising out of or related to the use of this website shall be subject to the exclusive jurisdiction of the Saudi courts.

## 9. Contact Information
For any inquiries or feedback regarding these Terms and Conditions, please contact us at:
- **Email:** info@shuru.sa
- **Contact Page:** [/contact](/contact)
        `
      }
    ] }
  },
  privacy: {
    ar: { title: "سياسة الخصوصية", slug: "privacy", locale: "ar", blocks: [
      {
        __component: "home.hero",
        title: "سياسة الخصوصية",
        subtitle: "نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية."
      },
      {
        __component: "shared.rich-text",
        body: `
## 1. التزامنا بالخصوصية
في "شروع"، تعتبر خصوصيتك من أعلى أولوياتنا. نحن نلتزم بالشفافية الكاملة حول كيفية جمع بياناتك الشخصية واستخدامها وحمايتها عند زيارتك لموقعنا الإلكتروني أو الاستفادة من خدماتنا.

## 2. المعلومات التي نجمعها
نحن نقوم بجمع نوعين من المعلومات:
- **المعلومات المقدمة طواعية:** وتشمل البيانات التي تدخلها عند ملء نماذج الاتصال، مثل الاسم، المسمى الوظيفي، اسم المؤسسة، البريد الإلكتروني، ورقم الهاتف، وتفاصيل استفسارك.
- **معلومات الجمع التلقائي (البيانات التحليلية):** عند تصفحك للموقع، قد نقوم آلياً بجمع معلومات تقنية مثل عنوان بروتوكول الإنترنت (IP)، نوع المتصفح، نظام التشغيل، الصفحات التي قمت بزيارتها، والوقت المستغرق في الموقع، وذلك باستخدام ملفات تعريف الارتباط (Cookies).

## 3. كيف نستخدم معلوماتك
تُستخدم البيانات التي نجمعها للأغراض التالية:
- للتواصل معك والرد على استفساراتك وطلبات الاستشارة.
- لتقديم خدماتنا الاستشارية وتخصيصها لتلائم احتياجات مؤسستك.
- لتحسين تجربة المستخدم وتطوير أداء الموقع الإلكتروني.
- لإرسال النشرات الإخبارية، التحديثات، والمحتوى المهني الذي قد يهمك (يمكنك إلغاء الاشتراك في أي وقت).
- للامتثال للمتطلبات القانونية والتنظيمية.

## 4. كيف نشارك معلوماتك
نحن نلتزم بعدم بيع، تأجير، أو تداول بياناتك الشخصية لأي أطراف ثالثة لأغراض تجارية. قد نشارك معلوماتك في الحالات المحدودة التالية:
- **مزودي الخدمات:** مع شركائنا التقنيين الذين يساعدوننا في تشغيل الموقع (مثل خدمات استضافة السحابة وأنظمة إدارة البريد الإلكتروني)، بشرط التزامهم الصارم بسرية البيانات.
- **المتطلبات القانونية:** إذا طُلب منا ذلك بموجب أحكام القانون أو استجابة لطلبات حكومية ورسمية، لحماية حقوق "شروع" القانونية لضمان سلامة وأمن المستخدمين.

## 5. أمن البيانات وحمايتها
نتخذ في "شروع" تدابير وإجراءات أمنية تقنية وتنظيمية متقدمة لحماية بياناتك من الوصول غير المصرح به، التعديل، الإفصاح، أو الإتلاف. وتُحفظ البيانات على خوادم آمنة تخضع لرقابة صارمة. ومع ذلك، يُرجى ملاحظة أنه لا توجد وسيلة نقل عبر الإنترنت آمنة بنسبة 100%.

## 6. ملفات تعريف الارتباط (Cookies)
نستخدم ملفات تعريف الارتباط لتحسين تجربة تصفحك وتحليل حركة الزيارات. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك ورفضها إذا رغبت، رغم أن ذلك قد يؤثر على فعالية بعض ميزات الموقع.

## 7. حقوقك المتعلقة ببياناتك
بصفتك مستخدماً، يحق لك دائماً:
- الوصول إلى بياناتك الشخصية التي نحتفظ بها ومعرفتها.
- طلب تصحيح أي بيانات غير دقيقة أو تحديثها.
- طلب حذف بياناتك الشخصية من سجلاتنا (حق النسيان) في ظروف معينة.
- سحب موافقتك على تلقي المراسلات التسويقية.

## 8. التعديلات على سياسة الخصوصية
قد نقوم بتحديث هذه السياسة من حين لآخر لتعكس التغييرات في ممارساتنا أو لاعتبارات تنظيمية. سيتم نشر التحديثات على هذه الصفحة وتحديث تاريخ المراجعة. استخدامك المستمر للموقع يعني قبولك للسياسة المحدثة.

## 9. تواصل معنا لمسائل الخصوصية
إذا كان لديك أي سؤال، استفسار، أو مخاوف بشأن هذه السياسة أو طريقة تعاملنا مع بياناتك، يرجى مراسلتنا فوراً:
- **البريد الإلكتروني:** privacy@shuru.sa
- **الهاتف:** [يضاف رقم الهاتف إن وجد]
        `
      }
    ] },
    en: { title: "Privacy Policy", slug: "privacy", locale: "en", blocks: [
      {
        __component: "home.hero",
        title: "Privacy Policy",
        subtitle: "We respect your privacy and are committed to protecting your personal data."
      },
      {
        __component: "shared.rich-text",
        body: `
## 1. Our Commitment to Privacy
At Shuru, your privacy is a top priority. We are committed to complete transparency regarding how we collect, use, and protect your personal data when you visit our website or utilize our services.

## 2. Information We Collect
We collect two main types of information:
- **Voluntarily Provided Information:** Data you input when filling out contact forms, such as your name, job title, company name, email, phone number, and inquiry details.
- **Automatically Collected Information (Analytics Data):** While you browse our site, we may automatically collect technical info such as your IP address, browser type, operating system, pages visited, and time spent on the site using Cookies.

## 3. How We Use Your Information
The data we collect is utilized for the following purposes:
- To communicate with you and respond to your inquiries and consultation requests.
- To deliver and customize our consulting services to fit your organization's needs.
- To analyze user experience and improve website performance.
- To send newsletters, updates, and professional content that may interest you (you can opt-out at any time).
- To comply with legal and regulatory requirements.

## 4. How We Share Your Information
We strictly promise not to sell, rent, or trade your personal data to any third parties for commercial purposes. We may share your information only in these limited cases:
- **Service Providers:** With our technical partners who help us operate the site (like cloud hosting and email management systems), provided they agree to strict confidentiality.
- **Legal Requirements:** If required by law or in response to official government requests, to protect Shuru's legal rights and ensure user safety.

## 5. Data Security and Protection
Shuru deploys advanced technical and organizational security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Data is stored on secure, strictly monitored servers. However, please note that no internet transmission method is 100% physically secure.

## 6. Cookies
We use cookies to improve your browsing experience and analyze web traffic. You can adjust your browser settings to decline cookies if you prefer, although doing so may impact the functionality of certain website features.

## 7. Your Data Rights
As a user, you consistently have the right to:
- Access and know the personal data we hold about you.
- Request corrections or updates to any inaccurate info.
- Request the deletion of your personal data from our records in certain circumstances.
- Withdraw consent for receiving marketing communications.

## 8. Amendments to Privacy Policy
We may update this policy occasionally to reflect changes in our practices or regulatory standards. Updates will be posted on this page along with a revised date. Your continued use of the website implies acceptance of the updated policy.

## 9. Contact Us for Privacy Matters
If you have any questions, concerns, or inquiries regarding this policy or how we handle your data, please contact us immediately:
- **Email:** privacy@shuru.sa
- **Phone:** [Add Phone Number if applicable]
        `
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
    console.log('❌ Could not import seed data');
    console.dir(error, { depth: null });
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

seedData().catch(console.error);
