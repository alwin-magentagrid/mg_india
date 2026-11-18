export type NewsBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  coverSrc: string;
  body: NewsBlock[];
}

export const NEWS_PAGE = {
  eyebrow: "NEWS",
  headingLead: "Ideas, guides and updates",
  headingAccent: "for growing businesses",
  intro: "Practical notes on websites, software, mobile apps and AI from the MagentaGrid team.",
  imageAlt: "",
};

export const NEWS_POSTS: NewsPost[] = [
  {
    slug: "what-a-small-business-website-needs",
    title: "What a small business website actually needs",
    excerpt:
      "Five clear pages go further than fifty crowded ones. Here is a simple structure that explains your business and makes the next step easy.",
    category: "Websites",
    publishedAt: "2026-11-10",
    readingMinutes: 4,
    coverSrc: "/icons/feature-web.svg",
    body: [
      {
        type: "paragraph",
        text: "A first website does not need to do everything. It needs to explain what you do, show why people can trust you and make it easy to get in touch.",
      },
      { type: "heading", text: "Start with five pages" },
      {
        type: "list",
        items: [
          "Home: introduce your business and your main offer.",
          "About: build confidence in the people behind it.",
          "Services: explain what you do and who you help.",
          "Our work: share examples, photos or useful proof.",
          "Contact: make the next conversation easy.",
        ],
      },
      { type: "heading", text: "Make the next step obvious" },
      {
        type: "paragraph",
        text: "Every page should point to one action: a contact form, a phone number or a WhatsApp enquiry. Visitors who have to hunt for it usually leave.",
      },
      {
        type: "quote",
        text: "A clear website is not the one with the most pages. It is the one where a visitor always knows what to do next.",
      },
      { type: "heading", text: "Plan for growth, not for everything" },
      {
        type: "paragraph",
        text: "You can add a shop, booking or extra languages later. Starting with a focused scope keeps the first release affordable and quicker to launch.",
      },
    ],
  },
  {
    slug: "starter-or-business-cms",
    title: "Starter or Business CMS: which website plan fits you?",
    excerpt:
      "The difference comes down to one question: do you want to update your own content? A plain-language guide to choosing between the two plans.",
    category: "Websites",
    publishedAt: "2026-11-06",
    readingMinutes: 3,
    coverSrc: "/icons/feature-software.svg",
    body: [
      {
        type: "paragraph",
        text: "Our Starter package is ₹5,000 and our Business CMS package is ₹15,000. Both give you a custom-designed, mobile-friendly website. The main difference is who edits the content afterwards.",
      },
      { type: "heading", text: "Choose Starter if" },
      {
        type: "list",
        items: [
          "You need a professional first website of up to five pages.",
          "Your information rarely changes.",
          "You are happy to request an update when something does change.",
        ],
      },
      { type: "heading", text: "Choose Business CMS if" },
      {
        type: "list",
        items: [
          "You update services, photos or business information often.",
          "You want your team to change text and images without writing code.",
          "You would like a handover that shows you how to publish changes.",
        ],
      },
      { type: "heading", text: "Need something else?" },
      {
        type: "paragraph",
        text: "Bookings, an online shop or custom integrations are scoped separately under Bespoke. Taxes, domain, hosting and support are confirmed in your quote for every plan.",
      },
    ],
  },
  {
    slug: "what-affects-website-cost-in-india",
    title: "What affects the cost of a website in India?",
    excerpt:
      "Page count, features and integrations drive the price more than anything else. Here is how to think about scope before you ask for a quote.",
    category: "Planning",
    publishedAt: "2026-11-03",
    readingMinutes: 5,
    coverSrc: "/icons/feature-mobile.svg",
    body: [
      {
        type: "paragraph",
        text: "Website development cost in India depends on the page scope, the features you need and any integrations. Understanding those three things makes quotes much easier to compare.",
      },
      { type: "heading", text: "Page scope" },
      {
        type: "paragraph",
        text: "More pages mean more design, content and testing. A focused five-page site is a very different project from a catalogue with hundreds of products.",
      },
      { type: "heading", text: "Features and editing" },
      {
        type: "paragraph",
        text: "A site you edit yourself needs a content management system, which takes additional planning and handover. Forms, WhatsApp links and basic on-page SEO are usually part of a standard package.",
      },
      { type: "heading", text: "Integrations and running costs" },
      {
        type: "list",
        items: [
          "Payments, booking and other integrations are quoted separately.",
          "Domain names and hosting are renewed on their own schedule.",
          "Ongoing care and updates depend on the support you choose.",
        ],
      },
      {
        type: "paragraph",
        text: "Ask every provider what is included, what is extra and what renews each year. A clear quote answers all three.",
      },
    ],
  },
  {
    slug: "get-your-content-ready",
    title: "Get your content ready before your website project",
    excerpt:
      "A little preparation saves weeks. Gather these five things and your website can move from idea to launch much faster.",
    category: "Planning",
    publishedAt: "2026-10-29",
    readingMinutes: 3,
    coverSrc: "/icons/feature-ai.svg",
    body: [
      {
        type: "paragraph",
        text: "Most delays in a website project come from waiting for content, not from design or development. You know your business best, so a short checklist helps us tell its story.",
      },
      { type: "heading", text: "What to bring" },
      {
        type: "list",
        items: [
          "Your logo in the best quality you have.",
          "Business details and contact information.",
          "A short description of each service you offer.",
          "Photos you would like to use.",
          "Examples of websites you like and why.",
        ],
      },
      {
        type: "paragraph",
        text: "We agree the page structure, content responsibilities and scope before the project begins, so nothing is left to guesswork.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): NewsPost | undefined {
  return NEWS_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): NewsPost[] {
  const current = getPostBySlug(slug);
  const others = NEWS_POSTS.filter((post) => post.slug !== slug);
  const sameCategory = others.filter((post) => post.category === current?.category);
  const remainder = others.filter((post) => post.category !== current?.category);
  return [...sameCategory, ...remainder].slice(0, limit);
}
