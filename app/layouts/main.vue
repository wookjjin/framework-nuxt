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
      <section />
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
