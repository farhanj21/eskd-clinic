import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'
import JsonLd from '@/components/JsonLd'
import StickyCallBar from '@/components/StickyCallBar'
import { suburbs, suburbPath } from '@/data/suburbs'
import { withSocial } from '@/lib/seo'
import { SCHEMA_ID, SITE_URL, areasServed, business, openingHours, telHref } from '@/lib/business'

export const metadata: Metadata = withSocial({
  title: 'Emergency Dental Care | East St Kilda Dental',
  description:
    `Dental emergency in St Kilda East? Call ${business.telephoneDisplay} for same-day emergency appointments. Toothache, broken teeth, knocked-out teeth — we're here for you.`,
  alternates: { canonical: 'https://www.eaststkildadental.com.au/emergency-dentist' },
})

// Treatment pages behind the conditions on this page. Only the conditions that
// genuinely map to a treatment carry a link, with the treatment name as the
// anchor text — a few meaningful links beat many.
const CROWNS = { label: 'crowns & bridges', href: '/services/crowns-and-bridges' }
const FILLINGS = { label: 'fillings', href: '/services/fillings' }
const ROOT_CANAL = { label: 'root canal therapy', href: '/services/root-canal' }

// Nearby suburbs, for "emergency dentist near me" and per-suburb intent.
// Generated from data/suburbs.ts, so every suburb with a live page is listed and
// a new one needs no edit here. St Kilda East is the home page, so it is not
// repeated.
const nearbySuburbs = suburbs.map((s) => ({ label: s.name, href: suburbPath(s.slug) }))

/**
 * First aid, as question-and-answer pairs.
 *
 * One source of truth for the visible cards AND the FAQ schema, so the question
 * a reader sees and the question an engine matches are the same string and can
 * never drift. Headings are phrased the way a worried person actually asks,
 * with the action kept in the first sentence of each answer.
 *
 * `related` is presentational only and is deliberately kept out of the schema —
 * the FAQ answer must stay exactly the text a reader sees.
 */
const firstAid: { q: string; a: string; related?: { label: string; href: string }[] }[] = [
  {
    q: 'What should I do if a tooth is knocked out?',
    a: 'Hold it by the white crown, never the root, and don’t scrub it. If you can, gently place it back in the socket. If not, keep it in milk. Try to see us within the hour.',
  },
  {
    q: 'What should I do for a bad toothache?',
    a: 'Rinse with warm, salty water and take your usual pain relief. Avoid very hot, cold or sweet food. Then call us.',
    related: [ROOT_CANAL],
  },
  {
    q: 'What should I do for a broken or chipped tooth?',
    a: 'Save any pieces, rinse your mouth with warm water, and press clean gauze on any bleeding. Call us to be seen.',
    related: [CROWNS, FILLINGS],
  },
  {
    q: 'What should I do about facial or gum swelling?',
    a: 'Swelling of the gum, jaw or face can be a sign of infection. Call us the same day so we can act quickly.',
    related: [ROOT_CANAL],
  },
  {
    q: 'What should I do if I lose a filling or crown?',
    a: 'Keep the crown if you have it, and avoid chewing on that side. Call us and we’ll re-secure it.',
    related: [CROWNS],
  },
  {
    q: 'What should I do if a baby tooth is knocked out?',
    a: 'Do not put a baby tooth back in. Keep your child calm, bring the tooth with you, and call us for advice.',
  },
]

const faq = [
  {
    q: 'Will you get me out of pain today?',
    a: "That's our first priority. Call us and we'll do our best to see you the same day and relieve the pain, then plan any further treatment with you.",
  },
  {
    q: 'How much does an emergency appointment cost?',
    a: "You'll be told the cost of the emergency exam up front, and you'll get a written estimate before any treatment goes ahead. Payment options are available.",
  },
  {
    q: "I'm really nervous. Can you still help?",
    a: "Absolutely. Gentle care for anxious patients is one of the things we're known for, and we'll keep you calm and in control, with happy gas available if it helps.",
  },
  {
    q: "It's after hours. What should I do?",
    a: "If it's serious — trouble breathing or swallowing, heavy bleeding, a facial injury or spreading swelling — call 000 or go to a hospital emergency department. Otherwise, call us when we open and we'll fit you in.",
  },
]

