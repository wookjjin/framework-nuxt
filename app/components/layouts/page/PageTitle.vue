<script lang="ts" setup>
const { pageTitle = '', isPrevious = true } = defineProps<{ pageTitle?: string, isPrevious?: boolean }>()
const router = useRouter()

const movePrevious = () => {
  router.push('/components')
}
</script>

<template>
  <div class="max-w-6xl w-full shrink-0">
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-highlighted">
        {{ pageTitle }}
      </h1>
      <UIcon
        v-if="isPrevious"
        name="i-lucide-arrow-left"
        class="size-7 cursor-pointer"
        @click="movePrevious"
      />
    </div>
  </div>
</template>

<style>

</style>
