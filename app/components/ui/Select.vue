<script lang="ts">
import type { AvatarProps, SelectItem } from '@nuxt/ui'
import type { SelectContentProps as RekaSelectContentProps } from 'reka-ui'
import type { ColorType, SizeType } from '~/types/common'

type SelectVariantType = 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'
type SelectContentProps = Omit<RekaSelectContentProps, 'as' | 'asChild' | 'forceMount'>

export interface SelectProps {
  placeholder?: string
  color?: ColorType
  variant?: SelectVariantType
  size?: SizeType
  icon?: string
  trailingIcon?: string
  content?: SelectContentProps
  arrow?: boolean
  portal?: boolean | string | HTMLElement
  valueKey?: string
  labelKey?: string
  descriptionKey?: string
  items?: SelectItem[] | SelectItem[][]
  multiple?: boolean
  highlight?: boolean
  avatar?: AvatarProps
  loading?: boolean
  loadingIcon?: string
  disabled?: boolean
  autofocus?: boolean
  selectUi?: any
}
</script>

<script lang="ts" setup>
const {
  placeholder = 'Select...',
  color = 'primary',
  variant = 'outline',
  size = 'md',
  icon,
  trailingIcon,
  content = { side: 'bottom', sideOffset: 8, collisionPadding: 8, position: 'popper' },
  arrow = false,
  portal,
  valueKey,
  labelKey,
  descriptionKey,
  items,
  multiple,
  highlight,
  avatar,
  loading,
  loadingIcon,
  disabled,
  autofocus,
  selectUi,
} = defineProps<SelectProps>()

const model = defineModel<SelectItem | SelectItem[][]>({ default: null })
</script>

<template>
  <USelect
    v-bind="$attrs"
    v-model="model"
    :placeholder="placeholder"
    :color="color"
    :variant="variant"
    :size="size"
    :icon="icon"
    :trailing-icon="trailingIcon"
    :content="content"
    :arrow="arrow"
    :portal="portal"
    :value-key="valueKey"
    :label-key="labelKey"
    :description-key="descriptionKey"
    :items="items"
    :multiple="multiple"
    :highlight="highlight"
    :avatar="avatar"
    :loading="loading"
    :loading-icon="loadingIcon"
    :disabled="disabled"
    :autofocus="autofocus"
    :ui="selectUi"
  >
    <template
      v-if="$slots.leading"
      #leading="{ modelValue, open, ui }"
    >
      <slot
        name="leading"
        :model-value="modelValue"
        :open="open"
        :ui="ui"
      />
    </template>
  </USelect>
</template>

<style>

</style>
