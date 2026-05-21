'use client'

import { useRef, useEffect } from 'react'

const SPEED = 55 // px per second

const reviews = [
  {
    quote: "Dr. Anbar was great! I had been quite naughty and hadn't been to the dentist for a while, Dr. Anbar explained every step, and why we were doing each. I was made to feel comfortable, and Anbar even explained why some proceedures were unnecessary for me.",
    name: "Sequana Mallinson",
    source: "Google Review",
    initial: "S",
  },
  {
    quote: "Dr Anbar is the most gentle, caring dentist I have been to. Extremely knowledgeable and explained everything very well with my yearly check up. Highly recommend, definitely going back.",
    name: "Michael Stride",
    source: "Google Review",
    initial: "M",
  },
  {
    quote: "Great welcoming dental practice. Dr Jarrod was professional and made me feel comfortable. I'm very happy with my treatment plan so far, all the staff are friendly, highly recommended.",
    name: "Camille Thurnherr",
    source: "Google Review",
    initial: "C",
  },
  {
    quote: "Have been to this clinic for over 20 years even though I live 45 mins away. Always professional and skillful. Will continue visiting East St Kilda every 6 months for my check ups!",
    name: "Jackie Perkins",
    source: "Google Review",
    initial: "J",
  },
  {
    quote: "Recently started attending this, and noticed the friendliness of staff and the dentist. Dr Anbar has been amazing and really invested the time to understand my teeth issues. Overall it’s been a great experience.",
    name: "Ehsan Alvi",
    source: "Google Review",
    initial: "E",
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
