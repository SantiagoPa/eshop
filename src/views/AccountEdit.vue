<template>
  <div>
    <NavAuth />
  </div>
  <div class="h-full w-screen flex">
    <NavUser />
    <div class="container bg-white justify-center w-4/5">
      <h1 class="text-4xl mt-5 shadow-xl inline-flex p-5">Settings User</h1>
      <pre>
        {{user}}
      </pre>
      <div class="mt-10 bg-gray-50 flex flex-col justify-center p-5">
        <form class="mt-8 space-y-6" @submit.prevent="signIn">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div class="">
              <label for="email-address" class="sr-only">Name</label>
              <input
                required
                class="
                  appearance-none
                  rounded-md
                  relative
                  block
                  w-full
                  h-16
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-blue-500
                  focus:border-blue-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Name"
                v-model="namecostumer"
              />
            </div>
            <div class="">
              <label for="email-address" class="sr-only">phonenumber</label>
              <input
                required
                type="number"
                class="
                  appearance-none
                  rounded-md
                  relative
                  block
                  w-full
                  h-16
                  px-3
                  py-2
                  border border-gray-300
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-blue-500
                  focus:border-blue-500
                  focus:z-10
                  sm:text-sm
                "
                placeholder="Cellphone"
                v-model="phonenumbercostumer"
              />
            </div>
          </div>
          <div>
            <button
            @click="updateCostumer(user.data.idcostumer)"
              class="
                group
                relative
                w-full
                flex
                justify-center
                py-2
                px-4
                border border-transparent
                text-lg
                font-medium
                rounded-md
                text-white
                bg-blue-600
                hover:bg-lightblue-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50
              "
              aria-required="true"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <!-- Heroicon name: lock-closed -->
                <svg
                  class="h-5 w-5 text-blue-50 group-hover:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import NavAuth from "../components/NavAuth.vue";
import NavUser from "../components/NavUser.vue";
import axios from 'axios';

let url = 'http://localhost:4000/costumers/';

export default {
  name: "AccountEdit",
  components: {
    NavAuth,
    NavUser,
  },
  data() {
    return {
      namecostumer: null,
      phonenumbercostumer: null,
    };
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.accountEdit);
    return { user };
  },
  methods:{
      async updateCostumer(id){
          try {
            let res = await axios.put(url+id,{
                namecostumer: this.namecostumer,
                phonenumbercostumer: this.phonenumbercostumer,
            });
            let user = await res.data; 
            let data = user.data;
            console.log(user.data);
            alert(user.message)
            this.$store.commit('setAccountEdit', {data}); 
            this.$router.push('/home-auth/account') 
          } catch (error) { 
              console.log(error);
          }
      }
  }
};
</script>

<style>
</style>