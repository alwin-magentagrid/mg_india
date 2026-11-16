export const ENQUIRY_PLANS = [
  "starter",
  "business-cms",
  "bespoke",
  "software-app-ai",
  "general-question",
  "existing-website",
] as const;

export type EnquiryPlan = (typeof ENQUIRY_PLANS)[number];

export const DEFAULT_ENQUIRY_PLAN: EnquiryPlan = "starter";

export const ENQUIRY_PLAN_LABELS: Record<EnquiryPlan, string> = {
  starter: "I’d like a Starter website (₹5,000)",
  "business-cms": "I’d like a Business CMS website (₹15,000)",
  bespoke: "I need a bespoke website",
  "software-app-ai": "Software, mobile app or AI project",
  "general-question": "I have a general question",
  "existing-website": "Help with an existing website",
};

export interface EnquiryData {
  name: string;
  email: string;
  businessName: string;
  phone: string;
  plan: EnquiryPlan;
  existingWebsite: string;
  message: string;
  consent: boolean;
}

export type EnquiryField = keyof EnquiryData;

export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

export interface EnquiryValidationResult {
  data: EnquiryData | null;
  errors: EnquiryErrors;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,19}$/;
// Accepts "example.in", "www.example.in" or a full http(s) URL.
const WEBSITE_PATTERN = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;

export const MESSAGE_MAX_LENGTH = 2000;

function readText(source: Record<string, unknown>, key: string): string {
  const value = source[key];
  return typeof value === "string" ? value.trim() : "";
}

function readConsent(source: Record<string, unknown>): boolean {
  const value = source.consent;
  return value === true || value === "true" || value === "on";
}

function isEnquiryPlan(value: string): value is EnquiryPlan {
  return (ENQUIRY_PLANS as readonly string[]).includes(value);
}

export function validateEnquiry(input: unknown): EnquiryValidationResult {
  const source = typeof input === "object" && input !== null ? (input as Record<string, unknown>) : {};
  const name = readText(source, "name");
  const email = readText(source, "email");
  const businessName = readText(source, "businessName");
  const phone = readText(source, "phone");
  const planValue = readText(source, "plan") || DEFAULT_ENQUIRY_PLAN;
  const existingWebsite = readText(source, "existingWebsite");
  const message = readText(source, "message");
  const consent = readConsent(source);

  const errors: EnquiryErrors = {};

  if (name.length < 2) errors.name = "Please enter your name.";
  else if (name.length > 100) errors.name = "Please keep your name under 100 characters.";

  if (!EMAIL_PATTERN.test(email)) errors.email = "Please enter a valid email address, like name@example.com.";

  if (businessName.length < 2) errors.businessName = "Please tell us your business name.";
  else if (businessName.length > 120) errors.businessName = "Please keep your business name under 120 characters.";

  if (phone !== "" && !PHONE_PATTERN.test(phone)) {
    errors.phone = "Please enter a valid phone number, or leave this blank.";
  }

  if (!isEnquiryPlan(planValue)) errors.plan = "Please choose one of the listed options.";

  if (existingWebsite !== "" && (existingWebsite.length > 200 || !WEBSITE_PATTERN.test(existingWebsite))) {
    errors.existingWebsite = "Please enter a website address, like yourbusiness.in, or leave this blank.";
  }

  if (message.length < 10) errors.message = "Please tell us a little more, at least 10 characters.";
  else if (message.length > MESSAGE_MAX_LENGTH) {
    errors.message = `Please keep your message under ${MESSAGE_MAX_LENGTH} characters.`;
  }

  if (!consent) errors.consent = "Please confirm you’ve read the privacy information.";

  if (Object.keys(errors).length > 0 || !isEnquiryPlan(planValue)) {
    return { data: null, errors };
  }

  return {
    data: { name, email, businessName, phone, plan: planValue, existingWebsite, message, consent },
    errors,
  };
}
