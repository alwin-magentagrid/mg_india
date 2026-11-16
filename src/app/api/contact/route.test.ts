import { afterEach, describe, expect, it, vi } from "vitest";
import { POST } from "./route";

function post(body: unknown): Request {
  return new Request("http://localhost/api/contact", { method: "POST", body: typeof body === "string" ? body : JSON.stringify(body) });
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
});
