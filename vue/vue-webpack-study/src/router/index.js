import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Floder from '@//components/zujianxunhuanyinyong/Floder'
import ListTransition from '@//components/transition/ListTransition'
import CssTransitionAnimation from '@//components/transition/CssTransitionAnimation'
import TransitinendAnimationend from '@//components/transition/TransitinendAnimationend'

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
    },
    {
      path: '/ListTransition',
      name: 'ListTransition',
      component: ListTransition
    },
    {
      path: '/CssTransitionAnimation',
      name: 'CssTransitionAnimation',
      component: CssTransitionAnimation
    },
    {
      path: '/TransitinendAnimationend',
      name: 'TransitinendAnimationend',
      component: TransitinendAnimationend
    }
  ]
})
