'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// `decimals` keeps the 5.0 Google rating on the home page reading as "5.0" the
// whole way up rather than snapping between whole numbers. The locale is
// pinned so the last frame matches the figure the server rendered.
function countUp(
  el: HTMLElement,
  target: number,
  suffix: string,
  decimals = 0,
  duration = 1600
) {
  const start = performance.now()
  function tick(now: number) {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    const val = target * eased
    el.textContent =
      (decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString('en-AU')) + suffix
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

export default function ScrollEffects() {
  const pathname = usePathname()

  useEffect(() => {
    const header = document.getElementById('site-header')
    const bar = document.querySelector<HTMLElement>('.scroll-progress')

    function handleScroll() {
      if (header) header.classList.toggle('scrolled', window.scrollY > 20)
      if (bar) {
        const pct =
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        bar.style.width = pct + '%'
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Immediately mark all .reveal elements visible if IntersectionObserver is unavailable
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
      return () => window.removeEventListener('scroll', handleScroll)
    }

    // Auto-stagger direct .reveal children of [data-stagger] containers
    document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((container) => {
      container.querySelectorAll<HTMLElement>(':scope > .reveal').forEach((el, i) => {
        if (!el.style.transitionDelay) el.style.transitionDelay = `${i * 0.09}s`
      })
    })

    // Count-up observer
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          countObserver.unobserve(el)
          // The markup already carries the finished figure, so leaving it alone
          // is the correct reduced-motion behaviour.
          if (reduceMotion) return
          countUp(
            el,
            parseFloat(el.dataset.count ?? '0'),
            el.dataset.suffix ?? '',
            parseInt(el.dataset.decimals ?? '0', 10)
          )
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => countObserver.observe(el))

    // Reveal observer — re-queries the DOM after navigation so new page elements are picked up
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      revealObserver.disconnect()
      countObserver.disconnect()
    }
  }, [pathname])

  return <div className="scroll-progress" aria-hidden="true" />
}
