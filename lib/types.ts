export interface PlayerType {
  slug: string
  name: string
  image: {
    url: string
  }
  dateOfBirth: string
  dominantHand: string
  position: string
  titles: string[]
  academyTime: string
  colStart: string
  fppRanking: string
  wptRanking: string
  fipRanking: string
}

export interface PageProps {
  params: Promise<{ slug: string; postType?: string }>
}

export interface ServiceItem {
  title: string
  description: string
  price?: string
  features: string[]
  icon: React.ReactNode
}
