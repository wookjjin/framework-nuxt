<script setup lang="ts">
const isClick = ref(false)
const handleChange = () => {
  isClick.value = !isClick.value
}
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full">
    <Icon :name="isClick ? '커비1' : '커비2'" extension="ico" class="mb-10" />
    <button type="button" class="btn__full--primary-lg" @click="handleChange">
      POP
    </button>
  </div>
</template>

<style scoped>

</style>
