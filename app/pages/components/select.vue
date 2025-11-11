<script setup lang="ts">
import type { AvatarProps } from '@nuxt/ui'

const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Durian', value: 'durian' },
]

const groupedItems = [
  [
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
  ],
  [
    { label: 'DevOps', value: 'devops' },
    { label: 'AI', value: 'ai' },
  ],
]
const selectedBasic = ref(null)
const selectedVariant = ref(null)
const selectedColor = ref(null)
const selectedAvatar = ref(null)
const selectedLoading = ref(null)
const selectedMultiple = ref([])

const { data: users, status } = await useFetch('https://jsonplaceholder.typicode.com/users', {
  key: 'typicode-users',
  transform: (data: { id: number, name: string }[]) => {
    return data?.map(user => ({
      label: user.name,
      value: String(user.id),
      avatar: { src: `https://i.pravatar.cc/120?img=${user.id}` },
    }))
  },
  lazy: true,
})

function getUserAvatar(value: string) {
  return users.value?.find(user => user.value === value)?.avatar || {}
}
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Select" />
    <!-- 1. Basic -->
    <div class="flex flex-col mx-6 px-6 gap-8 overflow-y-auto">
      <section>
        <h2 class="text-xl font-semibold mb-4">
          1. Basic
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          기본 Select 예제입니다. <span class="font-semibold dark:text-dimmed">placeholder</span>와 <span
            class="font-semibold dark:text-dimmed"
          >items</span> 속성을 지정하면 기본 드롭다운을 사용할 수 있습니다.
        </p>

        <UiSelect
          v-model="selectedBasic"
          :items="items"
          placeholder="Select a fruit"
        />
      </section>

      <!-- 2. Variant -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          2. Variant
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          <span class="font-semibold dark:text-dimmed">variant</span> 속성을 통해 <span
            class="font-semibold dark:text-dimmed"
          >Select</span>의 외형 스타일을 변경할 수 있습니다. <span
            class="font-semibold dark:text-dimmed"
          >outline, soft,
            s ubtle, ghost, none</span> 타입을 지원합니다.
        </p>

        <div
          class="flex flex-col gap-4 bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
        >
          <UiSelect
            v-model="selectedVariant"
            :items="items"
            portal="body"
            variant="outline"
            placeholder="Outline"
          />
          <UiSelect
            v-model="selectedVariant"
            :items="items"
            portal="body"
            variant="soft"
            placeholder="Soft"
          />
          <UiSelect
            v-model="selectedVariant"
            :items="items"
            portal="body"
            variant="subtle"
            placeholder="Subtle"
          />
          <UiSelect
            v-model="selectedVariant"
            :items="items"
            portal="body"
            variant="ghost"
            placeholder="Ghost"
          />
          <UiSelect
            v-model="selectedVariant"
            :items="items"
            portal="body"
            variant="none"
            placeholder="None"
          />
        </div>
      </section>

      <!-- 3. Color -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          3. Color
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          <span class="font-semibold dark:text-dimmed">color</span> 속성으로 <span
            class="font-semibold dark:text-dimmed"
          >Select</span>의 색상 테마를 변경할 수 있습니다. <span
            class="font-semibold dark:text-dimmed"
          >primary, success, warning,
            error</span> 등을 사용할 수 있습니다.
        </p>

        <div
          class="flex flex-col gap-4 bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
        >
          <UiSelect
            v-model="selectedColor"
            :items="items"
            portal="body"
            highlight
            color="primary"
            placeholder="Primary"
          />
          <UiSelect
            v-model="selectedColor"
            :items="items"
            portal="body"
            highlight
            color="secondary"
            placeholder="Secondary"
          />
          <UiSelect
            v-model="selectedColor"
            :items="items"
            portal="body"
            highlight
            color="success"
            placeholder="Success"
          />
          <UiSelect
            v-model="selectedColor"
            :items="items"
            portal="body"
            highlight
            color="info"
            placeholder="Info"
          />
          <UiSelect
            v-model="selectedColor"
            :items="items"
            portal="body"
            highlight
            color="warning"
            placeholder="Warning"
          />
          <UiSelect
            v-model="selectedColor"
            :items="items"
            portal="body"
            highlight
            color="neutral"
            placeholder="Neutral"
          />
          <UiSelect
            v-model="selectedColor"
            :items="items"
            portal="body"
            highlight
            color="error"
            placeholder="Error"
          />
        </div>
      </section>

      <!-- 4. Multiple -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          4. Multiple
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          multiple 속성을 사용하면 여러 값을 동시에 선택할 수 있습니다.
        </p>

        <UiSelect
          v-model="selectedMultiple"
          :items="items"
          multiple
          portal="body"
          placeholder="Select multiple fruits"
        />
      </section>

      <!-- 5. Avatar & Icon -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          5. Avatar & Icon
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          <span class="font-semibold dark:text-dimmed">icon</span> 또는 <span
            class="font-semibold dark:text-dimmed"
          >avatar</span> 속성을 통해 항목에 아이콘이나 프로필 이미지를 함께 표시할 수 있습니다.
        </p>

        <UiSelect
          v-model="selectedAvatar"
          :loading="status === 'pending'"
          :items="users"
          value-key="value"
          portal="body"
          placeholder="Select a user"
        >
          <template #leading="{ modelValue, ui }">
            <UAvatar
              v-if="modelValue"
              v-bind="getUserAvatar(modelValue)"
              :size="(ui.leadingAvatarSize() as AvatarProps['size'])"
              :class="ui.leadingAvatar()"
            />
          </template>
        </UiSelect>
      </section>

      <!-- 6. Loading -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          6. Loading
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          <span class="font-semibold dark:text-dimmed">loading</span> 속성을 <span
            class="font-semibold dark:text-dimmed"
          >true</span>로 설정하면 데이터 로딩 상태를 시각적으로 표시할 수 있습니다.
        </p>

        <UiSelect
          v-model="selectedLoading"
          :items="['Backlog', 'Todo', 'In Progress', 'Done']"
          portal="body"
          loading
          placeholder="Loading..."
        />
      </section>

      <!-- 7. Grouped Items -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          7. Grouped Items
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          2차원 배열 형태의 <span class="font-semibold dark:text-dimmed">items</span>를 전달하면 그룹 단위로 구분된 Select를 만들 수 있습니다.
        </p>

        <UiSelect
          v-model="selectedBasic"
          :items="groupedItems"
          portal="body"
          placeholder="Select category"
        />
      </section>
    </div>
  </div>
</template>
