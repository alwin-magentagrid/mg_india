import { describe, expect, it } from "vitest";
import { PAGE_SEO, buildMetadata } from "./seo";

describe("PAGE_SEO", () => {
  it.each(Object.entries(PAGE_SEO))("%s keeps title and description within limits", (_key, page) => {
    expect(page.title.length).toBeLessThanOrEqual(60);
    expect(page.description.length).toBeLessThanOrEqual(155);
  });

  it("builds canonical and Open Graph tags from the page path", () => {
    const metadata = buildMetadata(PAGE_SEO.starter);
    expect(metadata.alternates?.canonical).toBe("/services/web-development/starter-website");
    expect(metadata.openGraph?.title).toBe(PAGE_SEO.starter.title);
  });
});
