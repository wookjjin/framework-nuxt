<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: 'Docs',
      icon: 'i-lucide-library',
      to: '/docs',
      active: route.path.startsWith('/docs/'),
      children: [
        {
          label: 'Getting Started',
          icon: 'i-lucide-square-play',
          description: 'Framework 설치와 실행 방법, 그리고 프로젝트 구조에 대해 학습하세요',
          to: '/docs/getting-started',
        },
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
      active: route.path.startsWith('/components'),
    },
    {
      label: 'Examples',
      icon: 'i-lucide-box',
      to: '/examples',
      active: route.path.startsWith('/examples'),
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
  <UHeader
    :menu="{
      transition: true,
    }"
  >
    <template #title>
      <UIcon
        name="i-lucide-cherry"
        class="size-8 text-muted"
      />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <ColorMode />

      <UTooltip text="Open on GitHub">
        <!-- :kbds="['meta', 'G']" -->
        <UiButton
          color="neutral"
          variant="ghost"
          to="https://github.com/wookjjin/framework-nuxt"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>

<style></style>
