import { siteConfig } from '@/content/site';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.companyName,
  url: siteConfig.domain,
  sameAs: [siteConfig.linkedInUrl],
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: 'KH'
    }
  ]
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.companyName,
  url: siteConfig.domain,
  description: siteConfig.description,
  inLanguage: 'en',
  potentialAction: {
    '@type': 'ContactAction',
    target: `${siteConfig.domain}/contact`
  }
};
