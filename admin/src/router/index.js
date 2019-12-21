import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    component:() => import('../views/Login.vue'),
    meta: { isPublic:true }
  },
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/categoriter/create',
        component: () => import('../views/catergotrEited.vue')
      },
      {
        path: '/categoriter/create/:id',
        component: () => import('../views/catergotrEited.vue'),
        props: true
      },
      {
        path: '/categoriter/list',
        component: () => import('../views/catergotrList.vue')
      },
      {
        path: '/items/create',
        component: () => import('../views/itemsEdit.vue')
      },
      {
        path: '/items/create/:id',
        component: () => import('../views/itemsEdit.vue'),
        props: true
      },
      {
        path: '/items/list',
        component: () => import('../views/itemsList.vue')
      },
      {
        path: '/heros/create',
        component: () => import('../views/herosEdit.vue')
      },
      {
        path: '/heros/create/:id',
        component: () => import('../views/herosEdit.vue'),
        props: true
      },
      {
        path: '/heros/list',
        component: () => import('../views/herosList.vue')
      },
      {
        path: '/articles/create',
        component: () => import('../views/articleEdit.vue')
      },
      {
        path: '/articles/create/:id',
        component: () => import('../views/articleEdit.vue'),
        props: true
      },
      {
        path: '/articles/list',
        component: () => import('../views/articleList.vue')
      },
      {
        path: '/ads/create',
        component: () => import('../views/adEdit.vue')
      },
      {
        path: '/ads/create/:id',
        component: () => import('../views/adEdit.vue'),
        props: true
      },
      {
        path: '/ads/list',
        component: () => import('../views/adList.vue')
      },
      {
        path: '/admin_user/create',
        component: () => import('../views/adminuserEdit.vue')
      },
      {
        path: '/admin_user/create/:id',
        component: () => import('../views/adminuserEdit.vue'),
        props: true
      },
      {
        path: '/admin_user/list',
        component: () => import('../views/adminuserList.vue')
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})

export default router
