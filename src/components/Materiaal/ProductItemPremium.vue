<script setup>
import { defineProps } from 'vue';
import productRating from './Parts/StarRating.vue';

const props = defineProps({
  product: Object,
});
</script>

<template>
    <div class="product-item">
        
        <router-link :to="'/products/' + product.id">
            <div class="image-container">
                <img class="verhuurder" src="https://c.animaapp.com/rqXPDOkF/img/rectangle-260@2x.png" />
                <p class="product-owner">Chiro Kuringen Centrum</p>
                <productRating class="product-rating" />
                <img :src="product.imageUrl" alt="Product Image">
            </div>
            
            <div class="product-text-container">
                <div class="product-text">
                    <h3 class="product-name">{{ product.name }}</h3>
                    <p v-if="product && product.item" id="price" class="product-price">Vanaf €{{ product.item.price }} per dag</p>
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
        margin: 1%;
        position: relative;
        background-color: #f0f2f1;
    }

    .image-container {
        position: relative;
        width: 460px; /* Set the width of the image container */
        height: 200px; /* Set the height of the image container */
    }

    .verhuurder {
        position: absolute;
        border-radius: 50%;
        top: 10px;
        left: 10px;
        z-index: 10;
        height: 60px;
        width: 60px;
    }

    .product-owner {
        position: absolute;
        
        left: 80px;
        z-index: 10;
        color: white;
    }

    .product-rating {
        position: absolute;
        top: 40px; /* Adjust as necessary */
        left: 80px; /* Adjust as necessary */
        z-index: 10;
    }

    .product-text-container {
        display: flex;
        justify-content: space-between; /* Distribute space between text and button */
        padding-left: 8px;
        padding-right: 8px;
        line-height: 0.5;
        
    }

    .product-text{
        display:inline;
        width: auto;
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
        width: 120px;
        height: 30px;
        padding: 0;
    }

    

    .product-button{
        display: flex;
        justify-content: center; /* Center button horizontally */
        align-items: center; /* Center button vertically */
        width: auto; /* Adjust width as necessary */
        
    }

</style>