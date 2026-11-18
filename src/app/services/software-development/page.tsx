import type { Metadata } from "next";
import { ServicePageView } from "@/components/marketing/ServicePageView";
import { SOFTWARE_SCHEMA } from "@/content/schemas";
import { SOFTWARE_PAGE } from "@/content/service-pages";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.softwareDevelopment);

export default function SoftwareDevelopmentPage() {
  return <ServicePageView content={SOFTWARE_PAGE} schema={SOFTWARE_SCHEMA} />;
}
