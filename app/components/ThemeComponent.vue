<script lang="ts" setup>
import { themeKey } from '~/constatns/key'

const { theme, updateTheme } = inject(themeKey) as { theme: Ref<string>, updateTheme: (newTheme: string) => void }
</script>

<template>
  <div>
    current theme: {{ theme }}
    <div class="flex gap-2 mt-4">
      <ui-button
        color="secondary"
        size="lg"
        @click="updateTheme('dark')"
      >
        Dark
      </ui-button>
      <ui-button
        color="primary"
        size="lg"
        @click="updateTheme('light')"
      >
        Light
      </ui-button>
    </div>
  </div>
</template>

<style>

</style>
