import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "caulfield-north" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('caulfield-north')

export default function Page() {
  return <SuburbPage slug="caulfield-north" />
}
