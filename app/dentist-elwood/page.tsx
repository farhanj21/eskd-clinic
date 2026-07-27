import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'
import { withSocial } from '@/lib/seo'
import { business, telHref } from '@/lib/business'

export const metadata: Metadata = withSocial({
  title: 'Dentist Elwood | East St Kilda Dental',
  description:
    'A trusted local dentist for Elwood — gentle, comprehensive care near the bay. Locals drive or bus the short distance to us. Book online today.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/dentist-elwood' },
})

const pills = ['Ormond Road', 'Elwood Beach', 'Glen Huntly Road']

export default function DentistElwoodPage() {
  return (
    <main>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Local to Elwood</div>
            <h1>A trusted local dentist for <em>Elwood</em></h1>
            <p className="lead">
              Elwood has no train of its own, so locals drive or bus the short distance to us, gentle, comprehensive care near the bay.
            </p>
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
            hint="Warm, real photo of the clinic or team, with a calm local feel. Never stock imagery."
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── LOCAL ─────────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ maxWidth: '50em', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Your Elwood dentist</div>
          <h2>A short trip from the Elwood village and beach</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            Elwood life sits around Ormond Road, the beach and the Glen Huntly Road strip. With no train station of its own, most Elwood locals drive or bus the short distance to us, and we&apos;re an easy, familiar choice for a regular family dentist.
          </p>
          <div style={{ marginTop: '18px' }}>
            {pills.map(p => (
              <span key={p} style={{ display: 'inline-block', background: 'var(--cream-2)', color: 'var(--sage-deep)', borderRadius: '999px', padding: '7px 14px', margin: '4px', fontSize: '14px', fontWeight: 600 }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GETTING HERE ──────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Easy to reach</div>
            <h2>Getting to us from Elwood</h2>
          </div>
          <div className="svc-grid reveal" style={{ transitionDelay: '.08s' }}>
            <div className="svc">
              <h4>By car</h4>
              <p>A short drive via Glen Huntly Road or through St Kilda to Dandenong Road, then to the corner of Orrong Road.</p>
            </div>
            <div className="svc">
              <h4>Public transport</h4>
              <p>Buses connect Elwood to the St Kilda East area, or take a tram via St Kilda and along Carlisle Street.</p>
            </div>
            <div className="svc">
              <h4>Parking</h4>
              <p>Free off-street parking off Orrong Road, no beachside parking hunt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '48em', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Everything in one place</div>
          <h2>Care for the whole family</h2>
          <p style={{ marginTop: '12px' }}>From check-ups and cleans to fillings, kids&apos; visits and emergencies, all the everyday dentistry Elwood families need.</p>
          <div style={{ marginTop: '18px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/services/check-ups" className="btn btn-ghost">Check-ups</Link>
            <Link href="/services/cleans-and-hygiene" className="btn btn-ghost">Cleans &amp; hygiene</Link>
            <Link href="/services/childrens-dentistry" className="btn btn-ghost">Kids</Link>
            <Link href="/emergency-dentist" className="btn btn-ghost">Emergency</Link>
          </div>
        </div>
      </section>

      {/* ── NERVOUS OR NEW? ───────────────────────────────── */}
      <section className="sec">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '46em', marginLeft: 'auto', marginRight: 'auto' }}>
          <p style={{ fontSize: '20px', fontFamily: 'var(--display)', color: 'var(--sage-deep)', lineHeight: 1.45 }}>
            Nervous about the dentist, or haven&apos;t been in a while? <em>You&apos;re exactly who we&apos;re best with.</em>
          </p>
          <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/nervous-patients" className="btn btn-ghost">Gentle dentistry</Link>
            <Link href="/your-first-visit" className="btn btn-ghost">Your first visit</Link>
            <Link href="/fees" className="btn btn-ghost">Fees &amp; health funds</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Coming from Elwood</div>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <details open>
              <summary>How do I get there without a train?</summary>
              <p>Most Elwood locals drive the short distance, or take a connecting bus or tram.</p>
            </details>
            <details>
              <summary>How long does it take?</summary>
              <p>Just a short drive from the Elwood village.</p>
            </details>
            <details>
              <summary>Where do I park?</summary>
              <p>Free off-street parking off Orrong Road.</p>
            </details>
          </div>
        </div>
      </section>

      <GetInTouch />

    </main>
  )
}
