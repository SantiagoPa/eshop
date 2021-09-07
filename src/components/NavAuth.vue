<template>
  <nav class="bg-blue-400 p-3 pt-5">
    <div class="flex justify-between text-2xl text-white">
      <div>
        <LogoAuth />
      </div>
      <div class="flex flex-row">
        <div>
          <router-link
            v-show="purchase"
            to="/category-auth/purchase/list-purchase"
            class="
              mr-4
              m-5
              p-2
              rounded-md
              hover:bg-indigo-100
              hover:text-gray-800
            "
            >Invoice</router-link
          >
        </div>
        <div>
          <router-link
            to="/category-auth"
            class="
              mr-4
              mb-5
              p-2
              rounded-md
              hover:bg-indigo-100
              hover:text-gray-800
            "
            >Category</router-link
          >
        </div>
        <IconUser />
        <CartIcon />
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

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
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getListPurchase");
    });

    const purchase = computed(() => store.state.purchase);
    return { purchase };
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