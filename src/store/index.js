import axios from "axios";

import { createStore } from 'vuex'

export default createStore({
  state: {
    userAuth: false,
    userAdmin:{},
    products:[],
  },
  mutations: {
    setUserAdmin(state, payload){
      state.userAdmin = payload;
    },
    setProducts(state, payload){
      state.products = payload;
      console.log(state.products);
    },
    setUserAuth(state, payload){
      state.userAuth = payload;
    }
  },
  actions: {
    async getUserAdmin({commit}){
      try {
        let res = await axios.get('admin.json');
        let data = await res.data;
        commit('setUserAdmin',data);
      } catch (error) {
        console.log(error);
      }
    },
    async getProducts({commit}){
      try {
        let res = await axios.get('api.json');
        let data = await res.data;
        commit('setProducts',data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters:{
    getUserAuth(state){
      return state.userAuth;
    }
  },
  modules: {
  }
})
