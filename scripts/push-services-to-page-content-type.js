'use strict';

const token = '799604a0c950d4b9e7f5d71388d43bd9e3a38fa8018316db87085876f2f728253b0bac9bd83d905c86f6513d80b923a361b0f89c022160669555c0c90d124fb32e10004a97fa21d4490a1be00b4f243ad4174e5918665d4939c4ae660213caaa27524535fc2d2e4599197ed5ce241af99ea42870374dd3196a9060b1ca9ed6e1';
const baseUrl = 'https://cms.shuru.sa/api';

const servicesPageData = {
  ar: {
    title: 'الخدمات',
    slug: 'services',
    seo: {
      meta_title: 'الخدمات الاستشارية والتنفيذية | شروع',
      meta_description: 'منظومة متكاملة من الخدمات الاستشارية والتنفيذية في مكاتب إدارة المشاريع PMO، التخطيط الاستراتيجي، التميز المؤسسي، التحول الرقمي، وإدارة التغيير.',
      meta_keywords: 'خدمات استشارية, إدارة مشاريع, PMO, استراتيجية, تميز مؤسسي, تحول رقمي, شروع, استشارات السعودية'
    },
    blocks: [
      {
        __component: 'home.hero',
        badgeText: 'منظومة الخدمات الاستشارية والتنفيذية',
        title: 'حلول وخدمات متكاملة لتحويل الاستراتيجيات إلى واقع ملموس',
        subtitle: 'نقدم منظومة متكاملة من الخدمات الاستشارية والتنفيذية التي تركز على سد الفجوات التشغيلية وتحقيق الأثر المستدام للجهات الحكومية والخاصة.',
        primaryCtaText: 'طلب استشارة مخصصة',
        primaryCtaLink: '/contact',
        secondaryCtaText: 'استعراض الخدمات',
        secondaryCtaLink: '#services-grid'
      },
      {
        __component: 'shared.challenges-section',
        title: 'التحديات التنفيذية التي تعالجها خدمات شروع',
        introText: 'نساعد القيادات التنفيذية على التغلب على المعوقات التشغيلية وتحقيق نتائج مستدامة.',
        challenges: [
          {
            pain: 'فجوة بين الخطط الاستراتيجية والتنفيذ الميداني على أرض الواقع',
            solution: 'ربط الأهداف الاستراتيجية بمؤشرات أداء تشغيلية ومسارات تنفيذ محوكمة',
            result: 'تنفيذ دقيق وتسليم المشاريع في مواعيدها المحددة'
          },
          {
            pain: 'تكرار المشاريع المتعثرة وتجاوز الميزانيات المعتمدة',
            solution: 'تأسيس وتشغيل مكاتب PMO ومنظومات رقابة وإدارة مخاطر استباقية',
            result: 'انضباط مالي وتشغيلي ورفع معدل نجاح المشاريع لأكثر من 95%'
          },
          {
            pain: 'صعوبة قياس الأثر واستدامة نتائج التطوير بعد انتهاء المشاريع',
            solution: 'منهجيات تمكين موازية ونقل معرفة وبناء قدرات الكفاءات الوطنية الداخلية',
            result: 'استدامة ذاتية للقدرات المؤسسية دون الاعتماد الدائم على المستشار الخارجي'
          }
        ]
      },
      {
        __component: 'shared.timeline-section',
        badge: 'منهجية العمل',
        title: 'رحلة الشراكة الاستشارية والتنفيذية مع شروع',
        introText: 'منهجية رباعية متكاملة تضمن ووضوح المخرجات والتحكم في الجودة في كل مرحلة.',
        steps: [
          {
            number: '01',
            title: 'التشخيص والتقييم المؤسسي',
            description: 'تحليل الوضع الراهن وتحديد الفجوات التشغيلية ومواءمة التوقعات مع القيادة.',
            deliverable: 'تقرير التقييم وخريطة طريق التنفيذ'
          },
          {
            number: '02',
            title: 'التصميم والهندسة التشغيلية',
            description: 'صياغة نماذج التشغيل، وأدلة الحوكمة، وهيكلة المحافظ والمشاريع والمؤشرات.',
            deliverable: 'أدلة التشغيل والمصفوفات التفصيلية'
          },
          {
            number: '03',
            title: 'التنفيذ والمتابعة اللحظية',
            description: 'تفعيل خطط العمل وإدارة المبادرات عبر لوحات تحكم ذكية وإشراف ميداني مستمر.',
            deliverable: 'لوحات تحكم وتقارير تقدم الإنجاز'
          },
          {
            number: '04',
            title: 'التمكين ونقل المعرفة المؤسسية',
            description: 'تأهيل الفرق الداخلية وتوثيق الدروس المستفادة لضمان استدامة النتائج.',
            deliverable: 'سجلات التمكين والاعتماد النهائي'
          }
        ],
        ctaText: 'ابدأ مشروعك معنا اليوم',
        ctaLink: '/contact'
      },
      {
        __component: 'shared.faq-section',
        badge: 'الأسئلة الشائعة',
        title: 'أسئلة شائعة حول خدمات شروع الاستشارية',
        introText: 'إجابات على أهم الاستفسارات حول نطاق العمل، مدة المشاريع، ونماذج التعاقد.',
        items: [
          {
            question: 'ما الذي يميز خدمات شروع عن بيوت الخبرة الاستشارية التقليدية؟',
            answer: 'شروع لا تكتفي بتقديم التوصيات والتقارير النظرية، بل تتولى القيادة والإشراف التنفيذي الميداني ونقل المعرفة وبناء القدرات المؤسسية الداخلية لضمان تحقيق أثر ملموس ومستدام.'
          },
          {
            question: 'هل يمكن التعاقد على خدمة محددة أم يتطلب الأمر حزمة متكاملة؟',
            answer: 'نقدم مرونة تامة لعملائنا؛ يمكنك الاستفادة من خدمة واحدة محددة (مثل تأسيس PMO أو مواءمة الحوكمة) أو حزمة متكاملة تتناسب مع مرحلة النضج المؤسسي.'
          },
          {
            question: 'كيف تضمن شروع مواءمة الخدمات مع الأنظمة واللوائح السعودية؟',
            answer: 'جميع خدماتنا واستشاراتنا مصممة بالكامل وفق البيئة التنظيمية والتشريعية في المملكة العربية السعودية ومعايير رؤية 2030، مع الاستناد لأفضل المعايير العالمية المعتمدة.'
          }
        ]
      },
      {
        __component: 'home.cta-footer',
        headline: 'هل تبحث عن شريك تنفيذي يقود مشروعك القادم بنجاح؟',
        primaryButtonText: 'طلب معلومات',
        primaryButtonLink: '/request-info',
        alternativeText: 'تواصل معنا الآن',
        alternativeLink: '/contact'
      }
    ]
  },
  en: {
    title: 'Services',
    slug: 'services',
    seo: {
      meta_title: 'Consulting & Execution Services | Shuru',
      meta_description: 'Integrated consulting and execution tracks in PMO development, strategic planning, institutional excellence, digital transformation, and change management.',
      meta_keywords: 'consulting services, execution excellence, PMO, strategy, digital transformation, Shuru, Saudi consulting'
    },
    blocks: [
      {
        __component: 'home.hero',
        badgeText: 'Consulting & Execution Ecosystem',
        title: 'Integrated Services to Turn Strategies into Tangible Realities',
        subtitle: 'We provide end-to-end consulting and execution services engineered to bridge operational gaps and deliver sustainable impact for public and private organizations.',
        primaryCtaText: 'Request a Consultation',
        primaryCtaLink: '/en/contact',
        secondaryCtaText: 'Explore Services',
        secondaryCtaLink: '#services-grid'
      },
      {
        __component: 'shared.challenges-section',
        title: 'Operational Challenges Addressed by Shuru Services',
        introText: 'We empower executive leaders to overcome operational bottlenecks and achieve measurable outcomes.',
        challenges: [
          {
            pain: 'Disconnection between high-level strategies and ground-level execution',
            solution: 'Translating strategic objectives into governed operational KPIs and roadmaps',
            result: 'Disciplined execution and on-time delivery across all portfolio initiatives'
          },
          {
            pain: 'Recurring project delays, budget overruns, and scope creep',
            solution: 'Establishing and operating robust PMOs with proactive risk management',
            result: 'Strict financial control and >95% project success rate'
          },
          {
            pain: 'Inability to sustain results after external consultants depart',
            solution: 'Parallel capability transfer and hands-on coaching for internal teams',
            result: 'Full institutional independence and long-term organizational capability'
          }
        ]
      },
      {
        __component: 'shared.timeline-section',
        badge: 'Our Methodology',
        title: 'The Advisory & Execution Journey with Shuru',
        introText: 'A structured 4-stage methodology delivering transparent milestones and quality governance.',
        steps: [
          {
            number: '01',
            title: 'Diagnosis & Maturity Assessment',
            description: 'Analyzing the current state, identifying gaps, and aligning with executive leadership.',
            deliverable: 'Assessment Report & Roadmap'
          },
          {
            number: '02',
            title: 'Operating Model Design',
            description: 'Engineering governance frameworks, operating manuals, and portfolio structures.',
            deliverable: 'Operating Frameworks & SOPs'
          },
          {
            number: '03',
            title: 'Execution & Real-time Tracking',
            description: 'Activating initiative roadmaps via live dashboards and hands-on field leadership.',
            deliverable: 'Executive Dashboards & Progress Reports'
          },
          {
            number: '04',
            title: 'Capability Transfer & Sustainability',
            description: 'Upskilling internal staff and conducting handovers for enduring performance.',
            deliverable: 'Handover Records & Sustainability Plans'
          }
        ],
        ctaText: 'Start Your Project Today',
        ctaLink: '/en/contact'
      },
      {
        __component: 'shared.faq-section',
        badge: 'Frequently Asked Questions',
        title: 'FAQs About Shuru Consulting Services',
        introText: 'Clear answers regarding service scope, timelines, and flexible engagement models.',
        items: [
          {
            question: 'How does Shuru differ from traditional consulting firms?',
            answer: "Shuru doesn't just deliver theoretical slide decks. We provide hands-on field leadership, operational execution, and internal capability development to ensure enduring impact."
          },
          {
            question: 'Can we engage Shuru for a specific service track rather than a full transformation?',
            answer: 'Yes, we offer complete modularity. You can engage us for a single track (such as PMO establishment or governance alignment) or an integrated suite.'
          },
          {
            question: 'How does Shuru ensure compliance with Saudi regulatory frameworks?',
            answer: 'All our methodologies are designed in harmony with Saudi Arabian regulatory guidelines and Vision 2030 priorities, while adopting international best practices.'
          }
        ]
      },
      {
        __component: 'home.cta-footer',
        headline: 'Looking for an execution partner to lead your next initiative?',
        primaryButtonText: 'Request Information',
        primaryButtonLink: '/en/request-info',
        alternativeText: 'Contact Us',
        alternativeLink: '/en/contact'
      }
    ]
  }
};

