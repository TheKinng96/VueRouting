import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './route'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to,from,savedPosition){
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash}
    }
    return {x:0, y:700}
  }
})

router.beforeEach((to, from, next) => {
  next();
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
