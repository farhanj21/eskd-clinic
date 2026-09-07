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
 * The Learn taxonomy — the "Browse by topic" labels.
 *
 * Every category a published guide carries on its card has a chip here, so the
 * row above the library and the labels on the cards below it say the same
 * things. A topic only becomes a page once it has at least one published
 * guide. Empty topics are hidden from the chips and kept out of the sitemap
 * rather than being published as an empty page, matching the no-thin-pages
 * rule.
 */
export const topics: Topic[] = [
  {
    slug: 'nervous-patients',
    label: 'Nervous patients',
    intro:
      'Calm, judgement-free guides for anyone who finds the dentist hard, whether it has been years or you have never felt comfortable in the chair.',
  },
  {
    slug: 'new-patients',
    label: 'New patients',
    intro:
      'What actually happens at a first visit here, what to bring and what it costs, so nothing about your first appointment comes as a surprise.',
  },
  {
    slug: 'prevention',
    label: 'Prevention',
    intro:
      'How to keep small problems small: what your gums and teeth are telling you, and how often to have things checked.',
  },
  {
    slug: 'gum-health',
    label: 'Gum health',
    intro:
      'What healthy gums look like, what bleeding or soreness is telling you, and how gum problems are treated before they start costing you teeth.',
  },
  {
    slug: 'oral-health',
    label: 'Oral health',
    intro:
      'The everyday things your mouth does — grinding, sensitivity, bad breath — what they mean and when they are worth acting on.',
  },
  {
    slug: 'treatments-explained',
    label: 'Treatments explained',
    intro:
      'Plain-language explanations of common dental treatments, what each one involves and how to weigh up the options.',
  },
  {
    slug: 'orthodontics',
    label: 'Orthodontics',
    intro:
      'Straightening explained side by side: clear aligners, braces, what each one involves day to day and who each one suits.',
  },
  {
    slug: 'tooth-replacement',
    label: 'Tooth replacement',
    intro:
      'Your options for replacing a missing tooth — implants, bridges and dentures — and an honest way to weigh them up.',
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
