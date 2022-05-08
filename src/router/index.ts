import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/index.vue'
import Login from '../views/login/index.vue'
import Test from '../views/ts-test/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home', 
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/test',
    component: Test
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
