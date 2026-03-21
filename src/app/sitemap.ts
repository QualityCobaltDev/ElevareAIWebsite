import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { siteConfig } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/services', '/trust-security', '/contact', '/privacy', '/terms'];
  const servicePages = services.map((service) => `/services/${service.slug}`);

  return [...pages, ...servicePages].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date('2026-03-21'),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.7
  }));
}
