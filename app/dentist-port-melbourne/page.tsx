import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "port-melbourne" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('port-melbourne')

export default function Page() {
  return <SuburbPage slug="port-melbourne" />
}
