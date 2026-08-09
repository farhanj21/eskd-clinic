import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "prahran" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('prahran')

export default function Page() {
  return <SuburbPage slug="prahran" />
}
