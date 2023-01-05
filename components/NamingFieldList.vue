<script setup>
const props = defineProps({
  namingFields: {
    type: [],
    required: true,
  },
});

//const emit = defineEmits(['output']);

console.log(props.namingFields);
// const {
//   data: namingFields,
//   pending,
//   refresh,
//   error,
// } = await useFetch('/api/fields');
</script>

<template>
  <div class="justify-center flex-grow flex px-2 gap-2 py-5">
    {{ namingFields }}
    <div v-for="(field, index) in props.namingFields" class="flex-auto">
      <!-- Template  Naming fields-->
      <client-only placeholder="Loading...">
        <NamingField v-bind="field" :index="index" @output="onOutput" />
      </client-only>
    </div>
  </div>
</template>
