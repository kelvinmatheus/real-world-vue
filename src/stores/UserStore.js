/* eslint-disable */
import { defineStore } from 'pinia';

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: 'Kelvin Firmino',
  }),

  getters: {
    firstName() {
      return this.user.split(' ')[0];
    },
  },
});
