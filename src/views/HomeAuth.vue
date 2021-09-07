<template>
  <div>
    <NavAuth/>
  </div>
  <div class="flex flex-col">
    <h1 class="text-6xl mt-16 p-2 w-full shadow-2xl inline-flex justify-center">
      welcomo {{user.data.namecostumer}}!! to the Eshop store, 
    </h1>
    <router-link to="/category-auth">
      <button class="mt-10 text-3xl text-white bg-indigo-400 hover:bg-indigo-600 p-5 rounded-xl">
        Go to Products
      </button>
    </router-link>
  </div>
</template>

<script>

// @ is an alias to /src
import NavAuth from "@/components/NavAuth.vue";
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default {
  name: 'HomeAuth',
  components: {
    NavAuth,
  },
  data(){
    return {
      nameUser:'',
    }
  },
  setup(){
    const store = useStore();
    const user = computed(()=>store.state.accountEdit);
    return{user}
  },
  mounted(){
    const user  = sessionStorage.getItem('name-user');
    this.nameUser = user
    if (sessionStorage.getItem('my-token')) {
      console.log('home-auth');
    }else{
      this.$router.push('/');
      console.log('home-auth negade');
    }
  }
}
</script>