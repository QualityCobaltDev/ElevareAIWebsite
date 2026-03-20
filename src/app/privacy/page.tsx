import { pageMetadata } from '@/lib/metadata';
import { Section } from '@/components/sections/section';

export const metadata = pageMetadata('Privacy Policy', 'Privacy policy placeholder for ElevareAI.', '/privacy');

export default function PrivacyPage() {
  return (
    <Section title="Privacy Policy" subtitle="Replace this placeholder with your final legal policy before production launch.">
      <div className="surface rounded-xl p-6 text-slate-300">This page is intentionally editable and should be reviewed by legal counsel.</div>
    </Section>
  );
}
