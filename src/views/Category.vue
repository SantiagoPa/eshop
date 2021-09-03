<template>
  <div>
    <Nav/>
  </div>
  <div class="h-screen w-screen flex">
    <div class="">
      <NavVer />
    </div>
    <div class="container  flex flex-row flex-wrap bg-white">
      <Card
        v-for="product of products" :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

import Nav from "@/components/Nav.vue";
import NavVer from "@/components/NavVer.vue";
import Card from "@/components/Card.vue";

export default {
  name: "categoria",
  components: {
    Nav,
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
    });

    const products = computed(()=> store.state.products);
    return {products};
  },
};
</script>
