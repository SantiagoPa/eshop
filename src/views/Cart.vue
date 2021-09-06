<template>
  <div>
    <div>
      <NavAuth />
    </div>
    <div class="flex justify-center my-6">
      <div
        class="
          flex flex-col
          w-full
          p-8
          text-gray-800
          bg-white
          shadow-lg
          pin-r pin-y
          md:w-4/5
          lg:w-4/5
        "
      >
        <div class="flex-1">
          <table class="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr class="h-12 uppercase">
                <th class="hidden md:table-cell"></th>
                <th class="text-left">Product</th>
                <th class="lg:text-right text-left pl-5 lg:pl-0">
                  <span class="lg:hidden" title="Quantity">Qtd</span>
                  <span class="hidden lg:inline">Quantity</span>
                </th>
                <th class="hidden text-right md:table-cell">Unit price</th>
                <th class="text-right">Total price</th>
              </tr>
            </thead>
            <tbody>
              <TableCart
                v-for="item in cart.result"
                :key="item.idproduct"
                :item="item"
              />
            </tbody>
          </table>
          <hr class="pb-6 mt-6" />
          <div>
            <button
              v-if="cart"
              @click.prevent="removeAllCart"
              class="
                text-red-400
                bg-red-50
                p-4
                rounded-md
                shadow-lg
                hover:text-red-600
                hover:bg-red-100
              "
            >
              clear cart
            </button>
          </div>
          <div class="my-4 mt-6 -mx-2 lg:flex">
            <div class="lg:px-2 lg:w-full">
              <div class="p-4 bg-gray-100 rounded-full">
                <h1 class="ml-2 font-bold uppercase">Purchase now</h1>
              </div>
              <div class="flex justify-center">
                <router-link to="/category-auth/purchase">
                   <button
                      class="
                        flex
                        justify-center
                        px-10
                        py-3
                        mt-6
                        font-medium
                        text-white
                        uppercase
                        bg-gray-800
                        rounded-full
                        shadow
                        item-center
                        hover:bg-gray-700
                        focus:shadow-outline
                        focus:outline-none
                      "
                    >
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="credit-card"
                        class="w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                        />
                      </svg>
                      <span class="ml-2 mt-5px justify-center"
                        >Procceed to Purchase</span
                      >
                    </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

import axios from "axios";

import NavAuth from "../components/NavAuth.vue";
import TableCart from "../components/TableCart.vue";

let url = "http://localhost:4000/cart/";

export default {
  name: "Cart",
  components: {
    NavAuth,
    TableCart,
  },
  data() {
    return {
      homeaddress: "",
      city: "",
      description: "",
    };
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getCart");
    });
    const cart = computed(() => store.state.cart);
    const totalPrice = computed(() => store.getters.totalPrice);
    let home_if = localStorage.getItem("home-user");
    return { cart, totalPrice, home_if };
  },
  mounted() {
    if (sessionStorage.getItem("my-token")) {
      console.log("cart-auth");
    } else {
      this.$router.push("/");
      console.log("cart-auth negade");
    }
  },
  methods: {
    async removeAllCart() {
      let uid = sessionStorage.getItem("id-user");
      let token = sessionStorage.getItem("my-token");
      try {
        let res = await axios.delete(url + uid + "/", {
          headers: { "my-token": token },
        });
        let data = await res.data;
        console.log(data);
        alert(data.message);
        this.$store.dispatch("getCart");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
