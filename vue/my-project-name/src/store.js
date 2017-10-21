/**
 * Created by jieyao on 2017/9/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    num: 0
  },
  getters: {
    reNum: (state) => {
      return state.num + 100
    }
  },
  mutations: {

  },
  actions: {

  }
})
export default store
