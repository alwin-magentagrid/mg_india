"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/content/shared";
import { cn } from "@/lib/cn";

interface FaqAccordionProps {
  items: FaqItem[];
  isInitiallyOpen?: boolean;
}

export function FaqAccordion({ items, isInitiallyOpen = false }: FaqAccordionProps) {
  const baseId = useId();
  const [openIndexes, setOpenIndexes] = useState<number[]>(() =>
    isInitiallyOpen ? items.map((_, index) => index) : [],
  );

  const toggle = (index: number) => {
    setOpenIndexes((previous) =>
      previous.includes(index) ? previous.filter((value) => value !== index) : [...previous, index],
    );
  };

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const buttonId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-6 py-2 text-left text-t17 font-semibold text-ink transition-colors duration-200 hover:text-brand"
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="w-6 shrink-0 text-center text-[1.3125rem] font-medium text-brand">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[660px] pb-5 text-t14 text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
