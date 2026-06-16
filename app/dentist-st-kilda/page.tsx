import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Dentist St Kilda | East St Kilda Dental',
  description:
    'Your local dentist near St Kilda — gentle, judgement-free dental care just a short trip up Carlisle Street. 40+ years on Dandenong Road. Book online today.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/dentist-st-kilda' },
}

const pills = ['Acland Street', 'Fitzroy Street', 'Balaclava Station']

export default function DentistStKildaPage() {
  return (
    <main>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Local to St Kilda</div>
            <h1>A gentle, judgement-free dentist for <em>St Kilda</em></h1>
            <p className="lead">
              Just inland from the bay, we&apos;ve cared for St Kilda families for over 40 years, calm, comprehensive dentistry a short trip up Carlisle Street.
            </p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book your visit</Link>
              <a href="tel:+61395273678" className="btn btn-ghost">Call (03) 9527 3678</a>
            </div>
            <div className="hero-proof">
              <span>40+ years on Dandenong Road</span>
              <span className="proof-dot" />
              <span>Gentle, no-judgement care</span>
            </div>
          </div>
          <div className="ph tall reveal">
            <span>Warm, real photo of the clinic or team, with a calm local feel. Never stock imagery.</span>
          </div>
        </div>
      </section>

      {/* ── LOCAL ─────────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ maxWidth: '50em', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Your St Kilda dentist</div>
          <h2>Your local dentist, a few minutes from the bay</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            St Kilda life runs between Acland Street, Fitzroy Street and the Esplanade. We&apos;re a short way inland on Dandenong Road, close enough to be your regular dentist, far enough to park easily and skip the foreshore traffic. Many of our long-standing patients are St Kilda locals who&apos;ve been coming for years.
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
            <h2>Getting to us from St Kilda</h2>
          </div>
          <div className="svc-grid reveal" style={{ transitionDelay: '.08s' }}>
            <div className="svc">
              <h4>By car</h4>
              <p>From St Kilda it&apos;s a short drive inland, up Carlisle or Inkerman Street to Dandenong Road, then to our door on the corner of Orrong Road.</p>
            </div>
            <div className="svc">
              <h4>Public transport</h4>
              <p>Trams 16 and 3a run along Carlisle Street through to Balaclava; trams 5 and 64 run along Dandenong Road. Balaclava Station on the Sandringham line is the nearest train.</p>
            </div>
            <div className="svc">
              <h4>Parking</h4>
              <p>Free off-street parking off Orrong Road, so you&apos;re not circling for a spot near the beach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '48em', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Everything in one place</div>
          <h2>Care for the whole family</h2>
          <p style={{ marginTop: '12px' }}>From check-ups and cleans to fillings, kids&apos; visits and emergencies, all the everyday dentistry St Kilda families need.</p>
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
            <div className="eyebrow">Coming from St Kilda</div>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <details open>
              <summary>How far is the clinic from St Kilda beach?</summary>
              <p>Only a few minutes&apos; drive inland, an easy regular trip.</p>
            </details>
            <details>
              <summary>Can I get there by tram?</summary>
              <p>Yes, trams along Carlisle Street and Dandenong Road bring you close, and Balaclava Station is nearby.</p>
            </details>
            <details>
              <summary>Is there parking?</summary>
              <p>Yes, free off-street parking off Orrong Road.</p>
            </details>
          </div>
        </div>
      </section>

      <GetInTouch />

    </main>
  )
}
