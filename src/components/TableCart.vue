<template>
  <tr v-if="item">
    <td class="hidden pb-4 md:table-cell">
      <img :src="item.urlimg" class="w-20 rounded" alt="Thumbnail" />
    </td>
    <td>
      <p class="mb-2 md:ml-4 flex flex-1">
        {{ item.nameproduct }}
      </p>
      <form action="#">
        <button
        v-if="$route.name == 'Cart'"
          @click.prevent="removeItemCart(item.idproduct)"
          type="submit"
          class="text-gray-700 md:ml-4"
        >
          <small class="text-md text-red-400">Remove item</small>
        </button>
      </form>
    </td>
    <td class="justify-center md:justify-end md:flex mt-6">
      <div class="w-20 h-10">
        <div class="relative flex flex-row w-full h-8 justify-center">
          <p class="text-md font-bold mr-2 mt-1">
            {{ item.amount }}
          </p>
        </div>
      </div>
    </td>
    <td class="hidden text-right md:table-cell">
      <span
        class="text-sm lg:text-base text-green-700 font-medium justify-center"
      >
        ${{ item.price }}
      </span>
    </td>
    <td class="text-right">
      <span
        class="text-sm lg:text-base text-green-700 font-medium justify-center"
      >
        ${{ item.price * item.amount }}</span
      >
    </td>
  </tr>
</template>

<script>
import axios from "axios";

let url = "http://localhost:4000/cart/";
export default {
  name: "TableCart",
  props: ["item"],
  methods: {
    async removeItemCart(idproduct) {
      let uid = sessionStorage.getItem("id-user");
      let token = sessionStorage.getItem("my-token");
      try {
        let res = await axios.delete(url + uid + "/" + idproduct, {
          headers: { "my-token": token },
        });
        let data = await res.data;
        console.log(data);
        alert(data.message + "to cart");
        this.$store.dispatch("getCart");
        this.$store.dispatch("removeProductCart",this.item);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>