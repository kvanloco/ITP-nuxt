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
  console.log('index: ' + index + ' - currentOpen: ' + currentOpen);
  if (index == currentOpen) {
    console.log('hide');
    // hide
    currentOpen.value = 999999;
  } else {
    console.log('show');
    //show
    currentOpen.value = index;
  }
};
</script>

<template>
  <div class="border">
    <div class="flex items-center justify-between p-2 xl:items-start">
      <div class="flex-col flex items-center gap-2 xl:items-start">
        <h3 class="text-3xl font-semibold xl:text-[20px]">{{ props.title }}</h3>
        <div class="flex gap-x-2">
          <p class="text-blue-500">{{ props.categorie }}</p>
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
          <span class="text-xl"
            ><svg
              class="text-[24px]"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M372.57 112.641v-10.825c0-43.612-40.52-76.691-83.039-65.546-25.629-49.5-94.09-47.45-117.982.747C130.269 26.456 89.144 57.945 89.144 102v126.13c-19.953-7.427-43.308-5.068-62.083 8.871-29.355 21.796-35.794 63.333-14.55 93.153L132.48 498.569a32 32 0 0 0 26.062 13.432h222.897c14.904 0 27.835-10.289 31.182-24.813l30.184-130.958A203.637 203.637 0 0 0 448 310.564V179c0-40.62-35.523-71.992-75.43-66.359zm27.427 197.922c0 11.731-1.334 23.469-3.965 34.886L368.707 464h-201.92L51.591 302.303c-14.439-20.27 15.023-42.776 29.394-22.605l27.128 38.079c8.995 12.626 29.031 6.287 29.031-9.283V102c0-25.645 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V67c0-25.663 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V101.125c0-25.672 36.57-24.81 36.57.691V256c0 8.837 7.163 16 16 16h6.857c8.837 0 16-7.163 16-16v-76.309c0-26.242 36.57-25.64 36.57-.691v131.563z"
              ></path></svg
          ></span>
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
          <button @click="toggle(index)" class="p-1 text-sm text-blue-500">
            {{ index === currentOpen ? 'hide' : 'show' }} {{ currentOpen }}
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
