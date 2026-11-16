interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

export interface RateLimitOptions {
  limit?: number;
  windowMs?: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
}

/**
 * In-memory rate limiter per identifier (e.g. IP address).
 * Defaults to 5 requests per 60 seconds.
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = {},
): RateLimitResult {
  const limit = options.limit ?? 5;
  const windowMs = options.windowMs ?? 60 * 1000;
  const now = Date.now();

  const record = store.get(identifier);

  if (!record || now >= record.resetAt) {
    const resetAt = now + windowMs;
    store.set(identifier, { count: 1, resetAt });
    return { success: true, limit, remaining: limit - 1, resetAt };
  }

  if (record.count >= limit) {
    return { success: false, limit, remaining: 0, resetAt: record.resetAt };
  }

  record.count += 1;
  return { success: true, limit, remaining: limit - record.count, resetAt: record.resetAt };
}

/**
 * Extracts client IP from standard reverse proxy headers.
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    const trimmed = realIp.trim();
    if (trimmed) return trimmed;
  }
  return "127.0.0.1";
}

/**
 * Clear the store. Useful in test suites.
 */
export function resetRateLimitStore(): void {
  store.clear();
}
