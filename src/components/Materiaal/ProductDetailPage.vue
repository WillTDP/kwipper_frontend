<template>
    <div id="page-wrap" v-if="itemData">
      <div id="img-wrap">
        
      </div>
      <div id="product-details">
        <h1>{{ itemData.data.assortment.item.art_name }}</h1>
        <h3 id="price">€{{ itemData.data.assortment.item.price }} per dag</h3>
        <button id="add-to-cart">Toevoegen aan winkelmandje</button>
        <h4>Beschrijving:</h4>
        <p>{{ itemData.data.assortment.item.art_desc }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, onMounted, ref } from 'vue';
  import apiService from '../../../apiService';
  
  const itemId = ref(null); // Define a ref to store the extracted item ID

// Function to extract the item ID from the URL
const extractItemIdFromUrl = () => {
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split('/');
  const id = urlParts[urlParts.length - 1];
  itemId.value = id;
};

// Define a ref to store the fetched item data
const itemData = ref(null);

// Fetch item data when the component is mounted
onMounted(async () => {
  // Call the function to extract the item ID from the URL
  extractItemIdFromUrl();
  
  // Check if the item ID is extracted successfully
  if (itemId.value) {
    try {
      // Fetch item data using the extracted item ID
      const response = await apiService.fetchDataById(itemId.value);
      // Store the fetched item data in the ref
      itemData.value = response.data;
      console.log('Item data:', itemId.value);
    } catch (error) {
      console.error('Error fetching item data:', error);
    }
  }
});
</script>
  
  

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
    color: black;
    background-color: #f5f5f5;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }

  .green-button {
    background-color: green;
  }

  .grey-button {
    background-color: #888;
  }
</style>
