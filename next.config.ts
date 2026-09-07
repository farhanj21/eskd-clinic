import type { NextConfig } from 'next'
import { suburbs, suburbPath } from './data/suburbs'

// Vercel sets VERCEL_ENV automatically:
//   "production"  → main production deployment
//   "preview"     → all staging / preview deployments
//   "development" → local dev (next dev)
// This repeats lib/env.ts's expression inline, because the Next config is
// loaded before the "@/" path alias exists and so cannot import that file.
// The two must stay in step — including the NEXT_PUBLIC_SITE_ENV fallback,
// without which a non-Vercel production host would noindex itself.
const isProduction =
  process.env.VERCEL_ENV === 'production' ||
  process.env.NEXT_PUBLIC_SITE_ENV === 'production'

const nextConfig: NextConfig = {
  images: {
    // AVIF first (smaller), WebP fallback; browsers get the best format they support
    formats: ['image/avif', 'image/webp'],
  },
  /**
   * The suburb landing pages used to live at two URLs: /areas/<slug> (generated
   * from data/suburbs.ts) and /dentist-<slug> (hand-written). That was duplicate
   * content competing for the same searches. /dentist-<slug> is now the only
   * one, so the old /areas/<slug> URLs redirect permanently rather than 404.
   */
  async redirects() {
    return [
      ...suburbs.map((s) => ({
        source: `/areas/${s.slug}`,
        destination: suburbPath(s.slug),
        permanent: true,
      })),
      /**
       * The booking page moved from /book to /online-booking. /book was the
       * live URL, so it is linked from outside the site and indexed; this
       * keeps those hits landing on the page rather than a 404.
       */
      {
        source: '/book',
        destination: '/online-booking',
        permanent: true,
      },
      /**
       * /services/check-up-clean was a legacy duplicate of /services/check-ups
       * and /services/cleans-and-hygiene — the same treatment on a third URL,
       * competing with both and linked from nowhere on the site. The page is
       * gone from data/services.ts; this keeps any existing inbound link or
       * indexed result landing on the page that replaced it.
       */
      {
        source: '/services/check-up-clean',
        destination: '/services/check-ups',
        permanent: true,
      },
      /**
       * The first-visit page moved from /comprehensive-care-visit to
       * /new-patient-comprehensive-care-visit when the offer was renamed, so
       * the URL says who the visit is for. The old path was live, linked from
       * the header and the utility bar, and indexed; this keeps those hits and
       * any outside link landing on the page rather than a 404.
       */
      {
        source: '/comprehensive-care-visit',
        destination: '/new-patient-comprehensive-care-visit',
        permanent: true,
      },
    ]
  },
  /**
   * The belt to robots.txt's braces. A disallow only asks a crawler not to
   * fetch; a URL it never fetched can still be indexed from an inbound link.
   * X-Robots-Tag travels with the response itself, so a staging URL that is
   * fetched anyway still carries noindex.
   */
  async headers() {
    if (isProduction) return []

    return [
      {
        // Noindex every route on staging / preview deployments
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ]
  },
}

export default nextConfig
