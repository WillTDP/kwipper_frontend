<script setup>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import apiService from '../../apiService';

const store = useStore();

let products = ref([]);

const getProducts = async () => {

    const userDataID = ref(store.getters.userId);
    console.log('User Data:', userDataID.value);

    const response = await apiService.getUserWishlist(userDataID.value);
    const data = response.data.data.wishlist;

    return data;
}

const removeItem = async (id) => {
    const userDataID = ref(store.getters.userId);
    const productID = id;
    const itemIndex = products.value.findIndex(item => item.id === id);

    console.log("product id", productID);
    console.log('User Data Id:', userDataID.value);

    try {
        const response = await apiService.removeWishlistItem(userDataID.value, productID);
        const data = response.data.data.wishlist;
        products.value.splice(itemIndex, 1);
    } catch (error) {
        console.log(error);
    }

    // return data;
}

onMounted(async () => {
    const wishlist = await getProducts();
    
    for (const element of wishlist) {
        const product = await apiService.fetchDataById(element.product_id);

        const wishlistObj = {
        product: product,
        id: element._id
        }

        products.value.push(wishlistObj)
    }

    console.log(products);
});

</script>

<template>
    <h1>Je verlanglijstje</h1>

    <div class="page_container">
        <div v-if="products.length === 0" class="empty_wish">
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
                    <img :src="product.product.data.data.assortment.item.pictures" alt="placeholder" />
                    <div class="item-info">
                        <div class="name">
                            <p>{{ product.product.data.data.assortment.item.art_name }}</p>
                            <button @click="removeItem(product.id)" class="remove">Verwijderen</button>
                        </div>
                        <p>{{ product.product.data.data.assortment.item.art_desc }}</p>
                        <p>€{{ product.product.data.data.assortment.item.price }}</p>
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