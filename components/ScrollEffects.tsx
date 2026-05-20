'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    const header = document.getElementById('site-header')

    function handleScroll() {
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 20)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12 }
      )
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    } else {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
