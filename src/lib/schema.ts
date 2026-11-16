import { COMPANY_LEGAL_NAME, CONTACT_EMAIL, INSTAGRAM_URL, LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/site";

export type JsonLdObject = Record<string, unknown>;

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface ServiceEntry {
  name: string;
  description: string;
  path: string;
}

export interface OfferEntry {
  name: string;
  description: string;
  price: string;
  path: string;
}

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const CONTEXT = "https://schema.org";

const AREA_SERVED = [
  { "@type": "State", name: "Kerala" },
  ...["Palakkad", "Kochi", "Thrissur", "Kozhikode", "Thiruvananthapuram", "Malappuram", "Kannur", "Kottayam"].map((name) => ({
    "@type": "City",
    name,
  })),
  { "@type": "Country", name: "India" },
];

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function buildOrganizationSchema(): JsonLdObject {
  const sameAs = [LINKEDIN_URL, INSTAGRAM_URL].filter((url): url is string => Boolean(url));
  return {
    "@context": CONTEXT,
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: COMPANY_LEGAL_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.png"),
    email: CONTACT_EMAIL,
    foundingDate: "2026-05-22",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Door No. 6/305, Vavanoor Centre",
      addressLocality: "Ottappalam",
      addressRegion: "Kerala",
      postalCode: "679533",
      addressCountry: "IN",
    },
    image: absoluteUrl("/opengraph-image"),
    description:
      "Website design and development company in Kerala building websites, custom software, mobile apps and AI solutions for businesses across India.",
    priceRange: "₹5,000 – bespoke",
    areaServed: AREA_SERVED,
    knowsAbout: ["Website design", "Web development", "CMS websites", "Custom software development", "Mobile app development", "AI solutions"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      areaServed: "IN",
      availableLanguage: ["English"],
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildWebSiteSchema(): JsonLdObject {
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-IN",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function buildAboutPageSchema(path: string, name: string, description: string): JsonLdObject {
  return {
    "@context": CONTEXT,
    "@type": "AboutPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORGANIZATION_ID },
  };
}

export function buildBreadcrumbSchema(entries: BreadcrumbEntry[]): JsonLdObject {
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: absoluteUrl(entry.path),
    })),
  };
}

export function buildFaqSchema(items: FaqEntry[]): JsonLdObject {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function buildOfferSchema(offer: OfferEntry): JsonLdObject {
  return {
    "@type": "Offer",
    name: offer.name,
    description: offer.description,
    price: offer.price,
    priceCurrency: "INR",
    url: absoluteUrl(offer.path),
    seller: { "@id": ORGANIZATION_ID },
  };
}

export function buildServiceSchema(service: ServiceEntry, offers: OfferEntry[] = []): JsonLdObject {
  return {
    "@context": CONTEXT,
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: AREA_SERVED,
    ...(offers.length > 0 ? { offers: offers.map(buildOfferSchema) } : {}),
  };
}

export interface BlogPostEntry {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
}

export function buildBlogPostingSchema(post: BlogPostEntry): JsonLdObject {
  return {
    "@context": CONTEXT,
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: absoluteUrl(post.path),
    mainEntityOfPage: absoluteUrl(post.path),
    datePublished: post.publishedAt,
    inLanguage: "en-IN",
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function buildContactPageSchema(path: string, name: string, description: string): JsonLdObject {
  return {
    "@context": CONTEXT,
    "@type": "ContactPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORGANIZATION_ID },
  };
}
