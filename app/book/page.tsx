import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import { withSocial } from '@/lib/seo'
import { business, fullAddress, telHref } from '@/lib/business'

export const metadata: Metadata = withSocial({
  title: 'Book an Appointment | East St Kilda Dental',
  description:
    'Book your dental appointment online at East St Kilda Dental. New patient offer available — comprehensive exam, x-rays and scale & clean for $297 (valued at $499).',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/book' },
})

export default function BookingPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Booking made simple</div>
          <h1>Book your visit, <em>whenever suits you.</em></h1>
          <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Choose a time online in under a minute, or call our friendly team. New, returning, nervous or in pain, you&apos;re welcome here.
          </p>
          <div className="hero-proof" style={{ justifyContent: 'center' }}>
            <span>$297 first visit, all included</span>
            <span className="proof-dot" />
            <span>Nervous patients welcome</span>
            <span className="proof-dot" />
            <span>Emergencies seen quickly</span>
          </div>
        </div>
      </section>

      {/* ── BOOK ONLINE ──────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Real-time availability</div>
            <h2>Pick a time that <em>works for you</em></h2>
          </div>
          <div className="embed-card reveal">
            <iframe
              className="embed-frame"
              src="https://www.centaurportal.com/d4w/org-1240/extended_search"
              title="Book an appointment at East St Kilda Dental"
              loading="lazy"
            />
          </div>
          <p className="reveal" style={{ textAlign: 'center', fontSize: '14px', color: 'var(--ink-faint)', marginTop: '16px' }}>
            If the booking form doesn&apos;t appear,{' '}
            <a
              href="https://www.centaurportal.com/d4w/org-1240/extended_search"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--clay-deep)', fontWeight: 600 }}
            >
              open it in a new tab
            </a>.
          </p>
        </div>
      </section>

      {/* ── OTHER WAYS TO BOOK ───────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="book-grid">
            <div className="book-col reveal">
              <div className="eyebrow">Prefer to talk?</div>
              <h3>Call our friendly team</h3>
              <p>Happy to help you find a time, answer a question, or sort an urgent appointment. Just say if you&apos;re nervous or it&apos;s been a while.</p>
              <a className="btn" href={telHref}>Call {business.telephoneDisplay}</a>
              <p style={{ fontSize: '14px', color: 'var(--ink-faint)', marginTop: '14px' }}>
                Mon&ndash;Thu 8.30am&ndash;4.00pm &middot; Fri 8.30am&ndash;4.30pm
              </p>
            </div>
            <div className="book-col reveal">
              <div className="eyebrow">Rather we called you?</div>
              <h3>Ask us to call you back</h3>
              <p>Leave your details and we&apos;ll call to find a time that suits.</p>
              <div className="book-form">
                <input type="text" placeholder="First name" />
                <input type="tel" placeholder="Phone" />
                <select className="full">
                  <option>I&apos;d like to&hellip; (new patient, nervous, emergency, general)</option>
                </select>
                <button className="btn" type="submit">Request my callback</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Before you book</div>
            <h2>A few quick answers</h2>
          </div>
          <div className="faq reveal">
            <details open>
              <summary>What does my first visit cost?</summary>
              <p>Your first visit is the Comprehensive Care Visit, a flat $297 with everything included. With most health funds you claim on the day and pay only a minimal gap. If you need further treatment, you&apos;ll get a written estimate before anything goes ahead.</p>
            </details>
            <details>
              <summary>I&apos;m nervous about booking. Can I note that?</summary>
              <p>Please do. When you book or call, just say you&apos;re anxious or it&apos;s been a while, and we&apos;ll set aside extra time and take it gently.</p>
            </details>
            <details>
              <summary>Do you have emergency appointments?</summary>
              <p>Yes. If you&apos;re in pain or have had an accident, call us and we&apos;ll do our best to see you quickly, often the same day.</p>
            </details>
            <details>
              <summary>I can&apos;t see a time that suits. What now?</summary>
              <p>Call us or request a callback above. We can often find a time that isn&apos;t shown online, including our monthly Saturday.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── HOURS & LOCATION ─────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="loc-grid">
            <div className="ph reveal" style={{ minHeight: '340px' }}>
              <span>Embedded Google Map &middot; {fullAddress}</span>
            </div>
            <div className="reveal">
              <p style={{ marginBottom: '6px' }}>
                <b style={{ color: 'var(--ink)' }}>{fullAddress}</b>
              </p>
              <p style={{ fontSize: '14.5px', marginBottom: '18px' }}>
                On the corner of Orrong Road, where East St Kilda, Windsor, Armadale and Caulfield meet. Off-street parking off Orrong Road &middot; Trams 5 &amp; 64 and bus 220 nearby &middot; Armadale station a 10&ndash;15 minute walk.
              </p>
              <ul className="hours">
                <li><span>Monday &ndash; Thursday</span><b>8.30am &ndash; 4.00pm</b></li>
                <li><span>Friday</span><b>8.30am &ndash; 4.30pm</b></li>
                <li><span>Saturday (monthly)</span><b>8.00am &ndash; 4.00pm</b></li>
                <li><span>Sunday</span><b>Closed</b></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch variant="default" id="contact" />
    </main>
  )
}
