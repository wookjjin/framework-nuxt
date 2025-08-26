<script lang="ts" setup>
const textArray = ref([
  'Building the future, one component at a time...',
  '코드를 예술로 바꾸는 여정에 동참하세요.',
  'Your ideas, driven by My Framework.  ',
  '더 쉽고 빠르게 개발하세요.',
  'From concept to deployment with ease.',
])
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
        >
          <div class="lg:min-h-[540px]">
            <div>
              <h1 class="text-pretty tracking-tight font-bold text-highlighted text-5xl sm:text-7xl">
                Welcome to
                <br>
                <span class="text-primary">My Framework</span>
              </h1>
              <div class="text-lg sm:text-xl/8 text-muted text-pretty mt-6">
                <div>
                  "Built with passion and attention to detail, this framework highlights the best of modern web
                  development. Dive into its component architecture and deployment strategies to see how deliberate
                  design combines seamlessly with robust functionality.""
                </div>
              </div>
            </div>
            <div class="mt-10">
              <div class="flex flex-wrap gap-x-6 gap-y-3">
                <div class="flex items-center flex-wrap gap-2">
                  <ui-button
                    label="Get Started"
                    size="xl"
                  />
                  <ui-button
                    label="View Guide"
                    color="secondary"
                    size="xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="relative flex bg-elevated/50 ring ring-default overflow-auto lg:absolute [@media(min-width:2400px)]:relative lg:-mt-16 [@media(min-width:2400px)]:mt-8 right-0 [@media(min-width:2400px)]:right-auto w-screen lg:w-[calc(50%-2rem)] [@media(min-width:2400px)]:w-full max-w-[800px] [@media(min-width:2400px)]:mx-auto rounded-none lg:rounded-l-[calc(var(--ui-radius)*4)] [@media(min-width:2400px)]:rounded-2xl -mx-4 sm:-mx-6 lg:mx-0"
          >
            <!-- TODO: tresJs Comp -->
            <TypingEffect :texts="textArray" />
          </div>
        </div>
      </div>
      <section
        class="relative isolate bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default"
      >
        <div
          class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16"
        >
          <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
            Core Features
          </h2>

          <!-- Mobile: 세로로 쌓임, Tablet: 2개씩, Desktop: 3개 가로배치 -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <!-- 첫 번째 카드 -->
            <div
              class="flex flex-col items-center text-center border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-6 min-h-60 sm:min-h-64 lg:min-h-72 justify-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-(--color-blue-500)/10 from-23% via-transparent via-50% to-transparent hover:from-blue-100"
            >
              <span class="text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</span>
              <span class="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-3">Fast Setup</span>
              <span class="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                간단한 설정만으로 바로 시작할 수 있습니다.
              </span>
            </div>

            <!-- 두 번째 카드 -->
            <div
              class="flex flex-col items-center text-center border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-6 min-h-60 sm:min-h-64 lg:min-h-72 justify-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-(--color-yellow-500)/10 from-23% via-transparent via-50% to-transparent hover:from-yellow-100"
            >
              <span class="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</span>
              <span class="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-3">High Performance</span>
              <span class="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                최상의 성능을 통해 빠르고 원활한 사용자 경험을 제공합니다.
              </span>
            </div>

            <!-- 세 번째 카드 -->
            <div
              class="flex flex-col items-center text-center border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-6 min-h-60 sm:min-h-64 lg:min-h-72 justify-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-(--color-mint-500)/10 from-23% via-transparent via-50% to-transparent hover:from-mint-100 md:col-span-2 lg:col-span-1"
            >
              <span class="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</span>
              <span class="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-3">Easy Configuration</span>
              <span class="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                유연한 옵션을 통해 원하는 방식으로 손쉽게 커스터마이징할 수 있습니다.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        class="relative isolate bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default"
      >
        <div
          class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-12 lg:gap-16"
        >
          <!-- Left Side -->
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Develop Intelligently,<br>Expand Rapidly
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-8">
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
                    class="h-12"
                  >
                    {{ n }}
                  </div>
                  <div
                    v-for="n in 6"
                    :key="`logo1-${n}`"
                    class="h-12"
                  >
                    {{ n }}
                  </div>
                </div>
              </div>
            </div>

            <ui-button
              label="View All Updates"
              color="neutral"
              class="flex items-center"
            >
              <span class="text-lg font-semibold pb-0.5">→</span>
            </ui-button>
          </div>

          <!-- Right Side - Card with Updates -->
          <div class="bg-gray-50 rounded-2xl p-8 space-y-8 shadow-sm">
            <h2 class="text-3xl font-bold text-gray-800 mb-12">
              Recent Update
            </h2>
            <div class="flex gap-4">
              <div class="w-13 h-13 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <span class="text-xl">🚀</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">
                  Dark Mode Support Added
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  다크 모드 지원 기능이 사용자 선호에 맞춰 제공됩니다.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-13 h-13 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <span class="text-xl">🔄</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">
                  TypeScript Integration
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  타입 안정성이 개선되어 개발 경험이 크게 향상되었습니다.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-13 h-13 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                <span class="text-xl">🏢</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">
                  Performance Optimization
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  코어 엔진을 최적화하여 응답 속도가 40% 빨라졌습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  /* 내용 크기만큼 */
  animation: marquee 20s linear infinite;
  /* 속도 조절 가능 */
}
</style>
