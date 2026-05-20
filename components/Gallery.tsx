'use client'

import { useRef, useState } from 'react'

const slides = [
  {
    before: 'https://images.unsplash.com/photo-1588776814546-1ffbb04e20f4?w=900&q=80&auto=format&fit=crop',
    after:  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80&auto=format&fit=crop',
    label:   'Porcelain Veneers',
    sublabel:'4–6 week transformation',
    delay:   undefined,
  },
  {
    before: 'https://images.unsplash.com/photo-1529693662653-9d480da3b0e8?w=900&q=80&auto=format&fit=crop',
    after:  'https://images.unsplash.com/photo-1581585099522-f6ac2efe6a37?w=900&q=80&auto=format&fit=crop',
    label:   'Invisalign Treatment',
    sublabel:'9–12 month plan',
    delay:   '.07s',
  },
  {
    before: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=900&q=80&auto=format&fit=crop',
    after:  'https://images.unsplash.com/photo-1542596594-649edbc13630?w=900&q=80&auto=format&fit=crop',
    label:   'Implant & Crown',
    sublabel:'Restored bite & balance',
    delay:   '.14s',
  },
  {
    before: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?w=900&q=80&auto=format&fit=crop',
    after:  'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=900&q=80&auto=format&fit=crop',
    label:   'Whitening & Bonding',
    sublabel:'Same-day refresh',
    delay:   '.21s',
  },
]

function Slider({ before, after, label, sublabel, delay }: {
  before: string; after: string; label: string; sublabel: string; delay?: string
}) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const active = useRef(false)

  function calc(clientX: number) {
    const r = ref.current!.getBoundingClientRect()
    return Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100))
  }

  return (
    <div
      className="smile-card ba-slider reveal"
      ref={ref}
      style={delay ? { transitionDelay: delay } : undefined}
      onPointerDown={(e) => {
        active.current = true
        ref.current!.setPointerCapture(e.pointerId)
        setPos(calc(e.clientX))
      }}
      onPointerMove={(e) => { if (active.current) setPos(calc(e.clientX)) }}
      onPointerUp={() => { active.current = false }}
    >
      <div className="ba-img ba-before" style={{ backgroundImage: `url('${before}')` }} />
      <div
        className="ba-img ba-after"
        style={{ backgroundImage: `url('${after}')`, clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div className="ba-line" style={{ left: `${pos}%` }}>
        <div className="ba-handle">
          <svg viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="11 18 5 12 11 6" />
            <polyline points="21 6 27 12 21 18" />
          </svg>
        </div>
      </div>
      <span className="ba-badge ba-badge-before">Before</span>
      <span className="ba-badge ba-badge-after">After</span>
      <div className="label"><b>{label}</b><span>{sublabel}</span></div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="section gallery" id="patients">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow center">Smile Gallery</span>
          <h2>Real patients. Real results.</h2>
          <p className="lede">Every smile we craft is a partnership. Here are a few recent transformations from our East St Kilda chair.</p>
        </div>

        <div className="gallery-grid">
          {slides.map((s) => (
            <Slider key={s.label} {...s} />
          ))}
        </div>

        <div className="services-cta reveal">
          <a href="#contact" className="btn btn-outline">
            See All Transformations
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
