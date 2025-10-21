<script lang="ts" setup>
import { themeKey } from '@/constatns/key'

const theme = ref('')

const updateTheme = (newTheme: string) => {
  theme.value = newTheme
}

provide(themeKey, { theme: readonly(theme), updateTheme })
</script>

<template>
  <ThemeComponent />
</template>

<style>

</style>
