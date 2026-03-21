import { pageMetadata } from '@/lib/metadata';
import { Section } from '@/components/sections/section';
import { trustFaqs, trustPrinciples } from '@/content/trust';

export const metadata = pageMetadata('Trust & Security', 'How ElevareAI approaches confidentiality, responsible communication, and decision-focused advisory standards.', '/trust-security');

export default function TrustSecurityPage() {
  return (
    <>
      <Section title="Trust & Security" subtitle="How ElevareAI approaches confidentiality, advisory standards, and responsible decision support.">
        <div className="grid gap-4 md:grid-cols-2">
          {trustPrinciples.map((item) => (
            <article key={item.title} className="surface rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Enquiry handling standards" subtitle="Practical safeguards used in the website contact flow.">
        <div className="surface rounded-xl p-6">
          <ul className="list-disc space-y-2 pl-5 text-slate-300">
            <li>Server-side input validation and sanitization.</li>
            <li>Honeypot field and request rate limiting to reduce automated spam.</li>
            <li>Origin checks for form submissions to reduce cross-site abuse.</li>
            <li>SMTP-based delivery using environment variables (no hardcoded credentials).</li>
          </ul>
        </div>
      </Section>

      <Section title="Trust FAQs">
        <div className="space-y-4">
          {trustFaqs.map((faq) => (
            <details key={faq.question} className="surface rounded-xl p-5">
              <summary className="cursor-pointer font-medium text-white">{faq.question}</summary>
              <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
