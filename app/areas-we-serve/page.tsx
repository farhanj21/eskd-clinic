import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Areas We Serve | East St Kilda Dental',
  description:
    'East St Kilda Dental — a trusted local dentist for the inner south-east. Serving St Kilda, Balaclava, Caulfield, Elsternwick, Elwood and surrounding suburbs.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/areas-we-serve' },
}

const suburbs = [
  { href: '/',                    h4: 'East St Kilda',  p: 'Our home. We\'re at 364 Dandenong Road, East St Kilda (corner Orrong Road).', cta: 'Our clinic' },
  { href: '/dentist-st-kilda',    h4: 'St Kilda',       p: 'Your local dentist, a few minutes from the bay.',                             cta: 'View St Kilda' },
  { href: '/dentist-balaclava',   h4: 'Balaclava',      p: 'One of our closest neighbourhoods.',                                          cta: 'View Balaclava' },
  { href: '/dentist-caulfield',   h4: 'Caulfield',      p: 'An easy trip west along Dandenong Road.',                                     cta: 'View Caulfield' },
  { href: '/dentist-elsternwick', h4: 'Elsternwick',    p: 'Just north of the Glen Huntly Road village.',                                 cta: 'View Elsternwick' },
  { href: '/dentist-elwood',      h4: 'Elwood',         p: 'A short trip from the Elwood village and beach.',                             cta: 'View Elwood' },
]

export default function AreasWeServePage() {
  return (
    <main>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Areas we serve</div>
            <h1>A trusted local dentist for <em>East St Kilda</em> and the inner south-east</h1>
            <p className="lead">
              We&apos;ve cared for families across the neighbourhood for over 40 years, from our home on Dandenong Road, on the corner of Orrong Road. Today we welcome patients from right across Melbourne, and from regional Victoria too.
            </p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book your visit</Link>
              <a href="tel:+61395273678" className="btn btn-ghost">Call (03) 9527 3678</a>
            </div>
          </div>
          <div className="ph tall reveal">
            <span>Warm, real photo of the clinic exterior or local street. Never stock imagery.</span>
          </div>
        </div>
      </section>

      {/* ── NEIGHBOURHOODS ────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Find your suburb</div>
            <h2>Caring for families across the neighbourhood</h2>
          </div>
          <div className="svc-grid reveal" style={{ transitionDelay: '.08s' }}>
            {suburbs.map(s => (
              <Link key={s.href} href={s.href} className="svc" style={{ textDecoration: 'none' }}>
                <h4>{s.h4}</h4>
                <p>{s.p}</p>
                <span style={{ color: 'var(--clay)', fontWeight: 600, fontSize: '14px' }}>{s.cta} &rarr;</span>
              </Link>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '22px', maxWidth: '46em', marginLeft: 'auto', marginRight: 'auto', color: 'var(--ink)', opacity: 0.8 }}>
            We also warmly welcome patients from Caulfield North, Caulfield South, Ripponlea, Windsor, Prahran, Armadale, Glen Huntly, Carnegie, Gardenvale, St Kilda West and the surrounding suburbs.
          </p>
        </div>
      </section>

      {/* ── EASY TO REACH ─────────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal" style={{ maxWidth: '48em', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Getting here</div>
          <h2>Simple to reach, easy to park</h2>
          <p style={{ fontSize: '18px', marginTop: '14px' }}>
            We&apos;re on Dandenong Road at the corner of Orrong Road, with free off-street parking off Orrong Road. Trams 5 and 64 run along Dandenong Road, and Balaclava Station on the Sandringham line is close by.
          </p>
        </div>
      </section>

      <GetInTouch />

    </main>
  )
}
