// src/store.js
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    token: localStorage.getItem('authToken') || ''
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
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
      const response = await axios.post('https://kwipper-back.onrender.com/api/v1/user/login', loginData);
      const token = response.data.token;
      const user = response.data.user;
      commit('setToken', token);
      commit('setUser', user);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout({ commit }) {
      commit('clearAuth');
      delete axios.defaults.headers.common['Authorization'];
    },
    async fetchUser({ commit }) {
      if (!state.token) return;
      const response = await axios.get('https://kwipper-back.onrender.com/api/v1/user/me');
      const user = response.data;
      commit('setUser', user);
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    user: state => state.user
  }
});

export default store;
