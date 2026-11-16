import type { ReactNode } from "react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export interface HeroPrice {
  value: string;
  size: "sm" | "lg";
  lines: string[];
}

export interface HeroChip {
  label: string;
  value: string;
}

interface DarkHeroProps {
  seoHeading: string;
  breadcrumb: BreadcrumbItem[];
  eyebrow?: string;
  badge?: string;
  headingLead: string;
  headingAccent: string;
  subline?: string;
  body: string;
  price?: HeroPrice;
  chips?: HeroChip[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  note: string;
  visual: ReactNode;
}

export function DarkHero({
  seoHeading,
  breadcrumb,
  eyebrow,
  badge,
  headingLead,
  headingAccent,
  subline,
  body,
  price,
  chips,
  primaryCta,
  secondaryCta,
  note,
  visual,
}: DarkHeroProps) {
  return (
    <section aria-labelledby="hero-heading" className="bg-page-tint px-5 pt-7 pb-14 sm:px-8 xl:px-[60px]">
      <div className="mx-auto max-w-[1320px]">
        <Breadcrumbs items={breadcrumb} />
        <div className="mt-6 grid items-center gap-10 rounded-hero bg-night p-6 sm:p-10 lg:grid-cols-[600px_1fr]">
          <div className="flex flex-col items-start gap-6">
            {badge ? (
              <p className="rounded-full bg-night-chip px-5 py-[10px] text-t10 leading-[1.4] font-semibold text-[#f9a9d9]">
                {badge}
              </p>
            ) : null}
            {eyebrow ? (
              <p className="text-t11 leading-[1.4] font-semibold text-night-pink">{eyebrow}</p>
            ) : null}
            <h1 id="hero-heading">
              <span className="sr-only">{seoHeading}: </span>
              <span className="block text-t58 leading-[1.2] font-bold text-white">{headingLead}</span>{" "}
              <span className="block font-serif text-t74 leading-[1.06] text-night-pink italic">{headingAccent}</span>
            </h1>
            {subline ? <p className="max-w-[580px] text-t20 leading-[1.4] font-medium text-white">{subline}</p> : null}
            <p className="max-w-[580px] text-t16 leading-[1.4] text-night-text">{body}</p>
            {price ? (
              <div className="flex items-center gap-[18px] font-medium text-white">
                <p className={price.size === "lg" ? "text-t44 leading-[1.4]" : "text-t34 leading-[1.4]"}>
                  {price.value}
                </p>
                <p className={price.size === "lg" ? "text-t12 leading-[1.4] text-night-text" : "text-t11 leading-[1.4] text-night-text"}>
                  {price.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ) : null}
            <div className="flex flex-wrap items-center gap-x-[18px] gap-y-4">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
              <a
                href={secondaryCta.href}
                className="inline-flex min-h-11 items-center text-t13 font-medium text-white transition-colors duration-200 hover:text-night-pink"
              >
                {secondaryCta.label}
              </a>
            </div>
            {chips ? (
              <ul className="flex w-full flex-wrap gap-x-4 gap-y-3 rounded-[16px] bg-night-card p-[18px]">
                {chips.map((chip) => (
                  <li key={chip.label} className="min-w-[120px] flex-1">
                    <p className="text-t9 leading-[1.4] font-semibold text-night-label">{chip.label}</p>
                    <p className="mt-[5px] text-t22 leading-[1.4] font-medium text-night-pink">{chip.value}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="mx-auto w-full max-w-[600px]">{visual}</div>
        </div>
        <p className="mt-6 text-t11 leading-[1.4] text-muted">{note}</p>
      </div>
    </section>
  );
}
