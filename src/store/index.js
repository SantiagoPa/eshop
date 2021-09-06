import axios from "axios";

import { createStore } from 'vuex';

//url get ProductsData
let urlProductsData = 'http://localhost:4000/productsdata/';


//url post cart
let urlPostCart = 'http://localhost:4000/cart';

//url get Purchases
let urlGetPurchases = 'http://localhost:4000/purchase/costumer/';


export default createStore({
  state: {
    userAuth: false,
    userAdmin:{},
    productsCategories:[],
    productCart: {},
    products:[],
    cart:{},
    home:{},
    purchase:{},
  },
  mutations: {
    setUserAdmin(state, payload){
      state.userAdmin = payload;
    },
    setProducts(state, payload){
      state.products = payload;
    },
    setProductsCategories(state, payload){
      state.productsCategories = payload;
    },
    setCart(state, payload){
      state.cart = payload;
    },
    setProductCart(state, payload){
      state.productCart[payload.idproduct] = payload;
    },
    setHome(state, payload){
      state.home = payload;
    },
    setPurchase(state, payload){
      state.purchase = payload;
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
        let res = await axios.get(urlProductsData);
        let data = await res.data;
        console.log(data);
        commit('setProducts',data);
      } catch (error) {
        console.log(error);
      }
    },
    async getCart({commit}){
      let idcostumer = sessionStorage.getItem('id-user');
      let token = sessionStorage.getItem('my-token');
      try {
        let res = await axios.get(urlPostCart+'/'+idcostumer,{
          headers:{ "my-token": token }
        });
        let data = await res.data;
        commit('setCart',data);
      } catch (error) {
        console.log(error);
      }
    },
    async getListPurchase({commit}){
      let idcostumer = sessionStorage.getItem('id-user');
      let token = sessionStorage.getItem('my-token');
      try {
        let res = await axios.get(urlGetPurchases+idcostumer,{
          headers:{ "my-token": token }
        });
        let data = await res.data;
        console.log(data);
        commit('setPurchase',data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters:{
    getUserAuth(state){
      return state.userAuth;
    },
  },
  modules: {
  }
})
