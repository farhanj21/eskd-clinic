import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'
import { withSocial } from '@/lib/seo'
import { business, telHref } from '@/lib/business'

export const metadata: Metadata = withSocial({
  title: 'Our Work — Real Results, Real People | East St Kilda Dental',
  description:
    'Natural-looking outcomes from gentle, considered care at East St Kilda Dental — always in proportion to the person, never overdone. Browse the smile gallery.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/our-work' },
})

const cases = [
  {
    h4: 'Gentle smile refresh',
    p: "A natural-looking improvement, in keeping with the patient's face.",
  },
  {
    h4: 'Restoring a damaged tooth',
    p: 'Function and appearance brought back with a crown.',
  },
  {
    h4: 'Replacing a missing tooth',
    p: 'A single implant that looks and feels natural.',
  },
  {
    h4: "A nervous patient's journey",
    p: 'From years away to comfortable, ongoing care.',
  },
  {
    h4: 'Straightening with aligners',
    p: 'A discreet path to a straighter smile.',
  },
  {
    h4: 'A full-mouth rehabilitation',
    p: 'Planned, phased care over time.',
  },
]

export default function OurWorkPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Our work</div>
            <h1>Real results, <em>real people</em></h1>
            <p className="lead">
              Natural-looking outcomes from gentle, considered care, always in proportion to the person, never overdone.
            </p>
            <div className="hero-cta">
              <Link href="/online-booking" className="btn">Book a consultation</Link>
              <a href={telHref} className="btn btn-ghost">Call {business.telephoneDisplay}</a>
            </div>
          </div>
          <Photo
            tall
            className="reveal"
            src="/assets/gallery/gallery-hero.webp"
            hint="Warm, real before/after or smile photo (with consent). Never stock."
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ maxWidth: '48em', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">About these results</div>
          <h2>Honest, in-context examples</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            Every result is different, because every person is. The examples here are shared with patient consent and reflect typical, natural outcomes, not guarantees. We&apos;ll always talk you through what&apos;s realistic for you.
          </p>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">A selection of our work</div>
            <h2>Smile gallery</h2>
          </div>
          <div className="svc-grid reveal">
            {cases.map((c, i) => (
              <div key={i} className="svc">
                <Photo
                  src={`/assets/gallery/smile-${i + 1}.webp`}
                  hint="Before & after (with patient consent)"
                  sizes="(max-width: 820px) 100vw, 33vw"
                  style={{ height: '170px', marginBottom: '10px' }}
                />
                <h4>{c.h4}</h4>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED TREATMENTS ───────────────────────────── */}
      <section className="sec">
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <div className="eyebrow">Considering treatment?</div>
          <h2>Explore the options</h2>
          <div style={{ marginTop: '18px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/services/veneers" className="btn btn-ghost">Veneers</Link>
            <Link href="/services/smile-design" className="btn btn-ghost">Smile design</Link>
            <Link href="/services/dental-implants" className="btn btn-ghost">Implants</Link>
            <Link href="/services/teeth-whitening" className="btn btn-ghost">Whitening</Link>
          </div>
        </div>
      </section>

      <GetInTouch variant="cosmetic" id="contact" />
    </main>
  )
}
