'use client'

import { useState } from 'react'
import { getInTouchCopy, type GetInTouchVariant } from '@/data/getintouch'

interface GetInTouchProps {
  variant?: GetInTouchVariant
  id?: string
}

export default function GetInTouch({ variant = 'default', id = 'contact' }: GetInTouchProps) {
  const copy = getInTouchCopy[variant]
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="sec getintouch-wrap" id={id}>
      <div className="container">
        <div className="gt-grid">
          <div className="gt-info">
            <div className="gt-eyebrow">Get in touch</div>
            <h2 className="gt-lead">{copy.cta}</h2>
            <p className="gt-sub">{copy.sub}</p>
            <div className="gt-detail">
              <p><a href="tel:+61395273678">(03) 9527 3678</a></p>
              <p><a href="mailto:hello@eaststkildadental.com.au">hello@eaststkildadental.com.au</a></p>
            </div>
            <div className="gt-hours">
              <div><span>Mon &ndash; Thu</span><b>8.30am &ndash; 4.00pm</b></div>
              <div><span>Friday</span><b>8.30am &ndash; 4.30pm</b></div>
              <div><span>Saturday (monthly)</span><b>8.00am &ndash; 4.00pm</b></div>
              <div><span>Sunday</span><b>Closed</b></div>
            </div>
            <p className="gt-area">364 Dandenong Rd, East St Kilda VIC 3183</p>
          </div>

          <div className="gt-form-panel">
            {submitted ? (
              <div style={{ padding: '40px 0', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--sage-deep)' }}>Message sent</h3>
                <p>Thanks — we&apos;ll be in touch within one business day.<br />Prefer to call? <a href="tel:+61395273678">(03) 9527 3678</a></p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="gt-row2">
                  <div className="gt-seg">
                    <p className="gt-label">I&apos;m a&hellip;</p>
                    <label><input type="radio" name="patienttype" value="new" defaultChecked /> New patient</label>
                    <label><input type="radio" name="patienttype" value="returning" /> Returning</label>
                  </div>
                  <div className="gt-seg">
                    <p className="gt-label">I&apos;d like to&hellip;</p>
                    <label><input type="radio" name="intent" value="enquire" defaultChecked /> Make an enquiry</label>
                    <label><input type="radio" name="intent" value="book" /> Book a visit</label>
                  </div>
                </div>

                <div className="gt-treat">
                  <p className="gt-label">I&apos;m interested in&hellip;</p>
                  <label><input type="checkbox" name="treat" value="checkup" /> Check-up &amp; clean</label>
                  <label><input type="checkbox" name="treat" value="cosmetic" /> Cosmetic</label>
                  <label><input type="checkbox" name="treat" value="whitening" /> Teeth whitening</label>
                  <label><input type="checkbox" name="treat" value="implants" /> Implants</label>
                  <label><input type="checkbox" name="treat" value="crowns" /> Crowns &amp; root canal</label>
                  <label><input type="checkbox" name="treat" value="ortho" /> Orthodontics</label>
                  <label><input type="checkbox" name="treat" value="kids" /> Children&apos;s dentistry</label>
                  <label><input type="checkbox" name="treat" value="emergency" /> Emergency</label>
                  <label><input type="checkbox" name="treat" value="notsure" /> Not sure yet</label>
                </div>

                <div className="gt-row2">
                  <div>
                    <label className="gt-label" htmlFor="gt-fn">First name</label>
                    <input id="gt-fn" type="text" placeholder="First name" required />
                  </div>
                  <div>
                    <label className="gt-label" htmlFor="gt-ln">Last name</label>
                    <input id="gt-ln" type="text" placeholder="Last name" required />
                  </div>
                </div>

                <div className="gt-row2">
                  <div>
                    <label className="gt-label" htmlFor="gt-em">Email</label>
                    <input id="gt-em" type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="gt-label" htmlFor="gt-ph">Phone</label>
                    <input id="gt-ph" type="tel" placeholder="(03) 9527 3678" />
                  </div>
                </div>

                <div>
                  <label className="gt-label" htmlFor="gt-msg">How can we help?</label>
                  <textarea id="gt-msg" rows={4} placeholder="Tell us a little about what you need." />
                </div>

                <p className="gt-finehint">
                  We respond to all enquiries within one business day. Prefer to call?{' '}
                  <a href="tel:+61395273678">(03) 9527 3678</a>
                </p>

                <button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center', marginTop: '4px' }}>
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
