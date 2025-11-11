<script lang="ts" setup>
import type { AlertProps } from '~/components/ui/Alert.vue'

const basicAlerts: AlertProps[] = [
  {
    title: 'Information',
    description: 'This is a basic info alert.',
    color: 'primary',
    variant: 'solid',
    icon: 'i-lucide-info',
  },
  {
    title: 'Success',
    description: 'Your operation completed successfully!',
    color: 'success',
    variant: 'soft',
    icon: 'i-lucide-check-circle-2',
  },
  {
    title: 'Warning',
    description: 'Please double check your input.',
    color: 'warning',
    variant: 'outline',
    icon: 'i-lucide-alert-triangle',
  },
  {
    title: 'Error',
    description: 'An unexpected error occurred.',
    color: 'error',
    variant: 'subtle',
    icon: 'i-lucide-x-circle',
  },
]

const closableAlerts: AlertProps[] = [
  {
    title: 'Closable Alert',
    description: 'You can close this alert manually.',
    color: 'neutral',
    variant: 'soft',
    icon: 'i-lucide-bell',
    close: true,
  },
  {
    title: 'Custom Close Icon',
    description: 'Custom close icon example.',
    color: 'primary',
    variant: 'outline',
    icon: 'i-lucide-info',
    close: true,
    closeIcon: 'i-lucide-x',
  },
]

const actionAlerts: AlertProps[] = [
  {
    title: 'Action Required',
    description: 'Please confirm your recent changes.',
    color: 'warning',
    variant: 'subtle',
    icon: 'i-lucide-alert-octagon',
    actions: [
      { label: 'Cancel', color: 'neutral', variant: 'ghost' },
      { label: 'Confirm', color: 'warning', variant: 'solid' },
    ],
  },
]

const horizontalAlerts: AlertProps[] = [
  {
    title: 'Horizontal Layout',
    description: 'This alert is laid out horizontally.',
    color: 'success',
    variant: 'soft',
    icon: 'i-lucide-layout',
    orientation: 'horizontal',
    actions: [
      { label: 'Cancel', color: 'neutral', variant: 'ghost' },
      { label: 'Confirm', color: 'success', variant: 'solid' },
    ],
  },
]
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Alert" />

    <div class="flex flex-col mx-6 px-6 gap-10 overflow-y-auto">
      <!-- Basic Variants -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          1. Variants
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          기본적인 Alert의 <span class="font-semibold dark:text-dimmed">color</span> 및 <span class="font-semibold dark:text-dimmed">variant</span> 조합 예제입니다.
        </p>

        <div class="flex flex-col gap-4">
          <UiAlert
            v-for="(alert, i) in basicAlerts"
            :key="i"
            v-bind="alert"
          />
        </div>
      </section>

      <!-- Closable -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          2. Closable
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          닫기 버튼(<span class="font-semibold dark:text-dimmed">close</span>)이 활성화된 Alert입니다.
        </p>

        <div class="flex flex-col gap-4">
          <UiAlert
            v-for="(alert, i) in closableAlerts"
            :key="i"
            v-bind="alert"
          />
        </div>
      </section>

      <!-- With Actions -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          3. With Actions
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          <span class="font-semibold dark:text-dimmed">actions</span> 속성을 사용하여 버튼을 함께 표시할 수 있습니다.
        </p>

        <div class="flex flex-col gap-4">
          <UiAlert
            v-for="(alert, i) in actionAlerts"
            :key="i"
            v-bind="alert"
          />
        </div>
      </section>

      <!-- Orientation -->
      <section>
        <h2 class="text-xl font-semibold mb-4">
          4. Orientation
        </h2>
        <p class="text-gray-500 mb-6 dark:text-muted">
          <span class="font-semibold dark:text-dimmed">orientation</span>을 <span class="font-semibold dark:text-dimmed">horizontal</span>로 설정하여 <span class="font-semibold dark:text-dimmed">actions</span>속성으로 렌더링된 버튼에 가로 레이아웃을 적용할 수 있습니다.
        </p>

        <div class="flex flex-col gap-4">
          <UiAlert
            v-for="(alert, i) in horizontalAlerts"
            :key="i"
            v-bind="alert"
          />
        </div>
      </section>
    </div>
  </div>
</template>
