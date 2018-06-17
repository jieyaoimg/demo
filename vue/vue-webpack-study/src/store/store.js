import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './moduleA'
import moduleB from './moduleB'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    a: 1,
    b: 2
  },
  getters: {
    getterA (state) {
      return state.a * 10
    },
    getterB (state, getterAll) { // 第二个可选参数表示store的getters
      return getterAll.getterA + 10 // 测试了下，即使没有第二个参数也可以通过return store.getters.getterA获取到别的getter
    },
    getterC (state, getterAll) {
      return (arg) => { // getter返回一个函数，
        return state.a + arg
      }
    }
  },
  mutations: {
    add (state, n) {
      state.a += n.num
    }
  },
  actions: {
    asynAdd (context, n) {
      const m = n.num + context.state.b// 这里使用store.state也可以
      context.commit('add', {num: m})// 这里使用store.commit也可以
    }
  },
  modules: {
    moduleA,
    moduleB
  }
})
export default store
