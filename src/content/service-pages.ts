import type { FaqItem } from "./shared";
import type { NumberedItem } from "./web-development";

export interface ServicePageContent {
  seoKey: "softwareDevelopment" | "mobileAppDevelopment" | "aiSolutions";
  crumbLabel: string;
  schemaName: string;
  hero: {
    seoHeading: string;
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    subline: string;
    body: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    note: string;
    imageSrc: string;
    imageAlt: string;
  };
  intro: { eyebrow: string; headingLead: string; headingAccent: string; body: string };
  capabilities: { eyebrow: string; headingLead: string; headingAccent?: string; items: NumberedItem[] };
  useCases: { eyebrow: string; headingLead: string; headingAccent: string; items: NumberedItem[] };
  tech: { eyebrow: string; heading: string; body: string; tags: string[]; footnote?: string };
  faq: { eyebrow: string; headingLead: string; headingAccent: string; intro: string };
  faqItems: FaqItem[];
}

export const SOFTWARE_PAGE: ServicePageContent = {
  seoKey: "softwareDevelopment",
  crumbLabel: "Software Development",
  schemaName: "Custom software development",
  hero: {
    seoHeading: "Custom Software Development Company in Kerala",
    eyebrow: "CUSTOM SOFTWARE BUILT AROUND YOUR WORK",
    headingLead: "Less busywork",
    headingAccent: "More room to grow",
    subline: "Scalable and secure software that streamlines operations and drives long-term growth",
    body: "Custom software for businesses in Kerala and across India. We connect your tools, simplify daily operations and give your team a clear view of what matters.",
    primaryCta: { label: "Discuss Your Software Ideas ↗", href: "/contact" },
    secondaryCta: { label: "See What We Build ↓", href: "#capabilities" },
    note: "Scope, timeline and estimate are agreed with you before any work begins",
    imageSrc: "/icons/feature-software.svg",
    imageAlt: "Illustration of a code editor window representing custom software development",
  },
  intro: {
    eyebrow: "BUILT AROUND HOW YOU WORK",
    headingLead: "Software that fits your business",
    headingAccent: "Not the other way round",
    body: "Off-the-shelf tools rarely match the way your team really works. We study your workflows first, then build secure and scalable software that removes repetitive steps, connects your systems and grows with you.",
  },
  capabilities: {
    eyebrow: "WHAT WE BUILD",
    headingLead: "Practical software for everyday operations",
    items: [
      { title: "Business portals and dashboards", description: "One place for your team or customers to see data, track progress and act on it." },
      { title: "Booking and order systems", description: "Take bookings, manage orders and follow each request from enquiry to delivery." },
      { title: "Workflow automation", description: "Replace manual hand-offs, spreadsheets and follow-ups with clear and repeatable steps." },
      { title: "API integrations", description: "Connect your website, payments, accounting and other tools so data moves on its own." },
      { title: "Modernisation of older systems", description: "Improve or rebuild ageing software in stages, without stopping the work that depends on it." },
      { title: "Secure and scalable foundations", description: "Sensible access controls, reliable hosting choices and an architecture ready for more users." },
    ],
  },
  useCases: {
    eyebrow: "WHERE IT HELPS",
    headingLead: "Your workflows",
    headingAccent: "One connected system",
    items: [
      { title: "Operations and back office", description: "Inventory, scheduling, approvals and records managed in one dependable system." },
      { title: "Customers and partners", description: "Self-service portals for orders, requests, documents and status updates." },
      { title: "Reports and decisions", description: "Live dashboards that show your team what is happening without waiting for a report." },
    ],
  },
  tech: {
    eyebrow: "TECHNOLOGY THAT WORKS",
    heading: "Technology that works. Teams that deliver",
    body: "We choose proven tools for the job rather than the latest trend. Our engineers build, test and deploy with the stack that suits your product and your budget.",
    tags: [".NET", "Node.js", "Python", "FastAPI", "PHP", "PostgreSQL", "MySQL", "SQL Server", "Docker", "AWS", "Azure", "Google Cloud"],
  },
  faq: {
    eyebrow: "BEFORE WE BUILD",
    headingLead: "Good questions",
    headingAccent: "Straight answers",
    intro: "A little clarity about how custom software projects work with us.",
  },
  faqItems: [
    {
      question: "How do I know if I need custom software?",
      answer:
        "If your team keeps working around its tools, repeating the same steps or maintaining spreadsheets that no one trusts, custom software may help. We talk through your workflow and tell you honestly if an existing product would serve you better.",
    },
    {
      question: "How are software projects priced?",
      answer:
        "We agree the scope, deliverables and estimate before work begins. Projects can be planned on a fixed price or a time and materials basis, depending on how clear the requirements are.",
    },
    {
      question: "Can you work with our existing system?",
      answer:
        "Yes. We can review what you have, connect it to new tools through integrations or recommend a staged rebuild where it makes sense.",
    },
    {
      question: "What happens after launch?",
      answer:
        "We plan the handover with you and can scope ongoing support, maintenance and improvements so your software keeps running smoothly.",
    },
  ],
};

