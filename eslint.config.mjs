// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    // ...@antfu/eslint-config options
    vue: true,
    typescript: true,
  }, {
    files: ['**/*.vue'],
    rules: {
      'no-console': 'off',
      'vue/operator-linebreak': ['error', 'before'],
      'antfu/top-level-function': 'off',
    },
  }),
  // ...your other rules
)
