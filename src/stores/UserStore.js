/* eslint-disable */
import { defineStore } from 'pinia';

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: 'Kelvin Firmino',
  }),
});
