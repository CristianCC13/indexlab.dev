import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/indexLab.png'

export default defineThemeConfig({
  name: 'indexLab',
  id: 'accessible-astro-starter',
  logo: logoImage,
  seo: {
    title: 'indexLab - Optimizare Tehnică SEO pentru Era AI',
    description:
      'IndexLab oferă optimizare tehnică SEO pentru era AI: Core Web Vitals, crawlability, structured data și strategie de conținut pentru a fi vizibil în motoarele de căutare și în răspunsurile AI.',
    author: 'Florin Cristian',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#d648ff',
    secondary: '#00d1b7',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Servicii',
        href: '/servicii',
      },
      {
        type: 'link',
        label: 'Blog',
        href: '/blog',
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
    ],
  },
  socials: [
    {
      label: 'Instagram',
      href: 'https://instagram.com/indexlab',
      icon: 'lucide:instagram',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/florin-cristian',
      icon: 'lucide:linkedin',
    },

  ],
})
