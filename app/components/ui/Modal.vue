<script lang="ts">
import type { ButtonProps } from '@nuxt/ui'

export interface ModalProps {
  title?: string
  description?: string
  close?: boolean | Partial<ButtonProps>
  closeIcon?: string | object
  overlay?: boolean
  transition?: boolean
  fullscreen?: boolean
  dismissible?: boolean
  ui?: any
}
</script>

<script lang="ts" setup>
const {
  title = '',
  description = '',
  close = true,
  transition = true,
  closeIcon,
  dismissible = true,
  ui,

} = defineProps<ModalProps>()
const open = defineModel('open', { default: false })
</script>

<template>
  <UModal
    v-model:open="open"
    :title="title"
    :description="description"
    :close="close"
    :close-icon="closeIcon"
    :overlay="overlay"
    :transition="transition"
    :fullscreen="fullscreen"
    :dismissible="dismissible"
    :ui="ui"
  >
    <!-- Use a Button or any other component in the default slot of the Modal.  -->
    <slot />
    <template
      v-if="$slots.header"
      #header
    >
      <slot name="header" />
    </template>
    <template #description>
      <slot name="description" />
    </template>
    <template
      v-if="$slots.body"
      #body
    >
      <slot name="body" />
    </template>
    <template
      v-if="$slots.footer"
      #footer
    >
      <slot name="footer" />
    </template>
  </UModal>
</template>

<style>

</style>
