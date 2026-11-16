import {
  buildAboutPageSchema,
  buildBreadcrumbSchema,
  buildContactPageSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildServiceSchema,
  buildWebSiteSchema,
  type JsonLdObject,
  type OfferEntry,
} from "@/lib/schema";
import { PAGE_SEO } from "@/lib/seo";
import { HOME_FAQ_ITEMS } from "./home";
import { SERVICES_FAQ_ITEMS, SERVICE_FEATURES } from "./services";
import { WEB_FAQ_ITEMS } from "./web-development";
import { STARTER_FAQ_ITEMS } from "./starter";
import { CMS_FAQ_ITEMS } from "./business-cms";

const HOME_CRUMB = { name: "Home", path: "/" };
const SERVICES_CRUMB = { name: "Services", path: PAGE_SEO.services.path };
const WEB_CRUMB = { name: "Web development", path: PAGE_SEO.webDevelopment.path };

const STARTER_OFFER: OfferEntry = {
  name: "Starter website",
  description: "Five-page, mobile-friendly website with contact and WhatsApp enquiry and basic on-page SEO. No CMS.",
  price: "5000",
  path: PAGE_SEO.starter.path,
};

const CMS_OFFER: OfferEntry = {
  name: "Business CMS website",
  description: "Custom website design with a CMS so your team can update text and images, plus handover.",
  price: "15000",
  path: PAGE_SEO.businessCms.path,
};

export const HOME_SCHEMA: JsonLdObject[] = [
  buildOrganizationSchema(),
  buildWebSiteSchema(),
  buildFaqSchema(HOME_FAQ_ITEMS),
];

const SERVICE_SCHEMA_NAMES: Record<string, string> = {
  "web-development": "Web development",
  "custom-software": "Custom software development",
  "mobile-apps": "Mobile app development",
  "ai-solutions": "AI solutions",
};

export const SERVICES_SCHEMA: JsonLdObject[] = [
  ...SERVICE_FEATURES.map((feature) =>
    buildServiceSchema({
      name: SERVICE_SCHEMA_NAMES[feature.id] ?? feature.headingLead,
      description: feature.body,
      path: feature.id === "web-development" ? PAGE_SEO.webDevelopment.path : `${PAGE_SEO.services.path}#${feature.id}`,
    }),
  ),
  buildBreadcrumbSchema([HOME_CRUMB, SERVICES_CRUMB]),
  buildFaqSchema(SERVICES_FAQ_ITEMS),
];

export const WEB_DEVELOPMENT_SCHEMA: JsonLdObject[] = [
  buildServiceSchema(
    { name: "Web development", description: PAGE_SEO.webDevelopment.description, path: PAGE_SEO.webDevelopment.path },
    [STARTER_OFFER, CMS_OFFER],
  ),
  buildBreadcrumbSchema([HOME_CRUMB, SERVICES_CRUMB, { name: "Web development", path: PAGE_SEO.webDevelopment.path }]),
  buildFaqSchema(WEB_FAQ_ITEMS),
];

export const STARTER_SCHEMA: JsonLdObject[] = [
  buildServiceSchema({ name: "Starter website", description: PAGE_SEO.starter.description, path: PAGE_SEO.starter.path }, [STARTER_OFFER]),
  buildBreadcrumbSchema([HOME_CRUMB, WEB_CRUMB, { name: "Starter website", path: PAGE_SEO.starter.path }]),
  buildFaqSchema(STARTER_FAQ_ITEMS),
];

export const BUSINESS_CMS_SCHEMA: JsonLdObject[] = [
  buildServiceSchema({ name: "Business CMS website", description: PAGE_SEO.businessCms.description, path: PAGE_SEO.businessCms.path }, [CMS_OFFER]),
  buildBreadcrumbSchema([HOME_CRUMB, WEB_CRUMB, { name: "Business CMS website", path: PAGE_SEO.businessCms.path }]),
  buildFaqSchema(CMS_FAQ_ITEMS),
];

export const ABOUT_SCHEMA: JsonLdObject[] = [
  buildOrganizationSchema(),
  buildAboutPageSchema(PAGE_SEO.about.path, "About MagentaGrid India", PAGE_SEO.about.description),
  buildBreadcrumbSchema([HOME_CRUMB, { name: "About MagentaGrid", path: PAGE_SEO.about.path }]),
];

export const CONTACT_SCHEMA: JsonLdObject[] = [
  buildContactPageSchema(PAGE_SEO.contact.path, "Contact MagentaGrid India", PAGE_SEO.contact.description),
  buildBreadcrumbSchema([HOME_CRUMB, { name: "Contact", path: PAGE_SEO.contact.path }]),
];
