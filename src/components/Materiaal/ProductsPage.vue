<script setup>
import { ref, reactive ,computed, onMounted, onUnmounted } from 'vue';
import { products } from '../../fake-data.js'
import ProductItem from './ProductItem.vue';
import ProductItemPremium from './ProductItemPremium.vue';
import filtermenuMobile from './Parts/filtermenu-mobile.vue';
import filtermenuDesktop from './Parts/filtermenu-desktop.vue';
import categorymenuDesktop from './Parts/categorymenu-desktop.vue';
import ProductTrending from './Parts/ProductTrending.vue';
import apiService from '../../../apiService';

let selectedCategory = ref("");
let selectedPrice = ref(null);

const filterProducts = (category) => {
  selectedCategory.value = category;
};

const filterProductsByPrice = (priceRange) => {
  if (priceRange === "") {
    selectedPrice.value = null; // Reset the filter
  } else {
    const [lower, upper] = priceRange.split('-').map(Number);
    selectedPrice.value = { lower, upper };
  }
};

const nonPremiumProducts = computed(() => {
  return products.filter(product => !product.premium && 
    (selectedCategory.value ? product.item && product.item.art_category && product.item.art_category.includes(selectedCategory.value) : true) &&
    (selectedPrice.value ? product.item.price >= selectedPrice.value.lower && product.item.price <= selectedPrice.value.upper : true)
  );
});

console.log(nonPremiumProducts);

const premiumProducts = computed(() => {
  return products.filter(product => product.premium && 
    (selectedCategory.value ? product.item && product.item.art_category && product.item.art_category.includes(selectedCategory.value) : true) &&
    (selectedPrice.value ? product.item.price >= selectedPrice.value.lower && product.item.price <= selectedPrice.value.upper : true)
  );
});

const state = reactive({
  mobile: window.innerWidth < 811, // Initialize mobile state
  desktop: window.innerWidth > 811 // Initialize desktop state
});

function checkMobile() {
  state.mobile = window.innerWidth < 811;
}

function checkDesktop() {
  state.desktop = window.innerWidth > 811;
}

onMounted(() => {
  window.addEventListener('resize', checkMobile);
  window.addEventListener('resize', checkDesktop);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
  window.removeEventListener('resize', checkDesktop);
});

const data = ref(null);

const fetchData = async () => {
  try {
    const response = await apiService.fetchData();
    data.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
});

</script>

<template>
  <div id="page-wrap">
    <filtermenuMobile @filter="filterProducts" v-if="state.mobile" />
      <div v-if="selectedCategory && state.mobile" class="selected">
        <p>Selected Category: </p>
        <div class="filter">
          <p @click="selectedCategory = null" class="x">x</p>
          <p> {{ selectedCategory }}</p>
        </div>
      </div>
  <filtermenuDesktop @filter="filterProducts" @filterByPrice="filterProductsByPrice" v-if="state.desktop" />
    <div class="grid-container">
      <categorymenuDesktop @filter="filterProducts" v-if="state.desktop"/> 
      <ProductTrending v-if="state.mobile" @filter="filterProducts"/>
      <div class="grid-wrap">
        <ProductTrending v-if="state.desktop" @filter="filterProducts"/>
        <ProductItemPremium v-for="product in premiumProducts" :key="product.id" :product="product" />
        <ProductItem v-for="product in nonPremiumProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
  <!-- code to simply showcase all user date, meant for temporary testing so don't pay too much attention to it
  <div v-if="data">
      <pre>{{ data }}</pre>
  </div>
  -->

  
</template>

<style scoped>
  

  .grid-container {
    display: flex;
    justify-content: center;
    
  }

  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    float: right;
    margin-top: 16px;
    width: 64%;
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

  @media (max-width: 811px) {
    .grid-wrap {
      width: 95%;
      flex-wrap: wrap;
      padding: 6px;
    }

    .grid-container {
      flex-wrap: wrap;
      gap: 0px;
    }


    ProductItemPremium {
      width: auto;
    }
  }
</style>
