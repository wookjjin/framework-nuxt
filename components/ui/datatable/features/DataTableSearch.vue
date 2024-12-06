<script setup lang="ts">
const searchQuery = ref('')

const handleSearch = () => {
  console.log(searchQuery.value)
}
</script>

<template>
  <div class="data-table-search">
    <ui-input
      v-model="searchQuery"
      type="text"
      placeholder="검색어를 입력하세요"
      class="search-input"
    >
      <ui-button class="search-button" @click="handleSearch">
        검색
      </ui-button>
    </ui-input>
  </div>
</template>

<style scoped></style>
