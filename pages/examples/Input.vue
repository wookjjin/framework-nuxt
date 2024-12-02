<script setup lang="ts">
const input = ref({
  default: 'input',
  disabled: 'Disabled',
  readonly: 'Readonly',
  clearable: 'No clearable',
  value5: '',
  value6: 'error',
})
const password = ref('')
const textarea = ref('')
</script>

<template>
  <div class="">
    <div class="mb-5">
      <h1 class="text-2xl font-bold mb-2">
        input
      </h1>
      <div class="flex gap-3 w-full">
        <ui-input v-model:input-value="input.default" type="text" label="size md" size="md" />
        <ui-input v-model:input-value="input.default" type="text" label="size lg" size="lg" />
      </div>
      <div class="flex gap-3 w-full">
        <ui-input v-model:input-value="input.default" type="text" label="input" />
        <ui-input v-model:input-value="input.disabled" type="text" label="Disabled" disabled />
        <ui-input v-model:input-value="input.readonly" type="text" label="Readonly" readonly />
        <ui-input v-model:input-value="input.clearable" type="text" label="Clearable" :clearable="false" />
        <ui-input v-model:input-value="input.value5" type="text" label="Count" show-count />
        <!-- <ui-input
          v-model:input-value="input.value6"
          v-model:status="status"
          type="text"
          label="Error"
          error-message="error"
        /> -->
      </div>
    </div>
    <div class="mb-5">
      <h1 class="text-2xl font-bold mb-2">
        Password
      </h1>
      <div class="flex gap-3 w-full">
        <ui-input v-model="password" type="password" placeholder="Password" use-password />
      </div>
    </div>
    <div class="mb-5">
      <h1 class="text-2xl font-bold mb-2">
        Textarea
      </h1>
      <div class="flex gap-3 w-full">
        <ui-input v-model="textarea" type="textarea" placeholder="Textarea" clearable />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
