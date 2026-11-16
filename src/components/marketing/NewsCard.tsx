import Image from "next/image";
import Link from "next/link";
import type { NewsPost } from "@/content/news";
import { formatPublishedDate } from "@/lib/formatDate";

interface NewsCardProps {
  post: NewsPost;
}

export function NewsCard({ post }: NewsCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card bg-white transition-shadow duration-200 hover:shadow-[0_12px_32px_rgb(51_35_67/0.1)]">
      <div className="flex h-[200px] items-center justify-center bg-lilac">
        <Image src={post.coverSrc} alt="" width={200} height={160} unoptimized className="h-[160px] w-auto" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex flex-wrap items-center gap-x-3 text-t11 font-semibold text-brand">
          <span>{post.category.toUpperCase()}</span>
          <span aria-hidden="true" className="text-muted">·</span>
          <span className="font-normal text-muted">
            <time dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time> · {post.readingMinutes} min read
          </span>
        </p>
        <h3 className="mt-4 text-t20 leading-[1.3] font-semibold text-ink">
          <Link
            href={`/news/${post.slug}`}
            className="transition-colors duration-200 group-hover:text-brand after:absolute after:inset-0"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-t14 text-muted">{post.excerpt}</p>
        <p aria-hidden="true" className="mt-5 text-t13 font-semibold text-brand">
          Read Article ↗
        </p>
      </div>
    </article>
  );
}
