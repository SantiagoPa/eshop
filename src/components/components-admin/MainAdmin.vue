<template>
  <div class="bg-indigo-50 flex-grow py-12 px-10">
   <WelcomeAdmin/>
    <div>
      <div class="flex space-x-10">
        <CardSmall/>
      </div>
      <div class="flex mt-10 space-x-10">
        <Card/>
        <div class="flex-grow bg-white rounded-xl shadow-lg">Other</div>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeAdmin from "./WelcomeAdmin.vue";
import CardSmall from "./CardSmall.vue";
import Card from "./Card.vue";
export default {
    name: 'MainAdmin',
    components:{
      CardSmall,
      Card,
      WelcomeAdmin,
    }
};
</script>

<style>
</style>