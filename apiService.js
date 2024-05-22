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



export default {
  // Example function to fetch data from your API
  fetchData() {
    //return apiClient.get('/api/v1/two');
    return apiClient.get('/api/v1/two');
  },
  getItemCount() {
    return apiClient2.get('/api/v1/two').length;
  },
  fetchDataById(id) {
    //return apiClient.get('/api/v1/two');
    return apiClient2.get('/api/v1/two/:id');
  },
  getUserById(id){
    return apiClient.get('/api/v1/user/full/${id}');
  }
};
