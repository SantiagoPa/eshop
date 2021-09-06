<template>
  <div class="flex mt-5 justify-between">
    <pre>
      {{products}}
    </pre>
    <div
      class="
        bg-white
        shadow-md
        h-96
        mx-3
        rounded-3xl
        flex flex-col
        justify-around
        items-center
        overflow-hidden
        sm:flex-row
        sm:h-52
        sm:w-3/5
        md:w-96
      "
    >
      <img
        class="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
        :src="product.urlimg"
        :alt="product.nameproduct"
      />

      <div
        class="
          flex-1
          w-full
          flex flex-col
          items-baseline
          justify-around
          h-1/2
          pl-6
          sm:h-full
          sm:items-baseline
          sm:w-1/2
        "
      >
        <div class="flex flex-col justify-start items-baseline">
          <h1 class="text-lg font-normal mb-0 text-gray-600 font-sans">
            {{product.nameproduct}}
          </h1>
          <span class="text-xs text-indigo-300 mt-0">amount: {{product.amountproduct}}</span>
        </div>
        <p class="text-xs text-gray-600 w-4/5">
          category: {{product.namecategory}}
        </p>
        <div class="w-full flex justify-between items-center">
          <h1 class="font-bold text-green-600 mr-2">${{product.price}}</h1>
          <button
          @click="addToCart(product.idproduct) && addProductCart(product)"
            class="bg-indigo-400 hover:bg-indigo-600 mr-4 text-white px-1 py-1 rounded-full shadow-md"
          >
            Add cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useStore } from "vuex";
let url = 'http://localhost:4000/cart';

export default {
  name: "Card",
  props:['product'],
  setup(){
    const store = useStore();
    const addProductCart = (product)=>{
      store.dispatch('addToProductCart', product);  
    }
    return {addProductCart}
  },
  methods:{
    async  addToCart(idproduct){
      let uid = sessionStorage.getItem('id-user');
      try {
        let res = await axios.post(url,{
          "idcostumer": uid,
          "idproduct": idproduct,
          "amount": 1
        });
        let data = await res.data;
        console.log(data);
        alert(data.message+'to cart')
      } catch (error) {
          console.log(error);
      }
    },
  }
};
</script>

