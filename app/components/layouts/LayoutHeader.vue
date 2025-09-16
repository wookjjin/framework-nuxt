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
          label: 'Guide',
          icon: 'i-lucide-book-open',
          description: '',
          to: '/docs/guide',
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
