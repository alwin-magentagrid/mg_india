import type { FaqItem } from "./shared";

export interface NumberedItem {
  title: string;
  description: string;
}

export const WEB_HERO = {
  seoHeading: "Web Development Company in Kerala for Small Businesses",
  eyebrow: "CUSTOM WEBSITES. BUILT AROUND YOUR BUSINESS",
  headingLead: "From your idea",
  headingAccent: "to your website",
  subline: "Thoughtful UI. Responsive development. A clear identity to your business.",
  body: "Affordable website design for small businesses in Kerala and across India. We draft the design around your business and build it to work across screens.",
  primaryCta: { label: "Compare Website Plans ↓", href: "#compare" },
  secondaryCta: { label: "Talk About Your Website ↗", href: "/contact" },
  chips: [
    { label: "STARTER", value: "₹5,000" },
    { label: "BUSINESS CMS", value: "₹15,000" },
    { label: "BESPOKE", value: "Let’s talk" },
  ],
  note: "Final page scope, taxes, domain, hosting and support are confirmed in your quote.",
  imageAlt: "3D illustration of a website, phone and design cards assembled on a magenta platform",
};

export const WEB_FOUNDATIONS = {
  eyebrow: "BUILT WITH PURPOSE",
  headingLead: "Good design gets attention",
  headingAccent: "Good engineering earns trust",
  body: "Your website should look right, feel easy to use and perform reliably. Our engineering-first approach connects your brand with responsive layouts, clear content and room for your next stage of growth.",
};

export const WEB_CAPABILITIES = {
  eyebrow: "THE FOUNDATIONS OF A BETTER WEBSITE",
  headingLead: "Built for people. Ready for business",
  items: [
    { title: "Responsive by design", description: "A clear, comfortable experience on phones, tablets and larger screens." },
    { title: "Performance with purpose", description: "Lean page structures and performance checks that keep the experience moving." },
    { title: "Search-ready foundations", description: "Useful page titles, organised content and basic on-page SEO to support discovery." },
    { title: "Enquiries made easier", description: "Clear calls to action, contact forms and WhatsApp links that help people reach you." },
    { title: "Content that makes sense", description: "A page structure that explains your offer and helps visitors choose their next step." },
    { title: "Room for what’s next", description: "Scope extra pages, content editing or integrations as your needs develop." },
  ] satisfies NumberedItem[],
};

export const WEB_SOLUTIONS = {
  eyebrow: "START WITH THE WEBSITE YOU NEED",
  headingLead: "Your business,",
  headingAccent: "beautifully translated online",
  items: [
    { title: "Business websites", description: "A focused introduction or a detailed company website that makes your services easy to understand." },
    { title: "Online stores", description: "A product catalogue, shopping cart and payment integration planned around how you sell." },
    { title: "Website redesigns", description: "Refresh the experience, improve the content and shape a clearer customer journey." },
  ] satisfies NumberedItem[],
};

export const WEB_ADDONS = {
  eyebrow: "EXTEND YOUR WEBSITE WHEN YOU’RE READY",
  headingLead: "Start with the essentials",
  headingAccent: "Add what matters next",
  body: "Choose additional features around your goals. Each add-on is quoted separately and agreed before we begin.",
  items: [
    { title: "SEO setup", description: "On-page, technical and local visibility work scoped around your business." },
    { title: "E-commerce setup", description: "Shopping cart, payments and product management for your online store." },
    { title: "Speed optimisation", description: "Review and improve loading performance and the visitor experience." },
    { title: "Security hardening", description: "Additional security configuration and checks around your website." },
    { title: "Analytics setup", description: "Track the website actions that matter and understand how people use your site." },
    { title: "Multi-language content", description: "Plan extra languages, translated content and the right navigation structure." },
  ] satisfies NumberedItem[],
};

export const WEB_LOCAL = {
  eyebrow: "LOCAL CONTEXT. LONG-TERM THINKING",
  heading: "Made for your business. Built for your customers",
  body: "Searching for website developers in Kochi or a web design company in Thrissur? Talk to us about affordable website development shaped around your customers, content and budget. We work with businesses across Kerala and India.",
  locations: ["Kochi / Cochin", "Thrissur", "Calicut", "Trivandrum", "Across India"],
};

export const WEB_FAQ = {
  eyebrow: "BEFORE WE BUILD",
  headingLead: "Good questions",
  headingAccent: "Honest answers",
  intro: "A little clarity about the website design and development process.",
};

export const WEB_FAQ_ITEMS: FaqItem[] = [
  {
    question: "How much does a small business website cost?",
    answer:
      "Choose Starter at ₹5,000, Business CMS at ₹15,000, or a Bespoke solution priced around your requirements. We confirm the page scope and any additional costs in your quote.",
  },
  {
    question: "Which website design package should I choose?",
    answer:
      "Starter gives you a professional first website. Business CMS adds content management so your team can make updates. Bespoke is planned around more specific requirements.",
  },
  {
    question: "Will you help with search visibility?",
    answer:
      "Starter and Business CMS include basic on-page SEO. Additional technical and local SEO can be scoped separately. Search rankings are not guaranteed.",
  },
  {
    question: "Can I add features or edit content later?",
    answer:
      "Yes. extra pages, a content management system, booking / reservations, additional language support and other integrations can be planned around your needs.",
  },
  {
    question: "Do you provide hosting, domains and ongoing support?",
    answer:
      "We can discuss the right setup and care options. Domain, hosting, renewals and the exact support arrangement are confirmed separately in your quote.",
  },
];
