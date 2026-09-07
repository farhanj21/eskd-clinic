import type { NextConfig } from 'next'
import { suburbs, suburbPath } from './data/suburbs'

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
    ]
  },
  /**
   * TEMPORARY: no X-Robots-Tag is sent anywhere. Staging and preview
   * deployments used to return `noindex, nofollow` on every route (gated on
   * `process.env.VERCEL_ENV === 'production'`); restore that header block when
   * those deployments should be hidden from crawlers again.
   */
  async headers() {
    return []
  },
}

export default nextConfig
