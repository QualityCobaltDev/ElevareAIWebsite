'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navItems, siteConfig } from '@/content/site';
import { ButtonLink } from '@/components/ui/button-link';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-white">
          {siteConfig.companyName}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="py-2">
            Let&apos;s Talk
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="md:hidden rounded border border-white/20 px-3 py-1 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="container-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded px-3 py-2 text-slate-200 hover:bg-white/10" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
