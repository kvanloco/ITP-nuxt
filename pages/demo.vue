<script setup>
const {
  data: namingFields,
  pending,
  refresh,
  error,
} = await useFetch('/api/fields');

const {
  data: templatesData,
  pending: templatesPending,
  refresh: templatesRefresh,
  error: templatesError,
} = await useFetch('/api/templates');

const maxLength = 20;
const hyphen = '_';
const outputArray = ref([]);
const errorMessage = ref('');
const errorFromChild = ref('');

const { text, copy, copied, isSupported } = useClipboard();

const resultString = computed(() => {
  // if all fields are empty, return empty string
  if (outputArray.value.length < 1) {
    return '';
  }
  return outputArray.value.reduce((acc, curr, index, arr) => {
    if (index == 0 || index == arr.length || curr == '') {
      return acc + curr;
    }
    return acc + hyphen + curr;
  });
});

// Input validation
watch(resultString, (newOutput, prevOutput) => {
  errorMessage.value = '';
  // check max length
  if (resultString.value.length > maxLength) {
    errorMessage.value = `You need max ${maxLength} characters, currently you have ${resultString.value.length} characters`;
  }
});
// from child field components
const onOutput = (n, index, hasErrors) => {
  //console.log('Output at parent level:  ' + n + ' - ' + index);
  outputArray.value.splice(index, 1, n);
  errorFromChild.value = '';
  if (hasErrors) {
    errorFromChild.value = 'There are 1 or more errors';
  }
};

/*
 * *********  Toast
 */
const toastShow = ref(false);

const openToast = () => {
  toastShow.value = true;
  const timeOut = setTimeout(() => (toastShow.value = false), 4000);
  //clearTimeout(timeOut);
};

const closeToast = () => {
  toastShow.value = false;
};

const onClickCopy = (value) => {
  copy(value);
  openToast();
};
</script>

<template>
  <div class="container mx-auto">
    <div class="h-screen flex flex-row flex-wrap text-sm">
      <div class="flex-1 p-6">
        <div class="">
          <div class="pb-3 border-top">
            <h6 class="font-semibold text-xl">your template name</h6>
            <p class="">Lorem ipsum dolar sit</p>

            <p v-if="error" class="bg-red-300">{{ error }}</p>
          </div>
          <div v-if="pending"></div>
          <div v-else class="justify-center flex-grow flex px-2 gap-2 py-5">
            <div v-for="(field, index) in namingFields" class="flex-auto">
              <!-- Template -->
              <client-only placeholder="Loading...">
                <NamingField v-bind="field" :index="index" @output="onOutput" />
              </client-only>
            </div>
          </div>

          <div class="flex px-2 gap-2 justify-center py-5">
            <div
              class="flex flex-col gap-3 my-1 p-4 px-64 border-primary border-2"
            >
              <div class="flex gap-x-2">
                <p class="text-xl font-bold">{{ resultString }}</p>
                <span
                  class="
                    inline-block
                    text-[24px] text-gray-400
                    hover:text-gray-600
                  "
                >
                  <div style="font-size: inherit; color: inherit; padding: 2px">
                    <svg
                      @click="onClickCopy(resultString)"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
                      ></path>
                    </svg>
                  </div>
                </span>
              </div>
              <div class="text-red-300 text-center">{{ errorMessage }}</div>
              <div class="text-red-300 text-center">{{ errorFromChild }}</div>
            </div>
          </div>
          <div class="">
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
          </div>
        </div>
        <!-- Template List -->
        <div class="grid xl:grid-cols-2 2xl:grid-cols-3 gap-2 py-5">
          <!-- Template List Item-->
          <TemplateListItem
            v-for="(template, index) in templatesData"
            v-bind="template"
            :index="index"
            class=""
          />
        </div>
      </div>
    </div>
  </div>
  <ToastListItem
    v-show="toastShow"
    :toastText="`${resultString} is copied to clipboard`"
    @close="closeToast"
  />
</template>