async function pushServicesPage() {
  const documentId = 'fevlpc2owlygon46d055m066';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  console.log(`--- Updating Remote Page api::page.page (${documentId}) ---`);

  // 1. Arabic update
  console.log('Updating Arabic Services Page (fevlpc2owlygon46d055m066)...');
  const arRes = await fetch(`${baseUrl}/pages/${documentId}?locale=ar`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ data: servicesPageData.ar })
  });
  console.log('Update AR Status:', arRes.status);
  const arJson = await arRes.json();
  if (!arRes.ok) {
    console.error('AR Error:', JSON.stringify(arJson, null, 2));
  } else {
    console.log('✅ AR updated successfully');
  }

  // 2. English update
  console.log('Updating English Services Page (fevlpc2owlygon46d055m066)...');
  const enRes = await fetch(`${baseUrl}/pages/${documentId}?locale=en`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ data: servicesPageData.en })
  });
  console.log('Update EN Status:', enRes.status);
  const enJson = await enRes.json();
  if (!enRes.ok) {
    console.error('EN Error:', JSON.stringify(enJson, null, 2));
  } else {
    console.log('✅ EN updated successfully');
  }

  console.log('--- Services Page Update Completed ---');
}

if (require.main === module) {
  pushServicesPage();
}

module.exports = { pushServicesPage };
