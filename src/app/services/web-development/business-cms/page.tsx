import type { Metadata } from "next";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";
import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import { BUSINESS_CMS_SCHEMA } from "@/content/schemas";
import { PageShell } from "@/components/marketing/PageShell";
import { CmsEditorExample } from "@/components/marketing/sections/CmsEditorExample";
import { CmsScope } from "@/components/marketing/sections/CmsScope";
import { ComparePlansTable } from "@/components/marketing/sections/ComparePlansTable";
import { CtaBand } from "@/components/marketing/sections/CtaBand";
import { DarkBand } from "@/components/marketing/sections/DarkBand";
import { DarkHero } from "@/components/marketing/sections/DarkHero";
import { FaqSection } from "@/components/marketing/sections/FaqSection";
import { NumberedCardGrid } from "@/components/marketing/sections/NumberedCardGrid";
import { Process } from "@/components/marketing/sections/Process";
import {
  CMS_EXPLAINED,
  CMS_FAQ,
  CMS_FAQ_ITEMS,
  CMS_HANDOVER,
  CMS_HERO,
  CMS_MANAGE,
} from "@/content/business-cms";

export const metadata: Metadata = buildMetadata(PAGE_SEO.businessCms);

export default function BusinessCmsPage() {
  return (
    <PageShell footerVariant="web">
      <JsonLd data={BUSINESS_CMS_SCHEMA} />
      <DarkHero
        seoHeading={CMS_HERO.seoHeading}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "Business CMS" },
        ]}
        badge={CMS_HERO.badge}
        headingLead={CMS_HERO.headingLead}
        headingAccent={CMS_HERO.headingAccent}
        body={CMS_HERO.body}
        price={CMS_HERO.price}
        primaryCta={CMS_HERO.primaryCta}
        secondaryCta={CMS_HERO.secondaryCta}
        note={CMS_HERO.note}
        visual={
          <div className="relative aspect-[612/588] w-full overflow-hidden rounded-[24px]">
            <Image
              src="/images/business-cms-hero.png"
              alt={CMS_HERO.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 612px, 90vw"
              className="object-cover"
            />
          </div>
        }
      />
      <NumberedCardGrid id="what-is-cms" tone="white" {...CMS_EXPLAINED} />
      <CmsEditorExample />
      <NumberedCardGrid id="manage" tone="white" {...CMS_MANAGE} />
      <CmsScope />
      <Process />
      <DarkBand id="handover" eyebrow={CMS_HANDOVER.eyebrow} heading={CMS_HANDOVER.heading} body={CMS_HANDOVER.body} />
      <ComparePlansTable />
      <FaqSection {...CMS_FAQ} items={CMS_FAQ_ITEMS} tone="white" />
      <CtaBand variant="website" />
    </PageShell>
  );
}
