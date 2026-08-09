import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "ripponlea" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('ripponlea')

export default function Page() {
  return <SuburbPage slug="ripponlea" />
}
