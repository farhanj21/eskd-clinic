import Link from 'next/link'

export default function UtilityBar() {
  return (
    <div className="topbar">
      New patients welcome &middot; The Comprehensive Care Visit <b>$297</b> (valued at $499) &middot;{' '}
      <Link href="/comprehensive-care-visit">See what&apos;s included</Link>
    </div>
  )
}
