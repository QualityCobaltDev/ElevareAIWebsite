import Link from 'next/link';
import { ReactNode } from 'react';

type Props = { href: string; children: ReactNode; variant?: 'primary' | 'secondary'; className?: string };

export function ButtonLink({ href, children, variant = 'primary', className = '' }: Props) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300';
  const styles =
    variant === 'primary'
      ? 'bg-brand-400 text-white hover:bg-brand-300'
      : 'border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10';

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
