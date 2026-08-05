'use client'

import { useEffect, useState } from 'react'

// Ambient background video for the home hero.
//
// The poster frame is painted by CSS on .hero-video itself, so the hero is
// visually complete on first paint and the 290KB video never competes with
// the LCP — this component only mounts the <video> after hydration, then
// fades it in once it can actually play. Visitors who ask for reduced motion
// keep the still poster and never download the clip.
export default function HeroVideoBg() {
  const [mounted, setMounted] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <video
      className={`hero-video-media${ready ? ' is-ready' : ''}`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      tabIndex={-1}
      aria-hidden="true"
      onCanPlay={() => setReady(true)}
    >
      <source src="/assets/video/hero-clinic.mp4" type="video/mp4" />
    </video>
  )
}
