<script setup lang="ts">
import { ref } from 'vue'
import type { IColumn } from '~/types'

const props = defineProps<{
  columns: IColumn[]
}>()

const emit = defineEmits(['sort'])
const sortDirection = ref<Record<string, 'asc' | 'desc' | 'default'>>({
  ...props.columns.reduce((acc, column) => {
    if (column.sortable)
      acc[column.key] = 'default'
    return acc
  }, {} as Record<string, 'asc' | 'desc' | 'default'>),
})

const handleSort = (column: IColumn) => {
  if (!column.sortable)
    return

  const currentDir = sortDirection.value[column.key]
  sortDirection.value[column.key] = currentDir === 'default'
    ? 'asc'
    : currentDir === 'asc' ? 'desc' : 'default'

  emit('sort', { column, direction: sortDirection.value[column.key] })
}
</script>

<template>
  <div class="data-table-header">
    <div
      v-for="column in columns" :key="column.key" class="header-cell" :class="{ sortable: column.sortable }"
      @click="handleSort(column)"
    >
      {{ column.label }}
      <icon
        v-if="column.sortable"
        :name="`sort__${sortDirection[column.key]}--abb`"
        width="32"
        height="32"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.data-table-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f0f0f0;
  font-weight: bold;
  font-size: 14px;
  color: #333;

  .header-cell {
    flex: 1;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &.sortable {
      cursor: pointer;
    }
  }
}
</style>
