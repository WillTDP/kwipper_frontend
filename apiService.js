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
      const response = await apiClient2.post('/api/v1/two', twoAssortmentData);
      return response.data;
    } catch (error) {
      throw error;
    }
}

export async function createUser(UserData) {
  try {
    const response = await apiClient2.post('/api/v1/user', UserData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(loginData) {
  try {
      const response = await apiClient2.post('/api/v1/user/login', loginData);
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      window.location.href = '/';
      return response.data;
  } catch (error) {
      console.error('Error logging in:', error);
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
    return apiClient2.get('/api/v1/two');
  },
  getItemCount() {
    return apiClient2.get('/api/v1/two').length;
  },
  fetchDataById(id) {
    //return apiClient.get('/api/v1/two');
     // Construct the full URL by concatenating the base URL and the ID
  const fullUrl = `/api/v1/two/${id}`;
  // Return the Axios request using the constructed full URL
  return apiClient2.get(fullUrl);
  },
  getUserById(id){
    return apiClient.get('/api/v1/user/full/${id}');
  }
};
