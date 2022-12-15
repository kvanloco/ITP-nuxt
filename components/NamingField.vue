<script setup>
/*
props
- title
- subTitle
- errorMessage

state
- inputField

emit
- inputField
*/
/*
defineProps({
  title: String,
  subTitle: String,
  errorMessage: String,
});
*/
</script>

<template>
  <div
    class="
      bg-orange-50
      border-gray-500
      p-2
      my-1
      hover:border-amber-400
      border-t border-b
    "
  >
    <div class="flex gap-x-[2px] flex-col min-h-[40px]">
      <p class="">Fieldname Fieldname Fieldname Fieldname</p>
      <span class="text-xs text-blue-300">Lorem ipsum dolar sit</span>
    </div>
    <input class="p-1 border border-gray-200 text-sm" />
    <div class="flex gap-x-[2px] flex-col min-h-[25px] xl:">
      <span class="text-xs text-red-300">Lorem ipsum dolar sit</span>
    </div>
  </div>
</template>
