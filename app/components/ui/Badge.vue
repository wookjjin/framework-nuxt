<script lang="ts">
import type { AvatarProps } from '@nuxt/ui'
import type { ColorType } from '~/types/common'

type BadgeVariant = 'solid' | 'outline' | 'soft' | 'subtle'

export interface BadgeProps {
  label?: string | number
  color?: ColorType
  variant?: BadgeVariant
  square?: boolean
  icon?: string | object
  avatar?: AvatarProps
  leading?: boolean
  leadingIcon?: string | object
  trailing?: boolean
  trailingIcon?: string | object
  ui?: any
}
</script>

<script lang="ts" setup>
const {
  label,
  color,
  variant,
  square,
  icon,
  avatar,
  leading,
  leadingIcon,
  trailing,
  trailingIcon,
  ui,
} = defineProps<BadgeProps>()
</script>

<template>
  <UBadge
    :color="color"
    :variant="variant"
    :square="square"
    :icon="icon"
    :avatar="avatar"
    :leading="leading"
    :leading-icon="leadingIcon"
    :trailing="trailing"
    :trailing-icon="trailingIcon"
    :ui="ui"
  >
    <template v-if="label">
      {{ label }}
    </template>
  </UBadge>
</template>

<style>

</style>
