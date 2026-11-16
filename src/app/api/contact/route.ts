import { EmailConfigurationError, sendEnquiryEmail } from "@/lib/email/sendEnquiryEmail";
import { checkRateLimit, getClientIp } from "@/lib/rateLimit";
import { validateEnquiry } from "@/lib/validateEnquiry";

const HONEYPOT_FIELD = "companyWebsite";

function jsonResponse(
  body: Record<string, unknown>,
  status: number,
  headers?: HeadersInit,
): Response {
  return Response.json(body, { status, headers });
}

export async function POST(request: Request): Promise<Response> {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.success) {
    const retryAfter = Math.max(1, Math.ceil((rateLimit.resetAt - Date.now()) / 1000));
    return jsonResponse(
      { ok: false, message: "Too many requests. Please wait a moment before trying again." },
      429,
      { "Retry-After": String(retryAfter) },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ ok: false, message: "The request could not be read." }, 400);
  }

  const honeypot =
    typeof payload === "object" && payload !== null
      ? (payload as Record<string, unknown>)[HONEYPOT_FIELD]
      : undefined;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return jsonResponse({ ok: true }, 200);
  }

  const { data, errors } = validateEnquiry(payload);
  if (!data) {
    return jsonResponse({ ok: false, errors }, 422);
  }

  try {
    await sendEnquiryEmail(data);
  } catch (error) {
    console.error("[enquiry] delivery failed", error instanceof Error ? error.message : error);
    const status = error instanceof EmailConfigurationError ? 503 : 502;
    return jsonResponse({ ok: false, message: "We couldn't send your enquiry right now." }, status);
  }

  return jsonResponse({ ok: true }, 200);
}
