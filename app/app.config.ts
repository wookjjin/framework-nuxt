import accordion from '~/theme/accordion'
import alert from '~/theme/alert'
import navigationMenu from '~/theme/navigation'

export default defineAppConfig({
  theme: {
  },
  ui: {
    alert: alert(),
    accordion: accordion(),
    navigationMenu: navigationMenu(),
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'aa',
      links: [
        {
          icon: 'i-lucide-book-open',
          label: 'Nuxt UI docs',
          to: 'https://ui4.nuxt.com/docs/getting-started/installation/nuxt',
          target: '_blank',
        },
      ],
    },
  },
})
