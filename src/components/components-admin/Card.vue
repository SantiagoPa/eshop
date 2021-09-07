<template>
  <div
    class="
      bg-white
      w-2/3
      p-8
      flex
      items-center
      justify-around
      rounded-xl
      shadow-lg
    "
  >
    <div class="space-y-2">
      <h3 class="text-sm font-semibold text-gray-400">Total Spent</h3>
      <h1 class="text-4xl font-bold text-indigo-600">$682.5</h1>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-40 w-40 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
    name:'Card'
};
</script>

<style>
</style>