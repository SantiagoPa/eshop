<template>
  <div class="min-h-screen flex">
    <div class="py-12 px-10 w-1/4">
      <IconAdmin />
      <NavAdmin />
    </div>
    <div class="bg-indigo-50 flex-grow py-12 px-10">
      <WelcomeAdmin />
      <FormCategory />
      <TableCategories :key="keyCategory"/>
    </div>
  </div>
</template>

<script>

import IconAdmin from "@/components/components-admin/IconAdmin.vue";
import NavAdmin from "@/components/components-admin/NavAdmin.vue";
import WelcomeAdmin from "@/components/components-admin/WelcomeAdmin.vue";
import FormCategory from "@/components/components-admin/FormCategory.vue";
import TableCategories from "@/components/components-admin/TableCategories.vue";
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
export default {
    name:'AdminCategory',
    components:{
      IconAdmin,
      NavAdmin,
      WelcomeAdmin,
      FormCategory,
      TableCategories,
    },
    setup(){
    const store = useStore()
    const keyCategory = computed(()=>store.state.keyCategory);
    return{keyCategory}
  }
};
</script>

<style>
</style>