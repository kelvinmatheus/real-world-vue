import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/kelvinmatheus/vue_mastery_api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return apiClient.get('/events');
  },

  getEvent(id) {
    console.log(id);
    return apiClient.get(`/events/${id}`);
  },
};
