'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navItems, siteConfig } from '@/content/site';
import { ButtonLink } from '@/components/ui/button-link';

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="container-shell flex h-[72px] items-center justify-between gap-6 py-3">
        <Link href="/" className="group" aria-label={`${siteConfig.companyName} home`}>
          <p className="text-lg font-semibold tracking-tight text-white transition group-hover:text-brand-100">{siteConfig.companyName}</p>
          <p className="text-xs text-slate-400">{siteConfig.tagline}</p>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="py-2">
            Let&apos;s Talk
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="rounded-lg border border-white/20 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div id="mobile-nav" className={`${open ? 'block' : 'hidden'} border-t border-white/10 bg-slate-950 md:hidden`}>
        <nav className="container-shell flex flex-col gap-2 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-slate-100 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="mt-1 w-full" onClick={() => setOpen(false)}>
            Book a Consultation
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
