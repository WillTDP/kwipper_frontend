<script setup>
import { ref, computed } from 'vue';
import { products, categorie } from '../../fake-data.js'
import ProductItem from './ProductItem.vue';
import ProductItemPremium from './ProductItemPremium.vue';
import filterMenumobile from './filtermenu-mobile.vue';


const productsRef = ref(products);
const categorieRef = ref(categorie);

const nonPremiumProducts = computed(() => productsRef.value.filter(product => !product.premium));
const premiumProducts = computed(() => productsRef.value.filter(product => product.premium));
</script>

<template>
  <filterMenumobile />
  <div class="container">
    <div class="category">
      <li v-for="item in categorieRef">
        {{ item.name }} {{ item.items }}
      </li>
    </div>
    <div id="page-wrap">
      
      <div class="grid-wrap">
        <ProductItemPremium v-for="product in premiumProducts" :key="product.id" :product="product" />
        <ProductItem v-for="product in nonPremiumProducts" :key="product.id" :product="product" />
      </div>
        
    </div>

  </div>
    
  
</template>

<style scoped>
  

  .container  {
    width: 63%;
    margin: auto;
    margin-bottom: 10%;
  }

  .category {
    width: 187px;
    height: 646px;
    background-color: #f0f2f1;
    border-radius: 9px;
    float: left;
    margin-right: 2%;
  }

  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
    float: none;
  }
</style>
