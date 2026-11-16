import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/marketing/ArticleBody";
import { NewsCard } from "@/components/marketing/NewsCard";
import { PageShell } from "@/components/marketing/PageShell";
import { CtaBand } from "@/components/marketing/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { NEWS_POSTS, getPostBySlug, getRelatedPosts } from "@/content/news";
import { formatPublishedDate } from "@/lib/formatDate";
import { buildBlogPostingSchema, buildBreadcrumbSchema } from "@/lib/schema";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

interface NewsPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return NEWS_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const brandedTitle = `${post.title} | MagentaGrid`;
  const metadata = buildMetadata({
    title: brandedTitle.length <= 60 ? brandedTitle : post.title,
    description: post.excerpt.slice(0, 155),
    path: `/news/${post.slug}`,
  });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article", publishedTime: post.publishedAt },
  };
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const path = `/news/${post.slug}`;

  return (
    <PageShell footerVariant="home">
      <JsonLd
        data={[
          buildBlogPostingSchema({ title: post.title, description: post.excerpt, path, publishedAt: post.publishedAt }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "News", path: PAGE_SEO.news.path },
            { name: post.title, path },
          ]),
        ]}
      />
      <article>
        <header className="px-5 pt-7 pb-10 sm:px-8 xl:px-[60px]">
          <div className="mx-auto max-w-[1320px]">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }, { label: post.category }]}
            />
            <div className="mt-6 rounded-hero bg-lilac p-6 sm:p-10 lg:p-14">
              <div className="mx-auto max-w-[820px] text-center">
                <p className="flex flex-wrap items-center justify-center gap-x-3 text-t11 font-semibold text-brand-accent">
                  <span>{post.category.toUpperCase()}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-normal text-muted-strong">
                    <time dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time> · {post.readingMinutes} min read
                  </span>
                </p>
                <h1 className="mt-5 text-t46 leading-[1.2] font-bold text-ink">{post.title}</h1>
                <p className="mt-5 text-t19 text-muted-strong">{post.excerpt}</p>
              </div>
              <div className="mx-auto mt-10 flex h-[220px] max-w-[820px] items-center justify-center rounded-card bg-white/70">
                <Image src={post.coverSrc} alt="" width={270} height={216} unoptimized className="h-[180px] w-auto" />
              </div>
            </div>
          </div>
        </header>

        <div className="bg-white py-12 md:py-16">
          <div className="mx-auto w-full max-w-[760px] px-5 sm:px-8 lg:px-0">
            <ArticleBody blocks={post.body} />
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
              <p className="text-t14 text-muted">Written by the MagentaGrid team</p>
              <Link
                href="/news"
                className="inline-flex min-h-11 items-center text-t14 font-semibold text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                ← Back To All News
              </Link>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section aria-labelledby="related-heading" className="bg-surface py-16">
          <Container>
            <h2 id="related-heading" className="text-t29 font-medium text-ink">
              Keep reading
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug} className="flex">
                  <div className="flex w-full flex-col">
                    <NewsCard post={item} />
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
      <CtaBand />
    </PageShell>
  );
}
