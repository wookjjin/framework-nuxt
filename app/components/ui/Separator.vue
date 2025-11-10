<script lang="ts">
import type { AvatarProps } from '@nuxt/ui'
import type { ColorType, OrientationType, SizeType } from '~/types/common'

type SeparatorType = 'solid' | 'dashed' | 'dotted'

export interface SeparatorProps {
  orientation?: OrientationType
  label?: string
  icon?: string | object
  color?: ColorType
  avatar?: AvatarProps
  type?: SeparatorType
  size?: SizeType
  ui?: any
}
</script>

<script lang="ts" setup>
const {
  orientation = 'horizontal',
  label = '',
  icon,
  color = 'neutral',
  type = 'solid',
  avatar,
  size = 'xs',
} = defineProps<SeparatorProps>()
</script>

<template>
  <USeparator
    :orientation="orientation"
    :label="label"
    :icon="icon"
    :color="color"
    :type="type"
    :size="size"
    :avatar="avatar"
    :ui="ui"
  />
</template>

<style>

</style>
