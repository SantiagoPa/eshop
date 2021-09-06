<template>
  <div>
    <Nav/>
  </div>
  <div class="h-screen w-screen flex">
    <div>
      <NavVer />
    </div>
    <div class="container  flex flex-row flex-wrap bg-white">
      <Card
        v-for="product of productsC" :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

import Nav from "@/components/Nav.vue";
import NavVer from "@/components/NavVer.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Clothing",
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
    const productsC = computed(()=> store.state.productsCategories);
    return {productsC};
  },
};
</script>
