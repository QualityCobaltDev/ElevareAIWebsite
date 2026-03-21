import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { Section } from '@/components/sections/section';
import { ButtonLink } from '@/components/ui/button-link';
import { services } from '@/content/services';

export const metadata = pageMetadata('Services', 'Structured advisory services for AI, SaaS, automation, and technology decision governance.', '/services');

export default function ServicesPage() {
  return (
    <Section title="Services" subtitle="Structured advisory engagements for decision-makers who need practical technology direction.">
      <div className="space-y-8">
        {services.map((service) => (
          <article key={service.slug} className="surface rounded-2xl p-7">
            <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-3 text-slate-300">{service.description}</p>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">What this includes</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Who this is for</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {service.forWho.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Common business situations</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {service.situations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Expected practical outcomes</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                  {service.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact" className="py-2">
                Discuss this service
              </ButtonLink>
              <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm text-brand-200 hover:text-brand-100">
                View detailed scope →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
