<template>
  <div>
    <NavAuth />
  </div>
  <div class="h-full w-screen flex">
   <NavUser/>
    <InfoUser :key="componentKey"/>
  </div>
</template>

<script>
import NavAuth from "../components/NavAuth.vue";
import NavUser from "../components/NavUser.vue";
import InfoUser from "../components/InfoUser.vue";
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
export default {
  name: "Account",
  components: {
    NavAuth,
    NavUser,
    InfoUser,
  },
  setup(){
    const store = useStore();
    const componentKey = computed(()=>store.state.keyAccount);
    return{componentKey}
  },
  mounted() {
    if (sessionStorage.getItem("my-token")) {
      console.log("account-auth");
    } else {
      this.$router.push("/");
      console.log("account-auth negade");
    }
  },
};
</script>
