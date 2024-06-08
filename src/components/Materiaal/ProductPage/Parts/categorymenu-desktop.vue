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
          <p :class="{'link': true, 'selected': selectedCategory === 'tafel'}" 
            @click="selectedCategory !== 'tafel' && filter('tafel')">
            Gewone Tafel
            <span v-if="selectedCategory === 'slaapmateriaal'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
        </div>

        <div class="segment">
          <p class="title">Werkmateriaal</p>
          <p :class="{'link': true, 'selected': selectedCategory === 'gereedschap'}" 
            @click="selectedCategory !== 'gereedschap' && filter('gereedschap')">
            Gereedschap
            <span v-if="selectedCategory === 'gereedschap'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
          <p :class="{'link': true, 'selected': selectedCategory === 'hamer'}" 
            @click="selectedCategory !== 'hamer' && filter('hamer')">
            Hamers
            <span v-if="selectedCategory === 'hamer'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
          <p :class="{'link': true, 'selected': selectedCategory === 'houweel'}" 
            @click="selectedCategory !== 'houweel' && filter('houweel')">
            Houweel
            <span v-if="selectedCategory === 'houweel'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
        </div>

    <div class="segment">
          <p class="title">Outdoor activiteiten</p>
          <p :class="{'link': true, 'selected': selectedCategory === 'kajak'}" 
            @click="selectedCategory !== 'kajak' && filter('kajak')">
            Kajak
            <span v-if="selectedCategory === 'kajak'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
          <p :class="{'link': true, 'selected': selectedCategory === 'kano'}" 
            @click="selectedCategory !== 'kano' && filter('kano')">
            Kano
            <span v-if="selectedCategory === 'kano'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
          <p :class="{'link': true, 'selected': selectedCategory === 'fiets'}" 
            @click="selectedCategory !== 'fiets' && filter('fiets')">
            Fiets
            <span v-if="selectedCategory === 'fiets'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
          <p :class="{'link': true, 'selected': selectedCategory === 'klimuitrusting'}" 
            @click="selectedCategory !== 'klimuitrusting' && filter('klimuitrusting')">
            Klimuitrusting
            <span v-if="selectedCategory === 'klimuitrusting'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
          <p :class="{'link': true, 'selected': selectedCategory === 'Kampvuurbenodigdheden'}" 
            @click="selectedCategory !== 'Kampvuurbenodigdheden' && filter('Kampvuurbenodigdheden')">
            Kampvuurbenodigdheden
            <span v-if="selectedCategory === 'Kampvuurbenodigdheden'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
        </div>

        <div class="segment">
          <p class="title">Feest- én evenementuitrusting</p>
          <p :class="{'link': true, 'selected': selectedCategory === 'partytent'}" 
            @click="selectedCategory !== 'partytent' && filter('partytent')">
            Partytenten
            <span v-if="selectedCategory === 'partytent'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
          <p :class="{'link': true, 'selected': selectedCategory === 'feestverlichtingmer'}" 
            @click="selectedCategory !== 'feestverlichting' && filter('feestverlichting')">
            Feestverlichting
            <span v-if="selectedCategory === 'feestverlichting'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
          <p :class="{'link': true, 'selected': selectedCategory === 'muziekinstallatie'}" 
            @click="selectedCategory !== 'muziekinstallatie' && filter('muziekinstallatie')">
            Muziekinstallatie
            <span v-if="selectedCategory === 'muziekinstallatie'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
          <p :class="{'link': true, 'selected': selectedCategory === 'springkastelen'}" 
            @click="selectedCategory !== 'springkastelen' && filter('springkastelen')">
            Springkastelen en andere
            <span v-if="selectedCategory === 'springkastelen'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
        </div>

        <div class="segment">
          <p class="title">Elektronica</p>
          <p :class="{'link': true, 'selected': selectedCategory === 'projector'}" 
            @click="selectedCategory !== 'projector' && filter('projector')">
            Draagbare projectoren
            <span v-if="selectedCategory === 'projector'" @click.stop="selectedCategory = null; emit('filter', null)" class="x">x</span>
          </p>
        </div>
  </div>
</template>



<style scoped>
.category {
  width: 100%;
  max-width: 240px;
  height: 100%; ;
  background-color: #f0f2f1;
  border-radius: 9px;
  padding: 16px;
  margin: 0.5%;
}

.category h3{
  margin-top: -0.1em;
}

.segment p:hover{
  font-weight: bold;
}

h2 {
  margin-bottom: 16px;
}

.segment {
  margin-bottom: 16px;
}

.title {
  font-weight: 700;
  font-family: 'Museo Sans', sans-serif;
  margin-bottom: 8px;
}

.link {
  cursor: pointer;
  margin: 4px 0;
}
</style>
