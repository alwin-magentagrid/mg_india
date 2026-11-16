import { describe, expect, it } from "vitest";
import { NEWS_POSTS, getPostBySlug, getRelatedPosts } from "./news";

describe("news content", () => {
  it("has unique slugs", () => {
    const slugs = NEWS_POSTS.map((post) => post.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("finds posts by slug", () => {
    expect(getPostBySlug("starter-or-business-cms")?.category).toBe("Websites");
    expect(getPostBySlug("missing")).toBeUndefined();
  });

  it("returns related posts excluding the current one, same category first", () => {
    const related = getRelatedPosts("what-a-small-business-website-needs", 2);
    expect(related).toHaveLength(2);
    expect(related.map((post) => post.slug)).not.toContain("what-a-small-business-website-needs");
    expect(related[0].category).toBe("Websites");
  });
});
