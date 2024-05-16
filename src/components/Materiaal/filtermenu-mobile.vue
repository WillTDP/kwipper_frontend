<script setup>
    import { ref } from 'vue';
    const isPressed1 = ref(false);
    const isPressed2 = ref(false);
</script>

<template>
    <div class="filtermenu-mobile">
        <div class="filtermenu">
            <div class="filtermenu-item">
                <div class="filter-button" @click="isPressed1 = !isPressed1">
                    <p>Filters</p>
                    <svg :class="{ 'rotate': isPressed1 }" xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                        <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="#F0F2F1"/>
                    </svg>
                </div>
            </div>
            <div class="filtermenu-item">
                <div class="filter-button" @click="isPressed2 = !isPressed2">
                    <p>Categorieën</p>
                    <svg :class="{ 'rotate': isPressed2 }" xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                        <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="#F0F2F1"/>
                    </svg>
                </div>               
            </div>
        </div>
    </div>

</template>

<style scoped>
.filtermenu-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 64px;
    background-color: #2B5740;
}

.filtermenu {
    display: flex;
    justify-content: flex-start;
    gap: 2em;
    align-items: left;
    width: 100%;
    max-width: 1280px;
    padding: 1.5em;
}

.filtermenu-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

.filter-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    color: #F0F2F1;
}

.rotate {
  transition: transform 0.3s ease;
  transform: rotate(180deg);
}

</style>