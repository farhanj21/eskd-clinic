import type { Metadata } from 'next'
import Link from 'next/link'
import GetInTouch from '@/components/GetInTouch'
import Photo from '@/components/Photo'
import { withSocial } from '@/lib/seo'

export const metadata: Metadata = withSocial({
  title: 'The Comprehensive Care Visit — $297 (valued at $499) | East St Kilda Dental',
  description:
    'New to East St Kilda Dental? The Comprehensive Care Visit is a thorough, gentle 60–75 minute appointment for $297 (valued at $499). Everything included. Book online.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/comprehensive-care-visit' },
})

export default function OfferPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">New patients welcome</div>
            <h1>Finally know exactly where your teeth <em>stand</em></h1>
            <p className="lead">The Comprehensive Care Visit is a thorough, gentle 60 to 75 minute appointment, with no judgement and no rush. You leave with a clear, prioritised care plan you choose at your own pace.</p>
            <div className="hero-cta">
              <Link href="/book" className="btn">Book online</Link>
              <Link href="#offer-callback" className="btn btn-ghost">Request a callback</Link>
            </div>
            <div className="hero-proof">
              <span><span className="proof-stars">★★★★★</span> 5.0 on Google</span>
              <span className="proof-dot" />
              <span>Caring for the area since 1980</span>
              <span className="proof-dot" />
              <span>All health funds accepted</span>
            </div>
            <p style={{ marginTop: '18px', fontSize: '20px' }}>
              <b>$297</b> all included{' '}
              <span style={{ color: 'var(--ink-faint)', fontSize: '15px' }}>&middot; valued at $499</span>
            </p>
          </div>
          <Photo
            tall
            className="reveal"
            src="/assets/incoming/see-our-fees-1.webp"
            alt="A smiling clinician demonstrating brushing on a dental model for a seated patient"
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ──────────────────────────────── */}
      <section className="sec alt">
        <div className="container reveal">
          <div className="offer-card-v2">
            <div className="body">
              <div className="eyebrow">Everything in one visit</div>
              <h2>What your <em>$297</em> includes</h2>
              <p>Not a quick clean and out the door. A complete look at your whole mouth and where things are heading, covering your health, function, longevity, aesthetics and prevention. Your visit includes:</p>
              <ul className="offer-includes">
                <li>Comprehensive dental examination</li>
                <li>Full medical and dental history review</li>
                <li>Digital X-rays and intraoral photos</li>
                <li>Oral cancer screening</li>
                <li>Gum and periodontal assessment</li>
                <li>Full scale, clean and polish</li>
                <li>Fluoride treatment</li>
                <li>Smile and bite assessment</li>
                <li>Your personalised dental care plan</li>
              </ul>
              <div className="offer-meta">
                <div><b>60&ndash;75 min</b>gentle and thorough</div>
                <div><b>$297</b>everything above, one price</div>
                <div><b>A care plan</b>clear and easy to follow</div>
              </div>
              <p style={{ marginTop: '14px', marginBottom: 0, fontSize: '14.5px' }}>
                Valued at <b>$499</b>. With us, it&apos;s one simple price of <b>$297</b>.
              </p>
              <Link href="/book" className="btn" style={{ marginTop: '22px', display: 'inline-flex' }}>Book online</Link>
              <p style={{ fontSize: '12px', marginTop: '14px', color: 'var(--ink-faint)' }}>
                $297, everything above included. With most health funds, you claim on the day and pay only a minimal gap. Your exact gap depends on your level of cover.
              </p>
            </div>
            <Photo
              src="/assets/incoming/see-our-fees-2.webp"
              alt="A dentist and patient reviewing a dental X-ray together on screen during a consultation"
              sizes="(max-width: 820px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── YOU'RE WELCOME HERE ───────────────────────────── */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">However long it&apos;s been</div>
            <h2>Put it off for years? You&apos;re exactly who we&apos;re <em>best</em> with</h2>
            <p style={{ marginTop: '16px', fontSize: '18px' }}>
              No lectures, no judgement. Tell us you&apos;re anxious and we go entirely at your pace, with happy gas and gentle, unhurried care. You can stop any time.
            </p>
          </div>
          <div className="chips reveal" style={{ justifyContent: 'center' }}>
            <span className="chip">No judgement, ever</span>
            <span className="chip">Happy gas available</span>
            <span className="chip">Calm, unhurried pacing</span>
            <span className="chip">Stop any time</span>
          </div>
        </div>
      </section>

      {/* ── TWO WAYS TO BOOK ─────────────────────────────── */}
      <section className="sec alt" id="offer-callback">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Whatever feels easier</div>
            <h2>Two easy ways to book your visit</h2>
          </div>
          <div className="booking-cols reveal">
            <div>
              <h4 style={{ marginBottom: '8px', fontFamily: 'var(--display)', fontSize: '22px' }}>Book online</h4>
              <p style={{ fontSize: '15px', marginBottom: '16px' }}>Pick a time that suits you in under a minute through our secure online booking system.</p>
              <Link href="/book" className="btn">Book online now</Link>
            </div>
            <div>
              <h4 style={{ marginBottom: '8px', fontFamily: 'var(--display)', fontSize: '22px' }}>Prefer we call you?</h4>
              <p style={{ fontSize: '15px', marginBottom: '16px' }}>Leave your name and number and our friendly team will call you back to find a time. No commitment.</p>
              <div className="form">
                <input type="text" placeholder="First name" />
                <input type="tel" placeholder="Phone" />
                <input type="email" placeholder="Email (optional)" style={{ width: '100%' }} />
                <button className="btn" type="submit">Request my callback</button>
              </div>
              <p style={{ fontSize: '13px', marginTop: '10px', color: 'var(--ink-faint)' }}>
                Or call us on{' '}
                <a href="tel:+61395273678" style={{ color: 'var(--sage-deep)', fontWeight: 600 }}>(03) 9527 3678</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED LOCALLY ──────────────────────────────── */}
      <section className="sec">
        <div className="container reveal">
          <p className="gscore">
            Rated <b>5.0 on Google</b> by our local patients &middot;{' '}
            <a href="https://share.google/M1ZtOT5z13fj2mhWf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sage-deep)', fontWeight: 600 }}>
              Read all reviews
            </a>
          </p>
          <p style={{ textAlign: 'center', marginTop: '14px', maxWidth: '40em', marginLeft: 'auto', marginRight: 'auto' }}>
            Caring for East St Kilda since around 1980, with a gentle team you&apos;ll get to know. We accept all major health funds and claim on the spot.
          </p>
        </div>
      </section>

      <GetInTouch variant="offer" id="contact" />
    </main>
  )
}
