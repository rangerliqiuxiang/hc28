import Vue from 'vue'
import App from './App.vue'

import jq from './assets/js/jquery.min.js'
Vue.prototype.$ = jq

Vue.config.productionTip = false

import './assets/css/base.css'

import router from './plugins/router.js';
import store from './plugins/vuex.js'

new Vue({
  render: h => h(App),
  router,
  store,
  data:{
  },
}).$mount('#app')
