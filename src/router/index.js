import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '数字药监数据驾驶舱',
    meta: {
      title:'数字药监数据驾驶舱'
    },
    component: () => import('@/views/index.vue')
  },
]

const router = new VueRouter({
  routes,
  mode:'hash',
})

export default router
