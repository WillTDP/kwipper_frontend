<template>
    <div id="page-wrap" v-if="product">
      <div id="img-wrap">
        <img v-bind:src="product.item.art_img" @error="handleError" alt="materiaal foto">
      </div>
      <div id="product-details">
        <h1>{{ product.item.art_name }}</h1>
        <h3 id="price">€{{ product.item.price }} per dag</h3>
        <button id="add-to-cart">Toevoegen aan winkelmandje</button>
        <h4>Beschrijving</h4>
        <p>{{ product.item.art_desc }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, onMounted, ref } from 'vue';
  import apiService from '../../../apiService';
  
  const data = ref(null);
  
  const fetchData = async () => {
    try {
      const response = await apiService.fetchData();
      console.log('API Response:', response.data);
      console.log('Id:', $route.params.id);
      data.value = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  onMounted(() => {
    fetchData();
  });
  
  const product = ref(null);
  
  const handleError = () => {
    // Handle error loading image
    console.log('Error loading image');
    product.value.item.art_img = '../../assets/fouragetent.png';
  };
  
  if (data.value) {
    product.value = data.value.data.twoAssortment.find((p) => p._id === $route.params._id);
    console.log('id:', $route.params._id);
    console.log('Product:', product);
  }
  
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
