import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "elwood" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('elwood')

export default function Page() {
  return <SuburbPage slug="elwood" />
}
