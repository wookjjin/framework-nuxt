<script lang="ts" setup>
import Select from 'primevue/select'

interface Props {
  options?: any[]
  placeholder?: string
  disabled?: boolean
  showClear?: boolean
  checkmark?: boolean
  optionLabel?: string
  optionGroupLabel?: string
  optionGroupChildren?: string
  size?: 'small' | 'normal' | 'large'
}

withDefaults(defineProps<Props>(), {
  options: () => [],
  placeholder: 'Select',
  disabled: false,
  showClear: false,
  checkmark: false,
  optionLabel: '',
  optionGroupLabel: '',
  optionGroupChildren: '',
  size: 'normal',
})

const selectedValue = defineModel('selectedValue')
</script>

<template>
  <div class="card flex gap-4">
    <Select
      v-model="selectedValue" :options="options" :size="size" :option-label="optionLabel"
      :placeholder="placeholder" :option-group-label="optionGroupLabel" :option-group-children="optionGroupChildren"
      :disabled="disabled" :checkmark="checkmark" :show-clear="showClear" class="w-full md:w-56"
    >
      <template #optionGroup="slotProps">
        <div class="flex items-center">
          <div>{{ slotProps.option[optionGroupLabel] }}</div>
        </div>
      </template>
    </Select>
  </div>
</template>
