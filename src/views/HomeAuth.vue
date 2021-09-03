<template>
  <div>
    <NavAuth/>
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
import NavAuth from "@/components/NavAuth.vue";
import Welcome from '@/components/Welcome.vue'
import Footer from "@/components/Footer.vue";

export default {
  name: 'HomeAuth',
  components: {
    NavAuth,
    Welcome,
    Footer,
  },
}
</script>