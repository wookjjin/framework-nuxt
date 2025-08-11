// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    // ...@antfu/eslint-config options
    // ... common rules
    rules: {
      'no-console': 'warn',
      'antfu/top-level-function': 'off',
    },
    vue: {
      // ..vue rules
      overrides: {
        'vue/max-attributes-per-line': [
          'error',
          {
            singleline: {
              max: 1,
            },
            multiline: {
              max: 1,
            },
          },
        ],
      },
    },
    typescript: {
      // ..typescript rules
    },
  }),
  // ...your other rules
)
