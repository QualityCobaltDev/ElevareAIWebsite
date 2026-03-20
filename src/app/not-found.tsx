import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-shell py-24 text-center">
      <p className="text-sm uppercase tracking-wider text-brand-200">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-3 text-slate-300">The page you requested does not exist or has moved.</p>
      <Link href="/" className="mt-6 inline-flex rounded-full bg-brand-400 px-5 py-3 text-sm font-semibold text-white">
        Back to home
      </Link>
    </section>
  );
}
