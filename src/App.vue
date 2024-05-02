<script setup>
import { RouterLink } from 'vue-router';
import Header from './components/header.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app {
  overflow-x: hidden; /* prevent horizontal scrolling */
}
</style>