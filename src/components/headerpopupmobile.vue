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
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #2B5740;
    height: auto;
    width: 185px;
    gap: 1em;
    padding: 1em;
    padding-left: 1.5em;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 10;
    border-radius: 0 0 6px 6px;
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

@media screen and (min-width: 720px) and (max-width: 811px){
    .header-popup {
        padding-left: 2.5em;
    }
}
</style>

