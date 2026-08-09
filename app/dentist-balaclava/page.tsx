import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "balaclava" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('balaclava')

export default function Page() {
  return <SuburbPage slug="balaclava" />
}
