<template>
  <!-- component -->
  <div class="min-h-screen flex">
    <div class="py-12 px-10 w-1/4">
      <IconAdmin />
      <NavAdmin />
    </div>
    <div class="bg-indigo-50 flex-grow py-12 px-10">
      <WelcomeAdmin />
      <FormProvider :key="componenKey"/>
      <TableProvider :key="componentKey"/>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

import WelcomeAdmin from "@/components/components-admin/WelcomeAdmin.vue";
import IconAdmin from "@/components/components-admin/IconAdmin.vue";
import NavAdmin from "@/components/components-admin/NavAdmin.vue";
import FormProvider from "@/components/components-admin/FormProvider.vue";
import TableProvider from "@/components/components-admin/TableProvider.vue";

export default {
    name:'AdminProvider',
    components:{
        WelcomeAdmin,
        IconAdmin,
        NavAdmin,
        FormProvider,
        TableProvider,
    },
    setup(){
    const store = useStore()
    const componentKey = computed(()=>store.state.keyProvider);
    return{componentKey}
  }
}
</script>

<style>

</style>