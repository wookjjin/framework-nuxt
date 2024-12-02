<script setup lang="ts">

</script>

<template>
  <div class="">
    <div class="mb-5">
      <h1 class="text-2xl font-bold mb-2">
        input
      </h1>
      <div class="flex gap-3 w-full">
        <div class="w-full">
          <h2 class="text-lg font-bold mb-2">
            1. Basic
          </h2>
          <Input type="text" placeholder="Input text" />
        </div>
        <div class="w-full">
          <h2 class="text-lg font-bold mb-2">
            2. Disabled
          </h2>
          <Input type="text" placeholder="Input text" disabled />
        </div>
      </div>
      <div class="flex gap-3 w-full">
        <div class="w-full">
          <h2 class="text-lg font-bold mb-2">
            3. File
          </h2>
          <Label for="picture">Upload file</Label>
          <Input id="picture" type="file" />
        </div>
        <div class="w-full">
          <h2 class="text-lg font-bold mb-2">
            4. With Label
          </h2>
          <Label for="input1">Label</Label>
          <Input id="input1" type="text" placeholder="Label" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
