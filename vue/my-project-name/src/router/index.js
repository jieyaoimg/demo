import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import counter from '@/components/counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    }
  ]
})
