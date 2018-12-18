import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import introduction from '@/components/introduction'
import language from '@/components/language'
import intern from '@/components/intern'
import portfolio from '@/components/portfolio'
import sns from '@/components/sns'

// import Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/introduction',
      component: introduction
    },
    {
      path: '/language',
      component: language
    },
    {
      path: '/intern',
      component: intern
    },
    {
      path: '/portfolio',
      component: portfolio
    },
    {
      path: '/sns',
      component: sns
    }
  ]
})