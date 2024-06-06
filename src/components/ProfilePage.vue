<script setup>
import { reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import apiService from '../../apiService';
import StarRating from './Materiaal/Parts/StarRating.vue';

const store = useStore();

const userId = store.getters.userId;
const user = reactive({ data: null });

onMounted(async () => {
  if (userId) {
    const response = await apiService.getUserById(userId);
    user.data = response.data.data.user;
    console.log('User data:', user.data);
  }
});
</script>

<template>
  <div class="profile">
    <div class="particulier-profiel" v-if="user.data">
        <div class="overlap">
            <div class="overlap-group">
              <div class="rectangle"></div>
              <img class="badge-jeugdbeweging" src="https://c.animaapp.com/rqXPDOkF/img/badge-jeugdbeweging-1.svg" />
              <StarRating class="starrating"/>
            </div>
            <div class="info">
              <div class="user_info mail">
                <img class="group" src="https://c.animaapp.com/rqXPDOkF/img/group-423@2x.png" />
                <p>{{ user.data.email }}</p>
              </div>
              <div class="user_info map">
                <img class="map-pin" src="https://c.animaapp.com/rqXPDOkF/img/map-pin.svg" />
                <p>{{ user.data.gemeente }}</p>
              </div>
            </div>
        </div>

      <!----<div class="overlap-5">
          <div class="text-wrapper-20">Verfijn je resultaten</div>
          <div class="group-7">
            <div class="text-wrapper-21">Categoriën</div>
            <p class="text-wrapper-22">(die {{user.data.jb_name}} gebruikt)</p>
          </div>
          <div class="tags">
            <div class="text-wrapper-23">Tenten</div>
            <div class="text-wrapper-24">Gasvuren</div>
            <div class="img-wrapper"><img class="vector-7" src="https://c.animaapp.com/rqXPDOkF/img/vector-11.svg" /></div>
            <div class="overlap-6"><img class="vector-7" src="https://c.animaapp.com/rqXPDOkF/img/vector-11.svg" /></div>
          </div>
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
      </div>-->
    </div>
    
    <div class="product-container" v-if="user && user.data">
        <h1>{{ user.data.jb_name }}'s inventaris</h1>
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
                    <p>{{ user.data.jb_name }}</p>
                </div>
                
                <router-link v-bind:to="'/products/' + product.id">
                    <button class="button-details">Details</button>
                </router-link>
                
            </div>
        </div>
    </div>
  </div>
    
</template>

<style scoped>

.profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
}
.particulier-profiel {
  display: flex;
  height: 100%;
}

.particulier-profiel .overlap {
  display: flex;
  background-color: #f0f2f1;
  border-radius: 12px;
  margin: 50px;
  padding: 20px;
}

.particulier-profiel .overlap-group {
  width: 183px;
  height: 183px;
  background-image: url(https://c.animaapp.com/rqXPDOkF/img/rectangle-260@2x.png);
  background-size: cover;
  background-position: 50% 50%;
}

.particulier-profiel .rectangle {
  width: 183px;
  height: 183px;
  border-radius: 24px;
}

.particulier-profiel .badge-jeugdbeweging {
  width: 55px;
  height: 55px;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.user_info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.user_info > * {
  margin: 0;
  padding: 0;
}

.particulier-profiel .starrating {
  width: 80px;
  height: 15px;
}

.particulier-profiel .group {
  width: 17px;
  height: 19px;
}

.particulier-profiel .ovelap-5 {
  position: absolute;
  width: 306px;
  height: 280px;
  background-color: #f0f2f1;
  border-radius: 12px;
}

.particulier-profiel .text-wrapper-20 {
  font-family: "Museo Sans", Helvetica;
  font-weight: 900;
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
  display: flex;
  width: 100%;

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