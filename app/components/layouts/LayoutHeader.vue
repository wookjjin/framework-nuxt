<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Guide',
      icon: 'i-lucide-book-open',
      children: [
        {
          label: 'Introduction',
          description: 'Fully styled and customizable components for Nuxt.',
          icon: 'i-lucide-house',
        },
        {
          label: 'Installation',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-lucide-cloud-download',
        },
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
      label: 'Composables',
      icon: 'i-lucide-database',
      children: [
        {
          label: 'defineShortcuts',
          icon: 'i-lucide-file-text',
          description: 'Define shortcuts for your application.',
          to: '/composables/define-shortcuts',
        },
        {
          label: 'useOverlay',
          icon: 'i-lucide-file-text',
          description: 'Display a modal/slideover within your application.',
          to: '/composables/use-overlay',
        },
        {
          label: 'useToast',
          icon: 'i-lucide-file-text',
          description: 'Display a toast within your application.',
          to: '/composables/use-toast',
        },
      ],
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      to: '/components',
      children: [
        {
          label: 'Link',
          icon: 'i-lucide-file-text',
          description: 'Use NuxtLink with superpowers.',
          to: '/components/link',
        },
        {
          label: 'Modal',
          icon: 'i-lucide-file-text',
          description: 'Display a modal within your application.',
          to: '/components/modal',
        },
        {
          label: 'NavigationMenu',
          icon: 'i-lucide-file-text',
          description: 'Display a list of links.',
          to: '/components/navigation-menu',
        },
        {
          label: 'Pagination',
          icon: 'i-lucide-file-text',
          description: 'Display a list of pages.',
          to: '/components/pagination',
        },
        {
          label: 'Popover',
          icon: 'i-lucide-file-text',
          description: 'Display a non-modal dialog that floats around a trigger element.',
          to: '/components/popover',
        },
        {
          label: 'Progress',
          icon: 'i-lucide-file-text',
          description: 'Show a horizontal bar to indicate task progression.',
          to: '/components/progress',
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
        <NuxtLink to="/" class="flex gap-2 items-end cursor-pointer">
          <UIcon name="i-lucide-cherry" class="size-8 text-muted" />
        </NuxtLink>
      </div>
      <div class="hidden lg:flex">
        <UNavigationMenu arrow :items="items" class="w-full justify-center" />
      </div>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <ColorMode />
      </div>
    </div>
  </header>
</template>

<style></style>
