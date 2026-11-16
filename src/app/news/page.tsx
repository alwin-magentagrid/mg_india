import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { NewsCard } from "@/components/marketing/NewsCard";
import { PageShell } from "@/components/marketing/PageShell";
import { CtaBand } from "@/components/marketing/sections/CtaBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NEWS_PAGE, NEWS_POSTS } from "@/content/news";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";
import { formatPublishedDate } from "@/lib/formatDate";

export const metadata: Metadata = buildMetadata(PAGE_SEO.news);

export default function NewsPage() {
  const [featured, ...others] = NEWS_POSTS;

  return (
    <PageShell footerVariant="home">
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "News", path: PAGE_SEO.news.path },
        ])}
      />
      <section aria-labelledby="news-heading" className="px-5 pt-7 pb-10 sm:px-8 xl:px-[60px]">
        <div className="mx-auto max-w-[1320px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News" }]} />
          <div className="mt-6 rounded-hero bg-lilac p-6 sm:p-10 lg:p-14">
            <Eyebrow>{NEWS_PAGE.eyebrow}</Eyebrow>
            <h1 id="news-heading" className="mt-4">
              <span className="block text-t57 leading-[1.2] font-bold text-ink">{NEWS_PAGE.headingLead}</span>{" "}
              <span className="block font-serif text-t66 leading-[1.06] text-brand-accent italic">
                {NEWS_PAGE.headingAccent}
              </span>
            </h1>
            <p className="mt-6 max-w-[620px] text-t17 text-muted-strong">{NEWS_PAGE.intro}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="bg-canvas pb-10">
        <Container>
          <h2 id="featured-heading" className="sr-only">
            Featured article
          </h2>
          <article className="group relative grid overflow-hidden rounded-band bg-night lg:grid-cols-[1fr_1fr]">
            <div className="flex min-h-[260px] items-center justify-center bg-lilac p-8">
              <Image src={featured.coverSrc} alt="" width={270} height={216} unoptimized className="h-auto w-[240px]" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="flex flex-wrap items-center gap-x-3 text-t11 font-semibold text-night-pink">
                <span>FEATURED · {featured.category.toUpperCase()}</span>
                <span className="font-normal text-night-text">
                  <time dateTime={featured.publishedAt}>{formatPublishedDate(featured.publishedAt)}</time> ·{" "}
                  {featured.readingMinutes} min read
                </span>
              </p>
              <h3 className="mt-5 text-t34 leading-[1.25] font-medium text-white">
                <Link
                  href={`/news/${featured.slug}`}
                  className="transition-colors duration-200 group-hover:text-night-pink after:absolute after:inset-0"
                >
                  {featured.title}
                </Link>
              </h3>
              <p className="mt-4 text-t16 text-night-text">{featured.excerpt}</p>
              <p aria-hidden="true" className="mt-6 text-t14 font-semibold text-night-pink">
                Read Article ↗
              </p>
            </div>
          </article>
        </Container>
      </section>

      <section aria-labelledby="latest-heading" className="bg-surface py-16">
        <Container>
          <h2 id="latest-heading" className="text-t29 font-medium text-ink">
            Latest articles
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((post) => (
              <li key={post.slug} className="flex">
                <div className="flex w-full flex-col">
                  <NewsCard post={post} />
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand />
    </PageShell>
  );
}
