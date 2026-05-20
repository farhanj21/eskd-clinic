'use client'

import { useEffect } from 'react'

function countUp(el: HTMLElement, target: number, suffix: string, duration = 1600) {
  const start = performance.now()
  function tick(now: number) {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    const val = Math.round(target * eased)
    el.textContent = (val >= 1000 ? val.toLocaleString() : String(val)) + suffix
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

export default function ScrollEffects() {
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

    // Count-up observer — triggers when stat enters view
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          countUp(el, parseFloat(el.dataset.count ?? '0'), el.dataset.suffix ?? '')
          countObserver.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => countObserver.observe(el))

    // Reveal observer
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
  }, [])

  return <div className="scroll-progress" aria-hidden="true" />
}
