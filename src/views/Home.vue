<template>
  <div>
    <Nav/>
  </div>
  <div>
    <Welcome/>
  </div>
  <div id="footer" class="bottom-0 mt-24">
    <Footer/>
  </div>
</template>

<script>

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
}
</script>
