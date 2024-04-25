<script setup>
import { RouterLink } from 'vue-router';
import Header from './components/header.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  overflow-x: hidden; /* prevent horizontal scrolling */
}
Header, Footer {
    position: relative; /* or absolute, depending on your layout */
    z-index: 2; /* ensure the header and footer are in front of the popup */
}
</style>