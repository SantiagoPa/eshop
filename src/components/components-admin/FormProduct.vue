<template>
  <form class="mt-8 space-y-6" @submit.prevent="addProduct">
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm -space-y-px flex flex-col">
      <div class="mb-2">
        <label for="email-address" class="sr-only">Name Product</label>
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
        Create Product
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

class Product {
  constructor(
    descriptionproduct,
    nameproduct,
    amountproduct,
    idcategory,
    idprovider,
    price,
    urlimg
  ) {
    this.descriptionproduct = descriptionproduct;
    this.nameproduct = nameproduct;
    this.amountproduct = amountproduct;
    this.idcategory = idcategory;
    this.idprovider = idprovider;
    this.price = price;
    this.urlimg = urlimg;
  }
}

let url = "http://localhost:4000/products/";

export default {
  name: "FormProduct",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getProductsAdmin");
    });
    const products = computed(() => store.state.productsAdmin);
    return { products };
  },
  data() {
    return {
      product: new Product(),
      key: 0,
    };
  },
  methods: {
    async addProduct() {
      try {
        let res = await axios.post(url, {
          descriptionproduct: this.descriptionproduct,
          nameproduct: this.nameproduct,
          amountproduct: this.amountproduct,
          idcategory: this.idcategory,
          idprovider: this.idprovider,
          price: this.price,
          urlimg: this.urlimg,
        });
        let data = await res.data;
        this.key += 100;
        this.$store.commit("setComponentKey", this.key);
        alert(data.message);
        console.log(data);
        this.product = new Product();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>