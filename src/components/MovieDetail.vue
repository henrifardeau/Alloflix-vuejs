<template>
  <div>
    <button class="button" @click="back()">{{'<'}}</button>
    <hr />
    <div v-if="movieDetail">
      <div class="container">
        <div class="columns is-desktop is-vcentered has-text-centered">
          <div class="column is-6-desktop">
            <img :src="movieDetail.Poster" alt />
          </div>
          <div class="column is-6-desktop">
            <h2 class="title is-spaced has-text-center">{{movieDetail.Title}}</h2>
            <p class="subtitle">{{movieDetail.Plot}}</p>
            <hr />
            <p>Note: {{movieDetail.imdbRating}} sur {{ movieDetail.imdbVotes }}</p>
            <br />
            <div class="controls">
              <div v-if="!moviesLiked.includes(movieDetail.Title)">
                <button class="button is-primary" @click="likeMovie(movieDetail.Title)">Like!</button>
              </div>
              <div v-else>
                <button class="button is-primary" @click="unlikeMovie(movieDetail.Title)">Dislike!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2>Nous regardons...</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Movie from '@/models/movie';
import { mapState, mapGetters } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState('movies', ['moviesLiked', 'movieDetail']),
    ...mapGetters('movies', ['moviesLiked', 'movieDetail']),
  },
  methods: {
    showMovieDetail(imdbID: string): void {
      console.log(imdbID);
    },
    likeMovie(movieTitle: string): void {
      this.$store.dispatch('movies/likeMovie', { movieTitle });
    },
    unlikeMovie(movieTitle: string): void {
      this.$store.dispatch('movies/unlikeMovie', { movieTitle });
    },
    back(): void {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$store.dispatch('movies/fetchMovieDetail', { imdbID: this.$route.params.id });
  },
});
</script>
