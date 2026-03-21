import { pageMetadata } from '@/lib/metadata';
import { Section } from '@/components/sections/section';

export const metadata = pageMetadata('About', 'Learn how ElevareAI approaches AI, SaaS, automation, and business technology advisory.', '/about');

const principles = [
  'Business context before tooling recommendations',
  'Decision quality over trend adoption',
  'Operational practicality over abstract strategy',
  'Clear scope and transparent limitations'
];

const whatIs = [
  'An advisory partner focused on technology decision support',
  'A structured guide for evaluating AI, SaaS, and automation options',
  'A commercially oriented perspective for leadership teams'
];

const whatIsNot = [
  'Not a website that presents fake case studies or unsupported claims',
  'Not a substitute for legal, regulatory, or tax counsel',
  'Not positioned here as a custom software engineering delivery firm'
];

export default function AboutPage() {
  return (
    <>
      <Section
        title="About ElevareAI"
        subtitle="ElevareAI supports business leaders making consequential technology decisions across AI, SaaS, automation, and digital operations."
      >
        <div className="surface rounded-2xl p-8">
          <p className="text-slate-200">
            The goal is straightforward: help organizations choose practical pathways with more clarity, less noise, and stronger alignment between strategy and execution.
          </p>
          <p className="mt-4 text-slate-300">
            Engagements are designed to improve decision confidence and operational fit rather than to produce inflated promises.
          </p>
        </div>
      </Section>

      <Section title="Mission and approach" subtitle="A concise operating model designed for serious business decision-making.">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">Mission</h2>
            <p className="mt-3 text-sm text-slate-300">
              Help companies navigate technology change with clear evaluation, grounded recommendations, and decision-ready communication.
            </p>
          </article>
          <article className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">How ElevareAI works with businesses</h2>
            <p className="mt-3 text-sm text-slate-300">
              Through focused discovery, structured option evaluation, and practical recommendation outputs that leadership teams can act on.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Decision philosophy" subtitle="Principles that guide every engagement.">
        <ul className="grid gap-4 md:grid-cols-2">
          {principles.map((p) => (
            <li key={p} className="surface rounded-xl p-5 text-slate-200">
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What ElevareAI is and is not" subtitle="Clear expectations improve fit and outcomes.">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">What it is</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
              {whatIs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="surface rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white">What it is not</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
              {whatIsNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
