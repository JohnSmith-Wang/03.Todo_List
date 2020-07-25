import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import 'bootstrap'

Vue.config.productionTip = false

sync(store, router)

Vue.directive('focus', { //註冊一個新的自定義指令 focus ，可以在下該指令後自動鎖定該處
  inserted: function (el) {
    el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
