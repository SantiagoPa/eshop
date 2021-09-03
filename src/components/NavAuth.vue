<template>
  <nav class="bg-blue-400 p-3 pt-5">
    <div class="flex justify-between text-2xl text-white">
      <div>
        <LogoAuth />
      </div>
      <div>
        <router-link
          to="/category-auth"
          class="mr-4 p-2 rounded-md hover:bg-indigo-100 hover:text-gray-800"
          >Category</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import LogoAuth from "./LogoAuth.vue";

export default {
  name: "Nav",
  components: {
    LogoAuth,
  },
};
</script>