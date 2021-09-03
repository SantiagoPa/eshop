<template>
  <nav class="bg-blue-400 p-3 pt-5">
    <div class="flex justify-between text-2xl text-white">
      <div>
        <Logo />
      </div>
      <div>
        <router-link
          to="/category"
          class="mr-4 p-2 rounded-md hover:bg-indigo-100 hover:text-gray-800"
          >Category</router-link
        >
        <router-link
          to="/login"
          class="mr-4 p-2 rounded-md hover:bg-indigo-100 hover:text-gray-800"
          >Login</router-link
        >
        <router-link
          to="/sign-in"
          class="p-2 rounded-md hover:bg-indigo-100 hover:text-gray-800"
          >Sign In</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  name: "Nav",
  components: {
    Logo,
  },
};
</script>
