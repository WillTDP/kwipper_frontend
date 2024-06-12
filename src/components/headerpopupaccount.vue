<script setup>
import { onMounted, onBeforeUnmount, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';


function checkMobile() {
  state.mobile = window.innerWidth < 811;
}

const state = reactive({
  mobile: window.innerWidth < 811, // Initialize mobile state
  showPopup: false // Initialize showPopup state
});

onMounted(() => {
  window.addEventListener('resize', checkMobile); // Add event listener for window resize
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile); // Remove event listener for window resize
});

const store = useStore();

const handleLogout = async () => {
  
  try {
          await store.dispatch('logout');
          console.log('User logged out successfully');
          window.location.href = '/login';
        } catch (error) {
        console.error('Error logging out user:', error);
        // Handle error if needed
        }
};

const route = useRoute();

const userRoute2 = computed(() => {
  const userId = store.getters.userId; // get user from Vuex state
  if (userId) {
    return `/user/${userId}`;
  } else {  
    return '/login';
  }
});

const userRoute = computed(() => {
  const userId = store.getters.userId; // get user from Vuex state
  if (userId) {
    return {
      name: 'User',
      params: { id: userId }
    };
  } else {  
    return {
      name: 'login'
    };
  }
});

console.log(userRoute.value);

defineExpose({ handleLogout, userRoute });



</script>

