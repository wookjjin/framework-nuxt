<script lang="ts" setup>
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Card" />

    <div class="flex-1 overflow-y-auto">
      <div class="max-w-6xl mx-auto px-6 flex flex-col gap-8">
        <!-- Section: Variant -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            1. Variant
          </h2>
          <p class="text-gray-500 mb-6">
            카드(<span class="font-semibold">variant</span>) 속성을 사용하면 카드의 시각적 스타일을 손쉽게 변경할 수 있습니다.<br>
            <span class="font-semibold">solid</span>는 배경이 채워진 형태, <span class="font-semibold">outline</span>은 테두리 중심의
            디자인,
            <span class="font-semibold">soft</span>와 <span class="font-semibold">subtle</span>은 각각 부드럽고 미묘한 톤을
            제공합니다.<br>
            이를 통해 컨텐츠의 중요도나 시각적 위계를 명확히 표현할 수 있습니다.
          </p>

          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6">
            <UiCard variant="solid">
              <template #header>
                <h3 class="text-lg font-semibold text-white">
                  Solid
                </h3>
              </template>
              <p class="text-white text-sm">
                배경이 채워져 컨텐츠 영역이 강조되는 스타일입니다.
              </p>
            </UiCard>

            <UiCard variant="outline">
              <template #header>
                <h3 class="text-lg font-semibold text-gray-800">
                  Outline
                </h3>
              </template>
              <p class="text-gray-600 text-sm">
                얇은 테두리로 구조를 구분하는 기본 카드 스타일입니다.
              </p>
            </UiCard>

            <UiCard variant="soft">
              <template #header>
                <h3 class="text-lg font-semibold text-gray-800">
                  Soft
                </h3>
              </template>
              <p class="text-gray-600 text-sm">
                은은한 배경색으로 시각적 부담을 줄인 부드러운 스타일입니다.
              </p>
            </UiCard>

            <UiCard variant="subtle">
              <template #header>
                <h3 class="text-lg font-semibold text-gray-800">
                  Subtle
                </h3>
              </template>
              <p class="text-gray-600 text-sm">
                거의 배경이 없는 듯한 미묘한 스타일로, 주변 요소와 잘 어울립니다.
              </p>
            </UiCard>
          </div>
        </section>

        <!-- Section: Header & Footer -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            2. Header & Footer
          </h2>
          <p class="text-gray-500 mb-6">
            카드에는 <span class="font-semibold">header</span>와 <span class="font-semibold">footer</span> 슬롯을 제공하여,
            제목 영역이나 추가 액션 버튼을 쉽게 배치할 수 있습니다.<br>
            이를 통해 컨텐츠의 구조를 명확히 하고, 다양한 레이아웃을 구성할 수 있습니다.
          </p>

          <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-muted rounded-xl p-6">
            <UiCard variant="outline">
              <template #header>
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-gray-800">
                    Header
                  </h3>
                  <UiButton
                    color="neutral"
                    size="sm"
                    variant="subtle"
                    label="Action"
                  />
                </div>
              </template>

              <p class="text-gray-600 text-sm mb-4">
                이 카드는 header와 footer 슬롯을 모두 사용하는 예시입니다.
              </p>

              <template #footer>
                <p class="text-sm text-gray-400">
                  Footer 영역에는 날짜, 상태 표시, 버튼 등을 배치할 수 있습니다.
                </p>
              </template>
            </UiCard>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
