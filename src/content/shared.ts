import { CONTACT_EMAIL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/site";

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkItem {
  label: string;
  href?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PlanCardContent {
  id: "starter" | "business-cms" | "bespoke";
  name: string;
  audience: string;
  price: string;
  priceNote: string;
  summary: string;
  features: string[];
  cta: string;
  href: string;
  badge?: string;
}

export interface CompareRow {
  label: string;
  starter: string;
  businessCms: string;
  bespoke: string;
}

export interface CtaContent {
  eyebrow: string;
  heading: string;
  accent: string;
  body: string;
  buttonLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PRIMARY_NAV: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "News", href: "/news" },
];

export const SERVICES_SUBMENU: NavLink[] = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
];

export const NAV_CTA_LABEL = "Let’s Talk";

export const FOOTER_TAGLINE =
  "Thoughtful websites and digital solutions for businesses in Kerala and across India.";

export const FOOTER_EXPLORE: FooterLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Website Plans", href: "/services/web-development#plans" },
  { label: "About MagentaGrid", href: "/about" },
];

export const FOOTER_SOLUTIONS = {
  home: [
    { label: "Website Design", href: "/services/web-development" },
    { label: "E-Commerce" },
    { label: "Hosting & Care" },
    { label: "SEO & Growth" },
  ],
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Custom Software", href: "/services/software-development" },
    { label: "Mobile Apps", href: "/services/mobile-app-development" },
    { label: "AI Solutions", href: "/services/ai-solutions" },
  ],
  web: [
    { label: "Website Design", href: "/services/web-development" },
    { label: "Business CMS", href: "/services/web-development/business-cms" },
    { label: "Bespoke Websites" },
    { label: "SEO & Growth" },
  ],
} satisfies Record<string, FooterLinkItem[]>;

export const FOOTER_CONNECT: FooterLinkItem[] = [
  { label: "Start a Project", href: "/contact" },
  { label: "Project Enquiries", href: `mailto:${CONTACT_EMAIL}` },
  { label: "LinkedIn", href: LINKEDIN_URL ?? undefined },
  { label: "Instagram", href: INSTAGRAM_URL ?? undefined },
];

export const FOOTER_LEGAL: FooterLinkItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export const FOOTER_COPYRIGHT = "© 2026 MagentaGrid. All rights reserved.";
export const FOOTER_COMPANY_LINE =
  "MAGENTAGRID TECHNOLOGIES PRIVATE LIMITED · CIN U62090KL2026PTC103432";

export const PROCESS_CONTENT = {
  eyebrow: "FROM YOUR IDEA TO LAUNCH",
  heading: "Your Idea | Custom Design | Fast Delivery",
  subheading: "From idea to launch, with clarity at every step",
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Discovery & Strategy",
    description:
      "Every project starts with a deep dive into your business, market and user needs. We define the right strategy to ensure the best return on investment.",
  },
  {
    title: "Custom Designing",
    description:
      "We translate strategy into clean, intuitive and beautiful user interfaces. We design and prototype your ideas before we build them.",
  },
  {
    title: "Development & Testing",
    description:
      "Our engineering team builds robust, scalable software while our QA testing team ensures everything works flawlessly.",
  },
  {
    title: "Launch & Optimization",
    description:
      "We do not leave you post-launch. We provide full deployment support and monitor to refine based on real user feedback.",
  },
];

export type CtaVariant = "home" | "services" | "website";

const CTA_WEBSITE: CtaContent = {
  eyebrow: "YOUR NEXT CHAPTER STARTS HERE",
  heading: "Your business idea. Our next conversation",
  accent: "Start small. Build with purpose",
  body: "Tell us about your business. We’ll help you find the right website package.",
  buttonLabel: "Let’s Talk About Your Project ↗",
};

export const CTA_CONTENT: Record<CtaVariant, CtaContent> = {
  home: {
    eyebrow: "YOUR NEXT CHAPTER STARTS HERE",
    heading: "Your business. A bigger future",
    accent: "Let’s build it together",
    body: "Tell us what you have in mind. We’ll help you find a way forward.",
    buttonLabel: "Let’s Discuss ↗",
  },
  services: {
    eyebrow: "YOUR NEXT CHAPTER STARTS HERE",
    heading: "Your business. A bigger future",
    accent: "Let’s build it together",
    body: "Tell us what you have in mind. We’ll help you find a way forward.",
    buttonLabel: "Let’s Talk About Your Project ↗",
  },
  website: CTA_WEBSITE,
};

export type PlansVariant = "home" | "web";

export interface PlansContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  footnote: string;
  customLine?: { text: string; linkLabel: string; href: string };
}

