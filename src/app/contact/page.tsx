import { pageMetadata } from '@/lib/metadata';
import { Section } from '@/components/sections/section';
import { ContactForm } from '@/components/sections/contact-form';
import { siteConfig } from '@/content/site';

export const metadata = pageMetadata('Contact', 'Contact ElevareAI to discuss AI, SaaS, automation, or technology decision advisory.', '/contact');

export default function ContactPage() {
  return (
    <Section title="Contact ElevareAI" subtitle="Describe your current decision context and priorities. You will receive a direct response from the ElevareAI team.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
        <aside className="surface rounded-2xl p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-brand-200">Direct contact</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-3 block text-slate-200 hover:text-white">
            {siteConfig.email}
          </a>
          <a href="tel:+855011389625" className="mt-2 block text-slate-200 hover:text-white">
            {siteConfig.phone}
          </a>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-sm font-semibold text-white">What to include in your message</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>The business decision you are trying to make</li>
              <li>Your timeline and key constraints</li>
              <li>Stakeholders involved in the decision</li>
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">Privacy note</p>
            <p className="mt-2 text-xs text-slate-300">
              Enquiries are handled for fit assessment and response only. Please avoid sharing credentials, payment data, or confidential regulated information in the initial form.
            </p>
          </div>
        </aside>

        <ContactForm />
      </div>
    </Section>
  );
}
