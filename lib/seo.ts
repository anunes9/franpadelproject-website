import { Metadata } from 'next'

export const SITE_URL = 'https://franpadelproject.com'
const INSTAGRAM_URL = 'https://www.instagram.com/franfreitas.padel'

// Base metadata configuration
const baseMetadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: '34Zef2hewb5cSa273VzlsqI_UeGCMUY5fBIJyKEtRfg',
  },
}

// Open Graph default configuration
const openGraphDefaults = {
  type: 'website',
  siteName: 'Fran Padel Project',
  images: [
    {
      url: '/assets/fran-logo.png',
      width: 1099,
      height: 312,
      alt: 'Fran Padel Project',
    },
  ],
}

// Twitter Card default configuration
const twitterDefaults = {
  card: 'summary_large_image',
}

// Generate metadata for different pages
export function generateMetadata(
  locale: string,
  page: string,
  customData?: {
    title?: string
    description?: string
    keywords?: string
    image?: string
    url?: string
  }
): Metadata {
  const pageData = getPageData(locale, page, customData)

  return {
    ...baseMetadata,
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords.split(',').map((k: string) => k.trim()),
    alternates: {
      canonical: pageData.url,
    },
    openGraph: {
      ...openGraphDefaults,
      title: pageData.title,
      description: pageData.description,
      url: pageData.url,
      images: customData?.image
        ? [{ url: customData.image, width: 1200, height: 630, alt: pageData.title }]
        : openGraphDefaults.images,
    },
    twitter: {
      ...twitterDefaults,
      title: pageData.title,
      description: pageData.description,
      images: customData?.image || '/assets/fran-logo.png',
    },
  }
}

// Page-specific data
function getPageData(locale: string, page: string, customData?: any) {
  const pages = {
    home: {
      pt: {
        title: 'Fran Padel Project - Metodologia de Padel',
        description:
          'Melhore o seu padel com a metodologia Fran Padel Project. Treinos personalizados, clínicas e formação de jogadores profissionais.',
        keywords: 'padel, treino padel, metodologia padel, fran padel project, clínicas padel, formação padel',
        url: SITE_URL,
      },
      en: {
        title: 'Fran Padel Project - Padel Methodology',
        description:
          'Improve your padel with Fran Padel Project methodology. Personalized training, clinics and professional player development.',
        keywords: 'padel, padel training, padel methodology, fran padel project, padel clinics, padel coaching',
        url: SITE_URL,
      },
    },
    ibe: {
      pt: {
        title: 'IBE Abril 2026 Recap | Fran Padel Project',
        description:
          'Revive a Experiência Ibérica de Padel 2026 — um evento intensivo de treino de padel em Madrid, Espanha pelo Fran Padel Project.',
        keywords: 'iberian padel experience, ibe padel, treino padel madrid, fran padel project, evento padel espanha',
        url: `${SITE_URL}/ibe`,
      },
      en: {
        title: 'IBE April 2026 Recap | Fran Padel Project',
        description:
          'Recap the Iberian Padel Experience 2026 — an intensive multi-day padel training event in Madrid, Spain by Fran Padel Project.',
        keywords: 'iberian padel experience, ibe padel, padel training madrid, fran padel project, padel event spain',
        url: `${SITE_URL}/ibe`,
      },
    },
  }

  const pageData = pages[page as keyof typeof pages]?.[locale as 'pt' | 'en']

  if (!pageData) {
    // Fallback to home page data
    return pages.home[locale as 'pt' | 'en']
  }

  // Override with custom data if provided
  return {
    ...pageData,
    ...customData,
  }
}

// Generate structured data (JSON-LD)
export function generateStructuredData(locale: string, page: string) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fran Padel Project',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/fran-logo.png`,
    description:
      locale === 'pt'
        ? 'Metodologia de padel inovadora para jogadores de todos os níveis'
        : 'Innovative padel methodology for players of all levels',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PT',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
    },
    sameAs: [INSTAGRAM_URL],
  }

  return structuredData
}

// Generate Event structured data (JSON-LD) for the IBE recap page
export function generateEventStructuredData(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name:
      locale === 'pt'
        ? 'Experiência Ibérica de Padel (IBE) 2026'
        : 'Iberian Padel Experience (IBE) 2026',
    description:
      locale === 'pt'
        ? 'Evento intensivo de treino de padel de vários dias em Madrid, Espanha, pelo Fran Padel Project.'
        : 'An intensive multi-day padel training event in Madrid, Spain by Fran Padel Project.',
    startDate: '2026-04-01',
    endDate: '2026-04-30',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Madrid',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Madrid',
        addressCountry: 'ES',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Fran Padel Project',
      url: SITE_URL,
    },
    url: `${SITE_URL}/ibe`,
  }
}

// Generate sitemap data
export function generateSitemapData() {
  const pages = ['', '/ibe', '/privacy-policy', '/terms-of-service']

  return pages.map((page) => ({
    url: `${SITE_URL}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
}
