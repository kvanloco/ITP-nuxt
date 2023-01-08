<script setup>
const { text, copy, copied, isSupported } = useClipboard();

const supabase = useSupabaseClient();
const { data: templates } = await useAsyncData('tasks', async () => {
  const { data } = await supabase.from('templates').select();
  return data;
});
/*
 *
 *  Toast controls
 *
 */
const toastShow = ref(false);
const toastText = ref('');

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
  toastText.value = `${value.value} is copied  to  clipboard`;

  copy(value.value);
  openToast();
};
</script>

<template>
  <NamingTool @clickCopy="onClickCopy" />

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
    :toastText="toastText"
    @close="closeToast"
  />
</template>
