<script setup>
// Props
// - ResultsArray
// - ErrorsFromFields: String
// - Global Settings
// Emits
// - ...
//
const props = defineProps({
  resultsArray: {
    type: Array,
  },
  errorsFromFields: {
    type: String,
  },
});
const emit = defineEmits(['clickCopy', 'resultString']);
/*
 *
 *  Global settings
 *
 */

const maxLength = 60;
const hyphen = '_';

/*
 *
 *  Resultstring
 *
 */
const errorMessage = ref('');

const resultString = computed(() => {
  // if all fields are empty, return empty string
  if (props.resultsArray.length < 1) {
    return '';
  }

  return props.resultsArray.reduce((acc, curr, index, arr) => {
    if (index == 0 || index == arr.length || curr == '') {
      return acc + curr;
    }

    return acc + hyphen + curr;
  });
});

/*
 *
 *  ResultString global settings validation
 *
 */
watch(resultString, (newOutput, prevOutput) => {
  errorMessage.value = '';
  emit('resultString', resultString);
  // check max length
  if (resultString.value.length > maxLength) {
    errorMessage.value = `You need max ${maxLength} characters, currently you have ${resultString.value.length} characters`;
  }
});
</script>

<template>
  <div class="flex px-2 gap-2 justify-center py-5">
    <!-- Template  result string-->
    <div class="flex flex-col gap-3 my-1 p-4 px-64 border-primary border-2">
      <div class="flex gap-x-2">
        <p class="text-xl font-bold">{{ resultString }}</p>
        <span
          class="inline-block text-[24px] text-gray-400 hover:text-gray-600"
        >
          <div style="font-size: inherit; color: inherit; padding: 2px">
            <svg
              @click="$emit('clickCopy', resultString)"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
              ></path>
            </svg>
          </div>
        </span>
      </div>
      <div class="text-red-400 text-center">{{ errorMessage }}</div>
      <div class="text-red-400 text-center">{{ errorsFromFields }}</div>
    </div>
  </div>
</template>
