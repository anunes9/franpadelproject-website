import { Metadata } from 'next'

// Base metadata configuration
const baseMetadata = {
  metadataBase: new URL('https://frapadelproject.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

// Open Graph default configuration
const openGraphDefaults = {
  type: 'website',
  siteName: 'Fran Padel Project',
  images: [
    {
      url: '/assets/fran-logo.png',
      width: 1200,
      height: 630,
      alt: 'Fran Padel Project',
    },
  ],
}

// Twitter Card default configuration
const twitterDefaults = {
  card: 'summary_large_image',
  site: '@frapadelproject', // Add your Twitter handle
  creator: '@frapadelproject', // Add your Twitter handle
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
      languages: {
        pt: pageData.url,
        en: pageData.url.replace('/pt/', '/en/').replace('/en/', '/en/'),
      },
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
  const baseUrl = 'https://frapadelproject.com'

  const pages = {
    home: {
      pt: {
        title: 'Fran Padel Project - Metodologia de Padel',
        description:
          'Melhore o seu padel com a metodologia Fran Padel Project. Treinos personalizados, clínicas e formação de jogadores profissionais.',
        keywords: 'padel, treino padel, metodologia padel, fran padel project, clínicas padel, formação padel',
        url: `${baseUrl}/pt`,
      },
      en: {
        title: 'Fran Padel Project - Padel Methodology',
        description:
          'Improve your padel with Fran Padel Project methodology. Personalized training, clinics and professional player development.',
        keywords: 'padel, padel training, padel methodology, fran padel project, padel clinics, padel coaching',
        url: `${baseUrl}/en`,
      },
    },
    academy: {
      pt: {
        title: 'Academia Fran Padel Project - Formação de Jogadores',
        description:
          'Junte-se à Academia Fran Padel Project. Formação completa para jogadores de todos os níveis com metodologia comprovada.',
        keywords: 'academia padel, formação padel, treino padel, fran padel project, jogadores padel',
        url: `${baseUrl}/pt/academy`,
      },
      en: {
        title: 'Fran Padel Project Academy - Player Development',
        description:
          'Join the Fran Padel Project Academy. Complete training for players of all levels with proven methodology.',
        keywords: 'padel academy, padel training, padel coaching, fran padel project, padel players',
        url: `${baseUrl}/en/academy`,
      },
    },
    clinics: {
      pt: {
        title: 'Clínicas Fran Padel Project - Treinos Especializados',
        description:
          'Participe nas nossas clínicas especializadas de padel. Treinos intensivos com metodologia Fran Padel Project.',
        keywords: 'clínicas padel, treinos padel, metodologia padel, fran padel project',
        url: `${baseUrl}/pt/clinics`,
      },
      en: {
        title: 'Fran Padel Project Clinics - Specialized Training',
        description: 'Join our specialized padel clinics. Intensive training with Fran Padel Project methodology.',
        keywords: 'padel clinics, padel training, padel methodology, fran padel project',
        url: `${baseUrl}/en/clinics`,
      },
    },
    proPlayers: {
      pt: {
        title: 'Jogadores Profissionais - Fran Padel Project',
        description:
          'Conheça os jogadores profissionais treinados pela metodologia Fran Padel Project. Sucessos e conquistas.',
        keywords: 'jogadores profissionais padel, fran padel project, sucessos padel',
        url: `${baseUrl}/pt/pro-players`,
      },
      en: {
        title: 'Professional Players - Fran Padel Project',
        description:
          'Meet the professional players trained by Fran Padel Project methodology. Successes and achievements.',
        keywords: 'professional padel players, fran padel project, padel success',
        url: `${baseUrl}/en/pro-players`,
      },
    },
    contact: {
      pt: {
        title: 'Contacto - Fran Padel Project',
        description: 'Entre em contacto connosco. Informações sobre treinos, clínicas e formação de padel.',
        keywords: 'contacto padel, fran padel project, treinos padel',
        url: `${baseUrl}/pt/contact`,
      },
      en: {
        title: 'Contact - Fran Padel Project',
        description: 'Get in touch with us. Information about padel training, clinics and coaching.',
        keywords: 'padel contact, fran padel project, padel training',
        url: `${baseUrl}/en/contact`,
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
  const baseUrl = 'https://frapadelproject.com'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fran Padel Project',
    url: baseUrl,
    logo: `${baseUrl}/assets/fran-logo.png`,
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
    sameAs: [
      'https://www.instagram.com/frapadelproject',
      // Add other social media URLs
    ],
  }

  return structuredData
}

// Generate sitemap data
export function generateSitemapData() {
  const baseUrl = 'https://frapadelproject.com'
  const locales = ['pt', 'en']
  const pages = ['', '/academy', '/clinics', '/pro-players', '/contact', '/fran-world-wide', '/sponsors']

  const sitemapEntries = []

  for (const locale of locales) {
    for (const page of pages) {
      const url = locale === 'pt' ? `${baseUrl}${page}` : `${baseUrl}/${locale}${page}`

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: page === '' ? 1 : 0.8,
      })
    }
  }

  return sitemapEntries
}
