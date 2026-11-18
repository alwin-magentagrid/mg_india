import type { FaqItem } from "./shared";

export const SERVICES_HERO = {
  seoHeading: "Web, Software, Mobile App and AI Development Company in Kerala",
  eyebrow: "ONE DIGITAL PARTNER. MANY POSSIBILITIES",
  headingLead: "The right team",
  headingAccent: "For what’s next",
  subline:
    "Websites that connect. Software that simplifies. Apps that engage. AI that gets to work.",
  body: "We connect custom design and dependable engineering to solve real business challenges from your first website to your next digital product.",
  primaryCta: { label: "Let’s Shape Your Project ↗", href: "/contact" },
  secondaryCta: { label: "Explore Our Services ↓", href: "#web-development" },
  imageAlt: "Illustration of web, software, mobile app and AI services around a magenta arch",
  links: [
    { label: "Web Development ↗", href: "#web-development" },
    { label: "Custom Software ↗", href: "#custom-software" },
    { label: "Mobile Apps ↗", href: "#mobile-apps" },
    { label: "AI Solutions ↗", href: "#ai-solutions" },
  ],
};

export interface ServiceFeatureContent {
  id: string;
  label: string;
  headingLead: string;
  headingAccent: string;
  body: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  visualSrc: string;
  caption: string;
}

export const SERVICE_FEATURES: ServiceFeatureContent[] = [
  {
    id: "web-development",
    label: "01 / WEB DEVELOPMENT",
    headingLead: "Your Online Identity",
    headingAccent: "A stronger presence",
    body: "Fast, accessible websites shaped around your brand and the people you want to reach. From a focused business website to a complete online store, we make the next step clear.",
    bullets: [
      "Business websites & landing pages",
      "E-commerce & payment integrations",
      "Content management & on-page SEO",
    ],
    ctaLabel: "Explore Website Plans ↗",
    ctaHref: "/services/web-development",
    visualSrc: "/icons/feature-web.svg",
    caption: "Find your audience. Make every visit count.",
  },
  {
    id: "custom-software",
    label: "02 / CUSTOM SOFTWARE",
    headingLead: "Less Busywork",
    headingAccent: "More room to grow",
    body: "Software built around the way your business actually works. Connect your tools, simplify day-to-day operations and give your team a clear view of what matters.",
    bullets: [
      "Business portals & dashboards",
      "Booking, orders & workflow systems",
      "API integrations & modernisation",
    ],
    ctaLabel: "Discuss Your Software Ideas ↗",
    ctaHref: "/services/software-development",
    visualSrc: "/icons/feature-software.svg",
    caption: "Your workflows. One connected system.",
  },
  {
    id: "mobile-apps",
    label: "03 / MOBILE APP DEVELOPMENT",
    headingLead: "Closer to your customers",
    headingAccent: "Wherever they are",
    body: "Intuitive mobile experiences for customers and teams. We help you plan the right first release, design useful journeys and build an app that feels simple to use.",
    bullets: [
      "Customer & internal business apps",
      "Cross-platform app development",
      "App testing & release support",
    ],
    ctaLabel: "Let’s Discuss Your App ↗",
    ctaHref: "/services/mobile-app-development",
    visualSrc: "/icons/feature-mobile.svg",
    caption: "Useful experiences, always within reach.",
  },
  {
    id: "ai-solutions",
    label: "04 / AI SOLUTIONS",
    headingLead: "Make everyday work",
    headingAccent: "a little more intelligent",
    body: "Practical AI engines that supports real tasks: answering questions, finding information and handling repetitive work. We focus on useful integrations your team can put to work.",
    bullets: [
      "AI assistants & knowledge search",
      "Workflow & document automation",
      "Model integration & insight tools",
    ],
    ctaLabel: "Explore Your AI Opportunity ↗",
    ctaHref: "/services/ai-solutions",
    visualSrc: "/icons/feature-ai.svg",
    caption: "Less repetition. More possibility.",
  },
];

export const SERVICES_FAQ = {
  eyebrow: "A LITTLE CLARITY",
  headingLead: "Good questions",
  headingAccent: "Useful answers",
  intro: "Not sure where to start? A conversation is often the best first step.",
};

export const SERVICES_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Which service is right for my business?",
    answer:
      "Tell us the goal or detail the problem statement . We’ll help you decide whether a website, custom software, mobile app or An AI feature is the best starting point.",
  },
  {
    question: "Can you work with our existing website or system?",
    answer:
      "We can review what you have, identify the priorities and recommend improvements, integrations or a rebuild where it makes sense.",
  },
  {
    question: "How are projects priced and planned?",
    answer:
      "We agree the scope, deliverables and estimate before work begins. Website packages offer a starting point , software, mobile and AI projects are scoped around your needs. Happy to work on a T&M and a Fixed_Price Model",
  },
  {
    question: "What happens after launch?",
    answer:
      "We plan the handover with you and can scope ongoing maintenance, updates and improvements around the product and your team ensuring smooth BAU",
  },
];
