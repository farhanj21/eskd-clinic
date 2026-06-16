'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main>
      <section className="hero-v2" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '44em', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">500 — Something went wrong</div>
          <h1 style={{ fontSize: 'clamp(38px,6vw,68px)', color: 'var(--sage-deep)', marginTop: '16px' }}>
            An unexpected <em>error occurred</em>
          </h1>
          <p className="lead" style={{ marginTop: '20px', marginBottom: '32px' }}>
            Sorry about that — something on our end didn&apos;t go as planned. Try again, or contact us if the problem persists.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <button className="btn" onClick={reset}>Try again</button>
            <Link href="/" className="btn btn-ghost">Back to home</Link>
            <Link href="/contact" className="btn btn-ghost">Contact us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
