<script setup>
import { reactive, onMounted } from 'vue';
import { products } from '../fake-data.js';
import { useRoute } from 'vue-router';

const route = useRoute();
let product = reactive({});

onMounted(() => {
  const foundProduct = products.find((p) => p.id === route.params.id);
  if (foundProduct) {
    for (let key in foundProduct) {
      product[key] = foundProduct[key];
    }
    console.log(product);
  }
});
</script>

<template>
    <div id="page-wrap">
      <div class="top_img_element">
          <div id="img-wrap">
              <h1>{{ product.name }}</h1>
              <img v-bind:src="product.imageUrl">
          </div>
      </div>
      <div class="middle_detail_element">
            <h2>{{ product.Seller }} </h2>
            <p>Review score: {{ product.averageRating }}</p>
            <h3>{{ product.email }}</h3>
            <h3 v-if="product && product.item" id="price">€{{ product.item.price }} per dag</h3>
            <p v-if="product && product.item">{{ product.item.available ? 'Beschikbaar' : 'Niet Beschikbaar' }}</p>  
      </div>
      <div class="bottom_detail_element">
        <h4>Beschrijving</h4>
        <p>{{ product.description }}</p>
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
    background-color: #888;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  .middle_detail_element {
    padding: 16px;
    position: relative;
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
