import { pageMetadata } from '@/lib/metadata';
import { Section } from '@/components/sections/section';

export const metadata = pageMetadata('Terms', 'Terms placeholder for ElevareAI.', '/terms');

export default function TermsPage() {
  return (
    <Section title="Terms of Service" subtitle="Replace this placeholder with your final terms before production launch.">
      <div className="surface rounded-xl p-6 text-slate-300">This page is intentionally editable and should be reviewed by legal counsel.</div>
    </Section>
  );
}
