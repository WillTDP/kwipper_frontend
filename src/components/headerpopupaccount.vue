<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="header-popup">
        <router-link to="/" class="link">Home</router-link>
        <router-link to="/materiaal" class="link">Catalogus</router-link>
        <router-link to="/verhuurder" class="link">Word verhuurder</router-link>
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
    gap: 1em;
    padding: 1em;
    padding-left: 1.5em;
    text-align: right;
    align-items: flex-end;
    justify-content: flex-end;
    z-index: 10;
    border-radius: 0 0 6px 6px;
}

.link {
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

