import type { Metadata } from "next";
import { ServicePageView } from "@/components/marketing/ServicePageView";
import { AI_SCHEMA } from "@/content/schemas";
import { AI_PAGE } from "@/content/service-pages";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.aiSolutions);

export default function AiSolutionsPage() {
  return <ServicePageView content={AI_PAGE} schema={AI_SCHEMA} />;
}