export const MOBILE_PAGE: ServicePageContent = {
  seoKey: "mobileAppDevelopment",
  crumbLabel: "Mobile App Development",
  schemaName: "Mobile app development",
  hero: {
    seoHeading: "Mobile App Development Company in Kerala",
    eyebrow: "MOBILE APPS BUILT FOR REAL USE",
    headingLead: "Closer to your customers",
    headingAccent: "Wherever they are",
    subline: "Seamless user experiences that keep your customers engaged and your brand always within reach",
    body: "Mobile app development for businesses in Kerala and across India. We help you plan the right first release, design useful journeys and build an app that feels simple to use.",
    primaryCta: { label: "Let’s Discuss Your App ↗", href: "/contact" },
    secondaryCta: { label: "See What We Build ↓", href: "#capabilities" },
    note: "Scope, timeline and estimate are agreed with you before any work begins",
    imageSrc: "/icons/feature-mobile.svg",
    imageAlt: "Illustration of a smartphone app screen representing mobile app development",
  },
  intro: {
    eyebrow: "BUILT AROUND YOUR USERS",
    headingLead: "A simple app people",
    headingAccent: "Actually enjoy using",
    body: "A good app does a few things very well. We start with who will use it and why, shape the journeys that matter most and release a focused first version you can learn from before adding more.",
  },
  capabilities: {
    eyebrow: "WHAT WE BUILD",
    headingLead: "Apps that earn a place on the home screen",
    items: [
      { title: "Customer apps", description: "Bookings, orders, loyalty and support in an app that keeps your customers close." },
      { title: "Internal business apps", description: "Mobile tools for field teams, staff and managers to work from anywhere." },
      { title: "Cross-platform development", description: "One shared codebase for Android and iOS that saves time without feeling second-rate." },
      { title: "Thoughtful UX and UI design", description: "Clear navigation and interface design tested through prototypes before we build." },
      { title: "Backend and API integration", description: "Secure connections to your data, payments, notifications and existing systems." },
      { title: "Testing and release support", description: "Device testing, store submission support and guidance for the first release." },
    ],
  },
  useCases: {
    eyebrow: "WHERE IT HELPS",
    headingLead: "Useful experiences",
    headingAccent: "Always within reach",
    items: [
      { title: "Serve customers better", description: "Give people a faster way to book, order, pay and reach you." },
      { title: "Empower your team", description: "Capture work, share updates and approve requests straight from a phone." },
      { title: "Launch a new product", description: "Validate an idea with a focused first release before investing in a larger build." },
    ],
  },
  tech: {
    eyebrow: "TECHNOLOGY THAT WORKS",
    heading: "Modern tools for Android and iOS",
    body: "We pick the approach that fits your audience and budget, whether that is a shared cross-platform codebase or a fully native build.",
    tags: [".NET MAUI", "Flutter", "Android", "iOS / Swift", "Node.js", "Python", "PostgreSQL", "Stripe", "AWS", "Azure", "Google Cloud"],
  },
  faq: {
    eyebrow: "BEFORE WE BUILD",
    headingLead: "Good questions",
    headingAccent: "Clear answers",
    intro: "A little clarity about planning and building your mobile app.",
  },
  faqItems: [
    {
      question: "Should my app be for Android, iOS or both?",
      answer:
        "It depends on who your users are. In India many businesses start with Android and add iOS later, while others need both from day one. A cross-platform build lets us cover both from a shared codebase.",
    },
    {
      question: "How long does it take to build an app?",
      answer:
        "Timelines depend on the scope and the number of features. We help you define a focused first release and confirm the estimate and timeline before work begins.",
    },
    {
      question: "Will you help publish the app on the stores?",
      answer:
        "Yes. We support testing and the release process for Google Play and the Apple App Store. Store accounts and fees stay with your business.",
    },
    {
      question: "Can you add features after launch?",
      answer:
        "Yes. We can scope updates, new features and ongoing maintenance around real user feedback once your app is live.",
    },
  ],
};

