import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Cart from './Cart'
import Login from "./Login"
export default new Vuex.Store({
  modules:{
    Cart,Login
  }
})
