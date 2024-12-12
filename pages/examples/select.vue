<script setup lang="ts">
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])

const groupedCities = ref([
  {
    label: 'Germany',
    code: 'DE',
    items: [
      { label: 'Berlin', value: 'Berlin' },
      { label: 'Frankfurt', value: 'Frankfurt' },
      { label: 'Hamburg', value: 'Hamburg' },
      { label: 'Munich', value: 'Munich' },
    ],
  },
  {
    label: 'USA',
    code: 'US',
    items: [
      { label: 'Chicago', value: 'Chicago' },
      { label: 'Los Angeles', value: 'Los Angeles' },
      { label: 'New York', value: 'New York' },
      { label: 'San Francisco', value: 'San Francisco' },
    ],
  },
  {
    label: 'Japan',
    code: 'JP',
    items: [
      { label: 'Kyoto', value: 'Kyoto' },
      { label: 'Osaka', value: 'Osaka' },
      { label: 'Tokyo', value: 'Tokyo' },
      { label: 'Yokohama', value: 'Yokohama' },
    ],
  },
])

const select = ref({
  value1: null,
  value2: null,
  value3: null,
  value4: null,
})
</script>

<template>
  <div class="">
    <h1 class="text-2xl font-bold  border-solid border-b border-gray-90 pb-1 mb-5">
      Select
    </h1>
    <div class="mb-5">
      <div class="p-3 mb-5 space-y-5">
        <div class="flex gap-3 w-full">
          <ui-select
            v-model:selected-value="select.value1" option-label="name" :options="cities"
            placeholder="default"
          />
          <ui-select
            v-model:selected-value="select.value2" option-label="name" :options="cities" placeholder="disabled"
            disabled
          />
          <ui-select
            v-model:selected-value="select.value3" option-label="name" :options="cities"
            placeholder="checkmark" checkmark
          />
          <ui-select
            v-model:selected-value="select.value4" option-label="label" option-group-label="label"
            option-group-children="items" :options="groupedCities" placeholder="grouped" checkmark
          />
        </div>
        <div class="flex-col space-y-5">
          <ui-select
            v-model:selected-value="select.value1" option-label="name" :options="cities"
            size="small" placeholder="small"
          />
          <ui-select
            v-model:selected-value="select.value1" option-label="name" :options="cities"
            placeholder="normal"
          />
          <ui-select
            v-model:selected-value="select.value1" option-label="name" :options="cities"
            size="large" placeholder="large"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
