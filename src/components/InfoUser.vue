<template>
  <div class="container bg-white justify-center w-4/5" v-if="user">
    <h1 class="text-4xl mt-5 shadow-xl inline-flex p-5">Infortaion user</h1>
    <div class="mt-10 bg-gray-50 flex flex-col justify-center p-5">
      <div class="">
        <span class="text-lg mr-3">Name:</span>
        <span class="text-lg font-bold">{{ user.data.namecostumer }}</span>
      </div>
       <div class="">
        <span class="text-lg mr-3">Phonenumber:</span>
        <span class="text-lg font-bold">{{ user.data.phonenumbercostumer }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
    name: 'InfoUser',
    setup() {
    const store = useStore();
    const user = computed(()=>store.state.accountEdit);
    return {user}
  },
};
</script>

<style>
</style>