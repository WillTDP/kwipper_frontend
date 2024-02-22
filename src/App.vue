<script setup>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import landingspage from './components/landingspage.vue';
</script>

<template>
  <div id="app">
    <Header />
    <landingspage />
    <Footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
