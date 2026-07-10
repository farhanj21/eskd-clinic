import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'

export const metadata: Metadata = {
  title: 'Dentist Balaclava | East St Kilda Dental',
  description:
    'Your neighbourhood dentist in Balaclava — gentle, comprehensive care just south on Dandenong Road. 40+ years on Dandenong Road. Book online today.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/dentist-balaclava' },
}

const pills = ['Carlisle Street', 'Balaclava Station', 'Hotham Street']

export default function DentistBalaclavaPage() {
  return (
    <main>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Local to Balaclava</div>
            <h1>Your neighbourhood dentist in <em>Balaclava</em></h1>
            <p className="lead">
              Balaclava is right next door. For many locals we&apos;re close enough to walk, gentle, comprehensive care just south on Dandenong Road.
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
          <div className="eyebrow">Your Balaclava dentist</div>
          <h2>One of our closest neighbourhoods</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            Balaclava centres on the Carlisle Street shops and cafes and the busy little station. We&apos;re a short hop south, which makes us a genuinely local dentist for Balaclava residents, easy to reach on foot, by tram or by car.
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
            <h2>Getting to us from Balaclava</h2>
          </div>
          <div className="svc-grid reveal" style={{ transitionDelay: '.08s' }}>
            <div className="svc">
              <h4>By car</h4>
              <p>A few minutes south down Hotham Street or Orrong Road to Dandenong Road, and we&apos;re on the corner of Orrong Road.</p>
            </div>
            <div className="svc">
              <h4>Public transport</h4>
              <p>Balaclava Station on the Sandringham line is minutes away, and trams 3, 16 and 78 serve the Carlisle Street area.</p>
            </div>
            <div className="svc">
              <h4>Parking</h4>
              <p>Free off-street parking off Orrong Road if you&apos;d rather drive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '48em', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Everything in one place</div>
          <h2>Care for the whole family</h2>
          <p style={{ marginTop: '12px' }}>From check-ups and cleans to fillings, kids&apos; visits and emergencies, all the everyday dentistry Balaclava families need.</p>
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
            <div className="eyebrow">Coming from Balaclava</div>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <details open>
              <summary>Is the clinic walkable from Balaclava?</summary>
              <p>For many Balaclava residents, yes, we&apos;re one of the closest practices.</p>
            </details>
            <details>
              <summary>What&apos;s the nearest station?</summary>
              <p>Balaclava Station on the Sandringham line is just up the road.</p>
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
