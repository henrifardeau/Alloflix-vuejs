<template>
  <article class="card" v-if="movieData">
    <img class="thumb" :src="movie.Poster" />
    <div class="infos">
      <h2 class="title">{{movie.Title}}</h2>
      <h3 class="date">{{movie.Year}}</h3>
      <h3 class="lang">{{movie.Language}}</h3>
      <p class="txt">{{movie.Plot}}</p>
      <button class="details">WATCH</button>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: ["movie"]
})
export default class Movie extends Vue {
  movieData: {} = {};
}
</script>

<style scoped>
@import url("./Movie.css");
</style>