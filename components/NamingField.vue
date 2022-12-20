<script setup>
/*
TODO
- emit output
*/

const props = defineProps({
  title: String,
  subTitle: String,
  initialInputValue: String,
  slug: String,
  type: String,
  required: Boolean,
  minlength: Number,
  maxlength: Number,
  prefix: String,
  postfix: String,
  unique: Boolean,
  space: String,
  capitalize: Boolean,
  index: Number,
});

const emit = defineEmits(['output']);

const input = ref(props.initialInputValue);
const errorMessage = ref('');

onMounted(() => {
  emit('output', output.value, props.index);
});

// Input formatting
const output = computed(() => {
  let result = String(input.value);
  // Trim spaces and replace spaces if props.space value is given
  if (props.space.length > 0) {
    result = result.trim().replace(/\s/g, props.space);
  }
  // set to uppercase if props.capitalize is true
  if (props.capitalize) {
    result = toCapitalize(input.value);
  }
  // set to prefix if props.prefix is given
  if (props.prefix.length > 0) {
    result = addPrefix(result);
  }
  // set to postfix if props.postfix is given
  if (props.postfix.length > 0) {
    result = addPostfix(result);
  }
  // add extra 000 to number
  if (props.type == 'number' && props.minlength > 0) {
    result = String(result).padStart(3, '0');
  }
  return result;
});

// helperfuctions
const toCapitalize = (value) => {
  return value.toUpperCase();
};

const addPrefix = (value) => {
  return props.prefix + value;
};

const addPostfix = (value) => {
  return value + props.postfix;
};

// Input validation
watch(output, (newOutput, prevOutput) => {
  errorMessage.value = '';
  // check if is needs to be a number and is a number
  if (props.type == 'number' && isNaN(parseInt(input.value))) {
    errorMessage.value = `This field needs to be a number`;
  }

  // check min length
  if (input.value.toString().length < props.minlength) {
    errorMessage.value = `You need min ${props.minlength} characters`;
  }
  // check max length
  if (input.value.toString().length > props.maxlength) {
    errorMessage.value = `You need max ${props.maxlength} characters`;
  }
  // check required
  if (input.value.length < 1 && props.required) {
    errorMessage.value = `This field is required`;
  }
  // TODO check Unique

  emit('output', output.value, props.index);
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
      <p class="">{{ title }} - {{ props.type }}</p>
      {{ output }}
      <span class="text-xs text-blue-300">{{ subTitle }}</span>
    </div>
    <input
      class="p-1 border border-gray-200 text-sm"
      v-model="input"
      :type="props.type"
    />
    <div class="flex gap-x-[2px] flex-col min-h-[25px] xl:">
      <span class="text-xs text-red-300">{{ errorMessage }}</span>
    </div>
  </div>
</template>
