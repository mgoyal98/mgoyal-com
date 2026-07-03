import type { MetadataRoute } from 'next';
import { siteMetadata } from '@/data/siteMetadata';

// Bump only when the page meaningfully changes — Google down-weights
// sitemaps where every URL looks edited on every deploy.
const LAST_MODIFIED = '2026-07-03';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMetadata.url,
      lastModified: new Date(LAST_MODIFIED),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
