import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import ScrollEffects from '@/components/ScrollEffects'
import UtilityBar from '@/components/UtilityBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE_URL, business } from '@/lib/business'
import { SHARE_IMAGE } from '@/lib/seo'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const SITE_TITLE = 'East St Kilda Dental | gentle family and emergency dentist'
const SITE_DESCRIPTION =
  'Gentle, judgement-free dentist in East St Kilda, caring for local families since 1980. Comprehensive check-ups, nervous-patient care, kids and emergencies.'
const SOCIAL_DESCRIPTION = 'Gentle, judgement-free dentist in East St Kilda since 1980.'

// Site-wide defaults. Every page overrides the title, description, canonical
// and share-card text via withSocial() in lib/seo.ts — these are the fallback
// for anything that does not.
//
// metadataBase must be the production domain, even on staging, so the relative
// og:image path resolves to the absolute URL that Open Graph requires.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | East St Kilda Dental',
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  icons: {
    icon: '/assets/favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: business.name,
    locale: 'en_AU',
    url: '/',
    title: SITE_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [SHARE_IMAGE.url],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${hanken.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MQ9RNSZP');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preload" as="image" href="/assets/Hero Eddy  white.webp" fetchPriority="high" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQ9RNSZP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ScrollEffects />
        <UtilityBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
