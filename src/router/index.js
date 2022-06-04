import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '../views/EventListView.vue';
import EventDetailsView from '../views/EventDetailsView.vue';
import AboutView from '../views/AboutView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'EventListView',
    component: EventListView,
  },
  {
    path: '/events/:id',
    name: 'EventDetailsView',
    props: true,
    component: EventDetailsView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFoundView',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
