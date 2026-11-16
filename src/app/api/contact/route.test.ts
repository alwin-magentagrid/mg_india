import { afterEach, describe, expect, it, vi } from "vitest";
import { resetRateLimitStore } from "@/lib/rateLimit";
import { POST } from "./route";

function post(body: unknown, headers?: HeadersInit): Request {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers,
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

const VALID = {
  name: "Anu Menon",
  email: "anu@example.com",
  businessName: "Menon Dental Clinic",
  phone: "",
  plan: "starter",
  existingWebsite: "",
  message: "I need a five-page website.",
  consent: true,
};

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
  resetRateLimitStore();
});

describe("POST /api/contact", () => {
  it("returns 400 for unreadable bodies", async () => {
    expect((await POST(post("not json"))).status).toBe(400);
  });

  it("returns 422 with field errors for invalid input", async () => {
    const response = await POST(post({ ...VALID, email: "bad" }));
    expect(response.status).toBe(422);
    expect((await response.json()).errors.email).toBeTruthy();
  });

  it("accepts valid enquiries using the console provider", async () => {
    vi.stubEnv("EMAIL_PROVIDER", "console");
    const info = vi.spyOn(console, "info").mockImplementation(() => undefined);
    const response = await POST(post(VALID));
    expect(response.status).toBe(200);
    expect(info).toHaveBeenCalledOnce();
  });

  it("silently drops honeypot submissions", async () => {
    vi.stubEnv("EMAIL_PROVIDER", "console");
    const info = vi.spyOn(console, "info").mockImplementation(() => undefined);
    const response = await POST(post({ ...VALID, companyWebsite: "spam.example" }));
    expect(response.status).toBe(200);
    expect(info).not.toHaveBeenCalled();
  });

  it("returns 503 when no provider is configured in production", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("EMAIL_PROVIDER", "");
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    expect((await POST(post(VALID))).status).toBe(503);
  });

  it("returns 429 with Retry-After when rate limit is exceeded", async () => {
    vi.stubEnv("EMAIL_PROVIDER", "console");
    vi.spyOn(console, "info").mockImplementation(() => undefined);

    // Default limit is 5 requests per IP
    for (let i = 0; i < 5; i++) {
      const res = await POST(post(VALID, { "x-forwarded-for": "198.51.100.42" }));
      expect(res.status).toBe(200);
    }

    const blocked = await POST(post(VALID, { "x-forwarded-for": "198.51.100.42" }));
    expect(blocked.status).toBe(429);
    expect(blocked.headers.get("Retry-After")).toBeTruthy();
    const body = await blocked.json();
    expect(body.ok).toBe(false);
    expect(body.message).toMatch(/too many requests/i);
  });
});
