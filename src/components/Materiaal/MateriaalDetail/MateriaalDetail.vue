<script setup>
import { reactive, onMounted, computed, ref, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import MateriaalDetailMobile from './Parts/MateriaalDetailMobile.vue';
import MateriaalDetailDesktop from './Parts/MateriaalDetailDesktop.vue';

import apiService from '../../../../apiService';

const itemId = ref(null);
const itemData = ref(null);
const userData = ref(null);
const showFlagPopup = ref(false);
const showPopup = ref(false);
const confirmationShown = ref(false);
const formData = ref({
  name: '',
  email: '',
  flagreason: '',
  message: '',
});
const state = reactive({
  mobile: window.innerWidth < 1025,
  desktop: window.innerWidth >= 1025,
});

const extractItemIdFromUrl = () => {
  const currentUrl = window.location.href;
  const urlParts = currentUrl.split('/');
  const id = urlParts[urlParts.length - 1];
  itemId.value = id;
};

const fetchData = async () => {
  extractItemIdFromUrl();
  if (itemId.value) {
    try {
      const response = await apiService.fetchDataById(itemId.value);
      itemData.value = response.data;
      console.log('Item data:', itemId.value);
      console.log('Item data:', itemData.value);

      // Fetch user data based on user_id from the itemData
      if (itemData.value.data && itemData.value.data.assortment && itemData.value.data.assortment.user && itemData.value.data.assortment.user.user_id) {
        console.log('User id:', itemData.value.data.assortment.user.user_id);
        try {
          const userResponse = await apiService.getUserById(itemData.value.data.assortment.user.user_id);
          userData.value = userResponse.data;
          console.log('User data:', userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    } catch (error) {
      console.error('Error fetching item data:', error);
    }
  }
};

const openPopup = () => {
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
  showFlagPopup.value = false;
  confirmationShown.value = false;
};

const SendMessage = () => {
  let dataToSend = {
    name: formData.value.name,
    email: formData.value.email,
    message: formData.value.message,
  };

  if (showFlagPopup.value) {
    dataToSend.flagreason = formData.value.flagreason;
  }

  new Promise((resolve) => {
    setTimeout(() => {
      console.log('Data sent:', dataToSend);
      resolve('Success');
    }, 2000);
  })
    .then(() => {
      confirmationShown.value = true;
    })
    .catch((error) => {
      console.error('Failed to send data:', error);
    });
};

const checkMobile = () => {
  state.mobile = window.innerWidth < 1025;
  state.desktop = window.innerWidth >= 1025;
};

onMounted(() => {
  fetchData();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<template>
  <MateriaalDetailMobile v-if="state.mobile" :itemData="itemData" :showPopup="showPopup" :showFlagPopup="showFlagPopup" :confirmationShown="confirmationShown" :formData="formData" @openPopup="openPopup" @closePopup="closePopup" @sendMessage="SendMessage" @update:showFlagPopup="showFlagPopup = $event"/>
  <MateriaalDetailDesktop v-else :itemData="itemData" :userData="userData" :showPopup="showPopup" :showFlagPopup="showFlagPopup" :confirmationShown="confirmationShown" :formData="formData" @openPopup="openPopup" @closePopup="closePopup" @sendMessage="SendMessage" @update:showFlagPopup="showFlagPopup = $event"/>  
</template>

<style scoped>
  
</style>
