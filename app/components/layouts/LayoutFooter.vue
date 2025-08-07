<script lang="ts" setup>

</script>

<template>
  <footer>
    <div
      class="w-full max-w-[var(--container)] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:flex lg:items-center lg:justify-between lg:gap-x-3"
    >
      <div>Copyright &#169;</div>
      <div>
        <NuxtLink
          class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed
            aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75
            transition-colors px-2.5 py-1.5 text-sm gap-1.5 text-default
            hover:bg-elevated active:bg-elevated focus:outline-none
            focus-visible:bg-elevated hover:disabled:bg-transparent
            dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent
            dark:hover:aria-disabled:bg-transparent"
          target="_blank" to="https://github.com/wookjjin/framework-nuxt"
        >
          <UIcon name="i-simple-icons-github" class="size-5" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style>

</style>
