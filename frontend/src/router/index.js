import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/Register-Product',
      name: 'register-product',
      component :() => import('@/components/RegisterProducts.vue'),
      meta: {
        title: 'Cadastrar Produto'
      }
    },
    {
      path: '/estatisticas',
      name: 'estatisticas',
      component :() => import('@/components/Statistics.vue'),
      meta: {
        title: 'Estatísticas'
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
