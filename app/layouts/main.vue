<script lang="ts" setup>
const textArray = ref([
  'Building the future, one component at a time...',
  '코드를 예술로 만드는 여정에 함께하세요.',
  'Your ideas, powered by My Framework.',
  '개발을 더 쉽고, 더 빠르게.',
  'From concept to deployment, effortlessly.',
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
                  <!-- "Modern web development framework
                  built with Vue.js and Nuxt.js.
                  Featuring reusable components,
                  TypeScript support, and scalable
                  architecture for enterprise-ready
                  applications." -->
                  "Crafted with passion and precision, this framework showcases modern web development practices. From
                  component architecture to deployment strategies, explore how thoughtful design meets powerful
                  functionality.
                  "
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
              <span class="text-sm sm:text-base text-gray-600 leading-relaxed px-2">간단한 설정만으로 바로 시작할 수 있습니다.</span>
            </div>

            <!-- 두 번째 카드 -->
            <div
              class="flex flex-col items-center text-center border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-6 min-h-60 sm:min-h-64 lg:min-h-72 justify-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-(--color-yellow-500)/10 from-23% via-transparent via-50% to-transparent hover:from-yellow-100"
            >
              <span class="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</span>
              <span class="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-3">High Performance</span>
              <span class="text-sm sm:text-base text-gray-600 leading-relaxed px-2">최적화된 성능으로 빠르고 매끄러운 사용자 경험을
                제공합니다.</span>
            </div>

            <!-- 세 번째 카드 -->
            <div
              class="flex flex-col items-center text-center border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-6 min-h-60 sm:min-h-64 lg:min-h-72 justify-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-(--color-mint-500)/10 from-23% via-transparent via-50% to-transparent hover:from-mint-100 md:col-span-2 lg:col-span-1"
            >
              <span class="text-3xl sm:text-4xl mb-3 sm:mb-4">🔧</span>
              <span class="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-3">Easy Configuration</span>
              <span class="text-sm sm:text-base text-gray-600 leading-relaxed px-2">유연한 옵션으로 원하는 방식대로 손쉽게
                커스터마이징하세요.</span>
            </div>
          </div>
        </div>
      </section>
      <section
        class="relative isolate bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default"
      >
        <div
          class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid py-16 sm:py-24 lg:py-32 gap-8 sm:gap-16"
        />
      </section>
    </main>
    <LayoutFooter />
  </div>
</template>

<style>

</style>
