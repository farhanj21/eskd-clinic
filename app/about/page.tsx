import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'
import { withSocial } from '@/lib/seo'

export const metadata: Metadata = withSocial({
  title: 'About Us | East St Kilda Dental — Gentle, Local Care Since 1980',
  description:
    'East St Kilda Dental has looked after this neighbourhood for over 40 years. Our story, why we\'re different, and the team who\'ll care for you.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/about' },
})

export default function AboutPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">About us</div>
            <h1>Gentle, local care <em>since 1980</em></h1>
            <p className="lead">
              East St Kilda Dental has looked after this neighbourhood for over 40 years. Here&apos;s our story, what makes us different, and the people who&apos;ll care for you.
            </p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book your visit</Link>
              <a href="tel:+61395273678" className="btn btn-ghost">Call (03) 9527 3678</a>
            </div>
            <div className="hero-proof">
              <span>Since ~1980</span>
              <span className="proof-dot" />
              <span>Generations of local families</span>
            </div>
          </div>
          <Photo
            tall
            className="reveal"
            hint="Warm, real photo of the clinic exterior on the corner of Dandenong and Orrong Roads. Never stock."
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── EXPLORE GRID ─────────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Get to know us</div>
            <h2>A little more about East St Kilda Dental</h2>
          </div>
          <div className="svc-grid reveal">
            <Link href="/about/our-story" className="svc" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <h4>Our Story</h4>
              <p>Four decades on the same corner, and the family behind it today.</p>
              <span style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px' }}>Explore &rarr;</span>
            </Link>
            <Link href="/about/why-were-different" className="svc" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <h4>Why We&apos;re Different</h4>
              <p>No judgement, comprehensive care, and a gentle, female-led team.</p>
              <span style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px' }}>Explore &rarr;</span>
            </Link>
            <Link href="/about/our-team" className="svc" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <h4>Meet the Team</h4>
              <p>The dentists and people who&apos;ll look after you.</p>
              <span style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px' }}>Explore &rarr;</span>
            </Link>
            <Link href="/our-work" className="svc" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <h4>Our Work</h4>
              <p>Real, natural-looking results, shared with consent.</p>
              <span style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px' }}>Explore &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ─────────────────────────────────── */}
      <section className="sec">
        <div className="container reveal" style={{ maxWidth: '48em', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Responsible dentistry</div>
          <h2>Not the cheapest, not the pushiest, the most honest</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            We believe clear guidance is a form of care. We&apos;ll always explain what we see, why it matters, and what your options are, then let you decide in your own time. No fear, no pressure, no surprises on cost.
          </p>
        </div>
      </section>

      <GetInTouch variant="default" id="contact" />
    </main>
  )
}
