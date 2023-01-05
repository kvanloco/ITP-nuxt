<script setup></script>

<template>
  <div class="justify-center flex-grow flex px-2 gap-2 py-5">
    <div v-for="(field, index) in namingFields" class="flex-auto">
      <!-- Template  Naming fields-->
      <client-only placeholder="Loading...">
        <NamingField v-bind="field" :index="index" @output="onOutput" />
      </client-only>
    </div>
  </div>
</template>
