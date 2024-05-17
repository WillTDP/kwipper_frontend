<script setup>
import { ref, reactive ,computed, onMounted, onUnmounted } from 'vue';
import { ref, computed } from 'vue';
import { products } from '../../fake-data.js'
import ProductItem from './ProductItem.vue';
import ProductItemPremium from './ProductItemPremium.vue';
import filtermenuMobile from './filtermenu-mobile.vue';

let selectedCategory = ref(null);

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
