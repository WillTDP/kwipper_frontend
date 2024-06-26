<script setup>
import { ref, reactive ,computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import ProductItem from '../Parts/ProductItem.vue';
import ProductItemPremium from '../Parts/ProductItemPremium.vue';
import filtermenuMobile from './Parts/filtermenu-mobile.vue';
import filtermenuDesktop from './Parts/filtermenu-desktop.vue';
import categorymenuDesktop from './Parts/categorymenu-desktop.vue';
import ProductTrending from '../Parts/ProductTrending.vue';
import apiService from '../../../../apiService';

const route = useRoute();

let selectedCategory = ref("");
let selectedPrice = ref(null);
let selectedCondition = ref(null);
let selectedName = ref(null);
let selectedBrand = ref(null);
let SortBy = ref(null);
const assortments = ref([]);


const data = ref(null);

const filterProducts = (category) => {
  selectedCategory.value = category;
};

const filterProductsByBrand = (brand) => {
  selectedBrand.value = brand;
};

const filterProductsByPrice = (priceRange) => {
  if (!priceRange || priceRange === "") {
    selectedPrice.value = null; // Reset the filter
    return;
  }
  const [lower, upper] = priceRange.split('-').map(Number);
  selectedPrice.value = { lower, upper };
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

  // Reset filtered items if selectedName.value is empty
  if ( selectedName.value === "") {
    selectedName.value = null;
  }

  console.log(selectedName.value);
};

const setSortBy = (sort) => {
  SortBy.value = sort;
  console.log(SortBy.value);
};

const filteredPremiumItems = computed(() => {
  if (!data.value || !data.value.data || !data.value.data.twoAssortment) {
    // Check if data is valid and contains the necessary structure
    return [];
  }
  
  let filteredItems = data.value.data.twoAssortment.filter(item => 
    item.item && item.item.premium === true &&
    (selectedCategory.value ? item.item.art_category && item.item.art_category.includes(selectedCategory.value) : true) &&
    (selectedPrice.value ? item.item.price >= selectedPrice.value.lower && item.item.price <= selectedPrice.value.upper : true) &&
    (selectedCondition.value ? String(item.item.condition) === String(selectedCondition.value) : true) &&
    (selectedName.value ? item.item.art_name.toLowerCase().includes(selectedName.value.toLowerCase()) : true)
    && (selectedBrand.value ? item.item.brand.toLowerCase().includes(selectedBrand.value.toLowerCase()) : true)
  );

  // Sort filtered items based on SortBy value if it's not empty
  if (SortBy.value) {
    filteredItems.sort((a, b) => {
      switch (SortBy.value) {
        case '1': return a.item.price - b.item.price; // Prijs oplopend
        case '2': return b.item.price - a.item.price; // Prijs aflopend
        case '3': return a.item.art_name.localeCompare(b.item.art_name); // Naam oplopend
        case '4': return b.item.art_name.localeCompare(a.item.art_name); // Naam aflopend
        default: return 0;
      }
    });
  }

  return filteredItems;
});

const filteredNonPremiumItems = computed(() => {
  if (!data.value || !data.value.data || !data.value.data.twoAssortment) {
    // Check if data is valid and contains the necessary structure
    return [];
  }
  
  let filteredItems = data.value.data.twoAssortment.filter(item => 
    item.item && item.item.premium !== true &&
    (selectedCategory.value ? item.item.art_category && item.item.art_category.includes(selectedCategory.value) : true) &&
    (selectedPrice.value ? item.item.price >= selectedPrice.value.lower && item.item.price <= selectedPrice.value.upper : true) &&
    (selectedCondition.value ? String(item.item.condition) === String(selectedCondition.value) : true) &&
    (selectedName.value ? item.item.art_name.toLowerCase().includes(selectedName.value.toLowerCase()) : true)
    && (selectedBrand.value && item.item.brand ? item.item.brand.toLowerCase().includes(selectedBrand.value.toLowerCase()) : true)
  );

  // Sort filtered items based on SortBy value if it's not empty
  if (SortBy.value) {
    filteredItems.sort((a, b) => {
      switch (SortBy.value) {
        case '1': return a.item.price - b.item.price; // Prijs oplopend
        case '2': return b.item.price - a.item.price; // Prijs aflopend
        case '3': return a.item.art_name.localeCompare(b.item.art_name); // Naam oplopend
        case '4': return b.item.art_name.localeCompare(a.item.art_name); // Naam aflopend
        default: return 0;
      }
    });
  }

  return filteredItems;
});


const state = reactive({
  mobile: window.innerWidth < 1025, // Initialize mobile state
  desktop: window.innerWidth > 1025 // Initialize desktop state
});

function checkMobile() {
  state.mobile = window.innerWidth < 1025;
}

function checkDesktop() {
  state.desktop = window.innerWidth > 1025;
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

    // Create an array of promises
    const promises = response.data.data.twoAssortment.map((assortment) => {
      if (assortment.user && assortment.user.user_id) {
        // Return a promise to fetch assortment by user
        return apiService.getUserByIdsmall(assortment.user.user_id);
      }
    });

    // Filter out any undefined values (from assortments without a user)
    const validPromises = promises.filter(Boolean);

    // Wait for all promises to resolve
    assortments.value = await Promise.all(validPromises);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};



const clearSelection = () => {
  selectedCategory.value = "";
  selectedBrand.value = null;
};



fetchData();

watch(route, () => {
  filterProductsByName();
});

</script>

<template>
  <div id="page-wrap">
    <filtermenuMobile  @filter="filterProducts" @filterByPrice="filterProductsByPrice" @filterByCondition="filterProductsByCondition" @SortBy="setSortBy" v-if="state.mobile" />
      <div v-if="(selectedCategory || selectedBrand) && state.mobile" class="selected">        
        <p>Selected Category: </p>
        <div class="filter">
          <p @click="clearSelection" class="x">x</p>
          <p> {{ selectedCategory || selectedBrand }}</p>
        </div>
      </div>
  <filtermenuDesktop @filterByPrice="filterProductsByPrice" @filterByCondition="filterProductsByCondition" @filterByName="filterProductsByName" @SortBy="setSortBy" v-if="state.desktop" />
    <div class="grid-container">
      <categorymenuDesktop @filter="filterProducts" v-if="state.desktop"/> 
      <div class="grid-wrap" v-if="data" :class="{ 'active-category': selectedCategory }">        
        <ProductTrending class="producttrending" @filter="filterProductsByBrand"/>
        <ProductItemPremium v-for="(item, index) in filteredPremiumItems" :key="item._id" :item="item" :jb_name="assortments[index] && assortments[index].data.data.user.jb_name ? assortments[index].data.data.user.jb_name : ''"/>
        <ProductItem v-for="item in filteredNonPremiumItems" :key="item._id" :item="item"/>
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
  
  #page-wrap {
    max-width: 1540px;
    margin: 0 auto;
  }

  .grid-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    float: left;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
    width: 64%;
  }

  .active-category {
    justify-content: flex-start;
  }

  .producttrending {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .selected {
    margin: 16px;
    font-size: 16px;
    padding: 0px;
    margin: 0px;
    color: #2B5740;
    display: flex;
    align-items: center;
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
    background-color: #F0F2F1;
    border-radius: 32px;
    font-weight: 400;
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

  @media (max-width: 1025px) {
    .grid-wrap {
      width: 95%;
      flex-wrap: wrap;
      padding: 6px;
      margin-left: 0px;
      margin-right: 0px;
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
