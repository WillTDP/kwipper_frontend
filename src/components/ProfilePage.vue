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
            <div class="overlap-folder">
              <div class="overlap-group">
                <img class="badge-jeugdbeweging" src="https://c.animaapp.com/rqXPDOkF/img/badge-jeugdbeweging-1.svg" />
                <StarRating class="starrating"/>
              </div>
            </div>
            <div class="info">
              <div class="user_info mail">
                <img class="email-icon" src="https://c.animaapp.com/rqXPDOkF/img/group-423@2x.png" />
                <p>{{ user.data.email }}</p>
              </div>
              <div class="user_info map">
                <img class="map-pin" src="https://c.animaapp.com/rqXPDOkF/img/map-pin.svg" />
                <p>{{ user.data.gemeente }}</p>
              </div>
            </div>
        </div>
        <div class="filter_block">
          <p class="title">Verfijn je resultaten</p>
          <div class="filters">
            <div class="Prijs">
              <p>Prijs</p>
            </div>
            <div class="Conditie">
              <p>Conditie</p>
            </div>
          </div>
          <div class="group-7">
            <p>Categoriën</p>
            <p class="smol_text">(die {{user.data.jb_name}} gebruikt)</p>
          </div>
          <div class="tags">
            <div class="tag">
              <div class="img-wrapper"><img class="vector-7" src="https://c.animaapp.com/rqXPDOkF/img/vector-11.svg" /></div>
              <p>Tenten</p>
            </div>
            <div class="tag">
              <div class="img-wrapper"><img class="vector-7" src="https://c.animaapp.com/rqXPDOkF/img/vector-11.svg" /></div>
              <p>Gasvuren</p>
            </div>
          </div>
        </div>
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
  flex-direction: column;
  height: 100%;
  margin: 50px;
  gap: 24px;
}

.particulier-profiel .overlap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f0f2f1;
  border-radius: 12px;
  gap: 30px;
  padding: 15px;
  width: 306px;
  height: 280px;
}

.overlap-folder {
  display: flex;
  justify-content: center;
  align-items: center;
}

.particulier-profiel .overlap-group {
  width: 183px;
  height: 183px;
  background-image: url(https://c.animaapp.com/rqXPDOkF/img/rectangle-260@2x.png);
  background-size: cover;
  background-position: 50% 50%;
}

.particulier-profiel .badge-jeugdbeweging {
  position: relative;
  top: 128px;
  left: 128px;
  width: 55px;
  height: 55px;
}

.particulier-profiel .starrating {
  position: relative;
  top: 95px;
  left: 10px;
  width: 80px;
  height: 15px;
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

.particulier-profiel .email-icon {
  width: 17px;
  height: 19px;
}

.particulier-profiel .filter_block {
  width: 306px;
  max-width: 306px;
  height: 280px;
  background-color: #f0f2f1;
  border-radius: 12px;
  padding: 15px;
}

.particulier-profiel .title {
  font-family: "Museo Sans", Helvetica;
  font-weight: 900;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.particulier-profiel .group-7 {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10px;
}

.particulier-profiel .smol_text {
  display: flex;
  font-family: "Museo Sans", Helvetica;
  font-weight: 300;
  font-size: 10px;
  flex-wrap: nowrap;
  width: 100%;
  white-space: nowrap; /* Add this line */
}

.filters {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.particulier-profiel .tags {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}

.tag > * {
  margin: 0;
  padding: 0;
}

.particulier-profiel .tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0;
}

.particulier-profiel .img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background-color: #2b5740;
  border-radius: 2px;
}

.particulier-profiel .vector-7 {
  position: relative;
  width: 8px;
  height: 9px;
  top: 0px;
  left: 0px;
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