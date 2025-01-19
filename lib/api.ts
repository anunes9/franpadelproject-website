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

async function fetchGraphQL(query: string): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

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
