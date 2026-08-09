import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "armadale" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('armadale')

export default function Page() {
  return <SuburbPage slug="armadale" />
}
