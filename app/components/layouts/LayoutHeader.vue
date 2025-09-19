<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Docs',
      icon: 'i-lucide-library',
      to: '/docs',
      active: route.path.startsWith('/docs/'),
      children: [
        {
          label: 'Basics',
          icon: 'i-lucide-book-open',
          description: 'Vue.js의 기초 개념과 주요 기능을 학습하세요',
          to: '/docs/basics',
        },
        {
          label: 'Intermediate',
          icon: 'i-lucide-layers',
          description: '컴포넌트 구조와 상태 관리와 같은 중급 수준의 기술을 심화하여 익히세요',
          to: '/docs/intermediate',
        },
        {
          label: 'Advanced',
          icon: 'i-lucide-zap',
          description: '고급 패턴과 성능 최적화 기법을 통해 전문성을 한층 더 향상시켜보세요',
          to: '/docs/advanced',
        },
      ],
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      to: '/components',
      active: route.path.startsWith('/components/'),
      children: [
        {
          label: 'Tres',
          icon: 'i-lucide-hexagon',
          description: 'Create awesome 3D Components.',
          to: '/components/tres',
        },
      ],
    },
    {
      label: 'Examples',
      icon: 'i-lucide-box',
      to: '/examples',
      active: route.path.startsWith('/examples/'),
      children: [
      ],
    },
  ],
  [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      to: 'https://github.com/wookjjin/framework-nuxt',
      target: '_blank',
    },
    {
      label: 'Help',
      icon: 'i-lucide-circle-help',
      disabled: true,
    },
  ],
])
</script>

<template>
  <header class="bg-default/75 backdrop-blur border-b border-default h-[var(--header-height)] sticky top-0 z-50">
    <div
      class="w-full max-w-[var(--header-container)] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-full"
    >
      <div class="lg:flex-1 flex items-center gap-1.5 min-w-0">
        <NuxtLink
          to="/"
          class="flex gap-2 items-end cursor-pointer"
        >
          <UIcon
            name="i-lucide-cherry"
            class="size-8 text-muted"
          />
        </NuxtLink>
      </div>
      <div class="hidden lg:flex">
        <UNavigationMenu
          :items="items"
          class="w-full justify-center"
        />
      </div>
      <div class="flex items-center justify-end cursor-pointer lg:flex-1 gap-1.5">
        <ColorMode />
      </div>
    </div>
  </header>
</template>

<style></style>
