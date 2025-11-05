<script setup lang="ts">
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Separator" />

    <div class="flex flex-col mx-6 px-6 gap-8 overflow-y-auto">
      <!-- 1. Basic -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          1. Basic
        </h2>
        <p class="text-gray-500 mb-6">
          기본 구분선 형태입니다. label 또는 icon, avatar 속성을 추가하여 시각적 구분을 강화할 수 있습니다.
        </p>

        <div class="flex flex-col gap-4">
          <UiSeparator />
          <UiSeparator label="OR" />
          <UiSeparator icon="i-heroicons-sparkles" />
          <UiSeparator :avatar="{ src: 'https://i.pravatar.cc/120?img=1', alt: 'User 1' }" />
        </div>
      </section>

      <!-- 2. Orientation -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          2. Orientation
        </h2>
        <p class="text-gray-500 mb-6">
          orientation 속성을 통해 가로(horizontal) 또는 세로(vertical) 방향으로 설정할 수 있습니다.
        </p>

        <div class="flex items-center justify-center gap-8">
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
        <p class="text-gray-500 mb-6">
          type 속성을 사용하여 선의 스타일을 solid, dashed, dotted 중에서 선택할 수 있습니다.
        </p>

        <div class="flex flex-col gap-4">
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
        <p class="text-gray-500 mb-6">
          size 속성을 이용하여 선의 두께를 조절할 수 있습니다. xs, sm, md, lg 값을 지원합니다.
        </p>

        <div class="flex flex-col gap-4">
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
        <p class="text-gray-500 mb-6">
          color 속성을 통해 테마 색상(primary, success, warning, error 등)을 지정할 수 있습니다.
        </p>

        <div class="flex flex-col gap-4">
          <UiSeparator color="primary" />
          <UiSeparator color="success" />
          <UiSeparator color="warning" />
          <UiSeparator color="error" />
        </div>
      </section>
    </div>
  </div>
</template>
