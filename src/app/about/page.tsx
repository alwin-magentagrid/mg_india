import type { Metadata } from "next";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { ABOUT_SCHEMA } from "@/content/schemas";
import { PageShell } from "@/components/marketing/PageShell";
import { AboutHero } from "@/components/marketing/sections/AboutHero";
import {
  AboutCapabilities,
  AboutCompany,
  AboutMission,
  AboutPurpose,
} from "@/components/marketing/sections/AboutSections";
import { AboutValueProposition } from "@/components/marketing/sections/AboutValueProposition";
import { CtaBand } from "@/components/marketing/sections/CtaBand";

export const metadata: Metadata = buildMetadata(PAGE_SEO.about);

export default function AboutPage() {
  return (
    <PageShell footerVariant="web" showCompanyLine>
      <JsonLd data={ABOUT_SCHEMA} />
      <AboutHero />
      <AboutPurpose />
      <AboutMission />
      <AboutCapabilities />
      <AboutValueProposition />
      <AboutCompany />
      <CtaBand variant="website" />
    </PageShell>
  );
}
