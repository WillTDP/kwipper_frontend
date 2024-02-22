<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
    <header>
        <div class="header">
            <div class="header__logo">
                <router-link to="/"><img src="../assets/logo.png" alt="Kwipper logo" class="logo" /></router-link>
            </div>
            <div class="links">
                <router-link class="materiaal" to="/materiaal">Materiaal</router-link>
                <router-link class="verhuurder" to="/verhuurder">Word verhuurder</router-link>
            </div>
            <div class="header__text">
                <p>© 2021 Kwipper</p>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background-color: #2B5740;
    box-shadow: 0 0 1em #00000022;

}

.header__logo {
    height: 6em;
    padding: 1.5em;
}


.materiaal {
    padding: 1em;
    text-decoration: none;
}

.verhuurder {
    padding: 1em;
    color: white;
    text-decoration: none;
}

</style>

