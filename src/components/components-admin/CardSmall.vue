<template>
  <div
    class="
      flex
      items-center
      justify-around
      p-6
      bg-white
      w-64
      rounded-xl
      space-x-2
      mt-10
      shadow-lg
    "
  >
    <div>
      <span class="text-sm font-semibold text-gray-400">Spent this month</span>
      <h1 class="text-2xl font-bold">$682.5</h1>
    </div>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 11l7-7 7 7M5 19l7-7 7 7"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CardSmall',
};
</script>

<style>
</style>