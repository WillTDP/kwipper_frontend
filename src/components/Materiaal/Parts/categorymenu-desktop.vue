<script setup>
    import { defineEmits } from 'vue';

    const emit = defineEmits();

    const filter = (category) => {
        emit('filter', category);
    };
</script>

<template>
  <div class="category">
    <h2>Categorieën</h2>
    <div class="segment">
                <p class="title">Keukenmateriaal</p>
                <p class="link" @click="filter('kookpotten')">Kookpotten</p>
                <p class="link" @click="filter('servies')">Servies</p>
                <p class="link" @click="filter('bestek')">Bestek</p>
            </div>
            <div class="segment">
                <p class="title">Legermateriaal</p>
                <p class="link" @click="filter('legertenten')">Legertenten</p>
                <p class="link" @click="filter('seniorentent')">Seniortenten</p>
                <p class="link" @click="filter('patrouilletenten')">Patrouilletenten</p>
            </div>
            <div class="segment">
                <p class="title">Kampmateriaal</p>
                <p class="link" @click="filter('gasbakken')" >Gasbakken en flessen</p>
                <p class="link" @click="filter('tent')">Tenten</p>
                <p class="link">Zeilen</p>
            </div>
            <div class="segment">
                <p class="title">Tafels en Banken</p>
                <p class="link">Uitklaptafels</p>
                <p class="link">Uitklapbanken en stoelen</p>
                <p class="link">Slaapmateriaal</p>
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
