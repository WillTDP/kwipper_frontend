<script setup>
import { ref, computed } from 'vue';
import { products } from '../../fake-data.js'
import ProductItem from './ProductItem.vue';
import ProductItemPremium from './ProductItemPremium.vue';

const productsRef = ref(products);

const nonPremiumProducts = computed(() => productsRef.value.filter(product => !product.premium));
const premiumProducts = computed(() => productsRef.value.filter(product => product.premium));
</script>

<template>
  <div id="page-wrap">
      <div class="grid-wrap">
        <ProductItemPremium v-for="product in premiumProducts" :key="product.id" :product="product" />
        <ProductItem v-for="product in nonPremiumProducts" :key="product.id" :product="product" />
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
