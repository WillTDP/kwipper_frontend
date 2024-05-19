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
      <div v-if="selectedCategory" class="selected">Selected Category: {{ selectedCategory }}</div>
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
    font-size: 24px;
    color: #2B5740;
    display: flex;
  }
</style>
