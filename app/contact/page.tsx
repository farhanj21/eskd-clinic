import type { Metadata } from 'next'
import GetInTouch from '@/components/GetInTouch'

export const metadata: Metadata = {
  title: 'Contact Us | East St Kilda Dental',
  description:
    'Get in touch with East St Kilda Dental — call (03) 9527 3678, email hello@eaststkildadental.com.au, or book online. 364 Dandenong Road, East St Kilda VIC 3183.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/contact' },
}

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero section" style={{ background: 'var(--surface-teal)', paddingBottom: '32px' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow light">Contact</span>
            <h1>Get In Touch</h1>
            <p className="lede" style={{ color: 'rgba(246,239,227,.85)', maxWidth: '560px', margin: '0 auto' }}>
              Book an appointment, ask a question, or just say hello. We respond to all enquiries within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="contact-details-grid reveal">
            <div className="contact-detail-card">
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>Phone</h3>
              <p><a href="tel:+61395273678">(03) 9527 3678</a></p>
              <p style={{ fontSize: '14px', color: 'var(--ink-light)' }}>Same-day emergency line available</p>
            </div>
            <div className="contact-detail-card">
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3>Email</h3>
              <p><a href="mailto:hello@eaststkildadental.com.au">hello@eaststkildadental.com.au</a></p>
            </div>
            <div className="contact-detail-card">
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Address</h3>
              <p>364 Dandenong Road<br />East St Kilda VIC 3183</p>
              <a href="https://maps.app.goo.gl/7e4dRpEyETE8K18s5" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px' }}>
                Open in Google Maps ↗
              </a>
            </div>
            <div className="contact-detail-card">
              <div className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Hours</h3>
              <p>
                Mon–Thu 8:30am–4:00pm<br />
                Friday 8:30am–4:30pm<br />
                Saturday 8:00am–4:00pm
              </p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ margin: '48px 0 0' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5!2d145.0!3d-37.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUyJzEyLjAiUyAxNDXCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 'none', display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="East St Kilda Dental location map"
        />
      </div>

      <GetInTouch variant="default" id="contact" />
    </main>
  )
}
