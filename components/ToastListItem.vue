<script setup>
const props = defineProps({
  toastText: String,
});

const emit = defineEmits(['close']);

const closeToast = () => {
  emit('close');
};
</script>

<template>
  <div
    id="toast-default"
    class="
      fixed
      top-5
      right-5
      flex
      items-center
      p-4
      w-full
      max-w-sm
      text-gray-500
      bg-blue-100
      rounded-lg
      shadow
      dark:text-gray-400 dark:bg-gray-800
    "
    role="alert"
  >
    <div
      class="
        inline-flex
        flex-shrink-0
        justify-center
        items-center
        w-8
        h-8
        text-blue-500
        bg-blue-100
        rounded-lg
        dark:bg-blue-800 dark:text-blue-200
      "
    >
      <img src="/logo.svg" class="h-5 w-5 mr-3 sm:h-9" alt="Logo" />
    </div>
    <div class="ml-3 text-sm font-normal break-all">
      {{ toastText }}
    </div>
    <button
      @click="closeToast"
      type="button"
      class="
        ml-auto
        -mx-1.5
        -my-1.5
        bg-white
        text-gray-400
        hover:text-gray-900
        rounded-lg
        focus:ring-2 focus:ring-gray-300
        p-1.5
        hover:bg-gray-100
        inline-flex
        h-8
        w-8
        dark:text-gray-500
        dark:hover:text-white
        dark:bg-gray-800
        dark:hover:bg-gray-700
      "
      data-dismiss-target="#toast-default"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>
