import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.companyName} | AI & Business Technology Advisory`,
    template: `%s | ${siteConfig.companyName}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.companyName,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${siteConfig.companyName} | AI & Business Technology Advisory`,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.companyName,
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.companyName} | AI & Business Technology Advisory`,
    description: siteConfig.description
  }
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${siteConfig.companyName}`, description, url: `${siteConfig.domain}${path}` },
    twitter: { title: `${title} | ${siteConfig.companyName}`, description }
  };
}
