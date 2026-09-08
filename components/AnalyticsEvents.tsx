'use client'

import { Suspense, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { track } from '@/lib/analytics'
import { BOOKING_HOST } from '@/lib/business'

/**
 * Site-wide event tracking. Rendered once, in the root layout.
 *
 * It covers the two things a tag manager cannot see on its own:
 *
 *   1. Client-side navigations. Next only loads the document once, so after
 *      the first page every GA4 page view depends on something announcing the
 *      route change. GTM's History Change trigger reads document.title before
 *      React has updated it, which files the new page view under the previous
 *      page's name; this fires after the paint, with the right title.
 *
 *   2. Every tel: and mailto: link on the site, without touching the ~30 pages
 *      that contain one. A delegated listener on the document catches clicks on
 *      links that do not exist yet as readily as the ones that do, so a new page
 *      is tracked the moment it ships and nobody has to remember an onClick.
 *
 * A phone call is this practice's conversion — most visitors ring rather than
 * fill in a form — so call_click is the number that matters most here.
 */

/** Where on the page a link was, for the link_location parameter. */
function locationOf(el: Element): string {
  const tagged = el.closest<HTMLElement>('[data-analytics-location]')
  if (tagged?.dataset.analyticsLocation) return tagged.dataset.analyticsLocation

  // Failing an explicit label, the nearest landmark or id — "header", "contact",
  // "footer" — which is enough to tell the sticky bar from the hero in reports.
  const region = el.closest<HTMLElement>('[id], header, footer, nav, form, section')
  if (region?.id) return region.id
  if (region) return region.tagName.toLowerCase()
  return 'page'
}

function ClickTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target
      if (!(target instanceof Element)) return

      const link = target.closest<HTMLAnchorElement>('a[href]')
      if (!link) return

      const href = link.getAttribute('href') ?? ''
      const shared = {
        link_url: href,
        link_text: (link.textContent ?? '').trim().slice(0, 80),
        link_location: locationOf(link),
        page_path: window.location.pathname,
      }

      if (href.startsWith('tel:')) {
        track('call_click', shared)
        return
      }

      if (href.startsWith('mailto:')) {
        track('email_click', shared)
        return
      }

      if (href.includes(BOOKING_HOST)) {
        track('booking_widget_open', shared)
      }
    }

    /*
     * Capture phase, so the event is recorded even if something between the
     * link and the document calls stopPropagation — and before the browser
     * starts following a tel: link and tears the page down.
     */
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}

function PageViewTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const url = `${pathname}${searchParams.toString() ? `?${searchParams}` : ''}`

  /*
   * The first page view is GTM's job — the container load already fires it, on
   * the Initialization or All Pages trigger every container has. Firing here as
   * well would count the landing page twice, so the first URL is only recorded,
   * not reported, and spa_page_view covers every navigation after it.
   */
  const lastUrl = useRef<string | null>(null)

  useEffect(() => {
    if (lastUrl.current === null) {
      lastUrl.current = url
      return
    }
    if (lastUrl.current === url) return
    lastUrl.current = url

    // After the paint, by which point React has swapped in the new <title>.
    const frame = requestAnimationFrame(() => {
      track('spa_page_view', {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
      })
    })
    return () => cancelAnimationFrame(frame)
  }, [url])

  return null
}

export default function AnalyticsEvents() {
  return (
    <>
      <ClickTracking />
      {/* useSearchParams needs a Suspense boundary, or every page opts out of
          static rendering. */}
      <Suspense fallback={null}>
        <PageViewTracking />
      </Suspense>
    </>
  )
}
