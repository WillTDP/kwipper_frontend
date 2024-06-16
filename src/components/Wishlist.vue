<script setup>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import apiService from '../../apiService';
import '@fortawesome/fontawesome-free/css/all.css'

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
            
            <div class="items">

                <div v-for="product in products" :key="product.id" class="item">
                    <div class="image">
                        <img :src="product.product.data.data.assortment.item.pictures" alt="placeholder" />
                    </div>
                    <div class="item-info">
                        <h3>{{ product.product.data.data.assortment.item.art_name }}</h3>
                        <p>Vanaf €{{ product.product.data.data.assortment.item.price }} per dag</p>
                        <p>{{ product.product.data.data.assortment.item.art_desc }}</p>
                    </div>
                    <div class="user-info">
                        <p><i class="fas fa-user" id="person"></i>{{ product.product.data.data.assortment.user.posted_by }}</p>
                        <button @click="removeItem(product.id)" class="remove">
                            <i class="fas fa-trash"></i>
                        </button>
                        <router-link :to="'/products/' + product.product.data.data.assortment._id">
                            <button class="detail">Bekijk</button>
                        </router-link>
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
    width: 90%; /* Ensure the container does not shrink excessively */
    margin: 0 auto;
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
    padding: 10px 20px; /* Add padding for better button appearance */
    border: none;
    border-radius: 6px;
    cursor: pointer; /* Add cursor pointer for better UX */
}

.items {
    width: 100%; /* Ensure it takes full width of the parent container */
}

.item {
    background-color: #f0f2f1;
    display: flex;
    align-items: center;
    padding: 20px;
    width: 80%;
    border-radius: 9px;
    margin-bottom: 9px;
    position: relative; /* Ensure the button is positioned relative to the item */
}

.image {
    margin-right: 20px;
}

.image img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 9px;
}

.item-info {
    flex: 1;
    margin-right: 20px;
}

.user-info {
    display: flex;
    align-items: center;
}

.user-info p {
    margin-right: 10px;
    display: flex;
    align-items: center;
}

#person {
    margin-right: 10px;
}

.item-info h3 {
    color: #2b5740;
    margin: 0 0 10px 0; /* Add margin for better spacing */
}

.detail {
    background-color: #1c98d6;
    color: white;
    padding: 10px 15px; /* Add padding for better button appearance */
    border: none;
    border-radius: 9px;
    cursor: pointer; /* Add cursor pointer for better UX */
    margin-left: 10px; /* Space between remove and detail button */
}

.remove {
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 9px;
    position: absolute; /* Ensure it's relative to the item */
    top: 10px; /* Provide some space from the top */
    right: 10px; /* Provide some space from the right */
    padding: 5px 10px; /* Add padding for better button appearance */
    cursor: pointer; /* Add cursor pointer for better UX */
}

.remove:hover {
    background-color: #cc0000; /* Slightly different hover color */
}
</style>
