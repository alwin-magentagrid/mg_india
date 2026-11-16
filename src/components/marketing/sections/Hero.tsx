import Image from "next/image";
import { HOME_HERO } from "@/content/home";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="px-5 pt-7 pb-12 sm:px-8 md:pb-[70px] xl:px-[60px]">
      <div className="mx-auto flex max-w-[1320px] flex-col items-center gap-7 overflow-hidden rounded-hero bg-gradient-to-r from-hero-from to-white p-6 sm:p-10 lg:flex-row">
        <div className="flex w-full flex-col items-start gap-[23px] py-3 lg:w-[600px] lg:shrink-0">
          <p className="rounded-full bg-brand px-[10px] py-[10px] text-center text-[10px] leading-[1.4] font-semibold text-white">
            <span className="inline-block px-[10px]">{HOME_HERO.eyebrow}</span>
          </p>
          <h1 id="hero-heading" className="flex flex-col gap-[19px]">
            <span className="sr-only">{HOME_HERO.seoHeading}: </span>
            <span className="text-t32 leading-[1.08] font-medium text-ink">{HOME_HERO.headingLead}</span>{" "}
            <span className="font-serif text-t66 leading-[1.04] text-brand-accent italic">
              {HOME_HERO.headingAccent}
            </span>
          </h1>
          <p className="max-w-[580px] text-t16 leading-[1.4] text-muted-strong">{HOME_HERO.body}</p>
          <p className="text-t19 leading-[1.4] font-medium text-ink">{HOME_HERO.tagline}</p>
          <div className="flex flex-wrap items-center gap-x-[18px] gap-y-4">
            <Button href={HOME_HERO.primaryCta.href}>{HOME_HERO.primaryCta.label}</Button>
            <a
              href={HOME_HERO.secondaryCta.href}
              className="inline-flex min-h-11 items-center text-t13 font-medium text-muted-strong transition-colors duration-200 hover:text-brand"
            >
              {HOME_HERO.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="relative aspect-[612/588] w-full max-w-[612px] overflow-hidden rounded-[24px]">
          <Image
            src="/images/hero-3d.png"
            alt={HOME_HERO.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 612px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
