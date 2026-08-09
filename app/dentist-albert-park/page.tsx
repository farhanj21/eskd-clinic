import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "albert-park" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('albert-park')

export default function Page() {
  return <SuburbPage slug="albert-park" />
}
