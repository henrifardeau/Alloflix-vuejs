<template>
  <div>
    <br />
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="movie.Poster" alt="Placeholder image" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Movie from '@/models/movie';
export default Vue.extend({
  props: {
    movie: Object as () => Movie,
  },
});
</script>
