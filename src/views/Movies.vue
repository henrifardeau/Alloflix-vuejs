<template>
  <Movie v-if="movie" v-bind:movie="movie" />
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

import Movie from "@/components/movie/Movie.vue";

export default Vue.extend({
  name: "Movies",
  components: {
    Movie
  },
  data(): { movie: {} } {
    return {
      movie: {}
    };
  },
  mounted() {
    axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=12db1b34&t=${this.$route.params.query}`
      )
      .then(response => (this.movie = response.data))
      .catch(error => console.log(error));
  }
});
</script>

<style scoped>
</style>