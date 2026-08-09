import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "toorak" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('toorak')

export default function Page() {
  return <SuburbPage slug="toorak" />
}
