<script lang="ts" setup>
const { pageTitle = '' } = defineProps<{ pageTitle: string }>()
</script>

<template>
  <div class="max-w-6xl mx-6 px-6 flex-shrink-0">
    <h1 class="text-3xl font-bold text-gray-800 mb-10">
      {{ pageTitle }}
    </h1>
  </div>
</template>

<style>

</style>
