<template>
  <div v-if="navAuth">
    <NavAuth/>
  </div>
  <div v-else>
    <Nav/>
  </div>
  <div class="h-screen w-screen flex">
    <div>
      <NavVer />
    </div>
    <div class="container  flex flex-row flex-wrap bg-white">
      <Card
        v-for="product of products" :key="product.idproduct"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

import NavAuth from "@/components/NavAuth.vue";
import Nav from "@/components/Nav.vue";
import NavVer from "@/components/NavVer.vue";
import Card from "@/components/Card.vue";

export default {
  name: "categoria",
  components: {
    Nav,
    NavAuth,
    NavVer,
    Card
  },
  data(){
    return{
      navAuth: false,
    }
  },
  setup() {
    const store = useStore();
    onMounted(()=>{
      store.dispatch('getProducts');
      if (sessionStorage.getItem('my-token')) {
        console.log(true);
      }else{
        console.log(false);
      }
    });
    const products = computed(()=> store.state.products);
    return {products};
  },
};
</script>
