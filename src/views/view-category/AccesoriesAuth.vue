<template>
  <div>
    <NavAuth/>
  </div>
  <div class="h-screen w-screen flex">
    <div>
      <NavVerAuth />
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

import NavAuth from "@/components/NavAuth.vue";
import NavVerAuth from "@/components/NavVerAuth.vue";
import Card from "@/components/Card.vue";

export default {
  name: "AccesoriesAuth",
  components: {
    NavAuth,
    NavVerAuth,
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
