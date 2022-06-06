import { createStore } from 'vuex';
import EventService from '@/services/EventService';

export default createStore({
  state: {
    user: 'Kelvin Firmino',
    events: [],
  },
  getters: {
    numberOfEvents(state) {
      return state.events.length;
    },
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event);
        })
        .catch((error) => {
          throw (error);
        });
    },
    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then((response) => {
          commit('SET_EVENTS', response.data);
        })
        .catch((error) => {
          throw (error);
        });
    },
    fetchEvent({ commit, state }, id) {
      const existingEvent = state.events.find((event) => event.id === id);

      if (existingEvent) {
        return commit('SET_EVENT', existingEvent);
      }

      return EventService.getEvent(id)
        .then((response) => {
          commit('SET_EVENT', response.data);
        })
        .catch((error) => {
          throw (error);
        });
    },
  },
  modules: {
  },
});
