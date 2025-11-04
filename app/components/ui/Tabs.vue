<script lang="ts">
import type { TabsItem } from '@nuxt/ui'
import type { ColorType, SizeType } from '~/types/common'

type TabsVariant = 'pill' | 'link'
type TabsOrientation = 'horizontal' | 'vertical'
export interface TabsProps {
  items?: TabsItem[]
  color?: ColorType
  variant?: TabsVariant
  size?: SizeType
  content?: boolean
  orientation?: TabsOrientation
  labelKey?: string
  defaultValue?: string | number
  unmountOnHide?: boolean
  tabsUi?: any
}
</script>

<script lang="ts" setup>
const {
  items,
  color,
  variant = 'pill',
  size = 'md',
  content = true,
  orientation = 'horizontal',
  labelKey,
  defaultValue,
  unmountOnHide = true,
  tabsUi,
} = defineProps<TabsProps>()

defineSlots<{
  default: (props: { item: TabsItem, index: number }) => any
  [key: string]: (props: { item: TabsItem, index: number, ui?: any }) => any
}>()

const slots = useSlots()

const contentSlots = computed(() => {
  return Object.keys(slots).filter(slotName => slotName !== 'default')
})
</script>

<template>
  <UTabs
    v-bind="$attrs"
    :items="items"
    :color="color"
    :variant="variant"
    :size="size"
    :content="content"
    :orientation="orientation"
    :label-key="labelKey"
    :default-value="defaultValue"
    :unmount-on-hide="unmountOnHide"
    :ui="tabsUi"
  >
    <template #default="{ item, index }">
      <slot
        name="default"
        :item="item"
        :index="index"
      />
    </template>

    <template
      v-for="slotName in contentSlots"
      :key="slotName"
      #[slotName]="slotProps"
    >
      <slot
        :name="slotName"
        v-bind="slotProps"
      />
    </template>
  </UTabs>
</template>

<style>

</style>
