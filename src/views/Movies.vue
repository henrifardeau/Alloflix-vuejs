<template>
  <Movie v-if="movie" v-bind:movie="movie" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

import Movie from "@/components/movie/Movie.vue";

@Component({
  components: {
    Movie
  }
})
export default class Movies extends Vue {
  movie: {} = {};
  mounted() {
    axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=12db1b34&t=${this.$route.params.query}`
      )
      .then(response => (this.movie = response.data))
      .catch(error => console.log(error));
  }
}
</script>