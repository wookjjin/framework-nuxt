<script lang="ts" setup>
import type { ProgressAnimationType } from '~/components/ui/Progress.vue'
import type { ColorType, OrientationType, SizeType } from '~/types/common'

const basicValue = ref(40)
const value = ref(40)
const max = 100

const increase = () => {
  if (basicValue.value < max)
    basicValue.value += 10
}

const decrease = () => {
  if (basicValue.value > 0)
    basicValue.value -= 10
}

const reset = () => {
  basicValue.value = 0
}

const colors: ColorType[] = ['primary', 'secondary', 'info', 'success', 'warning', 'neutral', 'error']
const sizes: SizeType[] = ['xs', 'sm', 'md', 'lg', 'xl']
const orientations: OrientationType[] = ['horizontal', 'vertical']
const animations: ProgressAnimationType[] = ['carousel', 'carousel-inverse', 'swing', 'elastic']
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Progress" />

    <div class="flex-1 overflow-y-auto">
      <div class="max-w-6xl mx-auto px-6 flex flex-col gap-8">
        <!-- Section 1: Basic -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            1. Basic
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">Progress</span>는 현재 진행 상태를
            시각적으로 표시하기 위한 컴포넌트입니다.<br>
            기본 진행도는 <span class="font-semibold dark:text-dimmed">v-model</span>로 제어되며,
            <span class="font-semibold dark:text-dimmed">max</span> 값에 따라 퍼센트가 계산됩니다.
          </p>

          <div class="bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiProgress
              v-model="basicValue"
              :max="max"
            />
            <div class="flex justify-between mt-4 items-center">
              <span class="text-sm text-gray-600 dark:text-muted">진행도: {{ basicValue }}%</span>
              <div class="flex gap-2">
                <UiButton
                  label="-"
                  color="neutral"
                  variant="outline"
                  @click="decrease"
                />
                <UiButton
                  label="+"
                  color="primary"
                  @click="increase"
                />
                <UiButton
                  label="Reset"
                  color="error"
                  variant="subtle"
                  @click="reset"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Section 2: Color -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            2. Color
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">color</span> 속성을 통해 진행바의 색상을
            변경할 수 있습니다.<br>
            각 색상은 프로젝트의 테마 팔레트(<span class="font-semibold dark:text-dimmed">primary, secondary, success, warning, error</span>)를
            기반으로 합니다.
          </p>

          <div
            class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiProgress
              v-for="color in colors"
              :key="color"
              v-model="value"
              :max="max"
              :color="color"
            />
          </div>
        </section>

        <!-- Section 3: Size -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            3. Size
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">size</span> 속성을 통해 진행바의 높이를
            조정할 수 있습니다.<br>
            사용 가능한 값은 <span class="font-semibold dark:text-dimmed">xs, sm, md, lg, xl</span>
            입니다.
          </p>

          <div
            class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiProgress
              v-for="size in sizes"
              :key="size"
              v-model="value"
              :max="max"
              :size="size"
            />
          </div>
        </section>

        <!-- Section 4: Orientation -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            4. Orientation
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">orientation</span> 속성을 통해
            진행 방향을 가로(horizontal) 또는 세로(vertical)로 지정할 수 있습니다.
          </p>

          <div
            class="bg-white border border-gray-200 rounded-xl p-6 flex justify-around items-end dark:bg-elevated/40 dark:border-default/30"
          >
            <div
              v-for="orientation in orientations"
              :key="orientation"
              class="flex flex-col items-center gap-2"
            >
              <span class="text-sm text-gray-600 capitalize">{{ orientation }}</span>
              <UiProgress
                v-model="value"
                :max="max"
                :orientation="orientation"
                :style="{ height: orientation === 'vertical' ? '120px' : undefined }"
              />
            </div>
          </div>
        </section>

        <!-- Section 5: Animation -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            5. Animation
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">animation</span> 속성은 진행바에 다양한
            시각적 효과를 부여합니다.<br>
            사용 가능한 값은
            <span class="font-semibold dark:text-dimmed">carousel, carousel-inverse, swing, elastic</span>
            입니다.
          </p>

          <div
            class="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiProgress
              v-for="animation in animations"
              :key="animation"
              :max="max"
              :animation="animation"
            />
          </div>
        </section>

        <!-- Section 6: Inverted -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            6. Inverted
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">inverted</span> 속성을 true로 설정하면
            진행 방향이 반대로 표시됩니다.<br>
            주로 색상이 반전된 테마나 어두운 배경에서 시각적 강조를 위해 사용됩니다.
          </p>

          <div class="bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiProgress
              v-model="value"
              :max="max"
              inverted
              color="primary"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
