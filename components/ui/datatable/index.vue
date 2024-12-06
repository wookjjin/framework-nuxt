<script setup lang="ts">
import DataTableBase from '~/components/ui/datatable/base/DataTableBase.vue'
import DataTablePagination from '~/components/ui/datatable/features/DataTablePagination.vue'
import DataTableHeader from '~/components/ui/datatable/header/DataTableHeader.vue'
import type { IColumn, IDataItem } from '~/types'

interface Props {
  data: IDataItem[]
  columns: IColumn[]
  pagination?: boolean
  perPage?: number
}

const props = defineProps<Props>()
const emit = defineEmits(['sort', 'rowClick'])

const currentPage = ref(1)
const totalItems = computed(() => props.data.length)
const totalPages = computed(() => Math.ceil(totalItems.value / (props.perPage || 10)))
const sortedData = ref(props.data)

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * (props.perPage || 10)
  const end = start + (props.perPage || 10)
  return sortedData.value.slice(start, end)
})

const handleSort = ({ column, direction }: { column: IColumn, direction: 'asc' | 'desc' | 'default' }) => {
  sortedData.value = [...props.data].sort((a, b) => {
    if (direction === 'default')
      return 0

    const valueA = a[column.key]
    const valueB = b[column.key]

    if (typeof valueA === 'number' && typeof valueB === 'number')
      return direction === 'asc' ? valueA - valueB : valueB - valueA

    const strA = String(valueA)
    const strB = String(valueB)
    return direction === 'asc'
      ? strA.localeCompare(strB, 'ko-KR')
      : strB.localeCompare(strA, 'ko-KR')
  })
}

const handleRowClick = (row: IDataItem) => {
  emit('rowClick', row)
}

const prevPage = () => {
  currentPage.value--
}

const nextPage = () => {
  currentPage.value++
}
</script>

<template>
  <ClientOnly>
    <div class="data-table">
      <DataTableHeader :columns="columns" @sort="handleSort" />
      <DataTableBase :data="paginatedData" :columns="columns" @row-click="handleRowClick" />
      <DataTablePagination
        v-if="pagination" v-model:current-page="currentPage" :per-page="perPage"
        :total-pages="totalPages" @prev-page="prevPage" @next-page="nextPage"
      />
    </div>
  </ClientOnly>
</template>
