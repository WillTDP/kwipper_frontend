// src/store.js
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    token: localStorage.getItem('authToken') || '',
    userId: null
  },
  mutations: {
    setUser(state, user) {
      console.log('setUser mutation called with', user);
      state.user = user;
    },
    setUserId(state, userId) {
      console.log('setUserId mutation called with', userId);
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
    async getUserData({ commit, state }) {
      console.log("getUserData called with userId:", state.userId);
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/user/${state.userId}`); // replace with your API endpoint
        console.log("getUserData response:", response.data);
        commit('setUser', response.data);
        console.log("User data after commit:", state.user); // log the user data after commit
      } catch (error) {
        console.error("Failed to get user data", error);
      }
    },
  },
  getters: {
    isAuthenticated: state => !!state.token,
    user: state => state.user
  }
});

export default store;