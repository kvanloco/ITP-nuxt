<script setup>
const config = useRuntimeConfig();
const supabase = useSupabaseClient();

const { data: templates } = await useAsyncData('tasks', async () => {
  const { data } = await supabase.from('templates').select();

  return data;
});
</script>

<template>
  <div class="container mx-auto text-sm">
    <h6 class="font-semibold text-xl">Templates page</h6>
    <p class="">This page lists all public templates, these are free to use.</p>
    <!-- Template List -->
    <div class="grid xl:grid-cols-2 2xl:grid-cols-3 gap-2 py-5">
      <!-- Template List Item-->
      <TemplateListItem
        v-for="(template, index) in templates"
        v-bind="template"
        :index="index"
        class=""
      />
    </div>
  </div>
</template>
