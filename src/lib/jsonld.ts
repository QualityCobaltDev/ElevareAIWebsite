import { siteConfig } from '@/content/site';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.companyName,
  url: siteConfig.domain,
  sameAs: [siteConfig.linkedInUrl],
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Winnipeg',
    addressRegion: 'MB',
    addressCountry: 'CA'
  }
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.companyName,
  url: siteConfig.domain,
  description: siteConfig.description,
  inLanguage: 'en'
};
