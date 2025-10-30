<script lang="ts">
import type { ColorType, SizeType } from '~/types/common'

type Indicator = 'start' | 'end' | 'hidden'
type CheckboxVariant = 'card' | 'list'
export interface CheckboxProps {
  label?: string
  description?: string
  color?: ColorType
  variant?: CheckboxVariant
  size?: SizeType
  indicator?: Indicator
  icon?: string | object
  indeterminateIcon?: string | object
  disabled?: boolean
  name?: string
  id?: string
  required?: boolean
  defaultValue?: boolean | 'indeterminate'
  value?: null | string | number | bigint | Record<string, any>
  modelValue?: boolean | 'indeterminate'
  ui?: any
}
</script>

<script lang="ts" setup>
const {
  label,
  description,
  color = 'primary',
  variant = 'list',
  size = 'md',
  indicator = 'start',
  icon,
  indeterminateIcon,
  disabled,
  name,
  id,
  defaultValue,
  value = 'on',
  modelValue = undefined,
  ui,
} = defineProps<CheckboxProps>()
</script>

<template>
  <UCheckbox
    v-bind="$attrs"
    :id="id"
    :label="label"
    :description="description"
    :color="color"
    :variant="variant"
    :size="size"
    :indicator="indicator"
    :icon="icon"
    :indeterminate-icon="indeterminateIcon"
    :disabled="disabled"
    :name="name"
    :default-value="defaultValue"
    :value="value"
    :model-value="modelValue"
    :ui="ui"
  />
</template>

<style>

</style>
