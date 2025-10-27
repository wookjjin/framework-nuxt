import accordion from '~/theme/accordion'
import alert from '~/theme/alert'
import container from '~/theme/container'
import contentToc from '~/theme/contentToc'
import navigationMenu from '~/theme/navigation'

export default defineAppConfig({
  theme: {
  },
  ui: {
    container: container(),
    alert: alert(),
    accordion: accordion(),
    navigationMenu: navigationMenu(),
    contentToc: contentToc(),
  },
  toc: {
    title: 'On this Page',
    bottom: {
      title: 'Community',
      edit: '#',
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
