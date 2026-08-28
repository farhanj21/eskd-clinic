import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/business'
import { services } from '@/data/services'
import { publishedArticles } from '@/data/articles'
import { populatedTopics } from '@/data/topics'
import { suburbs, suburbPath } from '@/data/suburbs'

/**
 * Every indexable route, as an absolute production URL.
 *
 * URLs are always built from SITE_URL, so a preview deployment still lists the
 * production host rather than advertising itself.
 *
 * Deliberately excluded:
 *   /home              — a redirect to /, not a page
 *   /take-care-of-you  — campaign landing page, noindex by design
 *   /robots.txt, /sitemap.xml — not content
 */
const STATIC_PATHS = [
  '/',
  '/about',
  '/about/our-story',
  '/about/our-team',
  '/about/why-were-different',
  '/areas-we-serve',
  '/online-booking',
  '/comprehensive-care-visit',
  '/contact',
  '/emergency-dentist',
  '/fees',
  '/learn',
  '/nervous-patients',
  '/our-work',
  '/privacy',
  '/services',
  '/terms',
  '/using-your-super',
  '/your-first-visit',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...services.map((s) => `/services/${s.slug}`),
    // Published guides only — Google is never invited to crawl a draft.
    ...publishedArticles.map((a) => `/learn/${a.slug}`),
    // Topic pages that actually have guides. An empty topic has no page.
    ...populatedTopics.map((t) => `/learn/${t.slug}`),
    // Suburb landing pages. Adding an entry to data/suburbs.ts (and its stub
    // route) is all it takes for a new suburb page to appear here.
    ...suburbs.map((s) => suburbPath(s.slug)),
  ]

  // No lastModified: we have no real per-page modification date, and stamping
  // every URL with the build time would tell Google the whole site changed on
  // every deploy.
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }))
}
