import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: "Việc 1", content: "Content 1", completed: false },
      { id: 2, title: "Việc 2", content: "Content 2", completed: false },
      { id: 3, title: "Việc 3", content: "Content 3", completed: false },
    ]
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  }

})
