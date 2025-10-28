<script lang="ts">
import type { AvatarProps } from '@nuxt/ui'
import type { ColorType, SizeType } from '~/types/common'

export type InputType = 'number' | 'color' | 'button' | 'checkbox' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | string & {}
export type InputVariantType = 'outline' | 'soft' | 'subtle' | 'ghost' | 'none'

export interface InputProps {
  type?: InputType
  placeholder?: string
  color?: ColorType
  variant?: InputVariantType
  size?: SizeType
  icon?: string
  avatar?: AvatarProps
  loading?: boolean
  loadingIcon?: string
  disabled?: boolean
  autocomplete?: string
  autofocus?: boolean
  highlight?: boolean
}
</script>

<script lang="ts" setup>
const {
  type = 'text',
  placeholder = 'input...',
  color = 'primary',
  variant = 'outline',
  size = 'md',
  icon,
  avatar,
  loading,
  loadingIcon,
  disabled,
  autocomplete,
  autofocus,
  highlight,
} = defineProps<InputProps>()

const model = defineModel({ default: '' })
</script>

<template>
  <div>
    <UInput
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :color="color"
      :variant="variant"
      :size="size"
      :icon="icon"
      :avatar="avatar"
      :loading="loading"
      :loading-icon="loadingIcon"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :highlight="highlight"
    />
  </div>
</template>

<style>

</style>
