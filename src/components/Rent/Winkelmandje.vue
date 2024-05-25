<script setup>

</script>

<template>
    <h1>Winkelmandje</h1>
    <div class="items">
        <div class="item">
            <img src="../../assets/fouragetent.png" alt="placeholder" />
            <div class="item-info">
                <div class="name">
                    <p>Productnaam</p>
                    <button class="remove">Verwijderen</button>
                </div>
                <div class="item-amount">
                <select class="input-limited" v-model="selectedPriceValue">
                    <option value="0-5">1</option>
                    <option value="5-10">2</option>
                    <option value="10-20">3</option>
                    <option value="20-30">4</option>
                    <option value="30-40">5</option>
                </select>            
            </div>
            <p>€0,00</p>
            </div>
        </div>
        <div class="item">
            <img src="../../assets/fouragetent.png" alt="placeholder" />
            <div class="item-info">
                <div class="name">
                    <p>Productnaam</p>
                    <button class="remove">Verwijderen</button>
                </div>
                <div class="item-amount">
                <select class="input-limited" v-model="selectedPriceValue">
                    <option value="0-5">1</option>
                    <option value="5-10">2</option>
                    <option value="10-20">3</option>
                    <option value="20-30">4</option>
                    <option value="30-40">5</option>
                </select>            
            </div>
            <p>€0,00</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        margin-top: 2em;
        margin-bottom: 1em;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .item {
        display: flex;
        gap: 1em;
        padding: 1em;
        background-color: #f0f2f1;
        border-radius: 9px;
    }

    .item img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 9px;
    }

    .item-info {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    .name {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
    }

    .item-amount {
        display: flex;
        align-items: center;
    }

    .remove {
        background-color: #2b5740;
        color: white;
        border: none;
        border-radius: 9px;
        padding: 0.5em;
        margin-top: 1em;
    }

    .remove:hover {
        background-color: #1e3d2b;
    }
</style>