import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { siteMetadata } from '@/data/siteMetadata';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.title,
    template: siteMetadata.titleTemplate,
  },
  description: siteMetadata.description,
  applicationName: siteMetadata.siteName,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author, url: siteMetadata.url }],
  creator: siteMetadata.author,
  publisher: siteMetadata.author,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    firstName: siteMetadata.firstName,
    lastName: siteMetadata.lastName,
    username: siteMetadata.username,
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: '/',
    siteName: siteMetadata.siteName,
    locale: siteMetadata.locale,
    images: [
      {
        url: siteMetadata.image,
        width: 1200,
        height: 630,
        alt: siteMetadata.imageAlt,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    site: siteMetadata.twitterHandle,
    creator: siteMetadata.twitterHandle,
    images: [{ url: siteMetadata.image, alt: siteMetadata.imageAlt }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: [{ url: '/favicon.png', type: 'image/png' }],
  },
  ...(googleSiteVerification && {
    verification: { google: googleSiteVerification },
  }),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: siteMetadata.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteMetadata.language}>
      <body className={`${dmSans.variable} antialiased`}>
        {children}

        <JsonLd
          id='ld-json-profile'
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': `${siteMetadata.url}/#person`,
                name: siteMetadata.author,
                url: siteMetadata.url,
                image: {
                  '@type': 'ImageObject',
                  url: `${siteMetadata.url}${siteMetadata.profileImage}`,
                },
                jobTitle: siteMetadata.jobTitle,
                description: siteMetadata.description,
                email: `mailto:${siteMetadata.email}`,
                worksFor: {
                  '@type': 'Organization',
                  name: siteMetadata.employer.name,
                  url: siteMetadata.employer.url,
                },
                alumniOf: {
                  '@type': 'CollegeOrUniversity',
                  name: siteMetadata.alumniOf.name,
                  url: siteMetadata.alumniOf.url,
                },
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: siteMetadata.location.city,
                  addressCountry: siteMetadata.location.country,
                },
                sameAs: Object.values(siteMetadata.social),
                knowsAbout: siteMetadata.knowsAbout,
              },
              {
                '@type': 'WebSite',
                '@id': `${siteMetadata.url}/#website`,
                url: siteMetadata.url,
                name: siteMetadata.siteName,
                description: siteMetadata.description,
                inLanguage: siteMetadata.language,
                publisher: { '@id': `${siteMetadata.url}/#person` },
              },
              {
                '@type': 'ProfilePage',
                '@id': `${siteMetadata.url}/#profilepage`,
                url: siteMetadata.url,
                name: siteMetadata.title,
                isPartOf: { '@id': `${siteMetadata.url}/#website` },
                mainEntity: { '@id': `${siteMetadata.url}/#person` },
                inLanguage: siteMetadata.language,
              },
            ],
          }}
        />

        {googleAnalyticsId?.startsWith('G-') && (
          <GoogleAnalytics gaId={googleAnalyticsId} />
        )}
        <Analytics />
      </body>
    </html>
  );
}
