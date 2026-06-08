import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '24px', padding: '80px 24px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(40px,5vw,72px)', color: 'var(--teal-900)', margin: 0 }}>
        Page not found
      </h1>
      <p style={{ fontSize: '18px', color: 'var(--ink-soft)', margin: 0 }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link href="/" className="btn btn-primary">Back to Home</Link>
    </main>
  )
}
