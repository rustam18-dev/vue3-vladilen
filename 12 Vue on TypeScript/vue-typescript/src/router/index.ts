import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TheHome from '../views/TheHome.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: TheHome
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/TheUsers.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  linkActiveClass: 'active'
})

export default router
