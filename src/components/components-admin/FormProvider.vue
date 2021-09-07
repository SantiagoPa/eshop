<template>
  <form class="mt-8 space-y-6" @submit.prevent="addCategory">
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm -space-y-px flex flex-col">
      <div class="mb-2">
        <label for="email-address" class="sr-only">Name Provider</label>
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
          placeholder="Name provider"
          v-model="nameprovider"
        />
      </div>
      <div class="">
        <label for="email-address" class="sr-only">Phonenumer provider</label>
        <input
          required
          type="number"
          class="
            mb-2
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
          placeholder="Phonenumber provider"
          v-model="phonenumber"
        />
      </div>
      <div class="">
        <label for="email-address" class="sr-only">Email provider</label>
        <input
        type="email"
          required
          class="
            mb-2
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
          placeholder="Email provider"
          v-model="emailprovider"
        />
      </div>
    </div>
    <div>
      <button
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
        Create provider
      </button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';


let url = 'http://localhost:4000/provider';
export default {
  name:'FormProvider',
  data(){
    return {
      key: 0,
      nameprovider: '',
      emailprovider: '',
      phonenumber: '',
    }
  },
  methods: {
    async addCategory() {
      try {
        let res = await axios.post(url, {
          nameprovider: this.nameprovider,
          emailprovider: this.emailprovider,
          phonenumber: this.phonenumber
        });
        let data = await res.data;
        this.key += 100;
        this.$store.commit("setKeyProvider", this.key);
        alert(data.message);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },

}
</script>

<style>

</style>