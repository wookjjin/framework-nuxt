<script lang="ts" setup>
</script>

<template>
  <div>
    <LayoutHeader />
    <main class="min-h-[calc(100vh - var(--header-height)] relative">
      <div class="w-full max-w-(--container) mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-10">
          <div class="lg:col-span-8">
            <div class="relative border-b border-default py-8">
              <div class="mb-2.5 text-sm font-semibold text-primary flex items-center gap-1.5">
                <NuxtLink to="/guide" />
              </div>
              <slot />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>

</style>
