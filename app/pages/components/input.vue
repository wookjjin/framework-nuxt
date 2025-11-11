<script lang="ts" setup>
// const inputValue = ref('')
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Input" />
    <!-- Section: Basic -->
    <div class="flex flex-col mx-6 px-6 gap-8 overflow-y-auto">
      <section>
        <h2 class="text-xl font-semibold mb-4">
          1. Type
        </h2>
        <p class="text-gray-500 mb-6 whitespace-pre-line dark:text-muted">
          다양한 <span class="font-semibold dark:text-dimmed">type</span> 속성을 통해 입력 필드의 동작 방식을 지정할 수 있습니다.<br>
          예를 들어 <span class="font-semibold dark:text-dimmed">text, password, email, number</span> 등 HTML 표준 입력 타입을
          지원하며, 상황에 맞는 입력 형태를
          손쉽게 구현할 수
          있습니다.
        </p>

        <div
          class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
        >
          <UiInput
            type="text"
            placeholder="text"
          />
          <UiInput
            type="text"
            placeholder="disabled"
            disabled
          />
          <UiInput
            type="number"
            placeholder="number"
          />
          <UiInput
            type="password"
            placeholder="password"
          />
          <UiInput
            type="search"
            placeholder="search"
          />
          <UiInput type="file" />
        </div>
      </section>

      <!-- Section: Color -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          2. Color Variants
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          색상(<span class="font-semibold dark:text-dimmed">color</span>) 속성을 사용하여 입력 필드의 상태나 목적을 시각적으로 구분할 수 있습니다.<br>
          예를 들어 <span class="font-semibold dark:text-dimmed">primary, success, warning, error</span>와 같은 테마 컬러는 사용자에게 즉각적인 피드백을 제공합니다.
        </p>

        <div
          class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
        >
          <UiInput
            color="primary"
            placeholder="Primary"
          />
          <UiInput
            color="secondary"
            placeholder="Secondary"
          />
          <UiInput
            color="success"
            placeholder="Success"
          />
          <UiInput
            color="info"
            placeholder="Info"
          />
          <UiInput
            color="warning"
            placeholder="Warning"
          />
          <UiInput
            color="error"
            placeholder="Error"
          />
          <UiInput
            color="neutral"
            placeholder="Neutral"
          />
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-4">
          3. Size
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          다양한 크기(<span class="font-semibold dark:text-dimmed">sm, md, lg</span>) 옵션을 제공하여 상황에 맞게 입력 필드를 조정할 수 있습니다.<br>
          작은 크기는 좁은 공간이나 테이블 셀에 적합하고, 큰 크기는 폼의 주요 입력 요소로 사용하기 좋습니다.
        </p>
        <div
          class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
        >
          <UiInput
            size="sm"
            placeholder="Small size"
          />
          <UiInput
            size="md"
            placeholder="Medium size"
          />
          <UiInput
            size="lg"
            placeholder="Large size"
          />
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-4">
          4. Icon
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          입력창 안에 아이콘이나 아바타를 함께 표시하여 시각적 힌트를 제공할 수 있습니다.<br>
          예를 들어 검색 아이콘, 사용자 프로필 이미지 등으로 입력 목적을 직관적으로 전달합니다.
        </p>
        <div
          class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
        >
          <UiInput
            icon="i-lucide-search"
            placeholder="Search..."
          />
          <UiInput
            icon="i-lucide-mail"
            placeholder="Email"
          />
          <UiInput
            :avatar="{ src: 'https://github.com/nuxt.png' }"
            placeholder="With avatar"
          />
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-4">
          5. Loading
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          데이터 로딩이나 요청 처리 중일 때 loading 속성을 사용하여 상태를 시각적으로 표시할 수 있습니다.<br>
          로딩 인디케이터는 사용자가 입력이 처리 중임을 인식하도록 도와, 인터랙션 경험을 향상시킵니다.
        </p>
        <div
          class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
        >
          <UiInput
            loading
            placeholder="Search..."
          />
          <UiInput
            loading
            loading-icon="i-lucide-loader"
            placeholder="Search..."
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style>

</style>
