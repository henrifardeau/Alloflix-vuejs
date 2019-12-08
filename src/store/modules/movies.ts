import Movie from '@/models/movie';
import { Module } from 'vuex';
import axios from 'axios';

const omdbUrl = `http://www.omdbapi.com/?apikey=12db1b34`;

function getFromLocalStorage(): String[] {
  const moviesLiked: string | null = localStorage.getItem('moviesLiked');

  return moviesLiked ? JSON.parse(moviesLiked) : [];
}

const movies: Module<{ movies: Movie[]; moviesLiked: String[]; movieDetail: Movie | null }, any> = {
  namespaced: true,
  state: {
    movies: [],
    moviesLiked: getFromLocalStorage(),
    movieDetail: null,
  },
  getters: {
    movies(state): Movie[] {
      return state.movies;
    },
    moviesLiked(state): String[] {
      return state.moviesLiked;
    },
    movieDetail(state): Movie | null {
      return state.movieDetail;
    },
  },
  mutations: {
    fetchMovies(state, payload: Movie[]) {
      state.movies = payload;
    },
    fetchMovieDetail(state, payload: Movie) {
      state.movieDetail = payload;
    },
    likeMovie(state, payload: { movieTitle: string }) {
      state.moviesLiked = [...state.moviesLiked, payload.movieTitle];
      localStorage.setItem('moviesLiked', JSON.stringify(state.moviesLiked));
    },
    unlikeMovie(state, payload: { movieTitle: string }) {
      state.moviesLiked = state.moviesLiked.filter((title) => title !== payload.movieTitle);
      localStorage.setItem('moviesLiked', JSON.stringify(state.moviesLiked));
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
    async fetchMovieDetail(context, payload: { imdbID: string }) {
      const search = `&i=${payload.imdbID}`;

      const response = await axios.get(`${omdbUrl}${search}`);
      context.commit('fetchMovieDetail', response.data);
    },
    likeMovie(context, payload: { movieTitle: string }) {
      context.commit('likeMovie', payload);
    },
    unlikeMovie(context, payload: { movieTitle: string }) {
      context.commit('unlikeMovie', payload);
    },
  },
};

export default movies;
