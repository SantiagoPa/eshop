<template>
  <table class="rounded-t-lg m-5 my-10 mx-auto bg-gray-200 text-gray-800">
    <div>
      <thead>
        <tr class="h-12 uppercase border-b-2 border-gray-300">
          <th class="hidden md:table-cell">ID</th>
          <th class="mx-2">Name</th>
          <th class="mx-2">Email</th>
          <th class="mx-2">Phonenumber</th>
          <th class="mx-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="provider of providers"
          :key="provider.idprovider"
          class="my-10 bg-gray-100 border-b border-gray-200"
        >
          <td>
            <span class="m-5">
              {{ provider.idprovider }}
            </span>
          </td>
          <td>
            <span class="mt-5">
              {{ provider.nameprovider }}
            </span>
          </td>
          <td>
            <span class="mt-5">
              {{ provider.emailprovider }}
            </span>
          </td>
          <td>
            <span class="mt-5">
              {{ provider.phonenumber }}
            </span>
          </td>
          <td>
            <div class="mt-5 flex flex-row">
              <router-link
                to="/admin/provider/edit-provider"
                @click="editProvider(provider.idprovider)"
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
            </div>
          </td>
        </tr>
      </tbody>
    </div>
  </table>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import axios from 'axios';

let url = 'http://localhost:4000/provider/'

export default {
  name: "TableProvider",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getProviders");
    });
    const providers = computed(() => store.state.providers);

    return { providers};
  },
  methods:{ 
    async editProvider(id){
      try {
        let res = await axios.get(url+id);
        let data = await res.data;
        this.$store.commit('setProviderEdit', {data});
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style>
</style>