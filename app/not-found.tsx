import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found | East St Kilda Dental',
}

export default function NotFound() {
  return (
    <main>
      <section className="hero-v2" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '44em', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">404 — Page not found</div>
          <h1 style={{ fontSize: 'clamp(38px,6vw,68px)', color: 'var(--sage-deep)', marginTop: '16px' }}>
            We couldn&apos;t find <em>that page</em>
          </h1>
          <p className="lead" style={{ marginTop: '20px', marginBottom: '32px' }}>
            It may have moved, been renamed, or never existed. Try heading back home or get in touch and we&apos;ll point you in the right direction.
          </p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link href="/" className="btn">Back to home</Link>
            <Link href="/contact" className="btn btn-ghost">Contact us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
