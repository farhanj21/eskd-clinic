import { publishedArticles, type ArticleData } from './articles'

export interface Topic {
  /** URL segment: /learn/<slug> */
  slug: string
  /** Visible label on the chip, the H1 and the breadcrumb. */
  label: string
  /** One line, used as the page intro and the meta description. */
  intro: string
}

/**
 * The Learn taxonomy — the five "Browse by topic" labels.
 *
 * A topic only becomes a page once it has at least one published guide. Empty
 * topics are hidden from the chips and kept out of the sitemap rather than
 * being published as an empty page, matching the no-thin-pages rule.
 */
export const topics: Topic[] = [
  {
    slug: 'nervous-patients',
    label: 'Nervous patients',
    intro:
      'Calm, judgement-free guides for anyone who finds the dentist hard, whether it has been years or you have never felt comfortable in the chair.',
  },
  {
    slug: 'prevention',
    label: 'Prevention',
    intro:
      'How to keep small problems small: what your gums and teeth are telling you, and how often to have things checked.',
  },
  {
    slug: 'treatments-explained',
    label: 'Treatments explained',
    intro:
      'Plain-language explanations of common dental treatments, what each one involves and how to weigh up the options.',
  },
  {
    slug: 'kids',
    label: 'Kids',
    intro: 'Gentle guides to looking after children’s teeth and making dental visits easy for them.',
  },
  {
    slug: 'costs-and-funds',
    label: 'Costs & funds',
    intro:
      'Straight answers on what dental care costs, how health funds work, and the ways to pay for larger treatment.',
  },
]

/** Published guides tagged with a topic, in publication order. */
export function guidesByTopic(slug: string): ArticleData[] {
  return publishedArticles.filter(a => a.topics?.includes(slug))
}

/** Topics with at least one published guide. Everything else stays hidden. */
export const populatedTopics: Topic[] = topics.filter(t => guidesByTopic(t.slug).length > 0)

/** A topic only resolves once it has content, so an empty topic URL 404s. */
export function getPopulatedTopic(slug: string): Topic | undefined {
  return populatedTopics.find(t => t.slug === slug)
}

// Topic pages and article pages share the /learn/<slug> namespace, so a topic
// slug must never collide with an article slug — one would silently shadow the
// other. Fail the build rather than ship an unreachable page.
const collisions = topics
  .map(t => t.slug)
  .filter(slug => publishedArticles.some(a => a.slug === slug))
if (collisions.length > 0) {
  throw new Error(
    `Topic slug(s) collide with article slug(s) under /learn: ${collisions.join(', ')}`,
  )
}
