<script>
    import { ref, defineEmits } from 'vue';
    import {  categorie } from '../../fake-data.js'
    const categorieRef = ref(categorie);
    
</script>
<template>
    <h1 class="head-title">Ik ben op zoek naar...</h1>
  <div class="box">
      <div class="group">
        <div class="overlap-group">
          <div class="text-wrapper">Zoeken</div>
          <div class="div">Soort contract</div>
          <div class="text-wrapper-2">Prijs</div>
          <div class="text-wrapper-3">Huren van..</div>
          <div class="text-wrapper-4">Huren tot..</div>
          <div class="text-wrapper-5">Locatie</div>
          <div class="text-wrapper-6">Conditie</div>
          <div class="text-wrapper-7">Sorteren op</div>
          <div class="zoekbalk">
            <input type="text" class="search-item" name="searchbar" placeholder="Naar wat ben je op zoek?">
          </div>
          
          <div class="contractbalk">
            <input type="text" class="search-item" name="searchbar" placeholder="">
          </div>
          <div class="prijsbalk">
            <input type="text" class="search-item-limited" name="searchbar" placeholder="">
            <img class="vector" src="https://c.animaapp.com/w3XHq8Z1/img/vector-2.svg" />
          </div>
          <div class="start-datum">
            <input type="date" class="search-item"  name="searchbar">  
            
          </div>
          <div class="eind-datum">
            <input type="date" class="search-item" name="searchbar" placeholder="">
            
          </div>
          <div class="conditiebalk">
            <input type="text" class="search-item-limited" name="searchbar" placeholder="">
            <img class="vector-2" src="https://c.animaapp.com/w3XHq8Z1/img/vector-2.svg" />
          </div>
          <div class="locatiebalk">
            <input type="text" class="search-item-limited" name="searchbar" placeholder="">
            <img class="vector-3" src="https://c.animaapp.com/w3XHq8Z1/img/vector-5.svg" />
          </div>
          <div class="sorteerbalk">
            <input type="text" class="search-item-limited" name="searchbar" placeholder="">
            <img class="vector-4" src="https://c.animaapp.com/w3XHq8Z1/img/vector-2.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="category">
        <li v-for="item in categorieRef">
            {{ item.name }} {{ item.items }}
        </li>
    </div>
</template>
<style scoped>
    .head-title{
    font-size: 48px;
    font-family: "Bitter-ExtraBold", Helvetica;
    color: #2b5740;
    margin-left: 18%;
  }
  .box {
    width:100%;
    display: flex;
    justify-content: center;
    margin-top: 2%;
    margin-bottom: 5%;
  }
  .overlap-group {
    position: relative;
    width: 1203px;
    height: 179px;
    background-color: #f0f2f1;
    border-radius: 9px;
  }
   .text-wrapper {
    position: absolute;
    top: 38px;
    left: 222px;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 12px;
    letter-spacing: 0;
    line-height: normal;
  }
   .search-item {
    background: none;
    border: none;
    outline: none;
    flex-grow: 1;
    width: 100%;
    color: black;
    font-family: "Inter", Helvetica;
  }
   .search-item-limited {
    background: none;
    border: none;
    outline: none;
    flex-grow: 1;
    width: 70%;
    color: black;
  }  
  .div {
    position: absolute;
    top: 100px;
    left: 222px;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 12px;
    letter-spacing: 0;
    line-height: normal;
  }
   .text-wrapper-2 {
    position: absolute;
    top: 100px;
    left: 352px;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 12px;
    letter-spacing: 0;
    line-height: normal;
  }
   .text-wrapper-3 {
    left: 485px;
    position: absolute;
    top: 100px;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 12px;
    letter-spacing: 0;
    line-height: normal;
  }
   .text-wrapper-4 {
    left: 612px;
    position: absolute;
    top: 100px;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 12px;
    letter-spacing: 0;
    line-height: normal;
  }
   .text-wrapper-5 {
    position: absolute;
    top: 39px;
    left: 743px;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 12px;
    letter-spacing: 0;
    line-height: normal;
  }
   .text-wrapper-6 {
    position: absolute;
    top: 100px;
    left: 743px;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 12px;
    letter-spacing: 0;
    line-height: normal;
  }
   .text-wrapper-7 {
    position: absolute;
    top: 100px;
    left: 872px;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 12px;
    letter-spacing: 0;
    line-height: normal;
  }
   .zoekbalk {
    width: 512px;
    top: 54px;
    position: absolute;
    height: 23px;
    left: 222px;
    background-color: #d9d9d9;
    border-radius: 6px;
  }
   .contractbalk {
    width: 122px;
    top: 115px;
    position: absolute;
    height: 23px;
    left: 222px;
    background-color: #d9d9d9;
    border-radius: 6px;
  }
   .prijsbalk {
    position: absolute;
    width: 122px;
    height: 23px;
    top: 115px;
    left: 352px;
    background-color: #d9d9d9;
    border-radius: 6px;
  }
   .vector {
    position: absolute;
    width: 14px;
    height: 13px;
    top: 6px;
    left: 97px;
  }
   .start-datum {
    position: absolute;
    width: 122px;
    height: 23px;
    top: 115px;
    left: 482px;
    background-color: #d9d9d9;
    border-radius: 6px;
  }
  
  .img {
    position: absolute;
    width: 13px;
    height: 14px;
    top: 4px;
    left: 100px;
  }
  .eind-datum {
    position: absolute;
    width: 122px;
    height: 23px;
    top: 115px;
    left: 612px;
    background-color: #d9d9d9;
    border-radius: 6px;
    
  }
   .conditiebalk {
    position: absolute;
    width: 122px;
    height: 23px;
    top: 115px;
    left: 742px;
    background-color: #d9d9d9;
    border-radius: 6px;
  }
   .vector-2 {
    position: absolute;
    width: 14px;
    height: 13px;
    top: 6px;
    left: 100px;
  }
   .locatiebalk {
    position: absolute;
    width: 252px;
    height: 23px;
    top: 54px;
    left: 742px;
    background-color: #d9d9d9;
    border-radius: 6px;
  }
   .vector-3 {
    position: absolute;
    width: 11px;
    height: 12px;
    top: 5px;
    left: 219px;
  }
   .sorteerbalk {
    position: absolute;
    width: 122px;
    height: 23px;
    top: 115px;
    left: 872px;
    background-color: #d9d9d9;
    border-radius: 6px;
  }
   .vector-4 {
    position: absolute;
    width: 14px;
    height: 13px;
    top: 6px;
    left: 88px;
  }
  
  .category {
    width: 187px;
    height: 646px;
    background-color: #f0f2f1;
    border-radius: 9px;
    float: left;
    margin-right: 2%;
  }
</style>
