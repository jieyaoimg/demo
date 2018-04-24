import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aaa from '@/components/aaa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aaa',
      name: 'aaa',
      component: aaa
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