<template>
    <div class="header-popup">
        <router-link v-if="route.name !== 'User'" :to="userRoute" class="link">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M16.7779 17.529V15.8722C16.7779 14.9934 16.4244 14.1506 15.7951 13.5291C15.1658 12.9077 14.3123 12.5586 13.4223 12.5586H6.71108C5.82112 12.5586 4.96761 12.9077 4.33831 13.5291C3.70901 14.1506 3.35547 14.9934 3.35547 15.8722V17.529" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.0666 9.24538C11.9198 9.24538 13.4222 7.76183 13.4222 5.93177C13.4222 4.10172 11.9198 2.61816 10.0666 2.61816C8.2133 2.61816 6.71094 4.10172 6.71094 5.93177C6.71094 7.76183 8.2133 9.24538 10.0666 9.24538Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Account</p>
        </router-link>
        <a v-else :href="userRoute2" class="link">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M16.7779 17.529V15.8722C16.7779 14.9934 16.4244 14.1506 15.7951 13.5291C15.1658 12.9077 14.3123 12.5586 13.4223 12.5586H6.71108C5.82112 12.5586 4.96761 12.9077 4.33831 13.5291C3.70901 14.1506 3.35547 14.9934 3.35547 15.8722V17.529" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.0666 9.24538C11.9198 9.24538 13.4222 7.76183 13.4222 5.93177C13.4222 4.10172 11.9198 2.61816 10.0666 2.61816C8.2133 2.61816 6.71094 4.10172 6.71094 5.93177C6.71094 7.76183 8.2133 9.24538 10.0666 9.24538Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Account</p>
        </a>
        <router-link to="/user/:id/cart" class="link" v-if="state.mobile">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <g clip-path="url(#clip0_2607_8578)">
                    <path d="M9 22.3164C9.55228 22.3164 10 21.8687 10 21.3164C10 20.7641 9.55228 20.3164 9 20.3164C8.44772 20.3164 8 20.7641 8 21.3164C8 21.8687 8.44772 22.3164 9 22.3164Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 22.3164C20.5523 22.3164 21 21.8687 21 21.3164C21 20.7641 20.5523 20.3164 20 20.3164C19.4477 20.3164 19 20.7641 19 21.3164C19 21.8687 19.4477 22.3164 20 22.3164Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 1.31641H5L7.68 14.7064C7.77144 15.1668 8.02191 15.5804 8.38755 15.8747C8.75318 16.169 9.2107 16.3254 9.68 16.3164H19.4C19.8693 16.3254 20.3268 16.169 20.6925 15.8747C21.0581 15.5804 21.3086 15.1668 21.4 14.7064L23 6.31641H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_2607_8578">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.316406)"/>
                    </clipPath>
                </defs>
            </svg>
            <p>Winkelmandje</p>
        </router-link>
        <!----<router-link to="/user/:id/catalogus" class="link">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path d="M3.01337 5.40504C4.12532 5.40504 5.02674 4.51491 5.02674 3.41688C5.02674 2.31884 4.12532 1.42871 3.01337 1.42871C1.90142 1.42871 1 2.31884 1 3.41688C1 4.51491 1.90142 5.40504 3.01337 5.40504Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.0802 4.41096L16.1003 1.42871M16.1003 1.42871L19.1203 4.41096M16.1003 1.42871V13.3577M13.0802 9.38137L16.1003 6.39912L19.1203 9.38137M16.1003 13.3577H6.03342L1 21.3104H21.1337L16.1003 13.3577ZM7.04011 13.3577V21.3104M8.04679 13.3577L13.0802 21.3104" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Mijn Materiaallijst</p>
        </router-link>-->
        <router-link to="/user/:id/wishlist" class="link">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 26 22" fill="none">
                <path d="M22.3037 2.80846C21.7396 2.25123 21.0699 1.80919 20.3329 1.5076C19.5958 1.20601 18.8057 1.05078 18.0079 1.05078C17.21 1.05078 16.42 1.20601 15.6829 1.5076C14.9458 1.80919 14.2761 2.25123 13.7121 2.80846L12.5415 3.96439L11.3709 2.80846C10.2316 1.68341 8.68639 1.05136 7.07516 1.05136C5.46393 1.05136 3.91869 1.68341 2.77937 2.80846C1.64006 3.93352 1 5.45941 1 7.05048C1 8.64154 1.64006 10.1674 2.77937 11.2925L3.94995 12.4484L12.5415 20.9324L21.1331 12.4484L22.3037 11.2925C22.868 10.7355 23.3156 10.0742 23.621 9.34635C23.9264 8.61849 24.0836 7.83834 24.0836 7.05048C24.0836 6.26261 23.9264 5.48246 23.621 4.7546C23.3156 4.02675 22.868 3.36544 22.3037 2.80846Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Verlanglijstje</p>
        </router-link>
        <router-link to="/user/:id/settings" class="link">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M16.7779 17.3962V15.7394C16.7779 14.8606 16.4244 14.0177 15.7951 13.3963C15.1658 12.7749 14.3123 12.4258 13.4223 12.4258H6.71108C5.82112 12.4258 4.96761 12.7749 4.33831 13.3963C3.70901 14.0177 3.35547 14.8606 3.35547 15.7394V17.3962" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.0666 9.11257C11.9198 9.11257 13.4222 7.62902 13.4222 5.79896C13.4222 3.9689 11.9198 2.48535 10.0666 2.48535C8.2133 2.48535 6.71094 3.9689 6.71094 5.79896C6.71094 7.62902 8.2133 9.11257 10.0666 9.11257Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Instellingen</p>
        </router-link>
        <button @click="handleLogout">Log Uit</button>
    </div>
</template>

<style scoped>

.header-popup {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    right: 0;
    background-color: #2B5740;
    height: auto;
    width: 185px;
    padding: 1em;
    padding-right: 1.5em;
    text-align: right;
    align-items: flex-end;
    justify-content: flex-end;
    z-index: 10;
    border-radius: 0 0 6px 6px;
}

.link {
    text-decoration: none;
    color: #F0F2F1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
}

button {
    background-color: #FF4D00;
    color: #F0F2F1;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 1.5em;
}

@media screen and (min-width: 811px){
    .header-popup {
        display: flex;
        left: 75%;
    }

    
}

@media screen and (min-width: 720px) and (max-width: 811px){
    .header-popup {
        padding-right: 2.5em;
    }
}
</style>

