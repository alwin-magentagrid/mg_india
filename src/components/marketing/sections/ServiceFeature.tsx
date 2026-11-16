import Image from "next/image";
import type { ServiceFeatureContent } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

interface ServiceFeatureProps {
  feature: ServiceFeatureContent;
  tone: "white" | "surface";
}

export function ServiceFeature({ feature, tone }: ServiceFeatureProps) {
  const headingId = `${feature.id}-heading`;

  return (
    <section
      id={feature.id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-4 py-[72px]", tone === "white" ? "bg-white" : "bg-surface")}
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[650px_478px] lg:justify-between lg:gap-[72px]">
        <div className="flex flex-col items-start gap-[19px]">
          <Eyebrow>{feature.label}</Eyebrow>
          <h2 id={headingId}>
            <span className="block text-t46 leading-[1.45] font-medium text-ink">{feature.headingLead}</span>{" "}
            <span className="block font-serif text-t55 leading-[1.12] text-brand italic">{feature.headingAccent}</span>
          </h2>
          <p className="max-w-[628px] text-t16 text-muted">{feature.body}</p>
          <ul className="flex flex-col gap-2 text-t15 text-ink">
            {feature.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span aria-hidden="true">✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <Button href={feature.ctaHref} size="lg" className="mt-1">
            {feature.ctaLabel}
          </Button>
        </div>
        <figure className="flex flex-col items-center gap-6 rounded-[26px] bg-lilac p-[38px]">
          <Image
            src={feature.visualSrc}
            alt=""
            width={270}
            height={216}
            unoptimized
            className="h-[216px] w-[270px] max-w-full object-contain"
          />
          <figcaption className="text-center text-t20 font-medium text-ink">{feature.caption}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
