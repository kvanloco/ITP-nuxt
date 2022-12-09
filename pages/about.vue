<template>
  <section class="mx-auto max-w-screen-xl">
    <va-alert>
    You read this important slotted alert message.
  </va-alert>
    <h1 class="text-green-500">{{ message }}</h1>
    <p>This page will be displayed at the /about route.</p>
    <div
      data-pg-name="list-section-header"
      class="flex flex-auto flex-row items-center"
    >
      <div class="flex items-end justify-start">
        <p class="inline-block p-2 text-xl" data-pg-name="title">M3A Comete</p>
        <span
          class="font-light text-xs text-blue-400 cursor-pointer p-2"
          @click="show = !show"
          v-if="!show"
          >show</span
        >
        <span
          class="font-light text-xs text-blue-400 cursor-pointer p-2"
          @click="show = !show"
          v-if="show"
          >hide</span
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="pb-2 text-3xl text-gray-900 cursor-pointer"
          preserveAspectRatio
          width="1em"
          height="1em"
          @click="show = !show"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
            />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="pb-2 text-3xl text-gray-900 cursor-pointer"
          preserveAspectRatio
          width="1em"
          height="1em"
          @click="show = !show"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              id="XMLID_105_"
              d="M324.001,209.25L173.997,96.75c-5.334-4-12.667-4-18,0L6.001,209.25c-6.627,4.971-7.971,14.373-3,21
	c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001L164.998,127.5l141.003,105.75c6.629,4.972,16.03,3.627,21-3
	C331.972,223.623,330.628,214.221,324.001,209.25z"
            />
          </g>
        </svg>
      </div>
      <div
        data-pg-name="button-group"
        class="flex flex-auto items-center justify-end p-2"
      >
        <p class="flex font-light p-2">Filter</p>
        <button
          class="
            border-b border-l border-t
            font-light
            px-2
            rounded-l
            text-blue-700
          "
          :class="[filter == 'all' ? 'font-bold' : '']"
          @click="filter = 'all'"
        >
          All
        </button>
        <button
          class="
            border-b border-gray-200 border-l border-t
            font-light
            pt-0
            px-2
            text-blue-700
          "
          :class="[filter == 'siteActivity' ? 'font-bold' : '']"
          @click="filter = 'siteActivity'"
        >
          Site Activity
        </button>
        <button
          class="
            border-b border-gray-200 border-l border-t
            font-light
            px-2
            text-blue-700
          "
          :class="[filter == 'actions' ? 'font-bold' : '']"
          @click="filter = 'actions'"
        >
          Actions
        </button>
        <button
          class="
            border-b border-gray-200 border-l border-t
            font-light
            px-2
            text-blue-700
          "
          :class="[filter == 'issue' ? 'font-bold' : '']"
          @click="filter = 'issue'"
        >
          Issue
        </button>
        <button
          class="border border-gray-200 font-light px-2 rounded-r text-blue-700"
          :class="[filter == 'info' ? 'font-bold' : '']"
          @click="filter = 'info'"
        >
          Info
        </button>
      </div>
    </div>
    <div v-if="show">
      <div data-pg-name="list-section" class="ml-5 mr-2">
        <div
          data-pg-name="list-item"
          class="
            border-b
            flex flex-auto flex-row
            hover:bg-gray-200 hover:border-b-2
            justify-between
          "
        >
          <p
            class="flex flex-shrink-0 font-light p-1 text-black w-16"
            data-pg-name="id"
          >
            #1235
          </p>
          <p
            class="flex-shrink-0 font-bold inline-block p-1 text-green-600 w-28"
            data-pg-name="type"
          >
            Action
          </p>
          <p class="flex-grow font-light inline-block p-1" data-pg-name="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley
          </p>
          <p class="flex p-1 text-yellow-500" data-pg-name="status">Open</p>
          <p class="flex p-1 text-black" data-pg-name="by">Comete</p>
          <p
            class="flex font-semibold p-1 text-red-600 w-28"
            data-pg-name="due"
          >
            10/11/2022
          </p>
        </div>
        <div
          data-pg-name="list-item"
          class="
            border-b
            flex flex-auto flex-row
            hover:bg-gray-200 hover:border-b-2
          "
        >
          <p
            class="flex flex-shrink-0 font-light p-1 text-black w-16"
            data-pg-name="id"
          >
            #1235
          </p>
          <p class="flex font-bold p-1 text-blue-600 w-28" data-pg-name="type">
            Site Activity
          </p>
          <p class="flex flex-auto flex-grow p-1" data-pg-name="title">
            SAT PR01
          </p>
          <p class="flex p-1 text-yellow-500" data-pg-name="status">Open</p>
          <p class="flex p-1 text-black" data-pg-name="by">Comete</p>
          <p class="flex p-1" data-pg-name="due">10/11/2022</p>
        </div>
        <div data-pg-name="list-item" class="border-b flex flex-auto flex-row">
          <p
            class="flex flex-shrink-0 font-light p-1 text-black w-16"
            data-pg-name="id"
          >
            #1235
          </p>
          <p
            class="font-bold inline-block p-1 text-red-700 w-28"
            data-pg-name="type"
          >
            Issue
          </p>
          <p class="flex-grow inline-block p-1" data-pg-name="title">
            SAT PR01
          </p>
          <p class="flex p-1 text-yellow-500" data-pg-name="status">Open</p>
          <p class="flex p-1" data-pg-name="due">10/11/2022</p>
        </div>
        <div
          data-pg-name="list-item"
          class="border-b flex flex-auto flex-row items-start"
        >
          <p
            class="flex flex-shrink-0 font-light p-1 text-black w-16"
            data-pg-name="id"
          >
            #1235
          </p>
          <p
            class="
              flex-shrink-0
              font-bold
              inline-block
              p-1
              text-yellow-400
              w-28
            "
            data-pg-name="type"
          >
            Info
          </p>
          <p class="inline-block p-1" data-pg-name="multiline text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley
          </p>
          <p class="flex p-1 text-yellow-500" data-pg-name="status">Open</p>
          <p class="flex p-1" data-pg-name="due">10/11/2022</p>
        </div>
        <div
          data-pg-name="list-item"
          class="border-b flex flex-auto flex-row items-center py-1"
        >
          <p
            class="flex flex-shrink-0 font-light p-1 text-black w-16"
            data-pg-name="id"
          ></p>
          <div class="inline-block relative" data-pg-name="type-input">
            <select
              class="
                appearance-none
                bg-white
                block
                border border-gray-300
                focus:outline-none focus:shadow-outline
                hover:border-gray-500
                leading-tight
                mx-1
                pl-4
                pr-8
                py-1
                rounded
                shadow
                text-sm
                w-28
              "
            >
              <option class="text-sm">Action</option>
              <option class="text-sm">Site Activity</option>
              <option class="text-sm">Option 3</option>
            </select>
            <div
              class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-gray-700
              "
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
          <div class="h-full relative w-full" data-pg-name="editable textarea">
            <textarea
              class="
                border border-gray-300 border-solid
                h-full
                p-1
                rounded-bl rounded-br rounded-tl rounded-tr
                w-full
              "
            ></textarea>
            <div
              class="
                -bottom-7
                absolute
                flex-auto flex-row
                focus:flex
                hidden
                hover:block
                right-0
                z-10
              "
            >
              <button
                class="
                  bg-green-200
                  mx-1
                  px-2
                  py-1
                  right-0
                  rounded-bl rounded-br rounded-tl rounded-tr
                  z-10
                "
              >
                V
              </button>
              <button
                class="
                  bg-red-200
                  ml-1
                  mr-0
                  px-2
                  py-1
                  right-0
                  rounded-bl rounded-br rounded-tl rounded-tr
                "
              >
                X
              </button>
            </div>
          </div>
          <div class="inline-block relative" data-pg-name="status-input">
            <select
              class="
                appearance-none
                bg-white
                block
                border border-gray-300
                focus:outline-none focus:shadow-outline
                hover:border-gray-500
                leading-tight
                mx-1
                pl-4
                pr-8
                py-1
                rounded
                shadow
                text-sm
                w-full
              "
            >
              <option>Action</option>
              <option>Site Activity</option>
              <option>Option 3</option>
            </select>
            <div
              class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-gray-700
              "
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
          <div class="relative">
            <div
              class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
              "
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              datepicker
              type="text"
              class="
                bg-gray-50
                block
                border border-gray-300
                focus:border-blue-500 focus:ring-blue-500
                mx-1
                pl-10
                pr-2.5
                py-1
                rounded-lg
                text-gray-900 text-sm
                w-full
                sm:text-sm
              "
              placeholder="Select date"
            />
          </div>
        </div>
        <p class="inline-block p-1 text-blue-500 text-sm" data-pg-name="title">
          show closed items
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
//import { ref } from 'vue';

// A "ref" is a reactive data source that stores a value.
// Technically, we don't need to wrap the string with ref()
// in order to display it, but we will see in the next
// example why it is needed if we ever intend to change
// the value.
const message = ref('Hello World!');
const show = ref(true);
const filter = ref('all');
</script>
