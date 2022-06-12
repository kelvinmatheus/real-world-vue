import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '../views/EventListView.vue';
import EventDetailsView from '../views/EventDetailsView.vue';
import EventCreateView from '../views/EventCreateView.vue';
import Vue2View from '../views/Vue2View.vue';
import Vue3CompositionView from '../views/Vue3CompositionView.vue';
import Vue3CompositionReactiveView from '../views/Vue3CompositionReactiveView.vue';
import AboutView from '../views/AboutView.vue';
import ErrorDisplayView from '../views/ErrorDisplayView.vue';
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
    path: '/events/create',
    name: 'EventCreateView',
    component: EventCreateView,
  },
  {
    path: '/vue2',
    name: 'Vue2View',
    component: Vue2View,
  },
  {
    path: '/vue3-composition',
    name: 'Vue3CompositionView',
    component: Vue3CompositionView,
  },
  {
    path: '/vue3-composition-reactive',
    name: 'Vue3CompositionReactiveView',
    component: Vue3CompositionReactiveView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplayView',
    props: true,
    component: ErrorDisplayView,
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
