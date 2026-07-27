'use client'

import { useState } from 'react'
import { getInTouchCopy, type GetInTouchVariant } from '@/data/getintouch'
import { business, emailHref, fullAddress, telHref } from '@/lib/business'

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
    <section className="getintouch" id={id}>
      <div className="gt-grid">

        {/* ── LEFT: contact info ─────────────────────────── */}
        <div className="gt-info">
          <div className="gt-eyebrow">Get in touch</div>
          <h2>We&apos;re here whenever you&apos;re ready</h2>
          <p className="gt-sub">{copy.sub}</p>

          <div className="gt-detail">
            <span className="ic">&#9742;</span>
            <a href={telHref}>{business.telephoneDisplay}</a>
          </div>
          <div className="gt-detail">
            <span className="ic">&#9678;</span>
            <span>
              <strong className="gt-name">{business.name}</strong><br />
              {fullAddress}
            </span>
          </div>
          <div className="gt-detail">
            <span className="ic">&#9993;</span>
            <a href={emailHref}>{business.email}</a>
          </div>

          <div className="gt-hours">
            <h4>Opening hours</h4>
            <ul>
              <li><span>Mon &ndash; Thu</span><b>8.30am &ndash; 4.00pm</b></li>
              <li><span>Friday</span><b>8.30am &ndash; 4.30pm</b></li>
              <li><span>Saturday (monthly)</span><b>8.00am &ndash; 4.00pm</b></li>
              <li><span>Sunday</span><b>Closed</b></li>
            </ul>
          </div>

          <p className="gt-area">
            Caring for families on the corner of Dandenong Road since 1980, across Melbourne&apos;s inner south-east.
          </p>
        </div>

        {/* ── RIGHT: form ────────────────────────────────── */}
        <div className="gt-form">
          <div className="gt-eyebrow">Send us a message</div>
          <h2>{copy.cta}</h2>

          {submitted ? (
            <div style={{ padding: '40px 0', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--cream)' }}>Message sent</h3>
              <p>Thanks &mdash; we&apos;ll be in touch within one business day.<br />Prefer to call? <a href={telHref}>{business.telephoneDisplay}</a></p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="gt-row2">
                <div>
                  <span className="gt-label">I&apos;m a&hellip;</span>
                  <div className="gt-seg">
                    <label><input type="radio" name="patienttype" value="new" defaultChecked /> New patient</label>
                    <label><input type="radio" name="patienttype" value="returning" /> Returning</label>
                  </div>
                </div>
                <div>
                  <span className="gt-label">I&apos;d like to&hellip;</span>
                  <div className="gt-seg">
                    <label><input type="radio" name="intent" value="enquire" defaultChecked /> Make an enquiry</label>
                    <label><input type="radio" name="intent" value="book" /> Book a visit</label>
                  </div>
                </div>
              </div>

              <div className="gt-field">
                <span className="gt-label">I&apos;m interested in&hellip;</span>
                <div className="gt-treat">
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
                <a href={telHref}>{business.telephoneDisplay}</a>
              </p>

              <button type="submit" className="gt-btn">
                Send my message
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
