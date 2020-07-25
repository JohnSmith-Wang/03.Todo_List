import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todolist from '../views/Todolist.vue'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/todo',
    name: 'Todolist',
    component: Todolist,
    redirect:'/todo/all',
    children: [
      {
        path: '/todo/all',
        name: 'all',
      },
      {
        path: '/todo/active',
        name: 'active',
      },
    
      {
        path: '/todo/complete',
        name: 'complete',
      },
    ]
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
