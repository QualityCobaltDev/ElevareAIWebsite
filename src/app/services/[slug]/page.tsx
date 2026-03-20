import { notFound } from 'next/navigation';
import { services } from '@/content/services';
import { Section } from '@/components/sections/section';
import { ButtonLink } from '@/components/ui/button-link';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
    <Section title={service.title} subtitle={service.summary}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white">Business outcomes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            {service.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="surface rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white">Example use cases</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            {service.useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <ButtonLink href="/contact">Talk with ElevareAI</ButtonLink>
      </div>
    </Section>
  );
}
