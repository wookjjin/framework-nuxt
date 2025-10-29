<script lang="ts" setup>
</script>

<template>
  <div class="flex flex-col h-screen">
    <LayoutHeader />
    <UContainer class="flex-1 py-4 overflow-hidden">
      <slot />
    </UContainer>
    <LayoutFooter />
  </div>
</template>

<style scoped>

</style>
