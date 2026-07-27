import type { NextConfig } from 'next'

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
