<script setup>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import apiService from '../../apiService';

const store = useStore();

let products = ref([]);
let isWishlistEmpty = ref(false);

const getProducts = async () => {

    const userDataID = ref(store.getters.userId);
    console.log('User Data:', userDataID.value);

    const response = await apiService.getUserWishlist(userDataID.value);
    const data = response.data.data.wishlist;

    return data;
}

const removeItem = async (productId) => {
  await store.dispatch('removeWishlistItem', productId);
  await loadProducts();
}

const loadProducts = async () => {
  const shoppingCart = await getProducts();
  products.value = [];

  if (shoppingCart.length === 0) {
    isWishlistEmpty.value = true;
  } else {
    isWishlistEmpty.value = false;
    for (const element of shoppingCart) {
      const product = await apiService.fetchDataById(element.product_id);
      products.value.push(product);
    }
  }

  console.log(products.value);
}

onMounted(loadProducts);
</script>

<template>
    <h1>Je verlanglijstje</h1>

    <div class="page_container">
        <div v-if="isWishlistEmpty" class="empty_wish">
            <img src="../assets/Heart.svg" alt="Heart Icon" class="heart">
            <h3>Sla je favorieten op!</h3>
            <p>Ga door onze catalogus en vul je <br> verlanglijstje aan!</p>
            <RouterLink to="/materiaal">
                <button class="browse">Browse</button>
            </RouterLink>
        </div>
        <div v-else class="wishlist_items">
            <div class="stacked_segment"> 
                <div class="items">

                <div v-for="product in products" :key="product.id" class="item">
                    <img :src="product.data.data.assortment.item.pictures" alt="placeholder" />
                    <div class="item-info">
                        <div class="name">
                            <p>{{ product.data.data.assortment.item.art_name }}</p>
                            <button @click="removeItem(product.id)" class="remove">Verwijderen</button>
                        </div>
                        <p>{{ product.data.data.assortment.item.art_desc }}</p>
                        <p>€{{ product.data.data.assortment.item.price }}</p>
                    </div>
                </div>
                    
                </div>

            </div>
        </div>

    </div>
</template>

<style scoped>
    h1 {
        margin-left: 5%;
    }

    .page_container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%; 
    }

    .empty_wish {
        padding: 40px;
        
        display: flex;
        flex-direction: column; 
        align-items: center;    
        justify-content: center; 
    }

    .heart {
        width: 100px;
        height: 100px;
    }

    .browse {
        color: white;
        background-color: #2b5740;
    }

    .remove {
        background-color: #2b5740;
        color: white;
        border: none;
        border-radius: 9px;
        padding: 0.5em;
        margin-top: 1em;
    }

    .remove:hover {
        background-color: #1e3d2b;
    }
</style>