import type { ReactNode } from "react";
import { ABOUT_TECHNOLOGIES, ABOUT_VALUE_PROPOSITION } from "@/content/about";
import { TECH_LOGOS } from "@/content/techLogos";
import { TechMarquee } from "@/components/marketing/TechMarquee";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const ICON_PROPS = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const ICONS: Record<string, ReactNode> = {
  bolt: (
    <svg {...ICON_PROPS}>
      <path d="M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z" />
    </svg>
  ),
  target: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </svg>
  ),
  currency: (
    <svg {...ICON_PROPS}>
      <path d="M12 3v18M16 7.5c-.8-1.2-2.2-1.8-4-1.8-2.2 0-3.8 1-3.8 2.7 0 4 8 1.9 8 6 0 1.8-1.7 2.9-4.2 2.9-1.9 0-3.4-.7-4.2-2" />
    </svg>
  ),
  trend: (
    <svg {...ICON_PROPS}>
      <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />
    </svg>
  ),
};

export function AboutValueProposition() {
  return (
    <section aria-labelledby="value-heading" className="bg-white py-16">
      <Container>
        <div className="text-center">
          <Eyebrow>{ABOUT_VALUE_PROPOSITION.eyebrow}</Eyebrow>
          <h2 id="value-heading" className="mt-[13px] text-t46 leading-[1.3] font-medium text-ink">
            {ABOUT_VALUE_PROPOSITION.heading}
          </h2>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_VALUE_PROPOSITION.items.map((item) => (
            <li
              key={item.title}
              className="rounded-card border border-line bg-white p-6 shadow-[0_6px_20px_rgb(51_35_67/0.06)]"
            >
              <span className="flex size-12 items-center justify-center rounded-[12px] bg-blush text-brand">
                {ICONS[item.icon]}
              </span>
              <h3 className="mt-6 text-t17 font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-t14 text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
        <TechMarquee heading={ABOUT_TECHNOLOGIES.heading} items={TECH_LOGOS} />
      </Container>
    </section>
  );
}