/**
 * Emergency structured data: what we offer, and the answers someone in pain is
 * asking for at 2am.
 *
 * Every question and answer is generated from the `faq` and `firstAid` arrays
 * that render the visible page, so the markup cannot drift from the words on
 * screen — the condition for both AI attribution and any rich result.
 *
 * The service hours come from the shared opening-hours constant and are weekday
 * only. Nothing here implies round-the-clock availability, because we are not.
 */
const emergencySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': SCHEMA_ID.emergencyService,
      serviceType: 'Emergency dental care',
      name: 'Emergency dental care',
      url: `${SITE_URL}/emergency-dentist`,
      provider: { '@id': SCHEMA_ID.practice },
      areaServed: areasServed.map((name) => ({ '@type': 'City', name })),
      hoursAvailable: openingHours.map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...h.days],
        opens: h.opens,
        closes: h.closes,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': SCHEMA_ID.emergencyFaq,
      mainEntity: [...faq, ...firstAid].map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

export default function EmergencyPage() {
  return (
    <main>
      <JsonLd data={emergencySchema} />
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Dental emergency?</div>
            {/* The emotional line stays the only H1. This H2 carries the search
                term and the suburb, honestly hedged — not a guarantee. */}
            <h1>In pain? <em>We&apos;ll help you today.</em></h1>
            <h2 className="hero-keyline"></h2>
            <p className="lead">
              Take a breath. Most dental emergencies look scarier than they feel, and as an emergency dentist in St Kilda East we keep time aside every day to see people quickly. Call us and we&apos;ll talk you through what to do.
            </p>
            <div className="hero-cta">
              <a href={telHref} className="btn">Call {business.telephoneDisplay}</a>
              <Link href="/online-booking" className="btn btn-ghost">Book online</Link>
            </div>

            <p style={{ marginTop: '18px', fontSize: '14.5px', color: 'var(--ink-faint)' }}>
              Emergency dentist in St Kilda East, same-day care where possible. 
            </p>
          </div>
          <Photo
            tall
            className="reveal"
            src="/assets/emergency/emergency-dentistry.webp"
            hint="Calm, reassuring photo: a friendly team member on the phone, or a warm reception. Nothing graphic or clinical."
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── IS IT AN EMERGENCY? ──────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">When to call us straight away</div>
            <h2>These usually need <em>prompt care</em></h2>
          </div>
          <ul className="offer-includes reveal" style={{ maxWidth: '760px', margin: '0 auto' }}>
            <li>Severe or throbbing toothache</li>
            <li>A knocked-out or loose adult tooth</li>
            <li>A broken, chipped or cracked tooth</li>
            <li>Swelling of the gum, jaw or face</li>
            <li>A lost filling or crown</li>
            <li>Bleeding that won&apos;t settle</li>
            <li>Pain after recent treatment</li>
            <li>An accident or knock to the mouth</li>
          </ul>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '26px', fontSize: '17px' }}>
            Not sure? Call us anyway on{' '}
            <a href={telHref} style={{ color: 'var(--clay-deep)', fontWeight: 600 }}>{business.telephoneDisplay}</a>{' '}
            and we&apos;ll help you work out what&apos;s needed.
          </p>
        </div>
      </section>

      {/* ── WHAT TO DO RIGHT NOW ─────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Before you reach us</div>
            <h2>Simple first aid that <em>can save a tooth</em></h2>
          </div>
          <div className="svc-grid reveal">
            {firstAid.map((item) => (
              <article key={item.q} className="svc">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
                {item.related && (
                  <p className="related">
                    Related:{' '}
                    {item.related.map((r, i) => (
                      <span key={r.href}>
                        {i > 0 && ' · '}
                        <Link href={r.href}>{r.label}</Link>
                      </span>
                    ))}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHEN TO GO STRAIGHT TO HOSPITAL ─────────────── */}
      <section className="sec alt">
        <div className="container reveal">
          <div style={{ background: '#FBEDE4', border: '1px solid var(--clay)', borderLeft: '5px solid var(--clay-deep)', borderRadius: '14px', padding: '30px 32px', maxWidth: '820px', margin: '0 auto' }}>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', color: 'var(--clay-deep)', margin: '0 0 12px' }}>
              Some emergencies need a hospital, not a dental chair
            </h3>
            <p style={{ margin: '0 0 14px' }}>
              Call <b>000</b> or go to your nearest hospital emergency department straight away if you have:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.9 }}>
              <li>Difficulty breathing or swallowing</li>
              <li>Heavy bleeding that won&apos;t stop</li>
              <li>A serious facial injury</li>
              <li>Swelling spreading towards your eye or neck, or you feel very unwell</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── HOW WE HELP ──────────────────────────────────── */}
      <section className="sec">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '48em', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Calm, gentle, fast</div>
          <h2>We&apos;ll get you comfortable, <em>then sort the cause</em></h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            We keep time aside each day for emergencies, and our first job is simply to get you out of pain. If you&apos;re nervous, that&apos;s completely fine. Looking after anxious patients is one of the things we&apos;re known for, and we&apos;ll go gently.
          </p>
          <p style={{ fontSize: '16px', marginTop: '16px', color: 'var(--ink-soft)' }}>
            You&apos;ll get a clear written estimate before any treatment, and we have payment options if you need them. If it&apos;s outside our hours and serious, please use the hospital guidance above.
          </p>
          <div style={{ marginTop: '24px' }}>
            <a className="btn" href={telHref}>Call {business.telephoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* ── SUPER BAND ───────────────────────────────────── */}
      <section className="super-band">
        <div className="super-band-wrap">
          <h2>Using Super For Essential Treatment</h2>
          <p>
            For significant, medically necessary treatment, the ATO may allow early access to your super on compassionate grounds, for example to help relieve chronic dental pain when other funding is not available. It does not cover cosmetic treatment. If it may be relevant to you, we can prepare the clinical report the ATO requires and point you to a licensed provider who manages the application. We never need your myGov details.
          </p>
          <div className="super-logo">AccessMySuper</div>
          <div style={{ marginTop: '24px' }}>
            <Link href="/using-your-super" className="btn-super">Learn More</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Quick answers</div>
            <h2>Emergency questions</h2>
          </div>
          <div className="faq reveal">
            {faq.map((item, i) => (
              <details key={i} open={i === 0}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── IN PAIN NOW ──────────────────────────────────── */}
      <section className="sec sage-bg">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow">We&apos;re here to help</div>
          <h2>In pain now? <em>Call us.</em></h2>
          <p style={{ maxWidth: '34em', margin: '0 auto' }}>
            Our friendly team will talk you through what to do and find you the soonest possible time.
          </p>
          <div style={{ marginTop: '22px' }}>
            <a className="btn" href={telHref}>Call {business.telephoneDisplay}</a>
          </div>
          <p style={{ marginTop: '14px', fontSize: '14px', opacity: 0.85 }}>
            <Link href="/online-booking" style={{ color: 'var(--cream)', textDecoration: 'underline' }}>or book online</Link>
          </p>
        </div>
      </section>

      {/* Local intent: names the suburbs we cover and links each to its own
          page. Informational, not a sales line. */}
      <section className="sec" style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="container reveal">
          <p className="serves">
            Emergency care for the inner south-east:{' '}
            {nearbySuburbs.map((s, i) => (
              <span key={s.href}>
                {i > 0 && ', '}
                <Link href={s.href}>{s.label}</Link>
              </span>
            ))}
            .
          </p>
        </div>
      </section>

      <GetInTouch variant="emergency" id="contact" />

      <StickyCallBar />
    </main>
  )
}
