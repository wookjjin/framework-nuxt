<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
