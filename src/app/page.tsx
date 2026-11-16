import type { Metadata } from "next";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_SCHEMA } from "@/content/schemas";
import { PageShell } from "@/components/marketing/PageShell";
import { CtaBand } from "@/components/marketing/sections/CtaBand";
import { CustomerStory } from "@/components/marketing/sections/CustomerStory";
import { FaqSection } from "@/components/marketing/sections/FaqSection";
import { Hero } from "@/components/marketing/sections/Hero";
import { PlanCards } from "@/components/marketing/sections/PlanCards";
import { Process } from "@/components/marketing/sections/Process";
import { ServicesOverview } from "@/components/marketing/sections/ServicesOverview";
import { WhyMagentaGrid } from "@/components/marketing/sections/WhyMagentaGrid";
import { HOME_FAQ, HOME_FAQ_ITEMS } from "@/content/home";

export const metadata: Metadata = buildMetadata(PAGE_SEO.home);

export default function HomePage() {
  return (
    <PageShell footerVariant="home">
      <JsonLd data={HOME_SCHEMA} />
      <Hero />
      <ServicesOverview />
      <WhyMagentaGrid />
      <PlanCards />
      <Process />
      <CustomerStory />
      <FaqSection {...HOME_FAQ} items={HOME_FAQ_ITEMS} showContactBox />
      <CtaBand variant="home" />
    </PageShell>
  );
}
