<script setup>
import { ref } from 'vue';
import { products } from '../fake-data.js';
import ProductItem from './ProductItem.vue';

const productsRef = ref(products);
</script>

<template>
    <div id="page-wrap">
        <div class="grid-wrap">
          <ProductItem v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
    
    
</template>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }
</style>
