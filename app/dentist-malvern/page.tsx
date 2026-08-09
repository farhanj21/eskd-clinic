import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "malvern" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('malvern')

export default function Page() {
  return <SuburbPage slug="malvern" />
}
