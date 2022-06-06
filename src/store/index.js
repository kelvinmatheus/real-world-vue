import { createStore } from 'vuex';

export default createStore({
  state: {
    user: 'Kelvin Firmino',
    events: [],
  },
  getters: {
  },
  mutations: {
    ADD_EVENT(state, event) { // our first mutation
      state.events.push(event);
    },
  },
  actions: {
  },
  modules: {
  },
});
