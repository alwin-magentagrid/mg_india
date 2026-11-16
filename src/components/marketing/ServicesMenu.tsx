"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { SERVICES_SUBMENU } from "@/content/shared";
import { cn } from "@/lib/cn";

interface ServicesMenuProps {
  isActive: boolean;
}

export function ServicesMenu({ isActive }: ServicesMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  const closeMenu = () => {
    setIsOpen(false);
    setIsPinned(false);
  };

  const togglePinned = () => {
    if (isOpen && isPinned) {
      closeMenu();
    } else {
      setIsOpen(true);
      setIsPinned(true);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      closeMenu();
      toggleRef.current?.focus();
    };
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        closeMenu();
      }
    };
    const closeOnFocusLeave = (event: FocusEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("focusin", closeOnFocusLeave);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("focusin", closeOnFocusLeave);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        if (!isPinned) setIsOpen(false);
      }}
    >
      <div className="flex items-center gap-1">
        <Link
          href="/services"
          aria-current={isActive ? "page" : undefined}
          onClick={closeMenu}
          className={cn(
            "relative flex flex-col gap-[5px] py-1 text-t13 transition-colors duration-200",
            isActive ? "font-semibold text-brand-active" : "font-medium text-brand-deep hover:text-brand-active",
          )}
        >
          Services
          {isActive ? <span className="h-[2px] w-9 bg-brand-active" aria-hidden="true" /> : null}
        </Link>
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label="Services submenu"
          onClick={togglePinned}
          className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full text-brand-deep transition-colors duration-200 hover:bg-blush"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
            className={cn("transition-transform duration-200", isOpen && "rotate-180")}
          >
            <path d="M2 4.5l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div id={panelId} hidden={!isOpen} className="absolute top-full left-1/2 z-40 -translate-x-1/2 pt-3">
        <ul className="w-[260px] rounded-card border border-line bg-white p-3 shadow-[0_16px_40px_rgb(51_35_67/0.12)]">
          {SERVICES_SUBMENU.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="flex min-h-11 items-center rounded-[10px] px-3 text-t14 font-medium text-ink transition-colors duration-200 hover:bg-blush hover:text-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
