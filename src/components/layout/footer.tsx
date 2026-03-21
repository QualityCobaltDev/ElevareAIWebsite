import Link from 'next/link';
import { navItems, siteConfig, socialLinks } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-14">
      <div className="container-shell grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xl font-semibold text-white">{siteConfig.companyName}</p>
          <p className="mt-3 max-w-xl text-sm text-slate-300">{siteConfig.description}</p>
          <p className="mt-4 max-w-xl text-xs leading-relaxed text-slate-400">{siteConfig.footerNote}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Contact</p>
          <a href={`mailto:${siteConfig.email}`} className="mt-3 block text-sm text-slate-300 hover:text-white">
            {siteConfig.email}
          </a>
          <a href="tel:+855011389625" className="text-sm text-slate-300 hover:text-white">
            {siteConfig.phone}
          </a>
          <div className="mt-4 flex gap-4 text-sm">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-white" target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-shell mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
        <p>{siteConfig.legalNotice}</p>
      </div>
    </footer>
  );
}
