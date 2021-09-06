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
            <div v-if="cart" class="flex justify-center mt-5 w-full">
              <span class="text-gray-900 font-bold text-xl flex flex-row">
                <span class="mr-5">Total price: </span>
                <span class="opacity-70">${{cart.totalPrice}}</span>
              </span>
            </div>
          <hr class="pb-6 mt-6" />
          <div></div>
          <div class="my-4 mt-6 -mx-2 lg:flex">
            <div class="lg:px-2 lg:w-full">
              <div class="p-4 bg-gray-100 rounded-full">
                <h1 class="ml-2 font-bold uppercase">Your Address</h1>
              </div>
              <div class="p-4">
                <div>
                  <div class="bg-gray-100 flex flex-col" >
                    <FormHome />
                  </div>
                  <div class="justify-center flex space-x-8">
                    <router-link to="/category-auth/cart">
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
                          bg-gray-400
                          rounded-full
                          shadow
                          item-center
                          hover:bg-gray-700
                          focus:shadow-outline
                          focus:outline-none
                        "
                      >
                        <span class="ml-2 mt-5px">View Cart</span>
                      </button>
                    </router-link>
                    <router-lin to="/category-auth/purchase/list-purchase">
                      <button
                      @click='purchaseNow'
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
                          >Purchase Now</span
                        >
                      </button>
                    </router-lin>
                  </div>
                </div>
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
import FormHome from "../components/FormHome.vue";

let url = 'http://localhost:4000/purchase/';
export default {
  name: "Purchase",
  components: {
    NavAuth,
    TableCart,
    FormHome,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getCart");
    });
    const cart = computed(() => store.state.cart);
    const home = computed(() => store.state.home);
    const totalPrice = computed(() => store.getters.totalPrice);
    let home_str = localStorage.getItem("user-home");
    let home_json = JSON.parse(home_str);
    return { cart, totalPrice, home, home_json };
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
    async purchaseNow(){
      let token = sessionStorage.getItem("my-token");
      let uid   = sessionStorage.getItem("id-user");
      let hid   = localStorage.getItem("id-home");
      try {
        let res = await axios.post(url,{
          idcostumer: uid, 
          idhome: hid
        },
        {
            headers: { "my-token": token },
        });
        let data = await res.data;
        console.log(uid,hid);
        alert(data.message);
        console.log(data);
        this.$router.push('/category-auth/purchase/list-purchase');
      } catch (error) {
        console.log(error);
      }
    },
  },
  
};
</script>

<style>
</style>