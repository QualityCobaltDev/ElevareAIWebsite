import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { siteConfig } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/services', '/contact', '/privacy', '/terms'];
  const servicePages = services.map((service) => `/services/${service.slug}`);

  return [...pages, ...servicePages].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7
  }));
}
