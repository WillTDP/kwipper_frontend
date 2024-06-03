<script setup>
import { ref, defineEmits } from 'vue';

let selectedPriceValue = ref(null);
let selectedConditionValue = ref(null);
let selectedNameValue = ref(null);

const emit = defineEmits(['filterByCondition', 'filterByPrice', 'filterByName']);

const handleFilterButtonClick = () => {
  console.log('Filter button is pressed');
  emit('filterByPrice', selectedPriceValue.value);
  emit('filterByCondition', selectedConditionValue.value);
  emit('filterByName', selectedNameValue.value);
};
</script>

<template>
  <h1 class="header-title">Ik ben op zoek naar...</h1>
  <div class="search-container">
    <div class="search-group">
      <div class="search-options">
        <div class="option-label">Zoeken</div>
        <div class="option-label">Prijs</div>
        <div class="option-label">Huren van..</div>
        <div class="option-label">Huren tot..</div>
        <div class="option-label">Conditie</div>
        <div class="option-label">Locatie</div>
        <div class="option-label">Sorteren op</div>
        <div class="option-label">Sorteren</div>
        
        <div class="input-wrapper">
          <input type="search" class="input" placeholder="Naar wat ben je op zoek?" v-model="selectedNameValue">
        </div>
        
        
        <div class="input-wrapper price">
          <select class="input-limited" v-model="selectedPriceValue">
            <option value="" disabled selected>Sorteer op prijs</option>
            <option value="">Reset</option>
            <option value="0-5">€0-€5</option>
            <option value="5-10">€5-€10</option>
            <option value="10-20">€10-€20</option>
            <option value="20-30">€20-€30</option>
            <option value="30-40">€30-€40</option>
            <option value="40-50">€40-€50</option>
            <option value="50-100">€50-€100</option>
            <option value="100-200">€100-€200</option>
          </select>
        </div>
        
        <div class="input-wrapper">
          <input type="date" class="input">  
        </div>
        
        <div class="input-wrapper">
          <input type="date" class="input" placeholder="">
        </div>
        
        <div class="input-wrapper">
          <select class="input limited" v-model="selectedConditionValue">
            <option value="" disabled selected>Sorteer op</option>
            <option value="">Reset</option>
            <option value="3">Matig</option>
            <option value="4">Goed</option>
            <option value="5">Perfect</option>
          </select>
        </div>

        <div class="input-wrapper">
          <input type="text" class="input-limited" placeholder="">
          <img class="icon" src="https://c.animaapp.com/w3XHq8Z1/img/vector-2.svg" />
        </div>
        
        <div class="input-wrapper">
          <input type="text" class="input-limited" placeholder="">
          <img class="icon" src="https://c.animaapp.com/w3XHq8Z1/img/vector-5.svg" />
        </div>

        <div class="input-wrapper">
          <button  @click="handleFilterButtonClick">Filter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-title {
  font-size: 48px;
  font-family: "Bitter", serif;
  font-weight: 700;
  color: #2b5740;
  margin-left: 18%;
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1285px;
  height: 179px;
  background-color: #f0f2f1;
  border-radius: 9px;
  position: relative;
}

.search-options {
  display: flex;
  justify-content: center;
  align-items: center;
}

.option-label {
  position: absolute;
  display: flex;
  font-family: "Inter", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 12px;
  line-height: normal;
}

.option-label:nth-child(1) { top: 38px; left: 222px; }
.option-label:nth-child(2) { top: 100px; left: 222px; }
.option-label:nth-child(3) { top: 100px; left: 352px; }
.option-label:nth-child(4) { top: 100px; left: 485px; }
.option-label:nth-child(5) { top: 100px; left: 612px; }
.option-label:nth-child(6) { top: 39px; left: 743px; }
.option-label:nth-child(7) { top: 100px; left: 743px; }
.option-label:nth-child(8) { top: 100px; left: 872px; }

.input-wrapper {
  position: absolute;
  background-color: #d9d9d9;
  border-radius: 6px;
  height: 23px;
}

.input-wrapper:nth-child(9) { top: 54px; left: 222px; width: 512px; }
.input-wrapper:nth-child(10) { top: 115px; left: 222px; width: 122px; }
.input-wrapper:nth-child(11) { top: 115px; left: 352px; width: 122px; }
.input-wrapper:nth-child(12) { top: 115px; left: 482px; width: 122px; }
.input-wrapper:nth-child(13) { top: 115px; left: 612px; width: 122px; }
.input-wrapper:nth-child(14) { top: 115px; left: 742px; width: 122px; }
.input-wrapper:nth-child(15) { top: 54px; left: 742px; width: 252px; }
.input-wrapper:nth-child(16) { top: 115px; left: 872px; width: 122px; }

.input {
  background: none;
  border: none;
  outline: none;
  flex-grow: 1;
  width: 100%;
  color: black;
}

.input-limited {
  background: none;
  border: none;
  outline: none;
  flex-grow: 1;
  width: 100%;
  color: black;
}

.icon {
  position: absolute;
  top: 6px;
  left: calc(100% - 24px);
  width: 14px;
  height: 13px;
}

.icon:nth-of-type(3) { top: 4px; left: calc(100% - 23px); width: 11px; height: 12px; }
.icon:nth-of-type(4) { top: 6px; left: calc(100% - 34px); }

button {
  position: absolute;
  background-color: #1C98D6;
  color: white;
  border: none;
  border-radius: 9px;
  width: 100%;
  padding: 0.5em 1em;
  font-size: 10px;
  cursor: pointer;
}

@media screen and (max-width: 1300px){
  .search-group {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 179px;
    background-color: #f0f2f1;
    border-radius: 9px;
    position: relative;
  }

  .search-options {
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
</style>
