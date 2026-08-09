import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "middle-park" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('middle-park')

export default function Page() {
  return <SuburbPage slug="middle-park" />
}
