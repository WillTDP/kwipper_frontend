<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import apiService from '../../apiService';
import StarRating from './Materiaal/Parts/StarRating.vue';
import ProductItem from './Materiaal/Parts/ProductItem.vue';
import ProductItemPremium from './Materiaal/Parts/ProductItemPremium.vue';

const store = useStore();

const userId = store.getters.userId;
const user = reactive({ data: null });
const products = reactive({ data: [] });

let selectedPriceValue = ref(null);
let selectedConditionValue = ref(null);

const filterProductsByPrice = (priceRange) => {
  if (!priceRange || priceRange === "") {
    selectedPriceValue.value = null; // Reset the filter
    return;
  }
  const [lower, upper] = priceRange.split('-').map(Number);
  selectedPriceValue.value = { lower, upper };
};


const filterProductsByCondition = (condition) => {
  selectedConditionValue.value = condition;
  console.log(selectedConditionValue.value);
};


onMounted(async () => {
  if (userId) {
    const response = await apiService.getUserById(userId);
    user.data = response.data.data.user;
    console.log('User data:', user.data);

    const assortmentResponse = await getAssortmentbyUser(); // Call getAssortmentbyUser here
    products.data = assortmentResponse.data.assortment; // Access the 'assortment' property of the response
    console.log('Products data:', products.data);
  }
});

const filteredPremiumItems = computed(() => {
  if (!products.data) {
    // Check if products data is valid
    return [];
  }
  
  return products.data.filter(product => 
    product.item && product.item.premium === true &&
    // Add any additional filters here
    (selectedPriceValue.value ? product.item.price >= selectedPriceValue.value.lower && product.item.price <= selectedPriceValue.value.upper : true) &&
    (selectedConditionValue.value ? String(product.item.condition) === String(selectedConditionValue.value) : true)
  );
});

const filteredNonPremiumItems = computed(() => {
  if (!products.data) {
    // Check if products data is valid
    return [];
  }
  
  return products.data.filter(product => 
    product.item && product.item.premium === false &&
    // Add any additional filters here
    (selectedPriceValue.value ? product.item.price >= selectedPriceValue.value.lower && product.item.price <= selectedPriceValue.value.upper : true) &&
    (selectedConditionValue.value ? String(product.item.condition) === String(selectedConditionValue.value) : true)
  );
});


const getAssortmentbyUser = async () => {
  const response = await apiService.getAssortmentbyUser(userId);
  console.log('Assortment by user:', response.data);
  return response.data;
};

</script>

<template>
  <div class="profile">
    <div class="particulier-profiel" v-if="user.data">
        <div class="overlap">
            <div class="overlap-folder">
              <div class="overlap-group">
                <img class="badge-jeugdbeweging" src="https://c.animaapp.com/rqXPDOkF/img/badge-jeugdbeweging-1.svg" />
                <StarRating class="starrating"/>
              </div>
            </div>
            <div class="info">
              <div class="user_info mail">
                <img class="email-icon" src="https://c.animaapp.com/rqXPDOkF/img/group-423@2x.png" />
                <p>{{ user.data.email }}</p>
              </div>
              <div class="user_info map">
                <img class="map-pin" src="https://c.animaapp.com/rqXPDOkF/img/map-pin.svg" />
                <p>{{ user.data.gemeente }}</p>
              </div>
            </div>
        </div>
        <div class="filter_block">
          <p class="title">Verfijn je resultaten</p>
          <div class="filters">
            <div class="Prijs">
              <p>Prijs</p>
              <select class="input-limited" v-model="selectedPriceValue" @change="filterProductsByPrice($event.target.value)">
                <option value="" disabled selected>Sorteer op prijs</option>
                <option value="">Reset</option>
                <option value="0-5">€0-€5</option>
                <option value="5-10">€5-€10</option>
                <option value="10-20">€10-€20</option>
                <option value="20-30">€20-€30</option>
                <option value="30-40">€30-€40</option>
                <option value="40-50">€40-€50</option>
                <option value="50-100">€50-€100</option>
                <option value="100-200">€100-€200</option>
              </select>
            </div>
            <div class="Conditie">
              <p>Conditie</p>
              <select class="input-limited" v-model="selectedConditionValue" @change="filterProductsByCondition($event.target.value)">
                <option value="" disabled selected>Sorteer op</option>
                <option value="">Reset</option>
                <option value="3">Matig</option>
                <option value="4">Goed</option>
                <option value="5">Perfect</option>
              </select>
            </div>
          </div>
          <div class="group-7">
            <p>Categoriën</p>
            <p class="smol_text">(die {{user.data.jb_name}} gebruikt)</p>
          </div>
          <div v-if="products.data.length > 0">
            <div class="tags" v-for="(product, productIndex) in products.data" :key="'product-' + productIndex">
              <template v-if="product.item && product.item.art_category && typeof product.item.art_category === 'string'">
                <div class="tag" v-for="(category, categoryIndex) in product.item.art_category.split(', ')" :key="'category-' + categoryIndex">
                  <div class="img-wrapper"><img class="vector-7" src="https://c.animaapp.com/rqXPDOkF/img/vector-11.svg" /></div>
                  <p>{{ category }}</p>
                </div>
              </template>
            </div>
        </div>
        </div>
    </div>
    
    <div class="product-container" v-if="user && user.data">
        <h1>{{ user.data.jb_name }}'s inventaris</h1>
        <div class="grid-wrap">
            <ProductItemPremium v-for="(product, index) in filteredPremiumItems" :key="index" :item="product" class="ProductItemPremium" :jb_name="user.data.jb_name"/>     
            <ProductItem v-for="(product, index) in filteredNonPremiumItems" :key="index" :item="product" class="ProductItem"/>
        </div>
    </div>
  </div>
    
