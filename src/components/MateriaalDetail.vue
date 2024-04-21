<script setup>
import { reactive, onMounted, computed, ref } from 'vue';
import { products } from '../fake-data.js';
import { useRoute } from 'vue-router';
import StarRating from './StarRating.vue';

const route = useRoute();
let product = reactive({});

onMounted(() => {
  const foundProduct = products.find((p) => p.id === route.params.id);
  if (foundProduct) {
    for (let key in foundProduct) {
      product[key] = foundProduct[key];
    }
  }
});

const getStateText = (product) => {
  if (product && product.item && product.item.staat) {
    switch (product.item.staat) {
      case '1':
        return 'Beschadigd';
      case '2':
        return 'Defect';
      case '3':
        return 'Matig';
      case '4':
        return 'Goed';
      case '5':
        return 'Perfect';
      default:
        return 'Onbekend';
    }
  } else {
    return '';
  }
};

const stateText = computed(() => getStateText(product));


</script>

<template>
    <div id="page-wrap">
      <div class="top_img_element">
          <div id="img-wrap">
            <div class="titlewrap">
              <h1 class="title">{{ product.name }}</h1>
              <a href="/*">flag</a>
            </div>
              <img v-bind:src="product.imageUrl">
          </div>
      </div>
      <div class="middle_detail_element">
        <div v-if="product && product.seller">
          <div class="score_name">
            <h2 class="seller_name">{{ product.seller.name }} </h2>
            <p>Review score: {{ product.seller.averageRating }}</p>
            <StarRating :rating="Number(product.seller.averageRating)" :readOnly="true" class="star" />   
          </div>
          <div class="score_location">
            <p>Location: {{ product.seller.location }}</p>
          </div>
        </div>
            <h3 v-if="product && product.item" id="price">€{{ product.item.price }} per dag</h3>
            <p v-if="product && product.item">{{ product.item.available ? 'Beschikbaar' : 'Niet Beschikbaar' }}</p>  
      </div>
      <div class="bottom_detail_element">
        <h4>Beschrijving</h4>
        <p>{{ product.description }}</p>
        <div v-if="product && product.item">
          <p>stock: {{ product.item.stock }}</p>
          <p>Staat: {{ stateText }}</p>
          <p>Waarborg: {{ product.item.waarborg }} per product</p>
        </div>
        <button id="add-to-cart">Toevoegen aan winkelmandje</button>
      </div>
    </div>
</template>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  .top_img_element {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #img-wrap {
    text-align: center;
  }

  .titlewrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    margin: 0;
    font-size: 32px;
  }

  img {
    width: 400px;
  }

  .middle_detail_element {
    padding: 16px;
    position: relative;
  }

  .seller_name {
    margin: 0;
    font-size: 16px;
  }

  .score_name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }

  .bottom_detail_element {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
    color: green;
  }
</style>
