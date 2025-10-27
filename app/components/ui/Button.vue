<script lang="ts" setup>
import type { ActiveColorType, ButtonType, ColorType, SizeType, VariantType } from '~/types/common'

const { label, color = 'primary', activeColor, variant = 'solid', size = 'md', icon = '', to, trailingIcon = '', active = true, loading = false, type = 'button', loadingIcon = '', disabled = false, ui, target, ariaLabel } = defineProps<{
  label?: string
  color?: ColorType
  activeColor?: ActiveColorType
  variant?: VariantType
  size?: SizeType
  icon?: string
  trailingIcon?: string
  active?: boolean
  loading?: boolean
  type?: ButtonType
  to?: string
  loadingIcon?: string
  disabled?: boolean
  target?: string
  ui?: any
  ariaLabel?: string
}>()
</script>

<template>
  <div>
    <UButton
      class="cursor-pointer"
      :color="color"
      :active-color="activeColor"
      :variant="variant"
      :size="size"
      :icon="icon"
      :trailing-icon="trailingIcon"
      :active="active"
      :loading="loading"
      :type="type"
      :to="to"
      :loading-icon="loadingIcon"
      :disabled="disabled"
      :ui="ui"
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
