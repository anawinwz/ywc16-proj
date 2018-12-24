import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueGoodshare from "vue-goodshare";

Vue.use(VueRouter)
Vue.use(VueGoodshare)

import { routes } from './router/index'
Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	routes,
});


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
