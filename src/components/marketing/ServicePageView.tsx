import Image from "next/image";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/marketing/PageShell";
import { CtaBand } from "@/components/marketing/sections/CtaBand";
import { DarkBand } from "@/components/marketing/sections/DarkBand";
import { DarkHero } from "@/components/marketing/sections/DarkHero";
import { FaqSection } from "@/components/marketing/sections/FaqSection";
import { IntroBlock } from "@/components/marketing/sections/IntroBlock";
import { NumberedCardGrid } from "@/components/marketing/sections/NumberedCardGrid";
import { Process } from "@/components/marketing/sections/Process";
import type { ServicePageContent } from "@/content/service-pages";
import type { JsonLdObject } from "@/lib/schema";

interface ServicePageViewProps {
  content: ServicePageContent;
  schema: JsonLdObject[];
}

export function ServicePageView({ content, schema }: ServicePageViewProps) {
  const { hero, intro, capabilities, useCases, tech, faq, faqItems, crumbLabel } = content;
  const slug = content.seoKey;

  return (
    <PageShell footerVariant="services">
      <JsonLd data={schema} />
      <DarkHero
        seoHeading={hero.seoHeading}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: crumbLabel },
        ]}
        eyebrow={hero.eyebrow}
        headingLead={hero.headingLead}
        headingAccent={hero.headingAccent}
        subline={hero.subline}
        body={hero.body}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        note={hero.note}
        visual={
          <div className="relative flex aspect-[600/580] w-full items-center justify-center overflow-hidden rounded-[24px] bg-lilac">
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              width={270}
              height={220}
              priority
              unoptimized
              className="h-auto w-[62%] max-w-[360px] object-contain"
            />
          </div>
        }
      />
      <IntroBlock id={`${slug}-intro`} {...intro} />
      <NumberedCardGrid id="capabilities" tone="surface" {...capabilities} />
      <NumberedCardGrid id="use-cases" tone="white" {...useCases} />
      <Process />
      <DarkBand id="technology" eyebrow={tech.eyebrow} heading={tech.heading} body={tech.body} tags={tech.tags} footnote={tech.footnote} />
      <FaqSection {...faq} items={faqItems} tone="white" />
      <CtaBand variant="services" />
    </PageShell>
  );
}
