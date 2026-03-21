import { pageMetadata } from '@/lib/metadata';
import { Section } from '@/components/sections/section';

export const metadata = pageMetadata('Terms', 'Website terms for ElevareAI.', '/terms');

export default function TermsPage() {
  return (
    <Section title="Terms of Use" subtitle="These terms are a practical draft for operations and should be reviewed before formal legal adoption.">
      <div className="surface space-y-4 rounded-xl p-6 text-sm text-slate-300">
        <p>
          The content on this website is provided for general business information about ElevareAI services and approach. It is not legal, financial, or regulatory advice.
        </p>
        <p>
          By using the website and contact form, you agree not to submit unlawful content, malicious payloads, or confidential data that you are not authorized to share.
        </p>
        <p>
          ElevareAI may update website content, service descriptions, and operating information as the business evolves. Formal client work is governed by specific engagement terms,
          not this public website alone.
        </p>
      </div>
    </Section>
  );
}
