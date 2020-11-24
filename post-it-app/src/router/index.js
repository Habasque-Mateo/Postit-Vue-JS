import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/more/:id',
    name: 'More',
    component: () => import(/* webpackChunkName: "more" */ '../views/More.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
