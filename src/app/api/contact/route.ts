import { NextRequest, NextResponse } from 'next/server';
import { allowRateLimit, isAllowedOrigin, isAllowedPayloadSize, validateContactPayload } from '@/lib/contact';
import { sendSmtpMail } from '@/lib/smtp';

const smtpPort = Number(process.env.SMTP_PORT ?? '587');
const smtpSecure = (process.env.SMTP_SECURE ?? 'false').toLowerCase() === 'true';

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() ?? 'unknown';
  return 'unknown';
}

function escapeHtml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

export async function POST(request: NextRequest) {
  try {
    const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
    const origin = request.headers.get('origin');
    if (!isAllowedOrigin(origin, host)) {
      return NextResponse.json({ ok: false, error: 'Request origin not allowed.' }, { status: 403 });
    }

    if (!isAllowedPayloadSize(request.headers.get('content-length'))) {
      return NextResponse.json({ ok: false, error: 'Payload too large.' }, { status: 413 });
    }

    const ip = getClientIp(request);
    if (!allowRateLimit(ip)) {
      return NextResponse.json({ ok: false, error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const parsed = validateContactPayload(await request.json());
    if (!parsed.ok) {
      return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
    }

    if (parsed.payload.website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      throw new Error('SMTP configuration is incomplete.');
    }

    const to = process.env.CONTACT_TO_EMAIL ?? 'contact@elevareai.store';
    const from = process.env.CONTACT_FROM_EMAIL ?? 'contact@elevareai.store';
    const replyTo = process.env.CONTACT_REPLY_TO || parsed.payload.email;

    const html = `
      <h2>New enquiry from elevareai.store</h2>
      <p><strong>Name:</strong> ${escapeHtml(parsed.payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(parsed.payload.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(parsed.payload.company || 'Not provided')}</p>
      <p><strong>Role:</strong> ${escapeHtml(parsed.payload.role || 'Not provided')}</p>
      <p><strong>Topic:</strong> ${escapeHtml(parsed.payload.topic)}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(parsed.payload.timeline || 'Not provided')}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; font-family: sans-serif;">${escapeHtml(parsed.payload.message)}</pre>
    `;

    const text = [
      'New enquiry from elevareai.store',
      `Name: ${parsed.payload.name}`,
      `Email: ${parsed.payload.email}`,
      `Company: ${parsed.payload.company || 'Not provided'}`,
      `Role: ${parsed.payload.role || 'Not provided'}`,
      `Topic: ${parsed.payload.topic}`,
      `Timeline: ${parsed.payload.timeline || 'Not provided'}`,
      '',
      'Message:',
      parsed.payload.message
    ].join('\n');

    await sendSmtpMail(
      {
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        user: smtpUser,
        pass: smtpPass
      },
      {
        from,
        to,
        replyTo,
        subject: `New ElevareAI enquiry: ${parsed.payload.topic}`,
        text,
        html
      }
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact-form-error]', {
      message: error instanceof Error ? error.message : 'Unknown error'
    });
    return NextResponse.json({ ok: false, error: 'Unable to send your enquiry right now. Please email contact@elevareai.store.' }, { status: 500 });
  }
}
