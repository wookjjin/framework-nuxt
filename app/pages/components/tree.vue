<!-- eslint-disable no-console -->
<script lang="ts" setup>
import type { TreeItem } from '@nuxt/ui'
import type { TreeItemSelectEvent, TreeItemToggleEvent } from 'reka-ui'

// 기본 트리 데이터
const basics = [
  {
    label: 'app/',
    id: 'app',
    children: [
      {
        label: 'composables/',
        id: 'app/composables',
        children: [
          { label: 'useAuth.ts', icon: 'i-vscode-icons-file-type-typescript' },
          { label: 'useUser.ts', icon: 'i-vscode-icons-file-type-typescript' },
        ],
      },
      {
        label: 'components/',
        id: 'app/components',
        children: [
          { label: 'Card.vue', icon: 'i-vscode-icons-file-type-vue' },
          { label: 'Button.vue', icon: 'i-vscode-icons-file-type-vue' },
        ],
      },
    ],
  },
  { label: 'app.vue', id: 'app.vue', icon: 'i-vscode-icons-file-type-vue' },
  { label: 'nuxt.config.ts', id: 'nuxt.config.ts', icon: 'i-vscode-icons-file-type-nuxt' },
] satisfies TreeItem[]

// 중첩 구조 예제
const nestedItems = [
  {
    label: 'Root',
    id: 'root',
    children: [
      {
        label: 'Level 1',
        id: 'l1',
        children: [
          {
            label: 'Level 2',
            id: 'l2',
            children: [
              { label: 'Level 3 - A', id: 'l3a' },
              { label: 'Level 3 - B', id: 'l3b' },
            ],
          },
        ],
      },
    ],
  },
] satisfies TreeItem[]

const virtualItems: TreeItem[] = Array.from({ length: 1000 })
  .fill(0)
  .map((_, i) => ({
    label: `Item ${i + 1}`,
    trailingIcon: 'i-lucide-chevron-down',
    children: [
      { label: `Child ${i + 1}-1`, icon: 'i-lucide-file' },
      { label: `Child ${i + 1}-2`, icon: 'i-lucide-file' },
    ],
  }))

const expanded = ref(['app', 'app/composables'])
const expandedNested = ref(['root', 'l1', 'l2'])
const expandedMultiple = ref(['root'])
const selectedMultiple = ref<TreeItem[]>([])

const onSelect = (e: TreeItemSelectEvent<TreeItem>, item: TreeItem) => {
  if (e.detail.originalEvent.type === 'click') {
    console.log('click >>>>>>>', e, item)
  }
}

const onToggle = (e: TreeItemToggleEvent<TreeItem>, item: TreeItem) => {
  if (e.detail.originalEvent.type === 'keydown') {
    console.log('toggle >>>>>>>', e, item)
  }
}
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Tree" />

    <div class="flex-1 overflow-y-auto pb-8">
      <div class="max-w-6xl flex flex-col gap-8">
        <!-- Section 1: Basic -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            1. Basic
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            기본적인 트리 구조를 렌더링하는 예제입니다.
          </p>
          <div class="bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiTree
              v-model:expanded="expanded"
              :items="basics"
              :get-key="i => i.id"
              @select="onSelect"
              @toggle="onToggle"
            />
          </div>
        </section>

        <!-- Section 2: Nested -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            2. Nested
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            깊게 중첩된 구조를 표현하는 예제입니다.
          </p>
          <div class="bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiTree
              v-model:expanded="expandedNested"
              :items="nestedItems"
              :get-key="i => i.id"
              nested
            />
          </div>
        </section>

        <!-- Section 3: Multiple Selection -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            3. Multiple Selection
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            여러 항목을 동시에 선택할 수 있는 예제입니다.
          </p>
          <div class="bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiTree
              v-model="selectedMultiple"
              v-model:expanded="expandedMultiple"
              :items="basics"
              multiple
              :get-key="i => i.id"
            />
          </div>
        </section>

        <!-- Section 4: Disabled -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            4. Disabled
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            트리를 비활성화한 상태의 예제입니다.
          </p>
          <div class="bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiTree
              :items="basics"
              disabled
            />
          </div>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4">
            5. Virtualization
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            커스텀 아이콘과 <code>virtualize</code> 옵션을 사용하여 대량의 데이터를 빠르게 렌더링하는 예제입니다.
          </p>
          <div class="bg-white border border-muted rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30">
            <UiTree
              :items="virtualItems"
              virtualize
              class="h-60"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
