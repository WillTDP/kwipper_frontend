<script setup>
import { RouterLink } from 'vue-router';
import { reactive, onMounted, onBeforeUnmount } from 'vue';

const state = reactive({
  mobile: window.innerWidth < 811
});

onMounted(() => {
  window.addEventListener('resize', checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
});

function checkMobile() {
  state.mobile = window.innerWidth < 811;
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
                <router-link active-class="active" class="link verhuurder" to="/verhuurder">Word verhuurder</router-link>
            </div>
        </div>
        <div class="second_block">
            <div class="searchbar-container">
                <div class="input-icon">
                    <input type="text" class="search-input" name="searchbar" placeholder="Naar wat ben je op zoek?">
                </div>
            </div>
            <div class="menu-login">
                <div v-if="state.mobile" class="menu-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="18" viewBox="0 0 31 18" fill="none">
                        <rect width="31" height="3.6" rx="1.8" fill="#D9D9D9"/>
                        <rect y="7.2002" width="31" height="3.6" rx="1.8" fill="#D9D9D9"/>
                        <rect y="14.3999" width="31" height="3.6" rx="1.8" fill="#D9D9D9"/>
                    </svg>
                    <p class="menu-txt">Menu</p>
                </div>
                <div class="login">
                    <router-link class="login_txt" to="/login">Inloggen</router-link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.44444 7.55556C9.44444 5.5517 10.2405 3.62991 11.6574 2.21297C13.0744 0.796029 14.9961 0 17 0C19.0039 0 20.9256 0.796029 22.3426 2.21297C23.7595 3.62991 24.5556 5.5517 24.5556 7.55556C24.5556 9.55941 23.7595 11.4812 22.3426 12.8981C20.9256 14.3151 19.0039 15.1111 17 15.1111C14.9961 15.1111 13.0744 14.3151 11.6574 12.8981C10.2405 11.4812 9.44444 9.55941 9.44444 7.55556ZM9.44444 18.8889C6.93962 18.8889 4.53739 19.8839 2.76621 21.6551C0.995037 23.4263 0 25.8285 0 28.3333C0 29.8362 0.597022 31.2776 1.65973 32.3403C2.72243 33.403 4.16377 34 5.66667 34H28.3333C29.8362 34 31.2776 33.403 32.3403 32.3403C33.403 31.2776 34 29.8362 34 28.3333C34 25.8285 33.005 23.4263 31.2338 21.6551C29.4626 19.8839 27.0604 18.8889 24.5556 18.8889H9.44444Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
    </header>
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

.link.active {
  color: #f00;
}

.materiaal {
    padding: 1em;
    text-decoration: none;
    color: #F0F2F1;
}

.verhuurder {
    padding: 0.5em;
    color: #2B5740;
    text-decoration: none;
    margin: 1em;
    background-color: #F0F2F1;
    border-radius: 6px;
    white-space: nowrap;
    flex-wrap: nowrap;
}

.input-icon {
  position: relative;
}

.input-icon::before {
  content: url('../../public/search.svg'); /* Replace with your icon path */
  position: absolute;
  right: 5px; /* Adjust as needed */
  top: 50%;
  transform: translateY(-50%);
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

    .input-icon::before {
        right: 1%;
    }

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

