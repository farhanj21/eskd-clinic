import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "st-kilda" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('st-kilda')

export default function Page() {
  return <SuburbPage slug="st-kilda" />
}
