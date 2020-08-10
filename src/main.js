import Vue from 'vue'

import App from './App.vue'

import router from '@/router/index'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import '@/style/zz-attempt.css'

Vue.use(ViewUI)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
