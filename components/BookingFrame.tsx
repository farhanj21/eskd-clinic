'use client'

import { useEffect, useRef } from 'react'
import { track } from '@/lib/analytics'
import { BOOKING_URL } from '@/lib/business'

/**
 * The embedded booking system on /online-booking.
 *
 * The booking runs on the practice software's own domain inside this iframe, so
 * a completed booking is invisible to us — the browser will not let a parent
 * page see anything that happens inside a cross-origin frame, and no amount of
 * tagging changes that. Completed bookings are counted in the practice software.
 *
 * What we can honestly measure is whether people reach the widget at all, which
 * is the question worth asking: if booking_widget_view is high and the practice
 * software's bookings are low, the widget is the problem, not the page. The
 * event fires once, when the frame is actually scrolled into view — not on page
 * load, which would count everyone who bounced off the hero.
 */
export default function BookingFrame() {
  const ref = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          track('booking_widget_view', { page_path: window.location.pathname })
          observer.disconnect() // Once per page view, not once per scroll past.
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <iframe
      ref={ref}
      className="embed-frame"
      src={BOOKING_URL}
      title="Book an appointment at East St Kilda Dental"
      loading="lazy"
    />
  )
}
