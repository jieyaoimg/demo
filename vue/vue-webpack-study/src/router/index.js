import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Floder from '@//components/zujianxunhuanyinyong/Floder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/floder',
      name: 'Floder',
      component: Floder
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
