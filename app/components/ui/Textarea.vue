<script lang="ts">
import type { AvatarProps } from '@nuxt/ui'
import type { ColorType, SizeType } from '~/types/common'

export type TextareaVariantType = 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'

export interface TextareaProps {
  id?: string
  name?: string
  placeholder?: string
  color?: ColorType
  variant?: TextareaVariantType
  size?: SizeType
  required?: boolean
  autofocus?: boolean
  autofocusDelay?: number
  autoresize?: boolean
  autoresizeDelay?: number
  disabled?: boolean
  rows?: number
  maxrows?: number
  highlight?: boolean
  icon?: string | object
  avatar?: AvatarProps
  leading?: boolean
  leadingIcon?: string | object
  trailing?: boolean
  trailingIcon?: string | object
  loading?: boolean
  loadingIcon?: string | object
  cols?: string | number
  maxlength?: string | number
  minlength?: string | number
  ui?: any
}
</script>

<script lang="ts" setup>
const {
  id,
  name,
  placeholder,
  color,
  variant,
  size,
  required,
  autofocus,
  autofocusDelay,
  autoresize,
  autoresizeDelay,
  disabled,
  rows,
  maxrows,
  highlight,
  icon,
  avatar,
  leading,
  leadingIcon,
  trailing,
  trailingIcon,
  loading,
  loadingIcon,
  cols,
  maxlength,
  minlength,
  ui,
} = defineProps<TextareaProps>()

const model = defineModel<string | number>({ default: '' })
</script>

<template>
  <UTextarea
    v-bind="$attrs"
    :id="id"
    v-model="model"
    :name="name"
    :placeholder="placeholder"
    :color="color"
    :variant="variant"
    :size="size"
    :required="required"
    :autofocus="autofocus"
    :autofocus-delay="autofocusDelay"
    :autoresize="autoresize"
    :autoresize-delay="autoresizeDelay"
    :disabled="disabled"
    :rows="rows"
    :maxrows="maxrows"
    :highlight="highlight"
    :icon="icon"
    :avatar="avatar"
    :leading="leading"
    :leading-icon="leadingIcon"
    :trailing="trailing"
    :trailing-icon="trailingIcon"
    :loading="loading"
    :loading-icon="loadingIcon"
    :cols="cols"
    :maxlength="maxlength"
    :minlength="minlength"
    :ui="ui"
  />
</template>

<style scoped>
</style>
