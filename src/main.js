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

router.beforeEach((to, from, next) => {
  next(vm => {
    console.log(vm);
    console.log("hello");
    if(to.path=="/") {
      vm.navBg = false;
      window.addEventListener('scroll', vm.updateScroll);
    }
    else {
      vm.navBg = true;
      window.removeEventListener('scroll');
    }
  });
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
