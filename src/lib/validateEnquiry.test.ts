import { describe, expect, it } from "vitest";
import { validateEnquiry } from "./validateEnquiry";

const VALID = {
  name: "Anu Menon",
  email: "anu@example.com",
  businessName: "Menon Dental Clinic",
  phone: "+91 98765 43210",
  plan: "starter",
  existingWebsite: "",
  message: "I need a five-page website for my clinic.",
  consent: true,
};

describe("validateEnquiry", () => {
  it("accepts a complete enquiry and trims whitespace", () => {
    const { data, errors } = validateEnquiry({ ...VALID, name: "  Anu Menon  " });
    expect(errors).toEqual({});
    expect(data?.name).toBe("Anu Menon");
    expect(data?.plan).toBe("starter");
  });

  it("treats phone and existing website as optional and defaults the plan", () => {
    const { data } = validateEnquiry({ ...VALID, phone: "", existingWebsite: "", plan: undefined });
    expect(data?.phone).toBe("");
    expect(data?.existingWebsite).toBe("");
    expect(data?.plan).toBe("starter");
  });

  it("accepts website addresses with or without a protocol", () => {
    expect(validateEnquiry({ ...VALID, existingWebsite: "menondental.in" }).data).not.toBeNull();
    expect(validateEnquiry({ ...VALID, existingWebsite: "https://www.menondental.in/about" }).data).not.toBeNull();
  });

  it("requires the privacy acknowledgement", () => {
    const { data, errors } = validateEnquiry({ ...VALID, consent: false });
    expect(data).toBeNull();
    expect(errors.consent).toBeTruthy();
  });

  it("reports an error for each invalid field", () => {
    const { data, errors } = validateEnquiry({
      name: "A",
      email: "nope",
      businessName: "",
      phone: "abc",
      plan: "gold",
      existingWebsite: "not a site",
      message: "short",
    });
    expect(data).toBeNull();
    expect(Object.keys(errors).sort()).toEqual([
      "businessName",
      "consent",
      "email",
      "existingWebsite",
      "message",
      "name",
      "phone",
      "plan",
    ]);
  });

  it("rejects messages over the length limit", () => {
    const { errors } = validateEnquiry({ ...VALID, message: "x".repeat(2001) });
    expect(errors.message).toMatch(/under 2000/);
  });

  it("handles non-object input without throwing", () => {
    expect(validateEnquiry(null).data).toBeNull();
    expect(validateEnquiry("text").data).toBeNull();
  });
});
