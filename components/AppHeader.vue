<template>
  <nav class="flex justify-between items-center w-full bg-gray-500">
    <div class="flex items-center">
      <div class="p-3">logo</div>
      <ul class="flex items-center">
        <NuxtLink to="/" class="p-2 text-gray-100"> Home </NuxtLink>
        <NuxtLink to="/about" class="p-2 text-gray-100"> About page </NuxtLink>
      </ul>
    </div>
    <div>
      <ul class="flex items-center">
        <NuxtLink to="/login" class="py-2 px-3 text-gray-100"> Login </NuxtLink>
      </ul>
    </div>
  </nav>
</template>
