<script setup>
import { ref, reactive ,computed, onMounted, onUnmounted } from 'vue';
import { products } from '../../fake-data.js'
import ProductItem from './ProductItem.vue';
import ProductItemPremium from './ProductItemPremium.vue';
import filtermenuMobile from './filtermenu-mobile.vue';

let selectedCategory = ref("");

const filterProducts = (category) => {
  selectedCategory.value = category;
};

const nonPremiumProducts = computed(() => {
  return products.filter(product => !product.premium && (selectedCategory.value ? product.item && product.item.art_category && product.item.art_category.includes(selectedCategory.value) : true));
});

const premiumProducts = computed(() => {
  return products.filter(product => product.premium && (selectedCategory.value ? product.item && product.item.art_category && product.item.art_category.includes(selectedCategory.value) : true));
});
const state = reactive({
  mobile: window.innerWidth < 811, // Initialize mobile state
});

function checkMobile() {
  state.mobile = window.innerWidth < 811;
}

onMounted(() => {
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<template>
  <div id="page-wrap">
      <filtermenuMobile @filter="filterProducts" v-if="state.mobile" />
      <div v-if="selectedCategory" class="selected">
        <p>Selected Category: </p>
        <div class="filter">
          <p @click="selectedCategory = null" class="x">x</p>
          <p> {{ selectedCategory }}</p>
        </div>
      </div>
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

  .selected {
    margin: 16px;
    font-size: 16px;
    color: #2B5740;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .filter {
    display: flex;
    align-items: center;
    gap: 8px;    
    margin: 0;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 32px;
    background-color: #F0F2F1;
    border-radius: 32px;
  }

  .x {
    cursor: pointer;
    font-weight: 600;
  }
</style>
