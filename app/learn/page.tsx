import type { Metadata } from 'next'
import Link from 'next/link'
import Photo from '@/components/Photo'
import JsonLd from '@/components/JsonLd'
import { withSocial } from '@/lib/seo'
import { SCHEMA_ID, SITE_URL, business, telHref } from '@/lib/business'

export const metadata: Metadata = withSocial({
  title: 'Dental Education | East St Kilda Dental',
  description:
    'Clear, calm answers to your dental questions. Honest, easy-to-read guides with no jargon, no scare tactics, no selling — from the team at East St Kilda Dental.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/learn' },
})

interface LearnCard {
  /** Article route segment, or null while the guide is still unwritten. */
  slug: string | null
  title: string
  excerpt: string
  status: 'published' | 'coming-soon'
}

/* Matches the prototype's 6-card learn index exactly */
const learnCards: LearnCard[] = [
  {
    // Must match a slug in data/articles.ts — this is the live article route.
    slug: 'havent-been-to-the-dentist-in-years',
    title: "Haven't been to the dentist in years?",
    excerpt: "A gentle, no-judgement guide to coming back, what to expect, and why it's never too late.",
    status: 'published' as const,
  },
  {
    slug: null,
    title: 'Why do my gums bleed?',
    excerpt: 'Bleeding gums explained, and what to do about it.',
    status: 'coming-soon' as const,
  },
  {
    slug: null,
    title: 'Do I really need a crown?',
    excerpt: "When a filling isn't enough, and how to decide.",
    status: 'coming-soon' as const,
  },
  {
    slug: null,
    title: 'What happens at your first visit',
    excerpt: 'A calm walk-through of your comprehensive first appointment.',
    status: 'coming-soon' as const,
  },
  {
    slug: null,
    title: 'Is teeth whitening safe?',
    excerpt: 'What works, what to avoid, and how to protect your teeth.',
    status: 'coming-soon' as const,
  },
  {
    slug: null,
    title: 'Helping an anxious child at the dentist',
    excerpt: 'Gentle ways to make dental visits easy for kids.',
    status: 'coming-soon' as const,
  },
]

const LEARN_URL = `${SITE_URL}/learn`

/**
 * The guides that are actually live.
 *
 * Derived from the same `learnCards` array that renders the visible cards, so
 * the schema and the page can never drift: publish a guide by giving its card a
 * slug and `status: 'published'`, and it joins both the visible list and the
 * ItemList at once, with no separate edit.
 *
 * Coming-soon cards are deliberately excluded — they are not real pages yet, and
 * listing them would misrepresent the library.
 */
const publishedGuides = learnCards.filter(
  (card): card is LearnCard & { slug: string } => card.status === 'published' && card.slug !== null,
)

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
      itemListElement: publishedGuides.map((card, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${LEARN_URL}/${card.slug}`,
        name: card.title,
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
            hint="Warm, calm editorial image. Never stock-clinical."
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── TOPICS ───────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Browse by topic</div>
          <h2>What would you like to understand?</h2>
          <div className="topic-tags">
            <span className="topic-tag">Nervous patients</span>
            <span className="topic-tag">Prevention</span>
            <span className="topic-tag">Treatments explained</span>
            <span className="topic-tag">Kids</span>
            <span className="topic-tag">Costs &amp; funds</span>
          </div>
        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Latest</div>
            <h2>Guides &amp; articles</h2>
          </div>
          <div className="svc-grid reveal">
            {learnCards.map((card, i) => (
              card.status === 'published' && card.slug ? (
                <Link
                  key={i}
                  href={`/learn/${card.slug}`}
                  className="svc"
                  style={{ cursor: 'pointer', textDecoration: 'none' }}
                >
                  <Photo
                    hint="Article image"
                    sizes="(max-width: 820px) 100vw, 33vw"
                    style={{ height: '140px', marginBottom: '12px' }}
                  />
                  <h4>{card.title}</h4>
                  <p>{card.excerpt}</p>
                  <span style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px' }}>
                    Read article &rarr;
                  </span>
                </Link>
              ) : (
                <div key={i} className="svc article-card-soon">
                  <Photo
                    hint="Coming soon"
                    sizes="(max-width: 820px) 100vw, 33vw"
                    style={{ height: '140px', marginBottom: '12px' }}
                  />
                  <h4>{card.title}</h4>
                  <p>{card.excerpt}</p>
                  <span className="read-lbl">Coming soon</span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
