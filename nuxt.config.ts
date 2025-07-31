// https://nuxt.com/docs/4.x/api/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
  ],
  /** eslint */
  eslint: {
    config: {
      standalone: false,
    },
  },
})
