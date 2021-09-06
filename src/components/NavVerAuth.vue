<template>
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
          >Product Category</a
        >
      </div>
      <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
        <router-link to="/category-auth/technology-auth">
          <button
            @click="filter1"
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
            Technology
          </button>
        </router-link>
        <router-link to="/category-auth/toys-auth">
          <button
            @click="filter2"
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
            Toys
          </button>
        </router-link>
        <router-link to="/category-auth/clothing-auth">
          <button
            @click="filter3"
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
            Clothing
          </button>
        </router-link>
        <router-link to="/category-auth/accesories-auth">
          <button
            @click="filter4"
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
            Accesories
          </button>
        </router-link>
        <router-link to="/category-auth/household-products-auth">
          <button
            @click="filter5"
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
            Household Products
          </button>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";

let url = "http://localhost:4000/productsdata/";

export default {
  name: "NavVerAuth",
  data() {
    return {
      category: {
        one: "tegnologia",
        two: "jugetes",
        three: "ropa",
        four: "accesorios",
        five: "hogar",
      },
    };
  },
  methods: {
    clearStore() {
      this.$store.commit("setProductsCategories", []);
    },
    async filter1() {
      try {
        let res = await axios.get(url + this.category.one);
        let data = await res.data;
        this.clearStore();
        this.$store.commit("setProductsCategories", data);
      } catch (error) {
        console.log(error);
      }
    },
    async filter2() {
      try {
        let res = await axios.get(url + this.category.two);
        let data = await res.data;
        this.clearStore();
        this.$store.commit("setProductsCategories", data);
      } catch (error) {
        console.log(error);
      }
    },
    async filter3() {
      try {
        let res = await axios.get(url + this.category.three);
        let data = await res.data;
        this.clearStore();
        this.$store.commit("setProductsCategories", data);
      } catch (error) {
        console.log(error);
      }
    },
    async filter4() {
      try {
        let res = await axios.get(url + this.category.four);
        let data = await res.data;
        this.clearStore();
        this.$store.commit("setProductsCategories", data);
      } catch (error) {
        console.log(error);
      }
    },
    async filter5() {
      try {
        let res = await axios.get(url + this.category.five);
        let data = await res.data;
        this.clearStore();
        this.$store.commit("setProductsCategories", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>