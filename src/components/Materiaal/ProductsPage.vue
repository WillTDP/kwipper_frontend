<script setup>
import { ref, reactive ,computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { products } from '../../fake-data.js'
import ProductItem from './ProductItem.vue';
import ProductItemPremium from './ProductItemPremium.vue';
import filtermenuMobile from './Parts/filtermenu-mobile.vue';
import filtermenuDesktop from './Parts/filtermenu-desktop.vue';
import categorymenuDesktop from './Parts/categorymenu-desktop.vue';
import ProductTrending from './Parts/ProductTrending.vue';
import apiService from '../../../apiService';

const route = useRoute();

let selectedCategory = ref("");
let selectedPrice = ref(null);
let selectedCondition = ref(null);
let selectedName = ref(null);

const data = ref(null);

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

const filterProductsByCondition = (condition) => {
  selectedCondition.value = condition;
  console.log(selectedCondition.value);
};

const filterProductsByName = (name) => {
  if (name) {
    selectedName.value = name;
  } else if (route.query.name) {
    selectedName.value = route.query.name;
  }
};






/* this part is only applicable for the fake data*/
const nonPremiumProducts = computed(() => {
  return products.filter(product => !product.premium && 
    (selectedCategory.value ? product.item && product.item.art_category && product.item.art_category.includes(selectedCategory.value) : true) &&
    (selectedPrice.value ? product.item.price >= selectedPrice.value.lower && product.item.price <= selectedPrice.value.upper : true)
    && (selectedCondition.value ? String(product.item.staat) === String(selectedCondition.value) : true) 
    && (selectedName.value ? product.name.toLowerCase().includes(selectedName.value.toLowerCase()) : true)
  );
});


const premiumProducts = computed(() => {
  return products.filter(product => product.premium && 
    (selectedCategory.value ? product.item && product.item.art_category && product.item.art_category.includes(selectedCategory.value) : true) &&
    (selectedPrice.value ? product.item.price >= selectedPrice.value.lower && product.item.price <= selectedPrice.value.upper : true) 
    && (selectedCondition.value ? String(product.item.staat) === String(selectedCondition.value) : true)
    && (selectedName.value ? product.name.toLowerCase().includes(selectedName.value.toLowerCase()) : true)
  );
});

const filteredPremiumItems = computed(() => {
  if (!data.value || !data.value.data || !data.value.data.twoAssortment) {
    // Check if data is valid and contains the necessary structure
    return [];
  }
  
  return data.value.data.twoAssortment.filter(item => item.item && item.item.premium === true);
});

const filteredNonPremiumItems = computed(() => {
  if (!data.value || !data.value.data || !data.value.data.twoAssortment) {
    // Check if data is valid and contains the necessary structure
    return [];
  }
  
  return data.value.data.twoAssortment.filter(item => item.item && item.item.premium === false);
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
  filterProductsByName();
  fetchData();

});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
  window.removeEventListener('resize', checkDesktop);
});



const fetchData = async () => {
  try {
    const response = await apiService.fetchData();
    console.log('API Response:', response.data);
    data.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};




fetchData();

watch(route, () => {
  filterProductsByName();
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
  <filtermenuDesktop @filter="filterProducts" @filterByPrice="filterProductsByPrice" @filterByCondition="filterProductsByCondition" @filterByName="filterProductsByName" v-if="state.desktop" />
    <div class="grid-container">
      <categorymenuDesktop @filter="filterProducts" v-if="state.desktop"/> 
      <ProductTrending v-if="state.mobile" @filter="filterProducts"/>
      <div class="grid-wrap" v-if="data">
        <ProductTrending v-if="state.desktop" @filter="filterProducts"/>
        <ProductItemPremium v-for="item in filteredPremiumItems" :key="item._id" :item="item"/>
        <ProductItem v-for="item in filteredNonPremiumItems" :key="item._id" :item="item" />
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
