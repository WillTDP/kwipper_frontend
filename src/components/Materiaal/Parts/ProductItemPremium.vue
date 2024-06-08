<script setup>
import { defineProps, onMounted, ref } from 'vue';
import productRating from './StarRating.vue';
import campImage1 from '../../../assets/fouragetent.png';

import apiService from '../../../../apiService';

const camp = campImage1;
const props = defineProps({
  
  item: Object,
  jb_name: String, // declare jb_name as a prop

});


</script>

<template>
    <div class="product-item" >
        
        <router-link v-bind:to="'/products/' + item._id">
            <div class="image-container">
                <img class="verhuurder" src="https://c.animaapp.com/rqXPDOkF/img/rectangle-260@2x.png" />
                <p class="product-owner">{{ jb_name ? jb_name : item.user.posted_by }}</p>
                <productRating class="product-rating" />
                <img :src="item.item.pictures[0] ? item.item.pictures[1] : '../../assets/seniorentent.png'" >
            </div>
            
            <div class="product-text-container" >
                <div class="product-text">
                    <h3 class="product-name">{{ item.item.art_name }}</h3>
                    <p  id="price" class="product-price">Vanaf €{{ item.item.price }} per dag</p>
                </div>   
                <div class="product-button">
                    <router-link v-bind:to="'/products/' + item._id">
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
        background-color: #f0f2f1;
        margin: 1%;
        max-height: 240px;
    }

    .image-container {
        position: relative;
        width: 423px; /* Set the width of the image container */
        height: 181px; /* Set the height of the image container */
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
        font-size: 1em;
        font-weight: 900;
        font-family: 'Museo Sans', sans-serif;
    }

    img {
        height: 181px;
        width: 423px;
        margin-bottom: 0;
        padding-bottom: 0;
        border-radius: 9px;
        object-fit: cover; 
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

    /* Responsive styles for screens smaller than 600px */
    @media (max-width: 600px) {
        .product-item {
            width: 100%; /* Set the width of the product item to 100% */
            max-width: 423px; /* Set the maximum width of the product item to 423px */
            padding: 0; /* Remove padding */
            align-items: normal; /* Align items to the start */
            max-height: 100%; /* Set the maximum height of the product item to 100% */
        }
        .image-container {
            width: 100%; /* Set the width of the image container to 100% */
            max-width: 95vw; /* Set the maximum width of the image container to 100% */
            height: auto; /* Set the height of the image container to auto */
        }

        img {
            max-width: 100%; /* Set the maximum width of the image to 100% */
            height: auto; /* Set the height of the image to auto */
            object-fit: cover; /* Ensure images don't stretch */
        }
    }
</style>