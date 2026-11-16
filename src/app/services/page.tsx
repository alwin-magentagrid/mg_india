import type { Metadata } from "next";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SERVICES_SCHEMA } from "@/content/schemas";
import { PageShell } from "@/components/marketing/PageShell";
import { CtaBand } from "@/components/marketing/sections/CtaBand";
import { FaqSection } from "@/components/marketing/sections/FaqSection";
import { Process } from "@/components/marketing/sections/Process";
import { ServiceFeature } from "@/components/marketing/sections/ServiceFeature";
import { ServicesHero } from "@/components/marketing/sections/ServicesHero";
import {
  SERVICES_FAQ,
  SERVICES_FAQ_ITEMS,
  SERVICE_FEATURES,
} from "@/content/services";

export const metadata: Metadata = buildMetadata(PAGE_SEO.services);

export default function ServicesPage() {
  return (
    <PageShell footerVariant="services">
      <JsonLd data={SERVICES_SCHEMA} />
      <ServicesHero />
      {SERVICE_FEATURES.map((feature, index) => (
        <ServiceFeature key={feature.id} feature={feature} tone={index % 2 === 0 ? "white" : "surface"} />
      ))}
      <Process />
      <FaqSection {...SERVICES_FAQ} items={SERVICES_FAQ_ITEMS} tone="white" />
      <CtaBand variant="services" />
    </PageShell>
  );
}
