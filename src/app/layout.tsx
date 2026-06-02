import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { META, SITE } from '@/content/content'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  keywords: META.keywords,
  metadataBase: new URL(SITE.canonical),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE.canonical,
    title: META.title,
    description: 'Professional residential and commercial cleaning across the GTA. Flat-rate pricing, 5.0 Google rating, no hidden fees. Book online in minutes.',
    images: [{ url: META.ogImage, width: 1200, height: 630 }],
    siteName: SITE.name,
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: META.title,
    description: 'Professional residential and commercial cleaning across the GTA. Flat-rate pricing, 5.0 Google rating.',
    images: [META.ogImage],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  url: SITE.canonical,
  telephone: '+14376038880',
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 43.6532, longitude: -79.3832 },
  areaServed: [
    'Toronto','North York','Etobicoke','Mississauga',
    'Scarborough','Vaughan','Markham','Brampton','Richmond Hill','Oakville',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE.googleRating,
    reviewCount: SITE.reviewCount,
  },
  priceRange: '$$',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Cash, Credit Card, E-Transfer',
  openingHours: 'Mo-Su 07:00-21:00',
  image: 'https://www.corecleaningservices.ca/logo.png',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.corecleaningservices.ca/logo.png',
    width: 200,
    height: 200,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads tag — raw script so it lands in <head>, not deferred */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17772848067" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-17772848067');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
