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

defineProps({
  title: String,
  subTitle: String,
});

const input = ref('');
const errorMessage = ref('');

watch(input, (input, prevInput) => {
  if (input < 5) {
    errorMessage.value = 'You need min 5 caracters';
  } else {
    errorMessage.value = '';
  }
});
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
      <p class="">{{ title }}</p>
      <span class="text-xs text-blue-300">{{ subTitle }}</span>
    </div>
    <input class="p-1 border border-gray-200 text-sm" v-model="input" />{{
      input
    }}
    <div class="flex gap-x-[2px] flex-col min-h-[25px] xl:">
      <span class="text-xs text-red-300">{{ errorMessage }}</span>
    </div>
  </div>
</template>
