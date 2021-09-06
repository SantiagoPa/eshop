<template>
  <form class="mt-8 space-y-6 m-10">
    <p class="mb-6 italic">Enter your address information here</p>
    <h1 class="text-5xl">Form of your address</h1>
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm -space-y-px">
      <div class="">
        <input
          required
          class="
            appearance-none
            rounded-md
            relative
            block
            w-full
            my-2
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
          placeholder="Home addres"
          v-model="homeaddress"
        />
      </div>
      <div class="">
        <input
          required
          class="
            appearance-none
            rounded-md
            relative
            block
            my-2
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
          placeholder="City"
          v-model="city"
        />
      </div>
      <div class="">
        <input
          required
          class="
            appearance-none
            rounded-md
            relative
            block
            my-2
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
          placeholder="description"
          v-model="description"
        />
      </div>
    </div>
    <div class="flex justify-center">
      <router-link to="/category-auth/purchase">
        <button
          @click.prevent="addHome()"
          class="
            flex
            justify-center
            py-2
            px-4
            w-80
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
          Save Address
        </button>
      </router-link>
    </div>
  </form>
</template>

<script>
import axios from "axios";

let urlHome = 'http://localhost:4000/home/';
export default {
  name: "FormHome",
  methods: {
    async addHome() {
      let token = sessionStorage.getItem("my-token");
      try {
        let res = await axios.post(
          urlHome,
          {
            homeaddress: this.homeaddress,
            city: this.city,
            descriptionhome: this.description,
          },
          {
            headers: { "my-token": token },
          }
        );
        let data = await res.data;
        localStorage.setItem("id-home", data.data.idhome);
        alert(data.message);
        console.log(data.data);
        this.$router.push("/category-auth/purchase");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>