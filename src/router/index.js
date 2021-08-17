import Vue from 'vue'
import VueRouter from 'vue-router'
import Estoque from '../views/Estoque.vue'
import Cadastro from "../views/Cadastro.vue"
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/estoque',
    component: Estoque
  },
  {
    path: '/cadastro',
    component: Cadastro
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
