'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'

const countries = [
  { iso: 'au', code: '+61', name: 'Australia' },
  { iso: 'nz', code: '+64', name: 'New Zealand' },
]

export default function FloatBookButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [countryOpen, setCountryOpen] = useState(false)
  const [selected, setSelected] = useState(countries[0])
  const [mounted, setMounted] = useState(false)

  const triggerRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const countryRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setCountryOpen(false)
    setTimeout(() => triggerRef.current?.focus(), 0)
  }, [])

  // Escape + Tab focus trap + scroll lock
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { close(); return }
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
          'button,input,select,textarea,[tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || !focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    setTimeout(() => modalRef.current?.querySelector<HTMLElement>('input')?.focus(), 60)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, close])

  // Click-outside country dropdown
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false)
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  const modal = (
    <div
      className="modal-overlay"
      role="presentation"
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Book or enquire"
        ref={modalRef}
      >
        <button className="modal-close" onClick={close} aria-label="Close dialog">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-greeting">
          <div className="modal-avatar">A</div>
          <div>
            <p className="modal-greeting-name">Anbar</p>
            <p className="modal-greeting-text">
              Hi, Anbar here from East St Kilda. Enter your details and I will be in touch. Speak soon!
            </p>
          </div>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="m-first">First name</label>
              <input type="text" id="m-first" placeholder="First name" required />
            </div>
            <div className="field">
              <label htmlFor="m-last">Last name</label>
              <input type="text" id="m-last" placeholder="Last name" required />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="m-email">Email</label>
              <input type="email" id="m-email" placeholder="Email address" required />
            </div>
            <div className="field">
              <label htmlFor="m-phone">Phone</label>
              <div className="phone-wrap modal-phone-wrap">
                <div className="phone-country" ref={countryRef}>
                  <button
                    type="button"
                    className="phone-country-btn"
                    aria-haspopup="listbox"
                    aria-expanded={countryOpen}
                    onClick={() => setCountryOpen(o => !o)}
                  >
                    <img
                      src={`https://flagcdn.com/20x15/${selected.iso}.png`}
                      width="20" height="15"
                      alt={selected.name}
                      className="phone-flag"
                    />
                    <span className="phone-code-text">{selected.code}</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {countryOpen && (
                    <ul className="phone-dropdown" role="listbox">
                      {countries.map(c => (
                        <li
                          key={c.code}
                          role="option"
                          aria-selected={c.code === selected.code}
                          className={`phone-option${c.code === selected.code ? ' active' : ''}`}
                          onClick={() => { setSelected(c); setCountryOpen(false) }}
                        >
                          <img src={`https://flagcdn.com/20x15/${c.iso}.png`} width="20" height="15" alt={c.name} />
                          <span>{c.name}</span>
                          <span className="phone-option-code">{c.code}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <input
                  className="phone-input"
                  type="tel"
                  id="m-phone"
                  placeholder="Phone number"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-row single">
            <div className="field">
              <label htmlFor="m-reason">I&apos;d like to</label>
              <select id="m-reason">
                <option>General Consultation</option>
                <option>Smile Design Consultation</option>
                <option>Implant</option>
                <option>Aligners</option>
                <option>Whitening</option>
                <option>Wisdom Teeth</option>
                <option>Porcelain and Composite Veneers</option>
                <option>Gum Contouring</option>
                <option>Sedation</option>
              </select>
            </div>
          </div>
          <div className="form-row single">
            <div className="field">
              <label htmlFor="m-message">How can we help?</label>
              <textarea id="m-message" placeholder="Any additional details or questions…"></textarea>
            </div>
          </div>
          <div className="submit-row">
            <button className="btn btn-gold modal-submit" type="submit">
              {submitted ? "Message sent — we'll be in touch soon." : (
                <>
                  Send Enquiry
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  return (
    <>
      <button
        ref={triggerRef}
        className="btn btn-gold float-book"
        aria-label="Chat and book appointment"
        onClick={() => { setIsOpen(true); setSubmitted(false) }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className="float-label">Book Appointment</span>
      </button>
      {mounted && isOpen && createPortal(modal, document.body)}
    </>
  )
}
