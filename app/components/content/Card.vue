<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: 'Default title',
  },
  description: {
    type: String,
    default: 'Default description',
  },
  icon: {
    type: String,
    default: 'IconMarkdown',
  },
})
</script>

<template>
  <div
    class="group relative block my-5 p-4 sm:p-6 border border-default rounded-md bg-default transition-colors hover:bg-primary/10 hover:border-primary"
  >
    <p class="text-highlighted font-semibold">
      {{ title }}
    </p>
    <div class="text-[15px] text-muted *:first:mt-0 *:last:mb-0 *:my-1 mt-1">
      <p class="my-5 leading-7 text-pretty">
        <slot />
      </p>
    </div>
  </div>
</template>

<style>

</style>
