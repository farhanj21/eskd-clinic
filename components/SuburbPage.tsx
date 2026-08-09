import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import JsonLd from '@/components/JsonLd'
import MapEmbed from '@/components/MapEmbed'
import Photo from '@/components/Photo'
import { requireSuburb, suburbPath, type SuburbData } from '@/data/suburbs'
import { SCHEMA_ID, SITE_URL, business, fullAddress, telHref } from '@/lib/business'
import { withSocial } from '@/lib/seo'

/**
 * The one template every /dentist-<suburb> page renders.
 *
 * Each route is a four-line file that names its slug; everything else — the
 * copy, the metadata, the structured data and the map — comes from
 * data/suburbs.ts. Adding a suburb therefore means editing one data file and
 * creating one stub route, and the page cannot drift from its own metadata,
 * its FAQ schema or the sitemap.
 */

/** Google Maps URL that opens directions from the suburb to our door. */
function directionsHref(s: SuburbData) {
  const origin = encodeURIComponent(`${s.name} VIC ${s.postcode}`)
  const destination = encodeURIComponent(`${business.name}, ${fullAddress}`)
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`
}

/** Embedded map of the clinic itself, not of the suburb. */
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  `${business.name}, ${fullAddress}`,
)}&output=embed`

/**
 * The page's search title, description and canonical URL, all read from the
 * suburb's own entry so no two suburb pages can share them.
 *
 * Called at module scope by each route, so an unknown slug throws at build time.
 */
export function suburbMetadata(slug: string): Metadata {
  const s = requireSuburb(slug)
  return withSocial({
    title: s.meta.title,
    description: s.meta.description,
    alternates: { canonical: `${SITE_URL}${suburbPath(s.slug)}` },
  })
}

export default function SuburbPage({ slug }: { slug: string }) {
  const s = requireSuburb(slug)
  const path = suburbPath(s.slug)
  const url = `${SITE_URL}${path}`

  // The practice node is referenced by its site-wide @id rather than redefined,
  // so this page adds `areaServed` to the existing entity instead of creating a
  // competing one. The FAQ node is page-scoped and quotes the visible questions
  // verbatim, which is what FAQ rich results require.
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: s.meta.title,
        description: s.meta.description,
        isPartOf: { '@id': SCHEMA_ID.website },
        about: { '@id': SCHEMA_ID.practice },
      },
      {
        '@type': 'Dentist',
        '@id': SCHEMA_ID.practice,
        name: business.name,
        url: business.url,
        telephone: business.telephone,
        address: { '@type': 'PostalAddress', ...business.address },
        geo: { '@type': 'GeoCoordinates', ...business.geo },
        hasMap: business.hasMap,
        areaServed: { '@type': 'City', name: s.name },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Areas we serve', item: `${SITE_URL}/areas-we-serve` },
          { '@type': 'ListItem', position: 3, name: s.name },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: s.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  }

  return (
    <main>
      <JsonLd data={schema} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Local to {s.name}</div>
            <h1>Make us your <em>{s.name}</em> dentist</h1>
            <p className="lead">{s.lead}</p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book your visit</Link>
              <a href={telHref} className="btn btn-ghost">Call {business.telephoneDisplay}</a>
            </div>
            <div className="hero-proof">
              <span>40+ years on Dandenong Road</span>
              <span className="proof-dot" />
              <span>Gentle, no-judgement care</span>
            </div>
          </div>
          <Photo
            tall
            className="reveal"
            priority
            src="/assets/incoming/hero.webp"
            alt={`A dentist chatting with a smiling patient during a check-up at our clinic near ${s.name}`}
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── LOCAL ─────────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ maxWidth: '50em', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Your {s.name} dentist</div>
          <h2>{s.localHeading}</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>{s.localBody}</p>
          <div style={{ marginTop: '18px' }}>
            {s.pills.map((p) => (
              <span
                key={p}
                style={{ display: 'inline-block', background: 'var(--cream-2)', color: 'var(--sage-deep)', borderRadius: '999px', padding: '7px 14px', margin: '4px', fontSize: '14px', fontWeight: 600 }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE WE ARE ──────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Finding us from {s.name}</div>
            <h2>Where we are, and how to get here</h2>
          </div>
          <div className="loc-grid">
            <MapEmbed
              className="ph reveal"
              style={{ minHeight: '340px' }}
              title={`Map to ${business.name}, ${fullAddress}`}
              src={MAP_SRC}
            />
            <div className="reveal">
              <p style={{ marginBottom: '6px' }}>
                <b style={{ color: 'var(--ink)' }}>{fullAddress}</b>
              </p>
              <p style={{ fontSize: '14.5px', marginBottom: '22px' }}>
                On the corner of Dandenong and Orrong Roads, with off-street parking off Orrong Road. Wheelchair accessible.
              </p>
              <a
                href={directionsHref(s)}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block' }}
              >
                Get directions from {s.name} &rarr;
              </a>
              <p style={{ fontSize: '14.5px', marginTop: '22px' }}>
                Opens in Google Maps with {s.name} already set as your starting point.
              </p>
              <p style={{ fontSize: '14.5px', marginTop: '14px' }}>
                <Link href="/contact">See our opening hours and contact details &rarr;</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GETTING HERE ──────────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Easy to reach</div>
            <h2>Getting to us from {s.name}</h2>
          </div>
          <div className="svc-grid reveal" style={{ transitionDelay: '.08s' }}>
            <div className="svc">
              <h4>By car</h4>
              <p>{s.gettingHere.car}</p>
            </div>
            <div className="svc">
              <h4>Public transport</h4>
              <p>{s.gettingHere.transport}</p>
            </div>
            <div className="svc">
              <h4>Parking</h4>
              <p>{s.gettingHere.parking}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="sec">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '48em', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Everything in one place</div>
          <h2>Care for the whole family</h2>
          <p style={{ marginTop: '12px' }}>
            From check-ups and cleans to fillings, kids&apos; visits and emergencies, all the everyday dentistry {s.name} families need.
          </p>
          <div style={{ marginTop: '18px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/services/check-ups" className="btn btn-ghost">Check-ups</Link>
            <Link href="/services/cleans-and-hygiene" className="btn btn-ghost">Cleans &amp; hygiene</Link>
            <Link href="/services/childrens-dentistry" className="btn btn-ghost">Kids</Link>
            <Link href="/emergency-dentist" className="btn btn-ghost">Emergency</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Coming from {s.name}</div>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            {s.faqs.map(({ q, a }, i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch />
    </main>
  )
}
