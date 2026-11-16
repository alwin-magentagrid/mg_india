"use client";

import { useState } from "react";
import type { TechLogo } from "@/content/techLogos";

interface TechMarqueeProps {
  heading: string;
  items: TechLogo[];
}

const ITEM_CLASSES = "flex w-[96px] shrink-0 flex-col items-center gap-2";

function LogoMark({ logo }: { logo: TechLogo }) {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        width="36"
        height="36"
        aria-hidden="true"
        focusable="false"
        className="opacity-80"
        fill={`#${logo.hex}`}
      >
        <path d={logo.path} />
      </svg>
      <span className="text-t11 text-muted-strong">{logo.name}</span>
    </>
  );
}

export function TechMarquee({ heading, items }: TechMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="mt-16 text-center">
      <p className="mx-auto max-w-[560px] text-t13 leading-[1.8] font-semibold tracking-[0.12em] text-brand-accent">
        {heading}
      </p>
      <div className="marquee mt-8 overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-8" data-paused={isPaused}>
          {items.map((logo) => (
            <li key={logo.name} className={ITEM_CLASSES}>
              <LogoMark logo={logo} />
            </li>
          ))}
          {items.map((logo) => (
            <li key={`${logo.name}-duplicate`} aria-hidden="true" className={`${ITEM_CLASSES} marquee-duplicate`}>
              <LogoMark logo={logo} />
            </li>
          ))}
        </ul>
      </div>
      <button
        type="button"
        aria-pressed={isPaused}
        onClick={() => setIsPaused((previous) => !previous)}
        className="mt-4 inline-flex min-h-11 cursor-pointer items-center rounded-full px-4 text-t12 font-semibold text-muted-strong transition-colors duration-200 hover:text-brand motion-reduce:hidden"
      >
        {isPaused ? "Play Scrolling" : "Pause Scrolling"}
      </button>
    </div>
  );
}
