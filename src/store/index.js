import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
    
  },
  mutations: {
    setError(state, error){
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {
   async fetchCurrency(){
     const key = process.env.VUE_APP_FIXER
     const res = await fetch(`http://data.fixer.io/api/latest?access_key=5085e17314353a97ff902492081386e0&symbols=USD,EUR,RUB`)
     return await res.json()
     }
  },
  modules:{
    auth, info
  }
})