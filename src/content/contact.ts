import type { FaqItem } from "./shared";

// Layout and copy follow the "Contact us" frame in the Figma "Magenta grid Final" page.
// That frame was drafted for a free-website offer in the UK, so "free website", UK and ".co.uk"
// references are adapted to the India offer (Starter ₹5,000, Kerala and India, ".in").

export const CONTACT_HERO = {
  seoHeading: "Contact MagentaGrid, a website design company in Kerala",
  badge: "Contact us",
  headingLines: ["Good websites start", "with a "],
  headingAccent: "hello",
  bodyLines: [
    "Ready for your Starter website, or just have a question?",
    "Tell us a little about your business. We’ll make the next step clear.",
  ],
  reassurance: "No jargon. Just a chat.",
};

export const CONTACT_INTRO = {
  eyebrow: "Let’s get you started",
  headingLead: "Your business",
  headingRest: "Your next ",
  headingAccent: "chapter",
  body: "A first website, a fresh start or a quick question. Whatever brings you here, we’re happy to help.",
  promise: {
    lines: ["No pressure.", "No surprise bills."],
    body: "Your Starter website is ₹5,000. Any optional extras are quoted upfront and only go ahead if you say yes.",
    commitment: "You decide what comes next.",
  },
  help: {
    title: "Not sure what to say?",
    body: "Start with what you do and what you’d like your website to help with. No brief, logo or technical know-how needed.",
    audience: ["FOR SMALL BUSINESSES, SOLE TRADERS", "AND STARTUPS ACROSS KERALA AND INDIA."],
  },
};

export const CONTACT_FORM = {
  title: "Tell us a little about you",
  intro: "Fields marked * are required. A few lines is plenty.",
  labels: {
    name: "Your Name",
    email: "Email Address",
    businessName: "Business Name",
    phone: "Phone / WhatsApp",
    plan: "How Can We Help?",
    existingWebsite: "Existing Website",
    message: "Your Message",
  },
  placeholders: {
    name: "Your full name",
    email: "you@example.com",
    businessName: "What’s your business called?",
    phone: "+91 98765 43210",
    existingWebsite: "https://yourwebsite.in",
    message: "Tell us what you do, what you need, or what you’d like to ask…",
  },
  planHint: "Or choose a general question or help with an existing website.",
  consentLead: "I’ve read the ",
  consentLink: "Privacy Policy",
  consentRest: " and understand my details will be used to respond to my enquiry.",
  submit: "Send My Enquiry",
  submitNote: "No commitment. Just a conversation.",
};

export const CONTACT_NEXT = {
  eyebrow: "After you say hello",
  heading: "A clear next step. ",
  headingAccent: "Not a sales pitch",
  steps: [
    {
      icon: "/icons/contact/message-square.svg",
      title: "We read your enquiry",
      body: "We look at what your business needs and any questions you’ve shared.",
    },
    {
      icon: "/icons/contact/messages-square.svg",
      title: "We talk it through",
      body: "We reply by email, answer your questions and ask for anything else we need.",
    },
    {
      icon: "/icons/contact/arrow-up-right.svg",
      title: "You choose the next step",
      body: "If you’re ready, we agree what’s included. Any optional costs are clear before you decide.",
    },
  ],
};

export const CONTACT_FAQ = {
  eyebrow: "FAQ",
  headingLead: "Before you",
  headingRest: "say ",
  headingAccent: "hello",
  intro: "A few helpful answers before you hit send.",
};

export const CONTACT_FAQ_ITEMS: FaqItem[] = [
  {
    question: "Can I ask a question before requesting a website?",
    answer:
      "Of course, choose a general question in the form and tell us what’s on your mind. You don’t need to be ready to get started.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "A little about your business, what you’d like your website to do and any questions. If you already have a site, add the link. No intro needed.",
  },
  {
    question: "Does sending an enquiry commit me to anything?",
    answer:
      "No, it starts a conversation. The Starter website is ₹5,000 and any optional extras are quoted upfront for you to approve.",
  },
  {
    question: "Can you help if I already have a website?",
    answer:
      "Tell us what isn’t working and share your current website link. We’ll talk through what you need and explain the options before you decide.",
  },
];
