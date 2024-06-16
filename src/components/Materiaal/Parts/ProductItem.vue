<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: Object,
});
 

</script>

<template>
    <div class="product-item" v-if="item">
      <router-link :to="'/products/' + item._id">
        <img :src="item.item.pictures[0] ? item.item.pictures[0] : '/Images/fouragetent.png'" alt="materiaal foto" class="product-image">        
        <div class="product-text">
          <h3 class="product-name">{{ item.item.art_name }}</h3>
          <p  id="price" class="product-price">Vanaf €{{ item.item.price }} per dag</p>
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
        position: relative;
        background-color: #F0F2F1;
        margin: 1%;
        max-height: 240px;
    }

    .product-image {
        object-fit: cover; /* Ensure images don't stretch */
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
        font-size: 1em;
        font-weight: 900;
        font-family: 'Museo Sans', sans-serif;
    }

    img {
        height: 183px;
        width: 183px;
        margin-bottom: 0;
        padding-bottom: 0;
        border-radius: 9px;
    }

    .product-price{
        color: black;
    }


    @media screen and (max-width: 768px){
        .product-item {
            width: 100%;
            max-width: 183px;
            padding: 0;
            align-items: normal;
        }

        img {
            height: 100%;
            max-height: 109px;
            width: 100%;
            max-width: 183px;
            object-fit: cover; /* Ensure images don't stretch */
        }

      
    }
</style>