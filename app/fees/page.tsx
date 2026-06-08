import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Dental Fees & Health Funds | East St Kilda Dental',
  description:
    'Transparent dental fees in East St Kilda. We accept all major health funds, offer gap-free options on eligible services, and can discuss payment plans. No surprises.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/fees' },
}

const funds = [
  'Medibank', 'Bupa', 'HCF', 'NIB', 'AHM', 'CBHS',
  'Defence Health', 'Teachers Health', 'GMHBA', 'Peoplecare',
]

export default function FeesPage() {
  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)' }}>
        <div className="container">
          <div className="page-hero-inner">
            <div className="page-hero-text reveal" style={{ maxWidth: '680px' }}>
              <span className="eyebrow light">Fees & Funding</span>
              <h1>Transparent, Accessible Dental Care</h1>
              <p className="lede" style={{ color: 'rgba(246,239,227,.85)' }}>
                We believe everyone deserves quality dental care. We accept all major health funds, explain costs upfront, and work with you to make treatment accessible.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '32px' }}>
                <Link href="/booking" className="btn btn-primary">Book a Consultation</Link>
                <a href="tel:+61395273678" className="btn btn-ghost">(03) 9527 3678</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="fees-grid">
            <div className="fees-col reveal">
              <span className="eyebrow">New Patients</span>
              <h2>Start Here</h2>
              <div className="offer-badge">
                <span className="price-big">$297</span>
                <span className="price-valued"> valued at $499</span>
                <p>Comprehensive exam + digital x-rays + scale &amp; clean</p>
                <Link href="/offer" className="btn btn-primary" style={{ marginTop: '16px', display: 'inline-flex' }}>
                  View New Patient Offer
                </Link>
              </div>
            </div>
            <div className="fees-col reveal" style={{ transitionDelay: '.1s' }}>
              <span className="eyebrow">Health Funds</span>
              <h2>We Accept All Major Funds</h2>
              <p>We are a preferred provider for several major health funds and accept all registered Australian extras insurers. Bring your card to every appointment — we process your claim on the spot via HICAPS.</p>
              <div className="fund-logos">
                {funds.map(f => (
                  <span key={f} className="fund-tag">{f}</span>
                ))}
              </div>
            </div>
            <div className="fees-col reveal" style={{ transitionDelay: '.2s' }}>
              <span className="eyebrow">Payment Options</span>
              <h2>Flexible Ways to Pay</h2>
              <ul className="check-list">
                <li>EFTPOS, Visa, Mastercard, AMEX</li>
                <li>HICAPS on-the-spot health fund claims</li>
                <li>ZIP Pay available (ask at reception)</li>
                <li>Superannuation early release for eligible patients</li>
                <li>DVA Gold Card accepted</li>
              </ul>
              <Link href="/super" style={{ fontSize: '14px', marginTop: '12px', display: 'inline-block', color: 'var(--teal-700)' }}>
                Learn about using your super for dental →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-warm)' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="section-head reveal">
            <span className="eyebrow">Common Questions</span>
            <h2>About Fees & Funding</h2>
          </div>
          <div className="faq-list reveal" style={{ transitionDelay: '.1s' }}>
            {[
              { q: 'Do you do gap-free dental appointments?', a: 'Gap-free options may be available for eligible preventive services depending on your health fund level of cover and our preferred provider status. Call us or ask at reception to check whether a gap-free option applies to you.' },
              { q: 'How much does a check-up and clean cost?', a: 'Our new patient offer provides a comprehensive exam, digital x-rays and scale & clean for $297 (valued at $499). For existing patients, fees vary depending on services required and are always discussed before treatment.' },
              { q: 'Can I see a fee estimate before my appointment?', a: 'Yes — once you\'ve had a clinical consultation and we know what treatment is needed, we provide a written fee estimate. We do not proceed with treatment without your informed consent and awareness of costs.' },
              { q: 'Do you accept Medicare?', a: 'We accept the Child Dental Benefits Schedule (CDBS), which provides eligible children aged 2–17 with up to $1,095 in benefits for basic dental services over a two-year period. Ask at reception if your child may be eligible.' },
            ].map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <GetInTouch variant="fees" id="contact" />
    </main>
  )
}
