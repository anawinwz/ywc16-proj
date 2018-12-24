import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
