'use client';

import { FormEvent, useState } from 'react';

type FormState =
  | { status: 'idle'; message: '' }
  | { status: 'loading'; message: '' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

const initialState: FormState = { status: 'idle', message: '' };

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: 'loading', message: '' });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const json = (await res.json()) as { ok: boolean; error?: string };

      if (res.ok && json.ok) {
        setState({ status: 'success', message: 'Thanks. Your enquiry has been sent successfully. ElevareAI will respond shortly.' });
        form.reset();
        return;
      }

      setState({ status: 'error', message: json.error ?? 'Unable to send your enquiry at the moment. Please try again.' });
    } catch {
      setState({ status: 'error', message: 'Network error. Please try again or email contact@elevareai.store directly.' });
    }
  }

  return (
    <form onSubmit={onSubmit} className="surface rounded-2xl p-6 sm:p-8" noValidate>
      <p className="text-sm text-slate-300">
        Share enough context for a productive first conversation. Avoid submitting sensitive credentials or regulated data in this form.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label htmlFor="name" className="text-sm">
          <span className="mb-2 block text-slate-200">Full name *</span>
          <input
            required
            id="name"
            name="name"
            maxLength={100}
            autoComplete="name"
            className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          />
        </label>

        <label htmlFor="email" className="text-sm">
          <span className="mb-2 block text-slate-200">Work email *</span>
          <input
            required
            id="email"
            name="email"
            type="email"
            maxLength={160}
            autoComplete="email"
            className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          />
        </label>

        <label htmlFor="company" className="text-sm">
          <span className="mb-2 block text-slate-200">Company</span>
          <input
            id="company"
            name="company"
            maxLength={120}
            autoComplete="organization"
            className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          />
        </label>

        <label htmlFor="role" className="text-sm">
          <span className="mb-2 block text-slate-200">Role / title</span>
          <input
            id="role"
            name="role"
            maxLength={120}
            autoComplete="organization-title"
            className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          />
        </label>

        <label htmlFor="topic" className="text-sm sm:col-span-2">
          <span className="mb-2 block text-slate-200">Primary topic *</span>
          <select
            id="topic"
            name="topic"
            required
            className="w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="ai-readiness">AI readiness and prioritization</option>
            <option value="saas-selection">SaaS selection and vendor evaluation</option>
            <option value="automation-design">Automation and digital operations design</option>
            <option value="decision-governance">Technology decision governance</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label htmlFor="message" className="text-sm sm:col-span-2">
          <span className="mb-2 block text-slate-200">What do you need help with? *</span>
          <textarea
            required
            id="message"
            name="message"
            rows={6}
            minLength={30}
            maxLength={2200}
            className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          />
        </label>

        <label htmlFor="timeline" className="text-sm sm:col-span-2">
          <span className="mb-2 block text-slate-200">Preferred timeline</span>
          <input
            id="timeline"
            name="timeline"
            maxLength={120}
            placeholder="e.g., this quarter, next month"
            className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          />
        </label>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <button
        type="submit"
        disabled={state.status === 'loading'}
        className="mt-6 inline-flex rounded-full bg-brand-400 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-300 disabled:opacity-70"
      >
        {state.status === 'loading' ? 'Sending...' : 'Submit enquiry'}
      </button>

      <p className="mt-3 text-xs text-slate-400">By submitting this form, you agree to be contacted about your enquiry. No marketing list is implied.</p>

      {state.message ? (
        <p className={`mt-4 text-sm ${state.status === 'success' ? 'text-emerald-300' : 'text-rose-300'}`} role="status" aria-live="polite">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
