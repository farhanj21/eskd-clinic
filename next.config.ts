import type { NextConfig } from 'next'
import { suburbs, suburbPath } from './data/suburbs'

// Vercel sets VERCEL_ENV automatically:
//   "production"  → main production deployment
//   "preview"     → all staging / preview deployments
//   "development" → local dev (next dev)
// No manual env variable needed — noindex applies everywhere except production.
const isProduction = process.env.VERCEL_ENV === 'production'

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
    ]
  },
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
