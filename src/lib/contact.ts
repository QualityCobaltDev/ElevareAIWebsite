const MAX_CONTENT_LENGTH = 12_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 6;

const requestTracker = new Map<string, { count: number; expiresAt: number }>();

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  topic: string;
  timeline?: string;
  message: string;
  website?: string;
};

function stripControl(input: string) {
  return input.replace(/[\u0000-\u001F\u007F]/g, '').trim();
}

export function sanitizeField(value: unknown, maxLen: number) {
  if (typeof value !== 'string') return '';
  const clean = stripControl(value).replace(/\s+/g, ' ');
  return clean.slice(0, maxLen);
}

export function sanitizeMessage(value: unknown, maxLen: number) {
  if (typeof value !== 'string') return '';
  const clean = stripControl(value).replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n');
  return clean.slice(0, maxLen);
}

export function validateContactPayload(input: unknown): { ok: true; payload: ContactPayload } | { ok: false; error: string } {
  if (typeof input !== 'object' || !input) return { ok: false, error: 'Invalid request payload.' };

  const raw = input as Record<string, unknown>;
  const payload: ContactPayload = {
    name: sanitizeField(raw.name, 100),
    email: sanitizeField(raw.email, 160).toLowerCase(),
    company: sanitizeField(raw.company, 120),
    role: sanitizeField(raw.role, 120),
    topic: sanitizeField(raw.topic, 80),
    timeline: sanitizeField(raw.timeline, 120),
    message: sanitizeMessage(raw.message, 2200),
    website: sanitizeField(raw.website, 200)
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!payload.name || payload.name.length < 2) return { ok: false, error: 'Please provide your full name.' };
  if (!payload.email || !emailRegex.test(payload.email)) return { ok: false, error: 'Please provide a valid work email.' };
  if (!payload.topic) return { ok: false, error: 'Please select a primary topic.' };
  if (!payload.message || payload.message.length < 30) return { ok: false, error: 'Please provide a more detailed message.' };

  return { ok: true, payload };
}

export function isAllowedPayloadSize(contentLengthHeader: string | null) {
  if (!contentLengthHeader) return true;
  const parsed = Number(contentLengthHeader);
  return Number.isFinite(parsed) && parsed > 0 && parsed <= MAX_CONTENT_LENGTH;
}

export function allowRateLimit(key: string) {
  const now = Date.now();
  const record = requestTracker.get(key);
  if (!record || record.expiresAt < now) {
    requestTracker.set(key, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) return false;
  record.count += 1;
  return true;
}

export function isAllowedOrigin(origin: string | null, host: string | null) {
  if (!origin || !host) return false;

  try {
    const originUrl = new URL(origin);
    return originUrl.host === host;
  } catch {
    return false;
  }
}
