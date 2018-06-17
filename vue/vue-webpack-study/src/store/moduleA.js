export default {
  namespaced: true,
  state: {
    a: 666
  },
  getters: {

  },
  mutations: {
    add (state, n) {
      state.a += 1
    }
  },
  actions: {
    moduleAAction01 (context, n) {
      context.commit('moduleB/adds', n, {root: true})
    }
  }
}
