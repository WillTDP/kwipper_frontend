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

export async function createAssortment(assortmentData) {
    try {
      const response = await axios.post('/api/v1/assortments', assortmentData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

export default {
  // Example function to fetch data from your API
  fetchData() {
    return apiClient.get('/api/v1/user');
    //return apiClient2.get('/api/v1/two');
  },
  getUserById(id){
    return apiClient.get('/api/v1/user/full/${id}');
  }
};
