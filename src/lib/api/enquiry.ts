import type { EnquiryData, EnquiryErrors } from "@/lib/validateEnquiry";

export type SubmitEnquiryResult =
  | { status: "success" }
  | { status: "invalid"; errors: EnquiryErrors }
  | { status: "failed" };

interface EnquiryResponseBody {
  ok?: boolean;
  errors?: EnquiryErrors;
}

export async function submitEnquiry(
  enquiry: EnquiryData,
  honeypot: string,
): Promise<SubmitEnquiryResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...enquiry, companyWebsite: honeypot }),
    });
    const body = (await response.json()) as EnquiryResponseBody;

    if (response.ok && body.ok) return { status: "success" };
    if (response.status === 422 && body.errors) return { status: "invalid", errors: body.errors };
    return { status: "failed" };
  } catch {
    return { status: "failed" };
  }
}
