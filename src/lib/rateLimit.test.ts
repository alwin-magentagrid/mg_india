import { afterEach, describe, expect, it } from "vitest";
import { checkRateLimit, getClientIp, resetRateLimitStore } from "./rateLimit";

afterEach(() => {
  resetRateLimitStore();
});

describe("checkRateLimit", () => {
  it("allows requests within the limit", () => {
    const result1 = checkRateLimit("192.168.1.1", { limit: 2, windowMs: 1000 });
    expect(result1.success).toBe(true);
    expect(result1.remaining).toBe(1);

    const result2 = checkRateLimit("192.168.1.1", { limit: 2, windowMs: 1000 });
    expect(result2.success).toBe(true);
    expect(result2.remaining).toBe(0);
  });

  it("blocks requests that exceed the limit", () => {
    checkRateLimit("192.168.1.1", { limit: 2, windowMs: 1000 });
    checkRateLimit("192.168.1.1", { limit: 2, windowMs: 1000 });

    const result3 = checkRateLimit("192.168.1.1", { limit: 2, windowMs: 1000 });
    expect(result3.success).toBe(false);
    expect(result3.remaining).toBe(0);
  });

  it("tracks different identifiers independently", () => {
    checkRateLimit("user-a", { limit: 1, windowMs: 1000 });
    const resultA = checkRateLimit("user-a", { limit: 1, windowMs: 1000 });
    const resultB = checkRateLimit("user-b", { limit: 1, windowMs: 1000 });

    expect(resultA.success).toBe(false);
    expect(resultB.success).toBe(true);
  });
});

describe("getClientIp", () => {
  it("extracts from x-forwarded-for first IP", () => {
    const req = new Request("http://localhost", {
      headers: { "x-forwarded-for": "203.0.113.195, 70.41.3.18, 150.172.238.178" },
    });
    expect(getClientIp(req)).toBe("203.0.113.195");
  });

  it("extracts from x-real-ip if forwarded-for is absent", () => {
    const req = new Request("http://localhost", {
      headers: { "x-real-ip": "198.51.100.1" },
    });
    expect(getClientIp(req)).toBe("198.51.100.1");
  });

  it("defaults to 127.0.0.1 when no IP header present", () => {
    const req = new Request("http://localhost");
    expect(getClientIp(req)).toBe("127.0.0.1");
  });
});
