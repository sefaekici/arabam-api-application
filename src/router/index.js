import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CarDetail from "../views/CarDetail.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/car-detail/:id",
    name:"CarDetail",
    component:CarDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
