'use client'

import { useRef, useEffect } from 'react'

const SPEED = 55 // px per second

const reviews = [
  {
    quote: "Dr Maydelman was so professional and made me feel so comfortable during my procedure. Didn't feel any pain or discomfort — will definitely be having all my future appointments here.",
    name: "Nitara N.",
    source: "Google Review",
    initial: "N",
  },
  {
    quote: "Dr Arik is very thorough and we felt really comfortable with the advice he gave for our family's dental care. The staff are lovely and the practice is so warm and inviting.",
    name: "Natalie H.",
    source: "Google Review",
    initial: "N",
  },
  {
    quote: "Bev was absolutely lovely & provided excellent advice. The whole team genuinely cares — I'll be returning every six months without hesitation.",
    name: "Jemma B.",
    source: "Google Review",
    initial: "J",
  },
  {
    quote: "Came in nervous about a wisdom tooth extraction and left wondering why I'd waited so long. Completely painless — I was back at work the very next day.",
    name: "Marcus T.",
    source: "Google Review",
    initial: "M",
  },
  {
    quote: "Six months into my Invisalign journey and my confidence has transformed completely. Everyone here is so warm and caring — it truly doesn't feel like a clinic.",
    name: "Sarah K.",
    source: "Google Review",
    initial: "S",
  },
]

export default function Reviews() {
  const trackRef   = useRef<HTMLDivElement>(null)
  const xRef       = useRef(0)
  const halfRef    = useRef(0)
  const hovered    = useRef(false)
  const locked     = useRef(false) // click-toggle pause
  const dragging   = useRef(false)
  const drag       = useRef({ startX: 0, startOffset: 0, moved: false })

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

      track.style.transform = `translateX(${xRef.current}px)`
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
    <section className="section reviews">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow center">From Our Patients</span>
          <h2>Kind words from the East&nbsp;St&nbsp;Kilda community</h2>
        </div>
      </div>

      <div className="reviews-track-wrap">
        <div
          ref={trackRef}
          className="reviews-track"
          onMouseEnter={() => { hovered.current = true }}
          onMouseLeave={() => { hovered.current = false }}
          onClick={onClick}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="review-card">
              <span className="qmark" aria-hidden="true">&quot;</span>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <p className="quote">{r.quote}</p>
              <div className="meta">
                <div className="avatar" aria-hidden="true">{r.initial}</div>
                <div><b>{r.name}</b><span>{r.source}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
