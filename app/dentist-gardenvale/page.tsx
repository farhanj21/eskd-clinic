import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "gardenvale" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('gardenvale')

export default function Page() {
  return <SuburbPage slug="gardenvale" />
}
