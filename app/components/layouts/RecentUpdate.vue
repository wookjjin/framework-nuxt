<script lang="ts" setup>

</script>

<template>
  <section
    class="relative isolate bg-gradient-to-b border-t border-default from-muted/20 dark:from-muted/10 to-default/50 dark:to-default/20"
  >
    <div
      class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-12 lg:gap-16"
    >
      <!-- Left Side -->
      <div>
        <h2 class="text-4xl lg:text-5xl font-bold text-highlighted mb-6 leading-tight">
          Develop Intelligently,<br>Expand Rapidly
        </h2>
        <p class="text-lg text-muted leading-relaxed mb-8">
          Nuxt를 기반으로 개발된 새로운 프레임워크로, 생산성과 확장성을 동시에 충족하는 것을 목표로 합니다. 개발자가 최소한의 노력으로 최대의 가치를 창출할 수 있도록 설계되었습니다.
        </p>

        <div class="relative overflow-hidden">
          <!-- 로고 자리 -->
          <div
            class="group relative flex items-center overflow-hidden gap-(--gap) [--gap:--spacing(16)] [--duration:20s] before:absolute before:pointer-events-none before:content-[&quot;&quot;] before:z-2 before:from-default before:to-transparent after:absolute after:pointer-events-none after:content-[&quot;&quot;] after:z-2 after:from-default after:to-transparent flex-row before:inset-y-0 before:left-0 before:h-full before:w-1/3 before:bg-gradient-to-r after:inset-y-0 after:right-0 after:h-full after:w-1/3 after:bg-gradient-to-l backface-hidden mt-6"
          >
            <div class="flex animate-marquee space-x-12">
              <div
                v-for="n in 6"
                :key="`logo1-${n}`"
                class="h-12 flex items-center justify-center text-toned font-semibold"
              >
                {{ n }}
              </div>
              <div
                v-for="n in 6"
                :key="`logo2-${n}`"
                class="h-12 flex items-center justify-center text-toned font-semibold"
              >
                {{ n }}
              </div>
            </div>
          </div>
        </div>

        <ui-button
          label="View All Updates"
          color="neutral"
          class="flex items-center mt-8"
        >
          <span class="text-lg font-semibold pb-0.5">→</span>
        </ui-button>
      </div>

      <!-- Right Side - Card with Updates -->
      <div
        class="bg-elevated/80 dark:bg-elevated/40 backdrop-blur-sm border border-default/20 dark:border-default/30 rounded-2xl p-8 space-y-8 shadow-sm dark:shadow-xl"
      >
        <h2 class="text-3xl font-bold text-highlighted mb-12">
          Recent Update
        </h2>

        <div class="flex gap-4">
          <div
            class="w-13 h-13 bg-elevated dark:bg-elevated/60 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-default/10 dark:border-default/20"
          >
            <span class="text-xl">🚀</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-highlighted">
              Dark Mode Support Added
            </h3>
            <p class="text-muted leading-relaxed">
              다크 모드 지원 기능이 사용자 선호에 맞춰 제공됩니다.
            </p>
          </div>
        </div>

        <div class="flex gap-4">
          <div
            class="w-13 h-13 bg-elevated dark:bg-elevated/60 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-default/10 dark:border-default/20"
          >
            <span class="text-xl">🔄</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-highlighted">
              TypeScript Integration
            </h3>
            <p class="text-muted leading-relaxed">
              타입 안정성이 개선되어 개발 경험이 크게 향상되었습니다.
            </p>
          </div>
        </div>

        <div class="flex gap-4">
          <div
            class="w-13 h-13 bg-elevated dark:bg-elevated/60 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-default/10 dark:border-default/20"
          >
            <span class="text-xl">🏢</span>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-highlighted">
              Performance Optimization
            </h3>
            <p class="text-muted leading-relaxed">
              코어 엔진을 최적화하여 응답 속도가 40% 빨라졌습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

</style>
