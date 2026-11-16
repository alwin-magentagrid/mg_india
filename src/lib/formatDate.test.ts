import { describe, expect, it } from "vitest";
import { formatPublishedDate } from "./formatDate";

describe("formatPublishedDate", () => {
  it("formats ISO dates without timezone drift", () => {
    expect(formatPublishedDate("2026-11-10")).toBe("10 Nov 2026");
  });

  it("returns the input when the date is invalid", () => {
    expect(formatPublishedDate("soon")).toBe("soon");
  });
});
