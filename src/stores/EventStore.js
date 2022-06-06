/* eslint-disable */
import { defineStore } from 'pinia';
import EventService from '../services/EventService';

export const useEventStore = defineStore('EventStore', {
  state() {
    return {
      events: [],
      event: {},
    };
  },

  getters: {
    numberOfEvents: (state) => state.events.length,
  },

  actions: {
    fetchEvents() {
      return EventService.getEvents()
        .then(response => {
          // This one line takes care of the mutation
          // with no additional configuration!
          this.events = response.data;
        })
        .catch(error => {
          throw error;
        });
    },
  },
});
