<template>
   <table class="rounded-t-lg m-5 my-10 mx-auto bg-gray-200 text-gray-800">
    <div >
      <thead>
        <tr class="h-12 uppercase border-b-2 border-gray-300">
          <th class="hidden md:table-cell">ID</th>
          <th class="mx-2">Name </th>
          <th class="mx-2">Description</th>
          <th class="">Actions</th>
        </tr>
      </thead>
      <tbody v-if="categories">
        <tr
            v-for="category of categories"
          :key="category.idcategory"
          class="my-10 bg-gray-100 border-b border-gray-200"
        >
          <td>
            <span class="m-5">
                {{category.idcategory}}
            </span>
          </td>
          <td>
            <span class="mt-5">
            {{category.namecategory}}
            </span>
          </td>
          <td>
            <span class="mt-5">
            {{category.descriptioncategory}}
            </span>
          </td>
          <td>
            <div class="mt-5 flex flex-row">

              <router-link to="/admin/category/edit-category"
                @click="editCategory(category.idcategory)"
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
              @click="deleteCategory(category.idcategory)"
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
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex'
import axios from 'axios';

let url = 'http://localhost:4000/category/';
export default {
    name: 'TableCategories',
    setup(){
        const store = useStore();
        onMounted(()=>{
            store.dispatch('getCategories');
        });
        const deleteCategory = (id) =>{
            store.dispatch('deleteCategory', id);
        };
        const categories = computed(()=>store.state.categories);
        return  {categories, deleteCategory}
    },
    methods:{ 
    async editCategory(id){
      try {
        let res = await axios.get(url+id);
        let data = await res.data;
        this.$store.commit('setCategoryEdit', {data});
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<style>

</style>