'use client'

/**
 * Arrows and dots for a phone-width carousel — the review row and the article
 * row both use it.
 *
 * Above 600px the rows are what they have always been (a drifting marquee, a
 * three-up grid) and this whole block is `display:none`, so nothing here
 * touches the desktop layout. At phone width globals.css turns the same markup
 * into a snap-scrolling carousel, and these are its controls.
 *
 * It drives the scroller through the DOM rather than owning it, so the sections
 * that use it stay server components and their content is never shipped to the
 * browser as JSON. The contract is `targetId` — the id on the scrolling
 * element — plus `itemSelector`, which finds the cards inside it.
 */

import { useCallback, useEffect, useState } from 'react'

interface CarouselNavProps {
  /** id of the scrolling element. */
  targetId: string
  /** How many cards, i.e. how many dots. */
  count: number
  /** Finds the cards within the scroller. */
  itemSelector: string
  /** Wrapper class, so each row can size and place its own controls. */
  className?: string
}

export default function CarouselNav({ targetId, count, itemSelector, className = 'cnav' }: CarouselNavProps) {
  const [active, setActive] = useState(0)

  const scroller = useCallback(() => {
    const el = document.getElementById(targetId)
    if (!el) return null
    return { el, items: Array.from(el.querySelectorAll<HTMLElement>(itemSelector)) }
  }, [targetId, itemSelector])

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
    <div className={className}>
      <button
        type="button"
        className="cnav-arrow cnav-arrow-prev"
        onClick={() => go(active - 1)}
        disabled={active === 0}
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <div className="cnav-dots">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`cnav-dot${i === active ? ' is-active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Show item ${i + 1} of ${count}`}
            aria-current={i === active ? 'true' : undefined}
          />
        ))}
      </div>
      <button
        type="button"
        className="cnav-arrow cnav-arrow-next"
        onClick={() => go(active + 1)}
        disabled={active === count - 1}
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  )
}
