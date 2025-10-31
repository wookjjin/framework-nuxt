<script lang="ts" setup>

</script>

<template>
  <section
    class="relative isolate bg-linear-to-b border-t border-default from-muted/20 dark:from-muted/10 to-default/50 dark:to-default/20"
  >
    <div
      class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16"
    >
      <h2 class="text-3xl font-bold text-center text-highlighted mb-12">
        Core Features
      </h2>

      <!-- Mobile: 세로로 쌓임, Tablet: 2개씩, Desktop: 3개 가로배치 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <!-- 첫 번째 카드 -->
        <div
          class="flex flex-col items-center text-center border border-default/20 dark:border-default/30 rounded-2xl p-4 sm:p-6 lg:p-6 min-h-60 sm:min-h-64 lg:min-h-72 justify-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 bg-linear-to-br from-blue-500/10 dark:from-blue-400/20 from-23% via-transparent via-50% to-transparent hover:from-blue-100/80 dark:hover:from-blue-400/30 backdrop-blur-sm"
        >
          <span class="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</span>
          <span class="text-lg sm:text-xl font-semibold text-highlighted mb-2 sm:mb-3">Fast Setup</span>
          <span class="text-sm sm:text-base text-muted leading-relaxed px-2">
            간단한 설정만으로 바로 시작할 수 있습니다.
          </span>
        </div>

        <!-- 두 번째 카드 -->
        <div
          class="flex flex-col items-center text-center border border-default/20 dark:border-default/30 rounded-2xl p-4 sm:p-6 lg:p-6 min-h-60 sm:min-h-64 lg:min-h-72 justify-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 bg-linear-to-br from-amber-500/10 dark:from-amber-400/20 from-23% via-transparent via-50% to-transparent hover:from-amber-100/80 dark:hover:from-amber-400/30 backdrop-blur-sm"
        >
          <span class="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</span>
          <span class="text-lg sm:text-xl font-semibold text-highlighted mb-2 sm:mb-3">High Performance</span>
          <span class="text-sm sm:text-base text-muted leading-relaxed px-2">
            최상의 성능을 통해 빠르고 원활한 사용자 경험을 제공합니다.
          </span>
        </div>

        <!-- 세 번째 카드 -->
        <div
          class="flex flex-col items-center text-center border border-default/20 dark:border-default/30 rounded-2xl p-4 sm:p-6 lg:p-6 min-h-60 sm:min-h-64 lg:min-h-72 justify-center hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 bg-linear-to-br from-emerald-500/10 dark:from-emerald-400/20 from-23% via-transparent via-50% to-transparent hover:from-emerald-100/80 dark:hover:from-emerald-400/30 backdrop-blur-sm md:col-span-2 lg:col-span-1"
        >
          <span class="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</span>
          <span class="text-lg sm:text-xl font-semibold text-highlighted mb-2 sm:mb-3">Easy Configuration</span>
          <span class="text-sm sm:text-base text-muted leading-relaxed px-2">
            유연한 옵션을 통해 원하는 방식으로 손쉽게 커스터마이징할 수 있습니다.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>
