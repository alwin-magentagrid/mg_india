import type { FaqItem } from "./shared";
import type { NumberedItem } from "./web-development";

export const STARTER_HERO = {
  seoHeading: "Low Cost Five-Page Website Design in Kerala – ₹5,000 Starter",
  eyebrow: "START SMALL. SCALE UP WITH CONFIDENCE.",
  headingLead: "Your first website.",
  headingAccent: "A stronger start.",
  subline: "Custom design for your business. A clear, confident presence online.",
  body: "An affordable five-page website for small businesses in Kerala and across India. Mobile friendly, thoughtfully designed and ready to introduce what you do.",
  price: { value: "₹5,000", size: "lg" as const, lines: ["STARTER WEBSITE", "Up to 5 pages · No CMS"] },
  primaryCta: { label: "Start my website ↗", href: "/contact" },
  secondaryCta: { label: "See what’s included ↓", href: "#included" },
  note: "Starter does not include a CMS. Taxes, domain, hosting and support terms are confirmed in your quote.",
};

export const STARTER_AUDIENCE = {
  eyebrow: "SMALL BUSINESS. STRONG FIRST IMPRESSION.",
  headingLead: "Everything you need to begin.",
  headingAccent: "Nothing to overcomplicate it.",
  body: "Starter is for businesses that need a professional online presence without a content management system. Explain what you do, show why it matters and make the next step easy.",
  items: [
    { title: "Local service businesses", description: "Give customers a useful overview of your services, service area and contact details." },
    { title: "Independent professionals", description: "Introduce your expertise, your approach and the people you can help." },
    { title: "New and small businesses", description: "Start with an affordable website design package and a clear foundation for later growth." },
  ] satisfies NumberedItem[],
};

export const STARTER_FEATURES = {
  eyebrow: "WHAT’S INCLUDED",
  headingLead: "A confident first impression.",
  headingAccent: "Across every screen.",
  items: [
    { title: "Up to five pages", description: "A focused page structure built around your business, services and customer questions." },
    { title: "Responsive design", description: "A layout that adapts to phones, tablets and larger screens." },
    { title: "Contact & WhatsApp", description: "A contact form and WhatsApp enquiry links so customers can take the next step." },
    { title: "Search-ready basics", description: "Page titles, useful headings and basic on-page SEO to support search visibility." },
    { title: "Your brand, crisp & clear", description: "Your logo, supplied images and business information presented in a coherent design." },
    { title: "Launch guidance", description: "A final review, enquiry checks and guidance as your website goes live." },
  ] satisfies NumberedItem[],
};

export const STARTER_STRUCTURE = {
  eyebrow: "A CLEAR PLACE FOR EVERY IMPORTANT DETAIL",
  headingLead: "Five pages.",
  headingAccent: "One unified story.",
  body: "A suggested starting structure — we’ll agree the final page list around your business before the project begins.",
  items: [
    { title: "Home", description: "Introduce your business and your main offer." },
    { title: "About", description: "Build confidence in the people behind it." },
    { title: "Services", description: "Explain what you do and who you help." },
    { title: "Our Work", description: "Share examples, photos or useful proof." },
    { title: "Contact", description: "Make the next conversation easy." },
  ] satisfies NumberedItem[],
};

export const STARTER_NEEDS = {
  eyebrow: "A LITTLE PREPARATION GOES A LONG WAY",
  heading: "You know your business. We’ll help tell its story.",
  body: "Bring your logo, business details, service information, contact details and any photos you’d like to use. We’ll agree the page structure, content responsibilities and scope before we begin.",
};

export const STARTER_UPGRADE = {
  eyebrow: "NEED TO UPDATE CONTENT YOURSELF?",
  headingLead: "Give your team",
  headingAccent: "the editing controls.",
  body: "Starter does not include a CMS. If you want to change text and images yourself frequently, choose Business CMS at ₹15,000. For custom features, integrations or more specific requirements, choose Bespoke and let’s talk.",
  cta: { label: "Compare All Three Plans ↓", href: "#compare" },
  card: {
    label: "BUSINESS CMS",
    price: "₹15,000",
    title: "Content management included",
    body: "Update text and images through your CMS. Page scope and editing features are agreed for your business.",
    link: { label: "Bespoke requirements? Let’s talk. ↗", href: "/contact" },
  },
};

export const STARTER_FAQ = {
  eyebrow: "BEFORE YOU START",
  headingLead: "Good questions.",
  headingAccent: "Straight answers.",
  intro: "The details that help you choose the right first package.",
};

export const STARTER_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What does the ₹5,000 Starter package cover?",
    answer:
      "The Starter package covers an agreed website of up to five pages, a responsive layout, contact and WhatsApp links, basic on-page SEO and launch guidance.",
  },
  {
    question: "Can I edit the website myself?",
    answer:
      "Starter does not include a CMS. Choose the ₹15,000 Business CMS package if you want to update text and images yourself. Content changes to a Starter site can be quoted separately.",
  },
  {
    question: "Are domain and hosting included?",
    answer:
      "We confirm the domain, hosting, renewals, taxes and support arrangement in your quote. These are not assumed to be free or included.",
  },
  {
    question: "Can I add an e-com online store, reservation or any custom feature?",
    answer:
      "Yes. those requirements are scoped separately under Bespoke. Tell us what you want to achieve and we’ll recommend a suitable approach.",
  },
  {
    question: "How long will my website build take?",
    answer:
      "We agree a realistic delivery schedule once the page scope, content and review process are clear. Timelines depend on the content and feedback required.",
  },
];
