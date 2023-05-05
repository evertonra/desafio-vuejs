import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeilaoView from '../views/LeilaoView.vue'
import LoginView from '../views/LoginView.vue'
import UsuarioView from '../views/usuario/UsuarioView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'loginview',
    component: LoginView
  },
  {
    path: '/usuario',
    name: 'usuarioview',
    component: UsuarioView
  },
  {
    path: '/leilao/:id',
    name: 'leilaoview',
    component: LeilaoView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router




