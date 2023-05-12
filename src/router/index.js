import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeilaoView from '../views/LeilaoView.vue'
import RegisterView from '../views/RegisterView.vue'
import SignIn from '../views/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cadastrar',
    name: 'registerview',
    component: RegisterView
  },
  {
    path: '/logar',
    name: 'sign-in',
    component: SignIn
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




