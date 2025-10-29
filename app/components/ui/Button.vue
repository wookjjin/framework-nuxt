<script lang="ts">
import type { AvatarProps } from '@nuxt/ui'
import type { ColorType, SizeType } from '~/types/common'

type ButtonType = 'submit' | 'reset' | 'button'
type ActiveColorType = 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'
type ButtonVariantType = 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost' | 'link' | undefined

export interface ButtonProps {
  label?: string
  color?: ColorType
  activeColor?: ActiveColorType
  variant?: ButtonVariantType
  size?: SizeType
  icon?: string
  trailingIcon?: string
  avatar?: AvatarProps
  active?: boolean
  loading?: boolean
  type?: ButtonType
  to?: string
  loadingIcon?: string
  loadingAuto?: boolean
  disabled?: boolean
  target?: string
  ui?: any
  ariaLabel?: string
}
</script>

<script lang="ts" setup>
const {
  label,
  color = 'primary',
  activeColor,
  variant = 'solid',
  size = 'md',
  icon = '',
  avatar,
  to,
  trailingIcon = '',
  active = true,
  loading = false,
  type = 'button',
  loadingIcon = '',
  disabled = false,
  loadingAuto = false,
  ui,
  target,
  ariaLabel,
} = defineProps<ButtonProps>()
</script>

<template>
  <div>
    <UButton
      v-bind="$attrs"
      class="cursor-pointer"
      :color="color"
      :active-color="activeColor"
      :variant="variant"
      :size="size"
      :icon="icon"
      :trailing-icon="trailingIcon"
      :active="active"
      :loading="loading"
      :avatar="avatar"
      :type="type"
      :to="to"
      :loading-icon="loadingIcon"
      :disabled="disabled"
      :ui="ui"
      :loading-auto="loadingAuto"
      :target="target"
      :aria-label="ariaLabel"
    >
      <template v-if="label ">
        {{ label }}
      </template>
      <slot v-if="$slots.default" />
    </UButton>
  </div>
</template>

<style>

</style>
