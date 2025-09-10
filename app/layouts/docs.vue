<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const route = useRoute()

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <div>
    <LayoutHeader />
    <UMain>
      <SvgGradientBorder />
      <UContainer>
        <UPage>
          <template #left>
            <UPageAside>
              <UContentNavigation
                :key="route.path"
                :navigation="navigation"
                highlight
                :ui="{
                  linkTrailingBadge: 'font-semibold uppercase',
                }"
              />
            </UPageAside>
          </template>
          <slot />
        </UPage>
      </UContainer>
    </UMain>
  </div>
</template>
