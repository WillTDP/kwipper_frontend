// src/apiService.js
import axios from 'axios';

// Zet de basis URL van de API
const apiClient = axios.create({
  baseURL: 'https://kwipper-back.onrender.com', // zet hier de webservice url
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiClient2 = axios.create({
    baseURL: 'http://localhost:3000/', // zet hier de webservice url
    headers: {
      'Content-Type': 'application/json',
    }, 
});

export async function createAssortment(twoAssortmentData) {
    try {
      const response = await apiClient.post('/api/v1/two', twoAssortmentData);
      return response.data;
    } catch (error) {
      throw error;
    }
}

export async function createUser(UserData) {
  try {
    const response = await apiClient.post('/api/v1/user', UserData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(loginData) {
  try {
      const response = await apiClient.post('/api/v1/user/login', loginData);
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      window.location.href = '/';
      return response.data;
  } catch (error) {
      console.error('Error logging in:', error);
      throw error;
  }
}

export async function addItemToWishlist(itemId, userId) {
  try {

    const response = await apiClient.post(`/api/v1/user/${userId}/wishlist`, {
      product_id: itemId
    });
    return response.data.data.wishlist;

  } catch (error) {
    console.error('Error adding item to wishlist:', error);
    throw error;
  }
}

export async function removeWishlistItem(itemId, userId) {
  try {
    const response = await apiClient.delete(`/api/v1/user/${itemId}/wishlist/${userId}`);
    return response.data.data.shoppingCart;

  } catch (error) {
    console.error('Error removing item from wishlist:', error);
    throw error;
  }
}

export async function getWishlist(userId) {

  try {

    const response = await apiClient.get(`/api/v1/user/$wishlist`);
    return response.data.data.wishlist;

  } catch (error) {
    console.error('Error getting shopping cart:', error);
    throw error;
  }

}

export async function addItemToCart(itemId, userId, quantity) {
  try {

    const response = await apiClient.post(`/api/v1/user/${userId}/shopping-cart`, {
      product_id: itemId,
      amount: quantity
    });
    return response.data.data.shoppingCart;

  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
}

export async function getShoppingCart(userId) {

  try {

    const response = await apiClient.get(`/api/v1/user/$shopping-cart`);
    return response.data.data.shoppingCart;

  } catch (error) {
    console.error('Error getting shopping cart:', error);
    throw error;
  }

}

export async function removeItemFromCart(itemId, userId) {
  
    try {
      const response = await apiClient.delete(`/api/v1/user/${itemId}/shopping-cart/${userId}`);
      return response.data.data.shoppingCart;
  
    } catch (error) {
      console.error('Error removing item from cart:', error);
      throw error;
    }
  
  }

// Axios interceptor to attach token to requests
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);




export default {
  // Example function to fetch data from your API
  fetchData() {
    //return apiClient.get('/api/v1/two');
    return apiClient.get('/api/v1/two');
  },
  getItemCount() {
    return apiClient.get('/api/v1/two').length;
  },
  fetchDataById(id) {
    //return apiClient.get('/api/v1/two');
     // Construct the full URL by concatenating the base URL and the ID
  const fullUrl = `/api/v1/two/${id}`;
  // Return the Axios request using the constructed full URL
  return apiClient.get(fullUrl);
  },
  getUserByIdsmall(id){
    return apiClient.get(`/api/v1/user/${id}`);
  },
  getUserById(id){
    return apiClient.get(`/api/v1/user/full/${id}`);
  },
  getAssortmentbyUser(id){
    return apiClient.get(`/api/v1/two/user/${id}`);
  },
  getUserCart(id){
    return apiClient.get(`/api/v1/user/${id}/shopping-cart`);
  },
  removeItemFromCart(itemId, userId){
    return apiClient.delete(`/api/v1/user/${itemId}/shopping-cart/${userId}`);
  },
  getUserWishlist(id){
    return apiClient.get(`/api/v1/user/${id}/wishlist`);
  },removeWishlistItem(itemId, userId){
    return apiClient.delete(`/api/v1/user/${itemId}/wishlist/${userId}`);
  },
 
};
