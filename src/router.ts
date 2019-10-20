import Vue from 'vue';
import Router from 'vue-router';

import Search from './views/Search.vue';
import Movies from './views/Movies.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
    },
    {
      path: '/movies/:query',
      name: 'movies',
      component: Movies,
    },
    {
      path: '/*',
      redirect: { name: 'search' },
    },
  ],
});
