<template>
  <div>
    <NavAuth />
  </div>
  <div class="h-full w-screen flex">
    <div>
      <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
        <div
          class="
            flex flex-col
            w-full
            md:w-64
            text-gray-700
            bg-gray-100
            flex-shrink-0
          "
        >
          <div
            class="
              flex-shrink-0
              px-8
              py-4
              flex flex-row
              items-center
              justify-between
            "
          >
            <a
              class="
                text-lg
                font-semibold
                tracking-widest
                text-gray-900
                uppercase
                rounded-lg
                bg-white
                shadow-lg
                focus:outline-none
                focus:shadow-outline
              "
              >Profile Account</a
            >
          </div>
          <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
            <router-link to="/home-auth/account">
              <button
                class="
                  my-5
                  w-full
                  block
                  px-4
                  py-2
                  mt-2
                  text-md
                  font-semibold
                  text-gray-900
                  bg-white
                  rounded-lg
                  hover:text-gray-900
                  hover:bg-gray-200
                  focus:outline-none
                  focus:shadow-outline
                "
              >
                Info
              </button>
            </router-link>
             <router-link to="/home-auth/account/setting">
              <button
                class="
                  my-5
                  w-full
                  block
                  px-4
                  py-2
                  mt-2
                  text-md
                  font-semibold
                  text-gray-900
                  bg-white
                  rounded-lg
                  hover:text-gray-900
                  hover:bg-gray-200
                  focus:outline-none
                  focus:shadow-outline
                "
              >
                Settings
              </button>
            </router-link>
          </nav>
        </div>
      </div>
    </div>
    <div class="container bg-white">
      <h1 class="text-4xl mt-5 bg-red-300">Infortaion user</h1>
    </div>
  </div>
</template>

<script>
import NavAuth from "../components/NavAuth.vue";
export default {
  name: "Account",
  components: {
    NavAuth,
  },
   mounted(){
    if (sessionStorage.getItem('my-token')) {
      console.log('account-auth');
    }else{
      this.$router.push('/');
      console.log('account-auth negade');
    }
  }
};
</script>
