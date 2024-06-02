<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { reactive, onMounted, onBeforeUnmount, watch, ref, defineEmits } from 'vue';
import headerpopupmobile from './headerpopupmobile.vue';
import headerpopupaccount from './headerpopupaccount.vue';
import store from '../store';


const route = useRoute()

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

function checkMobile() {
  state.mobile = window.innerWidth < 811;
}

function toggleAccountPopup() {
  state.showAccountPopup = !state.showAccountPopup;

  // Check if the popup is shown
  if (state.showAccountPopup) {
    // If shown, add event listener for clicks outside the popup
    document.addEventListener('click', handleClickOutside);
  }

  console.log(state.showAccountPopup);
}

function togglePopup() {
  state.showPopup = !state.showPopup;

  // Check if the popup is shown
  if (state.showPopup) {
    // If shown, add event listener for clicks outside the popup
    document.addEventListener('click', handleClickOutside);
  }

  console.log(state.showPopup);
}

function handleClickOutside(event) {
    let targetElement = event.target;
    // Check if the clicked element or any of its ancestors have the class 'header-popup'
    while (targetElement) {
        if (targetElement.classList && (targetElement.classList.contains('header-popup') || targetElement.classList.contains('menu-button') || targetElement.classList.contains('account-icon'))) {
            // Click occurred inside the 'header-popup' component, do nothing
            console.log("click inside");
            return;
        }
        targetElement = targetElement.parentNode;
    }
    // Click occurred outside the 'header-popup' component, close the popup
    if (state.showPopup || state.showAccountPopup) {
        state.showPopup = false;
        state.showAccountPopup = false;
        console.log("click outside");
        document.removeEventListener('click', handleClickOutside);
    }
}
watch(route, () => {
  state.showPopup = false
  state.showAccountPopup = false
})

let selectedNameValue = ref(null);

const emit = defineEmits(['filterByName']);

watch(selectedNameValue, (newVal) => {
    emit('filterByName', newVal);
});

const router = useRouter();

const navigateToMateriaal = () => {
    if (selectedNameValue.value === null) {
    } else {
        router.push({ name: 'materiaal', query: { name: selectedNameValue.value } });
    }
};

let isLoggedIn = store.getters.isAuthenticated;
if (!isLoggedIn) {
  // User is not logged in
  console.log("User is not logged in");
} else {
  // User is logged in
  console.log("User is logged in");
}

</script>

