<script setup>
const config = useRuntimeConfig();
const supabase = useSupabaseClient();

const { data: templates } = await useAsyncData('tasks', async () => {
  const { data } = await supabase.from('templates').select();
  return data;
});

const selectedTemplate = ref(null);
const editMode = ref(true);

const onSelectTemplate = (template) => {
  selectedTemplate.value = unref(template);
};

const onNewTemplate = () => {
  selectedTemplate.value = null;
  editMode.value = false;
};
console.log('test');
</script>

<template>
  <div class="container mx-auto">
    <div class="h-screen flex flex-row flex-wrap text-sm">
      <div class="flex-1 p-6">
        <div class="pb-3 border-top">
          <h6 class="font-semibold text-xl">Admin page</h6>
          <p class="">Lorem ipsum dolar sit</p>
          <button
            class="p-1 max-w-[250px] bg-blue-400 text-white mt-1"
            @click="onNewTemplate"
          >
            New template
          </button>
          {{ editMode }}
        </div>
        <div class="flex">
          <div class="w-1/2 p-2">
            <!-- Template -->
            <client-only placeholder="Loading...">
              <TemplateForm v-bind="selectedTemplate" editMode="true" />
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
