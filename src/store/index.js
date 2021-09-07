import axios from "axios";

import { createStore } from 'vuex';

//url get ProductsData
let urlProductsData = 'http://localhost:4000/productsdata/';

//url get product
let urlProducts = 'http://localhost:4000/products/';


//url post cart
let urlPostCart = 'http://localhost:4000/cart';

//url get Purchases
let urlGetPurchases = 'http://localhost:4000/purchase/costumer/';

//url delete product
let urlDeleteProduct = 'http://localhost:4000/products/';

// url purchase admin
let urlPurchaseAdmin = "http://localhost:4000/purchase/";

// url get costumers
let urlCostumerAdmin = "http://localhost:4000/costumers";

// url get categories
let urlCategories = 'http://localhost:4000/category/';

// url get providers
let urlProviders = 'http://localhost:4000/provider/';

export default createStore({
  state: {
    keyProvider:0,
    keyCategory: 0,
    keyAccount: 0,
    componentKey: 0,
    productEdit:{},
    accountEdit:{},
    categoryEdit:{},
    providerEdit:{},
    categories:[],
    providers:[],
    purchaseAdmin:[],
    costumerAdmin:[],
    productsAdmin:[],
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
    setKeyProvider(state, payload){
      state.keyProvider = payload;
    },
    setKeyCategory(state, payload){
      state.keyCategory = payload;
    },
    setComponentKey(state, payload){
      state.componentKey = payload;
    },
    setUserAdmin(state, payload){
      state.userAdmin = payload;
    },
    setProducts(state, payload){
      state.products = payload;
    },
    setCategories(state, payload){
      state.categories = payload;
    },
    setProviders(state, payload){
      state.providers = payload;
    },
    setAccountEdit(state, payload){
      state.accountEdit = payload;
      state.keyAccount += 1;
    },
    setProductEdit(state, payload){
      state.productEdit = payload;
    },
    setCategoryEdit(state, payload){
      state.categoryEdit = payload;
    },
    setProviderEdit(state, payload){
      state.providerEdit = payload;
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
    setPurchaseAdmin(state, payload){
      state.purchaseAdmin = payload;
    },
    setCostumersAdmin(state, payload){
      state.costumerAdmin = payload;
    },
    setProductsAdmin(state, payload){
      state.productsAdmin = payload;
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
    async getCategories({commit}){
      try {
        let res = await axios.get(urlCategories);
        let data = await res.data;
        console.log(data);
        commit('setCategories',data);
      } catch (error) {
        console.log(error);
      }
    },
    async getProviders({commit}){
      try {
        let res = await axios.get(urlProviders);
        let data = await res.data;
        console.log(data);
        commit('setProviders',data);
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
    async getPurchases({commit}) {
      try {
        let res = await axios.get(urlPurchaseAdmin);
        let data = res.data;
        commit('setPurchaseAdmin', data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async getProductsAdmin({commit}){
      try {
        let res = await axios.get(urlProducts);
        let data = await res.data;
        console.log(data);
        commit('setProductsAdmin',data);
      } catch (error) {
        console.log(error);
      }
    },
    async getCostumersAdmin({commit}){
      try {
        let res = await axios.get(urlCostumerAdmin);
        let data = await res.data;
        console.log(data);
        commit('setCostumersAdmin',data);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProduct({state},id){
      try {
        let res = await axios.delete(urlDeleteProduct+id);
        let data = await res.data;
        state.componentKey += 1.3;
        alert(data.message);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCategory({state},id){
      try {
        let res = await axios.delete(urlCategories+id);
        let data = await res.data;
        state.keyCategory += 1.3;
        alert(data.message);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProvider({state},id){
      try {
        let res = await axios.delete(urlProviders+id);
        let data = await res.data;
        state.keyProvider += 1.3;
        alert(data.message);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async updateProduct({state},{product},id){
      try {
        let res = await axios.put(urlDeleteProduct+id,{
          descriptionproduct: product.descriptionproduct,
          nameproduct: product.nameproduct,
          amountproduct: product.amountproduct,
          idcategory: product.idcategory,
          idprovider: product.idprovider,
          price: product.price,
          urlimg: product.urlimg,
        });
        let data = await res.data;
        state.componentKey += 1.3;
        alert(data.message);
        console.log(data);
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
