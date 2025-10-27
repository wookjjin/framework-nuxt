<script lang="ts" setup>
</script>

<template>
  <div class="flex flex-col h-screen">
    <LayoutHeader />
    <UContainer class="flex-1">
      <slot />
    </UContainer>
    <LayoutFooter />
  </div>
</template>

<style>

</style>
