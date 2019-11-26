import Vue from 'vue';
import Router from 'vue-router';

import MovieList from './views/MovieList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movieList',
      component: MovieList,
    },
    {
      path: '/*',
      redirect: { name: 'movieList' },
    },
  ],
});
