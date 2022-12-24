<script setup>
const config = useRuntimeConfig();
const supabase = useSupabaseClient();

const { data: templates } = await useAsyncData('tasks', async () => {
  const { data } = await supabase.from('templates').select();
  return data;
});

let selectedTemplate = reactive({});

const onSelectTemplate = (template) => {
  console.log(unref(template));

  selectedTemplate = template;
};
</script>

<template>
  <div class="container mx-auto">
    <div class="h-screen flex flex-row flex-wrap text-sm">
      <div class="flex-1 p-6">
        <div class="pb-3 border-top">
          <h6 class="font-semibold text-xl">Admin page</h6>
          <p class="">Lorem ipsum dolar sit</p>
        </div>
        <div class="flex">
          <div class="w-1/2 p-2">
            {{ selectedTemplate }}
            <client-only placeholder="Loading...">
              <TemplateForm v-bind="selectedTemplate" />
            </client-only>
          </div>
          <div class="w-1/2 p-2">
            <div v-for="t in templates">
              <ul>
                <li @click="onSelectTemplate(t)" class="cursor-pointer">
                  {{ t.title }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Template -->
      </div>
    </div>
  </div>
</template>
