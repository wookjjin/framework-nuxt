<script lang="ts">
import type { AvatarProps, ButtonProps } from '@nuxt/ui'
import type { ColorType } from '~/types/common'

type AlertVariantType = 'solid' | 'outline' | 'soft' | 'subtle'
type AlertOrientationType = 'vertical' | 'horizontal'

export interface AlertProps {
  title?: string
  description?: string
  icon?: string | object
  avatar?: AvatarProps
  color?: ColorType
  variant?: AlertVariantType
  close?: boolean | Partial<ButtonProps>
  closeIcon?: string | object
  actions?: ButtonProps[]
  orientation?: AlertOrientationType
  ui?: any
}
</script>

<script lang="ts" setup>
const {
  title,
  description,
  icon,
  avatar,
  color = 'primary',
  variant = 'solid',
  close = false,
  closeIcon,
  actions,
  orientation = 'vertical',
  ui,
} = defineProps<AlertProps>()
</script>

<template>
  <UAlert
    :title="title"
    :description="description"
    :icon="icon"
    :avatar="avatar"
    :color="color"
    :variant="variant"
    :close="close"
    :close-icon="closeIcon"
    :actions="actions"
    :orientation="orientation"
    :ui="ui"
  />
</template>

<style>

</style>
