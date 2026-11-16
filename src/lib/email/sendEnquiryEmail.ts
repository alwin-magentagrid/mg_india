import { CONTACT_EMAIL } from "@/lib/site";
import { ENQUIRY_PLAN_LABELS, type EnquiryData } from "@/lib/validateEnquiry";

export class EmailConfigurationError extends Error {}
export class EmailDeliveryError extends Error {}

function stripLineBreaks(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

export function buildEnquiryText(enquiry: EnquiryData): string {
  return [
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Business: ${enquiry.businessName}`,
    `Phone / WhatsApp: ${enquiry.phone || "Not provided"}`,
    `How can we help: ${ENQUIRY_PLAN_LABELS[enquiry.plan]}`,
    `Existing website: ${enquiry.existingWebsite || "Not provided"}`,
    `Privacy acknowledged: ${enquiry.consent ? "Yes" : "No"}`,
    "",
    enquiry.message,
  ].join("\n");
}

async function sendWithResend(enquiry: EnquiryData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) {
    throw new EmailConfigurationError("RESEND_API_KEY and EMAIL_FROM are required for the resend provider.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [process.env.EMAIL_TO ?? CONTACT_EMAIL],
      reply_to: enquiry.email,
      subject: `New project enquiry from ${stripLineBreaks(enquiry.name)}`,
      text: buildEnquiryText(enquiry),
    }),
  });

  if (!response.ok) {
    throw new EmailDeliveryError(`Resend responded with status ${response.status}.`);
  }
}

function logEnquiry(enquiry: EnquiryData): void {
  console.info(`[enquiry] To: ${process.env.EMAIL_TO ?? CONTACT_EMAIL}\n${buildEnquiryText(enquiry)}`);
}

/**
 * Provider is chosen by EMAIL_PROVIDER ("resend" | "console"). Add a case here to support another
 * provider. Without configuration, development logs the enquiry; production refuses to pretend it was sent.
 */
export async function sendEnquiryEmail(enquiry: EnquiryData): Promise<void> {
  const provider = process.env.EMAIL_PROVIDER ?? (process.env.NODE_ENV === "production" ? "" : "console");

  switch (provider) {
    case "resend":
      await sendWithResend(enquiry);
      return;
    case "console":
      logEnquiry(enquiry);
      return;
    default:
      throw new EmailConfigurationError("EMAIL_PROVIDER is not configured.");
  }
}
