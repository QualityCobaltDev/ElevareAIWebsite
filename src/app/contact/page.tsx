import { pageMetadata } from '@/lib/metadata';
import { Section } from '@/components/sections/section';
import { ContactForm } from '@/components/sections/contact-form';
import { siteConfig } from '@/content/site';

export const metadata = pageMetadata('Contact', 'Start a conversation with ElevareAI.', '/contact');

export default function ContactPage() {
  return (
    <Section title="Contact ElevareAI" subtitle="Share your current priorities and we’ll respond with a clear next-step conversation.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <aside className="surface rounded-2xl p-6">
          <p className="text-sm uppercase tracking-wide text-brand-200">Direct contact</p>
          <p className="mt-3 text-slate-300">Email: {siteConfig.email}</p>
          <p className="text-slate-300">Phone: {siteConfig.phone}</p>
          <p className="mt-3 text-slate-400">Location: {siteConfig.location}</p>
        </aside>
        <ContactForm />
      </div>
    </Section>
  );
}
