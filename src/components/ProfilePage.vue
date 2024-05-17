<script setup>
    import { ref, computed, onMounted } from 'vue';
    import {  products, cartItems } from '../fake-data.js';
    import apiService from '../../apiService';

    const user = ref(null);

    const getUserById = async () => {
      try {
        const response = await apiService.getUserById();
        user.value = '0';
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

  onMounted(() => {
    getUserById();
  });

</script>

<template>
    <div class="particulier-profiel">
        <div class="overlap">
            <div class="overlap-group">
            <div class="rectangle"></div>
            <img class="badge-jeugdbeweging" src="https://c.animaapp.com/rqXPDOkF/img/badge-jeugdbeweging-1.svg" />
            <img class="star" src="https://c.animaapp.com/rqXPDOkF/img/star-4.svg" />
            <img class="img" src="https://c.animaapp.com/rqXPDOkF/img/star-4.svg" />
            <img class="star-2" src="https://c.animaapp.com/rqXPDOkF/img/star-4.svg" />
            <img class="star-3" src="https://c.animaapp.com/rqXPDOkF/img/star-4.svg" />
            <img class="star-4" src="https://c.animaapp.com/rqXPDOkF/img/star-5.svg" />
            </div>
            <div class="text-wrapper">{{ user.email }}</div>
            <div class="div">{{ user.gemeente }}</div>
            <img class="group" src="https://c.animaapp.com/rqXPDOkF/img/group-423@2x.png" />
            <img class="map-pin" src="https://c.animaapp.com/rqXPDOkF/img/map-pin.svg" />
        </div>

        <div class="overlap-5">
        <div class="text-wrapper-20">Verfijn je resultaten</div>
        <div class="group-7">
          <div class="text-wrapper-21">Categoriën</div>
          <p class="text-wrapper-22">(die {{user.jb_name}} gebruikt)</p>
        </div>
        <div class="text-wrapper-23">Tenten</div>
        <div class="text-wrapper-24">Gasvuren</div>
        <div class="img-wrapper"><img class="vector-7" src="https://c.animaapp.com/rqXPDOkF/img/vector-11.svg" /></div>
        <div class="overlap-6"><img class="vector-7" src="https://c.animaapp.com/rqXPDOkF/img/vector-11.svg" /></div>
        <div class="text-wrapper-25">Prijs</div>
        <div class="group-8">
          <div class="text-wrapper-21">Conditie</div>
          <img class="group-9" src="https://c.animaapp.com/rqXPDOkF/img/group-410@2x.png" />
        </div>
        <div class="group-10">
          <div class="group-11">
            <div class="text-wrapper-8">Van</div>
            <img class="group-9" src="https://c.animaapp.com/rqXPDOkF/img/group-410@2x.png" />
          </div>
          <div class="group-12">
            <div class="text-wrapper-8">Tot</div>
            <img class="group-13" src="https://c.animaapp.com/rqXPDOkF/img/group-410@2x.png" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="product-container">
        <h1>{{ user.jb_name }}'s inventaris</h1>
        <div class="grid-wrap">
            <div 
            v-for="product in cartItems"
            class="product-item"
            v-bind:key="product.id" 
            >
                <img v-bind:src="product.imageUrl" class="product-image">    
                <div class="item-info">
                    <h3 class="product-name">{{ product.name }}</h3>
                    <p class="product-price">€ {{ product.item.price }}</p>
                    <p class="product-description">{{ product.description }}</p>
                </div>
                
                <div class="product-locatie">
                    <img class="vector-4" src="https://c.animaapp.com/rqXPDOkF/img/vector-13.svg" />
                    <p>{{ user.jb_name }}</p>
                </div>
                
                <router-link v-bind:to="'/products/' + product.id">
                    <button class="button-details">Details</button>
                </router-link>
                
            </div>
        </div>
    </div>
    
    
</template>

<style scoped>
.particulier-profiel {
  position: relative;
  width: 20%;
  height: 100%;
  float: left;
}

.particulier-profiel .overlap {
  position: absolute;
  width: 306px;
  height: 297px;
  top: 84px;
  left: 134px;
  background-color: #f0f2f1;
  border-radius: 12px;
}

.particulier-profiel .overlap-group {
  position: absolute;
  width: 183px;
  height: 183px;
  top: 34px;
  left: 73px;
  background-image: url(https://c.animaapp.com/rqXPDOkF/img/rectangle-260@2x.png);
  background-size: cover;
  background-position: 50% 50%;
}

.particulier-profiel .rectangle {
  position: absolute;
  width: 183px;
  height: 183px;
  top: 0;
  left: 0;
  border-radius: 24px;
}

.particulier-profiel .badge-jeugdbeweging {
  position: absolute;
  width: 55px;
  height: 55px;
  top: 128px;
  left: 128px;
}

.particulier-profiel .star {
  left: 19px;
  position: absolute;
  width: 16px;
  height: 15px;
  top: 159px;
}

.particulier-profiel .img {
  left: 38px;
  position: absolute;
  width: 16px;
  height: 15px;
  top: 159px;
}

.particulier-profiel .star-2 {
  left: 57px;
  position: absolute;
  width: 16px;
  height: 15px;
  top: 159px;
}

.particulier-profiel .star-3 {
  left: 76px;
  position: absolute;
  width: 16px;
  height: 15px;
  top: 159px;
}

.particulier-profiel .star-4 {
  left: 95px;
  position: absolute;
  width: 16px;
  height: 15px;
  top: 159px;
}

.particulier-profiel .text-wrapper {
  position: absolute;
  top: 241px;
  left: 45px;
  font-family: "Museo Sans-700", Helvetica;
  font-weight: 400;
  color: #090d0b;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.particulier-profiel .div {
  position: absolute;
  top: 266px;
  left: 44px;
  font-family: "Museo Sans-700", Helvetica;
  font-weight: 400;
  color: #090d0b;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.particulier-profiel .group {
  position: absolute;
  width: 17px;
  height: 19px;
  top: 241px;
  left: 20px;
}

.particulier-profiel .map-pin {
  position: absolute;
  width: 15px;
  height: 15px;
  top: 269px;
  left: 19px;
}

.particulier-profiel .overlap-5 {
  position: absolute;
  width: 306px;
  height: 280px;
  top: 405px;
  left: 134px;
  background-color: #f0f2f1;
  border-radius: 12px;
}

.particulier-profiel .text-wrapper-20 {
  position: absolute;
  top: 14px;
  left: 19px;
  font-family: "Museo Sans-900", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0;
  line-height: normal;
}

.particulier-profiel .group-7 {
  position: absolute;
  width: 274px;
  height: 19px;
  top: 197px;
  left: 19px;
}

.particulier-profiel .text-wrapper-21 {
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Museo Sans-700", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.particulier-profiel .text-wrapper-22 {
  position: absolute;
  top: 6px;
  left: 95px;
  font-family: "Museo Sans-300", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 10px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.particulier-profiel .text-wrapper-23 {
  position: absolute;
  top: 226px;
  left: 43px;
  font-family: "Museo Sans-500", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.particulier-profiel .text-wrapper-24 {
  position: absolute;
  top: 250px;
  left: 43px;
  font-family: "Museo Sans-500", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.particulier-profiel .img-wrapper {
  position: absolute;
  width: 14px;
  height: 14px;
  top: 228px;
  left: 19px;
  background-color: #2b5740;
  border-radius: 2px;
}

.particulier-profiel .vector-7 {
  position: absolute;
  width: 8px;
  height: 9px;
  top: 2px;
  left: 3px;
}

.particulier-profiel .overlap-6 {
  position: absolute;
  width: 14px;
  height: 14px;
  top: 252px;
  left: 19px;
  background-color: #2b5740;
  border-radius: 2px;
}

.particulier-profiel .text-wrapper-25 {
  position: absolute;
  top: 54px;
  left: 19px;
  font-family: "Museo Sans-700", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.particulier-profiel .group-8 {
  position: absolute;
  width: 125px;
  height: 45px;
  top: 141px;
  left: 19px;
}

.particulier-profiel .group-9 {
  position: absolute;
  width: 123px;
  height: 25px;
  top: 20px;
  left: 0;
}

.particulier-profiel .group-10 {
  position: absolute;
  width: 276px;
  height: 45px;
  top: 85px;
  left: 19px;
}

.particulier-profiel .group-11 {
  position: absolute;
  width: 125px;
  height: 45px;
  top: 0;
  left: 0;
}

.particulier-profiel .group-12 {
  position: absolute;
  width: 126px;
  height: 45px;
  top: 0;
  left: 152px;
}

.particulier-profiel .group-13 {
  position: absolute;
  width: 123px;
  height: 25px;
  top: 20px;
  left: 1px;
}

.product-container {
    position: relative;
    width: 70%;
    height: 100%;
    float: right;
    margin-top: 50px;
    margin-bottom: 10%;
}

.product-container h1 {
    font-size: 48px;
    font-family: "Bitter-ExtraBold", Helvetica;
}

.grid-wrap {
    
    
    justify-content: space-between;
    margin-top: 16px;
    margin-right: 10%;
    
}

.product-image{
    border-radius: 12px;
    margin: 50px;
    float: left;
    height: 183px;
    width: 183px;
}

.product-item{
    background-color: #f0f2f1;
    border-radius: 12px;
}

.item-info{
    
    position: relative;
    width: 60%;
}



.button-details{
    background-color: #1C98D6;
    color: #f0f2f1;
}

.product-name {
    margin-bottom: 0;
    color: #2B5740;
    font-family: "Amazing Slab Trial-Medium", Helvetica;
    font-weight: 500;
    font-size: 32px;
}



</style>