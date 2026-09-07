/**
 * The one flag that separates the production deployment from everything else.
 *
 * Vercel sets VERCEL_ENV automatically:
 *   "production"  → the main production deployment
 *   "preview"     → every staging / preview deployment
 *   "development" → local dev
 * NEXT_PUBLIC_SITE_ENV is honoured too, for any host that is not Vercel.
 *
 * This used to gate everything that decides "should this be indexed?": the
 * per-page robots meta (lib/seo.ts), the robots.txt route (app/robots.ts) and
 * the X-Robots-Tag header in next.config.ts. All three now allow crawling
 * everywhere, so nothing reads this at the moment — it is kept so the
 * staging block can be restored by wiring these three back to it. (The Next
 * config is loaded before the "@/" alias exists and so cannot import this
 * file; it has to repeat the expression inline.)
 */
export const isProduction =
  process.env.VERCEL_ENV === 'production' ||
  process.env.NEXT_PUBLIC_SITE_ENV === 'production'
