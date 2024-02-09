import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/clients/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: HomePage
    },
  ]
})

export default router
