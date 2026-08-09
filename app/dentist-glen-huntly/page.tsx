import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "glen-huntly" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('glen-huntly')

export default function Page() {
  return <SuburbPage slug="glen-huntly" />
}
