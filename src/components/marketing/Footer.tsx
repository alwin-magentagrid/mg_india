import Link from "next/link";
import {
  FOOTER_COMPANY_LINE,
  FOOTER_CONNECT,
  FOOTER_COPYRIGHT,
  FOOTER_EXPLORE,
  FOOTER_LEGAL,
  FOOTER_SOLUTIONS,
  FOOTER_TAGLINE,
  type FooterLinkItem,
} from "@/content/shared";
import { CONTACT_EMAIL } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Brand } from "./Brand";

export type FooterVariant = keyof typeof FOOTER_SOLUTIONS;

interface FooterProps {
  variant?: FooterVariant;
  showCompanyLine?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: FooterLinkItem[];
}

function FooterLink({ link }: { link: FooterLinkItem }) {
  const classes = "text-t13 text-muted";
  if (!link.href) {
    return <span className={classes}>{link.label}</span>;
  }
  return (
    <Link href={link.href} className={`${classes} transition-colors duration-200 hover:text-brand`}>
      {link.label}
    </Link>
  );
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <nav aria-label={title}>
      <p className="text-t13 font-semibold text-ink">{title}</p>
      <ul className="mt-6 flex flex-col gap-[14px]">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer({ variant = "home", showCompanyLine = false }: FooterProps) {
  return (
    <footer className="bg-white">
      <Container>
        <div className="border-t border-line pt-[43px]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[514px_210px_210px_1fr] xl:gap-x-5">
            <div className="sm:col-span-2 lg:col-span-1">
              <Brand />
              <p className="mt-[26px] max-w-[405px] text-t14 text-muted">{FOOTER_TAGLINE}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-8 inline-block text-t14 font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                {CONTACT_EMAIL} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <FooterColumn title="Explore" links={FOOTER_EXPLORE} />
            <FooterColumn title="Solutions" links={FOOTER_SOLUTIONS[variant]} />
            <FooterColumn title="Let’s connect" links={FOOTER_CONNECT} />
          </div>

          <div className="mt-[60px] flex flex-col gap-3 border-t border-line pt-[27px] pb-[44px] sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-t12 text-muted">{FOOTER_COPYRIGHT}</p>
              {showCompanyLine ? <p className="text-t12 text-muted">{FOOTER_COMPANY_LINE}</p> : null}
            </div>
            <ul className="flex flex-wrap items-center gap-3 text-t12 text-muted">
              {FOOTER_LEGAL.map((link, index) => (
                <li key={link.label} className="flex items-center gap-3">
                  {index > 0 ? <span aria-hidden="true">·</span> : null}
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
