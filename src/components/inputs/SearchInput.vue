<template>
  <div>
    <div class="container">
      <input
        type="text"
        @keydown.enter="search()"
        @click="openSearch()"
        v-model="searchQuery"
        placeholder="Rechercher un film..."
      />
      <div class="search" @click="closeSearch()"></div>
    </div>
    <p
      class="info-message"
      v-bind:class="{hidden:!searchVisible}"
    >Appuyez sur entrer pour rechercher</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Router from "vue-router";

export default Vue.extend({
  name: "SearchInput",
  data(): { searchVisible: boolean; searchQuery: string } {
    return {
      searchVisible: false,
      searchQuery: ""
    };
  },
  methods: {
    openSearch(): void {
      this.searchVisible = true;
    },
    closeSearch(): void {
      this.searchVisible = false;
    },
    search(): void {
      if (this.searchQuery.length > 0) {
        this.$router.push({ path: `/movies/${this.searchQuery}` });
      }
    }
  }
});
</script>

<style scoped>
@import url("./SearchInput.css");

.info-message {
  position: absolute;
  bottom: 250px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: bold;
  transition: all 0.5s;
}

.hidden {
  opacity: 0;
}
</style>