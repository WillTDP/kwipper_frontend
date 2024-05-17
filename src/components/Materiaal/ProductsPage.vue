<script setup>
import { ref, reactive ,computed, onMounted, onUnmounted } from 'vue';
import { products } from '../../fake-data.js'
import ProductItem from './ProductItem.vue';
import ProductItemPremium from './ProductItemPremium.vue';
import filtermenuMobile from './filtermenu-mobile.vue';
import filtermenuDesktop from './filtermenu-desktop.vue';
import apiService from '/apiService';

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

export const dataMixin = {
  data() {
    return {
      data: null,
    };
  },
  created() {
    // Fetch data when the component is created
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await apiService.fetchData();
        this.data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>

<template>
  <div id="page-wrap">
      <filtermenuMobile @filter="filterProducts" v-if="state.mobile" />
      <filtermenuDesktop @filter="filterProducts" v-if="state.desktop" />
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
    float: none;
    
  }
</style>
