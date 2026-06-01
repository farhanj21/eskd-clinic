'use client'

import { useState, useEffect } from 'react'

const slides = [
  { img: '/assets/Hero Eddy  white.png' },
  { img: '/assets/Hero AG White.png' },
]

export default function HeroAlt() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero hero-alt" aria-label="Hero">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-slide${i === active ? ' active' : ''}`}
          style={{ backgroundImage: `url('${s.img}')` }}
          aria-hidden="true"
        />
      ))}

      <div className="hero-badges" aria-hidden="true">
        <div className="hero-badge" style={{background:'rgba(246,239,227)'}}><span style={{color:'var(--teal-800)', fontWeight:700}}>EST.</span><span className="n">1984</span></div>
      </div>

      <div className="container container-wide hero-grid">
        <div>
          <span className="eyebrow reveal" style={{transitionDelay:'.05s', color:'var(--gold)'}}>Your Local Dental Home · Since 1984</span>
          <h1 className="reveal" style={{transitionDelay:'.18s', color:'#0E3A3D'}}>Heartfelt <em style={{color:'var(--gold)'}}>dentistry</em>, trusted by locals for generations.</h1>
          <p className="sub reveal" style={{transitionDelay:'.32s', color:'#0E3A3D'}}>Gentle, comprehensive dental care delivered with skill, warmth, and the trust of a long-standing local clinic.</p>
          <div className="hero-ctas reveal" style={{transitionDelay:'.44s'}}>
            <a href="#contact" className="btn btn-gold">
              Book An Appointment
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="tel:+61395273678" className="btn btn-alt">
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              (03) 9527 3678
            </a>
          </div>
        </div>
      </div>

      <div className="hero-dots" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === active ? ' active' : ''}`}
            onClick={() => setActive(i)}
            role="tab"
            aria-selected={i === active}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
