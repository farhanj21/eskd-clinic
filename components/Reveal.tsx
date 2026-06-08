'use client'

import { useEffect, useRef } from 'react'

type Direction = 'up' | 'left' | 'right' | 'scale'

interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: Direction
  delay?: number
  threshold?: number
  as?: React.ElementType
}

const directionClass: Record<Direction, string> = {
  up: 'reveal',
  left: 'reveal from-left',
  right: 'reveal from-right',
  scale: 'reveal scale-in',
}

export default function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.15,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.classList.add('visible')
      return
    }

    if (delay) el.style.transitionDelay = `${delay}ms`

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.unobserve(el)
        }
      },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, threshold])

  const base = directionClass[direction]
  return (
    <Tag ref={ref} className={`${base}${className ? ` ${className}` : ''}`}>
      {children}
    </Tag>
  )
}
