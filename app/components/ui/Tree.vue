<script lang="ts">
import type { TreeItem } from '@nuxt/ui'
import type { ColorType, SizeType } from '~/types/common'

export interface TreeProps {
  items?: TreeItem[]
  color?: ColorType
  size?: SizeType
  getKey?: (val: TreeItem) => string
  labelKey?: string | number
  trailingIcon?: string | object
  expandedIcon?: string | object
  collapsedIcon?: string | object
  multiple?: boolean
  nested?: boolean
  virtualize?: boolean
  expanded?: string[]
  defaultExpanded?: string[]
  disabled?: boolean
  unmountOnHide?: boolean
}
</script>

<script lang="ts" setup>
const {
  items,
  color,
  size,
  getKey,
  labelKey,
  trailingIcon,
  expandedIcon,
  collapsedIcon,
  multiple,
  nested,
  virtualize,
  disabled,
  unmountOnHide,
} = defineProps<TreeProps>()

const model = defineModel<TreeItem>({ default: [] })
const expanded = defineModel<string[]>('expanded', { default: [] })
</script>

<template>
  <UTree
    v-model="model"
    v-model:expanded="expanded"
    :items="items"
    :color="color"
    :size="size"
    :get-key="getKey"
    :label-key="labelKey"
    :trailing-icon="trailingIcon"
    :expanded-icon="expandedIcon"
    :collapsed-icon="collapsedIcon"
    :multiple="multiple"
    :nested="nested"
    :virtualize="virtualize"
    :disabled="disabled"
    :unmount-on-hide="unmountOnHide"
  />
</template>

<style>

</style>
