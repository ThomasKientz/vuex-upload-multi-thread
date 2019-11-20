import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    buffer: [...Array(100).keys()],
    completed: [],
    current: []
  },
  mutations: {
    pop(state, getId) {
      const id = state.buffer.pop();
      state.current.push(id);
      getId(id);
    },
    done(state, id) {
      const idx = state.current.indexOf(id);
      state.current.splice(idx, 1);
      state.completed.push(id);
    }
  },
  actions: {
    uploadNext({ commit }) {
      return new Promise(resolve => {
        commit("pop", id => {
          setTimeout(() => {
            commit("done", id);
            resolve(id);
          }, 100);
        });
      });
    }
  }
});
