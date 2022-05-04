import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/index.vue'
import Login from '../views/login/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
