import SuburbPage, { suburbMetadata } from '@/components/SuburbPage'

/** Rendered entirely from the "elsternwick" entry in data/suburbs.ts. */
export const metadata = suburbMetadata('elsternwick')

export default function Page() {
  return <SuburbPage slug="elsternwick" />
}
