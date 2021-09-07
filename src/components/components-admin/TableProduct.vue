<template>
  <table class="rounded-t-lg m-5 my-10 mx-auto bg-gray-200 text-gray-800">
    <div v-if="products">
      <thead>
        <tr class="h-12 uppercase border-b-2 border-gray-300">
          <th class="hidden md:table-cell">id</th>
          <th class="">Name</th>
          <th class="">Amount</th>
          <th class="">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product of products"
          :key="product.idporduct"
          class="my-10 bg-gray-100 border-b border-gray-200"
        >
          <td>
            <span class="m-5">
              {{ product.idproduct }}
            </span>
          </td>
          <td>
            <span class="mt-5">
              {{ product.nameproduct }}
            </span>
          </td>
          <td>
            <span class="mt-5">
              {{ product.amountproduct }}
            </span>
          </td>
          <td>
            <div class="mt-5 flex flex-row">

              <router-link to="/admin/product/edit-product"
              @click="editProduct(product.idproduct)"
                class="
                  mr-2
                  m-2
                  p-1
                  font-bold
                  text-base
                    rounded-lg
                  bg-gray-300
                  text-gray-900
                  hover:bg-gray-50
                  hover:text-black
                "
              >
                <button>edit</button>
              </router-link>
              <span
                class="
                  m-2
                  p-1
                  font-bold
                  text-base
                  rounded-lg
                  bg-red-200
                  text-red-600
                  hover:bg-red-50
                  hover:text-red-500
                "
              >
                <button
                @click="deleteProduct(product.idproduct)"
                >delete</button>
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </div>
  </table>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

let url = 'http://localhost:4000/products/';
export default {
  name: "TableProduct",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getProductsAdmin");
    });
    const products = computed(() => store.state.productsAdmin);
    const deleteProduct = (id) =>{
      store.dispatch("deleteProduct",id)
    };
    return { products, deleteProduct };
  },
  methods:{ 
    async editProduct(id){
      try {
        let res = await axios.get(url+id);
        let data = await res.data;
        this.$store.commit('setProductEdit', {data});
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>
