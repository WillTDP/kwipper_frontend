 // src/store.js
import { createStore } from 'vuex';
import axios from 'axios';


const store = createStore({
  state: {
    user: null,
    token: localStorage.getItem('authToken') || '',
    userId: localStorage.getItem('userId') || null, // retrieve userId from localStrage
    shopping_cart: (() => {
      try {
        return JSON.parse(localStorage.getItem('shopping_cart'));
      } catch (error) {
        return null;
      }
    })() || null,  
    wish_list: localStorage.getItem('wish_list') || null
  },
  mutations: {
    setUser(state, user) {
      console.log('setUser mutation called with', user);
      state.user = user;
    },
    setUserId(state, userId) {
      console.log('setUserId mutation called with', userId);
      localStorage.setItem('userId', userId);
      state.userId = userId;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('authToken', token);
    },
    clearAuth(state) {
      state.user = null;
      state.token = '';
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('shopping_cart');
      localStorage.removeItem('wish_list');
    },
    setShoppingCart(state, shopping_cart) {
      state.shopping_cart = shopping_cart;
      localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart));
    },
    setWishList(state, wish_list) {
      state.wish_list = wish_list;
      localStorage.setItem('wish_list', wish_list);
    }
  },
  actions: {
    async login({ commit }, loginData) {
      const response = await axios.post('http://localhost:3000/api/v1/user/login', loginData);
      const token = response.data.token;
      const user = response.data.user;
      const userId = user._id;

      const shopping_cart = response.data.shopping_cart;
      const wish_list = response.data.wish_list;

      console.log("user:", user);
      commit('setToken', token);
      commit('setUser', user);
      commit('setUserId', userId);
      commit('setShoppingCart', shopping_cart);
      commit('setWishList', wish_list);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout({ commit }) {
      commit('clearAuth');
      delete axios.defaults.headers.common['Authorization'];
    },
  },
  getters: {
    isAuthenticated: state => !!state.token,
    userId: state => state.userId,
    shopping_cart: state => state.shopping_cart,
    shopping_cart_count: state => {
      if (state.shopping_cart) {
        return state.shopping_cart.length;
      } else {
        return 0;
      }
    },
    wish_list: state => state.wish_list,
    wish_list_count: state => {
      if (state.wish_list) {
        return state.wish_list.length;
      } else {
        return 0;
      }
    }
  }
});

export default store;