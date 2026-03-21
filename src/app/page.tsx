import Link from 'next/link';
import { Section } from '@/components/sections/section';
import { ButtonLink } from '@/components/ui/button-link';
import { faqs } from '@/content/faqs';
import { services } from '@/content/services';
import { siteConfig } from '@/content/site';
import { trustPrinciples } from '@/content/trust';

const audience = [
  'Owners making strategic technology investment decisions',
  'Executives aligning AI and SaaS initiatives to business outcomes',
  'Operations leaders improving process quality and execution consistency',
  'Teams needing independent structure before selecting vendors'
];

const helpAreas = [
  'AI opportunity assessment and prioritization',
  'SaaS selection frameworks and vendor tradeoff analysis',
  'Automation pathway design for operational workflows',
  'Decision governance standards for repeatable technology choices'
];

const process = [
  {
    title: '1) Frame the decision clearly',
    text: 'Define business objectives, constraints, stakeholders, and timelines to ensure the right problem is being solved.'
  },
  {
    title: '2) Evaluate options with structure',
    text: 'Review pathways and alternatives using practical criteria aligned with operational reality and business priorities.'
  },
  {
    title: '3) Move forward with confidence',
    text: 'Deliver a concise recommendation direction so leadership can decide and act with fewer assumptions.'
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_5%_0%,rgba(51,120,255,0.28),transparent_45%),radial-gradient(circle_at_95%_30%,rgba(88,28,135,0.28),transparent_42%)]" />
        <div className="container-shell relative">
          <p className="text-sm uppercase tracking-[0.18em] text-brand-200">{siteConfig.heroLabel}</p>
          <h1 className="mt-4 max-w-5xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Make AI, SaaS, and automation decisions with sharper business clarity.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            ElevareAI works with decision-makers who need commercially sound technology direction without inflated claims or vendor noise.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={siteConfig.primaryCta.href}>{siteConfig.primaryCta.label}</ButtonLink>
            <ButtonLink href={siteConfig.secondaryCta.href} variant="secondary">
              {siteConfig.secondaryCta.label}
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['Business-first advisory', 'Vendor-aware evaluation', 'Operational practicality', 'Clear next-step recommendations'].map((item) => (
              <p key={item} className="surface rounded-xl px-4 py-3 text-sm text-slate-200">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Section title="Who this is for" subtitle="ElevareAI is built for leaders responsible for technology decisions that impact growth, execution, and risk.">
        <div className="grid gap-4 md:grid-cols-2">
          {audience.map((item) => (
            <div key={item} className="surface rounded-2xl p-6 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="What ElevareAI helps with" subtitle="Focused advisory support across the most common technology decision categories.">
        <div className="grid gap-4 md:grid-cols-2">
          {helpAreas.map((item) => (
            <div key={item} className="surface rounded-2xl p-6 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Service areas" subtitle="Each service is structured for practical outcomes, transparent scope, and decision-ready deliverables.">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="surface rounded-2xl p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{service.summary}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-brand-200">Includes</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                {service.includes.slice(0, 2).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className="mt-5 inline-block text-sm font-medium text-brand-200 hover:text-brand-100">
                View service detail →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Trust and decision standards" subtitle="Credibility is built through transparent process, realistic language, and responsible handling of enquiries.">
        <div className="grid gap-4 md:grid-cols-2">
          {trustPrinciples.map((item) => (
            <article key={item.title} className="surface rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/trust-security" variant="secondary">
            Review trust & security approach
          </ButtonLink>
        </div>
      </Section>

      <Section title="How engagements work" subtitle="A structured process that keeps decision quality high and timelines realistic.">
        <ol className="grid gap-4 md:grid-cols-3">
          {process.map((step) => (
            <li key={step.title} className="surface rounded-2xl p-6">
              <p className="text-sm font-semibold text-brand-200">{step.title}</p>
              <p className="mt-2 text-slate-200">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Frequently asked questions">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="surface rounded-xl p-5">
              <summary className="cursor-pointer font-medium text-white">{faq.question}</summary>
              <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section title="Need to make a high-impact technology decision?" subtitle="Share your business context and get a direct response from ElevareAI.">
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/contact">Start the conversation</ButtonLink>
          <ButtonLink href="mailto:contact@elevareai.store" variant="secondary">
            Email contact@elevareai.store
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
