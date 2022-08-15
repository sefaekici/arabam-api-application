import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import LoadingSpinner from "./components/LoadingSpinner.vue"


const base = axios.create({
  baseURL: 'http://sandbox.arabamd.com/api/v1'
});

Vue.prototype.$http = base; 
Vue.config.productionTip = false

Vue.component("loading-spinner",LoadingSpinner);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
