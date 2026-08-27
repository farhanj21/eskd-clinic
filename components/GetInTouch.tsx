'use client'

import { useState } from 'react'
import { getInTouchCopy, type GetInTouchVariant } from '@/data/getintouch'
import { business, emailHref, fullAddress, telHref } from '@/lib/business'
import { TREATMENTS } from '@/lib/enquiry'

interface GetInTouchProps {
  variant?: GetInTouchVariant
  id?: string
}

export default function GetInTouch({ variant = 'default', id = 'contact' }: GetInTouchProps) {
  const copy = getInTouchCopy[variant]
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  /** Kept so the confirmation can greet them by name. */
  const [sentName, setSentName] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return

    const form = e.currentTarget
    const fd = new FormData(form)
    setSending(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patienttype: fd.get('patienttype'),
          intent: fd.get('intent'),
          treatments: fd.getAll('treat'),
          firstName: fd.get('firstName'),
          lastName: fd.get('lastName'),
          email: fd.get('email'),
          phone: fd.get('phone'),
          message: fd.get('message'),
          company: fd.get('company'),
          source: window.location.pathname,
        }),
      })

      const data = await res.json().catch(() => null)

      if (!res.ok) {
        setError(data?.error ?? 'We could not send your message. Please try again, or call us.')
        return
      }

      setSentName(String(fd.get('firstName') ?? '').trim())
      form.reset()
      setSubmitted(true)
    } catch {
      setError('Something went wrong sending your message. Please check your connection, or call us.')
    } finally {
      setSending(false)
    }
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
              <li><span>Mon &ndash; Thu</span><b>8.30am &ndash; 6.00pm</b></li>
              <li><span>Friday</span><b>8.30am &ndash; 5.00pm</b></li>
              <li><span>Saturday</span><b>10.00am &ndash; 4.00pm</b></li>
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
            /* role="status" so a screen reader announces the confirmation —
               the form it replaced is gone, so nothing else would say it. */
            <div className="gt-done" role="status">
              <div className="gt-done-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>

              <h3>Message sent</h3>
              <p>
                {sentName ? `Thanks ${sentName} — your` : 'Thanks — your'} message is with our
                front desk, and one of the team will get back to you personally.
              </p>

              <ul className="gt-done-next">
                <li>
                  <span className="ic" aria-hidden="true">&#9678;</span>
                  <span>We reply to every enquiry within one business day, usually sooner.</span>
                </li>
                <li>
                  <span className="ic" aria-hidden="true">&#9993;</span>
                  <span>Our reply comes from {business.email} &mdash; worth a look in junk if it hasn&apos;t landed.</span>
                </li>
                <li>
                  <span className="ic" aria-hidden="true">&#9742;</span>
                  <span>In pain or it&apos;s urgent? Call us and we&apos;ll do our best to see you today.</span>
                </li>
              </ul>

              <div className="gt-done-actions">
                <a href={telHref} className="gt-done-call">
                  Call {business.telephoneDisplay}
                </a>
                <button
                  type="button"
                  className="gt-done-again"
                  onClick={() => { setSubmitted(false); setSentName('') }}
                >
                  Send another message
                </button>
              </div>
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
                  {TREATMENTS.map(t => (
                    <label key={t.value}>
                      <input type="checkbox" name="treat" value={t.value} /> {t.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="gt-row2">
                <div>
                  <label className="gt-label" htmlFor="gt-fn">First name</label>
                  <input id="gt-fn" name="firstName" type="text" autoComplete="given-name" placeholder="First name" required />
                </div>
                <div>
                  <label className="gt-label" htmlFor="gt-ln">Last name</label>
                  <input id="gt-ln" name="lastName" type="text" autoComplete="family-name" placeholder="Last name" required />
                </div>
              </div>

              <div className="gt-row2">
                <div>
                  <label className="gt-label" htmlFor="gt-em">Email</label>
                  <input id="gt-em" name="email" type="email" autoComplete="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="gt-label" htmlFor="gt-ph">Phone</label>
                  <input id="gt-ph" name="phone" type="tel" autoComplete="tel" placeholder="(03) 9527 3678" />
                </div>
              </div>

              <div>
                <label className="gt-label" htmlFor="gt-msg">How can we help?</label>
                <textarea id="gt-msg" name="message" rows={4} placeholder="Tell us a little about what you need." />
              </div>

              {/* Honeypot: hidden from people, catnip for bots. */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                <label htmlFor="gt-company">Company</label>
                <input id="gt-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {error && (
                <p role="alert" style={{ color: '#ffb4a2', fontSize: '14px', marginTop: '14px' }}>
                  {error}
                </p>
              )}

              <p className="gt-finehint">
                We respond to all enquiries within one business day. Prefer to call?{' '}
                <a href={telHref}>{business.telephoneDisplay}</a>
              </p>

              <button type="submit" className="gt-btn" disabled={sending} aria-busy={sending}>
                {sending ? 'Sending…' : 'Send my message'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
