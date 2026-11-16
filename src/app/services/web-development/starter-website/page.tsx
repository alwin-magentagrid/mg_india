import type { Metadata } from "next";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { STARTER_SCHEMA } from "@/content/schemas";
import { PageShell } from "@/components/marketing/PageShell";
import { StarterHeroIllustration } from "@/components/marketing/StarterHeroIllustration";
import { CmsUpgradePath } from "@/components/marketing/sections/CmsUpgradePath";
import { ComparePlansTable } from "@/components/marketing/sections/ComparePlansTable";
import { CtaBand } from "@/components/marketing/sections/CtaBand";
import { DarkBand } from "@/components/marketing/sections/DarkBand";
import { DarkHero } from "@/components/marketing/sections/DarkHero";
import { FaqSection } from "@/components/marketing/sections/FaqSection";
import { NumberedCardGrid } from "@/components/marketing/sections/NumberedCardGrid";
import { Process } from "@/components/marketing/sections/Process";
import {
  STARTER_AUDIENCE,
  STARTER_FAQ,
  STARTER_FAQ_ITEMS,
  STARTER_FEATURES,
  STARTER_HERO,
  STARTER_NEEDS,
  STARTER_STRUCTURE,
} from "@/content/starter";

export const metadata: Metadata = buildMetadata(PAGE_SEO.starter);

export default function StarterWebsitePage() {
  return (
    <PageShell footerVariant="web">
      <JsonLd data={STARTER_SCHEMA} />
      <DarkHero
        seoHeading={STARTER_HERO.seoHeading}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Web development", href: "/services/web-development" },
          { label: "Starter" },
        ]}
        eyebrow={STARTER_HERO.eyebrow}
        headingLead={STARTER_HERO.headingLead}
        headingAccent={STARTER_HERO.headingAccent}
        subline={STARTER_HERO.subline}
        body={STARTER_HERO.body}
        price={STARTER_HERO.price}
        primaryCta={STARTER_HERO.primaryCta}
        secondaryCta={STARTER_HERO.secondaryCta}
        note={STARTER_HERO.note}
        visual={<StarterHeroIllustration />}
      />
      <NumberedCardGrid id="audience" tone="white" {...STARTER_AUDIENCE} />
      <NumberedCardGrid id="included" tone="surface" {...STARTER_FEATURES} />
      <NumberedCardGrid id="structure" tone="white" columns={5} {...STARTER_STRUCTURE} />
      <DarkBand id="needs" eyebrow={STARTER_NEEDS.eyebrow} heading={STARTER_NEEDS.heading} body={STARTER_NEEDS.body} />
      <Process />
      <CmsUpgradePath />
      <ComparePlansTable />
      <FaqSection {...STARTER_FAQ} items={STARTER_FAQ_ITEMS} tone="white" />
      <CtaBand variant="website" />
    </PageShell>
  );
}
