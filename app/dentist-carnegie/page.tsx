import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "carnegie" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('carnegie')

export default function Page() {
  return <SuburbPage slug="carnegie" />
}
