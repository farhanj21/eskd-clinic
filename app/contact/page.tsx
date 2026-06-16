'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

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
              <Link href="/book" className="btn">Book online</Link>
              <a href="tel:+61395273678" className="btn btn-ghost">Call (03) 9527 3678</a>
            </div>
          </div>
          <div className="ph tall reveal">
            <span>Warm, real photo of reception or the team welcoming a patient.</span>
          </div>
        </div>
      </section>

      {/* ── CONTACT DETAILS ──────────────────────────────── */}
      <section className="sec alt">
        <div className="container">
          <div className="contact-detail-grid reveal">
            <div className="svc">
              <h4>Call us</h4>
              <p>
                <a href="tel:+61395273678" style={{ color: 'var(--sage-deep)', fontWeight: 600 }}>
                  (03) 9527 3678
                </a>
              </p>
              <p>The fastest way to reach reception.</p>
            </div>
            <div className="svc">
              <h4>Visit us</h4>
              <p>
                364 Dandenong Road,<br />
                East St Kilda VIC 3183<br />
                (corner of Orrong Road)
              </p>
            </div>
            <div className="svc">
              <h4>Opening hours</h4>
              <p>
                Mon&ndash;Thu: 8.30am&ndash;4.00pm<br />
                Fri: 8.30am&ndash;4.30pm<br />
                Sat: 8.00am&ndash;4.00pm (monthly)<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIND US ──────────────────────────────────────── */}
      <section className="sec">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.5228534697304!2d145.00524827655942!3d-37.868064671969994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66a929a98bdf1%3A0xbda0fc5ba1f8b78a!2s364%20Dandenong%20Rd%2C%20St%20Kilda%20East%20VIC%203183!5e0!3m2!1sen!2sau!4v1749340000000!5m2!1sen!2sau"
            width="100%"
            height="380"
            style={{ border: 'none', display: 'block', borderRadius: '18px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="East St Kilda Dental — 364 Dandenong Road"
          />
          <div className="reveal" style={{ maxWidth: '48em', margin: '22px auto 0', textAlign: 'center' }}>
            <p style={{ fontSize: '17px' }}>
              We&apos;re on Dandenong Road at the corner of Orrong Road, with free off-street parking off Orrong Road. Trams 5 and 64 stop along Dandenong Road, and Balaclava Station on the Sandringham line is a short walk away.
            </p>
            <div style={{ marginTop: '14px' }}>
              <Link href="/areas-we-serve/east-st-kilda" className="btn btn-ghost">See areas we serve</Link>
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
            {submitted ? (
              <div style={{ maxWidth: '30em', margin: '0 auto', textAlign: 'center', padding: '32px 0' }}>
                <h3 style={{ color: 'var(--sage-deep)', fontFamily: 'var(--display)' }}>Thanks — we&apos;ll call you back</h3>
                <p>We&apos;ll be in touch during opening hours. For a dental emergency call us directly on{' '}
                  <a href="tel:+61395273678" style={{ color: 'var(--sage-deep)', fontWeight: 600 }}>(03) 9527 3678</a>.
                </p>
              </div>
            ) : (
              <form className="callback-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your name" aria-label="Your name" required />
                <input type="tel" placeholder="Phone number" aria-label="Phone number" required />
                <input type="text" placeholder="Best time to call" aria-label="Best time to call" />
                <textarea placeholder="Anything you'd like us to know (optional)" aria-label="Message" />
                <button className="btn" type="submit" style={{ justifyContent: 'center' }}>
                  Request a callback
                </button>
                <p style={{ fontSize: '13px', color: 'var(--ink-faint)', textAlign: 'center', margin: 0 }}>
                  We&apos;ll call during opening hours. For a dental emergency, please{' '}
                  <a href="tel:+61395273678" style={{ color: 'var(--sage-deep)' }}>call us straight away</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
