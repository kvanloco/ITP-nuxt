<script setup>
const props = defineProps({
  title: String,
  description: String,
  examples: Array,
  username: String,
  creationDate: String,
  categorie: String,
  teamname: String,
  fields: Array,
  editMode: Boolean,
});

const emit = defineEmits(['title']);
</script>

<template>
  <form>
    <div class="flex mt-1">
      <label for="title" class="min-w-[100px]">Title</label>
      <input
        class="p-1 border border-gray-200 text-sm w-full inline-block"
        :value="props.title"
        @input="emit('title', $event.target.value)"
      />
    </div>
    <div class="flex mt-1">
      <label for="description" class="min-w-[100px]">Description</label>
      <textarea
        class="p-1 border border-gray-200 text-sm w-full inline-block"
        :value="props.description"
        rows="5"
      ></textarea>
    </div>
    <button class="min-w-[130px] p-1 max-w-[250px] bg-blue-400 text-white mt-1">
      Add new template
    </button>
    <div></div>
  </form>
</template>
