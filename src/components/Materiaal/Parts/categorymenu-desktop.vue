<script setup>
import { ref, defineEmits } from 'vue';

const selectedCategory = ref("");
const emit = defineEmits(['filter']);

const filter = (category) => {
  selectedCategory.value = category;
  emit('filter', category);
};
</script>


<template>
  <div class="category">
    <h3>Categorieën</h3>
    <div class="segment">
      <p class="title">Keukenmateriaal</p>
      <p :class="{'link': true, 'selected': selectedCategory === 'Kookpotten'}" 
        @click="selectedCategory !== 'Kookpotten' && filter('Kookpotten')">
        Kookpotten
        <span v-if="selectedCategory === 'Kookpotten'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
      <p :class="{'link': true, 'selected': selectedCategory === 'Servies'}" 
        @click="selectedCategory !== 'Servies' && filter('Servies')">
        Servies
        <span v-if="selectedCategory === 'Servies'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
      <p :class="{'link': true, 'selected': selectedCategory === 'Bestek'}" 
        @click="selectedCategory !== 'Bestek' && filter('Bestek')">
        Bestek
        <span v-if="selectedCategory === 'Bestek'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
    </div>
    <div class="segment">
      <p class="title">Legermateriaal</p>
      <p :class="{'link': true, 'selected': selectedCategory === 'Legertenten'}" 
        @click="selectedCategory !== 'Legertenten' && filter('Legertenten')">
        Legertenten
        <span v-if="selectedCategory === 'Legertenten'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
      <p :class="{'link': true, 'selected': selectedCategory === 'seniorentent'}" 
        @click="selectedCategory !== 'seniorentent' && filter('seniorentent')">
        Seniortenten
        <span v-if="selectedCategory === 'seniorentent'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
      <p :class="{'link': true, 'selected': selectedCategory === 'Patrouilletenten'}" 
        @click="selectedCategory !== 'Patrouilletenten' && filter('Patrouilletenten')">
        Patrouilletenten
        <span v-if="selectedCategory === 'Patrouilletenten'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
      </div>
      <div class="segment">
        <p class="title">Kampmateriaal</p>
        <p :class="{'link': true, 'selected': selectedCategory === 'gasbakken'}" 
          @click="selectedCategory !== 'gasbakken' && filter('gasbakken')">
          Gasbakken en flessen
          <span v-if="selectedCategory === 'gasbakken'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
        </p>
        <p :class="{'link': true, 'selected': selectedCategory === 'Tenten'}" 
          @click="selectedCategory !== 'Tenten' && filter('Tenten')">
          Tenten
          <span v-if="selectedCategory === 'Tenten'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
        </p>
        <p :class="{'link': true, 'selected': selectedCategory === 'zeilen'}" 
          @click="selectedCategory !== 'zeilen' && filter('zeilen')">
          Zeilen
          <span v-if="selectedCategory === 'zeilen'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
        </p>
        </div>
        <div class="segment">
          <p class="title">Tafels en Banken</p>
          <p :class="{'link': true, 'selected': selectedCategory === 'uitklaptafel'}" 
            @click="selectedCategory !== 'uitklaptafel' && filter('uitklaptafel')">
            Uitklaptafels
            <span v-if="selectedCategory === 'uitklaptafel'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
          <p :class="{'link': true, 'selected': selectedCategory === 'uitklapbanken'}" 
            @click="selectedCategory !== 'uitklapbanken' && filter('uitklapbanken')">
            Uitklapbanken en stoelen
            <span v-if="selectedCategory === 'uitklapbanken'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
          <p :class="{'link': true, 'selected': selectedCategory === 'slaapmateriaal'}" 
            @click="selectedCategory !== 'slaapmateriaal' && filter('slaapmateriaal')">
            Slaapmateriaal
            <span v-if="selectedCategory === 'slaapmateriaal'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
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
