<template>
  <div class="flex space-2 items-center border-b-2 pb-4">
    <div class="w-full h-full">
      <img src="../../assets/img/vuetify.svg" alt="logo" />
    </div>
    <div class="ml-3">
      <h1 class="text-3xl font-bold text-indigo-600">Eshop</h1>
      <p class="text-center text-sm text-indigo-600 mt-1 font-serif">
        Dashboard
      </p>
    </div>
  </div>
  <router-link to="/admin">
    <div class="flex items-center space-x-4 mt-6 p-2 bg-indigo-600 rounded-md">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
          />
        </svg>
      </div>
      <div>
        <button class="text-lg text-white font-semibold hover:text-gray-300">
          Dashboard
        </button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "IconAdmin",
};
</script>

<style>
</style>