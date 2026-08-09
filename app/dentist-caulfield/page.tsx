import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "caulfield" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('caulfield')

export default function Page() {
  return <SuburbPage slug="caulfield" />
}
