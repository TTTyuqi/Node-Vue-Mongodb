import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '../views/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'main',
    component: main,
    children:[
      {
        path:'/',
        name:'Home',
        component:() => import('../views/Home.vue')
      },
      {
        path:'/article/:id',
        name:'Article',
        component: () => import ('../views/Article.vue'),
        props: true
      }
    ]
  },
  {
    path: '/hero/:id',
    name: 'hero',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Hero.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