export const PLANS_CONTENT: Record<PlansVariant, PlansContent> = {
  home: {
    eyebrow: "WEBSITE PLANS",
    heading: "Small Start. Big Possibilities",
    subheading:
      "A first website, a CMS-powered site or a bespoke solution. Choose your starting point.",
    footnote:
      "Package prices: Starter ₹5,000 · Business CMS ₹15,000 · Bespoke by quote. Taxes and domain come at an extra cost",
  },
  web: {
    eyebrow: "WEBSITE PLANS",
    heading: "Small Start. Big Possibilities",
    subheading:
      "A first website, a CMS-powered site or a bespoke solution. Choose your starting point.",
    footnote:
      "Package prices: Starter ₹5,000 · Business CMS ₹15,000 · Bespoke by quote. Taxes and domain come at an extra cost",
  },
};

// The Figma "Magenta grid Final" design uses identical plan cards on Home and Web Development.
export function getPlanCards(): PlanCardContent[] {
  return [
    {
      id: "starter",
      name: "Starter",
      audience: "For your first business website",
      price: "₹5,000/-",
      priceNote: "Website package",
      summary: "A clear, professional website to get you started.",
      features: [
        "Up to 5 website pages",
        "Mobile-friendly layout",
        "Contact form & WhatsApp enquiry",
        "Basic on-page SEO setup",
        "Launch guidance",
      ],
      cta: "Choose Starter ↗",
      href: "/services/web-development/starter-website",
    },
    {
      id: "business-cms",
      name: "Business CMS",
      audience: "For frequent websites updates",
      price: "₹15,000/-",
      priceNote: "Website package",
      summary: "A website with CMS, so your team can update content.",
      features: [
        "Pages scoped to your business",
        "Content management system (CMS)",
        "Update text & images yourself",
        "Service & content pages",
        "CMS handover & guidance",
      ],
      cta: "Choose Business CMS ↗",
      href: "/services/web-development/business-cms",
      badge: "RECOMMENDED",
    },
    {
      id: "bespoke",
      name: "Bespoke",
      audience: "Built around your requirements",
      price: "Let’s talk",
      priceNote: "Quoted to your requirements",
      summary: "A tailored solution for more complex goals.",
      features: [
        "Requirement based planning",
        "Custom design & functionality",
        "Integrations scoped to your needs",
        "E-commerce or booking options",
        "Tailored handover & support",
      ],
      cta: "Let’s Discuss ↗",
      href: "/contact",
    },
  ];
}

export const COMPARE_CONTENT = {
  eyebrow: "THE DETAILS, SIDE BY SIDE",
  heading: "Compare website plans",
  accent: "Choose with clarity",
  body: "Website development cost in India depends on the page scope, features and integrations. Compare these starting points, then let’s agree the right fit for your business.",
  calloutLines: ["Need something bespoke?", "Let’s scope the right solution."],
  footnote:
    "Starter ₹5,000 · Business CMS ₹15,000 · Bespoke by quote. Final page scope, taxes, domain, hosting, renewals and support are confirmed in your quote.",
  columns: [
    { name: "Starter", price: "₹5,000", note: "Indicative project price", cta: "Choose Starter ↗", href: "/services/web-development/starter-website" },
    { name: "Business CMS", price: "₹15,000", note: "Indicative project price", cta: "Choose Business CMS ↗", href: "/services/web-development/business-cms" },
    { name: "Bespoke", price: "Let’s talk", note: "Quoted to your requirements", cta: "Let’s Talk ↗", href: "/contact" },
  ],
};

export const COMPARE_ROWS: CompareRow[] = [
  { label: "Best for", starter: "First business website", businessCms: "Self-managed content", bespoke: "Specific business needs" },
  { label: "Website scope", starter: "Up to 5 pages", businessCms: "Agreed page scope", bespoke: "Requirements-led" },
  { label: "Content management (CMS)", starter: "Not included", businessCms: "Included", bespoke: "Scoped to requirements" },
  { label: "Mobile-friendly layout", starter: "Included", businessCms: "Included", bespoke: "Scoped to requirements" },
  { label: "Contact & WhatsApp enquiry", starter: "Included", businessCms: "Included", bespoke: "Scoped to requirements" },
  { label: "Basic on-page SEO", starter: "Included", businessCms: "Included", bespoke: "Scoped to requirements" },
  { label: "Content updates", starter: "Request an update", businessCms: "Edit through your CMS", bespoke: "Agreed workflow" },
  { label: "Custom integrations", starter: "Quoted separately", businessCms: "Quoted separately", bespoke: "Scoped to requirements" },
  { label: "E-commerce / booking", starter: "Quoted separately", businessCms: "Quoted separately", bespoke: "Can be scoped" },
  { label: "Launch / handover", starter: "Launch guidance", businessCms: "CMS handover", bespoke: "Tailored handover" },
  { label: "Domain & hosting", starter: "Confirm in quote", businessCms: "Confirm in quote", bespoke: "Confirm in quote" },
  { label: "Ongoing care & updates", starter: "Confirm support scope", businessCms: "Confirm support scope", bespoke: "Confirm support scope" },
];
