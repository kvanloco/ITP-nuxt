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
});

/*
 * ACCORDION
 */
const currentOpen = ref('');
const toggle = (index) => {
  if (index == currentOpen.value) {
    // hide
    currentOpen.value = 999999;
  } else {
    //show
    currentOpen.value = index;
  }
};
</script>

<template>
  <div class="border">
    <div class="flex items-center justify-between p-2 xl:items-start">
      <div class="flex-col flex items-center xl:items-start">
        <h3 class="text-3xl font-semibold xl:text-[20px]">{{ props.title }}</h3>
        <div class="flex gap-x-2">
          <p class="text-blue-500">{{ props.categorie }}</p>
          -
          <p class="text-blue-500">{{ props.teamname }}</p>
        </div>
      </div>
      <div class="max-w-[250px] flex items-center gap-2 xl:items-start">
        <p class="text-xs">Lorem ipsum dolar sit qdfqsdfdsfqsdf sqdfqsdf</p>
        <button class="min-w-[130px] p-1 max-w-[250px] bg-blue-500 text-white">
          Use this template
        </button>
      </div>
    </div>
    <div class="p-2">
      <p class="text-xl">Description</p>
      <p class="">{{ props.description }}ddd</p>
    </div>
    <div class="p-2">
      <p class="text-xl">Examples</p>
      <ul class="list-disc list-inside">
        <li class="flex items-center gap-x-3">001_Lorem-ipsum_001_v45</li>
        <li class="flex items-center gap-x-3">001_Lorem-ipsum_001_v45</li>
        <li class="flex items-center gap-x-3">001_Lorem-ipsum_001_v45</li>
      </ul>
    </div>
    <div class="flex items-center gap-2 p-2">
      <span class="w-10 h-10">
        <div class="">
          <span class="text-xl"><Icon name="pajamas:accessibility" /></span>
        </div>
      </span>
      <p class="">{{ props.username }}</p>
      <p class="">{{ props.creationDate }}</p>
    </div>
    <div class="p-2">
      <h1 class="text-xl">Fields</h1>
      <div class="flex flex-col" v-for="(field, index) in fields">
        <!-- Fields list in template-->
        <div class="flex justify-between items-center">
          <div class="">
            <span class="font-semibold"> {{ field.title }} </span>

            <span class="font-light text-blue-400">
              | {{ field.subTitle }} | {{ field.type }}
            </span>
          </div>
          <button
            @click="toggle(index)"
            class="p-1 text-sm font-light text-blue-400"
          >
            {{ index === currentOpen ? 'hide' : 'show' }}
          </button>
        </div>

        <div
          v-show="index === currentOpen"
          class="border-t border-b bg-gray-50 ml-2 p-1"
        >
          <ul>
            <li v-for="(value, key) in field">
              <span class="min-w-[150px] inline-block">{{ key }} </span>
              {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
