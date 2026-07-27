import type { Metadata } from 'next'
import { withSocial } from '@/lib/seo'

// The contact page itself is a client component ('use client' for the callback
// form), and client components cannot export metadata — so it lives here.
export const metadata: Metadata = withSocial({
  title: 'Contact Us | East St Kilda Dental',
  description:
    'Call (03) 9527 3678, book online, or leave your details and we\'ll call you back. Find East St Kilda Dental at 364 Dandenong Rd, East St Kilda VIC 3183.',
  alternates: { canonical: 'https://www.eaststkildadental.com.au/contact' },
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
