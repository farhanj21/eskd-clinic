import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'
import { withSocial } from '@/lib/seo'

export const metadata: Metadata = withSocial({
  title: 'Dentist Caulfield | East St Kilda Dental',
  description:
    'A calm, comprehensive dentist for Caulfield — a straight run west along Dandenong Road. Gentle, no-judgement care for the whole family. Book online today.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/dentist-caulfield' },
})

const pills = ['Caulfield Racecourse', 'Monash Caulfield', 'Glen Eira Road']

export default function DentistCaulfieldPage() {
  return (
    <main>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Local to Caulfield</div>
            <h1>A calm, comprehensive dentist for <em>Caulfield</em></h1>
            <p className="lead">
              A straight run west along Dandenong Road brings Caulfield families to us, gentle, no-judgement care that&apos;s easy to fit into the week.
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
          <div className="eyebrow">Your Caulfield dentist</div>
          <h2>An easy trip west along Dandenong Road</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            Caulfield is known for the Racecourse, the Monash Caulfield campus and the Glen Eira Road shops. We&apos;re a short drive west along Dandenong Road, a simple, familiar route. We also care for many families from Caulfield North and Caulfield South.
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
            <h2>Getting to us from Caulfield</h2>
          </div>
          <div className="svc-grid reveal" style={{ transitionDelay: '.08s' }}>
            <div className="svc">
              <h4>By car</h4>
              <p>A few minutes west along Dandenong Road from Caulfield brings you straight to our door on the corner of Orrong Road.</p>
            </div>
            <div className="svc">
              <h4>Public transport</h4>
              <p>Caulfield Station (Frankston, Cranbourne and Pakenham lines) is a short ride away, and trams 3 and 64 run along the Dandenong Road corridor.</p>
            </div>
            <div className="svc">
              <h4>Parking</h4>
              <p>Free off-street parking off Orrong Road.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '48em', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Everything in one place</div>
          <h2>Care for the whole family</h2>
          <p style={{ marginTop: '12px' }}>From check-ups and cleans to fillings, kids&apos; visits and emergencies, all the everyday dentistry Caulfield families need.</p>
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
            <div className="eyebrow">Coming from Caulfield</div>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <details open>
              <summary>How long does it take from Caulfield?</summary>
              <p>Only a few minutes&apos; drive west along Dandenong Road.</p>
            </details>
            <details>
              <summary>Do you see patients from Caulfield North and South?</summary>
              <p>Yes, we care for families right across the Caulfield area.</p>
            </details>
            <details>
              <summary>Is there parking or train access?</summary>
              <p>Free off-street parking off Orrong Road, and Caulfield Station is close by.</p>
            </details>
          </div>
        </div>
      </section>

      <GetInTouch />

    </main>
  )
}
