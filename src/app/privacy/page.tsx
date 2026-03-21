import { pageMetadata } from '@/lib/metadata';
import { Section } from '@/components/sections/section';

export const metadata = pageMetadata('Privacy', 'Privacy information for enquiries submitted to ElevareAI.', '/privacy');

export default function PrivacyPage() {
  return (
    <Section title="Privacy" subtitle="This page provides a plain-language operational privacy summary and should be reviewed for legal adequacy before final approval.">
      <div className="surface space-y-4 rounded-xl p-6 text-sm text-slate-300">
        <p>
          ElevareAI currently collects contact details and enquiry information that visitors submit through the website contact form. This information is used to review, respond to,
          and manage business enquiries.
        </p>
        <p>
          Form submissions are delivered by email using configured SMTP credentials. Please do not include passwords, payment details, or highly sensitive regulated information in the
          initial message.
        </p>
        <p>
          Operational logs may be used for security purposes such as abuse prevention and troubleshooting. This page is not represented as legal advice and should be finalized with
          appropriate legal review.
        </p>
      </div>
    </Section>
  );
}
