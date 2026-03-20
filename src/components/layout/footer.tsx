import Link from 'next/link';
import { navItems, siteConfig, socialLinks } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container-shell grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-semibold text-white">{siteConfig.companyName}</p>
          <p className="mt-3 text-sm text-slate-300">{siteConfig.tagline}</p>
          <p className="mt-3 text-xs text-slate-400">{siteConfig.footerNote}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Connect</p>
          <p className="mt-3 text-sm text-slate-300">{siteConfig.email}</p>
          <p className="text-sm text-slate-300">{siteConfig.phone}</p>
          <div className="mt-3 flex gap-4 text-sm">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-white" target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-shell mt-8 flex flex-wrap gap-4 border-t border-white/10 pt-6 text-xs text-slate-400">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
}
