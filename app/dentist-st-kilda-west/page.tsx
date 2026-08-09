import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "st-kilda-west" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('st-kilda-west')

export default function Page() {
  return <SuburbPage slug="st-kilda-west" />
}
