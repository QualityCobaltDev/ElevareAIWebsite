'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('loading');
    setMessage('');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      setState('success');
      setMessage('Thank you. Your message has been received.');
      event.currentTarget.reset();
    } else {
      setState('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="surface rounded-2xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm">
          <span className="mb-2 block text-slate-200">Full name</span>
          <input required name="name" className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2" />
        </label>
        <label className="text-sm">
          <span className="mb-2 block text-slate-200">Work email</span>
          <input required name="email" type="email" className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2" />
        </label>
        <label className="text-sm sm:col-span-2">
          <span className="mb-2 block text-slate-200">Company</span>
          <input name="company" className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2" />
        </label>
        <label className="text-sm sm:col-span-2">
          <span className="mb-2 block text-slate-200">How can we help?</span>
          <textarea required name="message" rows={5} className="w-full rounded-lg border border-white/20 bg-transparent px-3 py-2" />
        </label>
      </div>
      <button
        type="submit"
        disabled={state === 'loading'}
        className="mt-6 inline-flex rounded-full bg-brand-400 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-300 disabled:opacity-70"
      >
        {state === 'loading' ? 'Sending...' : 'Submit inquiry'}
      </button>
      {message ? <p className="mt-3 text-sm text-slate-300">{message}</p> : null}
    </form>
  );
}
