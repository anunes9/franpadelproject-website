import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/privacy-policy', '/terms-of-service', '/auth/*', '/dashboard/*'],
    },
    sitemap: 'https://acme.com/sitemap.xml',
  }
}