'use client'

/**
 * Arrows and dots for the review row — phone only.
 *
 * Above 600px the row is the drifting marquee it has always been and this
 * whole block is `display:none`, so nothing here touches the desktop layout.
 * At phone width globals.css turns the same markup into a snap-scrolling
 * carousel showing one review at a time, and these are its controls.
 *
 * It drives the scroller through the DOM rather than owning it, so
 * ReviewMarquee stays a server component and the six quotes are never shipped
 * to the browser as JSON. The only contract between the two is `targetId`,
 * which is the id on the scrolling `.rmq` element, and the `.rmq-card` class on
 * the cards inside it.
 */

import { useCallback, useEffect, useState } from 'react'

export default function ReviewCarouselNav({ targetId, count }: { targetId: string; count: number }) {
  const [active, setActive] = useState(0)

  /* The cards are the track's DIRECT children, which is what leaves the
     marquee's duplicate lap — it lives inside .rmq-loop — out of the count. */
  const scroller = useCallback(() => {
    const el = document.getElementById(targetId)
    if (!el) return null
    return { el, items: Array.from(el.querySelectorAll<HTMLElement>('.rmq-track > .rmq-card')) }
  }, [targetId])

  /* Which card is under the middle of the viewport, recomputed on scroll and
     coalesced to one frame so a flick doesn't run this on every scroll event. */
  useEffect(() => {
    const ctx = scroller()
    if (!ctx) return
    const { el, items } = ctx
    let frame = 0

    const sync = () => {
      frame = 0
      const centre = el.scrollLeft + el.clientWidth / 2
      let nearest = 0
      let best = Infinity
      items.forEach((card, i) => {
        const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - centre)
        if (distance < best) {
          best = distance
          nearest = i
        }
      })
      setActive(nearest)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(sync)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    sync()
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [scroller])

  const go = (index: number) => {
    const ctx = scroller()
    if (!ctx) return
    const { el, items } = ctx
    const card = items[Math.max(0, Math.min(items.length - 1, index))]
    if (!card) return
    /* scrollTo on the row itself, not scrollIntoView: the latter also scrolls
       the page vertically to bring the row into view, which yanks the reader
       down the page when they tap a dot. */
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: 'smooth' })
  }

  return (
    <div className="rmq-nav">
      <button
        type="button"
        className="rmq-arrow rmq-arrow-prev"
        onClick={() => go(active - 1)}
        disabled={active === 0}
        aria-label="Previous review"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <div className="rmq-dots">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`rmq-dot${i === active ? ' is-active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Show review ${i + 1} of ${count}`}
            aria-current={i === active ? 'true' : undefined}
          />
        ))}
      </div>
      <button
        type="button"
        className="rmq-arrow rmq-arrow-next"
        onClick={() => go(active + 1)}
        disabled={active === count - 1}
        aria-label="Next review"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  )
}
