<script setup>
import { RouterLink } from 'vue-router';
import Header from './components/header.vue';
import Footer from './components/footer.vue';

</script>

<template>
  <div id="app">
    <Header />
    <main class="content">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  overflow-x: hidden; /* prevent horizontal scrolling */
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the app takes full viewport height */
}

.content {
  flex: 1; /* Allow content to grow and take up available space */
  
  padding-bottom: 20px; /* Space between content and footer */
}

Header, Footer {
    position: relative; /* or absolute, depending on your layout */
    z-index: 2; /* ensure the header and footer are in front of the popup */
}

footer {
  margin-top: auto; /* Push the footer to the bottom */
  z-index: 2; /* Ensure the footer is on top */
}
</style>