<template>
  <div>
    <NavAuth />
  </div>
  <pre v-if="purchase.purchasesVec"></pre>
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
    <div v-if="purchase.purchasesVec">     
      <div 
      v-for="(element, index) in purchase.purchasesVec" :key="index">
        <div v-if="purchase.purchasesVec" class="bg-gray-50 shadow-md p-5 mb-2">
          <div>
            <span class="flex text-2xl font-bold">Data user</span>
            <span class="text-xl">Name user: </span>
            <span class="text-xl font-bold">{{ nameUser }}</span>
          </div>
          <div>
            <span class="mr-2 text-xl">N° Invoice:</span>
            <span class="text-xl font-bold">{{
              element.vecPurchases[0].idpurchase
            }}</span>
          </div>
          <div>
            <span class="mr-2 text-xl">Date:</span>
            <span class="text-xl font-bold">{{
              element.vecPurchases[0].datepurchase.split("T")[0]
            }}</span>
          </div>
          <div>
            <span class="mr-2 text-xl">Hours:</span>
            <span class="text-xl font-bold">{{
              element.vecPurchases[0].timepurchase.split(".")[0]
            }}</span>
          </div>
        </div>
        <table class="w-full text-sm lg:text-base" cellspacing="0">
          <thead>
            <tr class="h-12 uppercase">
              <th class="hidden md:table-cell"></th>
              <th class="text-left">Product</th>
              <th class="lg:text-right text-left pl-5 lg:pl-0">
                <span class="lg:hidden" title="Quantity">Amt</span>
                <span class="hidden lg:inline">Amount</span>
              </th>
              <th class="hidden text-right md:table-cell">Unit price</th>
              <th class="text-right">Total price</th>
            </tr>
          </thead>

          <tbody v-if="purchase.purchasesVec">
            <TableCart
              v-for="item in element.vecPurchases"
              :key="item.idproduct"
              :item="item"
            />
          </tbody>
        </table>
          <div v-if="purchase.purchasesVec" class="flex justify-center mt-5 w-full mb-20">
            <span class="text-gray-900 font-bold text-xl flex flex-row">
              <span class="mr-5">Total price: </span>
              <span class="opacity-70"
                >${{ element.totalPrice }}</span
              >
            </span>
          </div>
      </div>
    </div>
    </div>
  </div>
  <router-link to="/category-auth/cart" class="flex justify-center mb-5">
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
      <span class="ml-2 mt-5px justify-center">view Cart</span>
    </button>
  </router-link>
</template>

<script>

import { useStore } from "vuex";
import { onMounted, computed } from "vue";

import NavAuth from "./NavAuth.vue";
import TableCart from "./TableCart.vue";
export default {
  name: "Invoice",
  components: {
    NavAuth,
    TableCart,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getListPurchase");
    });

    const nameUser = sessionStorage.getItem("name-user");
    const purchase = computed(() => store.state.purchase);
    return { purchase, nameUser };
  },
};
</script>

