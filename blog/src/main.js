// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './route'
import VueCarousel from 'vue-carousel'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueCarousel)
Vue.use(VueResource)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes
})

export const bus = new Vue();
export const busNav = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
