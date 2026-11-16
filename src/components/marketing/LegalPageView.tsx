import Link from "next/link";
import type { LegalPage } from "@/content/legal";
import { ArticleBody } from "@/components/marketing/ArticleBody";
import { PageShell } from "@/components/marketing/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { formatPublishedDate } from "@/lib/formatDate";
import { buildBreadcrumbSchema } from "@/lib/schema";

interface LegalPageViewProps {
  page: LegalPage;
  title: string;
  path: string;
  related: { label: string; href: string };
}

export function LegalPageView({ page, title, path, related }: LegalPageViewProps) {
  return (
    <PageShell footerVariant="home" showCompanyLine>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: title, path },
        ])}
      />
      <section aria-labelledby="legal-heading" className="px-5 pt-7 sm:px-8 xl:px-[60px]">
        <div className="mx-auto max-w-[1320px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
          <div className="mt-6 rounded-hero bg-lilac px-6 py-10 sm:px-10 lg:px-[60px] lg:py-14">
            <Eyebrow>{page.eyebrow}</Eyebrow>
            <h1 id="legal-heading" className="mt-4">
              <span className="sr-only">{title}: </span>
              <span className="block text-t57 leading-[1.2] font-bold text-ink">{page.headingLead}</span>{" "}
              <span className="block font-serif text-t74 leading-[1.06] text-brand-accent italic">
                {page.headingAccent}
              </span>
            </h1>
            <p className="mt-6 max-w-[720px] text-t17 leading-[1.6] text-muted-strong">{page.intro}</p>
            <p className="mt-5 text-t13 font-medium text-muted">
              Last updated: <time dateTime={page.lastUpdated}>{formatPublishedDate(page.lastUpdated)}</time>
            </p>
          </div>
        </div>
      </section>

      <section aria-label={title} className="bg-white py-14 lg:py-20">
        <Container>
          <div className="mx-auto max-w-[860px]">
            <ArticleBody blocks={page.body} />
            <p className="mt-12 border-t border-line pt-6 text-t15 text-muted-strong">
              See also our{" "}
              <Link
                href={related.href}
                className="font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                {related.label}
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
