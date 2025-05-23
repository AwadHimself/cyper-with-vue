import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import notFoundView from '@/views/notFoundView.vue';
import ProductsPageView from '@/views/ProductsPageView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },


    {
      path: '/:category/',
      name: 'products-page',
      component: ProductsPageView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: notFoundView
    }
  ]
})

export default router
