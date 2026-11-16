import Image from "next/image";
import { CTA_CONTENT, type CtaVariant } from "@/content/shared";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface CtaBandProps {
  variant?: CtaVariant;
}

export function CtaBand({ variant = "home" }: CtaBandProps) {
  const content = CTA_CONTENT[variant];

  return (
    <section aria-labelledby="cta-heading" className="bg-white pt-16 pb-12">
      <Container>
        <div className="flex flex-col gap-8 overflow-hidden rounded-band bg-blush p-6 sm:p-10 lg:h-[320px] lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-0">
          <div className="max-w-[720px]">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h2 id="cta-heading" className="mt-3">
              <span className="block text-t39 font-medium text-ink">{content.heading}</span>
              <span className="block font-serif text-t52 leading-[1.1] text-brand italic">{content.accent}</span>
            </h2>
            <p className="mt-3 max-w-[820px] text-t16 text-muted">{content.body}</p>
            <Button href="/contact" size="lg" className="mt-5">
              {content.buttonLabel}
            </Button>
          </div>
          <Image
            src="/images/cta-conversation.png"
            alt=""
            width={413}
            height={265}
            sizes="(min-width: 1024px) 413px, 60vw"
            className="h-auto w-3/5 max-w-[413px] self-center object-contain lg:w-[413px] lg:shrink-0"
          />
        </div>
      </Container>
    </section>
  );
}
