'use client'

import { useRef, useEffect } from 'react'

const SPEED = 50 // px per second

const services = [
  {
    img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80&auto=format&fit=crop",
    alt: "Dental check-up",
    tag: "Preventive",
    title: "Check-Up & Clean",
    desc: "Gentle six-monthly visits to prevent cavities, remove plaque, and maintain a bright, healthy smile.",
    cta: "Book a Clean",
  },
  {
    img: "/assets/extraction.JPG",
    alt: "Fillings and extractions",
    tag: "Restorative",
    title: "Fillings & Extractions",
    desc: "Tooth-coloured fillings restore strength and stop decay; gentle extractions when removal is needed.",
    cta: "Learn More",
  },
  {
    img: "/assets/emergency.JPG",
    alt: "Emergency dental care",
    tag: "Urgent",
    title: "Emergency Dental Care",
    desc: "Same-day appointments for toothache, broken teeth, and other urgent concerns. Pain relief, fast.",
    cta: "Get Help Today",
  },
  {
    img: "/assets/Wisdom_Teeth.JPG",
    alt: "Wisdom teeth removal",
    tag: "Surgical",
    title: "Wisdom Teeth Removal",
    desc: "Gentle, advanced extractions to reduce recovery time and prevent crowding or future complications.",
    cta: "Learn More",
  },
  {
    img: "/assets/veneers.JPG",
    alt: "Porcelain veneers",
    tag: "Cosmetic",
    title: "Porcelain & Composite Veneers",
    desc: "Custom veneers for chips, stains, or uneven teeth — natural, durable, beautifully designed for you.",
    cta: "See Veneers",
  },
  {
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80&auto=format&fit=crop",
    alt: "Invisalign clear aligners",
    tag: "Orthodontics",
    title: "Invisalign Clear Aligners",
    desc: "Discreet, removable aligners that fit your lifestyle — straighten teeth without traditional braces.",
    cta: "Start Invisalign",
  },
  {
    img: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=870&auto=format&fit=crop",
    alt: "Dental implants",
    tag: "Implants",
    title: "Dental Implants",
    desc: "Strong, natural-looking replacements that restore function, prevent bone loss, and rebuild confidence.",
    cta: "Implant Consult",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661436629100-ba3c5ea70514?q=80&w=387&auto=format&fit=crop",
    alt: "Crowns and bridges",
    tag: "Restorative",
    title: "Crowns & Bridges",
    desc: "Custom restorations designed for durability and a natural finish — repair, replace, and rebalance smiles.",
    cta: "Learn More",
  },
  {
    img: "/assets/whitening.JPG",
    alt: "Teeth whitening",
    tag: "Cosmetic",
    title: "Professional Teeth Whitening",
    desc: "Safe, supervised whitening for a noticeably brighter smile — in-chair or take-home options.",
    cta: "Whiten Safely",
  },
]

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export default function ServicesGrid() {
  const trackRef = useRef<HTMLDivElement>(null)
  const xRef     = useRef(0)
  const halfRef  = useRef(0)
  const hovered  = useRef(false)
  const locked   = useRef(false)
  const dragging = useRef(false)
  const drag     = useRef({ startX: 0, startOffset: 0, moved: false })

  function shouldScroll() {
    return !hovered.current && !locked.current && !dragging.current
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    halfRef.current = track.scrollWidth / 2

    let prev = performance.now()
    let raf: number

    function tick(now: number) {
      const dt = (now - prev) / 1000
      prev = now

      if (shouldScroll()) {
        xRef.current -= SPEED * dt
        if (halfRef.current > 0 && xRef.current <= -halfRef.current) {
          xRef.current += halfRef.current
        }
      }

      track!.style.transform = `translateX(${xRef.current}px)`
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true
    drag.current = { startX: e.clientX, startOffset: xRef.current, moved: false }
    trackRef.current?.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current) return
    const delta = e.clientX - drag.current.startX
    if (Math.abs(delta) > 4) drag.current.moved = true
    xRef.current = drag.current.startOffset + delta
  }

  function onPointerUp() {
    dragging.current = false
  }

  function onClick() {
    if (drag.current.moved) return
    locked.current = !locked.current
  }

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow center">Our Dental Services</span>
          <h2>Complete dental care, right here in St&nbsp;Kilda</h2>
          <p className="lede">From same-day relief to long-term cosmetic plans, explore the treatments we provide every day — delivered with skill, care, and the warmth of a clinic that's been part of your community since 1984.</p>
        </div>
      </div>

      <div className="services-track-wrap">
        <div
          ref={trackRef}
          className="services-track"
          onMouseEnter={() => { hovered.current = true }}
          onMouseLeave={() => { hovered.current = false }}
          onClick={onClick}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          {[...services, ...services].map((s, i) => (
            <article key={i} className="service-card">
              <div
                className="img"
                style={{ backgroundImage: `url('${s.img}')` }}
                role="img"
                aria-label={s.alt}
              >
                <span className="tag">{s.tag}</span>
              </div>
              <div className="body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#contact" className="more">
                  {s.cta}{' '}{arrow}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
