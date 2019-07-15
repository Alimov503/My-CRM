import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.component('Loader', Loader )
firebase.initializeApp({
  apiKey: "AIzaSyD_KVFJED1OJSU-FRTHDmY8kJESZrnqNvo",
  authDomain: "shamscrm-7deb7.firebaseapp.com",
  databaseURL: "https://shamscrm-7deb7.firebaseio.com",
  projectId: "shamscrm-7deb7",
  storageBucket: "shamscrm-7deb7.appspot.com",
  messagingSenderId: "718571243421",
})

let app 

  firebase.auth().onAuthStateChanged( ()=> {      
      if(!app){
          app = new Vue({
          router,
          store,
          render: h => h(App)
        }).$mount('#app')
    
      }
    
} )
