import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fran Padel Project',
    short_name: 'Fran Padel',
    description: 'Metodologia de padel inovadora para jogadores de todos os níveis',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4F46E5',
    icons: [
      {
        src: '/assets/fran-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/fran-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
