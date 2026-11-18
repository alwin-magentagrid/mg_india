import type { Metadata } from "next";
import { ServicePageView } from "@/components/marketing/ServicePageView";
import { MOBILE_SCHEMA } from "@/content/schemas";
import { MOBILE_PAGE } from "@/content/service-pages";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.mobileAppDevelopment);

export default function MobileAppDevelopmentPage() {
  return <ServicePageView content={MOBILE_PAGE} schema={MOBILE_SCHEMA} />;
}
