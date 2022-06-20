import { createStore } from "vuex";

export default createStore({
  state: {
    search: ''
  },

  mutations: {
    setSearch(state, value = '') {
      state.search = value
    }
  },
  actions: {},
  modules: {},
});
