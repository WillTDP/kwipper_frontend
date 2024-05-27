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
    <h2>Categorieën</h2>
    <div class="segment">
      <p class="title">Keukenmateriaal</p>
      <p :class="{'link': true, 'selected': selectedCategory === 'kookpotten'}" 
        @click="selectedCategory !== 'kookpotten' && filter('kookpotten')">
        Kookpotten
        <span v-if="selectedCategory === 'kookpotten'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
      <p :class="{'link': true, 'selected': selectedCategory === 'servies'}" 
        @click="selectedCategory !== 'servies' && filter('servies')">
        Servies
        <span v-if="selectedCategory === 'servies'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
      <p :class="{'link': true, 'selected': selectedCategory === 'bestek'}" 
        @click="selectedCategory !== 'bestek' && filter('bestek')">
        Bestek
        <span v-if="selectedCategory === 'bestek'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
    </div>
    <div class="segment">
      <p class="title">Legermateriaal</p>
      <p :class="{'link': true, 'selected': selectedCategory === 'legertenten'}" 
        @click="selectedCategory !== 'legertenten' && filter('legertenten')">
        Legertenten
        <span v-if="selectedCategory === 'legertenten'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
      <p :class="{'link': true, 'selected': selectedCategory === 'seniorentent'}" 
        @click="selectedCategory !== 'seniorentent' && filter('seniorentent')">
        Seniortenten
        <span v-if="selectedCategory === 'seniorentent'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
      <p :class="{'link': true, 'selected': selectedCategory === 'patrouilletenten'}" 
        @click="selectedCategory !== 'patrouilletenten' && filter('patrouilletenten')">
        Patrouilletenten
        <span v-if="selectedCategory === 'patrouilletenten'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
      </p>
      </div>
      <div class="segment">
        <p class="title">Kampmateriaal</p>
        <p :class="{'link': true, 'selected': selectedCategory === 'gasbakken'}" 
          @click="selectedCategory !== 'gasbakken' && filter('gasbakken')">
          Gasbakken en flessen
          <span v-if="selectedCategory === 'gasbakken'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
        </p>
        <p :class="{'link': true, 'selected': selectedCategory === 'tent'}" 
          @click="selectedCategory !== 'tent' && filter('tent')">
          Tenten
          <span v-if="selectedCategory === 'tent'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
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
