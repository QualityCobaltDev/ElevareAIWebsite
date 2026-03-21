import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

const defaultTitle = `${siteConfig.companyName} | AI, SaaS & Automation Advisory`;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.companyName}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.companyName,
  alternates: { canonical: '/' },
  keywords: ['AI advisory', 'SaaS selection', 'automation strategy', 'technology decision support', 'business technology consulting'],
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.companyName,
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
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
