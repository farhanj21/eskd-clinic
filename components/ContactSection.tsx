'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-grid">

          {/* Left column: heading + contact info + map */}
          <div className="contact-left">
            <div className="section-head left reveal">
              <span className="eyebrow">We&apos;d Love To Hear From You</span>
              <h2>Ready to feel at home<br />at your dentist?</h2>
              <p className="lede">Call or book online. We'll be in touch within one business day.</p>
            </div>

            <div className="contact-info reveal">
              <div className="info-item">
                <div className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4>Call the clinic</h4>
                  <p>
                    <a href="tel:+61395273678">(03) 9527 3678</a>
                    <br />
                    <span style={{color:'rgba(246,239,227,.6)',fontSize:'14px'}}>Same-day emergency lines available</span>
                  </p>
                </div>
              </div>
              {/* <div className="info-item">
                <div className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Visit us</h4>
                  <p>
                    364 Dandenong Road<br />
                    East St Kilda VIC 3183<br />
                    <span style={{color:'rgba(246,239,227,.6)',fontSize:'14px'}}>Off-street parking via Orrong Road · Tram 5, 64 · Bus 220</span>
                  </p>
                </div>
              </div> */}
              <div className="info-item">
                <div className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4>Opening hours</h4>
                  <p>
                    Mon – Thu &nbsp; 8:30am – 4:00pm<br />
                    Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8:30am – 4:30pm<br />
                    Saturday &nbsp;&nbsp;&nbsp; Monthly · by appointment
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="ico" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:hello@eaststkildadental.com.au">hello@eaststkildadental.com.au</a></p>
                </div>
              </div>
            </div>

            <div className="map-wrap reveal">
              <div className="map-pin">
                <b>East St Kilda Dental</b>
                <span>364 Dandenong Rd · VIC 3183</span>
              </div>
            </div>
          </div>

          {/* Right column: sticky form */}
          <form className="form reveal contact-form-sticky" style={{transitionDelay:'.1s'}} onSubmit={handleSubmit}>
            <h3>Book or enquire</h3>
            <p className="sub">Please share a few details and we'll be in touch shortly.</p>

            <div className="form-radios" style={{marginBottom:'18px'}}>
              <label><input type="radio" name="patient" defaultChecked /><span>New Patient</span></label>
              <label><input type="radio" name="patient" /><span>Existing Patient</span></label>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="f-first">First name</label>
                <input type="text" id="f-first" placeholder="Jane" required />
              </div>
              <div className="field">
                <label htmlFor="f-last">Last name</label>
                <input type="text" id="f-last" placeholder="Doe" required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-email">Email</label>
                <input type="email" id="f-email" placeholder="jane@email.com" required />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Phone</label>
                <input type="tel" id="f-phone" placeholder="0400 000 000" required />
              </div>
            </div>
            <div className="form-row single">
              <div className="field">
                <label htmlFor="f-reason">I&apos;d like to</label>
                <select id="f-reason">
                  <option>Book an appointment</option>
                  <option>Ask about a treatment</option>
                  <option>Emergency — same day</option>
                  <option>Cosmetic consultation</option>
                </select>
              </div>
            </div>
            <div className="form-row single">
              <div className="field">
                <label htmlFor="f-message">How can we help?</label>
                <textarea id="f-message" placeholder="Tell us a bit about what brings you in…"></textarea>
              </div>
            </div>
            <div className="submit-row">
              <button className="btn btn-gold" type="submit">
                {submitted
                  ? "Message sent — we'll be in touch soon."
                  : (
                    <>
                      Send Enquiry
                      <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </>
                  )
                }
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
