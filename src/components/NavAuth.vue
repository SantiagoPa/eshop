<template>
  <nav class="bg-blue-400 p-3 pt-5">
    <div class="flex justify-between text-2xl text-white">
      <div>
        <LogoAuth />
      </div>
      <div class="flex flex-row">
        <router-link
          to="/category-auth/purchase/list-purchase"
          class="mr-4 p-2 rounded-md hover:bg-indigo-100 hover:text-gray-800"
          >Purchased</router-link
        >
        <router-link
          to="/category-auth"
          class="mr-4 p-2 rounded-md hover:bg-indigo-100 hover:text-gray-800"
          >Category</router-link
        >
        <IconUser />
        <CartIcon />
      </div>
    </div>
  </nav>
</template>

<script>
import CartIcon from "./CartIcon.vue";
import LogoAuth from "./LogoAuth.vue";
import IconUser from "./IconUser.vue";
export default {
  name: "Nav",
  components: {
    LogoAuth,
    IconUser,
    CartIcon,
  },
  data(){
    return{
      componentKey:0,
    }
  },
  methods: {
     forceRerender() {
      this.componentKey += 1;  
    }
  },
  mounted() {
    if (sessionStorage.getItem("my-token")) {
      console.log("category-auth");
    } else {
      this.$router.push("/home");
      console.log("category-auth negade");
    }
  },
};
</script>