import Link from 'next/link'
import CallbackForm from '@/components/CallbackForm'
import Photo from '@/components/Photo'
import MapEmbed from '@/components/MapEmbed'
import { business, localityLine, streetAddress, telHref } from '@/lib/business'

export default function ContactPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="container hero-v2-grid">
          <div className="reveal">
            <div className="eyebrow">Get in touch</div>
            <h1>We&apos;d love to <em>see you</em></h1>
            <p className="lead">Call us, book online, or leave your details and we&apos;ll call you back. Whatever&apos;s easiest, we&apos;ll make it simple.</p>
            <div className="hero-cta">
              <Link href="/online-booking" className="btn">Book online</Link>
              <a href={telHref} className="btn btn-ghost">Call {business.telephoneDisplay}</a>
            </div>
          </div>
          <Photo
            tall
            className="reveal"
            src="/assets/contact/contact.webp"
            alt="Dentist taking a selfie with a smiling patient in the clinic"
            hint="Warm, real photo of reception or the team welcoming a patient."
            sizes="(max-width: 860px) 100vw, 48vw"
            priority
          />
        </div>
      </section>

      {/* ── CONTACT DETAILS ──────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="contact-detail-grid reveal">
            <div className="svc">
              <h4>Call us</h4>
              <p>
                <a href={telHref} style={{ color: 'var(--sage-deep)', fontWeight: 600 }}>
                  {business.telephoneDisplay}
                </a>
              </p>
              <p>The fastest way to reach reception.</p>
            </div>
            <div className="svc">
              <h4>Visit us</h4>
              <p>
                {streetAddress},<br />
                {localityLine}<br />
                (corner of Orrong Road)
              </p>
            </div>
            <div className="svc">
              <h4>Opening hours</h4>
              <p>
                Mon&ndash;Thu: 8.30am&ndash;6.00pm<br />
                Fri: 8.30am&ndash;5.00pm<br />
                Sat: 10.00am&ndash;4.00pm<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIND US ──────────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <MapEmbed
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.5228534697304!2d145.00524827655942!3d-37.868064671969994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66a929a98bdf1%3A0xbda0fc5ba1f8b78a!2s364%20Dandenong%20Rd%2C%20St%20Kilda%20East%20VIC%203183!5e0!3m2!1sen!2sau!4v1749340000000!5m2!1sen!2sau"
            title={`${business.name} — ${streetAddress}`}
            style={{ height: '380px', borderRadius: '18px' }}
          />
          <div className="reveal" style={{ maxWidth: '48em', margin: '22px auto 0', textAlign: 'center' }}>
            <p style={{ fontSize: '17px' }}>
              We&apos;re on Dandenong Road at the corner of Orrong Road, with free off-street parking off Orrong Road. Trams 5 and 64 stop along Dandenong Road, and Balaclava Station on the Sandringham line is a short walk away.
            </p>
            <div style={{ marginTop: '14px' }}>
              <Link href="/areas-we-serve" className="btn btn-ghost">See areas we serve</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL ME BACK ─────────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="sec-head center reveal">
            <div className="eyebrow">Prefer we call you?</div>
            <h2>Leave your details</h2>
          </div>
          <div className="reveal">
            <CallbackForm
              showBestTime
              showMessage
              submitLabel="Request a callback"
              note={
                <p style={{ fontSize: '13px', color: 'var(--ink-faint)', textAlign: 'center', margin: 0 }}>
                  We&apos;ll call during opening hours. For a dental emergency, please{' '}
                  <a href={telHref} style={{ color: 'var(--sage-deep)' }}>call us straight away</a>.
                </p>
              }
            />
          </div>
        </div>
      </section>
    </main>
  )
}
