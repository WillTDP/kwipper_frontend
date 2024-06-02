<script setup>
  import {defineEmits } from 'vue';

  const emit = defineEmits();

  const filter = (brand) => {
        emit('filter', brand);
    };

</script>

<template>
    <div class="overlap-3"  @click="filter('quechua')">
        <img class="rectangle-2" src="https://c.animaapp.com/CwoIaQCm/img/rectangle-417.svg" />
        <img class="TRENDING" src="https://c.animaapp.com/CwoIaQCm/img/trending@2x.png" />
        <img class="quechua-producten" src="https://c.animaapp.com/CwoIaQCm/img/quechua-producten@2x.png" />
    </div>

</template>

<style scoped>

 .overlap-3 {
  margin: 1%;
  width: 100%;
  height: 355px;
  border-radius: 9px;
  background-image: url(https://c.animaapp.com/CwoIaQCm/img/rectangle-416.png);
  background-size: cover;
  position: relative;
  cursor: pointer;
}

 .rectangle-2 {
  
    position: absolute;
  width: 150px;
  height: 25px;
  top: 10px;
  left: 11px;
  
}

 .TRENDING {
    
  position: absolute;
  width: 82px;
  height: 12px;
  top: 16px;
  left: 45px;
  
}

 .quechua-producten {
  
    position: absolute;
  width: 335px;
  height: 36px;
  top: 291px;
  left: 13px;
  
}

</style>