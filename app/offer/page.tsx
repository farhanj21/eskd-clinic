import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'New Patient Offer — $297 (valued at $499) | East St Kilda Dental',
  description:
    'New to East St Kilda Dental? Claim your comprehensive exam, digital x-rays and scale & clean for $297 (valued at $499). Limited availability — book online today.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/offer' },
}

export default function OfferPage() {
  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)' }}>
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-text reveal" style={{ maxWidth: '680px' }}>
              <span className="eyebrow light">New Patient Special</span>
              <h1>Comprehensive New Patient Offer</h1>
              <div className="offer-price reveal" style={{ margin: '28px 0' }}>
                <span className="price-big">$297</span>
                <span className="price-valued"> valued at $499</span>
              </div>
              <p className="lede" style={{ color: 'rgba(246,239,227,.85)' }}>
                Everything a new patient needs in a single appointment — no hidden extras, no pressure.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
                <Link href="/booking" className="btn btn-primary">Book Now</Link>
                <Link href="#contact" className="btn btn-ghost">Ask a Question</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="offer-grid">
            <div className="offer-includes reveal">
              <span className="eyebrow">What&apos;s Included</span>
              <h2>Your Complete Check-Up</h2>
              <div className="offer-items">
                <div className="offer-item">
                  <div className="offer-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3>Comprehensive Oral Examination</h3>
                    <p>A thorough clinical assessment of every tooth, your gums, bite, jaw joints, and soft tissues. Your dentist will explain everything they find in plain language.</p>
                  </div>
                </div>
                <div className="offer-item">
                  <div className="offer-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <div>
                    <h3>Digital X-Rays</h3>
                    <p>Bitewing x-rays to detect decay and bone changes between and beneath the teeth — invisible to the naked eye. Our digital system uses a fraction of the radiation of older equipment.</p>
                  </div>
                </div>
                <div className="offer-item">
                  <div className="offer-ico" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 13c-2.67 0-8-1.34-8-4v-1c0-2.66 5.33-4 8-4s8 1.34 8 4v1c0 2.66-5.33 4-8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3>Professional Scale &amp; Clean</h3>
                    <p>Removal of hardened tartar and plaque that brushing alone can&apos;t shift, followed by a polish to leave your teeth clean, smooth and fresh.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="offer-aside reveal" style={{ transitionDelay: '.1s' }}>
              <div className="aside-card">
                <h3>Good to Know</h3>
                <ul className="check-list">
                  <li>Available to new patients only</li>
                  <li>Appointment duration approx. 60–90 min</li>
                  <li>No hidden fees or pressure</li>
                  <li>All major health funds accepted</li>
                  <li>Health fund benefits applied on top</li>
                  <li>Available Mon–Sat</li>
                </ul>
              </div>
              <div className="aside-card" style={{ marginTop: '24px', background: 'var(--surface-warm)' }}>
                <h3>Ready to book?</h3>
                <p>Call us or book online — we&apos;ll confirm your appointment within one business day.</p>
                <Link href="/booking" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-flex' }}>Book Online</Link>
                <a href="tel:+61395273678" className="btn btn-outline" style={{ marginTop: '12px', display: 'inline-flex' }}>(03) 9527 3678</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch variant="offer" id="contact" />
    </main>
  )
}
