<script setup>
const menuItems = ref([
  {
    name: 'item 1',
    to: '/',
  },
  {
    name: 'menu item 2',
    to: '/',
  },
  {
    name: 'menu item 2',
    to: '/',
  },
  {
    name: 'menu item 2',
    to: '/',
  },
  {
    name: 'menu item 2',
    to: '/',
  },
]);
</script>

<template>
  <div class="flex top-0 h-screen flex-col flex-wrap p-2 w-56 border-r">
    <h6 class="not-italic py-3">Enter your heading</h6>
    <ul class="list-disc list-inside">
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="flex items-center gap-x-3"
      >
        <NuxtLink
          :to="item.to"
          aria-current="page"
          class="
            block
            py-2
            pl-3
            pr-4
            text-gray-700
            rounded
            hover:bg-gray-100
            md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
            dark:text-gray-400
            md:dark:hover:text-white
            dark:hover:bg-gray-700 dark:hover:text-white
            md:dark:hover:bg-transparent
          "
        >
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
