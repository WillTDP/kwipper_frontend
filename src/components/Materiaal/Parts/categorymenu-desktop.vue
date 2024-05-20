<script setup>
const segments = [
  {
    title: "Keukenmateriaal",
    links: ["Kookpotten", "Servies", "Bestek"],
  },
  {
    title: "Legermateriaal",
    links: ["Legertenten", "Seniortenten", "Patrouilletenten"],
  },
  {
    title: "Kampmateriaal",
    links: ["Gasbakken", "Tenten", "Verlengtafels"],
  },
];
</script>

<template>
  <div class="category">
    <h2>Categorieën</h2>
    <div class="segment" v-for="segment in segments" :key="segment.title">
      <p class="title">{{ segment.title }}</p>
      <p class="link" v-for="link in segment.links" :key="link">{{ link }}</p>
    </div>
  </div>
</template>



<style scoped>
.category {
  width: 100%;
  max-width: 240px;
  height: 750px ;
  background-color: #f0f2f1;
  border-radius: 9px;
  padding: 16px;
  margin: 0.5%;
}

h2 {
  margin-bottom: 16px;
}

.segment {
  margin-bottom: 16px;
}

.title {
  font-weight: bold;
  margin-bottom: 8px;
}

.link {
  cursor: pointer;
  margin: 4px 0;
}
</style>
