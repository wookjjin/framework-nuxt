import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/4.x/api/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@tresjs/nuxt',
    '@nuxt/content',
    '@nuxt/ui-pro',
    'nuxt-og-image',
    'nuxt-llms',
  ],
  css: ['~/assets/css/main.css'],
  icon: {
  },
  components: [
    { path: '~/components/layouts', pathPrefix: false },
    { path: '~/components', pathPrefix: true },
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  pwa: {
    /* PWA options */
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'ko', language: 'ko-KR' },
    ],
    defaultLocale: 'ko',
  },
  tres: {
    devtools: true,
    glsl: true,
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
    experimental: {
      sqliteConnector: 'native',
      nativeSqlite: true,
    },
  },
  llms: {
    domain: 'https://example.com',
    title: 'Wuxt',
    description: 'a Nuxt-based framework',
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/docs/getting-started%' },
        ],
      },
    ],
  },
})
