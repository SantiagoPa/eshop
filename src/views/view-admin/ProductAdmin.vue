<template>
  <!-- component -->
  <div class="min-h-screen flex">
    <div class="py-12 px-10 w-1/4">
      <IconAdmin />
      <NavAdmin />
    </div>
    <div class="bg-indigo-50 flex-grow py-12 px-10">
      <WelcomeAdmin />
      <FormProduct/>
      <TableProduct class="mt-10" :key="componentKey"/>
    </div>
  </div>
</template>

<script>
import WelcomeAdmin from "@/components/components-admin/WelcomeAdmin.vue";
import IconAdmin from "@/components/components-admin/IconAdmin.vue";
import NavAdmin from "@/components/components-admin/NavAdmin.vue";
import FormProduct from "@/components/components-admin/FormProduct.vue";
import TableProduct from "@/components/components-admin/TableProduct.vue";

import { useStore } from "vuex";
import { computed } from '@vue/reactivity';
export default {
  name: "AdminPurchase",
  components: {
    WelcomeAdmin,
    IconAdmin,
    NavAdmin,
    FormProduct,
    TableProduct,
  },
  setup(){
    const store = useStore()
    const componentKey = computed(()=>store.state.componentKey);
    return{componentKey}
  }
};
</script>

<style>
</style>