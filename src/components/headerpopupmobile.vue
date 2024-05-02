<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="header-popup">
        <router-link to="/" class="Home">Home</router-link>
        <router-link to="/materiaal" class="Catalogus">Catalogus</router-link>
        <router-link to="/verhuurder" class="Verhuurder">Word verhuurder</router-link>
    </div>
</template>

<style scoped>

.header-popup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #2B5740;
    height: 100%;
    width: 185px;
    gap: 1em;
    padding: 1em;
    padding-left: 1.5em;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
}

.Home {
    text-decoration: none;
    color: #F0F2F1;
}

.Catalogus {
    text-decoration: none;
    color: #F0F2F1;
}

.Verhuurder {
    text-decoration: none;
    color: #F0F2F1;
}

@media screen and (min-width: 811px){
    .header-popup {
        display: none;
    }
    
}

@media screen and (min-width: 720px) and (max-width: 810px){
    .header-popup {
        padding-left: 2.5em;
    }
}
</style>

