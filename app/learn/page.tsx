import type { Metadata } from 'next'
import Link from 'next/link'
import Photo from '@/components/Photo'
import JsonLd from '@/components/JsonLd'
import Breadcrumb, { learnHubTrail } from '@/components/Breadcrumb'
import GuideGrid from '@/components/GuideGrid'
import TopicChips from '@/components/TopicChips'
import { withSocial } from '@/lib/seo'
import { SCHEMA_ID, SITE_URL, business, telHref } from '@/lib/business'
import { publishedArticles } from '@/data/articles'

export const metadata: Metadata = withSocial({
  title: 'Dental Education | East St Kilda Dental',
  description:
    'Clear, calm answers to your dental questions. Honest, easy-to-read guides with no jargon, no scare tactics, no selling — from the team at East St Kilda Dental.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/learn' },
})

const LEARN_URL = `${SITE_URL}/learn`

/**
 * The guides that are actually live.
 *
 * This is `data/articles.ts` filtered to published — the same source that
 * generates the article routes and the sitemap. The grid, the ItemList and the
 * routes therefore cannot disagree: write a guide, mark it published, and it
 * appears in all three at once with no separate edit.
 */
const publishedGuides = publishedArticles

/**
 * Topics we intend to write, shown as one quiet non-linked line.
 *
 * These are not pages and must never be rendered as cards or links — an empty
 * promise dressed up as content reads as an unfinished site to a crawler, and a
 * placeholder route would be a thin page or a soft 404. Move a title out of
 * here and into data/articles.ts when the guide is actually written.
 */
const upcomingTopics = [
  'Do I really need a crown?',
  'Is teeth whitening safe?',
  'Helping an anxious child at the dentist',
]

// Marks the Learn hub as a curated library rather than a page with links, and
// connects it to the WebSite and practice nodes declared on the home page.
const learnSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': SCHEMA_ID.learnCollection,
      url: LEARN_URL,
      name: 'Dental Education',
      description:
        'Clear, calm answers to common dental questions. Honest, easy-to-read guides from East St Kilda Dental.',
      isPartOf: { '@id': SCHEMA_ID.website },
      about: { '@id': SCHEMA_ID.practice },
      mainEntity: { '@id': SCHEMA_ID.learnGuides },
    },
    {
      '@type': 'ItemList',
      '@id': SCHEMA_ID.learnGuides,
      name: 'Guides and articles',
      itemListElement: publishedGuides.map((guide, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${LEARN_URL}/${guide.slug}`,
        name: guide.title,
      })),
    },
  ],
}

export default function LearnIndex() {
  return (
    <main>
      <JsonLd data={learnSchema} />
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container">
          <Breadcrumb trail={learnHubTrail} />
        </div>
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Learn</div>
            <h1>Clear, calm answers to your <em>dental questions</em></h1>
            <p className="lead">Honest, easy-to-read guides written to help you understand your mouth — no jargon, no scare tactics, no selling.</p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book a check-up</Link>
              <a href={telHref} className="btn btn-ghost">Call {business.telephoneDisplay}</a>
            </div>
          </div>
          <Photo
            tall
            className="reveal"
            src="/assets/learn/dental-ed-hero.webp"
            alt="Dentist explaining an X-ray to a smiling patient in the treatment room"
            hint="Warm, calm editorial image. Never stock-clinical."
            sizes="(max-width: 860px) 100vw, 48vw"
            priority
          />
        </div>
      </section>

      {/* ── TOPICS ───────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Browse by topic</div>
          <h2>What would you like to understand?</h2>
          <TopicChips />
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Latest</div>
            <h2>Guides &amp; articles</h2>
          </div>
          <GuideGrid guides={publishedGuides} />

          {/* Plain text, never links: these guides do not exist yet. */}
          {upcomingTopics.length > 0 && (
            <p className="publishing-soon reveal">
              Publishing soon: {upcomingTopics.join(' · ')}
            </p>
          )}
        </div>
      </section>
    </main>
  )
}
