import { fetchGraphQL } from "@/lib/api"

const PLAYERS_GRAPHQL_FIELDS = `
  slug
  name
  image {
    url
  }
  dateOfBirth
  dominantHand
  position
  titles
  academyTime
  colStart
  fppRanking
  wptRanking
  fipRanking

`

export async function getAllPlayers(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      playerCollection(where: { slug_exists: true }, order: name_ASC) {
        items {
          ${PLAYERS_GRAPHQL_FIELDS}
        }
      }
    }`
  )

  return entries?.data?.playerCollection?.items
}

export async function getPlayer(slug: string): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
        playerCollection(where: { slug: "${slug}" }) {
          items {
            ${PLAYERS_GRAPHQL_FIELDS}
          }
        }
      }`
  )

  return entries?.data?.playerCollection?.items?.[0]
}
