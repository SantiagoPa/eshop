<template>
  <Invoice :key="componentKey"/>  
</template>

<script>
import Invoice from "../components/Invoice.vue";

export default {
  name: "ListPurchase",
  components: {
    Invoice,
  },
  data(){
    return{
      componentKey: 0,
    }
  },
  methods:{
     forceRerender(){
       setTimeout(()=>{
         this.componentKey +=1;
       },100);
    }
  }
};
</script>

<style>
</style>