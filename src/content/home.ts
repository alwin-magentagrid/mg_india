import type { FaqItem } from "./shared";

export const HOME_FAQ = {
  eyebrow: "A LITTLE CLARITY",
  headingLead: "Good questions",
  headingAccent: "Honest answers",
  intro:
    "Starting a website shouldn’t feel complicated. Here are a few things worth knowing.",
};

export const HOME_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Which website plan is right for my business?",
    answer:
      "Starter is a focused five-page website. Choose Business CMS if you want to update content yourself, or Bespoke for a solution shaped around your requirements.",
  },
  {
    question: "What is included in the project price?",
    answer:
      "Your quote will set out the pages, features and design work, plus any separate domain, hosting, tax or ongoing support costs.",
  },
  {
    question: "Will there any additional cost ?",
    answer: "Starter,Business will have domain purchase taxes extra.",
  },
  {
    question: "Will my website work well on mobile?",
    answer:
      "Yes. Responsive layouts are part of the approach, with checks across common screen sizes before your website goes live.",
  },
  {
    question: "Can you help after my website launches?",
    answer:
      "Yes. Ask us about website care, updates and future improvements. We’ll recommend support that fits your business.",
  },
];

export const HOME_HERO = {
  seoHeading: "Website Design & Development Company in Kerala",
  eyebrow: "MAGENTAGRID INDIA",
  headingLead: "Your Vision. Our Expertise.",
  headingAccent: "Future-Ready Digital Solutions",
  body: "From websites and software to mobile apps and AI solutions, we transform your business ideas into scalable digital solutions with custom design and dependable development.",
  tagline: "Websites • Business Software • Mobile Apps • AI- Solutions",
  primaryCta: { label: "Start Your Project ↗", href: "/contact" },
  secondaryCta: { label: "Explore Our Services ↓", href: "#services-overview" },
  imageAlt: "MagentaGrid India website, software, mobile app and AI services illustration",
};

export interface HomeServiceCard {
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  iconSrc: string;
}

export const HOME_SERVICES = {
  eyebrow: "WHAT WE DO",
  headingLead: "Your next chapter.",
  headingAccent: "Built for digital",
  subheading:
    "From your first website to your next big idea, find the right solution for your business.",
  cards: [
    {
      title: "Web Development",
      description:
        "Fast, accessible websites built for performance and growth, helping you attract, engage and convert more customers.",
      linkLabel: "Explore Web Development ↗",
      href: "/services/web-development",
      iconSrc: "/icons/web-development.svg",
    },
    {
      title: "Software Development",
      description:
        "Secure, scalable custom software that streamlines operations & drives long-term growth.",
      linkLabel: "Explore Software Solutions ↗",
      href: "/services/software-development",
      iconSrc: "/icons/software-development.svg",
    },
    {
      title: "Mobile App Development",
      description:
        "Seamless app experiences that keep customers engaged and your brand within reach.",
      linkLabel: "Explore Mobile Apps ↗",
      href: "/services/mobile-app-development",
      iconSrc: "/icons/mobile-app-development.svg",
    },
    {
      title: "AI Solutions",
      description:
        "Intelligent AI solutions built to automate complex processes, enhance productivity & unlock actionable insights from your data.",
      linkLabel: "Explore AI Solutions ↗",
      href: "/services/ai-solutions",
      iconSrc: "/icons/ai-solutions.svg",
    },
  ] satisfies HomeServiceCard[],
};

export const HOME_WHY = {
  eyebrow: "WHY MAGENTAGRID",
  headingLead: "Big on your ambition",
  headingAccent: "Personal in our approach",
  statement:
    "We deliver high-quality digital solutions with a focus on performance, scalability and user experience, helping businesses grow faster and smarter.",
  cta: { label: "Meet Your Digital Team ↗", href: "/about" },
  points: [
    {
      title: "Innovation & Excellence",
      description: "Your goals, your customers and a website that feels like your brand.",
    },
    {
      title: "Speed & Collaboration",
      description: "A clear scope and a shared plan before the work begins.",
    },
    {
      title: "Here after launch",
      description: "Practical support, updates and room to grow with your business.",
    },
  ],
};

export const HOME_STORY = {
  eyebrow: "A CUSTOMER’S PERSPECTIVE",
  quote:
    "Our booking platform went live ahead of schedule and the feedback from customers has been brilliant. Scheduling, availability, payments, it all just works.",
  name: "Bala Murugon",
  role: "Arbust · MagentaGrid customer",
};
