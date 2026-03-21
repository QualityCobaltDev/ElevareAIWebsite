import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/content/services';
import { Section } from '@/components/sections/section';
import { ButtonLink } from '@/components/ui/button-link';
import { siteConfig } from '@/content/site';


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return { title: 'Service not found' };
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.companyName}`,
      description: service.summary,
      url: `${siteConfig.domain}/services/${service.slug}`
    },
    twitter: {
      title: `${service.title} | ${siteConfig.companyName}`,
      description: service.summary
    }
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
    <Section title={service.title} subtitle={service.summary}>
      <div className="space-y-6">
        <article className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white">Overview</h2>
          <p className="mt-3 text-slate-300">{service.description}</p>
        </article>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">Business context</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              {service.situations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">Common pain points</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              {service.painPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">Service scope</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">What the engagement looks like</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              {service.engagement.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">Likely deliverables</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">Expected practical outcomes</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">Best fit</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              {service.fit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">May not fit</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              {service.notFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="/contact">Talk with ElevareAI</ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          Back to services
        </ButtonLink>
      </div>
    </Section>
  );
}
