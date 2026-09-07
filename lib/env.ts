/**
 * The one flag that separates the production deployment from everything else.
 *
 * Vercel sets VERCEL_ENV automatically:
 *   "production"  → the main production deployment
 *   "preview"     → every staging / preview deployment
 *   "development" → local dev
 * NEXT_PUBLIC_SITE_ENV is honoured too, for any host that is not Vercel.
 *
 * Everything that decides "should this be indexed?" reads this: the per-page
 * robots meta (lib/seo.ts) and the robots.txt route (app/robots.ts). The
 * X-Robots-Tag response header in next.config.ts repeats the same expression
 * inline, because the Next config is loaded before the "@/" path alias exists
 * and so cannot import this file — keep the two in step if you change either.
 */
export const isProduction =
  process.env.VERCEL_ENV === 'production' ||
  process.env.NEXT_PUBLIC_SITE_ENV === 'production'

/**
 * Which deployment this is, as a plain string: "production", "preview" or
 * "development".
 *
 * Analytics is the one consumer. GTM loads on every environment so a tag can
 * be tested on a preview before it goes live, and every dataLayer push carries
 * this value — so the container can hold a single "site_env equals production"
 * exception and keep staging traffic out of GA4 without a code change.
 */
export const siteEnv: 'production' | 'preview' | 'development' = isProduction
  ? 'production'
  : process.env.VERCEL_ENV === 'preview' || process.env.NEXT_PUBLIC_SITE_ENV === 'preview'
    ? 'preview'
    : 'development'
