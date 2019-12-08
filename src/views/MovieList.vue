<template>
  <div>
    <section class="section">
      <h1 class="title has-text-centered">Alloflix</h1>
      <div class="container is-vcentered">
        <div class="field is-grouped">
          <p class="control is-expanded">
            <input class="input" type="text" placeholder="Find movies..." v-model="search" />
          </p>
          <p class="control">
            <button class="button is-primary" @click="fetchMovies()">Search</button>
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <ul>
          <movie v-for="movie in movies" :key="movie.title" :movie="movie" />
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Movie from '@/components/Movie.vue';
import { mapState, mapGetters } from 'vuex';

export default Vue.extend({
  components: { Movie },
  computed: {
    ...mapState('movies', ['movies']),
    ...mapGetters('movies', ['movies']),
  },
  data(): { search: string } {
    return {
      search: '',
    };
  },
  methods: {
    fetchMovies(): void {
      if (this.search) {
        this.$store.dispatch('movies/fetchMovies', { search: this.search, type: 'movie', page: '1' });
      }
    },
  },
});
</script>
