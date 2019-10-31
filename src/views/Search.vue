<template>
  <div>
    <h1 class="logo">ALLOFLIX</h1>
    <SearchInput />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import SearchInput from "@/components/inputs/SearchInput.vue";

@Component({components: {
    SearchInput
  }})
export default class Search extends Vue{}
</script>

<style>
.logo {
  color: #f3f5f5;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 10rem;
  text-shadow: #101010 1px 0 10px;
}
</style>