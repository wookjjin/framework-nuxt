<script lang="ts" setup>
const router = useRouter()

const movePage = (target: string) => {
  router.push({ path: `/examples/${target}` })
}

const exampleList = [
  {
    title: 'Input',
    target: 'input',
  },
  {
    title: 'Button',
    target: 'button',
  },
  {
    title: 'Select',
    target: 'select',
  },
]
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="mb-10 text-2xl text-center font-semibold text-slate-600">
      Example pages
    </h1>
    <ul>
      <li
        v-for="example in exampleList" :key="`example-list-${example.target}`"
        class="flex items-center justify-center w-96 px-6 py-4 mb-2 bg-slate-200 rounded-full font-medium text-slate-700 text-lg cursor-pointer hover:shadow-md transition"
        @click="movePage(`${example.target}`)"
      >
        <span>
          {{ example.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
