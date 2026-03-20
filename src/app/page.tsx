import Link from 'next/link';
import { Section } from '@/components/sections/section';
import { ButtonLink } from '@/components/ui/button-link';
import { faqs } from '@/content/faqs';
import { services } from '@/content/services';
import { siteConfig } from '@/content/site';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(51,120,255,0.22),_transparent_50%)]" />
        <div className="container-shell relative">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-200">{siteConfig.category}</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Decision-ready AI and technology pathways for ambitious businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={siteConfig.primaryCta.href}>{siteConfig.primaryCta.label}</ButtonLink>
            <ButtonLink href={siteConfig.secondaryCta.href} variant="secondary">
              {siteConfig.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section title="Services built for business outcomes" subtitle="From partner selection to operational strategy, each engagement is tailored to practical growth.">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="surface rounded-2xl p-6 shadow-soft">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{service.summary}</p>
              <Link href={`/services/${service.slug}`} className="mt-4 inline-block text-sm font-medium text-brand-200 hover:text-brand-100">
                View details →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Why ElevareAI" subtitle="A clarity-first advisory model designed to reduce noise and increase decision confidence.">
        <div className="grid gap-4 md:grid-cols-3">
          {['Goal-aligned recommendations', 'Vetted provider connections', 'Practical, business-focused guidance'].map((item) => (
            <div key={item} className="surface rounded-2xl p-6">
              <p className="font-medium text-white">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How it works" subtitle="A lightweight process designed for speed and executive clarity.">
        <ol className="grid gap-4 md:grid-cols-3">
          {['Discovery call and goals alignment', 'Vendor/solution fit and recommendation path', 'Implementation partner handoff and support rhythm'].map((step, idx) => (
            <li key={step} className="surface rounded-2xl p-6">
              <p className="text-sm text-brand-200">Step {idx + 1}</p>
              <p className="mt-2 text-white">{step}</p>
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

      <Section title="Ready to evaluate your next move with confidence?" subtitle="Tell us what you are solving for, and we’ll map a practical next step.">
        <ButtonLink href="/contact">Start the Conversation</ButtonLink>
      </Section>
    </>
  );
}
