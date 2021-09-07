<template>
  <!-- component -->
  <div class="min-h-screen flex">
    <div class="py-12 px-10 w-1/4">
      <IconAdmin />
      <NavAdmin />
    </div>
    <div class="bg-indigo-50 flex-grow py-12 px-10">
      <WelcomeAdmin />
      <div v-if="purchases" class="mt-5 bg-gray-100 p-2 m-1 rounded-md">
        <div v-for="(element, index) in purchases" :key="index">
          <div
            v-if="element.vecPurchases[0]"
            class="bg-gray-50 shadow-md p-5 mb-2"
          >
            <div>
              <span class="flex text-2xl font-bold">Data user: {{index+=1}}</span>
              <span class="text-xl">ID user: </span>
              <span class="text-xl font-bold">{{element.vecPurchases[0].idcostumer}}</span>
            </div>
            <div>
              <span class="mr-2 text-xl">N° Invoice:</span>
              <span class="text-xl font-bold">{{element.vecPurchases[0].idpurchase}}</span>
            </div>
            <div>
              <span class="mr-2 text-xl">Date:</span>
              <span class="text-xl font-bold">{{element.vecPurchases[0].datepurchase.split("T")[0]}}</span>
            </div>
            <div>
              <span class="mr-2 text-xl">Hours:</span>
              <span class="text-xl font-bold">{{element.vecPurchases[0].timepurchase.split(".")[0]}}</span>
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

            <tbody v-if="element.vecPurchases[0]">
              <TableCart
                v-for="item in element.vecPurchases"
                :key="item.idproduct"
                :item="item"
              />
            </tbody>
          </table>
          <div
            v-if="element.vecPurchases[0]"
            class="flex justify-center mt-5 w-full mb-20"
          >
            <span class="text-gray-900 font-bold text-xl flex flex-row">
              <span class="mr-5">Total price: </span>
              <span class="opacity-70">${{element.totalPrice}}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

import WelcomeAdmin from "@/components/components-admin/WelcomeAdmin.vue";
import IconAdmin from "@/components/components-admin/IconAdmin.vue";
import NavAdmin from "@/components/components-admin/NavAdmin.vue";
import TableCart from "@/components/TableCart.vue";

export default {
  name: "ProductAdmin",
  components: {
    WelcomeAdmin,
    IconAdmin,
    NavAdmin,
    TableCart,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getPurchases");
    });
    const purchases = computed(() => store.state.purchaseAdmin);
    return { purchases };
  },
};
</script>

<style>
</style>