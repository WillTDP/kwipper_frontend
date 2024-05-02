<script setup>
import { reactive, onMounted, computed, ref } from 'vue';
import { products } from '../../fake-data.js'
import { useRoute } from 'vue-router';
import StarRating from './Parts/StarRating.vue';

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
        <div v-if="product && product.seller && product.item">
          <div class="score_name">
            <h2 class="seller_name">{{ product.seller.name }} </h2>
            <StarRating :rating="Number(product.seller.averageRating)" :readOnly="true" class="star" />   
          </div>
          <div class="price_location">
            <div class="location">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                <path d="M6.92308 9.5C6.26732 9.5 5.63842 9.23661 5.17474 8.76777C4.71105 8.29893 4.45055 7.66304 4.45055 7C4.45055 6.33696 4.71105 5.70107 5.17474 5.23223C5.63842 4.76339 6.26732 4.5 6.92308 4.5C7.57883 4.5 8.20773 4.76339 8.67142 5.23223C9.13511 5.70107 9.3956 6.33696 9.3956 7C9.3956 7.3283 9.33165 7.65339 9.20739 7.95671C9.08314 8.26002 8.90101 8.53562 8.67142 8.76777C8.44182 8.99991 8.16925 9.18406 7.86927 9.3097C7.56929 9.43534 7.24777 9.5 6.92308 9.5ZM6.92308 0C5.08696 0 3.32605 0.737498 2.02772 2.05025C0.729393 3.36301 0 5.14348 0 7C0 12.25 6.92308 20 6.92308 20C6.92308 20 13.8462 12.25 13.8462 7C13.8462 5.14348 13.1168 3.36301 11.8184 2.05025C10.5201 0.737498 8.75919 0 6.92308 0Z" fill="#090D0B"/>
              </svg>
              <p>{{ product.seller.location }}</p>
            </div>
            <div class="price_available">
              <h3 id="price">€{{ product.item.price }} per dag</h3>
              <p :class="{ 'available': product.item.available, 'not-available': !product.item.available }">
                {{ product.item.available ? 'Beschikbaar' : 'Niet Beschikbaar' }}
              </p>            
            </div>
          </div>
        </div>
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
    margin: 0 auto;

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

  .price_location {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }

  .price_available {
    margin: 0;
    padding: 0;
    line-height: 0.5;
  }

  .available {
  color: green;
  }

  .not-available {
    color: red;
  }

  .location {
    display: flex;
    flex-direction: row-reverse;
    gap: 9px;
    align-items: center;
  }

  .location p {
    max-width: 160px;
  }

  .bottom_detail_element {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
    color: #F0F2F1;
    background-color: #4EA385;
  }
</style>
