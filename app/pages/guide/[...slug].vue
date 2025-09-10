<!-- <script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { kebabCase } from 'scule'

const route = useRoute()
const { data: page } = await useAsyncData(kebabCase(route.path), () => queryCollection('docs').path(route.path).first())
definePageMeta({
  layout: 'docs',
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>

<style scoped>

</style> -->

<script setup lang="ts">

</script>

<template>
  <div />
</template>

<style scoped>

</style>
