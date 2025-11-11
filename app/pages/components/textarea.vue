<script lang="ts" setup>
import type { TextareaVariantType } from '~/components/ui/Textarea.vue'
import type { ColorType, SizeType } from '~/types/common'

const basicValue = ref('')
const autoresizeValue = ref('이 텍스트는 입력 길이에 따라 자동으로 높이가 조정됩니다.')
const loadingValue = ref('로딩 중...')
const disabledValue = ref('비활성화된 텍스트 영역입니다.')

const colors: ColorType[] = ['primary', 'secondary', 'success', 'warning', 'error', 'neutral']
const sizes: SizeType[] = ['xs', 'sm', 'md', 'lg', 'xl']
const variants: TextareaVariantType[] = ['outline', 'soft', 'subtle', 'ghost', 'none']
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Textarea" />

    <div class="flex-1 overflow-y-auto pb-8">
      <div class="max-w-6xl flex flex-col gap-8">
        <!-- Section 1: Basic -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            1. Basic
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">Textarea</span>는 여러 줄의 텍스트 입력을 위한
            기본 입력 컴포넌트입니다.<br>
            <span class="font-semibold dark:text-dimmed">v-model</span>을 통해 양방향 데이터 바인딩이 가능하며,
            <span class="font-semibold dark:text-dimmed">placeholder</span>로 안내 문구를 표시할 수 있습니다.
          </p>

          <div class="bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiTextarea
              v-model="basicValue"
              placeholder="내용을 입력하세요..."
              color="primary"
              :rows="4"
            />
            <p class="text-sm text-gray-600 mt-2">
              입력 값: {{ basicValue }}
            </p>
          </div>
        </section>

        <!-- Section 2: Color -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            2. Color
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">color</span> 속성을 이용하여 다양한 테마 색상으로
            표시할 수 있습니다.<br>
            일반적으로 <span class="font-semibold dark:text-dimmed">primary</span>는 기본 색상이며,
            <span class="font-semibold dark:text-dimmed">success</span>, <span class="font-semibold">error</span> 등으로 피드백을 표현할 수 있습니다.
          </p>

          <div
            class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiTextarea
              v-for="color in colors"
              :key="color"
              v-model="basicValue"
              :color="color"
              :placeholder="`Color: ${color}`"
              :rows="2"
            />
          </div>
        </section>

        <!-- Section 3: Size -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            3. Size
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">size</span> 속성으로 입력 영역의 크기를 조정할 수 있습니다.<br>
            사용 가능한 값은
            <span class="font-semibold dark:text-dimmed">xs, sm, md, lg, xl</span> 입니다.
          </p>

          <div
            class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiTextarea
              v-for="size in sizes"
              :key="size"
              v-model="basicValue"
              :size="size"
              :placeholder="`Size: ${size}`"
              :rows="2"
            />
          </div>
        </section>

        <!-- Section 4: Variant -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            4. Variant
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">variant</span> 속성은 테두리나 배경 표현 방식을 지정합니다.<br>
            사용 가능한 값은
            <span class="font-semibold dark:text-dimmed">outline, soft, subtle, ghost, none</span> 입니다.
          </p>

          <div
            class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiTextarea
              v-for="variant in variants"
              :key="variant"
              v-model="basicValue"
              :variant="variant"
              :placeholder="`Variant: ${variant}`"
              :rows="2"
            />
          </div>
        </section>

        <!-- Section 5: Autoresize -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            5. Autoresize
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">autoresize</span> 속성을 true로 설정하면
            입력 내용에 따라 높이가 자동으로 조정됩니다.
          </p>

          <div class="bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiTextarea
              v-model="autoresizeValue"
              autoresize
              :rows="1"
              placeholder="자동 높이 조정 예시"
              color="success"
            />
          </div>
        </section>

        <!-- Section 6: Icon & Loading -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            6. Icon & Loading
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">icon</span> 또는 <span class="font-semibold dark:text-dimmed">loading</span> 속성을
            이용하여 상태를 시각적으로 표현할 수 있습니다.
          </p>

          <div
            class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiTextarea
              v-model="loadingValue"
              placeholder="로딩 상태 예시"
              color="primary"
              loading
              loading-icon="i-lucide-loader-2"
            />
            <UiTextarea
              v-model="basicValue"
              placeholder="아이콘이 있는 텍스트 영역"
              color="secondary"
              leading-icon="i-lucide-edit-3"
            />
          </div>
        </section>

        <!-- Section 7: Disabled -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            7. Disabled
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">disabled</span> 속성은 사용자가 입력할 수 없도록 비활성화합니다.
          </p>

          <div class="bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiTextarea
              v-model="disabledValue"
              placeholder="입력 불가 상태"
              color="neutral"
              disabled
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
