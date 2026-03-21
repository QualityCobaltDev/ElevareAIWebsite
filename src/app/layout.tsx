import type { Metadata } from 'next';
import './globals.css';
import { baseMetadata } from '@/lib/metadata';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { organizationJsonLd, websiteJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </body>
    </html>
  );
}
