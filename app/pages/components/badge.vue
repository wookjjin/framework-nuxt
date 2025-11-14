<script lang="ts" setup>
import type { BadgeProps } from '~/components/ui/Badge.vue'

const basicBadges: BadgeProps[] = [
  { label: 'Primary', color: 'primary', variant: 'solid' },
  { label: 'Success', color: 'success', variant: 'soft' },
  { label: 'Warning', color: 'warning', variant: 'outline' },
  { label: 'Error', color: 'error', variant: 'subtle' },
]

const squareBadges: BadgeProps[] = [
  { label: '1', color: 'primary', variant: 'solid', square: true },
  { label: '99+', color: 'error', variant: 'soft', square: true },
  { label: 'New', color: 'success', variant: 'outline', square: true },
]

const iconBadges: BadgeProps[] = [
  { label: 'Info', icon: 'i-lucide-info', color: 'primary', variant: 'soft' },
  { label: 'Success', icon: 'i-lucide-check', color: 'success', variant: 'solid' },
  { label: 'Warning', icon: 'i-lucide-alert-triangle', color: 'warning', variant: 'outline' },
  { label: 'Error', icon: 'i-lucide-x', color: 'error', variant: 'subtle' },
]

const leadingBadges: BadgeProps[] = [
  { label: 'Messages', leading: true, leadingIcon: 'i-lucide-message-square', color: 'primary', variant: 'soft' },
  { label: 'Upload', leading: true, leadingIcon: 'i-lucide-upload', color: 'success', variant: 'solid' },
]

const trailingBadges: BadgeProps[] = [
  { label: 'Notification', trailing: true, trailingIcon: 'i-lucide-bell', color: 'warning', variant: 'soft' },
  { label: 'Delete', trailing: true, trailingIcon: 'i-lucide-trash', color: 'error', variant: 'outline' },
]

const avatarBadges: BadgeProps[] = [
  {
    label: 'Mayer',
    avatar: { src: 'https://i.pravatar.cc/40?img=8', alt: 'User' },
    color: 'primary',
    variant: 'subtle',
  },
  {
    label: 'BarVista',
    avatar: { src: 'https://i.pravatar.cc/40?img=12', alt: 'User' },
    color: 'success',
    variant: 'soft',
  },
]
</script>

<template>
  <div class="h-full flex flex-col">
    <PageTitle page-title="Badge" />

    <div class="flex-1 overflow-y-auto pb-8">
      <div class="max-w-6xl flex flex-col gap-8">
        <!-- Basic Variants -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            1. Variants
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            기본적인 Badge의 <span class="font-semibold dark:text-dimmed">color</span> 및 <span
              class="font-semibold dark:text-dimmed"
            >variant</span> 조합 예제입니다.
          </p>
          <div
            class="flex gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiBadge
              v-for="(badge, i) in basicBadges"
              :key="i"
              v-bind="badge"
            />
          </div>
        </section>

        <!-- Square Badges -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            2. Square
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">square</span> 속성을 사용하여 모든 면에 동일한 패딩을 적용하여 표시할 수 있습니다.
          </p>
          <div
            class="flex gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiBadge
              v-for="(badge, i) in squareBadges"
              :key="i"
              v-bind="badge"
            />
          </div>
        </section>

        <!-- Icon Badges -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            3. Icon
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">icon</span> 속성을 통해 아이콘을 함께 표시할 수 있습니다.
          </p>
          <div
            class="flex gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiBadge
              v-for="(badge, i) in iconBadges"
              :key="i"
              v-bind="badge"
            />
          </div>
        </section>

        <!-- Leading Icon -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            4. Leading Icon
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">leading</span>과 <span
              class="font-semibold dark:text-dimmed"
            >leadingIcon</span> 속성을 사용해 텍스트 앞에 아이콘을 배치할 수 있습니다.
          </p>
          <div
            class="flex gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiBadge
              v-for="(badge, i) in leadingBadges"
              :key="i"
              v-bind="badge"
            />
          </div>
        </section>

        <!-- Trailing Icon -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            5. Trailing Icon
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">trailing</span>과 <span
              class="font-semibold dark:text-dimmed"
            >trailingIcon</span> 속성을 사용해 텍스트 뒤에 아이콘을 배치할 수 있습니다.
          </p>
          <div
            class="flex gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiBadge
              v-for="(badge, i) in trailingBadges"
              :key="i"
              v-bind="badge"
            />
          </div>
        </section>

        <!-- Avatar Badge -->
        <section>
          <h2 class="text-xl font-semibold mb-4">
            6. Avatar
          </h2>
          <p class="text-gray-500 mb-6 dark:text-muted">
            <span class="font-semibold dark:text-dimmed">avatar</span> 속성을 사용하여 사용자 아바타와 함께 표시할 수 있습니다.
          </p>
          <div
            class="flex gap-6 bg-white border border-gray-200 rounded-xl p-6 dark:bg-elevated/40 dark:border-default/30"
          >
            <UiBadge
              v-for="(badge, i) in avatarBadges"
              :key="i"
              v-bind="badge"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
