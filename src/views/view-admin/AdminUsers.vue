<template>
  <div class="min-h-screen flex">
    <div class="py-12 px-10 w-1/4">
      <IconAdmin />
      <NavAdmin />
    </div>
    <div class="bg-indigo-50 flex-grow py-12 px-10">
      <WelcomeAdmin />
      <div v-if="costumers" class="mt-5 bg-gray-100 p-2  rounded-md">
        <div v-for="(element, index) in costumers" :key="index"
        class="m-4"
        >
           <div
            v-if="costumers"
            class="bg-gray-50 shadow-md p-5 mb-2"
          >
            <div>
              <span class="flex text-2xl font-bold">Data user: {{index+=1}}</span>
              <span class="text-xl">ID user: </span>
              <span class="text-xl font-bold">{{element.idcostumer}}</span>
            </div>
            <div>
              <span class="mr-2 text-xl">Email :</span>
              <span class="text-xl font-bold">{{element.emailcostumer}}</span>
            </div>
            <div>
              <span class="mr-2 text-xl">Name :</span>
              <span class="text-xl font-bold">{{element.namecostumer}}</span>
            </div>
            <div>
              <span class="mr-2 text-xl">Phonenumber:</span>
              <span class="text-xl font-bold">{{element.phonenumbercostumer}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from '@vue/runtime-core';

import IconAdmin from "@/components/components-admin/IconAdmin.vue";
import NavAdmin from "@/components/components-admin/NavAdmin.vue";
import WelcomeAdmin from "@/components/components-admin/WelcomeAdmin.vue";

export default {
    name: 'AdminUsers',
    components:{
        IconAdmin,
        NavAdmin,
        WelcomeAdmin
    },
    setup(){
      const store = useStore();
      onMounted(()=>{
        store.dispatch('getCostumersAdmin');
      });
      const costumers = computed(()=> store.state.costumerAdmin);
      return{costumers}
    }
}
</script>
