import { describe, expect, it } from "vitest";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildServiceSchema,
} from "./schema";

describe("schema builders", () => {
  it("numbers breadcrumb items from 1 with absolute URLs", () => {
    const schema = buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]);
    const items = schema.itemListElement as Array<{ position: number; item: string }>;
    expect(items.map((item) => item.position)).toEqual([1, 2]);
    expect(items[1].item).toMatch(/^https?:\/\/.+\/services$/);
  });

  it("includes INR offers only when provided", () => {
    const service = { name: "Starter", description: "Five pages", path: "/s" };
    expect(buildServiceSchema(service)).not.toHaveProperty("offers");
    const withOffer = buildServiceSchema(service, [{ name: "Starter", description: "d", price: "5000", path: "/s" }]);
    expect(JSON.stringify(withOffer)).toContain('"priceCurrency":"INR"');
    expect(JSON.stringify(withOffer)).toContain('"price":"5000"');
  });

  it("maps FAQs to Question and Answer entities", () => {
    const schema = buildFaqSchema([{ question: "Q?", answer: "A." }]);
    expect(JSON.stringify(schema)).toContain('"@type":"Question"');
  });

  it("describes the registered company", () => {
    const schema = buildOrganizationSchema();
    expect(schema.legalName).toBe("MagentaGrid Technologies Private Limited");
    expect(schema.foundingDate).toBe("2026-05-22");
  });
});
