<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: Object,
});
</script>

<template>
    <div class="product-item">
      <router-link :to="'/products/' + product.id">
        <img :src="product.imageUrl" alt="Product Image">
        <div class="product-text">
          <h3 class="product-name">{{ product.name }}</h3>
          <p v-if="product && product.item" id="price" class="product-price">Vanaf €{{ product.item.price }} per dag</p>
        </div>
      </router-link>
    </div>
  </template>

<style scoped>
    .product-item {
        align-items: center;
        border-radius: 9px;
        display: flex;
        flex-direction: column;
        margin: 1%;
        position: relative;
        background-color: #F0F2F1;
    }

    .product-text {
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 0px;
        margin-top: -10px;
        margin-top: -10px;
        width: 100%;
        line-height: 0.5;
    }

    .product-name {
        margin-bottom: 0;
        padding-bottom: 0;
        color: #2B5740;
    }

    img {
        height: 200px;
        width: 200px;
        margin-bottom: 0;
        padding-bottom: 0;
        border-radius: 9px;
    }

    .product-price{
        color: black;
    }
</style>