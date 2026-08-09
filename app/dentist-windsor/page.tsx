import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "windsor" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('windsor')

export default function Page() {
  return <SuburbPage slug="windsor" />
}
