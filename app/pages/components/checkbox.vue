<script lang="ts" setup>
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Checkbox" />

    <div class="flex-1 overflow-y-auto pb-8">
      <div class="max-w-6xl flex flex-col gap-8">
        <!-- Section: Basic -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            1. Basic
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            기본 체크박스는 사용자가 단일 항목을 선택하거나 선택 해제할 수 있는 가장 단순한 형태입니다.<br>
            <span class="font-semibold dark:text-dimmed">label</span> 속성을 사용하여 옵션의 이름을 표시할 수 있습니다.
          </p>

          <div
            class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiCheckbox label="Option 1" />
            <UiCheckbox label="Option 2" />
            <UiCheckbox
              label="Option 3"
              default-value
            />
          </div>
        </section>

        <!-- Section: Color -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            2. Color
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            색상(<span class="font-semibold dark:text-dimmed">color</span>) 속성을 통해 체크박스의 테마를 지정할 수 있습니다.<br>
            <span class="font-semibold dark:text-dimmed">primary, success, warning, error, neutral</span>과 같은 색상으로 상태나
            목적을 구분할 수 있습니다.
          </p>

          <div
            class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiCheckbox
              label="Primary"
              color="primary"
              default-value
            />
            <UiCheckbox
              label="Secondary"
              color="secondary"
              default-value
            />
            <UiCheckbox
              label="Info"
              color="info"
              default-value
            />
            <UiCheckbox
              label="Success"
              color="success"
              default-value
            />
            <UiCheckbox
              label="Warning"
              color="warning"
              default-value
            />
            <UiCheckbox
              label="Error"
              color="error"
              default-value
            />
            <UiCheckbox
              label="Neutral"
              color="neutral"
              default-value
            />
          </div>
        </section>

        <!-- Section: Variant -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            3. Variant
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">variant</span> 속성을 통해 체크박스의 스타일 테마를 변경할 수 있습니다.<br>
            <span class="font-semibold dark:text-dimmed">list</span>일반적인 리스트형 체크박스로, 라벨과 설명이 텍스트 위주로 표시되고, <span
              class="font-semibold"
            >card</span>는 카드형 UI로, 항목 전체가 선택 영역이 되며 시각적으로 강조됩니다.
          </p>

          <div
            class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiCheckbox
              label="Card"
              variant="card"
            />
            <UiCheckbox
              class="items-center"
              label="List"
              variant="list"
            />
          </div>
        </section>

        <!-- Section: Size -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            4. Size
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            다양한 크기(<span class="font-semibold dark:text-dimmed">sm, md, lg</span>) 옵션을 제공하여 UI 환경에 맞게 조정할 수 있습니다.<br>
            작은 사이즈는 공간이 협소한 영역에, 큰 사이즈는 강조가 필요한 영역에 적합합니다.
          </p>

          <div
            class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiCheckbox
              label="Small"
              size="sm"
            />
            <UiCheckbox
              label="Medium"
              size="md"
            />
            <UiCheckbox
              label="Large"
              size="lg"
            />
          </div>
        </section>

        <!-- Section: Icon -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            5. Icon
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">icon</span> 또는 <span
              class="font-semibold dark:text-dimmed"
            >indeterminateIcon</span> 속성을 사용해 체크 표시를
            커스텀할 수 있습니다.<br>
            아이콘은 시스템의 톤앤매너에 맞게 변경 가능합니다.
          </p>

          <div
            class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiCheckbox
              label="Custom Check"
              icon="i-lucide-rocket"
              default-value
            />
            <UiCheckbox
              label="Indeterminate"
              indeterminate-icon="i-lucide-minus"
              default-value="indeterminate"
            />
          </div>
        </section>

        <!-- Section: Description -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            6. Description
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">description</span> 속성을 사용해 체크박스 아래에 추가 설명을 표시할 수 있습니다.<br>
            옵션의 의미나 주의사항을 함께 안내할 때 유용합니다.
          </p>

          <div
            class="grid sm:grid-cols-1 md:grid-cols-2 gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiCheckbox
              label="이용약관 동의"
              description="서비스 이용약관에 동의합니다."
            />
            <UiCheckbox
              label="개인정보 수집 동의"
              description="개인정보 수집 및 이용에 동의합니다."
            />
          </div>
        </section>

        <!-- Section: Disabled -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            7. Disabled
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">disabled</span> 속성을 사용해 비활성화된 상태를 표시할 수 있습니다.<br>
            사용자가 상호작용할 수 없는 항목을 명확하게 구분할 때 사용합니다.
          </p>

          <div
            class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiCheckbox
              label="Disabled (Unchecked)"
              disabled
            />
            <UiCheckbox
              label="Disabled (Checked)"
              default-value
              disabled
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
