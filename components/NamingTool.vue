<script setup>
const config = useRuntimeConfig();
const supabase = useSupabaseClient();

const emit = defineEmits(['clickCopy']);

/*
 *
 *  Get templates from database
 *
 */

const { data: templates } = await useAsyncData('tasks', async () => {
  const { data } = await supabase.from('templates').select();
  return data;
});

// passed down to NamingFieldList component
const {
  data: namingFields,
  pending,
  refresh,
  error,
} = await useFetch('/api/fields');

const detailsVisible = ref(false);

/*
 *
 *  From child fieldList component
 *
 */
const errorFromChild = ref('');
const outputArray = ref([]);
const resultString = ref('');

const onOutputArray = (value) => {
  outputArray.value = value;
};
const onErrorString = (value) => {
  errorFromChild.value = value;
};
const onResultString = (value) => {
  resultString.value = value;
};
/*
 *
 *  Copy to clipboard controls
 *
 */
const onClickCopy = () => {
  emit('clickCopy', resultString.value);
};
</script>

<template>
  <!-- Page title and subtitle section -->
  <div class="pb-3">
    <h6 class="font-semibold text-xl">
      Project documents - baseline docs {{ resultString }}
      <button
        @click="detailsVisible = !detailsVisible"
        class="p-1 text-sm font-light text-blue-400"
      >
        {{ detailsVisible ? 'hide description' : 'show description' }}
      </button>
    </h6>
    <div v-show="detailsVisible" class="">
      <p>
        Creates document names with a project identifier, a description, a
        sequence number and a revision number.
      </p>
      <p>
        This template can be use to create document names for baseline
        documents.
      </p>

      <p>Template settings:</p>

      <ul class="list-disc list-inside">
        <li>max length: 50 characters</li>
        <li>hyphen: _</li>
      </ul>
    </div>
  </div>
  <!-- Naming fields section -->

  <NamingFieldList
    :namingFields="namingFields"
    @outputArray="onOutputArray"
    @errorString="onErrorString"
  />

  <!-- Template results section-->

  <NamingFieldResult
    :resultsArray="outputArray"
    :errorsFromFields="errorFromChild"
    @resultString="onResultString"
    @clickCopy="onClickCopy"
  />
</template>
