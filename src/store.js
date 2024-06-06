// src/store.js
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    token: localStorage.getItem('authToken') || '',
    userId: localStorage.getItem('userId') || null // retrieve userId from localStorage
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
    }
  },
  actions: {
    async login({ commit }, loginData) {
      const response = await axios.post('http://localhost:3000/api/v1/user/login', loginData);
      const token = response.data.token;
      const user = response.data.user;
      const userId = user._id;
      console.log("user:", user);
      commit('setToken', token);
      commit('setUser', user);
      commit('setUserId', userId);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout({ commit }) {
      commit('clearAuth');
      delete axios.defaults.headers.common['Authorization'];
    },
  },
  getters: {
    isAuthenticated: state => !!state.token,
    userId: state => state.userId
  }
});

export default store;