import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { Section } from '@/components/sections/section';
import { ButtonLink } from '@/components/ui/button-link';
import { services } from '@/content/services';

export const metadata = pageMetadata('Services', 'Explore ElevareAI services and business-focused outcomes.', '/services');

export default function ServicesPage() {
  return (
    <Section title="Services" subtitle="Structured offerings that help businesses source the right AI and digital partners.">
      <div className="space-y-6">
        {services.map((service) => (
          <article key={service.slug} className="surface rounded-2xl p-7">
            <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-2 text-slate-300">{service.summary}</p>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Business outcomes</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {service.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Use cases</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {service.useCases.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <ButtonLink href="/contact" className="py-2">Discuss this service</ButtonLink>
              <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm text-brand-200 hover:text-brand-100">
                Service detail →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