export const AI_PAGE: ServicePageContent = {
  seoKey: "aiSolutions",
  crumbLabel: "AI Solutions",
  schemaName: "AI solutions",
  hero: {
    seoHeading: "AI Solutions and Automation Company in Kerala",
    eyebrow: "PRACTICAL AI FOR EVERYDAY WORK",
    headingLead: "Make everyday work",
    headingAccent: "A little more intelligent",
    subline: "Intelligent AI solutions that automate complex processes and unlock insights from your data",
    body: "AI development for businesses in Kerala and across India. We build useful assistants, automations and integrations that help your team answer questions, find information and handle repetitive work.",
    primaryCta: { label: "Explore Your AI Opportunity ↗", href: "/contact" },
    secondaryCta: { label: "See What We Build ↓", href: "#capabilities" },
    note: "We start with a clear use case and agree scope and estimate before any work begins",
    imageSrc: "/icons/feature-ai.svg",
    imageAlt: "Illustration of an AI chip representing AI solutions and automation",
  },
  intro: {
    eyebrow: "AI WITH A CLEAR PURPOSE",
    headingLead: "Start with the problem",
    headingAccent: "Then choose the AI",
    body: "AI works best when it solves one specific task well. We help you find the use case worth automating, test it on your own data and integrate it into the tools your team already uses.",
  },
  capabilities: {
    eyebrow: "WHAT WE BUILD",
    headingLead: "AI that supports real tasks",
    items: [
      { title: "AI assistants and chatbots", description: "Assistants that answer customer or team questions using your own content and policies." },
      { title: "Knowledge search", description: "Find the right document, answer or record in seconds instead of digging through folders." },
      { title: "Workflow and document automation", description: "Extract, classify and route information from forms, emails and documents automatically." },
      { title: "Model integration", description: "Connect leading AI models to your website, software or mobile app through secure APIs." },
      { title: "Insight and analytics tools", description: "Turn your business data into summaries, trends and suggestions your team can act on." },
      { title: "Responsible and secure use", description: "Clear choices on data handling, access and human review before anything goes live." },
    ],
  },
  useCases: {
    eyebrow: "WHERE IT HELPS",
    headingLead: "Less repetition",
    headingAccent: "More possibility",
    items: [
      { title: "Support and enquiries", description: "Answer common questions quickly and pass complex ones to the right person." },
      { title: "Operations and paperwork", description: "Reduce data entry, checking and routing across your daily processes." },
      { title: "Reports and decisions", description: "Summarise large amounts of information so your team spots what matters sooner." },
    ],
  },
  tech: {
    eyebrow: "POWERED BY LEADING TECHNOLOGIES",
    heading: "Built on trusted AI platforms and frameworks",
    body: "We work with leading models and open tools, and we recommend the option that fits your use case, your data and your budget.",
    tags: ["OpenAI", "Anthropic", "Gemini", "LLaMA", "Hugging Face", "LangChain", "TensorFlow", "PyTorch", "Ollama", "Python", "FastAPI"],
    footnote: "AI results depend on the quality of the data and the task. We test with you before launch and keep a person in the loop where accuracy matters",
  },
  faq: {
    eyebrow: "BEFORE WE BUILD",
    headingLead: "Good questions",
    headingAccent: "Honest answers",
    intro: "A little clarity about using AI in your business.",
  },
  faqItems: [
    {
      question: "Where should a small business start with AI?",
      answer:
        "Start with one repetitive task that costs your team time, such as answering common questions or sorting documents. We help you pick a use case, test it and expand only when it proves useful.",
    },
    {
      question: "Is my business data safe?",
      answer:
        "We discuss where your data is stored and processed before we begin, and we limit access to what the solution needs. We can choose services and settings that fit your privacy requirements.",
    },
    {
      question: "Do I need a lot of data to begin?",
      answer:
        "Not always. Many useful assistants and automations work with the documents and information you already have. We review what is available and tell you what is realistic.",
    },
    {
      question: "Can AI be added to my existing website or software?",
      answer:
        "Yes. We can integrate AI features into your current website, software or mobile app through secure APIs without rebuilding everything.",
    },
  ],
};
