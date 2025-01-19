import { fetchGraphQL } from "@/lib/api"

const CLINICS_GRAPHQL_FIELDS = `
  slug
  name
  order
  descriptionEN: description(locale: "en-US")
  descriptionPT: description(locale: "pt")
  color
  colStart
  image {
    url
    height
    width
  }
  contentImage {
    url
    height
    width
  }
`

export async function getAllClinics(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      clinicCollection(where: { slug_exists: true }, order: order_ASC) {
        items {
          ${CLINICS_GRAPHQL_FIELDS}
        }
      }
    }`
  )

  return entries?.data?.clinicCollection?.items
}

export async function getClinic(slug: string): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
        clinicCollection(where: { slug: "${slug}" }) {
          items {
            ${CLINICS_GRAPHQL_FIELDS}
          }
        }
      }`
  )

  return entries?.data?.clinicCollection?.items?.[0]
}
