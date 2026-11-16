import type { Metadata } from "next";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import { WEB_DEVELOPMENT_SCHEMA } from "@/content/schemas";
import { PageShell } from "@/components/marketing/PageShell";
import { ComparePlansTable } from "@/components/marketing/sections/ComparePlansTable";
import { CtaBand } from "@/components/marketing/sections/CtaBand";
import { DarkHero } from "@/components/marketing/sections/DarkHero";
import { FaqSection } from "@/components/marketing/sections/FaqSection";
import { IntroBlock } from "@/components/marketing/sections/IntroBlock";
import { DarkBand } from "@/components/marketing/sections/DarkBand";
import { NumberedCardGrid } from "@/components/marketing/sections/NumberedCardGrid";
import { PlanCards } from "@/components/marketing/sections/PlanCards";
import { Process } from "@/components/marketing/sections/Process";
import {
  WEB_ADDONS,
  WEB_CAPABILITIES,
  WEB_FAQ,
  WEB_FAQ_ITEMS,
  WEB_FOUNDATIONS,
  WEB_HERO,
  WEB_LOCAL,
  WEB_SOLUTIONS,
} from "@/content/web-development";

export const metadata: Metadata = buildMetadata(PAGE_SEO.webDevelopment);

export default function WebDevelopmentPage() {
  return (
    <PageShell footerVariant="home">
      <JsonLd data={WEB_DEVELOPMENT_SCHEMA} />
      <DarkHero
        seoHeading={WEB_HERO.seoHeading}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Web development" },
        ]}
        eyebrow={WEB_HERO.eyebrow}
        headingLead={WEB_HERO.headingLead}
        headingAccent={WEB_HERO.headingAccent}
        subline={WEB_HERO.subline}
        body={WEB_HERO.body}
        chips={WEB_HERO.chips}
        primaryCta={WEB_HERO.primaryCta}
        secondaryCta={WEB_HERO.secondaryCta}
        note={WEB_HERO.note}
        visual={
          <div className="relative aspect-[600/580] w-full overflow-hidden rounded-[24px]">
            <Image
              src="/images/web-development-hero.png"
              alt={WEB_HERO.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 600px, 90vw"
              className="object-cover"
            />
          </div>
        }
      />
      <IntroBlock id="foundations" {...WEB_FOUNDATIONS} />
      <NumberedCardGrid id="capabilities" tone="surface" {...WEB_CAPABILITIES} />
      <NumberedCardGrid id="solutions" tone="white" {...WEB_SOLUTIONS} />
      <Process />
      <NumberedCardGrid id="add-ons" tone="surface" {...WEB_ADDONS} />
      <DarkBand
        id="local"
        eyebrow={WEB_LOCAL.eyebrow}
        heading={WEB_LOCAL.heading}
        body={WEB_LOCAL.body}
        tags={WEB_LOCAL.locations}
      />
      <PlanCards variant="web" />
      <ComparePlansTable />
      <FaqSection {...WEB_FAQ} items={WEB_FAQ_ITEMS} tone="white" />
      <CtaBand variant="website" />
    </PageShell>
  );
}
