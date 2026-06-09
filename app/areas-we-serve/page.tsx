import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Areas We Serve | East St Kilda Dental',
  description: 'East St Kilda Dental serves St Kilda, Balaclava, Caulfield, Elwood, Elsternwick and surrounding suburbs. Book online or call (03) 9527 3678.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/areas-we-serve' },
}

const suburbLinks = [
  { href: '/dentist-st-kilda',    name: 'St Kilda' },
  { href: '/dentist-balaclava',   name: 'Balaclava' },
  { href: '/dentist-caulfield',   name: 'Caulfield' },
  { href: '/dentist-elwood',      name: 'Elwood' },
  { href: '/dentist-elsternwick', name: 'Elsternwick' },
]

export default function AreasWeServePage() {
  return (
    <main>
      <section className="hero-v2">
        <div className="container reveal" style={{ textAlign: 'center', maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="eyebrow">Inner south-east Melbourne</div>
          <h1>Your local dentist, <em>close to home</em></h1>
          <p className="lead">We&apos;ve been caring for families across East St Kilda and the surrounding suburbs since around 1980.</p>
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <div className="svc-grid reveal">
            {suburbLinks.map(s => (
              <Link key={s.href} href={s.href} className="svc" style={{ textDecoration: 'none' }}>
                <h4>Dentist near {s.name}</h4>
                <p>Comprehensive dental care a short trip from {s.name}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}