<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
  },
  extension: {
    type: String,
    default: 'svg',
    required: false,
  },
  alt: {
    type: String,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
})

const imageSrc = computed(() => {
  // return `${import.meta.env.VITE_ICON_SRC_PATH}/${props.name}.${props.extension}`
  return `${props.name}`
})
</script>

<template>
  <img :src="imageSrc" class="icon" :alt="alt" :style="`width: ${width}px; height: ${height}px;`">
</template>

<style lang="scss" scoped></style>
