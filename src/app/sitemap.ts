import type { MetadataRoute } from "next";
import { LEGAL_LAST_UPDATED } from "@/content/legal";
import { NEWS_POSTS } from "@/content/news";
import { PAGE_SEO } from "@/lib/seo";
import { absoluteUrl } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const legalPaths: string[] = [PAGE_SEO.privacy.path, PAGE_SEO.cookies.path];
  const pages: MetadataRoute.Sitemap = Object.values(PAGE_SEO).map((page) => {
    const isLegal = legalPaths.includes(page.path);
    return {
      url: absoluteUrl(page.path),
      ...(isLegal ? { lastModified: LEGAL_LAST_UPDATED } : {}),
      changeFrequency: page.path === "/" ? "weekly" : isLegal ? "yearly" : "monthly",
      priority: page.path === "/" ? 1 : isLegal ? 0.3 : page.path === "/contact" ? 0.6 : 0.8,
    };
  });
  const posts: MetadataRoute.Sitemap = NEWS_POSTS.map((post) => ({
    url: absoluteUrl(`/news/${post.slug}`),
    lastModified: post.publishedAt,
    changeFrequency: "yearly",
    priority: 0.5,
  }));
  return [...pages, ...posts];
}
