<script setup>
const props = defineProps({
  namingFields: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(['outputArray', 'errorString']);

const outputArray = ref([]);
const errorFromChild = ref('');

const onOutput = (n, index, hasErrors) => {
  //console.log('Output at parent level:  ' + n + ' - ' + index);
  outputArray.value.splice(index, 1, n);
  errorFromChild.value = '';
  if (hasErrors) {
    errorFromChild.value = 'There are 1 or more field errors';
  }
  emit('outputArray', outputArray.value);
  emit('errorString', errorFromChild.value);
};
</script>

<template>
  <div class="justify-center flex-grow flex px-2 gap-2 py-5">
    <div v-for="(field, index) in props.namingFields" class="flex-auto">
      <!-- Template  Naming fields-->
      <client-only placeholder="Loading...">
        <NamingField v-bind="field" :index="index" @output="onOutput" />
      </client-only>
    </div>
  </div>
</template>
