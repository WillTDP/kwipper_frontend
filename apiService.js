// src/apiService.js
import axios from 'axios';

// Zet de basis URL van de API
const apiClient = axios.create({
  baseURL: 'https://kwipper-back.onrender.com', // zet hier de webservice url
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // Example function to fetch data from your API
  fetchData() {
    return apiClient.get('/api/v1/user');
  },
  getUserById(){
    return apiClient.get('/api/v1/user/:id');
  }
};
