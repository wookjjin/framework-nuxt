<script lang="ts">
import type { ColorType, OrientationType, SizeType } from '~/types/common'

export type ProgressAnimationType = 'carousel' | 'carousel-inverse' | 'swing' | 'elastic'

export interface ProgressProps {
  max?: number | any[]
  status?: boolean
  inverted?: boolean
  size?: SizeType
  color?: ColorType
  orientation?: OrientationType
  animation?: ProgressAnimationType
  getValueLabel?: (value: number | null, max: number) => string | undefined
  getValueText?: (value: number | null, max: number) => string | undefined
  ui?: any
}
</script>

<script lang="ts" setup>
const {
  max,
  status,
  inverted = false,
  size = 'md',
  color = 'primary',
  orientation = 'horizontal',
  animation = 'carousel',
} = defineProps<ProgressProps>()

const model = defineModel<null | number>({ default: null })

watchEffect(() => {
  console.log(model.value)
})
</script>

<template>
  <UProgress
    v-model="model"
    :max="max"
    :status="status"
    :inverted="inverted"
    :size="size"
    :color="color"
    :orientation="orientation"
    :animation="animation"
  />
</template>

<style>

</style>
