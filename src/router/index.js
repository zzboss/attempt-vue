import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('@/view/home')
    },
    {
      path: '/font-to-img',
      name: 'font-to-img',
      component: () => import('@/view/fontToImg')
    },
    {
      path: '/',
      redirect: 'index'
    }
  ],
  mode: 'history'
})
