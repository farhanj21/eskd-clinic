import Link from 'next/link'
import BreadcrumbBar from '@/components/BreadcrumbBar'
import { learnChildTrail } from '@/components/Breadcrumb'
import GuideGrid from '@/components/GuideGrid'
import JsonLd from '@/components/JsonLd'
import TopicChips from '@/components/TopicChips'
import GetInTouch from '@/components/GetInTouch'
import { guidesByTopic, type Topic } from '@/data/topics'
import {
  SCHEMA_ID,
  SITE_URL,
  business,
  telHref,
  topicCollectionId,
  topicGuidesId,
} from '@/lib/business'

/**
 * A single Browse-by-topic landing page: /learn/<topic-slug>.
 *
 * Only rendered for topics that already have a published guide — the route
 * never resolves for an empty topic, so no thin page can exist.
 */
export default function TopicView({ topic }: { topic: Topic }) {
  const guides = guidesByTopic(topic.slug)
  const url = `${SITE_URL}/learn/${topic.slug}`

  // The same two-node shape as the Learn hub, one level down: the topic as a
  // curated collection, and the guides it holds as an ItemList. Both are built
  // from guidesByTopic(), the same call that renders the grid below, so a guide
  // tagged with this topic enters the markup with no extra edit.
  const topicSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': topicCollectionId(topic.slug),
        url,
        name: `${topic.label} — dental guides`,
        description: topic.intro,
        isPartOf: { '@id': SCHEMA_ID.website },
        about: { '@id': SCHEMA_ID.practice },
        // Emitted by <BreadcrumbBar> from the trail it renders, so the visible
        // trail and the markup cannot disagree. This node just points at it.
        breadcrumb: { '@id': `${url}#breadcrumb` },
        mainEntity: { '@id': topicGuidesId(topic.slug) },
      },
      {
        '@type': 'ItemList',
        '@id': topicGuidesId(topic.slug),
        name: `Guides on ${topic.label.toLowerCase()}`,
        itemListElement: guides.map((guide, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE_URL}/learn/${guide.slug}`,
          name: guide.title,
        })),
      },
    ],
  }

  return (
    <main>
      <JsonLd data={topicSchema} />

      {/* ── BREADCRUMB ───────────────────────────────────── */}
      <BreadcrumbBar trail={learnChildTrail(topic.label)} id={`${url}#breadcrumb`} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Dental education</div>
            <h1>{topic.label}</h1>
            <p className="lead">{topic.intro}</p>
            <div className="hero-cta">
              <Link href="/online-booking" className="btn">Book a check-up</Link>
              <a href={telHref} className="btn btn-ghost">Call {business.telephoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Browse by topic</div>
          <h2>What would you like to understand?</h2>
          <TopicChips activeSlug={topic.slug} />
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">{topic.label}</div>
            <h2>
              {guides.length} {guides.length === 1 ? 'guide' : 'guides'} on this topic
            </h2>
          </div>
          <GuideGrid guides={guides} />
          <div style={{ textAlign: 'center', marginTop: '36px' }} className="reveal">
            <Link href="/learn" className="btn btn-ghost">See all guides</Link>
          </div>
        </div>
      </section>

      <GetInTouch variant="default" id="contact" />
    </main>
  )
}
