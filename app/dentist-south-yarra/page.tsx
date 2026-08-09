import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "south-yarra" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('south-yarra')

export default function Page() {
  return <SuburbPage slug="south-yarra" />
}
