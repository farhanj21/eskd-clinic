import type { Metadata } from 'next'
import Link from 'next/link'
import CallbackForm from '@/components/CallbackForm'
import Photo from '@/components/Photo'
import { withSocial } from '@/lib/seo'
import { business, telHref } from '@/lib/business'

export const metadata: Metadata = withSocial({
  title: 'New Patient Comprehensive Care Visit | East St Kilda Dental',
  description:
    'New to East St Kilda Dental? The New Patient Comprehensive Care Visit is a thorough, gentle 60–75 minute appointment. Everything included. Book online.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/new-patient-comprehensive-care-visit' },
})

export default function OfferPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal hero-fit">
            <div className="eyebrow">New Patient Comprehensive Care Visit</div>
            <h1>More than a <em>check-up</em></h1>
            <p>Most first dental visits are built around finding problems. Ours is designed to help you understand what matters, what can wait, what your options are, and what you actually want to do next.</p>
            <p>You&apos;ll have 60&ndash;75 minutes with your dentist for a thorough assessment, discussion and personalised plan — so you leave knowing where your teeth stand and what makes sense from here.</p>
            <div className="hero-cta">
              <Link href="/online-booking" className="btn">Book your new patient visit</Link>
              <Link href="#offer-callback" className="btn btn-ghost">Request a call back</Link>
            </div>
            <div className="hero-proof">
              <span><span className="proof-stars">★★★★★</span> 5.0 on Google</span>
              <span className="proof-dot" />
              <span>Caring for St Kilda East and suburbs since 1980</span>
            </div>
          </div>
          <Photo
            tall
            className="reveal"
            priority
            src="/assets/comprehensive-care-visit/comprehensive-care-1.webp"
            alt="A smiling clinician demonstrating brushing on a dental model for a seated patient"
            sizes="(max-width: 860px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ── WHY START HERE ────────────────────────
          The four things a first-time patient actually arrives worried about,
          in the order they arrive in. Reuses .pillars from the home page
          rather than introducing another card style. */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">What to expect</div>
            <h2>Why patients choose to <em>start here</em></h2>
          </div>
          <div className="pillars">
            <div className="pillar reveal">
              <div className="n">01</div>
              <h3>You won&apos;t be rushed</h3>
              <p>We allow time to properly understand your teeth, gums, concerns and goals — not squeeze you through a quick examination.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">02</div>
              <h3>You&apos;ll know what actually needs attention</h3>
              <p>We&apos;ll separate what is urgent, what should be monitored, and what is optional — so everything doesn&apos;t feel like it needs to be done at once.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">03</div>
              <h3>You stay in control</h3>
              <p>We explain what we see, your options and our recommendations. Then you decide what happens next.</p>
            </div>
            <div className="pillar reveal">
              <div className="n">04</div>
              <h3>Haven&apos;t been in years?</h3>
              <p>You won&apos;t be judged. Many of our patients come to us after avoiding the dentist for a long time. We simply start with where you are today.</p>
            </div>
          </div>
          <p className="pathlink reveal" style={{ textAlign: 'center' }}>
            Want to know who you&apos;ll be seeing?{' '}
            <Link href="/about/our-team">Meet our dentists</Link>.
          </p>
        </div>
      </section>

      {/* ── ONE COMPREHENSIVE FIRST VISIT ────────────── */}
      <section className="sec alt">
        <div className="container reveal">
          <div className="offer-card-v2">
            <div className="body">
              <div className="eyebrow">One comprehensive first visit</div>
              <h2>Your first visit <em>may include</em></h2>
              {/* "May include", not "includes": what actually happens on the
                  day is a clinical judgement, and this list is written to say
                  so. Do not tighten it back into a promise. */}
              <ul className="offer-includes">
                <li>Comprehensive dental examination</li>
                <li>Necessary diagnostic X-rays</li>
                <li>Gum and periodontal assessment</li>
                <li>Oral cancer screening</li>
                <li>Professional clean where clinically appropriate</li>
                <li>Discussion of any pain, concerns or cosmetic goals</li>
                <li>A clear, prioritised care plan</li>
                <li>Time to ask questions and understand your options</li>
              </ul>
              <p style={{ marginTop: '20px', fontWeight: 600 }}>No pressure to commit to treatment on the day.</p>
              <p className="pathlink">
                Already a patient and just due?{' '}
                <Link href="/services/check-ups">Check-ups and professional cleans</Link>.
              </p>
              <Link href="/online-booking" className="btn" style={{ marginTop: '18px', display: 'inline-flex' }}>Book your new patient visit</Link>
              <p style={{ fontSize: '12px', marginTop: '14px', color: 'var(--ink-faint)' }}>
                If you have eligible extras cover, we can process your claim on the day through HICAPS. Your out-of-pocket amount depends on your fund and level of cover.
              </p>
              <p className="pathlink" style={{ marginTop: '8px' }}>
                <Link href="/fees">See fees and health fund information</Link>.
              </p>
            </div>
            <Photo
              src="/assets/comprehensive-care-visit/comprehensive-care-2.webp"
              alt="A dentist and patient reviewing a dental X-ray together on screen during a consultation"
              sizes="(max-width: 820px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── YOU'RE WELCOME HERE ───────────────────────────── */}
      <section className="sec sage-bg">
        <div className="container">
          <div className="sec-head center reveal welcome-fit">
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
          <p className="pathlink reveal" style={{ textAlign: 'center' }}>
            More on{' '}
            <Link href="/nervous-patients">gentle care for nervous patients</Link>.
          </p>
        </div>
      </section>

      {/* ── IN OUR PATIENTS' WORDS ────────────────────────
          Verbatim excerpts from the practice's Google reviews, chosen for the
          three things a first-time patient is actually weighing: coming back
          after a long gap, gentleness, and being properly explained to.

          Testimonials on this site are an explicit decision by the practice —
          see the note on the home page reviews block. Quotes are trimmed but
          never reworded, and there is still no Review or aggregateRating
          markup anywhere. */}
      <section className="sec">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">In our patients&apos; words</div>
            <h2>What your first visit <em>feels like</em></h2>
          </div>
          <div className="reviews-v2">
            <div className="review-card reveal">
              <div className="review-stars">★★★★★</div>
              <p>I had been quite naughty and hadn&apos;t been to the dentist for a while, Dr. Anbar explained every step, and why we were doing each. I was made to feel comfortable&hellip;</p>
              <div className="who">Sequana Mallinson &middot; Google review</div>
            </div>
            <div className="review-card reveal">
              <div className="review-stars">★★★★★</div>
              <p>Dr Anbar is the most gentle, caring dentist I have been to. Extremely knowledgeable and explained everything very well with my yearly check up.</p>
              <div className="who">Michael Stride &middot; Google review</div>
            </div>
            <div className="review-card reveal">
              <div className="review-stars">★★★★★</div>
              <p>Dr Anbar has been amazing and really invested the time to understand my teeth issues. Overall it’s been a great experience.</p>
              <div className="who">Ehsan Alvi &middot; Google review</div>
            </div>
          </div>
          <div className="gscore reveal">
            Rated <b>5.0 on Google</b> by our local patients &middot;{' '}
            <a href="https://share.google/M1ZtOT5z13fj2mhWf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sage-deep)', fontWeight: 600 }}>
              Read all reviews
            </a>
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
              <Link href="/online-booking" className="btn">Book online now</Link>
            </div>
            <div>
              <h4 style={{ marginBottom: '8px', fontFamily: 'var(--display)', fontSize: '22px' }}>Prefer we call you?</h4>
              <p style={{ fontSize: '15px', marginBottom: '16px' }}>Leave your name and number and our friendly team will call you back to find a time. No commitment.</p>
              <CallbackForm
                className="form"
                namePlaceholder="First name"
                showEmail
              />
              <p style={{ fontSize: '13px', marginTop: '10px', color: 'var(--ink-faint)' }}>
                Or call us on{' '}
                <a href={telHref} style={{ color: 'var(--sage-deep)', fontWeight: 600 }}>{business.telephoneDisplay}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED LOCALLY ──────────────────────────────── */}
      <section className="sec">
        <div className="container reveal">
          <p style={{ textAlign: 'center', maxWidth: '40em', marginLeft: 'auto', marginRight: 'auto' }}>
            Caring for St Kilda East since around 1980, with a gentle team you&apos;ll get to know. We welcome patients from all major health funds and can process eligible claims on the spot through HICAPS.
          </p>
        </div>
      </section>

    </main>
  )
}
