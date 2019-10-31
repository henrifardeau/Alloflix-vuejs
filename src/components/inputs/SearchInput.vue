<template>
  <div>
    <div class="container">
      <input
        type="text"
        @keydown.enter="search()"
        @click="toggleSearch(true)"
        v-model="searchQuery"
        placeholder="Rechercher un film..."
      />
      <div class="search" @click="toggleSearch(false)"></div>
    </div>
    <p
      class="info-message"
      v-bind:class="{hidden:!searchVisible}"
    >Appuyez sur entrer pour rechercher</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Router from "vue-router";

@Component({})
export default class SearchInput extends Vue {
  searchVisible: boolean = false;
  searchQuery: string = "";

  toggleSearch(open: boolean): void {
    this.searchVisible = open;
  }

  search(): void {
    if (this.searchQuery.length > 0) {
      this.$router.push({ path: `/movies/${this.searchQuery}` });
    }
  }
}
</script>

<style scoped>
@import url("./SearchInput.css");
</style>