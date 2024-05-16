<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: Object,
});
</script>

<template>
    <div class="product-item">
        <router-link :to="'/products/' + product.id">
            <img :src="product.imageUrl">
            <div class="product-text-container">
                <div class="product-text">
                    <h3 class="product-name">{{ product.name }}</h3>
                    <p v-if="product && product.item" id="price" class="product-price">€{{ product.item.price }} per dag</p>
                </div>   
                <div class="product-button">
                    <router-link v-bind:to="'/products/' + product.id">
                        <button class="button-details">Bekijk</button>
                    </router-link> 
                </div>
                 
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
        margin-bottom: 2%;
        position: relative;
        background-color: #f0f2f1;
    }

    .product-text-container {
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 0px;
        margin-top: -10px;
        margin-top: -10px;
        width: 100%;
        line-height: 0.5;
        
    }

    .product-text{
        float:left; 
        display:inline;
        width: 49%;
    }

    .product-name {
        margin-bottom: 0;
        padding-bottom: 0;
        color: #2B5740;
    }

    img {
        height: 200px;
        width: 460px;
        margin-bottom: 0;
        padding-bottom: 0;
        border-radius: 9px;
    }

    .product-price{
        color: black;
    }

    .button-details{
        background-color: #FF4D00;
        color: white;
        position: absolute;
        right: 8px;
        margin-top: 10px;
    }

    .product-button{
        float:left; 
        display:inline;
        width: 49%;
        
    }

</style>