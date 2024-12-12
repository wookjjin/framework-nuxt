import Aura from '@primevue/themes/aura'
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
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode',
    '@primevue/nuxt-module',
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
      proxy: 'http://localhost:8080',
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
  /* Supabase */
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
  },
  /* PrimeVue */
  primevue: {
    components: {
      include: ['Select'],
    },
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: '@use "~/styles/helpers/_variables.scss" as *;',
        },
      },
    },
  },
})
