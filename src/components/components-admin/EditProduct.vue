<template>
  <div v-if="productEdit.data" class="flex flex-col justify-center mx-20">
    <div class="flex flex-row justify-center mr-64 mt-5">
      <span
        class="
          font-semibold
          text-black text-2xl
          inline-flex
          rounded-lg
          p-2
          shadow-sm
        "
      >
        Editing Product
      </span>
      <span class="flex mt-3 ml-72">
        ID Product: {{ productEdit.data.idproduct }} - Name product: {{productEdit.data.nameproduct}}
      </span>
    </div>
    <form
      class="mt-5 space-y-6 w-full flex flex-col justify-center"
      @submit.prevent="updateProduct"
    >
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm -space-y-px flex flex-col">
        <div class="mb-2">
          <label  class="sr-only">Name Product</label>
          <input
            id="name"
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
            placeholder="Name product"
            v-model="nameproduct"
          />
        </div>
        <div class="">
          <label for="email-address" class="sr-only">Description product</label>
          <input
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
            placeholder="Desctription product"
            v-model="descriptionproduct"
          />
        </div>
        <div class="">
          <label for="email-address" class="sr-only">ID category</label>
          <input
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
            placeholder="ID Category"
            v-model="idcategory"
          />
        </div>
        <div class="">
          <label for="password" class="sr-only">ID Provider</label>
          <input
            required
            class="
              mb-2
              appearance-none
              relative
              h-16
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-500
              text-gray-900
              rounded-md
              focus:outline-none
              focus:ring-blue-500
              focus:border-blue-500
              focus:z-10
              sm:text-sm
            "
            placeholder="ID Provider"
            v-model="idprovider"
          />
        </div>
        <div class="">
          <label for="password" class="sr-only">Price</label>
          <input
            autocomplete="current-password"
            required
            type="number"
            class="
              mb-2
              appearance-none
              relative
              h-16
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-500
              text-gray-900
              rounded-md
              focus:outline-none
              focus:ring-blue-500
              focus:border-blue-500
              focus:z-10
              sm:text-sm
            "
            placeholder="Price"
            v-model="price"
          />
        </div>
        <div class="">
          <label for="password" class="sr-only">Amount</label>
          <input
            type="number"
            autocomplete="current-password"
            required
            class="
              mb-2
              appearance-none
              relative
              h-16
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-500
              text-gray-900
              rounded-md
              focus:outline-none
              focus:ring-blue-500
              focus:border-blue-500
              focus:z-10
              sm:text-sm
            "
            placeholder="amount"
            v-model="amountproduct"
          />
        </div>
        <div class="">
          <label for="password" class="sr-only">Url Img</label>
          <input
            type="text"
            required
            class="
              mb-2
              appearance-none
              relative
              h-16
              block
              w-full
              px-3
              py-2
              border border-gray-300
              placeholder-gray-500
              text-gray-900
              rounded-md
              focus:outline-none
              focus:ring-blue-500
              focus:border-blue-500
              focus:z-10
              sm:text-sm
            "
            placeholder="urlimg"
            v-model="urlimg"
          />
        </div>
      </div>
      <div class="flex mb-10">
        <router-link to="/admin/product/">
          <button
            class="
              py-2
              px-24
              mx-3
              rounded-md
              text-lg
              font-semibold
              hover:text-gray-900
              hover:bg-gray-300
              text-gray-700
              bg-gray-100
            "
          >
            Back
          </button>
        </router-link>
        <router-link to="/admin/product/">
          <button
            @click="updateProduct(productEdit.data.idproduct)"
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
            Update Product
          </button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { computed } from "vue";

class Product {
  constructor() {
    this.descriptionproduct = null;
    this.nameproduct = null;
    this.amountproduct = null;
    this.idcategory = null;
    this.idprovider = null;
    this.price = null;
    this.urlimg = null;
  }
}
let url = "http://localhost:4000/products/";
export default {
  name: "EditProduct",
  data() {
    return {
      product: new Product(),
    };
  },
  setup() {
    const store = useStore();
    const productEdit = computed(() => store.state.productEdit);
    return { productEdit };
  },
  methods: {
    async updateProduct(id) {
      try {
        let res = await axios.put(url + id, {
          descriptionproduct: this.descriptionproduct,
          nameproduct: this.nameproduct,
          amountproduct: this.amountproduct,
          idcategory: this.idcategory,
          idprovider: this.idprovider,
          price: this.price,
          urlimg: this.urlimg,
        });
        let data = await res.data;
        alert(data.message);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>