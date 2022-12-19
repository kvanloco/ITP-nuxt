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

const props = defineProps({
  title: String,
  subTitle: String,
  initialInputValue: String,
});

const input = ref(props.initialInputValue);
const errorMessage = ref('');

const capitilize = ref(true);

const output = computed(() => {
  let result = input.value;
  console.log('Result raw: ' + result);
  // CAPITILIZE
  if (capitilize) {
    console.log('into if statement : ' + capitilize.value);
    result = result.toUpperCase();
  }
  console.log('Result 2: ' + result);
  return result;
});

// Input validation
watch(input, (newInput, prevInput) => {
  if (input.value.length < 5) {
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
      {{ output }}
      <span class="text-xs text-blue-300">{{ subTitle }}</span>
    </div>
    <input class="p-1 border border-gray-200 text-sm" v-model="input" />
    <div class="flex gap-x-[2px] flex-col min-h-[25px] xl:">
      <span class="text-xs text-red-300">{{ errorMessage }}</span>
    </div>
    <input
      type="checkbox"
      v-model="capitilize"
      true-value="true"
      false-value="false"
    />{{ capitilize }}
  </div>
</template>
