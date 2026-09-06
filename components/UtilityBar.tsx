import Link from 'next/link'

export default function UtilityBar() {
  return (
    <div className="topbar">
      New patients welcome &middot; The Comprehensive Care Visit &middot;{' '}
      <Link href="/comprehensive-care-visit">See what&apos;s included</Link>
    </div>
  )
}
