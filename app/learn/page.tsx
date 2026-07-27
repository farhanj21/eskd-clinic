import type { Metadata } from 'next'
import Link from 'next/link'
import Photo from '@/components/Photo'
import { withSocial } from '@/lib/seo'

export const metadata: Metadata = withSocial({
  title: 'Dental Education | East St Kilda Dental',
  description:
    'Clear, calm answers to your dental questions. Honest, easy-to-read guides with no jargon, no scare tactics, no selling — from the team at East St Kilda Dental.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/learn' },
})

/* Matches the prototype's 6-card learn index exactly */
const learnCards = [
  {
    slug: 'havent-been-in-years',
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

export default function LearnIndex() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Learn</div>
            <h1>Clear, calm answers to your <em>dental questions</em></h1>
            <p className="lead">Honest, easy-to-read guides written to help you understand your mouth — no jargon, no scare tactics, no selling.</p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book a check-up</Link>
              <a href="tel:+61395273678" className="btn btn-ghost">Call (03) 9527 3678</a>
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
