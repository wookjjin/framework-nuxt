<script setup>
import Select from 'primevue/select'

const selectedCity = ref()
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' },
])
</script>

<template>
  <div class="card flex justify-center">
    <Select
      v-model="selectedCity" :options="cities" option-label="name" placeholder="Select a City"
      class="w-full md:w-56"
    />
  </div>
</template>
