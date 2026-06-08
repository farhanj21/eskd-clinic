import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'New Patient Smile Offer | East St Kilda Dental',
  description:
    'East St Kilda Dental — new patient offer includes comprehensive exam, digital x-rays and scale & clean for $297 (valued at $499). Limited availability.',
  robots: { index: false },
}

export default function CampaignPage() {
  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-text reveal" style={{ maxWidth: '700px' }}>
              <span className="eyebrow light">Limited Availability</span>
              <h1>A Fresh Start for Your Smile</h1>
              <div className="offer-price" style={{ margin: '24px 0' }}>
                <span className="price-big">$297</span>
                <span className="price-valued"> valued at $499</span>
              </div>
              <p className="lede" style={{ color: 'rgba(246,239,227,.85)' }}>
                Comprehensive oral examination · Digital x-rays · Professional scale &amp; clean
              </p>
              <ul style={{ color: 'rgba(246,239,227,.75)', margin: '20px 0 32px', paddingLeft: '0', listStyle: 'none' }}>
                <li style={{ padding: '6px 0', borderBottom: '1px solid rgba(246,239,227,.15)', display: 'flex', gap: '10px' }}>
                  <span>✓</span> New patients only — complete first check-up in a single visit
                </li>
                <li style={{ padding: '6px 0', borderBottom: '1px solid rgba(246,239,227,.15)', display: 'flex', gap: '10px' }}>
                  <span>✓</span> Health fund benefits applied on top of the offer price
                </li>
                <li style={{ padding: '6px 0', borderBottom: '1px solid rgba(246,239,227,.15)', display: 'flex', gap: '10px' }}>
                  <span>✓</span> No obligation to proceed with any further treatment
                </li>
                <li style={{ padding: '6px 0', display: 'flex', gap: '10px' }}>
                  <span>✓</span> Available Monday to Saturday
                </li>
              </ul>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/booking" className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
                  Claim This Offer
                </Link>
                <a href="tel:+61395273678" className="btn btn-ghost">(03) 9527 3678</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-warm)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-head reveal">
            <span className="eyebrow">Why East St Kilda Dental</span>
            <h2>Dentistry You Can Actually Look Forward To</h2>
          </div>
          <div className="features-grid reveal" style={{ transitionDelay: '.1s' }}>
            {[
              { title: 'Trusted Since 1984', body: 'Over 40 years serving the East St Kilda community — multi-generational families, neighbours and newcomers alike.' },
              { title: '5-Star Rated', body: 'Consistently high Google reviews from patients who value our gentle approach and transparent, honest care.' },
              { title: 'No Surprises', body: 'Full written treatment plans with costs before we proceed with anything. You always know what you\'re agreeing to.' },
              { title: 'Open Saturdays', body: 'Monday to Saturday with early morning options. Dental care that fits your schedule, not just ours.' },
            ].map((item, i) => (
              <div key={i} className="feature-card" style={{ transitionDelay: `${i * 0.06}s` }}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch variant="offer" id="contact" />
    </main>
  )
}
