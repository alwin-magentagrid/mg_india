import { afterEach, describe, expect, it, vi } from "vitest";
import { EmailConfigurationError, EmailDeliveryError, sendEnquiryEmail } from "./sendEnquiryEmail";
import type { EnquiryData } from "@/lib/validateEnquiry";

const ENQUIRY: EnquiryData = {
  name: "Anu\nMenon",
  email: "anu@example.com",
  businessName: "Menon Dental Clinic",
  phone: "",
  plan: "bespoke",
  existingWebsite: "",
  message: "Please quote for a booking website.",
  consent: true,
};

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("sendEnquiryEmail", () => {
  it("refuses to run in production without a provider", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("EMAIL_PROVIDER", "");
    await expect(sendEnquiryEmail(ENQUIRY)).rejects.toBeInstanceOf(EmailConfigurationError);
  });

  it("posts to Resend with a single-line subject and reply-to", async () => {
    vi.stubEnv("EMAIL_PROVIDER", "resend");
    vi.stubEnv("RESEND_API_KEY", "key");
    vi.stubEnv("EMAIL_FROM", "MagentaGrid <noreply@example.com>");
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });
    vi.stubGlobal("fetch", fetchMock);

    await sendEnquiryEmail(ENQUIRY);

    const body = JSON.parse(fetchMock.mock.calls[0][1].body as string);
    expect(body.subject).toBe("New project enquiry from Anu Menon");
    expect(body.reply_to).toBe("anu@example.com");
    expect(body.to).toEqual(["contact@magentagrid.com"]);
  });

  it("surfaces provider failures as delivery errors", async () => {
    vi.stubEnv("EMAIL_PROVIDER", "resend");
    vi.stubEnv("RESEND_API_KEY", "key");
    vi.stubEnv("EMAIL_FROM", "a@b.co");
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));
    await expect(sendEnquiryEmail(ENQUIRY)).rejects.toBeInstanceOf(EmailDeliveryError);
  });
});