<template>
    <header>
        <div class="first_block">
            <div class="header__logo">
                <router-link to="/"><img src="/logo.svg" alt="Kwipper logo" class="logo" /></router-link>
            </div>
            <div v-if="state.mobile">
            </div>
            <div class="links" v-else>
                <router-link active-class="active" class="link materiaal" to="/materiaal">Materiaal</router-link>
                <router-link active-class="active" class="link verhuurder" to="/zoekertje">Word verhuurder</router-link>
            </div>
        </div>
        <div class="second_block">
            <div class="searchbar-container">
                <div class="input-icon">
                    <img src="../../public/search.svg" @click="navigateToMateriaal" class="icon" />
                    <input type="text" class="search-input" name="searchbar" placeholder="Naar wat ben je op zoek?" v-model="selectedNameValue"  @keydown.enter="navigateToMateriaal">
                </div>
            </div>
            <div class="menu-login">
                <div v-if="state.mobile" class="menu-button" @click="togglePopup($event)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="18" viewBox="0 0 31 18" fill="none">
                        <rect width="31" height="3.6" rx="1.8" fill="#D9D9D9"/>
                        <rect y="7.2002" width="31" height="3.6" rx="1.8" fill="#D9D9D9"/>
                        <rect y="14.3999" width="31" height="3.6" rx="1.8" fill="#D9D9D9"/>
                    </svg>
                    <p class="menu-txt">Menu</p>
                </div>
                <div v-if="state.mobile">
                </div>
                <div class="other-icons" v-else>
                    <router-link class="cart" to="/winkelmand">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                    <div class="Private_message">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none">
                            <path d="M14.4663 24.316L14.4639 24.316C13.1185 24.3191 11.7786 24.1445 10.479 23.7966L10.1091 23.6976L9.76771 23.871C8.884 24.3197 6.84833 25.1962 3.43768 25.8418C3.96377 24.3988 4.40406 22.6814 4.55779 21.0711L4.6025 20.6029L4.27029 20.2699C2.21788 18.2124 1 15.5479 1 12.658C1 6.34072 6.89993 1 14.4663 1C22.0326 1 27.9325 6.34072 27.9325 12.658C27.9325 18.9753 22.0326 24.316 14.4663 24.316ZM10.2204 24.7626C11.6052 25.1333 13.0328 25.3193 14.4663 25.316L2.66179 26.9941C6.74128 26.325 9.16619 25.2979 10.2204 24.7626Z" fill="#F0F2F1" stroke="#F0F2F1" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
                <div class="account-icon" @click="toggleAccountPopup($event)" v-if="isLoggedIn">
                    <img src="../assets/verlengkabel.png" alt="profile_icon">
                </div>
                <div class="login" v-else>
                    <router-link class="login_txt" to="/login">Inloggen</router-link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.44444 7.55556C9.44444 5.5517 10.2405 3.62991 11.6574 2.21297C13.0744 0.796029 14.9961 0 17 0C19.0039 0 20.9256 0.796029 22.3426 2.21297C23.7595 3.62991 24.5556 5.5517 24.5556 7.55556C24.5556 9.55941 23.7595 11.4812 22.3426 12.8981C20.9256 14.3151 19.0039 15.1111 17 15.1111C14.9961 15.1111 13.0744 14.3151 11.6574 12.8981C10.2405 11.4812 9.44444 9.55941 9.44444 7.55556ZM9.44444 18.8889C6.93962 18.8889 4.53739 19.8839 2.76621 21.6551C0.995037 23.4263 0 25.8285 0 28.3333C0 29.8362 0.597022 31.2776 1.65973 32.3403C2.72243 33.403 4.16377 34 5.66667 34H28.3333C29.8362 34 31.2776 33.403 32.3403 32.3403C33.403 31.2776 34 29.8362 34 28.3333C34 25.8285 33.005 23.4263 31.2338 21.6551C29.4626 19.8839 27.0604 18.8889 24.5556 18.8889H9.44444Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    </header>
    <headerpopupmobile v-if="state.showPopup"/>
    <headerpopupaccount v-if="state.showAccountPopup"/>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    background-color: #2B5740;
    height: 64px;
}

.header__logo {
    padding: 1.5em;
    display: flex;
}

.logo {
    width: 100px;
    height: auto;
    display: flex;
}

.first_block {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}

.second_block {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 150%;
}


.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  text-decoration: none;
  color: #333;
}

.materiaal {
    padding: 1em;
    text-decoration: none;
    color: #F0F2F1;
}

.verhuurder {
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    color: #2B5740;
    text-decoration: none;
    margin: 1em;
    background-color: #F0F2F1;
    border-radius: 6px;
    white-space: nowrap;
    flex-wrap: nowrap;
}

.input-icon {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: right;
}

/*.input-icon::before {
  content: url('../../public/search.svg'); /* Replace with your icon path */
  /*position: absolute;
  right: 5px; /* Adjust as needed */
  /*top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}*/

.icon {
    position: absolute;
    display: flex;
    cursor: pointer;
    right: 2%;
}

.searchbar-containter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
}
.search-input {
    padding: 0.5em;
    border: none;
    border-radius: 6px;
    width: 100%;
    min-width: 330px;
    box-sizing: border-box;
    background-color: #F0F2F1;
    color: #242424;
    margin: 0 auto;
}

.menu-login {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    width: 100%;
}

.other-icons {
    display: flex;
    gap: 24px;
}


.login {
    display: flex;
    align-items: center;
}

.login_txt {
    padding: 1em;
    text-decoration: none;
    color: #F0F2F1;
    font-size: 16px;
}

.account-icon img{
    display: flex;
    align-items: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    cursor: pointer;
}

@media screen and (max-width: 811px) {
    header {
        flex-direction: column;
        height: auto;
        width: 100%;
    }
    
    .first_block {
        display: none;
    }

    .second_block {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        width: 90%;
    }

    .searchbar-container {
        display: inline-block;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-bottom: 1em;
    }

    .input-icon {
        display: flex;
    }

    /*.input-icon::before {
        right: 1%;
    }*/

    .search-input {
        width: 100%;
        box-sizing: border-box;
    }

    .menu-login {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .menu-button {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        gap: 1em;
        cursor: pointer;
    }

    .menu-txt {
        color: #F0F2F1;
        font-weight: medium;
        font-size: 16px;
    }

    .logo {
        display: none;
    }
}
</style>

