<script setup lang="ts">
defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits(['prevPage', 'nextPage'])

const prevPage = () => {
  emit('prevPage')
}

const nextPage = () => {
  emit('nextPage')
}
</script>

<template>
  <div class="data-table-pagination">
    <button type="button" class="btn__full--primary-sm" :disabled="currentPage === 1" @click="prevPage">
      이전
    </button>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <button type="button" class="btn__full--primary-sm" :disabled="currentPage === totalPages" @click="nextPage">
      다음
    </button>
  </div>
</template>

<style lang="scss" scoped>
.data-table-pagination {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
