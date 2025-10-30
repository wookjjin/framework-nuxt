<script lang="ts">
type CardVariant = 'solid' | 'outline' | 'soft' | 'subtle'

export interface CardProps {
  variant?: CardVariant
  ui?: any
}
</script>

<script lang="ts" setup>
const { variant = 'outline', ui } = defineProps<CardProps>()
</script>

<template>
  <UCard
    :variant="variant"
    :ui="ui"
  >
    <template
      v-if="$slots.header"
      #header
    >
      <slot name="header" />
    </template>

    <slot />

    <template
      v-if="$slots.footer"
      #footer
    >
      <slot name="footer" />
    </template>
  </UCard>
</template>

<style>

</style>
