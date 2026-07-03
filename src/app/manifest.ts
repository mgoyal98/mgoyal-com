import type { MetadataRoute } from 'next';
import { siteMetadata } from '@/data/siteMetadata';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.title,
    short_name: siteMetadata.siteName,
    description: siteMetadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: siteMetadata.themeColor,
    theme_color: siteMetadata.themeColor,
    lang: siteMetadata.language,
    icons: [
      { src: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/favicon.png', sizes: '256x256', type: 'image/png' },
    ],
  };
}
