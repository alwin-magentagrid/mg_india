"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_CTA_LABEL, PRIMARY_NAV, SERVICES_SUBMENU } from "@/content/shared";
import { cn } from "@/lib/cn";
import { Brand } from "./Brand";
import { ServicesMenu } from "./ServicesMenu";

const MOBILE_MENU_ID = "mobile-menu";

function isActivePath(currentPath: string, href: string): boolean {
  if (href === "/") return currentPath === "/";
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

function ArrowRight() {
  return <Image src="/icons/arrow-right.svg" alt="" width={18} height={18} aria-hidden="true" />;
}

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-50 border-b border-line-brand bg-canvas">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 xl:px-[68px]"
      >
        <Brand priority />

        <ul className="hidden items-center gap-[30px] lg:flex">
          {PRIMARY_NAV.map((item) => {
            const isActive = isActivePath(pathname, item.href);
            if (item.href === "/services") {
              return (
                <li key={item.href}>
                  <ServicesMenu isActive={isActive} />
                </li>
              );
            }
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative flex flex-col gap-[5px] py-1 text-t13 transition-colors duration-200",
                    isActive
                      ? "font-semibold text-brand-active"
                      : "font-medium text-brand-deep hover:text-brand-active",
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <span className="h-[2px] w-9 bg-brand-active" aria-hidden="true" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden h-[46px] items-center gap-5 rounded-full bg-brand-nav px-[22px] text-t13 font-semibold text-white transition-colors duration-200 hover:bg-brand-hover sm:inline-flex"
          >
            {NAV_CTA_LABEL}
            <ArrowRight />
          </Link>
          <button
            type="button"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-brand-deep transition-colors duration-200 hover:bg-blush active:bg-blush touch-manipulation lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((previous) => !previous)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="pointer-events-none">
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id={MOBILE_MENU_ID}
        hidden={!isMenuOpen}
        className={cn(
          "border-t border-line-brand bg-canvas lg:hidden",
          !isMenuOpen && "hidden",
        )}
      >
        <ul className="mx-auto flex max-w-[1440px] flex-col px-5 py-3 sm:px-8">
          {PRIMARY_NAV.map((item) => {
            const isActive = isActivePath(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex min-h-12 items-center text-t16",
                    isActive ? "font-semibold text-brand-active" : "font-medium text-brand-deep",
                  )}
                >
                  {item.label}
                </Link>
                {item.href === "/services" ? (
                  <ul className="mb-2 ml-4 flex flex-col border-l border-line-brand pl-4">
                    {SERVICES_SUBMENU.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="flex min-h-11 items-center gap-2 text-t14 text-muted-strong"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
          <li className="py-3">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="inline-flex h-12 w-full items-center justify-center gap-5 rounded-full bg-brand-nav text-t14 font-semibold text-white transition-colors duration-200 hover:bg-brand-hover"
            >
              {NAV_CTA_LABEL}
              <ArrowRight />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
