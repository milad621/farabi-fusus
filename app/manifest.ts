import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fusus al-Hikam - فصوص الحکمة',
    short_name: 'Fusus al-Hikam',
    description: 'Abu Nasr al-Farabi\'s Bezels of Wisdom - 70 philosophical chapters in Arabic, Persian, and English',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#0D7377',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    categories: ['education', 'books', 'reference'],
    lang: 'en',
    dir: 'auto',
  }
}
