import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './route'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
//  02737094
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
