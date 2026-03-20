import { ReactNode } from 'react';

export function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-shell">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-4 text-balance text-slate-300">{subtitle}</p> : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