</template>

<style scoped>

.profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
}
.particulier-profiel {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 50px;
  gap: 24px;
}

.particulier-profiel .overlap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f0f2f1;
  border-radius: 12px;
  gap: 30px;
  padding: 15px;
  width: 306px;
  height: 280px;
}

.overlap-folder {
  display: flex;
  justify-content: center;
  align-items: center;
}

.particulier-profiel .overlap-group {
  width: 183px;
  height: 183px;
  background-image: url(https://c.animaapp.com/rqXPDOkF/img/rectangle-260@2x.png);
  background-size: cover;
  background-position: 50% 50%;
}

.particulier-profiel .badge-jeugdbeweging {
  position: relative;
  top: 128px;
  left: 128px;
  width: 55px;
  height: 55px;
}

.particulier-profiel .starrating {
  position: relative;
  top: 95px;
  left: 10px;
  width: 80px;
  height: 15px;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.user_info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.user_info > * {
  margin: 0;
  padding: 0;
}

.particulier-profiel .email-icon {
  width: 17px;
  height: 19px;
}

.particulier-profiel .filter_block {
  width: 306px;
  max-width: 306px;
  height: auto;
  background-color: #f0f2f1;
  border-radius: 12px;
  padding: 15px;
}

.particulier-profiel .title {
  font-family: "Museo Sans", Helvetica;
  font-weight: 900;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
}

.particulier-profiel .group-7 {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10px;
}

.particulier-profiel .smol_text {
  display: flex;
  font-family: "Museo Sans", Helvetica;
  font-weight: 300;
  font-size: 10px;
  flex-wrap: nowrap;
  width: 100%;
  white-space: nowrap; /* Add this line */
}

.filters {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.particulier-profiel .tags {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}

.tag > * {
  margin: 0;
  padding: 0;
}

.particulier-profiel .tag {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0;
}

.particulier-profiel .img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background-color: #2b5740;
  border-radius: 2px;
}

.particulier-profiel .vector-7 {
  position: relative;
  width: 8px;
  height: 9px;
  top: 0px;
  left: 0px;
}

.input-limited {
  background: none;
  border: none;
  outline: none;
  flex-grow: 1;
  width: 100%;
  color: black;
  background-color: #D9D9D9;
}

button {
  position: absolute;
  background-color: #1C98D6;
  color: white;
  border: none;
  border-radius: 9px;
  width: 85px;
  padding: 0.5em 1em;
  font-size: 10px;
  cursor: pointer;
}


.product-container {
  display: flex;
  flex-direction: column;
  width: 100%;

}

.product-container h1 {
    font-size: 48px;
    font-family: "Bitter-ExtraBold", Helvetica;
    padding: 0;
}

.grid-wrap {
    flex-wrap: wrap;
    gap: 18px;
    display: flex;
    margin-top: 16px;
    margin-right: 10%;
    max-width: 1250px;
}

.ProductItemPremium {
  margin: 0;
  padding: 0;
  width: 425px;
}

.ProductItem {
  margin: 0;
  padding: 0;
  width: 185px;
}

</style>