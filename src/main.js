import Vue from 'vue'
import App from './App.vue'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Track from "./components/Track"
import VueRouter from "vue-router"
Vue.use(VueRouter);
Vue.component('App-nav',Navbar);

const routes = [
  {path:'/',component:Home},
  {path:'/about',component:About},
  {path:'/track',name:'track',component:Track},
]
const router = new VueRouter({
  routes,  
  mode:'history'
})

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
 