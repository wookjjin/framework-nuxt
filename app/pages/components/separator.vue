<script setup lang="ts">
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Separator" />

    <div class="flex-1 overflow-y-auto pb-8">
      <div class="max-w-6xl flex flex-col gap-8">
        <!-- 1. Basic -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            1. Basic
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            기본 구분선 형태입니다. <span class="font-semibold dark:text-dimmed">label</span> 또는 <span
              class="font-semibold dark:text-dimmed"
            >icon, avatar</span> 속성을 추가하여 시각적 구분을 강화할 수 있습니다.
          </p>

          <div
            class="flex flex-col gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiSeparator />
            <UiSeparator label="OR" />
            <UiSeparator icon="i-heroicons-sparkles" />
          </div>
        </section>

        <!-- 2. Orientation -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            2. Orientation
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">orientation</span> 속성을 통해 가로(<span
              class="font-semibold dark:text-dimmed"
            >horizontal</span>) 또는 세로(<span
              class="font-semibold dark:text-dimmed"
            >vertical</span>) 방향으로 설정할 수
            있습니다.
          </p>

          <div
            class="flex items-center justify-center gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiSeparator
              class="w-40"
              orientation="horizontal"
            />
            <UiSeparator
              class="h-10"
              orientation="vertical"
            />
          </div>
        </section>

        <!-- 3. Type -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            3. Type
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">type</span> 속성을 사용하여 선의 스타일을 <span
              class="font-semibold dark:text-dimmed"
            >solid, dashed, dotted</span> 중에서 선택할 수 있습니다.
          </p>

          <div
            class="flex flex-col gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiSeparator
              label="Solid"
              type="solid"
            />
            <UiSeparator
              label="Dashed"
              type="dashed"
            />
            <UiSeparator
              label="Dotted"
              type="dotted"
            />
          </div>
        </section>

        <!-- 4. Size -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            4. Size
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">size</span> 속성을 이용하여 선의 두께를 조절할 수 있습니다. <span
              class="font-semibold dark:text-dimmed"
            >xs, sm, md, lg</span> 값을 지원합니다.
          </p>

          <div
            class="flex flex-col gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiSeparator
              label="XS"
              size="xs"
            />
            <UiSeparator
              label="SM"
              size="sm"
            />
            <UiSeparator
              label="MD"
              size="md"
            />
            <UiSeparator
              label="LG"
              size="lg"
            />
          </div>
        </section>

        <!-- 5. Color -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            5. Color
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">color</span> 속성을 통해 테마 색상(<span
              class="font-semibold dark:text-dimmed"
            >primary, success, warning, error 등</span>)을 지정할 수
            있습니다.
          </p>

          <div
            class="flex flex-col gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiSeparator color="primary" />
            <UiSeparator color="success" />
            <UiSeparator color="warning" />
            <UiSeparator color="error" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
