import Movie from '@/models/movie';
import { Module } from 'vuex';
import axios from 'axios';

const omdbUrl = `http://www.omdbapi.com/?apikey=12db1b34`;

function getFromLocalStorage(): Movie[] {
  const moviesLiked: string | null = localStorage.getItem('moviesLiked');

  return moviesLiked ? JSON.parse(moviesLiked) : [];
}

const movies: Module<{ movies: Movie[]; moviesLiked: Movie[] }, any> = {
  namespaced: true,
  state: {
    movies: [],
    moviesLiked: getFromLocalStorage(),
  },
  getters: {
    movies(state): Movie[] {
      return state.movies;
    },
    moviesLiked(state): Movie[] {
      return state.moviesLiked;
    },
  },
  mutations: {
    fetchMovies(state, payload: Movie[]) {
      state.movies = payload;
    },
  },
  actions: {
    async fetchMovies(context, payload: { search: string; type: string; page: string }) {
      const search = `&s=${payload.search}`;
      const type = `&type=${payload.type}`;
      const page = `&page=${payload.page}`;

      const response = await axios.get(`${omdbUrl}${type}${page}${search}`);
      context.commit('fetchMovies', response.data.Search);
    },
    like(context, payload: { movie: Movie }) {
      context.commit('likeMovie', payload);
    },
    unlike(context, payload: { movie: Movie }) {
      context.commit('unlikeMovie', payload);
    },
  },
};

export default movies;
