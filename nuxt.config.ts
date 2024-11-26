// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Framework Nuxt',
      titleTemplate: '%s',
    },
  },
  /* Environment Override */
  /* https://github.com/unjs/c12?tab=readme-ov-file#environment-specific-configuration */
  $development: {
    //
  },
  $production: {
    //
  },
  /* Module */
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
  ],
  /* EsLint */
  eslint: {
    config: {
      standalone: false,
    },
  },
  /* I18n */
  i18n: {
    locales: [
      { code: 'ko', language: 'ko-KR' },
      { code: 'en', language: 'en-US' },
    ],
    defaultLocale: 'ko',
  },
  /* Runtime COnfig */
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: '/api',
    },
  },
  /* PWA */
  pwa: {
    /* PWA options */
  },
  /* Tailwind Config */
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
})
