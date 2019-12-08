<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <button @click="showMovieDetail(movie.imdbID)">
            <img :src="movie.Poster" alt="Placeholder image" />
          </button>
        </figure>
      </div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Movie from '@/models/movie';

export default Vue.extend({
  props: {
    movie: Object as () => Movie,
  },
  methods: {
    showMovieDetail(imdbID: string): void {
      this.$router.push(`/movie/${imdbID}`);
    },
  },
});
</script>
