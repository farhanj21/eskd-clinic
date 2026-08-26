import { articles, getPublishedArticle, type ArticleData } from './articles'
import { guidesByTopic, topics } from './topics'
import { services } from './services'

export interface ServiceEducation {
  /**
   * Guide slugs from data/articles.ts that speak directly to this service,
   * most relevant first. A slug that is written but not yet published is
   * simply skipped, so a draft never leaks onto a live page.
   */
  guides: string[]
  /**
   * Topic slugs from data/topics.ts, used to top up the section when this
   * service has fewer hand-picked guides than the grid holds. Ordered by how
   * closely the topic sits to the service, and filtered to published guides,
   * so a service always shows real reading rather than an empty block.
   */
  topics: string[]
}

/**
 * Which Dental Education guides sit above the footer on each service page.
 *
 * Kept as one table rather than a field on each service so the relevance
 * mapping can be read — and audited for coverage — in a single place. Every
 * service slug must appear here; see the guard at the bottom of this file.
 */
export const serviceEducation: Record<string, ServiceEducation> = {
  'check-ups': {
    guides: [
      'how-often-should-you-see-the-dentist',
      'what-to-expect-at-your-first-dental-visit',
      'havent-been-to-the-dentist-in-years',
    ],
    topics: ['prevention', 'nervous-patients'],
  },
  'cleans-and-hygiene': {
    guides: [
      'bleeding-gums',
      'how-often-should-you-see-the-dentist',
      'havent-been-to-the-dentist-in-years',
    ],
    topics: ['prevention'],
  },
  'childrens-dentistry': {
    guides: [
      'what-to-expect-at-your-first-dental-visit',
      'how-often-should-you-see-the-dentist',
    ],
    topics: ['kids', 'prevention'],
  },
  mouthguards: {
    guides: [
      'signs-you-might-be-grinding-your-teeth',
      'dental-implants-vs-bridges-what-you-need-to-know',
    ],
    topics: ['nervous-patients', 'prevention'],
  },
  'tmj-jaw-pain': {
    guides: [
      'signs-you-might-be-grinding-your-teeth',
      'invisalign-vs-braces-which-is-right-for-you',
    ],
    topics: ['nervous-patients'],
  },
  'myofunctional-therapy': {
    guides: [
      'signs-you-might-be-grinding-your-teeth',
      'invisalign-vs-braces-which-is-right-for-you',
    ],
    topics: ['kids', 'nervous-patients'],
  },
  fillings: {
    guides: [
      'how-often-should-you-see-the-dentist',
      'havent-been-to-the-dentist-in-years',
    ],
    topics: ['prevention', 'treatments-explained'],
  },
  'crowns-and-bridges': {
    guides: [
      'dental-implants-vs-bridges-what-you-need-to-know',
      'signs-you-might-be-grinding-your-teeth',
    ],
    topics: ['nervous-patients', 'treatments-explained'],
  },
  'root-canal': {
    guides: [
      'havent-been-to-the-dentist-in-years',
      'dental-implants-vs-bridges-what-you-need-to-know',
      'signs-you-might-be-grinding-your-teeth',
    ],
    topics: ['nervous-patients'],
  },
  'onlays-and-inlays': {
    guides: [
      'signs-you-might-be-grinding-your-teeth',
      'how-often-should-you-see-the-dentist',
    ],
    topics: ['nervous-patients'],
  },
  dentures: {
    guides: [
      'dental-implants-vs-bridges-what-you-need-to-know',
      'using-your-superannuation-for-dental-treatment',
    ],
    topics: ['nervous-patients', 'costs-and-funds'],
  },
  'extractions-wisdom-teeth': {
    guides: [
      'dental-implants-vs-bridges-what-you-need-to-know',
      'havent-been-to-the-dentist-in-years',
      'how-often-should-you-see-the-dentist',
    ],
    topics: ['nervous-patients'],
  },
  'smile-design': {
    guides: [
      'invisalign-vs-braces-which-is-right-for-you',
      'dental-implants-vs-bridges-what-you-need-to-know',
      'using-your-superannuation-for-dental-treatment',
    ],
    topics: ['treatments-explained', 'costs-and-funds'],
  },
  veneers: {
    guides: [
      'signs-you-might-be-grinding-your-teeth',
      'invisalign-vs-braces-which-is-right-for-you',
    ],
    topics: ['costs-and-funds', 'nervous-patients'],
  },
  // Nothing in the library is about whitening yet, so this one leans entirely
  // on its topics until that guide is written.
  'teeth-whitening': {
    guides: [],
    topics: ['prevention', 'nervous-patients'],
  },
  invisalign: {
    guides: [
      'invisalign-vs-braces-which-is-right-for-you',
      'signs-you-might-be-grinding-your-teeth',
    ],
    topics: ['nervous-patients', 'costs-and-funds'],
  },
  braces: {
    guides: [
      'invisalign-vs-braces-which-is-right-for-you',
      'signs-you-might-be-grinding-your-teeth',
    ],
    topics: ['nervous-patients', 'costs-and-funds'],
  },
  'dental-implants': {
    guides: [
      'dental-implants-vs-bridges-what-you-need-to-know',
      'using-your-superannuation-for-dental-treatment',
    ],
    topics: ['nervous-patients', 'costs-and-funds'],
  },
  'all-on-4-implants': {
    guides: [
      'dental-implants-vs-bridges-what-you-need-to-know',
      'using-your-superannuation-for-dental-treatment',
    ],
    topics: ['nervous-patients', 'costs-and-funds'],
  },
  'bone-grafting': {
    guides: [
      'dental-implants-vs-bridges-what-you-need-to-know',
      'using-your-superannuation-for-dental-treatment',
    ],
    topics: ['nervous-patients'],
  },
}

