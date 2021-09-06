<template>
  <div>
    <Nav/>
  </div>
  <div>
    <Welcome :products="products"/>
  </div>
  <div id="footer" class="bottom-0  mt-80">
    <Footer/>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Welcome from '@/components/Welcome.vue'
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Nav,
    Welcome,
    Footer,
  },
  setup() {
    const store = useStore();
    onMounted(()=>{
      store.dispatch('getProducts');
    });
    const products = computed(()=> store.state.products);
    return {products};
  },
}
</script>
