<script setup>
    import { ref, watch ,defineEmits } from 'vue';

    const isPressed1 = ref(false);
    const isPressed2 = ref(false);

    let selectedPriceValue = ref(null);
    let selectedConditionValue = ref(null);

    const emit = defineEmits(['filterByCondition', 'filterByPrice', 'filter']);

    const toggleButton1 = () => {
        if (isPressed1.value) {
            isPressed1.value = false;
        } else {
            isPressed1.value = true;
            isPressed2.value = false;
        }
        };

        const toggleButton2 = () => {
        if (isPressed2.value) {
            isPressed2.value = false;
        } else {
            isPressed1.value = false;
            isPressed2.value = true;
        }
    };

    const filter = (category) => {
        emit('filter', category);
        isPressed1.value = false;
        isPressed2.value = false;
    };

    watch(selectedPriceValue, (newVal) => {
        // Implement your filter logic here
        emit('filterByPrice', newVal);

    });

    watch(selectedConditionValue, (newVal) => {
        // Implement your filter logic here
        emit('filterByCondition', newVal);

    });
</script>

<template>
    <div class="filtermenu-mobile">
        <div class="filtermenu">
            <div class="filtermenu-item">
                <div class="filter-button" @click="toggleButton1">
                    <p>Filters</p>
                    <svg :class="{ 'rotate': isPressed1 }" xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                        <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="#F0F2F1"/>
                    </svg>
                </div>
            </div>
            <div class="filtermenu-item">
                <div class="filter-button" @click="toggleButton2">
                    <p>Categorieën</p>
                    <svg :class="{ 'rotate': isPressed2 }" xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                        <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="#F0F2F1"/>
                    </svg>
                </div>               
            </div>
        </div>
        <div class="filter-menu-categories" v-if="isPressed1">
            <div class="segment">
                <p class="title">Locatie</p>
                <input type="text"></input>
            </div>
            <div class="segment">
                <p class="title">Soort Contact</p>
                <input type="text"></input>
            </div>
            <div class="segment">
                <p class="title">Prijs</p>
                <select class="input-limited" v-model="selectedPriceValue">
                    <option value="" disabled selected>Sorteer op prijs</option>
                    <option value="">Reset</option>
                    <option value="0-5">€0-€5</option>
                    <option value="5-10">€5-€10</option>
                    <option value="10-20">€10-€20</option>
                    <option value="20-30">€20-€30</option>
                    <option value="30-40">€30-€40</option>
                    <option value="40-50">€40-€50</option>
                    <option value="50-100">€50-€100</option>
                    <option value="100-200">€100-€200</option>
                </select>
            </div>
            <div class="segment">
                <p class="title">Afstand</p>
                <input type="text"></input>
            </div>
            <div class="segment">
                <p class="title">Huren van</p>
                <input type="date" class="input" placeholder="">
            </div>
            <div class="segment">
                <p class="title">Huren tot</p>
                <input type="date" class="input" placeholder="">
            </div>
            <div class="segment">
                <p class="title">Conditie</p>
                <select class="input limited" v-model="selectedConditionValue">
                    <option value="" disabled selected>Sorteer op</option>
                    <option value="">Reset</option>
                    <option value="3">Matig</option>
                    <option value="4">Goed</option>
                    <option value="5">Perfect</option>
                </select>
            </div>
        </div>
        <div class="filter-menu-categories" v-if="isPressed2">
            <div class="segment">
                <p class="title">Keukenmateriaal</p>
                <p class="link" @click="filter('kookpotten')">Kookpotten</p>
                <p class="link" @click="filter('servies')">Servies</p>
                <p class="link" @click="filter('bestek')">Bestek</p>
            </div>
            <div class="segment">
                <p class="title">Legermateriaal</p>
                <p class="link" @click="filter('legertenten')">Legertenten</p>
                <p class="link" @click="filter('seniorentent')">Seniortenten</p>
                <p class="link" @click="filter('patrouilletenten')">Patrouilletenten</p>
            </div>
            <div class="segment">
                <p class="title">Kampmateriaal</p>
                <p class="link" @click="filter('gasbakken')" >Gasbakken en flessen</p>
                <p class="link" @click="filter('tent')">Tenten</p>
                <p class="link" @click="filter('zeilen')">Zeilen</p>
            </div>
            <div class="segment">
                <p class="title">Tafels en Banken</p>
                <p class="link" @click="filter('uitklaptafel')">Uitklaptafels</p>
                <p class="link" @click="filter('uitklapbanken')" >Uitklapbanken en stoelen</p>
                <p class="link" @click="filter('slaapmateriaal')" >Slaapmateriaal</p>
            </div>
        </div>
    </div>

</template>

<style scoped>
.filtermenu-mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #2B5740;
}

.filtermenu {
    display: flex;
    justify-content: flex-start;
    gap: 2em;
    width: 100%;
    max-width: 1280px;
    padding-left: 2.5em;
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

.filter-menu-categories {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    text-align: left;
    gap: 1em;
    width: 100%;
    max-width: 375px;
    background-color: #2B5740;
    padding-bottom: 2em;
}
.filter-menu-categories > * {
    flex-basis: 100%;
}
@media (max-width: 413px) {
    .filter-menu-categories > * {
        flex-basis: calc(50% - 1em);
        max-width: 375px;
    }
}

.segment {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
}

.input-limited {
    width: 75%;
}

.limited {
    width: 75%;
}

.title {
    color: #F0F2F1;
    font-weight: 700;
}

.link {
    color: #F0F2F1;
    font-weight: 500;
    cursor: pointer;
}

input {
    width: 125px;
}
</style>