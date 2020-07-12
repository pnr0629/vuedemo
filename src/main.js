import Vue from 'vue'
import App from './App.vue'
import './icons/index'
import VueRouter from 'vue-router'
import Home from './Home'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  {
    path:'/home',
    name: "home",
    component:Home,
  },
  {
    path:'/',
    name: "home",
    component:Home,
    redirect:'/home'
  },
  {
    path:'/about',
    name: "about",
    component:() => import('./about')
  },
]
const router = new VueRouter({
  mode:"history",
  routes
})

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
