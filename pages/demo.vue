<script setup>
const {
  data: namingFields,
  pending,
  refresh,
  error,
} = await useFetch('/api/fields');

const {
  data: templatesData,
  pending,
  refresh,
  error,
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
          <div v-else class="justify-evenly flex px-2 gap-2 py-5">
            <div v-for="(field, index) in namingFields">
              <NamingField v-bind="field" :index="index" @output="onOutput" />
            </div>
          </div>

          <div class="flex px-2 gap-2 justify-center py-5">
            <div
              class="flex flex-col gap-3 my-1 p-4 px-56 border-primary border-2"
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
        <div class="flex gap-2 py-5" v-for="(template, index) in templatesData">
          <!-- Template List Item-->
          <TemplateItem v-bind="template" :index="index" />

          <div class="border-[1px]">
            <div class="flex items-center justify-between p-2">
              <div class="flex items-center gap-[5px]">
                <h3 class="text-3xl font-semibold xl:text-[20px]">
                  Template name
                </h3>
                <p class="text-blue-500">Categorie 1</p>
                <p class="text-blue-500">Teamname</p>
              </div>
              <div class="flex items-center gap-[5px]">
                <p class="">Lorem ipsum dolar sit</p>
                <button
                  id="bBfymi"
                  class="p-[1px] bg-primary text-white py-2 rounded-global px-2"
                >
                  Button Label
                </button>
              </div>
            </div>
            <div class="p-2">
              <p class="text-[1.5em]">Description</p>
              <p class="">
                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
                zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
                bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
                zethaak met letters nam en ze door elkaar husselde om een
                font-catalogus te maken. Het heeft niet alleen vijf eeuwen
                overleefd maar is ook, vrijwel onveranderd, overgenomen in
                elektronische letterzetting. Het is in de jaren &amp;#x27;60
                populair geworden met de introductie van Letraset vellen met
                Lorem Ipsum passages en meer recentelijk door desktop publishing
                software zoals Aldus PageMaker die versies van Lorem Ipsum
                bevatten.
              </p>
            </div>
            <div class="p-2">
              <p class="text-[1.5em]">Examples</p>
              <ul class="list-disc list-inside">
                <li class="flex items-center gap-x-3">
                  001_Lorem-ipsum_001_v45
                </li>
                <li class="flex items-center gap-x-3">
                  001_Lorem-ipsum_001_v45
                </li>
                <li class="flex items-center gap-x-3">
                  001_Lorem-ipsum_001_v45
                </li>
              </ul>
            </div>
            <div class="flex items-center gap-[5px] p-2">
              <span class="w-10 h-10">
                <div class="">
                  <span class="text-[24px]"
                    ><svg
                      class="text-[24px]"
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M372.57 112.641v-10.825c0-43.612-40.52-76.691-83.039-65.546-25.629-49.5-94.09-47.45-117.982.747C130.269 26.456 89.144 57.945 89.144 102v126.13c-19.953-7.427-43.308-5.068-62.083 8.871-29.355 21.796-35.794 63.333-14.55 93.153L132.48 498.569a32 32 0 0 0 26.062 13.432h222.897c14.904 0 27.835-10.289 31.182-24.813l30.184-130.958A203.637 203.637 0 0 0 448 310.564V179c0-40.62-35.523-71.992-75.43-66.359zm27.427 197.922c0 11.731-1.334 23.469-3.965 34.886L368.707 464h-201.92L51.591 302.303c-14.439-20.27 15.023-42.776 29.394-22.605l27.128 38.079c8.995 12.626 29.031 6.287 29.031-9.283V102c0-25.645 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V67c0-25.663 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V101.125c0-25.672 36.57-24.81 36.57.691V256c0 8.837 7.163 16 16 16h6.857c8.837 0 16-7.163 16-16v-76.309c0-26.242 36.57-25.64 36.57-.691v131.563z"
                      ></path></svg
                  ></span>
                </div>
              </span>
              <p class="">Username</p>
              <p class="">01/01/2022</p>
            </div>
          </div>
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
