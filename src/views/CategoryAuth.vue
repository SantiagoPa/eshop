<template>
  <div>
    <NavAuth/>
  </div>
  <div class="h-screen w-screen flex">
    <div class="">
      <NavVerAuth />
    </div>
    <div class="container flex flex-row bg-white">
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
import NavVerAuth from "@/components/NavVerAuth.vue";
import Card from "@/components/Card.vue";

export default {
  name: "CatgoryAuth",
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
    onMounted(()=>{
      store.dispatch('getProducts');
    });

    const products = computed(()=> store.state.products);
    return {products};
  },
  mounted(){
    if (sessionStorage.getItem('my-token')) {
      console.log('home-auth');
    }else{
      this.$router.push('/');
      console.log('home-auth negade');
    }
  }
};
</script>
