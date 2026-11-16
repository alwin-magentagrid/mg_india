import Image from "next/image";
import Link from "next/link";
import { SERVICES_HERO } from "@/content/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export function ServicesHero() {
  return (
    <section aria-labelledby="services-hero-heading" className="px-5 pt-7 pb-14 sm:px-8 xl:px-[60px]">
      <div className="mx-auto max-w-[1320px]">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        <div className="mt-6 rounded-hero bg-lilac p-6 sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-[570px_1fr]">
            <Image
              src="/images/services-hero.svg"
              alt={SERVICES_HERO.imageAlt}
              width={570}
              height={536}
              priority
              unoptimized
              className="mx-auto h-auto w-full max-w-[570px]"
            />
            <div className="flex flex-col items-start gap-[25px]">
              <p className="text-t11 leading-[1.4] font-semibold text-brand-accent">{SERVICES_HERO.eyebrow}</p>
              <h1 id="services-hero-heading">
                <span className="sr-only">{SERVICES_HERO.seoHeading}: </span>
                <span className="block text-t57 leading-[1.2] font-bold text-ink">{SERVICES_HERO.headingLead}</span>{" "}
                <span className="block font-serif text-t74 leading-[1.06] text-brand-accent italic">
                  {SERVICES_HERO.headingAccent}
                </span>
              </h1>
              <p className="max-w-[610px] text-t20 leading-[1.4] font-medium text-ink">{SERVICES_HERO.subline}</p>
              <p className="max-w-[610px] text-t16 leading-[1.4] text-muted-strong">{SERVICES_HERO.body}</p>
              <div className="flex flex-wrap items-center gap-x-[18px] gap-y-4">
                <Button href={SERVICES_HERO.primaryCta.href}>{SERVICES_HERO.primaryCta.label}</Button>
                <a
                  href={SERVICES_HERO.secondaryCta.href}
                  className="inline-flex min-h-11 items-center text-t13 font-medium text-muted-strong transition-colors duration-200 hover:text-brand"
                >
                  {SERVICES_HERO.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
          <hr className="mt-8 border-t border-[#f1efec] sm:mt-[26px]" />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {SERVICES_HERO.links.map((link, index) => (
              <li key={link.href}>
                <p className="text-t10 leading-[1.4] font-semibold text-brand-accent">
                  {String(index + 1).padStart(2, "0")} /
                </p>
                <Link
                  href={link.href}
                  className="mt-[7px] inline-flex min-h-11 items-center text-t16 font-medium text-muted-strong transition-colors duration-200 hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