/** How many guides the section shows. Matches the three-column card grid. */
const GUIDE_LIMIT = 3

/**
 * The published guides to show on a service page, hand-picked first and topped
 * up from the service's topics.
 *
 * Only ever returns published guides, so the section can be rendered without
 * the caller checking anything: an unwritten guide simply isn't there.
 */
export function guidesForService(slug: string, limit = GUIDE_LIMIT): ArticleData[] {
  const entry = serviceEducation[slug]
  if (!entry) return []

  const picked: ArticleData[] = []
  const add = (guide: ArticleData | undefined) => {
    if (!guide || picked.length >= limit) return
    if (picked.some(g => g.slug === guide.slug)) return
    picked.push(guide)
  }

  for (const guideSlug of entry.guides) add(getPublishedArticle(guideSlug))
  for (const topicSlug of entry.topics) {
    for (const guide of guidesByTopic(topicSlug)) add(guide)
  }

  return picked
}

/* ── Build-time guards ───────────────────────────────────
 * A silently wrong slug here means a service page quietly loses its education
 * links, which is exactly the kind of thing nobody notices for months. Fail the
 * build instead.
 */
const articleSlugs = new Set(articles.map(a => a.slug))
const topicSlugs = new Set(topics.map(t => t.slug))

const unmapped = services.map(s => s.slug).filter(slug => !serviceEducation[slug])
if (unmapped.length > 0) {
  throw new Error(
    `Service(s) missing a data/service-education.ts entry: ${unmapped.join(', ')}`,
  )
}

const strayServices = Object.keys(serviceEducation).filter(
  slug => !services.some(s => s.slug === slug),
)
if (strayServices.length > 0) {
  throw new Error(
    `data/service-education.ts entries for unknown service(s): ${strayServices.join(', ')}`,
  )
}

for (const [slug, entry] of Object.entries(serviceEducation)) {
  const badGuides = entry.guides.filter(g => !articleSlugs.has(g))
  if (badGuides.length > 0) {
    throw new Error(`Unknown guide slug(s) for service "${slug}": ${badGuides.join(', ')}`)
  }
  const badTopics = entry.topics.filter(t => !topicSlugs.has(t))
  if (badTopics.length > 0) {
    throw new Error(`Unknown topic slug(s) for service "${slug}": ${badTopics.join(', ')}`)
  }
}
