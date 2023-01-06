<script setup>
const config = useRuntimeConfig();
const supabase = useSupabaseClient();
const { text, copy, copied, isSupported } = useClipboard();

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
  //console.log("onResultString " + value.value)
}


/*
 *
 *  Toast controls
 *
 */
const toastShow = ref(false);

const openToast = () => {
  toastShow.value = true;
  const timeOut = setTimeout(() => (toastShow.value = false), 4000);
};

const closeToast = () => {
  toastShow.value = false;
};

/*
 *
 *  Copy to clipboard controls
 *
 */
const onClickCopy = (value) => {
  resultString.value = value
  copy(value);
  openToast();
};

const detailsVisible = ref(false);
</script>

<template>
  <!-- Page title and subtitle section -->
  <div class="pb-3">
    <h6 class="font-semibold text-xl">
      Project documents - baseline docs {{resultString}}
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

  <client-only placeholder="Loading...">
    <NamingFieldList
      :namingFields="namingFields"
      @outputArray="onOutputArray"
      @errorString="onErrorString"
    />
  </client-only>

  <!-- Template results section-->

  <client-only placeholder="Loading...">
    <NamingFieldResult
      :resultsArray="outputArray"
      :errorsFromFields="errorFromChild"
      @resultString="onResultString"
      @clickCopy="onClickCopy"
    />
  </client-only>

  <!-- Template  List created templates section-->
  <div class="flex px-2 gap-2 py-1">
    <div class="w-[40%] my-1">
      <p class="">PA-012_dsqfmd_qsdf_000_01</p>
    </div>
    <div class="w-[10%] my-1">
      <p class="text-gray-400">template name V1</p>
    </div>
    <div class="w-[10%] my-1">
      <p class="text-gray-400">John Doe</p>
    </div>
    <div class="w-[10%] my-1">
      <p class="text-gray-400">05/06/2022</p>
    </div>
    <div class="w-[10%] my-1">
      <span class="text-[16px] text-gray-400 font-gray-400">
        <div style="font-size: inherit; color: inherit; padding: 2px">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"
            ></path>
          </svg>
        </div>
      </span>
    </div>
  </div>
  <div class="flex px-2 gap-2 py-1">
    <div class="w-[40%] my-1">
      <p class="">PA-012_dsqfmd_qsdf_000_01</p>
    </div>
    <div class="w-[10%] my-1">
      <p class="text-gray-400">template name V1</p>
    </div>
    <div class="w-[10%] my-1">
      <p class="text-gray-400">John Doe</p>
    </div>
    <div class="w-[10%] my-1">
      <p class="text-gray-400">05/06/2022</p>
    </div>
    <div class="w-[10%] my-1">
      <span class="text-[16px] text-gray-400">
        <div style="font-size: inherit; color: inherit; padding: 2px">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"
            ></path>
          </svg>
        </div>
      </span>
    </div>
  </div>
  <div class="justify-center flex px-2 gap-2">
    <p class="text-blue-400">more</p>
    <span class="text-[16px] text-blue-300">
      <div style="font-size: inherit; color: inherit; padding: 2px">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 320 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"
          ></path>
        </svg>
      </div>
    </span>
  </div>

  <!-- Template List section -->
  <div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-2 py-5">
    <!-- Template List Item-->
    <TemplateListItem
      v-for="(template, index) in templates"
      v-bind="template"
      :index="index"
      class=""
    />
  </div>

  <ToastListItem
    v-show="toastShow"
    :toastText="`${resultString} is copied  to  clipboard`"
    @close="closeToast"
  />
</template>
