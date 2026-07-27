import type { Metadata } from 'next'
import { withSocial } from '@/lib/seo'
import { business, fullAddress } from '@/lib/business'

// The contact page itself is a client component ('use client' for the callback
// form), and client components cannot export metadata — so it lives here.
export const metadata: Metadata = withSocial({
  title: 'Contact Us | East St Kilda Dental',
  description:
    `Call ${business.telephoneDisplay}, book online, or leave your details and we'll call you back. Find ${business.name} at ${fullAddress}.`,
  alternates: { canonical: 'https://www.eaststkildadental.com.au/contact' },
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
