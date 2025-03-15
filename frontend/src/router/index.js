import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component:() => import('@/components/Login.vue'),
      meta: {
        title: 'logar'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/Register-House',
      name: 'register-House',
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
    {
      path: '/register',
      name: 'register',
      component :() => import('@/components/Register.vue'),
      meta: {
        title: 'Registrar'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router

