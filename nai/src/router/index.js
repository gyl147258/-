import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:()=>import("../views/index/index.vue"),
    redirect:"/zh",
    children:[
      {
        path:"/zh",
        component:()=>import("../views/index/zh/zh.vue")
      },
      {
        path:"/new",
        component:()=>import("../views/index/new/new.vue")
      }
    ]

  },
  {
    path:"gou",
    name:"/gou",
    component:()=>import("../views/gou/gou.vue")
  },
  {
    path:"xq",
    name:"/xq",
    component:()=>import("../views/xq/xq.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
