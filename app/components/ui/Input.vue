<script lang="ts" setup>
import type { AvatarProps } from '@nuxt/ui'
import type { ColorType, InputType, InputVariantType, SizeType } from '~/types/common'

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
} = defineProps<{
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
}>()

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
