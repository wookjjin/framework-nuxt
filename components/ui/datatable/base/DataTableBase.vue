<script setup lang="ts">
defineProps<{
  data: any[]
  columns: any[]
}>()

defineEmits(['rowClick'])

// const getCellStyle = (column: any) => ({
//   width: column.width,
//   textAlign: column.align,
// })
</script>

<template>
  <div class="data-table-body">
    <div v-for="(row, index) in data" :key="index" class="table-row" @click="$emit('rowClick', row)">
      <!-- :style="getCellStyle(column)" -->
      <div v-for="column in columns" :key="column.key" class="table-cell">
        <slot :name="`cell-${column.key}`" :row="row" :value="row[column.key]">
          {{ row[column.key] }}
        </slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.data-table-body {
  width: 100%;
  height: 100%;
  overflow-y: auto;

  .table-row {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    padding: 10px;
    border-bottom: 1px solid #e0e0e0;
  }

  .table-cell {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #333;
  }
}
</style>
