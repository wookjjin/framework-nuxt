<script setup lang="ts">

</script>

<template>
  <div class="">
    <h1 class="text-2xl font-bold  border-solid border-b border-gray-90 pb-1 mb-5">
      Action Button
    </h1>
    <div class="p-3 mb-5 space-y-5">
      <div>
        <h2 class="text-2xl font-bold mb-2">
          Primary Solid
        </h2>
        <div class="flex gap-3 w-full">
          <button type="button" class="btn__full--primary-sm">
            sm
          </button>
          <button type="button" class="btn__full--primary-md">
            md
          </button>
          <button type="button" class="btn__full--primary-md" disabled>
            disabled
          </button>
          <button type="button" class="btn__full--primary-lg">
            lg
          </button>
          <button type="button" class="btn__full--primary-xl">
            xl
          </button>
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-2">
          Secondary Solid
        </h2>
        <div class="flex gap-3 w-full">
          <button type="button" class="btn__full--secondary-sm">
            sm
          </button>

          <button type="button" class="btn__full--secondary-md">
            md
          </button>
          <button type="button" class="btn__full--secondary-md" disabled>
            disabled
          </button>
          <button type="button" class="btn__full--secondary-lg">
            lg
          </button>
          <button type="button" class="btn__full--secondary-xl">
            xl
          </button>
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-2">
          Negative Line
        </h2>
        <div class="flex gap-3 w-full">
          <button type="button" class="btn__line--negative-sm">
            sm
          </button>
          <button type="button" class="btn__line--negative-md">
            md
          </button>
          <button type="button" class="btn__line--negative-md" disabled>
            disabled
          </button>
          <button type="button" class="btn__line--negative-lg">
            lg
          </button>
          <button type="button" class="btn__line--negative-xl">
            xl
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
