import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Floder from '@/components/zujianxunhuanyinyong/Floder'
import ListTransition from '@/components/transition/ListTransition'
import CssTransitionAnimation from '@/components/transition/CssTransitionAnimation'
import TransitinendAnimationend from '@/components/transition/TransitinendAnimationend'
import TransitinendDuration from '@/components/transition/TransitinendDuration'
import HooksTransition from '@/components/transition/HooksTransition'
import AppearTransition from '@/components/transition/AppearTransition'
import MoreElementTransition from '@/components/transition/MoreElementTransition'
import StateMapState from '@/components/vuex-demo/StateMapState'
import GettersMapgetters from '@/components/vuex-demo/GettersMapgetters'
import MutationsMapmutations from '@/components/vuex-demo/MutationsMapmutations'
import ActionsMapactions from '@/components/vuex-demo/ActionsMapactions'
import StoreModulesDemo from '@/components/vuex-demo/StoreModulesDemo'

const CustomOrder = function () {
  return import(/* webpackChunkName: "group-foo" */ '@/components/custom-order/CustomOrder')
}
const Mixins01 = function () {
  return import(/* webpackChunkName: "group-foo" */ '@/components/mixins/Mixins01')
}
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/floder',
      name: 'Floder',
      component: Floder
    },
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        b: CustomOrder
      }
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
    },
    {
      path: '/TransitinendDuration',
      name: 'TransitinendDuration',
      component: TransitinendDuration
    },
    {
      path: '/HooksTransition',
      name: 'HooksTransition',
      component: HooksTransition
    },
    {
      path: '/AppearTransition',
      name: 'AppearTransition',
      component: AppearTransition
    },
    {
      path: '/MoreElementTransition',
      name: 'MoreElementTransition',
      component: MoreElementTransition
    },
    {
      path: '/Mixins01',
      name: 'Mixins01',
      component: Mixins01
    },
    {
      path: '/customorder',
      name: 'CustomOrder',
      component: CustomOrder
    },
    {
      path: '/customorder/:name/:age',
      component: CustomOrder,
      props: true
    },
    {
      path: '/StateMapState',
      component: StateMapState
    },
    {
      path: '/GettersMapgetters',
      component: GettersMapgetters
    },
    {
      path: '/MutationsMapmutations',
      component: MutationsMapmutations
    },
    {
      path: '/ActionsMapactions',
      component: ActionsMapactions
    },
    {
      path: '/StoreModulesDemo',
      component: StoreModulesDemo
    }
  ]
})
