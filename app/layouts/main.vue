<script lang="ts" setup>

</script>

<template>
  <div>
    <LayoutHeader />
    <main class="min-h-[calc(100vh - var(--header-container))] relative">
      <!-- Tailwind 사용 (currentColor) -->
      <!-- <SvgGradientBorder class="text-primary" /> -->

      <!-- HEX 코드 사용 -->
      <!-- <SvgGradientBorder color="#ff5733" /> -->

      <!-- CSS 변수 사용 -->
      <!-- <SvgGradientBorder color="var(--brand-color)" /> -->
      <SvgGradientBorder />
      <div class="isolate relative">
        <div
          class="w-full max-w-[--container] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid gap-16 sm:gap-y-24 lg:grid-cols-2 lg:items-center !pb-20 py-24 sm:py-32 lg:py-40"
        />
      </div>
      <div class="w-full max-w-[var(--container)] mx-auto px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
    <LayoutFooter />
  </div>
</template>

<style>

</style>
