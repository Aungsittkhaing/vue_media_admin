import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/clients/HomePage.vue'
import NewsDetails from '../views/clients/NewsDetails.vue'
import LoginPage from '../views/clients/LoginPage.vue'

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
    {
      path : '/newsdetails/:newsId',
      name : 'newsdetails',
      component : NewsDetails
    },{
      path : '/loginPage',
      name : 'loginPage',
      component : LoginPage
    }
  ]
})

export default router
