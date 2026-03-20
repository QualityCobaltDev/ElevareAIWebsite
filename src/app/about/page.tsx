import { pageMetadata } from '@/lib/metadata';
import { Section } from '@/components/sections/section';
import { siteConfig } from '@/content/site';

export const metadata = pageMetadata('About', 'Learn about ElevareAI, its mission, and operating approach.', '/about');

export default function AboutPage() {
  return (
    <>
      <Section title="About ElevareAI" subtitle="ElevareAI is positioned in business consulting and services, focused on helping businesses make clearer AI and technology decisions.">
        <div className="surface rounded-2xl p-8">
          <p className="text-slate-200">{siteConfig.mission}</p>
          <p className="mt-4 text-slate-300">Headquarters: {siteConfig.location}</p>
        </div>
      </Section>
      <Section title="Operating philosophy" subtitle="Simple principles that guide each recommendation.">
        <ul className="grid gap-4 md:grid-cols-2">
          {['Clarity over complexity', 'Fit over hype', 'Execution over theory', 'Long-term business value over short-term noise'].map((p) => (
            <li key={p} className="surface rounded-xl p-5 text-slate-200">
              {p}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Editable founder/company details" subtitle="Add verified leadership narrative, team details, and milestones in src/content/site.ts before final launch.">
        <div className="surface rounded-xl p-6 text-slate-300">Placeholder block intentionally included for owner-managed updates.</div>
      </Section>
    </>
  );
}
