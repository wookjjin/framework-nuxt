<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

// const route = useRoute()
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Docs',
      icon: 'i-lucide-library',
      to: '/docs',
    },
    {
      label: 'Guide',
      icon: 'i-lucide-book-open',
      children: [
        // {
        //   label: 'Introduction',
        //   description: 'Fully styled and customizable components for Nuxt.',
        //   icon: 'i-lucide-house',
        //   to: '/docs/introduction',
        // },
        // {
        //   label: 'Installation',
        //   description: 'Learn how to install and configure Nuxt UI in your application.',
        //   icon: 'i-lucide-cloud-download',
        //   to: '/docs/installation',
        // },
        {
          label: 'Icons',
          icon: 'i-lucide-smile',
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.',
        },
        {
          label: 'Colors',
          icon: 'i-lucide-swatch-book',
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.',
        },
        {
          label: 'Theme',
          icon: 'i-lucide-cog',
          description:
            'You can customize components by using the `class` / `ui` props or in your app.config.ts.',
        },
      ],
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      to: '/components',
      children: [
        {
          label: 'Tres',
          icon: 'i-lucide-hexagon',
          description: 'Create awesome 3D Components.',
          to: '/components/tres',
        },
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
          arrow
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
