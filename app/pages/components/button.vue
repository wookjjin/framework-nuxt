<script lang="ts" setup>
async function onClick() {
  return new Promise<void>(res => setTimeout(res, 1000))
}
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Button" />
    <!-- Section: Basic -->
    <div class="flex flex-col mx-6 px-6 gap-8 overflow-y-auto">
      <section>
        <h2 class="text-xl font-semibold mb-4">
          1. Type
        </h2>
        <p class="text-gray-500 mb-6">
          다양한 <span class="font-semibold">type</span> 속성을 통해 버튼의 기본 동작을 지정할 수 있습니다.<br>
          예를 들어 <span class="font-semibold">button, submit, reset</span> 타입은 각각 일반 버튼, 폼 제출, 입력 초기화 용도로 사용됩니다.
        </p>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6">
          <UiButton
            label="Submit"
            type="submit"
          />
          <UiButton
            label="Reset"
            type="reset"
          />
          <UiButton
            label="Button"
            type="button"
          />
          <UiButton
            label="Disabled"
            type="button"
            disabled
          />
        </div>
      </section>

      <!-- Section: Color -->

      <section>
        <h2 class="text-xl font-semibold mb-4">
          2. Color
        </h2>
        <p class="text-gray-500 mb-6">
          색상(<span class="font-semibold">color</span>) 속성을 사용하여 버튼의 목적이나 상태를 시각적으로 구분할 수 있습니다.<br>
          예를 들어 <span class="font-semibold">primary, success, warning, error</span>와 같은 테마 컬러는 사용자에게 명확한 피드백을 제공합니다.
        </p>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6">
          <UiButton
            label="Primary"
            color="primary"
          />
          <UiButton
            label="Secondary"
            color="secondary"
          />
          <UiButton
            label="Success"
            color="success"
          />
          <UiButton
            label="Info"
            color="info"
          />
          <UiButton
            label="Warning"
            color="warning"
          />
          <UiButton
            label="Error"
            color="error"
          />
          <UiButton
            label="Neutral"
            color="neutral"
          />
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-4">
          3. Variant
        </h2>
        <p class="text-gray-500 mb-6">
          버튼의 <span class="font-semibold">variant</span> 속성은 스타일 표현 방식을 결정합니다.<br>
          <span class="font-semibold">solid, outline, soft, subtle, ghost, link</span> 등의 형태로 다양한 시각적 레벨을 연출할 수 있습니다.
        </p>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6">
          <UiButton
            label="Solid"
            color="neutral"
            variant="solid"
          />
          <UiButton
            label="Outline"
            color="neutral"
            variant="outline"
          />
          <UiButton
            label="Soft"
            color="neutral"
            variant="soft"
          />
          <UiButton
            label="Subtle"
            color="neutral"
            variant="subtle"
          />
          <UiButton
            label="Ghost"
            color="neutral"
            variant="ghost"
          />
          <UiButton
            label="Link"
            color="neutral"
            variant="link"
          />
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-4">
          4. Size
        </h2>
        <p class="text-gray-500 mb-6">
          다양한 크기(<span class="font-semibold">sm, md, lg</span>) 옵션을 제공하여 화면 구성에 맞게 버튼을 조정할 수 있습니다.<br>
          작은 크기는 보조 액션에, 큰 크기는 주요 액션 버튼으로 활용하기 적합합니다.
        </p>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6">
          <UiButton
            label="Small"
            size="sm"
          />
          <UiButton
            label="Middle"
            size="md"
          />
          <UiButton
            label="Large"
            size="lg"
          />
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-4">
          5. Icon & Avatar
        </h2>
        <p class="text-gray-500 mb-6">
          버튼에 아이콘이나 아바타를 추가하여 시각적 힌트를 제공할 수 있습니다.<br>
          예를 들어 검색 아이콘, 전송 화살표, 사용자 프로필 이미지 등을 통해 버튼의 역할을 직관적으로 전달합니다.
        </p>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6">
          <UiButton icon="i-lucide-search" />
          <UiButton
            icon="i-lucide-mail"
            label="Send"
          />
          <UiButton
            trailing-icon="i-lucide-arrow-right"
            label="Send"
          />
          <UiButton
            color="neutral"
            variant="outline"
            :avatar="{
              src: 'https://github.com/nuxt.png',
            }"
            label="Button"
          />
        </div>
      </section>
      <section>
        <h2 class="text-xl font-semibold mb-4">
          6. Loading
        </h2>
        <p class="text-gray-500 mb-6">
          비동기 요청이나 처리 중에는 <span class="font-semibold">loading</span> 속성을 사용하여 로딩 상태를 표시할 수 있습니다.<br>
          로딩 인디케이터는 사용자가 동작이 진행 중임을 인식하도록 도와, 더 나은 인터랙션 경험을 제공합니다.
        </p>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-muted rounded-xl p-6">
          <UiButton
            loading
            label="Loading..."
          />
          <UiButton
            loading-auto
            @click="onClick"
          >
            Button
          </uibutton>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>
